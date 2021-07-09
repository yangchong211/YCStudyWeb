


import 'package:flutter/material.dart';
import 'package:yc_flutter_tool/page/basic/icon_page.dart';
import 'package:yc_flutter_tool/page/basic/image_page.dart';
import 'package:yc_flutter_tool/page/basic/indicator_progress_page.dart';
import 'package:yc_flutter_tool/page/basic/states_widget_page.dart';
import 'package:yc_flutter_tool/page/basic/switch_page.dart';
import 'package:yc_flutter_tool/page/basic/text_page.dart';
import 'package:yc_flutter_tool/page/basic/text_field_page.dart';
import 'package:yc_flutter_tool/page/basic/button_page.dart';
import 'package:yc_flutter_tool/utils/log_utils.dart';
import 'package:yc_flutter_tool/widget/custom_raised_button.dart';

class BasicWidgetPage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new BasicWidgetState();
  }

}

class BasicWidgetState extends State<BasicWidgetPage>{

  @override
  void initState() {
    super.initState();
    LogUtils.showPrint('BasicWidgetState---initState');
  }

  @override
  void didChangeDependencies() {
    LogUtils.showPrint('BasicWidgetState---didChangeDependencies');
    super.didChangeDependencies();
  }

  @override
  void deactivate() {
    LogUtils.showPrint('BasicWidgetState---deactivate');
    super.deactivate();
  }

  @override
  void dispose() {
    LogUtils.showPrint('BasicWidgetState---dispose');
    super.dispose();
  }


  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("基础组件"),
      ),
      body: new Center(
        child: new Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CustomRaisedButton(new StatesWidgetPage(), "状态(State)管理"),
            CustomRaisedButton(new TextPage(), "Text组件"),
            CustomRaisedButton(new TextFieldPage(), "TextField组件"),
            CustomRaisedButton(new ImagePage(), "Image组件"),
            CustomRaisedButton(new IconPage(), "Icon组件"),
            CustomRaisedButton(new ButtonPage(), "Button控件"),
            CustomRaisedButton(new SwitchPage(), "单选开关和复选框控件"),
            CustomRaisedButton(new IndicatorProgressPage(), "进度指示器"),
          ],
        ),
      ),
    );
  }

}