
import 'dart:async';
import 'dart:io';
import 'package:path/path.dart' as path;

class UniFileUtils{

  static Future<List<FileSystemEntity>> dirContents(Directory dir,
      {bool recursive = false}) async {
    var files = <FileSystemEntity>[];
    var completer = Completer<List<FileSystemEntity>>();
    var lister = dir.list(recursive: recursive);
    lister.listen((file) => files.add(file),
        onDone: () => completer.complete(files));
    return completer.future;
  }

  static Directory createTempDir() {
    return Directory.systemTemp.createTempSync('uni_api.');
  }

  /// This creates a relative path from `from` to `input`, the output being a
  /// posix path on all platforms.
  static String posixRelative(String input, {String from}) {
    final context = path.Context(style: path.Style.posix);
    final rawInputPath = input;
    final absInputPath = File(rawInputPath).absolute.path;
    // By going through URI's we can make sure paths can go between drives in
    // Windows.
    final inputUri = path.toUri(absInputPath);
    final posixAbsInputPath = context.fromUri(inputUri);
    final tempUri = path.toUri(from);
    final posixTempPath = context.fromUri(tempUri);
    return context.relative(posixAbsInputPath, from: posixTempPath);
  }

}