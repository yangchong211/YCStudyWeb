
import 'package:flutter/material.dart';
import 'package:yc_flutter_tool/page/animation/animation_page.dart';
import 'package:yc_flutter_tool/page/basic/basic_widget_page.dart';
import 'package:yc_flutter_tool/page/callback/call_back_page.dart';
import 'package:yc_flutter_tool/page/custom/custom_widget_page.dart';
import 'package:yc_flutter_tool/page/dialog/dialog_toast_page.dart';
import 'package:yc_flutter_tool/page/event/event_page.dart';
import 'package:yc_flutter_tool/page/function/function_page.dart';
import 'package:yc_flutter_tool/page/layout/layout_widget_page.dart';
import 'package:yc_flutter_tool/page/navigator/navigator_page.dart';
import 'package:yc_flutter_tool/page/network/net_work_page.dart';
import 'package:yc_flutter_tool/page/channel/platform_page.dart';
import 'package:yc_flutter_tool/page/scroll/scroll_page.dart';
import 'package:yc_flutter_tool/page/storage/storage_page.dart';
import 'package:yc_flutter_tool/page/use/common_use_page.dart';
import 'package:yc_flutter_tool/page/vessel/vessel_page.dart';
import 'package:yc_flutter_tool/utils/log_utils.dart';
import 'package:yc_flutter_tool/widget/custom_raised_button.dart';

//StatelessWidget表示组件，一切都是widget，可以理解为组件
//有状态的组件（Stateful widget）
//无状态的组件（Stateless widget）
//Stateful widget可以拥有状态，这些状态在widget生命周期中是可以变的，而Stateless widget是不可变的
class HomePage extends StatefulWidget{

  HomePage({Key key, this.title}) : super(key: key);
  final String title;

  //createState()来创建状态(State)对象
  @override
  State<StatefulWidget> createState() {
    return new HomePageState();
  }

}

class HomePageState extends State<HomePage>{

  @override
  void initState() {
    super.initState();
    LogUtils.showPrint('initState');
  }

  @override
  void didChangeDependencies() {
    LogUtils.showPrint('didChangeDependencies');
    super.didChangeDependencies();
  }

  @override
  void deactivate() {
    LogUtils.showPrint('deactivate');
    super.deactivate();
  }

  @override
  void dispose() {
    LogUtils.showPrint('dispose');
    super.dispose();
  }

  void _incrementCounter() {
    //setState方法的作用是通知Flutter框架，有状态发生了改变，Flutter框架收到通知后，
    //会执行build方法来根据新的状态重新构建界面， Flutter 对此方法做了优化，
    //使重新执行变的很快，所以你可以重新构建任何需要更新的东西，而无需分别去修改各个widget。
    //todo 思考一下原理是什么？具体做了什么优化？没有更新的东西会刷新嘛？
    setState(() {

    });
  }


  //在构建页面时，会调用组件的build方法
  //widget的主要工作是提供一个build()方法来描述如何构建UI界面
  //通常是通过组合、拼装其它基础widget
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: new AppBar(
          title: new Text(this.widget.title),
        ),
        body: new Center(
          child: new ListView(
            children: <Widget>[
              CustomRaisedButton(new BasicWidgetPage(), "基础类widget"),
              CustomRaisedButton(new LayoutWidgetPage(), "布局类widget"),
              CustomRaisedButton(new VesselWidgetPage(), "容器类widget"),
              CustomRaisedButton(new CommonUsePage(), "Scaffold脚手架"),
              CustomRaisedButton(new ScrollPage(), "可滚动widget"),
              CustomRaisedButton(new FunctionPage(), "功能型组件"),
              CustomRaisedButton(new CustomWidgetPage(), "自定义widget"),
              CustomRaisedButton(new DialogToastPage(), "弹窗和吐司"),
              CustomRaisedButton(new EventPage(), "事件处理和通知"),
              CustomRaisedButton(new AnimationPage(), "动画处理"),
              CustomRaisedButton(new PlatformPage(), "平台调用"),
              CustomRaisedButton(new CallBackPage(), "页面跳转后回调"),
              CustomRaisedButton(new NetWorkPage(), "简单网络请求"),
              CustomRaisedButton(new StoragePage(), "数据库操作"),
              CustomRaisedButton(new NavigatorPage(), "路由页面跳转"),
            ],
          ),
        ),
      ),
    );
  }

}

// 关闭mas日志
// MASConfig.SWITCH_PRINT_TRACE_LOG = false;