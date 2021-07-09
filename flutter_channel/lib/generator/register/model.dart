import '../../ast/ast.dart';

class ModelRegister {
  final register = <String, Model>{};

  void registerModel(Model model) {
    assert(!register.containsKey(model.name));

    register[model.name] = model;
  }

  List<Model> models() {
    return register.values.toList();
  }

  bool contains(String type) {
    return register.containsKey(type);
  }

  Model get(String name) {
    return register[name];
  }
}