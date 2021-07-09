

import 'dart:io';

import 'package:path_provider/path_provider.dart';

class FileCacheUtils{

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
  saveHeatString(String model , String fileName) async {
    if(model==null){
      return;
    }
    //获取文件
    var file = await _getFile(fileName);
    //写入字符串
    file.writeAsString(model);
  }

  ///获取存在文件中的数据
  Future<String> getCacheString(String fileName) async {
    //获取文件
    final file = await _getFile(fileName);
    //从文件读取数据
    String value = await file.readAsString();
    return value;
  }


}