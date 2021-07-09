import 'dart:mirrors';

import 'package:flutter_channel/model/input_file.dart';


enum ApiLocation {
  /// API用于调用在主机上定义的函数
  host,
  /// 该API用于调用Flutter中定义的函数
  flutter,
}

class Node {

}

/// 方法参数
class Parameter extends Node with Serializable {
  String name;
  String type;
  List<String> generics;
  bool isEnum;

  Parameter(this.name, this.type, {this.generics, this.isEnum,});
}

/// 方法
class Method extends Node {
  Method({
    this.name,
    this.returnValue,
    this.parameters,
    this.ignoreError,
    this.isAsync,
    this.returnGenerics
  });

  String name;
  ReturnValue returnValue;
  List<String> returnGenerics;

  List<Parameter> parameters;

  bool ignoreError;

  bool isAsync;
}

/// 模块
class Module extends Node {
  Module({
    this.name,
    this.methods,
    this.inputFile
  });

  /// The name of the API.
  String name;

  /// List of methods inside the API.
  List<Method> methods;

  InputFile inputFile;

  @override
  String toString() {
    return '(Module name:$name, methods: $methods)';
  }
}

/// Model 字段
class Field extends Node  with Serializable {
  Field({
    this.name,
    this.type,
    this.generics,
    this.isEnum,
  });

  String name;
  String type;
  List<String> generics;
  bool isEnum;

  @override
  String toString() {
    return '(Field name:$name)';
  }
}

/// 方法返回值
class ReturnValue extends Node with Serializable {
  ReturnValue({
    this.type,
    this.isEnum,
  });

  String type;
  bool isEnum;

  bool isVoid() => type == 'void';

  @override
  String toString() {
    return '(ReturnValue name:$type)';
  }
}

/// 模型
class Model extends Node with Serializable {
  String name;
  List<Field> fields;
  InputFile inputFile;
  bool isEnum;

  Model({
    this.name,
    this.fields,
    this.inputFile,
    this.isEnum,
  });

}

mixin Serializable {
  String javaEncodedFuncName(bool isEnum) => isEnum ? '.ordinal()' : '.toMap()';
  String javaDecodedFuncName(bool isEnum, String template) => isEnum ? '.values()[$template]' : '.fromMap($template)';
  String dartEncodedFuncName(bool isEnum) => isEnum ? '.index' : '.encode()';
  String dartDecodedFuncName(bool isEnum, String template) => isEnum ? '.values[$template]' : '.decode($template)';
}

extension Enum on TypeMirror {
  bool get isEnum => this is ClassMirror && (this as ClassMirror).isEnum;
}
