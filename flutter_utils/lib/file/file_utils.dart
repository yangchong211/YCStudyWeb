

import 'dart:io';

import 'package:path_provider/path_provider.dart';
import 'package:yc_flutter_utils/log/log_utils.dart';

class FileUtils{

  ///初始化文件路径
  static Future<File> _getFile(String fileName) async {
    //用于放置用户生成的数据或不能有应用程序重新创建的数据 用户不可见(IOS和安卓通用)
    final fileDirectory = await getApplicationDocumentsDirectory();
    //获取存储路径
    final filePath = fileDirectory.path;
    //或者file对象（操作文件记得导入import 'dart:io'）
    return new File(filePath + "/" + fileName);
  }

  ///利用文件存储数据
  static saveHeatString(String model , String fileName) async {
    if(model==null){
      return;
    }
    //获取文件
    var file = await _getFile(fileName);
    LogUtils.i("saveHeatString---file-----"+file.path,tag: "FileCacheUtils");
    //写入字符串
    file.writeAsString(model);
  }

  ///获取存在文件中的数据
  ///使用async、await，返回是一个Future对象
  static Future<String> getCacheString(String fileName) async {
    //获取文件
    final file = await _getFile(fileName);
    LogUtils.i("getCacheString---file-----"+file.path,tag: "FileCacheUtils");
    //从文件读取数据
    String value = await file.readAsString();
    return value;
  }


  ///清除缓存数据
  static clearFileData(String fileName) async{
    //获取文件
    final file = await _getFile(fileName);
    file.writeAsStringSync("");
    //file.delete();
    LogUtils.i("clearFileData---file-----"+file.path,tag: "FileCacheUtils");
  }

  ///清除缓存数据
  static deleteFileData(String fileName) async{
    //获取文件
    final file = await _getFile(fileName);
    //file.writeAsStringSync("");
    file.delete();
    LogUtils.i("deleteFileData---file-----"+file.path,tag: "FileCacheUtils");
  }

}