import 'package:flutter/material.dart';
import 'package:ycflutter/res/TextStyles.dart';
import 'package:ycflutter/res/YcColors.dart';
import 'package:ycflutter/utils/LogUtils.dart';

class WidgetPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return new ButtonState();
  }
}

class ButtonState extends State<WidgetPage> {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("button 案例"),
      ),
      body: new ListView(
        children: <Widget>[
          new Text("逗比"),

          //居中显示
          new Text(
            "Hello world",
            textAlign: TextAlign.center,
          ),

          //最大显示一行
          new Text("Hello world! I'm yangchong. " *4,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),

          //设置text的样式，颜色，大小等等
          new Text("你是一个逗比",
            style: new TextStyle(color: YcColors.colorRed,fontSize: 14),
          ),
          Text.rich(TextSpan(
              children: [
                TextSpan(
                    text: "名称: "
                ),
                TextSpan(
                    text: "我是Android开发杨充",
                    style: TextStyle(
                        color: Colors.blue
                    ),
                ),
              ]
          )),
          RichText(
              text: TextSpan(
                children: <TextSpan>[
                  TextSpan(text: 'Redirect Host', style: TextStyles.textDark12),
                  TextSpan(text: '              '),
                  TextSpan(text:  "yangchong211@163.com", style: TextStyles.textGray12),
                ],
              )
          ),
          DefaultTextStyle(
            //1.设置文本默认样式
            style: TextStyle(
              color:Colors.red,
              fontSize: 20.0,
            ),
            textAlign: TextAlign.start,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text("你是逗比吗"),
                Text("我不是逗比"),
                Text("不，你是的",
                  style: TextStyle(
                      inherit: false, //2.不继承默认样式
                      color: Colors.grey
                  ),
                ),
              ],
            ),
          ),
          IconTheme(data: const IconThemeData(size: 48.0),
              child: new Text("这个是图标icon")
          ),
          new TextField(
            autofocus: true,
            //最大长度，设置此项会让TextField右下角有一个输入数量的统计字符串
            maxLength: 10,
            //最大行数
            maxLines: 1,
            //输入文本的样式
            style: TextStyle(fontSize: 16.0, color: YcColors.colorPrimary),
            decoration: new InputDecoration(
              fillColor: Colors.blue.shade100,
              hintText: '逗比，请输入搜索关键词',
            ),
            textAlign: TextAlign.left,
            //内容改变的回调
            onChanged: (text) {
              LogUtils.showPrint('change $text');
            },
            //内容提交(按回车)的回调
            onSubmitted: (text) {
              LogUtils.showPrint('submit $text');
            },
          ),
          TextField(
            autofocus: true,
            decoration: InputDecoration(
                labelText: "用户名",
                hintText: "用户名或邮箱",
                prefixIcon: Icon(Icons.person)
            ),
          ),
          TextField(
            autofocus: true,
            decoration: InputDecoration(
                hintText: "用户名或邮箱",
                prefixIcon: Icon(Icons.person)
            ),
          ),
        ],
      ),
    );
  }
}



