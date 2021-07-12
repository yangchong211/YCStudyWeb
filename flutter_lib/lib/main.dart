import 'dart:convert';
import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter_lib/about_me_page.dart';
import 'package:flutter_lib/channel/basic_channel_page.dart';
import 'package:flutter_lib/channel/event_channel_page.dart';
import 'package:flutter_lib/channel/method_channel_page.dart';
import 'package:flutter_lib/main_home_page.dart';

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
      home: widgetForRoute(window),
      // home: _widgetForRoute(window),
    );
  }

  static const String HOME_PATH = "/home_page";

  static Map<String, dynamic> parseRouter(Window window){
    // window.defaultRouteName就是获取Android传递过来的参数
    // 通过这个字段我们就可以进行Flutter页面的路由的分发
    String url = window.defaultRouteName;
    // route名称，路由path路径名称
    String route = url.indexOf('?') == -1 ? url : url.substring(0, url.indexOf('?'));
    // 参数Json字符串
    String paramsJson = url.indexOf('?') == -1 ? '{}' : url.substring(url.indexOf('?') + 1);
    // 解析参数
    Map<String, dynamic> params = json.decode(paramsJson);
    print('path---->' + route + " " + params.toString());
    params["route"] = route;
    return params;
  }


  static Widget widgetForRoute(Window window) {
    Map<String, dynamic> router = parseRouter(window);
    var route = router["route"];
    switch (route) {
      case 'yc_route':
        return  MyHomePage(title: '匹配到了，这个是flutter页面');
      case 'yc':
        return AboutMePage(title: '匹配到了，这个是flutter页面',params : router);
      case 'method_channel':
      //method通信
        return MethodChannelPage(title: '匹配到，测试method_channel通信');
      case 'event_channel':
      //event通信
        return EventChannelPage(title: '匹配到，测试event_channel通信');
      case 'basic_channel':
      //basic通信
        return BasicChannelPage(title: '匹配到，测试basic_channel通信');
    // case 'app':
    // //flutter demo
    //   return new MainApp();
      default:
        return  MyHomePage(title: '没有匹配到哈，查看route是否一致1');
    }
  }


}




