


import 'package:flutter/material.dart';
import 'package:flutter_lib/page/utils/data_page.dart';
import 'package:flutter_lib/page/utils/json_utils_page.dart';
import 'package:flutter_lib/page/vessel/padding_page.dart';
import 'package:flutter_lib/page/utils/get_it_page.dart';
import 'package:flutter_lib/widget/custom_raised_button.dart';

class UtilsWidgetPage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new UtilsWidgetState();
  }

}

class UtilsWidgetState extends State<UtilsWidgetPage>{
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("工具类测试demo案例"),
      ),
      body: new Center(
        child: new Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CustomRaisedButton(new GetItPage(), "ServiceLocator案例"),
            CustomRaisedButton(new JsonUtilsPage(), "JsonUtils工具类"),
            CustomRaisedButton(new DatePage(), "DateUtils工具类"),
          ],
        ),
      ),
    );
  }

}