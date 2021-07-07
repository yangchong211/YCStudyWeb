import 'package:flutter/material.dart';
import 'package:flutter_lib/page/utils/model/city.dart';
import 'package:flutter_lib/utils/getIt/get_it.dart';
import 'package:flutter_lib/utils/getIt/get_it_helper.dart';
import 'package:flutter_lib/utils/json/json_utils.dart';
import 'package:flutter_lib/utils/log_utils.dart';


class JsonUtilsPage extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {
    return new JsonUtilsState();
  }

}

class JsonUtilsState extends State<JsonUtilsPage>{

  String title1 = "初始化值";
  String title2 = "初始化值";
  String title3 = "初始化值";
  String title4 = "初始化值";

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      //https://www.jianshu.com/p/82842d07e8fe
        appBar: new AppBar(title: new Text("测试JsonUtils的功能")),
        body: ListView(
          children: <Widget>[
            new Text("测试GetItHelper的功能"),
            new Text(title1),
            RaisedButton(
              onPressed: () {
                String objStr = "{\"name\":\"成都市\"}";
                City hisCity = JsonUtils.getObj(objStr, (v) => City.fromJson(v));
                setState(() {
                  title1 = "City对象："+hisCity.name;
                });
              },
              color: const Color(0xffff0000),
              child: new Text('转换JSON字符串[源]到对象'),
            ),
            new Divider(),
            new Text(title2),
            RaisedButton(
              onPressed: () {
                String listStr = "[{\"name\":\"成都市\"}, {\"name\":\"北京市\"}]";
                List<City> cityList = JsonUtils.getObjList(listStr, (v) => City.fromJson(v));
                setState(() {
                  setState(() {
                    title1 = "City对象列表："+cityList.length.toString();
                  });
                });
              },
              color: const Color(0xffff0000),
              child: new Text('转换JSON字符串列表[源]到对象列表'),
            ),
          ],
        ));
  }

}



