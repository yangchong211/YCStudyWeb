

import 'package:flutter/material.dart';
import 'package:ycflutter/res/YcColors.dart';
import 'package:ycflutter/test/ListLoadMore.dart';
import 'package:ycflutter/test/ListMore.dart';
import 'package:ycflutter/test/ListRefreshMore.dart';
import 'package:ycflutter/test/TestList.dart';
import 'package:ycflutter/test/WidgetPage.dart';

class TestState extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new TestPageState();
  }
}

class TestPageState extends State<TestState>{

  String data = "逗比";

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('测试的案例代码'),
      ),
      body: new Center(
        //第一处
        child: new Page(data),
      ),
      floatingActionButton: new FloatingActionButton(
        onPressed: (){
          setState(() {
            //第四处
            data = "杨充";
          });
        },
      ),
    );
  }
}

class Page extends StatefulWidget{

  String data;
  Page(String data) {
    //第二处
    this.data = data;
  }

  @override
  State<StatefulWidget> createState() {
    return new PageState(data);
  }

}

class PageState extends State<Page>{

  String data;
  PageState(this.data);


  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: new Center(
        //第三处
        //child: new Text(widget.data),
        child: new Text(data),
      ),
    );
  }
}





