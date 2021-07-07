import 'package:flutter/material.dart';
import 'package:flutter_lib/utils/log/log_utils.dart';


class LogUtilsPage extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {
    return new LogUtilsState();
  }

}

class LogUtilsState extends State<LogUtilsPage>{

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(title: new Text("测试LogUtils工具类的功能")),
        body: ListView(
          children: <Widget>[
            new Text("测试LogUtils工具类的功能"),
            RaisedButton(
              onPressed: () {
                LogUtils.d("---------onPressed-",tag: "xiaoyang");
              },
              color: const Color(0xffff0000),
              child: new Text('打印d日志'),
            ),
            new Divider(),
            RaisedButton(
              onPressed: () {
                LogUtils.e("---------onPressed----error",tag: "yangchong");
              },
              color: const Color(0xffff0000),
              child: new Text('打印e日志，并带有tag'),
            ),
            new Divider(),
            RaisedButton(
              onPressed: () {
                LogUtils.i("---------onPressed----info");
              },
              color: const Color(0xffff0000),
              child: new Text('打印i日志，并带有tag'),
            ),
            new Divider(),
            RaisedButton(
              onPressed: () {
                LogUtils.v("---------onPressed----v",tag: "xiaoyang");
              },
              color: const Color(0xffff0000),
              child: new Text('打印v日志，并带有tag'),
            ),
          ],
        ));
  }

}



