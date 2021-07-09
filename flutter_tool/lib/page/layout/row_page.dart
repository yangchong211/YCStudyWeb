import 'package:flutter/material.dart';

class RowPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(title: new Text("Row布局")),
        //布局方向  Row:水平布局 Column：垂直布局
        body: Row(
          children: <Widget>[
            new Text("从网络加载图片"),
            new Text('从本地加载图片'),
          ],
        ));
  }
}