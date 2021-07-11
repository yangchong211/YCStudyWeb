import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:path_provider/path_provider.dart';
import 'dart:io';

import 'package:yc_flutter_utils/file/file_utils.dart';

class FileStoragePage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => StorageState();
}

class StorageState extends State<FileStoragePage> {
  var _textFieldController = new TextEditingController();
  var _storageString = '';
  var _storageString2 = '';

  saveString() async {
    var string = _textFieldController.value.text.toString();
    FileUtils.saveHeatString(string, 'file.text');
  }

  Future getString() async {
    print("获取存在文件中的数据-----");
    var string = await FileUtils.getCacheString("file.text");
    print("获取存在文件中的数据"+string.toString());
    setState(() {
      _storageString = string;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('文件存储'),
      ),
      body: new Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text("文件存储字符串", textAlign: TextAlign.center),
          TextField(
            controller: _textFieldController,
          ),
          MaterialButton(
            onPressed: saveString,
            child: new Text("存储"),
            color: Colors.cyan,
          ),
          MaterialButton(
            onPressed: getString,
            child: new Text("获取"),
            color: Colors.deepOrange,
          ),
          Text('从文件存储中获取的值为  $_storageString'),
          new Divider(height: 1,),

          Text("文件存储model", textAlign: TextAlign.center),
          MaterialButton(
            onPressed: saveStringModel,
            child: new Text("存储model"),
            color: Colors.cyan,
          ),
          MaterialButton(
            onPressed: getStringModel,
            child: new Text("获取model"),
            color: Colors.deepOrange,
          ),
          MaterialButton(
            onPressed: clearModel,
            child: new Text("清除model文件"),
            color: Colors.deepOrange,
          ),
          Text('从文件存储中获取的值为  $_storageString2'),
        ],
      ),
    );
  }

  void saveStringModel() {
    var mapPositionModel = new MapPositionModel();
    mapPositionModel.lat = 1;
    mapPositionModel.lng = 2;
    var mapHeatModel = new MapHeatModel();
    var list = new List<MapPositionModel>();
    list.add(mapPositionModel);
    mapHeatModel.focusCenter = list;
    mapHeatModel.version = "520";
    FileCache.saveHeatString(mapHeatModel);
  }


  void getStringModel() async {
    print("获取存在文件中的bean数据-----");
    var model = await FileCache.getHeatString();
    if(model==null){
      setState(() {
        _storageString2 = "获取为null";
      });
    } else {
      print("获取存在文件中的bean数据-----"+model.version + "--"+model.focusCenter.length.toString());
      setState(() {
        _storageString2 = model.version + "--"+model.focusCenter.length.toString();
      });
    }
  }

  void clearModel() async{
    //获取文件
    FileUtils.clearFileData("hot.json");
  }

}

class FileCache{


  //初始化文件路径
  static Future<File> getFile(String fileName) async {
    //获取应用文件目录类似于Ios的NSDocumentDirectory和Android上的 AppData目录
    final fileDirectory = await getApplicationDocumentsDirectory();
    //获取存储路径
    final filePath = fileDirectory.path;
    //或者file对象（操作文件记得导入import 'dart:io'）
    return new File(filePath + "/"+fileName);
  }


  static saveHeatString(MapHeatModel model) async {
    if(model==null){
      return;
    }
    //将model转化成json字符串
    Map<String, dynamic> user = model.encode();
    var encode = json.encode(user);
    FileUtils.saveHeatString(encode, "hot.json");
  }


  static Future<MapHeatModel> getHeatString() async {
    //获取文件
    var cacheString = await FileUtils.getCacheString("hot.json");
    if(cacheString==null || cacheString.length==0){
      return null;
    }
    Map map = json.decode(cacheString);
    MapHeatModel model = MapHeatModel.decode(map);
    return model;
  }

}

class MapHeatModel{
  String version;
  List<MapPositionModel> focusCenter;

  Object encode() {
    final Map<String, dynamic> ret = <String, dynamic>{};
    ret['version'] = version;
    ret['focusCenter'] = focusCenter?.map((e) => e?.encode())?.toList();
    return ret;
  }

  static MapHeatModel decode(Object message){
    if (message == null) return null;
    final Map<dynamic, dynamic> rawMap = message as Map<dynamic, dynamic>;
    final Map<String, dynamic> map = Map.from(rawMap);
    return MapHeatModel()
      ..version = map['version'] == null
          ?null
          :map['version'] as String

      ..focusCenter = map['focusCenter'] == null
          ?[]
          :List.from(map['focusCenter'])
          ?.map((e) => e == null
          ? null
          : MapPositionModel.decode(e))
          ?.toList()
    ;
  }
}

class MapPositionModel {
  double lat;
  double lng;

  Object encode() {
    final Map<String, dynamic> ret = <String, dynamic>{};
    ret['lat'] = lat;
    ret['lng'] = lng;
    return ret;
  }

  static MapPositionModel decode(Object message){
    if (message == null) return null;
    final Map<dynamic, dynamic> rawMap = message as Map<dynamic, dynamic>;
    final Map<String, dynamic> map = Map.from(rawMap);
    return MapPositionModel()
      ..lat = map['lat'] == null
          ?0.0
          :map['lat'] as double

      ..lng = map['lng'] == null
          ?0.0
          :map['lng'] as double
    ;
  }
}
