import 'dart:async';
import 'dart:io';
import 'dart:isolate';

import 'package:flutter_channel/cli/params.dart';
import 'package:flutter_channel/runtime/dart/UniCallback.dart';
import 'package:flutter_channel/runtime/dart/UniModel.dart';
import 'package:flutter_channel/runtime/dart/caches.dart';
import 'package:flutter_channel/runtime/java/UniModel.dart';
import 'package:flutter_channel/utils/file.dart';
import 'package:flutter_channel/utils/log.dart';

import 'package:path/path.dart' as path;

/// 将一些预埋文件拷贝到工程目录
void copyPreCreatedFiles(UniAPIOptions options) {
  var createAndWrite = (String path, String content) {
    final file = File(path);
    file.createSync(recursive: true);
    file.writeAsStringSync(content);
  };

  // copy java runtime to java_output
  createAndWrite(
      path.join(options.javaOutputPath, 'uniapi', 'UniModel.java'),
      javaUniModelContent(options.javaPackageName));

  // copy dart runtime to dart_output
  createAndWrite(
      path.join(options.dartOutput, 'uniapi', 'caches.dart'),
      dartCachesContent);
  createAndWrite(
      path.join(options.dartOutput, 'uniapi', 'UniCallback.dart'),
      dartUniCallbackContent);
  createAndWrite(
      path.join(options.dartOutput, 'uniapi', 'Model.dart'),
      dartUniModelContent);
}

/// 命令行的执行入口
Future<void> cli(List<String> args) async {
  // 解析命令行参数
  final options = parseUniAPIOption(args);

  // 将一些预埋文件拷贝到工程目录
  copyPreCreatedFiles(options);

  String projectPath = options.projectPath;


  // 生成代码并通过 Isolate 执行
  final Directory tempDir = createTempDir();

  var inputFiles = await parseInputFiles(projectPath, tempDir.path);
  log('inputFiles', value: inputFiles.join('\n'));

  var code = """
${inputFiles.map((file) => "import '${file.relativePath}';").toList().join('\n')}
import 'dart:io';
import 'dart:isolate';
import 'package:flutter_channel/cli/worker.dart';

void main(List<String> args, SendPort sendPort) async {
  sendPort.send(await isolateRun(args));
}
""";

  log('code', value: code);

  var tempFile = File(path.join(tempDir.path, '_flutter_channel_temp_.dart'));
  tempFile.writeAsStringSync(code);

  final receivePort = ReceivePort();

  args.add('--temp_dir=${tempDir.path}');
  Isolate.spawnUri(Uri.file(tempFile.path), args, receivePort.sendPort);

  final completer = Completer<int>();

  receivePort.listen((message) {
    try {
      completer.complete(message as int);
    } catch (exception) {
      completer.completeError(exception);
    }
  });
  final exitCode = await completer.future;
  tempDir.deleteSync(recursive: true);
  exit(exitCode);
}
