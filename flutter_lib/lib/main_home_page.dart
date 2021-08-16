
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:yc_flutter_utils/screen/screen_utils.dart';

class MyHomePage extends StatefulWidget {

  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  DateTime _lastPressedAt; //上次点击时间

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
          child: new WillPopScope(
            // onWillPop是一个回调函数，当用户点击返回按钮时调用（包括导航返回按钮及Android物理返回按钮），
            // 该回调需要返回一个Future对象，如果返回的Future最终值为false时，
            // 则当前路由不出栈(不会返回)，最终值为true时，当前路由出栈退出。
              onWillPop: () async {
                if (_lastPressedAt == null ||
                    DateTime.now().difference(_lastPressedAt) > Duration(seconds: 3)) {
                  //两次点击间隔超过1秒则重新计时
                  _lastPressedAt = DateTime.now();
                  print('再按一次 Back 按钮退出');
                  Scaffold.of(context).showSnackBar(SnackBar(content: Text('再按一次回到桌面')));
                  return false;
                }
                return true;
              },
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
                  new Text("这个是一个 导航返回拦截（WillPopScope）",
                    style:new TextStyle(
                      color: Colors.red,
                      fontSize: 20,
                    ),
                  ),
                ],
              ),
          ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }

  void set(BuildContext context){
    ScreenUtils.instance.init(context);
    var screenWidthDp = ScreenUtils.screenWidthDp;
    var screenHeightDp = ScreenUtils.screenHeightDp;
    var pixelRatio = ScreenUtils.pixelRatio;
    var screenWidth = ScreenUtils.screenWidth;
    var screenHeight = ScreenUtils.screenHeight;
    var statusBarHeight = ScreenUtils.statusBarHeight;
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

