import 'package:get_it/get_it.dart';
import 'package:path/path.dart';
import 'package:flutter_channel/cli/params.dart';
import 'package:flutter_channel/generator/register/model.dart';
import 'package:flutter_channel/generator/tools.dart';
import 'package:flutter_channel/model/models.dart';
import 'package:flutter_channel/runtime/dart/UniCallbackManager.dart';
import 'package:flutter_channel/utils/log.dart';

import '../ast/ast.dart';
import 'common.dart';

const Map<String, dynamic> baseNumTypeDefaultValueMap = <String, dynamic>{
  'bool': false,
  'int': 0,
  'String': '',
  'double': 0.0,
};

dynamic defaultValue(String type) {
  var ret = baseNumTypeDefaultValueMap[type];
  if (ret == '') ret = null;
  return ret;
}

String dartComment(String content) {
  return '// $content';
}

String import(String package) {
  return "import '$package';";
}

void dartGenerateImports(InputFile inputFile, List<String> fieldTypes, Indent indent) {
  final importHistory = <String>{};
  for (var fieldType in fieldTypes) {
    if (GetIt.I.get<ModelRegister>().contains(fieldType)) {
      log('fieldType', value: fieldType);

      final model = GetIt.I.get<ModelRegister>().get(fieldType);

      if (importHistory.contains(fieldType)) {
        continue;
      }

      indent.writeln('import "${relative(model.inputFile.path, from: dirname(inputFile.path))}";');
      importHistory.add(fieldType);
    }
  }
}

String addGenericTypes(String dataType, List<String> generics) {
  switch (dataType) {
    case 'List':
      return 'List<${generics[0]}>';
    case 'Map':
      return 'Map<${generics[0]}, ${generics[1]}>';
    default:
      return dataType;
  }
}

String channelName(Module module, Method method) {
  return '$channelPrefix.${module.name}.${method.name}';
}

void dartGenerateModel(Model kClass, StringSink sink) {
  log('dartGenerateModel', value: kClass);
  final indent = Indent(sink);
  indent.writeln(dartComment(generatedCodeWarning));
  indent.writeNewline();

  final fieldTypes = <String>[];
  for (final field in kClass.fields) {
    if (!fieldTypes.contains(field.type)) {
        fieldTypes.add(field.type);
    }

    for (final generic in field.generics) {
      if (!fieldTypes.contains(generic)) {
        fieldTypes.add(generic);
      }
    }
  }
  dartGenerateImports(kClass.inputFile, fieldTypes, indent);

  indent.writeNewline();

  indent.write('class ${kClass.name} ');
  indent.scoped('{', '}', () {
    for (final field in kClass.fields) {
      final datatype = addGenericTypes(field.type, field.generics);
      indent.writeln('$datatype ${field.name};');
    }

    if (kClass.fields.isNotEmpty) {
      indent.writeNewline();
    }

    indent.write('Object encode() ');
    indent.scoped('{', '}', () {
      indent.writeln('final Map<String, dynamic> ret = <String, dynamic>{};');

      for (final field in kClass.fields) {
        indent.write("ret['${field.name}'] = ");
        if (field.type == 'List') {
          indent.addln('${field.name}?.map((e) => e?.encode())?.toList();');
        } else if (GetIt.I.get<ModelRegister>().contains(field.type)) {
          indent.addln('${field.name}?${field.dartEncodedFuncName(field.isEnum)};');
        } else {
          indent.addln('${field.name};');
        }
      }

      indent.writeln('return ret;');
    });

    indent.writeNewline();

    indent.write('static ${kClass.name} decode(Object message)');

    indent.scoped('{', '}', () {
      indent.writeln('if (message == null) return null;');
      indent.writeln(
          'final Map<String, dynamic> map = message as Map<String, dynamic>;');

      indent.writeln('return ${kClass.name}()');

      indent.nest(1, () {
        for (int index = 0; index < kClass.fields.length; index++) {
          final field = kClass.fields[index];
          indent.write('..${field.name} = ');
          if (GetIt.I.get<ModelRegister>().contains(field.type)) {
            indent.add("map['${field.name}'] == null");
            indent.addln('');
            indent.writeln('\t\t? null');
            indent.writeln(
                "\t\t:${addGenericTypes(field.type, field.generics)}${field.dartDecodedFuncName(field.isEnum, 'map[\'${field.name}\']')}"
            );
          } else {
            if (field.type == 'List') {
              indent.add("map['${field.name}'] == null");
              indent.addln('');
              indent.writeln('\t\t?[]');
              indent.writeln("\t\t:List.from(map['${field.name}'])");
              indent.writeln('\t\t\t\t?.map((e) => e == null');
              indent.writeln('\t\t\t\t\t\t? null');
              indent.writeln('\t\t\t\t\t\t: ${field.generics[0]}.decode(e))');
              indent.writeln('\t\t\t\t?.toList()');
            } else if (field.type == 'Map') {
              indent.add("map['${field.name}'] == null");
              indent.addln('');
              indent.writeln('\t\t?{}');
              indent.writeln("\t\t:${addGenericTypes(field.type, field.generics)}.from(map['${field.name}'])");
            } else {
              var type = addGenericTypes(field.type, field.generics);
              
              indent.add("map['${field.name}'] == null");
              indent.addln('');
              indent.writeln('\t\t?${defaultValue(type)}');
              indent.writeln(
                "\t\t:map['${field.name}'] as ${addGenericTypes(
                    field.type, field.generics)}",
              );
            }
          }
          indent.addln(index == kClass.fields.length - 1 ? ';' : '');
        }
      });
    });
  });
}

void dartGenerateEnum(Model kClass, StringSink sink) {
  log('dartGenerateEnum', value: kClass);
  final indent = Indent(sink);
  indent.writeln(dartComment(generatedCodeWarning));
  indent.writeNewline();

  final enumEntries = kClass.fields.where((element) => element.type == kClass.name);
  indent.write('enum ${kClass.name} ');
  indent.scoped('{', '}', () {
    for (var entry in enumEntries) {
      indent.writeln('${entry.name},');
    }
  });
}

String generateCallbackName(Module module, Method method, Parameter param) {
  return '${module.name}_${method.name}_${param.name}';
}

/// 生成 UniNativeModule 的 Dart 侧代码
void dartGenerateUniNativeModule(Module kClass, StringSink sink, InputFile file, UniAPIOptions options) {
  log('dartGenerateUniNativeModule', value: kClass);

  final indent = Indent(sink);
  indent.writeln(dartComment(generatedCodeWarning));
  indent.writeNewline();

  indent.writeln('import \'dart:async\';');
  indent.writeln('import \'package:flutter/services.dart\';');
  indent.writeln('import \'${relative(options.dartOutput + '/uniapi/UniCallback.dart', from: dirname(file.absolutePath.replaceFirst('interface', 'lib')))}\';');
  indent.writeln('import \'${relative(options.dartOutput + '/uniapi/UniCallbackManager.dart', from: dirname(file.absolutePath.replaceFirst('interface', 'lib')))}\';');
  indent.writeln('import \'${relative(options.dartOutput + '/uniapi/caches.dart', from: dirname(file.absolutePath.replaceFirst('interface', 'lib')))}\';');
  indent.writeln('');

  // generate dart model import
  final fieldTypes = <String>[];
  for (final method in kClass.methods) {
    final params = method.parameters;

    for (final param in params) {
      if (!fieldTypes.contains(param.type)) {
        fieldTypes.add(param.type);
      }

      for (final generic in param.generics) {
        if (!fieldTypes.contains(generic)) {
          fieldTypes.add(generic);
        }
      }
    }

    var returnType = method.returnValue.type;
    if (!fieldTypes.contains(returnType)) {
      fieldTypes.add(returnType);
    }
  }
  dartGenerateImports(file, fieldTypes, indent);
  indent.writeNewline();

  indent.write('class ${kClass.name} ');
  indent.scoped('{', '}', () {
    for (var method in kClass.methods) {
      if (method.name == kClass.name) {
        continue;
      }

      final argSignatures = <String>[];

      final callbackSignatures = <String>[];

      for (final param in method.parameters) {
        var generic = '';
        if (param.generics.isNotEmpty) {
          generic = '<${param.generics.join(', ')}>';
        }
        argSignatures.add('${param.type}$generic ${param.name}');
      }
      var sendArgument = 'null';
      List<String> encodedDeclaration;

      if (method.parameters.isNotEmpty) {
        sendArgument = 'encoded';

        // encodedDeclaration = 'final Object encoded = arg.encode();';
        encodedDeclaration = ['final Map<String, dynamic> encoded = {};'];
        for (final param in method.parameters) {
          if (param.type == 'UniCallback') {
            String callbackName = generateCallbackName(kClass, method, param);
            String callbackInstance = '${callbackName}_\${${param.name}.hashCode}';
            // 每个会调的实际名称是 模块名_方法名_参数名_时间戳
            callbackSignatures.add('${param.name}.callbackName = \'$callbackInstance\';');
            callbackSignatures.add('uniCallbackCache[\'$callbackInstance\'] = ${param.name};');
            // 将会调名称通过 channel 传到 Native 侧
            encodedDeclaration.add('encoded["${param.name}"] = \'$callbackInstance\';');
          } else if (GetIt.I.get<ModelRegister>().contains(param.type)) {
            encodedDeclaration.add('if (${param.name} != null) encoded["${param.name}"] = ${param.name}${param.dartEncodedFuncName(param.isEnum)};');
          } else {
            encodedDeclaration.add('if (${param.name} != null) encoded["${param.name}"] = ${param.name};');
          }
        }
      }

      indent.write('static Future<${method.returnValue.type}> ${method.name}(${argSignatures.join(', ')}) async ');
      indent.scoped('{', '}', () {

        for (final callback in callbackSignatures) {
          indent.writeln(callback);
        }

        if (encodedDeclaration != null) {
          for (final declaration in encodedDeclaration) {
            indent.writeln(declaration);
          }
        }

        indent.writeln(
            'const BasicMessageChannel<Object> channel = BasicMessageChannel<Object> (');

        indent.nest(2, () {
          indent.writeln(
              "'${channelName(kClass, method)}', StandardMessageCodec());");
        });

        String returnStatement;
        if (method.returnValue.isVoid()) {
          returnStatement = '// noop';
        } else if (GetIt.I.get<ModelRegister>().contains(method.returnValue.type)) {
          returnStatement = 'return ${method.returnValue.type}${method.returnValue.dartDecodedFuncName(method.returnValue.isEnum, 'replyMap[\'${Keys.result}\']')};';
        } else {
          returnStatement = 'return replyMap[\'${Keys.result}\'];';
        }

        indent.writeln('UniCallbackManager.getInstance();');
        indent.format("""
final Map<Object, Object> replyMap = \n\t\tawait channel.send($sendArgument) as Map<Object, Object>;
if (replyMap == null) {
\tthrow PlatformException(
\t\tcode: 'channel-error',
\t\tmessage: 'Unable to establish connection on channel.',
\t\tdetails: null,
\t);
} else if (replyMap['error'] != null) {
\tfinal Map<Object, Object> error = (replyMap['${Keys.result}']  as Map<Object, Object>);
\tthrow PlatformException(
\t\tcode: error['${Keys.errorCode}'] as String,
\t\tmessage: error['${Keys.errorMessage}'] as String,
\t\tdetails: error['${Keys.errorDetails}'],
\t);
} else {
\t$returnStatement
}""");
      });

      indent.writeNewline();
    }
  });
}

void dartGenerateCallbackManager(StringSink sink, UniAPIOptions options) {
  final indent = Indent(sink);

  GetIt.I.get<ModelRegister>().models().forEach((model) {
    // print(model.inputFile.absolutePath.replaceFirst('interface', 'lib') + '/${model.name}');
    // print((options.dartOutput + '/uniapi/'));

    indent.writeln('import \'${relative(model.inputFile.absolutePath.replaceFirst('interface', 'lib'), from: dirname(options.dartOutput + '/uniapi/CallbackManager.dart'))}\';');
  });

  var generateList = <String>[];

  generateList.add("if (callback.callbackName != callbackName) continue;");

  generateList.add("UniCallbackDisposable disposable = UniCallbackDisposable(callback);");

  for (final model in GetIt.I.get<ModelRegister>().models()) {
    generateList.add("""
if (callback.getType() == ${model.name}) {
  (callback as UniCallback<${model.name}>).onEvent(${model.name}${model.dartDecodedFuncName(model.isEnum, 'data')}, disposable);
  continue;
}    
""");
  }

  generateList.add("""
if (callback.getType() == int) {
  (callback as UniCallback<int>).onEvent(data, disposable);
  continue;
}
""");

  generateList.add("""
if (callback.getType() == String) {
  (callback as UniCallback<String>).onEvent(data, disposable);
  continue;
}
""");

  generateList.add("""
if (callback.getType() == bool) {
  (callback as UniCallback<bool>).onEvent(data, disposable);
  continue;
}
""");

  generateList.add("""
if (callback.getType() == List) {
  (callback as UniCallback<List>).onEvent(data, disposable);
  continue;
}
""");

  generateList.add("""
if (callback.getType() == Map) {
  (callback as UniCallback<Map>).onEvent(data, disposable);
  continue;
}
""");
  indent.write(dartUniCallbackManagerContent(generateList.join('\n')));
}

/// 生成 UniFlutterModule 的 Flutter 侧代码
void dartGenerateUniFlutterModule(Module kClass, StringSink sink, InputFile file, UniAPIOptions options) {
  log('dartGenerateUniFlutterModule', value: kClass);

  final indent = Indent(sink);
  indent.writeln(dartComment(generatedCodeWarning));

  indent.writeln('import \'package:flutter/services.dart\';');

  // generate dart model import
  final fieldTypes = <String>[];
  for (final method in kClass.methods) {
    final params = method.parameters;

    for (final param in params) {
      if (!fieldTypes.contains(param.type)) {
        fieldTypes.add(param.type);
      }

      for (final generic in param.generics) {
        if (!fieldTypes.contains(generic)) {
          fieldTypes.add(generic);
        }
      }
    }

    var returnType = method.returnValue.type;
    if (!fieldTypes.contains(returnType)) {
      fieldTypes.add(returnType);
    }
  }
  dartGenerateImports(file, fieldTypes, indent);
  indent.writeNewline();

  indent.write('abstract class ${kClass.name} ');
  indent.scoped('{', '}', () {
    for (final method in kClass.methods) {
      if (method.name == kClass.name) {
        continue;
      }
      final isAsync = method.isAsync;
      final returnType = isAsync ? 'Future<${method.returnValue.type}>' : method.returnValue.type;
      final argSignatures = <String>[];
      for (final param in method.parameters) {
        var generic = '';
        if (param.generics.isNotEmpty) {
          generic = '<${param.generics.join(', ')}>';
        }
        argSignatures.add('${param.type}$generic ${param.name}');
      }
      indent.writeln('$returnType ${method.name}(${argSignatures.join(', ')});');
      indent.writeNewline();
    }

    indent.write('static void setup(${kClass.name} impl) ');
    indent.scoped('{', '}', () {
      for (final method in kClass.methods) {
        if (method.name == kClass.name) {
          continue;
        }
        indent.scoped('{', '}', () {
          indent.writeln(
            'const BasicMessageChannel<Object> channel = BasicMessageChannel<Object>(\'${makeChannelName(kClass, method)}\', StandardMessageCodec());');
          indent.write('if (impl == null) ');
          indent.scoped('{', '}', () {
            indent.writeln('channel.setMessageHandler(null);');
          }, addTrailingNewline: false);
          indent.write(' else ');
          indent.scoped('{', '}', () {
            indent.write('channel.setMessageHandler((Object message) async ');
            indent.scoped('{', '});', () {
              final methodArguments = <String>[];
              for (final param in method.parameters) {
                if (GetIt.I.get<ModelRegister>().contains(param.type)) {
                  methodArguments.add('${param.type}${param.dartDecodedFuncName(param.isEnum, 'wrapped[\'${param.name}\']')}');
                } else {
                  methodArguments.add('wrapped[\'${param.name}\']');
                }
              }

              final returnType = method.returnValue.type;

              indent.writeln('Map<String, dynamic> wrapped = Map<String, dynamic>.from(message);');

              final call = 'impl.${method.name}(${methodArguments.join(', ')})';
              if (!method.isAsync) {
                if (method.returnValue.isVoid()) {
                  indent.writeln('$call;');
                  indent.writeln('return;');
                } else {
                  if (GetIt.I.get<ModelRegister>().contains(returnType)) {
                    indent.writeln('return $call${method.returnValue.dartEncodedFuncName(method.returnValue.isEnum)};');
                  } else {
                    indent.writeln('return $call;');
                  }
                }
              }

              if (method.isAsync) {
                if (GetIt.I.get<ModelRegister>().contains(returnType)) {
                  indent.writeln('return await $call${method.returnValue.dartEncodedFuncName(method.returnValue.isEnum)};');
                } else {
                  indent.writeln('return await $call;');
                }
              }
            });
          });
        });
      }
    });
  });
}
