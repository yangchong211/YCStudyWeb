import 'dart:io';

import 'package:path/path.dart';
import 'package:flutter_channel/cli/params.dart';
import 'package:flutter_channel/ast/ast.dart';
import 'package:flutter_channel/generator/common.dart';
import 'package:flutter_channel/model/models.dart';

const REGISTER = 'Register';

final _whiteList = [
  'UniAPI'
];

bool _isFileInFileList(String fileName, List<String> fileList) {
  if (_whiteList.contains(fileName)) return true;

  var fileNameFixed = '$fileName';

  // 判断是否是 Java 的 *Register 文件，如果是的话，也不做处理
  if (fileName.length > REGISTER.length && fileName.substring(fileName.length - REGISTER.length) == REGISTER) {
    fileNameFixed = fileNameFixed.replaceFirst(REGISTER, '', fileName.length - REGISTER.length);
  }

  return fileList.contains(fileNameFixed);
}

List<InputFile> _findNotUniAPIFiles(
    List<InputFile> projectFiles,
    List<Module> uniNativeModules,
    List<Module> uniFlutterModules,
    List<Model> uniModels) {

  final ret = <InputFile>[];

  for (final file in projectFiles) {
    final content = File(file.absolutePath).readAsStringSync();
    // 判断是否是 UniAPI 文件
    if (content.contains(generatedCodeWarning)) {
      final fileName = basenameWithoutExtension(file.absolutePath);

      if (!_isFileInFileList(fileName, uniNativeModules.map((e) => e.name).toList())
          && !_isFileInFileList(fileName, uniFlutterModules.map((e) => e.name).toList())
          && !_isFileInFileList(fileName, uniModels.map((e) => e.name).toList())) {
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
  }
}
