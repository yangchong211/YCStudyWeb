class InputFile {
  final String path;
  final String absolutePath;
  final String relativePath;
  String name;
  List<String> parts;

  InputFile({this.path, this.absolutePath, this.relativePath}) {
    parts = path.split('/');
    parts.removeLast();

    name = path.split('/')[parts.length].replaceAll('.dart', '');
  }

  bool sameParts(InputFile inputFile) {
    if (parts.length != inputFile.parts.length) {
      return false;
    }

    for (var i = 0; i < parts.length; i++) {
      if (parts[i] != inputFile.parts[i]) {
        return false;
      }
    }

    return true;
  }

  String javaPath() {
    var ret = <String>[];
    ret.addAll(parts);
    ret.add(name + '.java');
    return ret.join('/');
  }

  String objcHeaderPath() {
    var ret = <String>[];
    ret.addAll(parts);
    ret.add(name + '.h');
    return ret.join('/');
  }

  String objcSourcePath() {
    var ret = <String>[];
    ret.addAll(parts);
    ret.add(name + '.m');
    return ret.join('/');
  }

  String javaNativeRegisterPath() {
    var ret = <String>[];
    ret.addAll(parts);
    ret.add(name + "Register.java");
    return ret.join('/');
  }

  String javaPackagePostfix() {
    return parts.join('.');
  }

  @override
  String toString() {
    return '[path=$path][absolutePath=$absolutePath][relativePath=$relativePath]';
  }
}
