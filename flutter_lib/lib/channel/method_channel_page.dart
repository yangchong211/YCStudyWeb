
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class MethodChannelPage extends StatefulWidget {

  MethodChannelPage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MethodChannelState createState() => _MethodChannelState();
}

class _MethodChannelState extends State<MethodChannelPage> {

  int _counter = 0;
  //获取到插件与原生的交互通道
  static const method = const MethodChannel('com.ycbjie.android/method');


  var _nativeParams2;
  var _methodResult1 = "";
  var _methodResult2 = "";
  var _methodResult3 = "";
  @override
  void initState() {
    super.initState();
    //接受na端传递过来的方法，并做出响应逻辑处理
    method.setMethodCallHandler(nativeCallHandler);
  }

  @override
  void dispose() {
    super.dispose();
  }

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  // 注册方法，等待被原生通过invokeMethod唤起
  Future<dynamic> nativeCallHandler(MethodCall methodCall) async {
    switch (methodCall.method) {
      case "getFlutterResult":
      //获取参数
        String paramsFromNative = await methodCall.arguments["invokeKey"];
        print("原生android传递过来的参数为------ $paramsFromNative");
        setState(() {
          _nativeParams2 = paramsFromNative;
        });
        return "你好，这个是从flutter传递过来的数据";
        break;
    }
  }

  Future<Null> _jumpToNative() async {
    String result = await method.invokeMethod('doubi');
    print(result);
    setState(() {
      _methodResult1 = result;
    });
  }


  Future<Null> _jumpToNativeWithParams1() async {
    Map<String, String> map = { "flutter": "这是一条来自flutter的参数" };
    String result = await method.invokeMethod('android', map);
    print(result);
    setState(() {
      _methodResult2 = result;
    });
  }

  Future<Null> _jumpToNativeWithParams2() async {
    List list = new List();
    list.add('逗比');
    list.add('小杨');
    Map<String, List> map = { "flutter": list};
    String result = await method.invokeMethod('android', map);
    print(result);
    setState(() {
      _methodResult3 = result+"--";
    });
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
                    child: new Text('跳转到原生逗比界面，回调结果：$_methodResult1'),
                    onPressed: () {
                      _jumpToNative();
                    }),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new RaisedButton(
                    textColor: Colors.black,
                    child: new Text('跳转到原生界面(带参数Str)，回调结果：$_methodResult2'),
                    onPressed: () {
                      _jumpToNativeWithParams1();
                    }),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new RaisedButton(
                    textColor: Colors.black,
                    child: new Text('跳转到原生界面(带参数List)，回调结果：$_methodResult3'),
                    onPressed: () {
                      _jumpToNativeWithParams2();
                    }),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new Text('MethodChannel 这是一个从原生获取的参数：$_nativeParams2'),
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