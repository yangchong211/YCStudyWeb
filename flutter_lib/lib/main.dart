import 'dart:convert';
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
      // onGenerateRoute: (RouteSettings settings) {
      //   return AnimationPageRoute(builder: (context) {
      //     return Router.parseRouter(settings.name, settings.arguments);
      //   });
      // },
      home:  _widgetForRoute(),
    );
  }


  //在runApp()方法中通过window.defaultRouteName可以获取到我们在NA代码中路由方法中传入的路由名称
  Widget _widgetForRoute() {
    //var route = window.defaultRouteName;
    Map<String, dynamic> router = parseRouter();
    var route = router["route"];
    switch (route) {
      case 'yc_route':
        return  MyHomePage(title: '匹配到了，这个是flutter页面');
      case 'yc':
        return AboutMePage(title: '匹配到了，这个是flutter页面',params : router);
      case 'net':
        return NetWorkPage();
      case 'method_channel':
      //method通信
        return MethodChannelPage(title: '匹配到，测试method_channel通信');
      case 'event_channel':
      //event通信
        return EventChannelPage(title: '匹配到，测试event_channel通信');
      case 'basic_channel':
      //basic通信
        return BasicChannelPage(title: '匹配到，测试basic_channel通信');
      default:
        return  MyHomePage(title: '没有匹配到，查看route是否一致1');
    }
  }

  Map<String, dynamic> parseRouter(){
    String url = window.defaultRouteName;
    // route名称，路由path路径名称
    String route = url.indexOf('?') == -1 ? url : url.substring(0, url.indexOf('?'));
    // 参数Json字符串
    String paramsJson = url.indexOf('?') == -1 ? '{}' : url.substring(url.indexOf('?') + 1);
    // 解析参数
    Map<String, dynamic> params = json.decode(paramsJson);
    params["route"] = route;
    return params;
  }

}




