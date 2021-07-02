


import 'package:flutter/material.dart';
import 'package:flutter_lib/utils/bus/event_bus_helper.dart';
import 'package:flutter_lib/res/image/images.dart';

class AnimationListenerPage1 extends StatefulWidget{

  @override
  State<StatefulWidget> createState() {
    return new AnimationListenerState1();
  }

}

class AnimationListenerState1 extends State<AnimationListenerPage1>{
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("动画基本结构"),
      ),
      body: new Center(
        child: new ListView(
          children: [
            new Text(
              "这个是一个 动画基本结构",
              style:new TextStyle(
                color: Colors.red,
                fontSize: 20,
              ),
            ),
            new Text("演示一下最基础的动画实现方式"),
            new RaisedButton(
                onPressed: () {
                  bus.emit("animation1", (arg) {});
                },
                child: new Text("开启动画")
            ),
            Container(
              height: 200,
              color: Colors.blue[50],
              child: getFuture(),
            ),


            new Text(
              "这个是一个 AnimatedWidget简化",
              style:new TextStyle(
                color: Colors.red,
                fontSize: 20,
              ),
            ),
            new Text("上面动画通过addListener()和setState() 来更新UI这一步其实是通用的，"
                "如果每个动画中都加这么一句是比较繁琐的。AnimatedWidget类封装了"
                "调用setState()的细节，并允许我们将widget分离出来"),
            new RaisedButton(
                onPressed: () {
                  bus.emit("animation2", (arg) {});
                },
                child: new Text("开启动画")
            ),
            Container(
              height: 200,
              color: Colors.blue[50],
              child: getFuture1(),
            ),


          ],
        ),
      ),
    );
  }


  Widget getFuture(){
    var scaleAnimationRoute = new ScaleAnimationRoute();
    return scaleAnimationRoute;
  }

  Widget getFuture1(){
    var scaleAnimationRoute1 = new ScaleAnimationRoute1();
    return scaleAnimationRoute1;
  }

}


class ScaleAnimationRoute extends StatefulWidget {
  @override
  _ScaleAnimationRouteState createState() => new _ScaleAnimationRouteState();
}

//需要继承TickerProvider，如果有多个AnimationController，则应该使用TickerProviderStateMixin。
class _ScaleAnimationRouteState extends State<ScaleAnimationRoute>  with SingleTickerProviderStateMixin{

  Animation<double> animation;
  AnimationController controller;



  initState() {
    super.initState();
    controller = new AnimationController(
        duration: const Duration(seconds: 3), vsync: this);
    //图片宽高从0变到300
    animation = new Tween(begin: 0.0, end: 300.0).animate(controller)..addListener(() {
        setState(()=>{

        });
    });
    //启动动画(正向执行)
    controller.forward();

    bus.on("animation1", (arg) {
      //todo 重新开始动画如何操作
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Center(
      child: Image.asset(Images.person,
          width: animation.value,
          height: animation.value
      ),
    );
  }

  dispose() {
    //路由销毁时需要释放动画资源
    controller.dispose();
    bus.off("animation1", (arg) {

    });
    super.dispose();
  }
}

class AnimatedImage extends AnimatedWidget {
  AnimatedImage({Key key, Animation<double> animation})
      : super(key: key, listenable: animation);

  Widget build(BuildContext context) {
    final Animation<double> animation = listenable;
    return new Center(
      child: Image.asset(Images.person,
          width: animation.value,
          height: animation.value
      ),
    );
  }
}


class ScaleAnimationRoute1 extends StatefulWidget {
  @override
  _ScaleAnimationRouteState1 createState() => new _ScaleAnimationRouteState1();
}

class _ScaleAnimationRouteState1 extends State<ScaleAnimationRoute1> with SingleTickerProviderStateMixin {

  Animation<double> animation;
  AnimationController controller;

  initState() {
    super.initState();
    controller = new AnimationController(
        duration: const Duration(seconds: 3), vsync: this);
    //图片宽高从0变到300
    animation = new Tween(begin: 0.0, end: 300.0).animate(controller);
    //启动动画
    controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedImage(animation: animation,);
  }

  dispose() {
    //路由销毁时需要释放动画资源
    controller.dispose();
    super.dispose();
  }
}