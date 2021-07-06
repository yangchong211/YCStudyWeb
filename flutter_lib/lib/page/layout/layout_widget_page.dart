


import 'package:flutter/material.dart';
import 'package:flutter_lib/page/layout/align_layout_page.dart';
import 'package:flutter_lib/page/layout/center_page.dart';
import 'package:flutter_lib/page/layout/colunm_page.dart';
import 'package:flutter_lib/page/layout/flex_page.dart';
import 'package:flutter_lib/page/layout/flow_warp_page.dart';
import 'package:flutter_lib/page/layout/opacity_page.dart';
import 'package:flutter_lib/page/layout/row_page.dart';
import 'package:flutter_lib/page/layout/position_page.dart';
import 'package:flutter_lib/page/layout/stack_layout_page.dart';
import 'package:flutter_lib/widget/custom_raised_button.dart';

class LayoutWidgetPage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new LayoutWidgetState();
  }

}

class LayoutWidgetState extends State<LayoutWidgetPage>{
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("布局组件"),
      ),
      body: new Center(
        child: new Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CustomRaisedButton(new RowPage(), "RowPage"),
            CustomRaisedButton(new ColunmLayoutPage(), "Column"),
            CustomRaisedButton(new FlexLayoutPage(), "Flex"),
            CustomRaisedButton(new FlowWrapPage(), "流式布局-Flow-Wrap"),
            CustomRaisedButton(new AlignLayoutPage(), "对齐与相对定位-Align"),
            CustomRaisedButton(new StackLayoutPage(), "层叠布局-Stack"),
            CustomRaisedButton(new PositionPage(), "对齐与相对定位-Position"),
            CustomRaisedButton(new CenterLayoutPage(), "中心布局-Center"),
            CustomRaisedButton(new OpacityPage(), "调节透明度-Opacity"),
          ],
        ),
      ),
    );
  }

}