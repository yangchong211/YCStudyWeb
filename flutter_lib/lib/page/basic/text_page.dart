import 'package:flutter/material.dart';
import 'package:flutter_lib/res/color/yc_colors.dart';
import 'package:flutter_lib/utils/log_utils.dart';
import 'package:flutter_lib/utils/screen/screen_utils.dart';

class TextPage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new TextPageState();
  }

}


class TextPageState extends State<TextPage>{

  String text1 = "初始化值";

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
              new Text( "这个是文本"+text1),
            ],
          ),
        ));
  }

  void getText(BuildContext context){
    LogUtils.log("-getText-"+"------");
    var screenWidth = MediaQuery.of(context).size.height;
    TextPainter painter = _calculateTextHeight(context, "这个是文本", 24,  screenWidth, 10);
    var height = painter.height;
    var width = painter.width;
    setState(() {
      text1 = "宽："+width.toString() + " 高："+height.toString();
    });
    LogUtils.log("-getText-"+"宽："+width.toString() + " 高："+height.toString());
  }

  TextPainter _calculateTextHeight(BuildContext context, String value,
      double fontSize, double maxWidth, int maxLines) {
    TextPainter painter = TextPainter(
        locale: Localizations.localeOf(context, nullOk: true),
        maxLines: maxLines,
        textDirection: TextDirection.ltr,
        text: TextSpan(
            text: value,
            style: TextStyle(
              fontSize: fontSize,
              fontWeight: FontWeight.w600,
            )));
    painter.layout(maxWidth: maxWidth);
    return painter;
  }
}