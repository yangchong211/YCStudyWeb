/// Dart 基本类型 AST

/// 类型基类
abstract class BaseType<T> {
  final T value;

  BaseType(this.value);
}

/// Dart 整型
class ASTInt extends BaseType<int> {
  ASTInt(int value) : super(value);
}

/// Dart 字符串
class ASTString extends BaseType<String> {
  ASTString(String value) : super(value);
}

/// Dart 布尔型
class ASTBool extends BaseType<bool> {
  ASTBool(bool value) : super(value);
}

/// Dart 列表
class ASTList extends BaseType<List> {
  ASTList(List value) : super(value);
}

/// Dart 字典
class ASTMap extends BaseType<Map> {
  ASTMap(Map value) : super(value);
}


