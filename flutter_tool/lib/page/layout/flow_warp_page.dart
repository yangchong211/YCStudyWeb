



import 'package:flutter/material.dart';
import 'package:yc_flutter_tool/page/basic/icon_page.dart';
import 'package:yc_flutter_tool/page/basic/image_page.dart';
import 'package:yc_flutter_tool/page/basic/indicator_progress_page.dart';
import 'package:yc_flutter_tool/page/event/states_widget_page.dart';
import 'package:yc_flutter_tool/page/basic/switch_page.dart';
import 'package:yc_flutter_tool/page/basic/text_page.dart';
import 'package:yc_flutter_tool/page/basic/text_field_page.dart';
import 'package:yc_flutter_tool/page/basic/button_page.dart';
import 'package:yc_flutter_tool/page/layout/colunm_page.dart';
import 'package:yc_flutter_tool/page/layout/flex_page.dart';
import 'package:yc_flutter_tool/page/layout/row_page.dart';
import 'package:yc_flutter_tool/widget/custom_raised_button.dart';

class FlowWrapPage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new FlowWrapState();
  }

}

class FlowWrapState extends State<FlowWrapPage>{
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("流式布局"),
      ),
      body: new Center(
        child: new Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            new Text("Wrap流式布局"),
            Wrap(
              spacing: 8.0, // 主轴(水平)方向间距
              runSpacing: 4.0, // 纵轴（垂直）方向间距
              alignment: WrapAlignment.center, //沿主轴方向居中
              children: <Widget>[
                new Chip(
                  avatar: new CircleAvatar(backgroundColor: Colors.blue, child: Text('A')),
                  label: new Text('Hamilton'),
                ),
                new Chip(
                  avatar: new CircleAvatar(backgroundColor: Colors.blue, child: Text('M')),
                  label: new Text('Lafayette'),
                ),
                new Chip(
                  avatar: new CircleAvatar(backgroundColor: Colors.blue, child: Text('H')),
                  label: new Text('Mulligan'),
                ),
                new Chip(
                  avatar: new CircleAvatar(backgroundColor: Colors.blue, child: Text('J')),
                  label: new Text('Laurens'),
                ),
              ],
            ),
            new Text("Flow流式布局"),
            Flow(
              delegate: TestFlowDelegate(margin: EdgeInsets.all(10.0)),
              children: <Widget>[
                new Container(width: 80.0, height:80.0, color: Colors.red,),
                new Container(width: 80.0, height:80.0, color: Colors.green,),
                new Container(width: 80.0, height:80.0, color: Colors.blue,),
                new Container(width: 80.0, height:80.0,  color: Colors.yellow,),
                new Container(width: 80.0, height:80.0, color: Colors.brown,),
                new Container(width: 80.0, height:80.0,  color: Colors.purple,),
              ],
            )
          ],
        ),
      ),
    );
  }

}

class TestFlowDelegate extends FlowDelegate {
  EdgeInsets margin = EdgeInsets.zero;
  TestFlowDelegate({this.margin});
  @override
  void paintChildren(FlowPaintingContext context) {
    var x = margin.left;
    var y = margin.top;
    //计算每一个子widget的位置
    for (int i = 0; i < context.childCount; i++) {
      var w = context.getChildSize(i).width + x + margin.right;
      if (w < context.size.width) {
        context.paintChild(i, transform: new Matrix4.translationValues(x, y, 0.0));
        x = w + margin.left;
      } else {
        x = margin.left;
        y += context.getChildSize(i).height + margin.top + margin.bottom;
        //绘制子widget(有优化)
        context.paintChild(i, transform: new Matrix4.translationValues(x, y, 0.0));
        x += context.getChildSize(i).width + margin.left + margin.right;
      }
    }
  }

  @override
  getSize(BoxConstraints constraints){
    //指定Flow的大小
    return Size(double.infinity,200.0);
  }

  @override
  bool shouldRepaint(FlowDelegate oldDelegate) {
    return oldDelegate != this;
  }
}

