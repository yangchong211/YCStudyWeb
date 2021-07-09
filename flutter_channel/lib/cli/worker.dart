import 'dart:io';

import 'package:flutter_channel/mirrors/mirrors.dart';
import 'package:get_it/get_it.dart';
import 'package:flutter_channel/api/api.dart';
import 'package:flutter_channel/cli/params.dart';
import 'package:flutter_channel/cli/worker_function/clean_outdated.dart';
import 'package:flutter_channel/ast/ast.dart';
import 'package:flutter_channel/generator/dart.dart';
import 'package:flutter_channel/generator/java.dart';
import 'package:flutter_channel/generator/objc.dart';
import 'package:flutter_channel/generator/parse.dart';
import 'package:flutter_channel/generator/register/model.dart';
import 'package:flutter_channel/model/models.dart';
import 'package:flutter_channel/utils/log.dart';

bool isUniModel(ClassMirror classMirror) {
  for (final InstanceMirror instance in classMirror.metadata) {
    if (instance.reflectee is UniModel) {
      return true;
    }
  }
  return false;
}

bool isUniNativeModule(ClassMirror classMirror) {
  if (classMirror.isAbstract == false) {
    return false;
  }

  for (final InstanceMirror instance in classMirror.metadata) {
    if (instance.reflectee is UniNativeModule) {
      return true;
    }
  }

  return false;
}

bool isUniFlutterModule(ClassMirror classMirror) {
  if (classMirror.isAbstract == false) {
    return false;
  }

  for (final InstanceMirror instance in classMirror.metadata) {
    if (instance.reflectee is UniFlutterModule) {
      return true;
    }
  }

  return false;
}

Future<void> runGenerator(String output, void Function(IOSink) func) async {
  IOSink sink;
  File file;
  if (output == 'stdout') {
    sink = stdout;
  } else {
    file = File(output);
    sink = file.openWrite();
  }
  func(sink);
  await sink.flush();
}

InputFile findInputFileFromModel(List<InputFile> files, String name) {
  for (var file in files) {
    if (file.name == name) {
      return file;
    }
  }

  return null;
}

InputFile findInputFileFromModule(List<InputFile> files, Module kClass) {
  for (var file in files) {
    if (file.name == kClass.name) {
      return file;
    }
  }

  return null;
}

Future<int> isolateRun(List<String> args) async {
  log('isolateRun', value: args);

  // 解析命令行参数
  final options = parseUniAPIOption(args);
  final tempDir = Directory(options.temp_dir);
  // 读取接口目录下所有文件
  final files = await parseInputFiles(options.projectPath, tempDir.path);

  List<ClassMirror> uniNativeModules = [];
  List<ClassMirror> uniFlutterModules = [];
  List<ClassMirror> uniModels = [];

  // 通过反射系统，扫描 Dart VM 中的所有 uniNativeModules、uniFlutterModules、uniModels
  for (final LibraryMirror library in currentMirrorSystem().libraries.values) {
    for (final DeclarationMirror declaration in library.declarations.values) {
      if (declaration is ClassMirror) {
        if (isUniNativeModule(declaration)) {
          uniNativeModules.add(declaration);
        }
        if (isUniFlutterModule(declaration)) {
          uniFlutterModules.add(declaration);
        }
        if (isUniModel(declaration)) {
          uniModels.add(declaration);
        }
      }
    }
  }

  log('uniNativeModules', value: uniNativeModules);
  log('uniFlutterModules', value: uniFlutterModules);
  log('uniModels', value: uniModels);

  /// AST 转换
  GetIt.I.registerSingleton(ModelRegister());

  // Model AST 解析
  uniModels.forEach((model) {
    GetIt.I.get<ModelRegister>().registerModel(parseModel(model,
        findInputFileFromModel(files, MirrorSystem.getName(model.simpleName))));
  });

  // uniNativeModules AST 解析
  final uniNativeModuleASTs =
  uniNativeModules.map((e) => parseModule(e)).toList();
  log('uniNativeModuleASTs', value: uniNativeModuleASTs);

  // uniFlutterModules AST 解析
  final uniFlutterModuleAst = uniFlutterModules.map((e) => parseModule(e)).toList();

  /// 清理过时的接口文件
  await cleanOutdatedUniApiFiles(
      options, tempDir.path,
      uniNativeModuleASTs,
      uniFlutterModuleAst,
      GetIt.I.get<ModelRegister>().models());

  /// Model 生成
  // dart output
  for (var model in GetIt.I.get<ModelRegister>().models()) {
    final modelFile = File(
        options.dartOutput + '/' + model.inputFile.path);
    modelFile.createSync(recursive: true);
    await runGenerator(
        modelFile.path, (StringSink sink) => model.isEnum ?
    dartGenerateEnum(model, sink) : dartGenerateModel(model, sink));
  }

  // java output
  for (var model in GetIt.I.get<ModelRegister>().models()) {
    final modelFile = File(options.javaOutputPath + '/' + model.inputFile.javaPath());
    modelFile.createSync(recursive: true);
    await runGenerator(modelFile.path,
        (StringSink sink) => model.isEnum ?
        javaGenerateEnum(model, sink, options) : javaGenerateModel(model, sink, options));
  }

  // oc output - model
  for (var model in GetIt.I.get<ModelRegister>().models()) {
    // oc header handle
    final modelHeaderFile = File(
        options.objcOutput + '/' + model.inputFile.objcHeaderPath());
    modelHeaderFile.createSync(recursive: true);
    await runGenerator(
        modelHeaderFile.path, (StringSink sink) => objcGenerateModelHeader(model, sink, options));

    // oc source handle
    if (model.isEnum == false) {
      final modelSourceFile = File(
        options.objcOutput + '/' + model.inputFile.objcSourcePath());
      modelSourceFile.createSync(recursive: true);
      await runGenerator(
        modelSourceFile.path, (StringSink sink) => objcGenerateModelSource(model, sink, options));
    }
  }

  /// uniNativeModules 生成
  // dart output
  for (var module in uniNativeModuleASTs) {
    final inputFile = findInputFileFromModule(files, module);
    final file = File(
        options.dartOutput + '/' + findInputFileFromModule(files, module).path);
    file.createSync(recursive: true);
    await runGenerator(file.path,
        (StringSink sink) => dartGenerateUniNativeModule(module, sink, inputFile, options));
  }

  // java output
  for (var module in uniNativeModuleASTs) {
    final inputFile = findInputFileFromModule(files, module);
    final file = File(options.javaOutputPath + '/' + inputFile.javaPath());
    file.createSync(recursive: true);
    await runGenerator(
        file.path,
        (StringSink sink) =>
            javaGenerateUniNativeModule(module, sink, inputFile, options));
    final fileRegister =
        File(options.javaOutputPath + '/' + inputFile.javaNativeRegisterPath());
    fileRegister.createSync(recursive: true);
    await runGenerator(
        fileRegister.path,
        (StringSink sink) => javaGenerateUniNativeModuleRegister(
            module, sink, inputFile, options));
  }

  // oc output - uninative
  for (var module in uniNativeModuleASTs) {
    // oc header handler
    final inputFile = findInputFileFromModule(files, module);

    final nativeHeaderFile = File(options.objcOutput + '/' + inputFile.objcHeaderPath());
    nativeHeaderFile.createSync(recursive: true);
    await runGenerator(
        nativeHeaderFile.path,
        (StringSink sink) =>
            objcGenerateUniNativeHeader(module, sink, inputFile, options));

    // oc source handler
    final nativeSourceFile = File(options.objcOutput + '/' + inputFile.objcSourcePath());
    nativeSourceFile.createSync(recursive: true);
    await runGenerator(
        nativeSourceFile.path,
        (StringSink sink) =>
            objcGenerateUniNativeSource(module, sink, inputFile, options));
  }

  final uniApiCallbackManagerFile = File(options.dartOutput + '/uniapi/UniCallbackManager.dart');
  uniApiCallbackManagerFile.createSync(recursive: true);
  await runGenerator(
      uniApiCallbackManagerFile.path,
          (StringSink sink) =>
          dartGenerateCallbackManager(sink, options));

  /// uniFlutterModules
  // dart output
  for (final module in uniFlutterModuleAst) {
    final inputFile = findInputFileFromModule(files, module);
    final file = File(
      options.dartOutput + '/' + findInputFileFromModule(files, module).path);
    file.createSync(recursive: true);
    await runGenerator(file.path,
            (StringSink sink) => dartGenerateUniFlutterModule(module, sink, inputFile, options));
  }

  // java output
  for (final module in uniFlutterModuleAst) {
    final inputFile = findInputFileFromModule(files, module);
    final file = File(
      options.javaOutputPath + '/' + inputFile.javaPath());
    file.createSync(recursive: true);
    await runGenerator(file.path, (StringSink sink) => javaGenerateUniFlutterModule(module, sink, inputFile, options));
  }

  // oc output - uniflutter
  for (final module in uniFlutterModuleAst) {
    // oc header handler
    final inputFile = findInputFileFromModule(files, module);

    // oc header handler
    final nativeHeaderFile = File(options.objcOutput + '/' + inputFile.objcHeaderPath());
    nativeHeaderFile.createSync(recursive: true);
    await runGenerator(
        nativeHeaderFile.path,
        (StringSink sink) =>
            objcGenerateUniFlutterHeader(module, sink, inputFile, options));

    // oc source handler
    final nativeSourceFile = File(options.objcOutput + '/' + inputFile.objcSourcePath());
    nativeSourceFile.createSync(recursive: true);
    await runGenerator(
        nativeSourceFile.path,
        (StringSink sink) =>
            objcGenerateUniFlutterSource(module, sink, inputFile, options));
  }

  /// UniAPI
  // oc UniAPI header
  final uniAPIHeaderFile = File(options.objcOutput + '/' + 'UniAPI.h');
  uniAPIHeaderFile.createSync(recursive: true);
  await runGenerator(
      uniAPIHeaderFile.path,
      (StringSink sink) =>
          objcGenerateUniAPIHeader(sink, options));

  // oc UniAPI source
  final uniAPISourceFile = File(options.objcOutput + '/' + 'UniAPI.m');
  uniAPISourceFile.createSync(recursive: true);
  await runGenerator(
      uniAPISourceFile.path,
      (StringSink sink) =>
          objcGenerateUniAPISource(sink, options));

  // java output
  final uniAPIJavaFile = File(options.javaOutputPath + '/UniAPI.java');
  await runGenerator(
      uniAPIJavaFile.path,
          (StringSink sink) => javaGenerateUniAPI(sink, uniAPIJavaFile, options));
  
  print('Finished. \\(≧▽≦)/');

  return 0;
}
