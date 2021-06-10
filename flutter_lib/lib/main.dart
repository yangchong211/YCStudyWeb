import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'dart:async';

import 'package:flutter_lib/about_me_page.dart';
import 'package:flutter_lib/net_work_page.dart';

void main() => runApp(new MyApp());


class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter和Android混编项目',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home:  _widgetForRoute(window.defaultRouteName),
    );
  }
}


Widget _widgetForRoute(String route) {
  switch (route) {
    case 'yc_route':
      return  MyHomePage(title: '匹配到了，这个是flutter页面');
    case 'yc':
      return AboutMePage();
    case 'net':
      return NetWorkPage();
    default:
      return  MyHomePage(title: '没有匹配到，查看route是否一致');
  }
}

class MyHomePage extends StatefulWidget {

  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  //获取到插件与原生的交互通道
  static const toAndroidPlugin = const MethodChannel('com.ycbjie.toandroid/plugin');
  static const fromAndroidPlugin = const EventChannel('com.ycbjie.toflutter/plugin');

  // ignore: cancel_subscriptions
  StreamSubscription _fromAndroidSub;

  var _nativeParams1;

  @override
  void initState() {
    super.initState();
    // Flutter接收原生发送的参数
    // 开启监听
    _startFromAndroidPlugin();
  }

  @override
  void dispose() {
    super.dispose();
    // Flutter接收原生发送的参数
    // 取消监听
    if(_fromAndroidSub != null){
      _fromAndroidSub.cancel();
    }
  }

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }


  // Flutter接收原生发送的参数开启监听
  // 从Android原生项目接收传递的参数
  void _startFromAndroidPlugin(){
    if(_fromAndroidSub == null){
      _fromAndroidSub =  fromAndroidPlugin.receiveBroadcastStream()
          .listen(_onFromAndroidEvent,onError: _onFromAndroidError);
    }
  }


  void _onFromAndroidEvent(Object event) {
    setState(() {
      _nativeParams1 = event;
    });
  }

  //接收失败
  void _onFromAndroidError(Object error) {
    setState(() {
      _nativeParams1 = "error";
      print(error);
    });
  }


  Future<Null> _jumpToNative() async {
    String result = await toAndroidPlugin.invokeMethod('doubi');
    print(result);
  }


  Future<Null> _jumpToNativeWithParams1() async {
    Map<String, String> map = { "flutter": "这是一条来自flutter的参数" };
    String result = await toAndroidPlugin.invokeMethod('android', map);
    print(result);
  }

  Future<Null> _jumpToNativeWithParams2() async {
    List list = new List();
    list.add('逗比');
    list.add('小杨');
    Map<String, List> map = { "flutter": list};
    String result = await toAndroidPlugin.invokeMethod('android', map);
    print(result);
  }


  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body:  Center(
          child: new ListView(
            children: <Widget>[
              new Padding(
                padding: const EdgeInsets.only(left: 10.0, top: 10.0, right: 10.0),
                child: new RaisedButton(
                    textColor: Colors.black,
                    child: new Text('跳转到原生逗比界面'),
                    onPressed: () {
                      _jumpToNative();
                    }),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new RaisedButton(
                    textColor: Colors.black,
                    child: new Text('跳转到原生小杨界面(带参数，普通字符串)'),
                    onPressed: () {
                      _jumpToNativeWithParams1();
                    }),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new RaisedButton(
                    textColor: Colors.black,
                    child: new Text('跳转到原生小杨界面(带参数，集合)'),
                    onPressed: () {
                      _jumpToNativeWithParams2();
                    }),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new Text('EventChannel 这是一个从原生获取的参数：$_nativeParams1'),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new Text('Flutter 按钮 点击次数$_counter'),
              )

            ],
          )
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
