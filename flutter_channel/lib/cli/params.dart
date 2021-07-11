import 'dart:io';

import 'package:args/args.dart';
import 'package:flutter_channel/model/input_file.dart';
import 'package:flutter_channel/utils/file_utils.dart';

class UniAPIOptions {
  UniAPIOptions();

  // Path of the interface declaration project
  String projectPath;

  // Path for java outputting inside the Android project
  String javaOutputPath;

  String javaPackageName;

  // Path for dart outputting inside the Flutter project
  String dartOutput;

  // Path for Objective-C outputting inside the iOS project
  String objcOutput;

  String temp_dir;

  factory UniAPIOptions.fromParser(ArgResults results) {
    var ret = UniAPIOptions();
    ret.projectPath = getParams(results, 'input');

    ret.javaOutputPath = getParams(results, 'java_out');
    ret.javaPackageName = getParams(results, 'java_package');

    ret.objcOutput = getParams(results, 'oc_out');

    ret.temp_dir = getParams(results, 'temp_dir');
    ret.dartOutput = getParams(results, 'dart_out');
    return ret;
  }

  static String getParams(ArgResults results, String key) {
    try {
      return results[key];
    } catch (exception) {
      return null;
    }
  }
}

ArgParser _argParser = ArgParser()
  ..addOption('input', help: 'REQUIRED: Root path to the int erface')
  ..addOption('java_out', help: 'Path to java directory')
  ..addOption('java_package')
  ..addOption('oc_out', help: 'Path to ios directory')
  ..addOption('dart_out', help: 'Path to flutter directory')
  ..addOption('temp_dir');

UniAPIOptions parseUniAPIOption(List<String> args) {
  var results = _argParser.parse(args);
  return UniAPIOptions.fromParser(results);
}

Future<List<InputFile>> parseInputFiles(
    String projectPath, String tempDir) async {
  var files = await UniFileUtils.dirContents(Directory(projectPath), recursive: true);
  files =
      files.where((file) => FileSystemEntity.isFileSync(file.path)).toList();
  return files.map((file) {
    return InputFile(
        path: UniFileUtils.posixRelative(file.path, from: projectPath),
        absolutePath: file.path,
        relativePath: UniFileUtils.posixRelative(file.path, from: tempDir));
  }).toList();
}

Future<List<FileSystemEntity>> getDirsUnderPath(String projectPath) async {
  var files = await UniFileUtils.dirContents(Directory(projectPath), recursive: true);
  files = files.where((file) => FileSystemEntity.isDirectorySync(file.path)).toList();
  return files;
}
