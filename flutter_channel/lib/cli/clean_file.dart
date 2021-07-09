import 'dart:io';

import 'package:flutter_channel/ast/ast.dart';
import 'package:flutter_channel/cli/params.dart';
import 'package:flutter_channel/constant/constants.dart';
import 'package:flutter_channel/model/input_file.dart';



const REGISTER = 'register';

final _whiteList = [
  'UniAPI'
];

final _blackList = [
  '.DS_Store'
];

/// 输入一个文件，判断它是否属于 UniAPI 接口文件列表
bool _isFileInFileList(InputFile file, List<InputFile> fileList) {
  for (final white in _whiteList) {
    if (file.name.contains(white)) {
      return true;
    }
  }

  var fileNameFixed = file.path.split('.')[0].toLowerCase();

  // 判断是否是 Java 的 *Register 文件，如果是的话，也不做处理
  if (fileNameFixed.length > REGISTER.length && fileNameFixed.substring(fileNameFixed.length - REGISTER.length) == REGISTER) {
    fileNameFixed = fileNameFixed.replaceFirst(REGISTER, '', fileNameFixed.length - REGISTER.length);
  }

  for (final interfaceFile in fileList) {
    final interfaceFileName = interfaceFile.path.split('.')[0].toLowerCase();
    if (fileNameFixed == interfaceFileName) {
      return true;
    }
  }

  return false;
}

/// 输入工程文件和 Ast，找出过时文件
List<InputFile> _findNotUniAPIFiles(
    List<InputFile> projectFiles,
    List<Module> uniNativeModules,
    List<Module> uniFlutterModules,
    List<Model> uniModels) {

  final ret = <InputFile>[];

  for (final file in projectFiles) {
    // 像 .DS_Store 这种文件也被标记为过时文件
    if (_blackList.contains(file.name)) {
      ret.add(file);
      continue;
    }

    final content = File(file.absolutePath).readAsStringSync();
    // 判断是否是 UniAPI 文件
    if (content.contains(Constants.generatedCodeWarning)) {
      if (!_isFileInFileList(file, uniNativeModules.map((e) => e.inputFile).toList())
          && !_isFileInFileList(file, uniFlutterModules.map((e) => e.inputFile).toList())
          && !_isFileInFileList(file, uniModels.map((e) => e.inputFile).toList())) {
        ret.add(file);
      }
    }
  }

  return ret;
}

// 清理过时的接口文件
Future<void> cleanOutdatedUniApiFiles (
    UniAPIOptions options,
    String tempDirPath,
    List<Module> uniNativeModules,
    List<Module> uniFlutterModules,
    List<Model> uniModels) async {
  final androidPath = options.javaOutputPath;
  final flutterPath = options.dartOutput;
  final iosPath = options.objcOutput;

  final androidOutdatedFiles = <InputFile>[];
  final flutterOutdatedFiles = <InputFile>[];
  final iosOutdatedFiles = <InputFile>[];

  // 扫描 Android 工程下的过时接口文件
  if (androidPath.isNotEmpty) {
    final androidFiles = await parseInputFiles(androidPath, tempDirPath);
    androidOutdatedFiles.addAll(
        _findNotUniAPIFiles(
            androidFiles, uniNativeModules, uniFlutterModules, uniModels));
  }

  if (flutterPath.isNotEmpty) {
    final flutterFiles = await parseInputFiles(flutterPath, tempDirPath);
    flutterOutdatedFiles.addAll(
      _findNotUniAPIFiles(
          flutterFiles, uniNativeModules, uniFlutterModules, uniModels));
  }

  if (iosPath.isNotEmpty) {
    final iosFiles = await parseInputFiles(iosPath, tempDirPath);
    iosOutdatedFiles.addAll(
      _findNotUniAPIFiles(
          iosFiles, uniNativeModules, uniFlutterModules, uniModels));
  }

  if (androidOutdatedFiles.isEmpty && flutterOutdatedFiles.isEmpty && iosOutdatedFiles.isEmpty) {} else {
    print('发现过时的接口生成代码：');

    if (flutterOutdatedFiles.isNotEmpty) {
      print('Flutter:');
      flutterOutdatedFiles.forEach((e) => print('\t${e.absolutePath}'));
    }

    if (androidOutdatedFiles.isNotEmpty) {
      print('Android:');
      androidOutdatedFiles.forEach((e) => print('\t${e.absolutePath}'));
    }

    if (iosOutdatedFiles.isNotEmpty) {
      print('iOS:');
      iosOutdatedFiles.forEach((e) => print('\t${e.absolutePath}'));
    }

    print('\n 是否删除？(Y/N)');
    final answer = stdin.readLineSync();

    if (answer != 'Y' && answer != 'y') {
      return;
    }

    for (final file in flutterOutdatedFiles) {
      print('delete ${file.absolutePath}');
      File(file.absolutePath).deleteSync();
    }

    for (final file in androidOutdatedFiles) {
      print('delete ${file.absolutePath}');
      File(file.absolutePath).deleteSync();
    }

    for (final file in iosOutdatedFiles) {
      print('delete ${file.absolutePath}');
      File(file.absolutePath).deleteSync();
    }

    // 过时接口删除完成后，再删除空目录
    if (androidPath.isNotEmpty) {
      final dirs = await getDirsUnderPath(androidPath);
      dirs.forEach((dir) {
        final d = Directory(dir.path);
        if (d.listSync().isEmpty) {
          d.deleteSync();
        }
      });
    }

    if (iosPath.isNotEmpty) {
      final dirs = await getDirsUnderPath(iosPath);
      dirs.forEach((dir) {
        final d = Directory(dir.path);
        if (d.listSync().isEmpty) {
          d.deleteSync();
        }
      });
    }

    if (flutterPath.isNotEmpty) {
      final dirs = await getDirsUnderPath(flutterPath);
      dirs.forEach((dir) {
        final d = Directory(dir.path);
        if (d.listSync().isEmpty) {
          d.deleteSync();
        }
      });
    }

  }
}
