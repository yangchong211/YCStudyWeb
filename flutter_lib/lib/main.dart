import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter_lib/about_me_page.dart';
import 'package:flutter_lib/channel/event_channel_page.dart';
import 'package:flutter_lib/main_home_page.dart';
import 'package:flutter_lib/channel/method_channel_page.dart';
import 'package:flutter_lib/network/net_work_page.dart';
import 'package:flutter_lib/router/router_animation.dart';
import 'package:flutter_lib/router/router_helper.dart';

import 'channel/basic_channel_page.dart';

void main() => runApp(new MyApp());


class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter和Android混编项目',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),

      onGenerateRoute: (RouteSettings settings) {
        return AnimationPageRoute(builder: (context) {
          return Router.parseRouter(settings.name, settings.arguments);
        });
      },
      //home:  _widgetForRoute(window.defaultRouteName),
    );
  }


  //在runApp()方法中通过window.defaultRouteName可以获取到我们在NA代码中路由方法中传入的路由名称
  Widget _widgetForRoute(String route) {
    switch (route) {
      case 'yc_route':
        return  MyHomePage(title: '匹配到了，这个是flutter页面');
      case 'yc':
        return AboutMePage();
      case 'net':
        return NetWorkPage();
      case 'method_channel':
      //method通信
        return MethodChannelPage();
      case 'event_channel':
      //event通信
        return EventChannelPage();
      case 'basic_channel':
      //basic通信
        return BasicChannelPage();
      default:
        return  MyHomePage(title: '没有匹配到，查看route是否一致1');
    }
  }
}




