import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter_lib/about_me_page.dart';
import 'package:flutter_lib/main_home_page.dart';
import 'package:flutter_lib/net_work_page.dart';

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
      home:  _widgetForRoute(window.defaultRouteName),
    );
  }
}


Widget _widgetForRoute(String route) {
  switch (route) {
    case 'yc_route':
      return  MyHomePage(title: '匹配到了，这个是flutter页面');
    case 'yc':
      return AboutMePage();
    case 'net':
      return NetWorkPage();
    default:
      return  MyHomePage(title: '没有匹配到，查看route是否一致');
  }
}
