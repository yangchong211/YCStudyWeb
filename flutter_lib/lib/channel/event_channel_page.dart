
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class EventChannelPage extends StatefulWidget {

  EventChannelPage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _EventChannelState createState() => _EventChannelState();
}

class _EventChannelState extends State<EventChannelPage> {
  int _counter = 0;
  //获取到插件与原生的交互通道
  static const event = const EventChannel('com.ycbjie.android/event');

  // ignore: cancel_subscriptions
  StreamSubscription _fromAndroidSub;

  var _nativeParams;
  var _methodResult1 = "";
  var _methodResult2 = "";
  var _methodResult3 = "";
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
      _fromAndroidSub =  event.receiveBroadcastStream()
          .listen(_onFromAndroidEvent,onError: _onFromAndroidError);
    }
  }

  ///event事件交互成功监听
  void _onFromAndroidEvent(Object event) {
    setState(() {
      _nativeParams = event;
    });
  }

  ///event事件交互失败监听
  void _onFromAndroidError(Object error) {
    setState(() {
      _nativeParams = "error";
      print(error);
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

                    }),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new RaisedButton(
                    textColor: Colors.black,
                    child: new Text('跳转到原生界面(带参数Str)，回调结果：$_methodResult2'),
                    onPressed: () {

                    }),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new RaisedButton(
                    textColor: Colors.black,
                    child: new Text('跳转到原生界面(带参数List)，回调结果：$_methodResult3'),
                    onPressed: () {

                    }),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new Text('EventChannel 这是一个从原生获取的参数：$_nativeParams'),
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
