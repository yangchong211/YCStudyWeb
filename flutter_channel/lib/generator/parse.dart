import 'dart:mirrors';

import 'package:flutter_channel/api/api.dart';
import 'package:flutter_channel/ast/ast.dart';
import 'package:flutter_channel/model/input_file.dart';


Model parseModel(ClassMirror classMirror, InputFile inputFile) {
  var fields = <Field>[];

  for (final declaration in classMirror.declarations.values) {
    if (declaration is VariableMirror) {
      fields.add(Field(
        name: MirrorSystem.getName(declaration.simpleName),
        type: MirrorSystem.getName(declaration.type.simpleName),
        generics: declaration.type.typeArguments.map((e) => MirrorSystem.getName(e.simpleName)).toList(),
        isEnum: declaration.type.isEnum,
      ));
    }
  }

  return Model(
    name: MirrorSystem.getName(classMirror.simpleName),
    fields: fields,
    inputFile: inputFile,
    isEnum: classMirror.isEnum,
  );
}

Module parseModule(ClassMirror classMirror) {
  var methods = <Method>[];

  for (final declaration in classMirror.declarations.values) {
    if (declaration is MethodMirror) {
      var parameters = <Parameter>[];
      for (final param in declaration.parameters) {
        var isEnum = param.type.isEnum || (param.type.typeArguments.isNotEmpty && param.type.typeArguments[0].isEnum);
        parameters.add(Parameter(
          MirrorSystem.getName(param.simpleName),
          MirrorSystem.getName(param.type.simpleName),
          generics: param.type.typeArguments.map((e) => MirrorSystem.getName(e.simpleName)).toList(),
          isEnum: isEnum,
        ));
      }
      var ignoreError = false;
      for (final annotation in declaration.metadata) {
        if (annotation.reflectee is IgnoreError) {
          ignoreError = true;
        }
      }

      var isAsync = false;
      var returnType = MirrorSystem.getName(declaration.returnType.simpleName);
      var returnIsEnum = false;
      var returnGenerics = declaration.returnType.typeArguments.map((e) => MirrorSystem.getName(e.simpleName)).toList();
      if (returnType == 'Future') {
        returnType = MirrorSystem.getName(declaration.returnType.typeArguments[0].simpleName);
        returnGenerics = declaration.returnType.typeArguments[0].typeArguments.map((e) => MirrorSystem.getName(e.simpleName)).toList();
        isAsync = true;
        returnIsEnum = declaration.returnType.typeArguments[0].isEnum;
      } else {
        returnIsEnum = declaration.returnType.isEnum;
      }
      methods.add(Method(
        name: MirrorSystem.getName(declaration.simpleName),
        returnValue: ReturnValue(type: returnType, isEnum: returnIsEnum),
        parameters: parameters,
        ignoreError: ignoreError,
        returnGenerics: returnGenerics,
        isAsync: isAsync,
      ));
    }
  }

  return Module(
    name: MirrorSystem.getName(classMirror.simpleName),
    methods: methods,
  );
}