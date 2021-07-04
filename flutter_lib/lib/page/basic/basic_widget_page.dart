


import 'package:flutter/material.dart';
import 'package:flutter_lib/page/basic/basic_skeleton_page.dart';
import 'package:flutter_lib/page/basic/icon_page.dart';
import 'package:flutter_lib/page/basic/image_page.dart';
import 'package:flutter_lib/page/basic/indicator_progress_page.dart';
import 'package:flutter_lib/page/basic/licycle_app_page.dart';
import 'package:flutter_lib/page/basic/states_widget_page.dart';
import 'package:flutter_lib/page/basic/switch_page.dart';
import 'package:flutter_lib/page/basic/text_page.dart';
import 'package:flutter_lib/page/basic/text_field_page.dart';
import 'package:flutter_lib/page/basic/button_page.dart';
import 'package:flutter_lib/utils/log_utils.dart';
import 'package:flutter_lib/utils/timer_utils.dart';
import 'package:flutter_lib/widget/custom_raised_button.dart';

class BasicWidgetPage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new BasicWidgetState();
  }

}

class BasicWidgetState extends State<BasicWidgetPage>{

  bool skeleton = true;

  @override
  void initState() {
    super.initState();
    LogUtils.showPrint('BasicWidgetState---initState');
    var timerUtils = new TimerUtils();
    timerUtils.setTotalTime(3000);
    timerUtils.startTimer();
    timerUtils.setOnTimerTickCallback((millisUntilFinished) {
      setState(() {
        skeleton = false;
      });
    });
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
    if(skeleton){
      return new BasicSkeletonPage();
    }
    return getWidget(context);
  }

  Widget getWidget(BuildContext context){
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
            CustomRaisedButton(new LifecycleAppPage(), "lifecycle生命周期"),
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