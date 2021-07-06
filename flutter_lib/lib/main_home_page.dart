
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_lib/utils/screen/screen_utils.dart';

class MyHomePage extends StatefulWidget {

  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  //没有关键词 public 、private 等修饰符
  int _counter = 0;
  String screen = "";

  @override
  void initState() {
    super.initState();
    //延时500毫秒执行
    Future.delayed(const Duration(milliseconds: 2500), () {
      set(context);
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


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
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
              ),
              new Padding(
                padding: const EdgeInsets.all(10.0),
                child: new Text(screen),
              ),
            ],
          )
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }

  void set(BuildContext context){
    ScreenUtil.instance.init(context);
    var screenWidthDp = ScreenUtil.screenWidthDp;
    var screenHeightDp = ScreenUtil.screenHeightDp;
    var pixelRatio = ScreenUtil.pixelRatio;
    var screenWidth = ScreenUtil.screenWidth;
    var screenHeight = ScreenUtil.screenHeight;
    var statusBarHeight = ScreenUtil.statusBarHeight;
    screen =
        "当前设备宽度 dp:"+screenWidthDp.toString() + "\n" +
            "当前设备高度 dp:"+screenHeightDp.toString() + "\n" +
            "设备的像素密度 :"+pixelRatio.toString() + "\n" +
            "当前设备宽度 px:"+screenWidth.toString() + "\n" +
            "当前设备高度 px:"+screenHeight.toString() + "\n" +
            "状态栏高度 dp:"+statusBarHeight.toString() + "\n"
    ;
    setState(() {

    });
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
