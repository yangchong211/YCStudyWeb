import 'package:flutter/material.dart';
import 'package:flutter_lib/res/image/images.dart';

class StackLayoutPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(
          title: new Text('层叠布局'),
        ),
        body: Column(
          children: <Widget>[
            new Text(
              "Stack即层叠布局，跟原生Android里面的FrameLayout如出一辙，能够将子widget层叠排列。"
                  "如果不指定显示位置，默认布局在左上角，如果希望子空间显示在具体的位置，"
                  "我们可以通过Positioned控件包裹子widget，然后根据定位的子控件的"
                  "top、right、bottom、left属性来将它们放置在Stack的合适位置上",
            ),
            new Center(
              // Stack，Stack 这个是Flutter中布局用到的组件,可以叠加的现实View.
              // alignment : 指的是子Widget的对其方式，默认情况是以左上角为开始点 ，这个属性是最难理解的，它区分为使用了Positioned和未使用Positioned定义两种情况，没有使用Positioned情况还是比较好理解的.
              // fit :用来决定没有Positioned方式时候子Widget的大小，StackFit.loose 指的是子Widget 多大就多大，StackFit.expand使子Widget的大小和父组件一样大.
              // overflow :指子Widget 超出Stack时候如何显示，默认值是Overflow.clip，子Widget超出Stack会被截断，Overflow.visible超出部分还会显示的.
              child: new Stack(
                children: <Widget>[
                  new Image.asset(
                    Images.image1,
                    scale: 0.5,
                  ),
                  new Positioned(
                      left: 35.0,
                      right: 35.0,
                      top: 45.0,
                      child: new Text(
                        '第二层内容区域',
                        style: new TextStyle(
                          fontSize: 20.0,
                          fontFamily: 'serif',
                        ),
                      )),
                  new Positioned(
                      left: 55.0,
                      right: 55.0,
                      top: 55.0,
                      child: new Text(
                        '第三层 third child',
                        style: new TextStyle(
                          fontSize: 20.0,
                          color: Colors.blue,
                          fontFamily: 'serif',
                        ),
                      ))
                ],
              ),
            ),
            new Stack(
              children: [
                new Align(
                  alignment: new FractionalOffset(0.0, 0.5),
                  child: new Text(
                    '我在左边缘中心',
                    style: new TextStyle(fontSize: 20.0),
                  ),
                ),
                new Align(
                  alignment: new FractionalOffset(1.0, 1.0),
                  child: new Text(
                    '我在右下角',
                    style: new TextStyle(fontSize: 18.0),
                  ),
                ),
              ],
            ),
          ],
        ));
  }
}
