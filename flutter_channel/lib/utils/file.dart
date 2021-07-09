import 'dart:async';
import 'dart:io';
import 'package:path/path.dart' as path;

Future<List<FileSystemEntity>> dirContents(Directory dir,
    {bool recursive = false}) async {
  var files = <FileSystemEntity>[];
  var completer = Completer<List<FileSystemEntity>>();
  var lister = dir.list(recursive: recursive);
  lister.listen((file) => files.add(file),
      onDone: () => completer.complete(files));
  return completer.future;
}

Directory createTempDir() {
  return Directory.systemTemp.createTempSync('uni_api.');
}

/// This creates a relative path from `from` to `input`, the output being a
/// posix path on all platforms.
String posixRelative(String input, {String from}) {
  final path.Context context = path.Context(style: path.Style.posix);
  final String rawInputPath = input;
  final String absInputPath = File(rawInputPath).absolute.path;
  // By going through URI's we can make sure paths can go between drives in
  // Windows.
  final Uri inputUri = path.toUri(absInputPath);
  final String posixAbsInputPath = context.fromUri(inputUri);
  final Uri tempUri = path.toUri(from);
  final String posixTempPath = context.fromUri(tempUri);
  return context.relative(posixAbsInputPath, from: posixTempPath);
}