
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class MyHomePage extends StatefulWidget {

  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  // 没有关键词 public 、private 等修饰符
  // _下横向直接代表 private ，但是有 @protected 注解。
  int _counter = 0;

  @override
  void initState() {
    super.initState();
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
                padding: const EdgeInsets.only(
                    left: 10.0, top: 10.0, right: 10.0),
                child: new Text('这个是flutter页面'),
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

///无参构造方法，需要手动添加无参构造方法。
class HomePage extends  StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new HomeState();
  }
}

class HomeState extends State<HomePage> {

  //这个方法必须写
  @override
  Widget build(BuildContext context) {
    return widget;
  }
  //构造方法
  HomeState(){

  }
}

/// 有参构造方法
class BannerView extends StatefulWidget {

  var data;
  BannerView(data){
    this.data = data;
  }

  @override
  State<StatefulWidget> createState() {
    return new BannerViewState(data);
  }
}

class BannerViewState extends State<BannerView>{

  List data;
  BannerViewState(data){
    this.data = data;
  }

  @override
  Widget build(BuildContext context) {
    return widget;
  }

}
