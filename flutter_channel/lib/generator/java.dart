import 'dart:io';
import 'dart:math';

import 'package:get_it/get_it.dart';
import 'package:flutter_channel/cli/params.dart';
import 'package:flutter_channel/ast/ast.dart';
import 'package:flutter_channel/generator/common.dart';
import 'package:flutter_channel/generator/register/model.dart';
import 'package:flutter_channel/generator/tools.dart';
import 'package:flutter_channel/model/models.dart';
import 'package:flutter_channel/utils/log.dart';

const Map<String, String> javaTypeMapper = <String, String>{
  'bool': 'boolean',
  'int': 'int',
  'String': 'String',
  'double': 'double',
  'Uint8List': 'byte[]',
  'Int32List': 'int[]',
  'Int64List': 'long[]',
  'Float64List': 'double[]',
  'List': 'List<Object>',
  'Map': 'Map<Object, Object>'
};

const Map<String, String> javaGenericBoxing = {
  'int': 'Integer',
  'long': 'Long',
  'double': 'Double',
  'boolean': 'Boolean',
  'bool': 'Boolean',
  'void': 'Void'
};

const Map<String, String> dartToJavaReturnMap = {
  'void': 'void',
  'bool': 'boolean',
  'int': 'int',
  'String': 'String',
  'double': 'double',
};

String dartTypeNullToJavaDefaultValue(String dartType) {
  if (dartType == 'bool') return 'false';
  if (dartType == 'int') return '0';
  if (dartType == 'String') return '""';
  if (dartType == 'double') return '0';
  if (dartType == 'List') return 'new ArrayList<>()';
  if (dartType == 'Map') return 'new HashMap<>()';
  return 'null';
}

String boxing(String type, {List<String> generics}) {
  if (dartToJavaReturnMap.keys.contains(type)) {
    return dartToJavaReturnMap[type];
  }

  if (generics == null || generics.isEmpty) return type;

  return type + '<' + generics.map((e) => javaGenericBoxing[e] ?? e).join(', ') + '>';
}

String dartToJavaReturnMapper(String type, {List<String> generics}) {
  if (dartToJavaReturnMap.keys.contains(type)) {
    return dartToJavaReturnMap[type];
  }

  if (generics == null || generics.isEmpty) return type;

  return type + '<' + generics.map((e) => javaGenericBoxing[e] ?? e).join(', ') + '>';
}

String dartToJavaGenericMapper(String type, {List<String> generics}) {
  if (javaGenericBoxing.keys.contains(type)) {
    return javaGenericBoxing[type];
  }

  if (generics == null || generics.isEmpty) return type;

  return type + '<' + generics.map((e) => javaGenericBoxing[e] ?? e).join(', ') + '>';
}

String typeDartToJava(String datatype) {
  return javaTypeMapper[datatype];
}

String package(String name) {
  return 'package $name;';
}

String javaComment(String content) {
  return '// $content';
}

String getMethod(Indent indent, Field field) {
  var type = getHostDatatype(field, GetIt.I.get<ModelRegister>().models(), typeDartToJava).datatype;
  var name = field.name.substring(0, 1).toUpperCase() + field.name.substring(1);
  indent.writeln('public ${dartToJavaReturnMapper(field.type, generics: field.generics)} get$name() { return ${field.name}; }');
}

String setMethod(Indent indent, Field field) {
  var type = getHostDatatype(field, GetIt.I.get<ModelRegister>().models(), typeDartToJava).datatype;
  var name = field.name.substring(0, 1).toUpperCase() + field.name.substring(1);
  indent.writeln('public void set$name(${dartToJavaReturnMapper(field.type, generics: field.generics)} value) { this.${field.name} = value; }');
}

void javaGenerateImports(InputFile inputFile, List<String> fieldTypes, Indent indent, String packageName) {
  final importHistory = <String>{};
  for (var fieldType in fieldTypes) {
    if (GetIt.I.get<ModelRegister>().contains(fieldType)) {
      final model = GetIt.I.get<ModelRegister>().get(fieldType);

      if (inputFile.sameParts(model.inputFile)) {
        continue;
      }

      if (importHistory.contains(fieldType)) {
        continue;
      }

      indent.writeln('import ${packageName}.${model.inputFile.javaPackagePostfix()}.${model.name};');
      importHistory.add(fieldType);
    }
  }
}

List<String> javaGenerateMethodImports(List<Method> methods) {
  final fieldTypes = <String>[];
  for (final method in methods) {
    for (final param in method.parameters) {
      if (GetIt.I.get<ModelRegister>().contains(param.type)) {
        if (!fieldTypes.contains(param.type)) {
          fieldTypes.add(param.type);
        }
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

  return fieldTypes;
}

void javaGenerateModel(Model kClass, StringSink sink, UniAPIOptions options) {
  log('javaGenerateModel', value: kClass);

  final indent = Indent(sink);

  indent.writeln(javaComment(generatedCodeWarning));
  indent.writeNewline();

  if (kClass.inputFile.parts.isEmpty) {
    indent.writeln(package(options.javaPackageName));
  } else {
    indent.writeln(package(options.javaPackageName + '.' + kClass.inputFile.javaPackagePostfix()));
  }
  indent.writeNewline();

  indent.writeln('import java.util.List;');
  indent.writeln('import java.util.Map;');
  indent.writeln('import java.util.HashMap;');
  indent.writeln('import java.util.ArrayList;');
  indent.writeln('import ${options.javaPackageName}.uniapi.UniModel;');

  // generate Java model import
  javaGenerateImports(kClass.inputFile, kClass.fields.map((e) => e.type).toList(), indent, options.javaPackageName);

  indent.writeNewline();

  indent.writeln(javaComment(generatedClassWarning));
  indent.write('public class ${kClass.name} extends UniModel ');
  indent.scoped('{', '}', () {
    for (var field in kClass.fields) {
      indent.writeln('private ${dartToJavaReturnMapper(field.type, generics: field.generics)} ${field.name};');
    }

    indent.writeNewline();

    for (var field in kClass.fields) {
      getMethod(indent, field);
      indent.writeNewline();
      setMethod(indent, field);
      indent.writeNewline();
    }

    indent.writeln('@Override');
    indent.write('public Map<String, Object> toMap() ');
    indent.scoped('{', '}', () {
      indent.writeln('Map<String, Object> result = new HashMap<>();');
      for (var field in kClass.fields) {
        if (field.type == 'List') {
          indent.writeln('result.put("${field.name}", map(${field.name}, o -> o.toMap()));');
        } else if (GetIt.I.get<ModelRegister>().contains(field.type)) {
          indent.writeln('if (${field.name} != null) result.put("${field.name}", ${field.name}${field.javaEncodedFuncName(field.isEnum)});');
        } else {
          indent.writeln('result.put("${field.name}", ${field.name});');
        }
      }
      indent.writeln('return result;');
    });

    indent.writeNewline();

    indent.write('public static ${kClass.name} fromMap(Map<String, Object> map) ');
    indent.scoped('{', '}', () {
      indent.writeln('${kClass.name} result = new ${kClass.name}();');
      for (var field in kClass.fields) {
        if (field.type == 'List') {
          indent.writeln(
              'result.${field.name} = map.containsKey("${field.name}") && map.get("${field.name}") != null ? map((List<Map>) map.get("${field.name}"), o -> ${field.generics[0]}.fromMap(o)) : new ArrayList<>();'
          );
        } else if (field.type == 'Map') {
          indent.writeln(
              'result.${field.name} = map.containsKey("${field.name}") && map.get("${field.name}") != null ? (Map) map.get("${field.name}") : new HashMap<>();'
          );
        } else if (GetIt.I.get<ModelRegister>().contains(field.type)) {
          var decoded = '${field.type}${field.javaDecodedFuncName(field.isEnum, field.isEnum ? '(Integer) map.get("${field.name}")' : '(Map) map.get("${field.name}")')}';
          indent.writeln(
              'result.${field.name} = map.containsKey("${field.name}") && map.get("${field.name}") != null ? $decoded : null;'
          );
        } else {
          indent.writeln(
              'result.${field.name} = map.containsKey("${field.name}") && map.get("${field.name}") != null ? (${dartToJavaGenericMapper(field.type)}) map.get("${field.name}") : ${dartTypeNullToJavaDefaultValue(field.type)};'
          );
        }
      }
      indent.writeln('return result;');
    });
  });
}

void javaGenerateEnum(Model kClass, StringSink sink, UniAPIOptions options) {
  log('javaGenerateEnum', value: kClass);

  final indent = Indent(sink);

  indent.writeln(javaComment(generatedCodeWarning));
  indent.writeNewline();

  indent.writeln(package(options.javaPackageName + '.' + kClass.inputFile.javaPackagePostfix()));
  indent.writeNewline();

  final enumEntries = kClass.fields.where((element) => element.type == kClass.name).toList();

  indent.write('public enum ${kClass.name} ');
  indent.scoped('{', '}', () {
    for (var index = 0; index < enumEntries.length; index++) {
      indent.write('${enumEntries[index].name.toUpperCase()}');
      if (index != enumEntries.length - 1) {
        indent.add(',');
        indent.writeNewline();
      }
    }
    indent.writeNewline();
  });
}

String upperFirst(String name) {
  return name[0].toUpperCase() + name.substring(1);
}

/// 生成 UniNativeModule 的 Java 侧代码
void javaGenerateUniNativeModule(Module kClass, StringSink sink, InputFile file, UniAPIOptions options) {
  log('javaGenerateUniNativeModule', value: kClass);

  final indent = Indent(sink);

  indent.writeln(javaComment(generatedCodeWarning));
  indent.writeNewline();

  indent.writeln(package(options.javaPackageName + '.' + file.javaPackagePostfix()));
  indent.writeNewline();

  indent.writeln('import java.util.List;');
  indent.writeln('import java.util.Map;');
  indent.writeln('import java.util.HashMap;');
  indent.writeln('import io.flutter.plugin.common.BinaryMessenger;');
  indent.writeln('import io.flutter.plugin.common.BasicMessageChannel;');
  indent.writeln('import io.flutter.plugin.common.StandardMessageCodec;');
  indent.writeln('import ${options.javaPackageName}.uniapi.UniModel;');

  // generate Java model import
  javaGenerateImports(file, javaGenerateMethodImports(kClass.methods), indent, options.javaPackageName);

  indent.writeNewline();

  indent.writeln(javaComment(generatedClassWarning));
  indent.write('public interface ${kClass.name} ');
  indent.scoped('{', '}', () {
    var hasAsync = false;
    for (final method in kClass.methods) {
      if (method.isAsync) {
        hasAsync = true;
        break;
      }
    }
    if (hasAsync) {
      indent.write('public interface Result<T> ');
      indent.scoped('{', '}', () {
        indent.writeln('void success(T result);');
      });
      indent.writeNewline();
    }

    for (final method in kClass.methods) {
      for (final param in method.parameters) {
        // print('${param.type}');

        if (param.type == 'UniCallback') {
          String encodeDeclaration;
          if (GetIt.I.get<ModelRegister>().contains(param.generics[0])) {
            encodeDeclaration = 'event${param.javaEncodedFuncName(param.isEnum)}';
          } else {
            encodeDeclaration = 'event';
          }

          indent.writeln("""
public static class On${upperFirst(method.name)}${upperFirst(param.name)} {
    private BinaryMessenger messenger;
    public final String callbackName;

    public On${upperFirst(method.name)}${upperFirst(param.name)}(BinaryMessenger messenger, String callbackName) {
        this.messenger = messenger;
        this.callbackName = callbackName;
    }

    public void onEvent(${dartToJavaGenericMapper(param.generics[0])} event) {
      Map<String, Object> message = new HashMap<>();
      message.put("callbackName", callbackName);
      message.put("data", $encodeDeclaration);
      new BasicMessageChannel<>(messenger, "com.didi.rlab.flutter_channel.AudioManager.callback_channel", StandardMessageCodec.INSTANCE).send(message);
    }
}
""");
        }
      }
    }

    indent.writeln(javaComment(generatedInterfaceWarning));
    for (var method in kClass.methods) {
      if (method.name == kClass.name) {
        continue;
      }
      final returnType = !method.isAsync ? dartToJavaReturnMapper(method.returnValue.type, generics: method.returnGenerics) : 'void';
      final argSignature = <String>[];
      for (final param in method.parameters) {
        if (param.type == 'UniCallback') {
          argSignature.add('On${upperFirst(method.name)}${upperFirst(param.name)} ${param.name}');
        } else if (GetIt.I.get<ModelRegister>().contains(param.type)) {
          argSignature.add('${boxing(param.type, generics: param.generics)} ${param.name}');
        } else {
          argSignature.add('${boxing(param.type, generics: param.generics)} ${param.name}');
        }
      }
      if (method.isAsync) {
        argSignature.add('Result<${javaGenericBoxing.keys.contains(method.returnValue.type) ? dartToJavaGenericMapper(method.returnValue.type): method.returnValue.type}> result');
      }
      if (method.ignoreError) {
        indent.writeln('// ignore error');
      }
      indent.writeln('$returnType ${method.name}(${argSignature.join(', ')});');
      indent.writeNewline();
    }
  });
}

/// 生成 UniNativeModuleRegister 的 Java 侧代码
void javaGenerateUniNativeModuleRegister(Module kClass, StringSink sink, InputFile file, UniAPIOptions options) {
  log('javaGenerateUniNativeModuleRegister', value: kClass);

  final indent = Indent(sink);

  indent.writeln(javaComment(generatedCodeWarning));
  indent.writeNewline();

  indent.writeln(package(options.javaPackageName + '.' + file.javaPackagePostfix()));
  indent.writeNewline();

  indent.writeln('import java.util.List;');
  indent.writeln('import java.util.ArrayList;');
  indent.writeln('import java.util.Map;');
  indent.writeln('import java.util.HashMap;');
  indent.writeln('import android.util.Log;');

  indent.writeln('import io.flutter.plugin.common.BasicMessageChannel;');
  indent.writeln('import io.flutter.plugin.common.BinaryMessenger;');
  indent.writeln('import io.flutter.plugin.common.StandardMessageCodec;');

  indent.writeln('import ${options.javaPackageName}.UniAPI;');

  // generate Java model import
  javaGenerateImports(file, javaGenerateMethodImports(kClass.methods), indent, options.javaPackageName);


  indent.writeNewline();

  indent.writeln(javaComment(generatedClassWarning));
  indent.write('public class ${kClass.name}Register ');
  indent.scoped('{', '}', ()
  {
    indent.write('public static void setup(BinaryMessenger binaryMessenger, ${kClass
        .name} impl) ');
    indent.scoped('{', '}', () {
      for (final method in kClass.methods) {
        if (method.name == kClass.name) {
          continue;
        }

        final channelName = makeChannelName(kClass, method);
        indent.writeNewline();
        indent.scoped('{', '}', () {
          indent.writeln('BasicMessageChannel<Object> channel =');
          indent.inc();
          indent.inc();
          indent.writeln(
              'new BasicMessageChannel<>(binaryMessenger, "$channelName", new StandardMessageCodec());');
          indent.dec();
          indent.dec();
          indent.write('if (impl != null) ');

          indent.scoped('{', '} else {', () {
            indent.writeln('UniAPI.registerModule(impl);');

            indent.write('channel.setMessageHandler((message, reply) -> ');
            indent.scoped('{', '});', () {
              final returnType = method.returnValue.type;
              indent.writeln('Map<String, Object> wrapped = new HashMap<>();');
              indent.write('try ');
              indent.scoped('{', '}', () {
                indent.writeln('Map<String, Object> params = (Map<String, Object>) message;');
                var paramsList = method.parameters.map((e) => e.name).toList().join(', ');
                if (method.isAsync) {
                  if (GetIt.I.get<ModelRegister>().contains(returnType)) {
                    paramsList += (paramsList.isNotEmpty ? ', ' : '')  + '(ret) -> { wrapped.put("result", ret${method.returnValue.javaEncodedFuncName(method.returnValue.isEnum)}); reply.reply(wrapped);}';
                  } else {
                    paramsList += (paramsList.isNotEmpty ? ', ' : '') + '(ret) -> { wrapped.put("result", ret); reply.reply(wrapped);}';
                  }
                }
                final call =
                    'impl.${method.name}($paramsList)';

                // 调用参数预处理
                for (final param in method.parameters) {
                  if (param.type == 'UniCallback') {
                    final callbackClassName = '${kClass.name}.On${upperFirst(method.name)}${upperFirst(param.name)}';
                    indent.writeln('$callbackClassName ${param.name} = new ${kClass.name}.On${upperFirst(method.name)}${upperFirst(param.name)}(binaryMessenger, (String) params.get("${param.name}"));');
                  } else if (GetIt.I.get<ModelRegister>().contains(param.type)) {
                    var decoded = '${param.type}${param.javaDecodedFuncName(param.isEnum, param.isEnum ? '(Integer) params.get("${param.name}")' : '(Map) params.get("${param.name}")')}';
                    indent.writeln('${param.type} ${param.name} = params.containsKey("${param.name}") ? $decoded : null;');
                  } else {
                    indent.writeln(
                        '${boxing(param.type, generics: param.generics)} ${param.name} = params.containsKey("${param.name}") ? (${boxing(param.type, generics: param.generics)}) params.get("${param.name}") : ${dartTypeNullToJavaDefaultValue(param.type)};');
                  }
                }

                if (!method.isAsync) {
                  if (method.returnValue.isVoid()) {
                    indent.writeln('$call;');
                    indent.writeln('wrapped.put("${Keys.result}", null);');
                  } else {
                    indent.writeln('${boxing(returnType)} output = $call;');

                    if (GetIt.I.get<ModelRegister>().contains(returnType)) {
                      indent.writeln('wrapped.put("${Keys.result}", output != null ? output${method.returnValue.javaEncodedFuncName(method.returnValue.isEnum)} : null);');
                    } else {
                      indent.writeln('wrapped.put("${Keys.result}", output);');
                    }
                  }
                } else {
                  indent.writeln('$call;');
                }
              });
              indent.write('catch (Error | RuntimeException exception) ');
              indent.scoped('{', '}', () {
                if (!method.ignoreError) {
                  indent.writeln(
                      'wrapped.put("${Keys.error}", wrapError(exception));');
                  indent.writeln('reply.reply(wrapped);');
                } else {
                  indent.writeln('//ignore errors');
                }
                indent.writeln('Log.d("flutter", "error: " + exception);');
              });
              if (!method.isAsync) {
                indent.writeln('reply.reply(wrapped);');
              }
            });
          });
          indent.scoped(null, '}', () {
            indent.writeln('channel.setMessageHandler(null);');
          });
        });
      }
    });

    indent.format('''
private static Map<String, Object> wrapError(Throwable exception) {
\tMap<String, Object> errorMap = new HashMap<>();
\terrorMap.put("${Keys.errorMessage}", exception.toString());
\terrorMap.put("${Keys.errorCode}", exception.getClass().getSimpleName());
\terrorMap.put("${Keys.errorDetails}", null);
\treturn errorMap;
}''');
  });
}

/// 生成 UniFlutterModule
void javaGenerateUniFlutterModule(Module kClass, StringSink sink, InputFile file, UniAPIOptions options) {
  log('javaGenerateUniFlutterModule', value: kClass);

  final indent = Indent(sink);

  indent.writeln(javaComment(generatedCodeWarning));
  indent.writeNewline();

  indent.writeln(package(options.javaPackageName + '.' + file.javaPackagePostfix()));
  indent.writeNewline();

  indent.writeln('import java.util.List;');
  indent.writeln('import java.util.Map;');
  indent.writeln('import java.util.HashMap;');
  indent.writeln('import io.flutter.plugin.common.BinaryMessenger;');
  indent.writeln('import io.flutter.plugin.common.BasicMessageChannel;');
  indent.writeln('import io.flutter.plugin.common.StandardMessageCodec;');
  indent.writeln('import ${options.javaPackageName}.UniAPI;');

  // generate Java model import
  javaGenerateImports(file, javaGenerateMethodImports(kClass.methods), indent, options.javaPackageName);
  indent.writeNewline();

  indent.write('public class ${kClass.name} ');
  indent.scoped('{', '}', () {
    indent.writeln('private BinaryMessenger messenger;');
    indent.writeNewline();

    indent.write('public void setup(BinaryMessenger messenger) ');
    indent.scoped('{', '}', () {
      indent.writeln('this.messenger = messenger;');
      indent.writeln('UniAPI.registerModule(this);');
    });
    indent.writeNewline();

    indent.write('public interface Result<T> ');
    indent.scoped('{', '}', () {
      indent.writeln('void result(T result);');
    });
    indent.writeNewline();

    for (final method in kClass.methods) {
      if (method.name == kClass.name) {
        continue;
      }

      final argSignatures = <String>[];
      for (final param in method.parameters) {
        if (GetIt.I.get<ModelRegister>().contains(param.type)) {
          argSignatures.add('${boxing(param.type, generics: param.generics)} ${param.name}');
        } else {
          argSignatures.add('${boxing(param.type, generics: param.generics)} ${param.name}');
        }
      }
      argSignatures.add('Result<${dartToJavaGenericMapper(method.returnValue.type)}> callback');
      indent.write('public void ${method.name}(${argSignatures.join(', ')}) ');
      indent.scoped('{', '}', () {
        final channelName = makeChannelName(kClass, method);

        indent.writeln('BasicMessageChannel<Object> channel =');
        indent.inc(2);
        indent.writeln('new BasicMessageChannel<>(messenger, "$channelName", new StandardMessageCodec());');
        indent.dec(2);

        indent.writeln('Map<String, Object> parameters = new HashMap<>();');

        for (final param in method.parameters) {
          if (GetIt.I.get<ModelRegister>().contains(param.type)) {
            indent.writeln('parameters.put("${param.name}", ${param.name}${param.javaEncodedFuncName(param.isEnum)});');
          } else {
            indent.writeln('parameters.put("${param.name}", ${param.name});');
          }
        }

        indent.write('channel.send(parameters, reply -> ');
        indent.scoped('{', '});', () {
          if (method.returnValue.isVoid()) {
            indent.writeln('callback.result(null);');
          } else {
            if (GetIt.I.get<ModelRegister>().contains(method.returnValue.type)) {
              indent.writeln('callback.result(${method.returnValue.type}${method.returnValue.javaDecodedFuncName(method.returnValue.isEnum, method.returnValue.isEnum ? '(Integer) reply' : '(Map) reply')});');
            } else {
              indent.writeln('callback.result((${dartToJavaGenericMapper(method.returnValue.type)}) reply);');
            }
          }
        });
      });
      indent.writeNewline();
    }

  });
}

void javaGenerateUniAPI(StringSink sink, File file, UniAPIOptions options) {
  log('generateUniAPI');

  final indent = Indent(sink);

  indent.writeln(javaComment(generatedCodeWarning));
  indent.writeNewline();

  indent.writeln(package(options.javaPackageName));
  indent.writeNewline();

  final code = '''
import java.util.HashMap;
import java.util.Map;

public class UniAPI {
    public static Map<String, Object> moduleMap = new HashMap<>();

    public static void registerModule(Object module) {
        moduleMap.put(module.getClass().getName(), module);
    }

    public static<T> T get(Class<T> aClass) {
        return (T) moduleMap.get(aClass.getName());
    }
}
''';

    indent.writeln(code);
}