
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class BasicChannelPage extends StatefulWidget {

  BasicChannelPage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _BasicChannelState createState() => _BasicChannelState();
}

class _BasicChannelState extends State<BasicChannelPage> {
  int _counter = 0;
  //获取到插件与原生的交互通道
  static const ycPlugin = const BasicMessageChannel('com.ycbjie.android/basic',StringCodec());

  var _nativeParams;
  var _methodResult1 = "";
  var _methodResult2 = "";
  var _methodResult3 = "";


  @override
  void initState() {
    super.initState();

    //BasicMessageChannel互相调用，接收消息
    // ignore: missing_return
    ycPlugin.setMessageHandler((str){
      _nativeParams = str;
    });
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

  Future<Null> _jumpToNativeWithParams() async {
    // 发送消息
    ycPlugin.send("点击回掉信息");
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
                      _jumpToNativeWithParams();
                    }),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new RaisedButton(
                    textColor: Colors.black,
                    child: new Text('打开原生相册，回调结果：$_methodResult3'),
                    onPressed: () {

                    }),
              ),
              new Padding(
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new Text('BasicMessageChannel 这是一个从原生获取的参数：$_nativeParams'),
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
