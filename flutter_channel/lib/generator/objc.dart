import 'package:get_it/get_it.dart';
import '../cli/params.dart';
import '../model/models.dart';
import '../ast/ast.dart';
import 'common.dart';
import 'register/model.dart';
import 'tools.dart';

// enum 类型标记
const ENUM = '_ENUM_';

const Map<String, String> objcTypeMapper = <String, String>{
  'bool': 'NSNumber *',
  'int': 'NSNumber *',
  'String': 'NSString *',
  'double': 'NSNumber *',
  'Uint8List': 'FlutterStandardTypedData *',
  'Int32List': 'FlutterStandardTypedData *',
  'Int64List': 'FlutterStandardTypedData *',
  'Float64List': 'FlutterStandardTypedData *',
  'List': 'NSArray *',
  'Map': 'NSDictionary *',
};

const Map<String, String> propertyTypeMapper = <String, String>{
  'String': 'copy',
  'bool': 'strong',
  'int': 'strong',
  'double': 'strong',
  'Uint8List': 'strong',
  'Int32List': 'strong',
  'Int64List': 'strong',
  'Float64List': 'strong',
  'List': 'strong',
  'Map': 'strong',
};

/*
 首字母大写
*/
String capitalize(String string) {
  if (string==null) {
    return null;
  }
  return string.length>1 ? string[0].toUpperCase()+string.substring(1) : string.toUpperCase();
}

/*
  获取实际类型
*/
String getRealType(type) {
  // 局部函数
  String notVoidType(type) => isEnumType(type)?'$ENUM *':'$type *';// ENUM 占位标记

  var result = '';
  final ret = objcTypeMapper[type];
  if (ret == null) {
    result = type == 'void'? type : notVoidType(type);
  } else {
    result = ret;
  }
  return result;
}

/*
 获取泛型样式 e.g. <NSString *, NSString *>
*/
String genericsStyle(List<String> generics) {
  var result = '';
  var index = 0;
  for (var type in generics) {
    result += objcTypeFromMapper(type);
    if (index < generics.length-1) result += ', ';
    index ++;
  }
  if (result != '') result = '<$result> ';

  return result;
}

/*
 获取目标对象类型
*/
String objcTypeFromMapper(String type,[List<String> generics]) {
  var genericsValue = '';
  if (type == 'Map' || type == 'List') {
    if (generics != null) {
      genericsValue = genericsStyle(generics);
    }
  }
  final ret = getRealType(type);
  if (ret == 'void') {
    return ret;
  }
  return ret.replaceAll('*', '') + genericsValue + '*';
}

/*
  获取目标对象类型 仅在 函数 中使用
*/
String objcTypeFromMapperUsedinFunc(String type,[List<String> generics]) {
  var result = objcTypeFromMapper(type, generics);

  if (result != null && result.contains(ENUM)) {
    result = result.replaceAll(ENUM, type);
    result = result.replaceAll(' ', '');
    result = result.replaceAll('*', '');
  }
  return result;
}

/*
 获取property持有类型
*/
String propertyTypeFromMapper(String type) {
  final result = propertyTypeMapper[type];
  if (result == null) {
    return 'assign';
  } else {
    return result;
  }
}

/*
 判断是否要导入头文件
*/
bool isNeedExport(String type) {
  if (GetIt.I.get<ModelRegister>().contains(type)) {
    return true;
  } else {
    return false;
  }
}

/*
 通过类型名称判断是否是枚举类型
*/
bool isEnumType(String name) {
  var model = GetIt.I.get<ModelRegister>().get(name);
  return model == null ? false : model.isEnum;
}

/*
 是否fromMap
*/
String dictGetter(String dict, Field field) {
  if (isNeedExport(field.type)) {
    if (isEnumType(field.type)) {
      return '[[self wrapNil:$dict[@"${field.name}"]] integerValue]';
    } else {
      var className = field.type;
      return '[$className fromMap:$dict[@"${field.name}"]]';
    }
  } else {
    return '[self wrapNil:$dict[@"${field.name}"]]';
  }
}

/*
 返回值是否toMap
*/
String dictValue(Field field) {
  if (isNeedExport(field.type)) {
    if (isEnumType(field.type)) {
      return '@(self.${field.name})';
    } else {
      return '(self.${field.name} ? [self.${field.name} toMap] : [NSNull null])';
    }
  } else {
    return '(self.${field.name} ? self.${field.name} : [NSNull null])';
  }
}

/*
 头部内容
*/
void objcGenerateDeclaration(final className, final suffix, Indent indent) {
  indent.writeln('//  ');
  indent.writeln('//  ${className}.${suffix}');
  indent.writeln('//  uniAPI');
  indent.writeln('//  ');
  indent.writeln('//  $generatedCodeWarning');
  indent.writeln('//  ');
  indent.writeln('//  Copyright © 2021 The Rlab Authors. All rights reserved.');
  indent.writeln('//  ');
  indent.writeNewline();
}

/*
 Objective-C声明样式 @class or import
*/
enum ObjcExportStyle {
   ATCLASS,
   IMPORT,
}

/*
 前置声明逻辑处理
*/
void preDeclaration(Module kClass, Indent indent, ObjcExportStyle type, [bool isEnumHandler = false]){
  var exportHistory = <String>{};
  
  // 局部函数
  void preDeclarationAction(var paramType, Indent indent, ObjcExportStyle type) {
    if (exportHistory.contains(paramType)) return;
    
    if (isEnumHandler) {
      if (isNeedExport(paramType) && isEnumType(paramType)) {
        indent.writeln('#import "$paramType.h"');
        exportHistory.add(paramType);
      }
      return;
    }

    if (isNeedExport(paramType) && !isEnumType(paramType)) {
      if (type==ObjcExportStyle.ATCLASS) {
        indent.writeln('@class $paramType;');
      } else if (type==ObjcExportStyle.IMPORT) {
        indent.writeln('#import "$paramType.h"');
      }
      exportHistory.add(paramType);
    }
  }

  for (final method in kClass.methods) {
    final retType = method.returnValue.type;
    preDeclarationAction(retType, indent, type);

    final parameters = method.parameters;
    for (var param  in parameters) {
      final argType = param.type;
      preDeclarationAction(argType, indent, type);

      for (var genericsType in param.generics) {
        preDeclarationAction(genericsType, indent, type);
      }
    }
  }
}

/*
 参数别名样式 
 含类型 e.g.  b:(NSNumber *)b
 不含类型 e.g. b:b
*/
enum ParamAliasStyle {
   HasType,
   NOType,
}

/*
  完成状态 参数 e.g. success or fail
*/
String completeAlias(Method method, ParamAliasStyle style, String startArgName) {
  var argName = startArgName;
  if (method.isAsync == true) {
    var suc = argName!='' ? 'success:' : ':';
    if (style == ParamAliasStyle.HasType) {
      argName += '${suc}(void(^)(${objcTypeFromMapperUsedinFunc(method.returnValue.type)}result))success ';
    } else {
      argName += '${suc}';
    }
    
    if (method.ignoreError == false) {
      if (style == ParamAliasStyle.HasType) {
        argName += 'fail:(void(^)(FlutterError *err))fail';
      }
    }
  } else {
    if (method.ignoreError == false) {
      if (argName != '') {
        argName += 'error';
      }
      if (style == ParamAliasStyle.HasType) {
        argName += ':(FlutterError *_Nullable *_Nonnull)err';
      }
    }
  }

  return argName;
}

/*
  参数解析 转换成参数别名
*/
String parameterAlias(Method method, ParamAliasStyle style,[bool hasCompleteAlias = true]) {
  var argName = '';
  final parameters = method.parameters;
  var index=0;

  void aliasAction(var type, var name, [bool isFirst = true]) {
    if (isFirst) {
      if (style == ParamAliasStyle.HasType) {
        argName += ':($type)$name ';
      } else {
        argName += ':$name ';
      }
    } else {
      if (style == ParamAliasStyle.HasType) {
          argName += '$name:($type)$name ';
        } else {
          argName += '$name:$name ';
        }
    }
  }

  for (var param in parameters) {
    final type = objcTypeFromMapperUsedinFunc(param.type,param.generics);
    final name = param.name;

    if (param.type == 'UniCallback') {
      final className = 'On${capitalize(method.name)}${capitalize(param.name)} *';
      aliasAction(className, name);
    } else if (type != 'void') {
      aliasAction(type, name, index==0);
    }
    index++;
  }

  if (hasCompleteAlias == true) {
    argName = completeAlias(method, style, argName);
  } 
  
  return argName.trimRight();
}

/*
 ENUM: 产生枚举
*/
void objcGenerateEnumHeader(Model kClass, StringSink sink, UniAPIOptions options) {
  final className = kClass.name;
  final indent = Indent(sink);

  objcGenerateDeclaration(className, 'h', indent);

  indent.writeln('#import <Foundation/Foundation.h>');

  indent.writeNewline();
  indent.writeln('NS_ASSUME_NONNULL_BEGIN');
  indent.writeNewline();

  indent.write('typedef NS_ENUM(NSInteger, $className)');
  indent.scoped('{', '};', () {
    for (final field in kClass.fields) {
      if (field.isEnum == true) {
        indent.writeln('${capitalize(field.name)},');
      }
    }
  });

  indent.writeNewline();
  indent.writeln('NS_ASSUME_NONNULL_END');
}

/* 
  Model：产生.h文件
 */
void objcGenerateModelHeader(Model kClass, StringSink sink, UniAPIOptions options) {
  final className = kClass.name;
  final indent = Indent(sink);

  /// 枚举处理
  if (kClass.isEnum == true) {
    objcGenerateEnumHeader(kClass, sink, options);
    return;
  }

  objcGenerateDeclaration(className, 'h', indent);

  indent.writeln('#import <Foundation/Foundation.h>');

  var importHistory = <String>{};
  void preImportAction(var paramType, Indent indent) {
    if (importHistory.contains(paramType)) return;
    if (isNeedExport(paramType)) {
      indent.writeln('#import "$paramType.h"');
      importHistory.add(paramType);
    }
  }

  for (final field in kClass.fields) {
    preImportAction(field.type, indent);
    // 支持泛型
    for (var genericsType in field.generics) {
       preImportAction(genericsType, indent);
    }
  }

  indent.writeNewline();
  indent.writeln('NS_ASSUME_NONNULL_BEGIN');
  indent.writeNewline();

  indent.writeln('@interface ${className} : NSObject');
  indent.writeNewline();

  for (final field in kClass.fields) {
    var fieldType = field.type == 'List'
        ? objcTypeFromMapper(field.type, field.generics)
        : objcTypeFromMapper(field.type);
    final fieldName = field.name;

    String propertyType;
    if (isNeedExport(field.type)) {
      propertyType = field.isEnum == false? 'strong':'assign';
    } else {
      propertyType = propertyTypeFromMapper(field.type);
    }

    // NSNumber类型增加原始数据类型注释
    var commit = '';
    if(fieldType.contains('NSNumber')) {
      commit = '// Origin type is "${field.type}"';
    } else if(fieldType.contains('<'+ENUM)) {
      fieldType = fieldType.replaceAll(ENUM, 'NSNumber');
      commit = '// Origin type is "enum"';
    }

    if (field.isEnum == true) {
      fieldType = fieldType.replaceAll('*', '');
      fieldType = fieldType.replaceAll(ENUM, field.type);
    }
    indent.writeln('@property(nonatomic, $propertyType) $fieldType$fieldName;  $commit');
  }

  indent.writeNewline();

  indent.writeln('+($className*)fromMap:(NSDictionary*)dict;');
  indent.writeln('-(NSDictionary*)toMap;');

  indent.writeNewline();
  indent.writeln('@end');

  indent.writeNewline();
  indent.writeln('NS_ASSUME_NONNULL_END');
}

/* 
  Model：产生.m文件
 */
void objcGenerateModelSource(Model kClass, StringSink sink, UniAPIOptions options) {
  final className = kClass.name;
  final indent = Indent(sink);

  objcGenerateDeclaration(className, 'm', indent);

  indent.writeln('#import "${className}.h"');

  indent.writeNewline();
  indent.writeln('@interface ${className} ()');
  indent.writeln('@end');

  indent.writeNewline();
  indent.writeln('@implementation ${className}');
  indent.writeNewline();

  indent.format('''
+ (NSArray*)modelList:(NSArray*)list class:(Class)cls{
\t\tif ((NSNull *)list == [NSNull null]) return nil;
\t\tNSMutableArray *models = NSMutableArray.new;
\t\tfor (NSDictionary *item in list) {
\t\t\t\tid obj = [cls fromMap:item];
\t\t\t\t[models addObject:obj];
\t\t}
\t\tif (models.count==0) return nil;
\t\treturn models;
}''');
  indent.addln('');

  indent.format('''
+ (NSArray*)dicList:(NSArray*)list{
\t\tif ((NSNull *)list == [NSNull null]) return nil;
\t\tNSMutableArray *dicList = NSMutableArray.new;
\t\tfor (id item in list) {
\t\t\t\tNSDictionary *dic = [item toMap];
\t\t\t\t[dicList addObject:dic];
\t\t}
\t\treturn dicList;
}''');
  indent.addln('');

   indent.format('''
+ (id)wrapNil:(id)value {
\t\treturn (value == nil) || ((NSNull *)value == [NSNull null]) || [value isEqual:@"<null>"]? nil : value;
}''');
  indent.addln('');
  indent.writeNewline();

  indent.write('+($className*)fromMap:(NSDictionary*)dict ');
  indent.scoped('{', '}', () {
    const resultName = 'result';
    indent.writeln('if ((NSNull *)dict == [NSNull null]) return nil;');
    indent.writeln('$className* $resultName = [[$className alloc] init];');
    for (final field in kClass.fields) {
      if (field.type == 'List' && field.generics.isNotEmpty && isNeedExport(field.generics[0]) && !isEnumType(field.generics[0])) {
        indent.writeln(
              '$resultName.${field.name} = [self modelList:${dictGetter('dict', field)} class:[${field.generics[0]} class]];');
      } else {
        indent.writeln(
          '$resultName.${field.name} = ${dictGetter('dict', field)};');
      }
    }
    indent.writeln('return $resultName;');
  });

  indent.writeNewline();

  indent.write('-(NSDictionary*)toMap ');
  indent.scoped('{', '}', () {
    indent.write('return [NSDictionary dictionaryWithObjectsAndKeys:\n');
    for (final field in kClass.fields) {
      if (field.type == 'List' && field.generics.isNotEmpty && isNeedExport(field.generics[0]) && !isEnumType(field.generics[0])) {
        indent.addln('\t\t[$className dicList:self.${field.name}], @"${field.name}",');
      } else {
        indent.addln('\t\t' + dictValue(field) + ', @"${field.name}",');
      }
    }
    indent.addln('\t\tnil];');
  });

  indent.writeNewline();
  indent.writeln('@end');
}

/*
 产生callback类声明
*/
void objcGenerateCallbackClassDeclaration(Module kClass,Indent indent) {
  for (final method in kClass.methods) {
    for (final param in method.parameters) {
      if (param.type == 'UniCallback') {
        final className = 'On${capitalize(method.name)}${capitalize(param.name)}';
        indent.writeln('@interface $className : NSObject');
        indent.writeNewline();
        var argName = '(${objcTypeFromMapperUsedinFunc(param.generics[0])})${param.name}';
        indent.writeln('- (void)onEvent:${argName};');
        indent.writeNewline();
        indent.writeln('@end');
        indent.writeNewline();
      }
    }
  }
}

/*
 产生callback类实现
*/
void objcGenerateCallbackClassImplementation(Module kClass,Indent indent) {
  for (final method in kClass.methods) {
    for (final param in method.parameters) {
      if (param.type == 'UniCallback') {
        final className = 'On${capitalize(method.name)}${capitalize(param.name)}';
        indent.writeNewline();
        indent.writeln('@interface ${className} ()');

        indent.writeNewline();
        indent.writeln('@property(nonatomic, copy) NSString *callbackName;');
        indent.writeln('@property(nonatomic, weak) id<FlutterBinaryMessenger> binaryMessenger;');
        indent.writeNewline();

        indent.writeln('@end');
        indent.writeNewline();
        indent.writeln('@implementation $className');
        indent.writeNewline();
      
        var argName = '(${objcTypeFromMapperUsedinFunc(param.generics[0])})${param.name}';
        indent.writeln('- (void)onEvent:${argName}');
        indent.scoped('{', '}', () {
          indent.writeln('// 参数判空检查');
          indent.writeln('if(${param.name} == NULL) return;');
          indent.writeNewline();
          indent.writeln('FlutterBasicMessageChannel *channel =');
          indent.inc();
          indent.writeln('[FlutterBasicMessageChannel');
          indent.inc();
          indent.writeln('messageChannelWithName:@"com.didi.rlab.uni_api.AudioManager.callback_channel"');
          indent.writeln('binaryMessenger:self.binaryMessenger];');
          indent.dec();
          indent.dec();

          if(isNeedExport(param.generics[0])) {
            if (isEnumType(param.generics[0])) {
              indent.writeln('NSDictionary *msg = @{@"callbackName":self.callbackName,@"data":@(${param.name})};');
            } else {
              indent.writeln('NSDictionary *msg = @{@"callbackName":self.callbackName,@"data":${param.name}.toMap};');
            }
          } else {
            indent.writeln('NSDictionary *msg = @{@"callbackName":self.callbackName,@"data":${param.name}};');
          }
          
          indent.writeln('// 发送消息');
          indent.writeln('[channel sendMessage:msg];');
        });
        indent.writeNewline();
        indent.writeln('@end');
        indent.writeNewline();
      }
    }
  }
}

/* 
  UniNative：产生.h文件
 */
void objcGenerateUniNativeHeader(Module kClass, StringSink sink, InputFile file, UniAPIOptions options) {
  final className = kClass.name;
  final indent = Indent(sink);

  objcGenerateDeclaration(className, 'h', indent);

  indent.writeln('#import <Foundation/Foundation.h>');
  preDeclaration(kClass,indent,ObjcExportStyle.ATCLASS, true);
  indent.writeNewline();

  indent.writeln('@protocol FlutterBinaryMessenger;');
  indent.writeln('@class FlutterError;');
  preDeclaration(kClass,indent,ObjcExportStyle.ATCLASS);
  indent.writeNewline();
  indent.writeln('NS_ASSUME_NONNULL_BEGIN');
  indent.writeNewline();

  // callback 声明
  objcGenerateCallbackClassDeclaration(kClass,indent);

  indent.writeln('@protocol $className');
  for (final method in kClass.methods) {
    if (className == method.name) {
      continue;
    }
    if (method.isAsync == true) {
      final funcName = method.name;
      var argName = parameterAlias(method, ParamAliasStyle.HasType);
      indent.writeln('- (void)${funcName}${argName};');
    } else {
      final retType = objcTypeFromMapperUsedinFunc(method.returnValue.type);
      final funcName = method.name;
      var argName = parameterAlias(method, ParamAliasStyle.HasType);
      indent.writeln('- ($retType)${funcName}$argName;');
    }
  }
  indent.writeln('@end');
  indent.writeln('');
  indent.writeln(
      'extern void ${className}Setup(id<FlutterBinaryMessenger> binaryMessenger, id<$className> _Nullable api);');
  indent.writeNewline();
  indent.writeln('NS_ASSUME_NONNULL_END');
}

/* 
  UniNative：产生.m文件
 */
void objcGenerateUniNativeSource(Module kClass, StringSink sink, InputFile file, UniAPIOptions options) {
  final className = kClass.name;
  final indent = Indent(sink);

  objcGenerateDeclaration(className, 'm', indent);
  indent.writeln('#import "${className}.h"');
  indent.writeln('#import <Flutter/Flutter.h>');
  indent.writeNewline();

  preDeclaration(kClass,indent,ObjcExportStyle.IMPORT);
  indent.writeNewline();

  // callback 实现
  objcGenerateCallbackClassImplementation(kClass,indent);

  indent.format('''
static NSDictionary<NSString*, id>* wrapResult(NSDictionary *result, FlutterError *error) {
\tNSDictionary *errorDict = (NSDictionary *)[NSNull null];
\tif (error) {
\t\terrorDict = @{
\t\t\t@"${Keys.errorCode}": (error.code ? error.code : [NSNull null]),
\t\t\t@"${Keys.errorMessage}": (error.message ? error.message : [NSNull null]),
\t\t\t@"${Keys.errorDetails}": (error.details ? error.details : [NSNull null]),
\t\t\t};
\t}
\treturn @{
\t\t@"${Keys.result}": (result ? result : [NSNull null]),
\t\t@"${Keys.error}": errorDict,
\t\t};
}''');
  indent.addln('');

  indent.writeln('void ${className}Setup(id<FlutterBinaryMessenger> binaryMessenger, id<$className> _Nullable api)');
  indent.scoped('{', '}', () {
    for (final method in kClass.methods) {
      if (className == method.name) {
        continue;
      }

      indent.write('');
      indent.scoped('{', '}', () {
        indent.writeln('FlutterBasicMessageChannel *channel =');
        indent.inc();
        indent.writeln('[FlutterBasicMessageChannel');
        indent.inc();
        indent.writeln('messageChannelWithName:@"com.didi.rlab.uni_api.${className}.${method.name}"');
        indent.writeln('binaryMessenger:binaryMessenger];');
        indent.dec();
        indent.dec();

        indent.write('if (api) ');
        indent.scoped('{', '}', () {
          indent.write(
              '[channel setMessageHandler:^(id _Nullable message, FlutterReply reply) ');
          indent.scoped('{', '}];', () {
            for (var param in method.parameters) {
              final type = objcTypeFromMapperUsedinFunc(param.type);
              final name = param.name;
              
              if (param.type == 'UniCallback') {
                  indent.writeln('NSString *${name}Name = [message objectForKey:@"$name"];');
                  final className = 'On${capitalize(method.name)}${capitalize(param.name)}';
                  indent.writeln('${className} *${name} = ${className}.new;');
                  indent.writeln('${name}.callbackName = ${name}Name;');
                  indent.writeln('${name}.binaryMessenger = binaryMessenger;');
                  indent.writeNewline();
              } else if(param.type != 'void') {
                if(isNeedExport(param.type)) {
                  if (isEnumType(param.type)) {
                    indent.writeln('$type $name = [[message objectForKey:@"$name"] integerValue];');
                  } else {
                    indent.writeln('$type$name = [${param.type} fromMap:[message objectForKey:@"$name"]];');
                  }
                } else {
                  indent.writeln('$type$name = [message objectForKey:@"$name"];');
                }
              }
            }

            if (method.isAsync == true) {
              String asyncCall;
              var argName = parameterAlias(method, ParamAliasStyle.NOType);
              asyncCall = '[api ${method.name}${argName}';
              var subfix = method.ignoreError == true?'];':'';
              indent.writeScoped(
                  '${asyncCall}^(${objcTypeFromMapperUsedinFunc(method.returnValue.type)}result) {',
                  '}$subfix', () {
                  indent.writeln('reply(wrapResult(result,nil));');
              });
              if (method.ignoreError == false) {
                indent.writeScoped(
                  'fail:^(FlutterError *_Nullable error){',
                  '}];', () {
                  indent.writeln('reply(wrapResult(nil,error));');
                });
              }
            } else {
              String syncCall;
              var argName = parameterAlias(method, ParamAliasStyle.NOType);
              var argErr = method.ignoreError==true?'':':&error';
              syncCall = '[api ${method.name}${argName}${argErr}]';

              indent.writeln('FlutterError *error;');
              if (method.returnValue.isVoid()) {
                indent.writeln('$syncCall;');
                indent.writeln('reply(wrapResult(nil, error));');
              } else if(isNeedExport(method.returnValue.type)){
                if (isEnumType(method.returnValue.type)) {
                  indent.writeln('${objcTypeFromMapperUsedinFunc(method.returnValue.type)} output = $syncCall;');
                  indent.writeln('reply(wrapResult(@(output), error));');
                } else {
                  indent.writeln('${objcTypeFromMapperUsedinFunc(method.returnValue.type)}output = $syncCall;');
                  indent.writeln('reply(wrapResult([output toMap], error));');
                }
              } else {
                indent.writeln('${objcTypeFromMapperUsedinFunc(method.returnValue.type)}output = $syncCall;');
                indent.writeln('reply(wrapResult(output, error));');
              }
            }
          });
        });
        indent.write('else ');
        indent.scoped('{', '}', () {
          indent.writeln('[channel setMessageHandler:nil];');
        });
      });
    }
  });
}

/*
  UniFlutter：产生.h文件
*/
void objcGenerateUniFlutterHeader(Module kClass, StringSink sink, InputFile file, UniAPIOptions options) {
  final className = kClass.name;
  final indent = Indent(sink);

  objcGenerateDeclaration(className, 'h', indent);

  indent.writeln('#import <Foundation/Foundation.h>');
  preDeclaration(kClass,indent,ObjcExportStyle.ATCLASS, true);
  indent.writeNewline();
  indent.writeln('NS_ASSUME_NONNULL_BEGIN');
  indent.writeln('@protocol FlutterBinaryMessenger;');
  preDeclaration(kClass,indent,ObjcExportStyle.ATCLASS);
  indent.writeln('typedef void (^UniCompleted)(id result); // 这里result可能是nil');

  indent.writeNewline();
  indent.writeln('@interface $className : NSObject');
  indent.writeln('// 使用UniFlutterModule能力前需要调用次api初始化！！！');
  indent.writeln('+ (void)setup:(id<FlutterBinaryMessenger>)binaryMessenger;');
  for (final method in kClass.methods) {
    if (className == method.name) {
      continue;
    }
    final funcName = method.name;
    var argName = parameterAlias(method, ParamAliasStyle.HasType,false);
    if (method.returnValue.isVoid()) {
        indent.writeln('+ (void)${funcName}${argName};');
    } else if (argName.isNotEmpty) {
        indent.writeln('+ (void)${funcName}${argName} completion:(UniCompleted)block;');
    } else {
      // 理论上这里应该永远走不到
      indent.writeln('+ (void)${funcName}${argName}:(UniCompleted)block;');
    }
  }

  indent.writeln('@end');
  indent.writeln('');
  indent.writeNewline();
  indent.writeln('NS_ASSUME_NONNULL_END');
}

/*
  UniFlutter：产生.m文件
*/
void objcGenerateUniFlutterSource(Module kClass, StringSink sink, InputFile file, UniAPIOptions options) {
  final className = kClass.name;
  final indent = Indent(sink);

  objcGenerateDeclaration(className, 'm', indent);
  indent.writeln('#import "${className}.h"');
  indent.writeln('#import <Flutter/Flutter.h>');
  indent.writeNewline();

  preDeclaration(kClass,indent,ObjcExportStyle.IMPORT);
  indent.writeNewline();

  indent.writeln('@interface ${className} ()');
  indent.writeNewline();
  indent.writeln('@property(nonatomic, weak) id<FlutterBinaryMessenger> binaryMessenger;');
  indent.writeNewline();
  indent.writeln('@end');

  indent.writeNewline();
  indent.writeln('@implementation $className');
  indent.writeNewline();

  indent.format('''
+ (instancetype)instance {
\t\tstatic $className *_instance = nil;
\t\tstatic dispatch_once_t onceToken;
\t\tdispatch_once(&onceToken, ^{
\t\t\t\t_instance = [[$className alloc] init];
\t\t});
\t\treturn _instance;
}''');
  indent.addln('');

  indent.writeln('+ (void)setup:(id<FlutterBinaryMessenger>)binaryMessenger');
  indent.scoped('{', '}', () {
    indent.writeln('[[self instance] setBinaryMessenger:binaryMessenger];');
  });
  indent.writeNewline();

  for (final method in kClass.methods) {
    if (className == method.name) {
      continue;
    }

    final funcName = method.name;
    var argName = parameterAlias(method, ParamAliasStyle.HasType,false);
    if (method.returnValue.isVoid()) {
        indent.writeln('+ (void)${funcName}${argName};');
    } else if (argName.isNotEmpty) {
      indent.writeln('+ (void)${funcName}${argName} completion:(UniCompleted)block');
    } else {
      // 理论上这里应该永远走不到
      indent.writeln('+ (void)${funcName}${argName}:(UniCompleted)block');
    }
    indent.scoped('{', '}', () {
      indent.writeln('FlutterBasicMessageChannel *channel =');
      indent.inc();
      indent.writeln('[FlutterBasicMessageChannel');
      indent.inc();
      indent.writeln('messageChannelWithName:@"com.didi.rlab.uni_api.${className}.${method.name}"');
      indent.writeln('binaryMessenger:[[self instance] binaryMessenger]];');
      indent.dec();
      indent.dec();

      indent.writeNewline();
      indent.writeln('// 数据处理');
      indent.write('NSDictionary *msg = [NSDictionary dictionaryWithObjectsAndKeys:\n');
      for (final param in method.parameters) {
        if(isNeedExport(param.type)) {
          if (isEnumType(param.type)) {
            indent.addln('\t\t[self wrapNil:@(${param.name})], @"${param.name}",');
          } else {
            indent.addln('\t\t[self wrapNil:${param.name}.toMap], @"${param.name}",');
          }
        } else {
          indent.addln('\t\t[self wrapNil:${param.name}], @"${param.name}",');
        }
      }
      indent.addln('\t\tnil];');
           
      indent.writeNewline();
      indent.writeln('// 发送消息');
      if (method.returnValue.isVoid()) {
        indent.writeln('[channel sendMessage:msg];');
      } else {
        indent.writeln('[channel sendMessage:msg reply:^(id  _Nullable reply) {');
        indent.scoped('', '}];', () {
          indent.writeln('if (reply && block) block(reply);');
        });
      }
      
    });
    indent.writeNewline();
  }

   indent.format('''
+ (id)wrapNil:(id)value {
\t\treturn value == nil ? [NSNull null] : value;
}''');
  indent.addln('');
  indent.writeNewline();
  indent.writeln('@end');
  indent.writeNewline();
}

/*
  UniAPI : 产生.h 
*/
void objcGenerateUniAPIHeader(StringSink sink, UniAPIOptions options) {
  final className = 'UniAPI';
  final indent = Indent(sink);

  objcGenerateDeclaration(className, 'h', indent);

  indent.format('''
#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

#define UNI_EXPORT(className) \\
__attribute__((used, section("__DATA , uni_api"))) \\
static char *__uni_export_class_##className##__ = ""#className"";

@interface UniAPI : NSObject

/// 加载导出类
+ (void)loadExportClass;

/// 获取协议的遵守者
+ (id)get:(NSString *)protocolName;

@end

NS_ASSUME_NONNULL_END
''');
  indent.addln('');
}

/*
  UniAPI : 产生.m
*/
void objcGenerateUniAPISource(StringSink sink, UniAPIOptions options) {
  final className = 'UniAPI';
  final indent = Indent(sink);

  objcGenerateDeclaration(className, 'm', indent);

   indent.format('''
#import "UniAPI.h"

#import <dlfcn.h>
#import <mach-o/getsect.h>

static NSMutableArray<Class> *UniSubscriberClasses;//注册代理类名称
static NSMutableDictionary<NSString *, NSObject *> *UniSubscriberInstanceCache;//注册代理类实例
static NSMutableDictionary<NSString *, NSString *> *UniProtocolToClassMap;//注册代理类协议与注册类间的映射

/// 获取所有Adapter类的名称
NSArray<Class> *_allSubscriberClasses(void) {
\t\treturn UniSubscriberClasses;
}

/// Subscriber实例存入缓存
/// @param clsName 实例类名
/// @param Obj 实例
void _writeSubscriberToCache(NSString *clsName,id Obj) {
\t\tif (Obj && clsName) {
\t\t\t\tif (UniSubscriberInstanceCache[clsName] == nil) {
\t\t\t\t\t\tUniSubscriberInstanceCache[clsName] = Obj;
\t\t\t\t}
\t\t}
}

/// 建立协议与注册类之间的映射关系
/// @param protocolName protocolName description
/// @param clsName clsName description
void _buildProtocolToClassMap(NSString *protocolName,NSString *clsName) {
\t\tif (protocolName && clsName) {
\t\t\t\tUniProtocolToClassMap[protocolName] = clsName;
\t\t}
}

NSString *_readClsNameWithProtocol(NSString *protocolName) {
\t\treturn  UniProtocolToClassMap[protocolName];
}


/// 通过类名查询Subscriber实例
/// @param clsName Adapter类名称
id _readSubscriberInCache(NSString *clsName) {
\t\treturn UniSubscriberInstanceCache[clsName];
}

/// 获取所有Subscriber实例
NSArray<id> *_allSubscriberInstances(void) {
\t\treturn UniSubscriberInstanceCache.allValues;
}

@implementation UniAPI

+ (void)loadExportClass {
\t\tstatic int __UNIAPI = 0;
\t\tstatic dispatch_once_t onceToken;
\t\tdispatch_once(&onceToken, ^{
\t\t\t\tUniSubscriberClasses = [NSMutableArray new];
\t\t\t\tUniSubscriberInstanceCache = [NSMutableDictionary new];
\t\t\t\tUniProtocolToClassMap = [NSMutableDictionary new];

\t\t\t\tDl_info info;
\t\t\t\tdladdr(&__UNIAPI, &info);

#ifndef __LP64__
\t\t\t\tconst struct mach_header *mhp = (struct mach_header*)info.dli_fbase;
\t\t\t\tunsigned long size = 0;
\t\t\t\tuint32_t *memory = (uint32_t*)getsectiondata(mhp, "__DATA", "uni_api", & size);
#else /* defined(__LP64__) */
\t\t\t\tconst struct mach_header_64 *mhp = (struct mach_header_64*)info.dli_fbase;
\t\t\t\tunsigned long size = 0;
\t\t\t\tuint64_t *memory = (uint64_t*)getsectiondata(mhp, "__DATA", "uni_api", & size);
#endif /* defined(__LP64__) */

\t\t\t\tfor(int idx = 0; idx < size/sizeof(void*); ++idx){
\t\t\t\t\t\tchar *string = (char*)memory[idx];
\t\t\t\t\t\tNSString *clsName = [NSString stringWithUTF8String:string];
\t\t\t\t\t\t[UniSubscriberClasses addObject:NSClassFromString(clsName)];

\t\t\t\t\t\tid obj = _readSubscriberInCache(clsName);
\t\t\t\t\t\tif (!obj) {
\t\t\t\t\t\t\t\t_writeSubscriberToCache(clsName,[NSClassFromString(clsName) new]);
\t\t\t\t\t\t}
\t\t\t\t}
\t\t});
}

+ (id)_getSubscriber:(NSString *)protocolName {
\t\tif (!protocolName) {
\t\t\t\treturn nil;
\t\t}

\t\tProtocol *p = NSProtocolFromString(protocolName);
\t\tNSString *clsName = _readClsNameWithProtocol(protocolName);
\t\t__block id subscriber = _readSubscriberInCache(clsName);
\t\tif (!subscriber) {
\t\t\t\tNSArray *subscribers = _allSubscriberInstances();
\t\t\t\t[subscribers enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
\t\t\t\t\tif ([obj conformsToProtocol:p]) {
\t\t\t\t\t\t\tsubscriber = obj;
\t\t\t\t\t\t\t*stop = YES;
\t\t\t\t\t}
\t\t\t\t}];
\t\t\t\tif (subscriber) {
\t\t\t\t\t_buildProtocolToClassMap(protocolName, NSStringFromClass([subscriber class]));
\t\t\t\t}
\t\t}

\t\treturn subscriber;
}

+ (id)get:(NSString *)protocolName {
\t\treturn [self _getSubscriber:protocolName];
}

@end
''');
  indent.addln('');
  indent.writeNewline();
}