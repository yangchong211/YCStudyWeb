import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:yc_flutter_tool/res/color/yc_colors.dart';
import 'package:yc_flutter_utils/calcu/calculate_utils.dart';
import 'package:yc_flutter_utils/log/log_utils.dart';
import 'dart:ui' as ui;

class TextPage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new TextPageState();
  }

}


class TextPageState extends State<TextPage>{

  @toDo("这个定义的变量", "注意初始化")
  String text1 = "初始化值";

  @override
  void initState() {
    super.initState();
    tapGesture();
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(
          title: new Text("Hello Flutter"),
        ),
        body: new Center(
          child: new Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              new Text(
                "这个是一个文本控件",
                style: new TextStyle(
                  fontSize: 18.0,
                  color: YCColors.color_FF0000,
                ),
                maxLines: 3,
                textDirection: TextDirection.rtl,
              ),
              new Text(
                'inherit: 为 false 的时候不显示',
                style: new TextStyle(
                  fontSize: 18.0,
                  color: Colors.redAccent,
                  inherit: true,
                ),
              ),
              new Text(
                'color/fontSize: 字体颜色，字号等',
                style: new TextStyle(
                  color: Color.fromARGB(255, 150, 150, 150),
                  fontSize: 22.0,
                ),
              ),
              new Text(
                'fontWeight: 字重',
                style: new TextStyle(
                    fontSize: 18.0,
                    color: Colors.redAccent,
                    fontWeight: FontWeight.w700),
              ),
              new Text(
                'fontStyle: FontStyle.italic 斜体',
                style: new TextStyle(
                  fontStyle: FontStyle.italic,
                ),
              ),
              new Text(
                'letterSpacing: 字符间距',
                style: new TextStyle(
                  letterSpacing: 10.0,
                  // wordSpacing: 15.0
                ),
              ),
              new Text(
                'wordSpacing: 字或单词间距',
                style: new TextStyle(
                  // letterSpacing: 10.0,
                    wordSpacing: 15.0
                ),
              ),
              new Text(
                'textBaseline:这一行的值为TextBaseline.alphabetic',
                style: new TextStyle(textBaseline: TextBaseline.alphabetic),
              ),
              new Text(
                'textBaseline:这一行的值为TextBaseline.ideographic',
                style: new TextStyle(textBaseline: TextBaseline.ideographic),
              ),
              new Text('height: 用在Text控件上的时候，会乘以fontSize做为行高,所以这个值不能设置过大',
                  style: new TextStyle(
                    height: 1.0,
                  )),
              new Text('decoration: TextDecoration.overline 上划线',
                  style: new TextStyle(
                      fontSize: 18.0,
                      color: Colors.redAccent,
                      decoration: TextDecoration.overline,
                      decorationStyle: TextDecorationStyle.wavy)),
              new Text('decoration: TextDecoration.lineThrough 删除线',
                  style: new TextStyle(
                      decoration: TextDecoration.lineThrough,
                      decorationStyle: TextDecorationStyle.dashed)),
              new Text('decoration: TextDecoration.underline 下划线',
                  style: new TextStyle(
                      fontSize: 18.0,
                      color: Colors.redAccent,
                      decoration: TextDecoration.underline,
                      decorationStyle: TextDecorationStyle.dotted)),
              new RaisedButton(
                  onPressed: () {
                    getText(context);
                  },
                  child: new Text("获取屏幕的宽高属性")
              ),
              Padding(padding: EdgeInsetsDirectional.only(top: 20)),
              new Text( "这个是文本 : RichText"),
              richTextWid01(),
              richTextWid02(),
              richTextWid03(),
              richTextWid04(),
              richTextWid05(),

              Padding(padding: EdgeInsetsDirectional.only(top: 20)),
              new Text( "这个是文本 : textPainter"),
              //textPainter1(),
            ],
          ),
        ));
  }

  /**
   *
   */

  Widget richTextWid01() {
    return RichText(
        text: TextSpan(
            text: 'TextDirection.ltr 文字默认居左',
            style: TextStyle(fontSize: 16.0, color: Colors.black)),
        textDirection: TextDirection.ltr);
  }

  Widget richTextWid02() {
    return RichText(
        text: TextSpan(
            text: 'TextDirection.rtl 文字默认居右',
            style: TextStyle(fontSize: 16.0, color: Colors.black)),
        textDirection: TextDirection.rtl);
  }

  Widget richTextWid03() {
    return RichText(
        text: TextSpan(
            text: 'textDirection 与 textAlign 同时设置，优先看整体，文字居中',
            style: TextStyle(fontSize: 16.0, color: Colors.black)),
        textDirection: TextDirection.rtl,
        textAlign: TextAlign.center);
  }

  Widget richTextWid04() {
    return RichText(
        text: TextSpan(
            text: '多种样式，如：',
            style: TextStyle(fontSize: 16.0, color: Colors.black),
            children: <TextSpan>[
              TextSpan(
                  text: '红色',
                  style: TextStyle(fontSize: 18.0, color: Colors.red)),
              TextSpan(
                  text: '绿色',
                  style: TextStyle(fontSize: 18.0, color: Colors.green)),
              TextSpan(
                  text: '蓝色',
                  style: TextStyle(fontSize: 18.0, color: Colors.blue)),
              TextSpan(
                  text: '白色',
                  style: TextStyle(fontSize: 18.0, color: Colors.white)),
              TextSpan(
                  text: '紫色',
                  style: TextStyle(fontSize: 18.0, color: Colors.purple)),
              TextSpan(
                  text: '黑色',
                  style: TextStyle(fontSize: 18.0, color: Colors.black))
            ]),
        textAlign: TextAlign.center);
  }

  TapGestureRecognizer tapGestureRecognizer = new TapGestureRecognizer();
  void tapGesture(){
    tapGestureRecognizer.onTap = (){
      setState(() {
        text1 = "我被点击呢";
      });
    };
  }
  Widget richTextWid05() {
    return RichText(
        text: TextSpan(
            text: 'RichText 可设置点击事件，' + text1,
            style: TextStyle(fontSize: 17.0, color: Colors.black),
            children: <TextSpan>[
              TextSpan(
                  text: '点我试试',
                  style: TextStyle(fontSize: 17.0, color: Colors.blue),
                  recognizer: tapGestureRecognizer)
            ]));
  }

  Widget textPainter1(){
    final ui.PictureRecorder recorder = ui.PictureRecorder();
    final Canvas canvas = Canvas(recorder);
    TextPainter(
        text: TextSpan(
            text: 'TextDirection.ltr 文字默认居左',
            style: TextStyle(fontSize: 16.0, color: Colors.black)),
        textDirection: TextDirection.ltr)
      ..layout(maxWidth: 400, minWidth: 400)
      ..paint(canvas, Offset(0.0, 0.0));
    TextPainter(
        text: TextSpan(
            text: 'TextDirection.rtl 文字默认居右',
            style: TextStyle(fontSize: 16.0, color: Colors.black)),
        textDirection: TextDirection.rtl)
      ..layout(maxWidth: 400, minWidth: 400)
      ..paint(canvas, Offset(0.0, 24.0));
    TextPainter(
        text: TextSpan(
            text: 'textDirection 与 textAlign 同时设置，优先看整体，文字居中',
            style: TextStyle(fontSize: 16.0, color: Colors.black)),
        textDirection: TextDirection.rtl,
        textAlign: TextAlign.center)
      ..layout(maxWidth: 400, minWidth: 400)
      ..paint(canvas, Offset(0.0, 48.0));
    TextPainter(
        text: TextSpan(
            text: '文字位置与 layout 的最大最小宽度有关',
            style: TextStyle(fontSize: 16.0, color: Colors.black)),
        textDirection: TextDirection.rtl)
      ..layout(maxWidth: 400 - 100.0, minWidth: 400 - 200.0)
      ..paint(canvas, Offset(0.0, 90.0));
    TextPainter(
        text: TextSpan(
            text: '文字长度较小',
            style: TextStyle(fontSize: 16.0, color: Colors.black)),
        textDirection: TextDirection.rtl)
      ..layout(maxWidth: 400 - 100.0, minWidth: 400 - 140.0)
      ..paint(canvas, Offset(0.0, 124.0));
  }

  void getText(BuildContext context){
    LogUtils.d("-getText-"+"------");
    var screenWidth = MediaQuery.of(context).size.height;
    double height = CalculateUtils.calculateTextHeight(context, "这个是文本",
        FontWeight.w600, FontWeight.w700,  screenWidth, 10);
    double width = CalculateUtils.calculateTextWidth(context, "这个是文本",
        FontWeight.w600, FontWeight.w700,  screenWidth, 10);
    setState(() {
      text1 = "宽："+width.toString() + " 高："+height.toString();
    });
    LogUtils.d("-getText-"+"宽："+width.toString() + " 高："+height.toString());
  }


}

/// 自定义注解
class toDo {
  final String who;
  final String what;
  const toDo(this.who, this.what);
}