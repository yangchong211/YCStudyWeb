

import 'dart:async';

import 'package:flutter/material.dart';
import 'package:ycflutter/res/YcColors.dart';
import 'package:ycflutter/test/LifecycleAppPage.dart';
import 'package:ycflutter/test/ListLoadMore.dart';
import 'package:ycflutter/test/ListMore.dart';
import 'package:ycflutter/test/ListRefreshMore.dart';
import 'package:ycflutter/test/TestList.dart';
import 'package:ycflutter/test/TestState.dart';
import 'package:ycflutter/test/WidgetPage.dart';

class TestPage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new TestPageState();
  }
}

class TestPageState extends State<TestPage>{
  @override
  Widget build(BuildContext context) {
    //test();
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('测试的案例代码'),
      ),
      body: new ListView(
        padding: new EdgeInsets.fromLTRB(100, 0, 10, 0),
        children: <Widget>[
          new ListTile(
              title: const Text('list页面'),
              trailing:  Icon(Icons.arrow_forward, color: YcColors.colorPrimary),
              onTap: () {
                Navigator.of(context).push(new MaterialPageRoute(builder: (context){
                  return new TestList();
                }));
              }
          ),
          new Divider(),
          new ListTile(
            title: const Text("list页面上拉加载更多"),
            trailing:  Icon(Icons.arrow_forward, color: YcColors.colorPrimary),
            onTap: (){
              Navigator.of(context).push(new MaterialPageRoute(builder: (context){
                return new ListLoadMore();
              }));
            },
          ),
          new Divider(),
          new ListTile(
            title: new Text("list页面下拉刷新全部数据"),
            trailing:  Icon(Icons.arrow_forward, color: YcColors.colorPrimary),
            onTap: (){
              Navigator.of(context).push(new MaterialPageRoute(builder: (context){
                return new ListRefreshMore();
              }));
            },
          ),
          new Divider(),
          new ListTile(
            title: new Text("list页面上拉加载下拉刷新"),
            trailing:  Icon(Icons.arrow_forward, color: YcColors.colorPrimary),
            onTap: (){
              Navigator.of(context).push(new MaterialPageRoute(builder: (context){
                return new ListMore();
              }));
            },
          ),
          new Divider(),
          new ListTile(
            title: new Text("基础控件学习和运用"),
            trailing:  Icon(Icons.arrow_forward, color: YcColors.colorPrimary),
            onTap: (){
              Navigator.of(context).push(new MaterialPageRoute(builder: (context){
                return new WidgetPage();
              }));
            },
          ),
          new Divider(),
          new ListTile(
            title: new Text("研究测试State状态"),
            trailing:  Icon(Icons.arrow_forward, color: YcColors.colorPrimary),
            onTap: (){
              Navigator.of(context).push(new MaterialPageRoute(builder: (context){
                return new TestState();
              }));
            },
          ),
          new Divider(),
          new ListTile(
            title: new Text("flutter的生命周期"),
            trailing:  Icon(Icons.arrow_forward, color: YcColors.colorPrimary),
            onTap: (){
              Navigator.of(context).push(new MaterialPageRoute(builder: (context){
                return new LifecycleAppPage();
              }));
            },
          ),
          new Divider(),
        ],
      ),
    );
  }



  void test(){
    Future.delayed(new Duration(seconds: 2),(){
      return "hi world!";
    }).then((data){
      print(data);
    });

    Future.delayed(new Duration(seconds: 2),(){
      //return "hi world!";
      throw AssertionError("Error");
    }).then((data){
      //执行成功会走到这里
      print("success");
    }).catchError((e){
      //执行失败会走到这里
      print(e);
    });

    Future.delayed(new Duration(seconds: 2), () {
      //return "hi world!";
      throw AssertionError("Error");
    }).then((data) {
      print("success");
    },onError:(e) {
      print(e);
    });

    Future.wait([
      // 2秒后返回结果
      Future.delayed(new Duration(seconds: 2), () {
        return "hello";
      }),
      // 4秒后返回结果
      Future.delayed(new Duration(seconds: 4), () {
        return " world";
      })
    ]).then((results){
      print(results[0]+results[1]);
    }).catchError((e){
      print(e);
    });
  }

}

