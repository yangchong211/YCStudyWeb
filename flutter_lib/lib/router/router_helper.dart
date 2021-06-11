


import 'package:flutter/material.dart';
import 'package:flutter_lib/about_me_page.dart';
import 'package:flutter_lib/channel/basic_channel_page.dart';
import 'package:flutter_lib/channel/event_channel_page.dart';
import 'package:flutter_lib/channel/method_channel_page.dart';
import 'package:flutter_lib/main_home_page.dart';
import 'package:flutter_lib/network/net_work_page.dart';

class Router {
  static const String HOME_PATH = "/home_page";

  static Widget parseRouter(String path, dynamic params) {
    print('path---->' + path + " " + params.toString());
    switch (path) {
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

  static void pushNamed(BuildContext context, String path, Map<String, dynamic> params) {
    Navigator.pushNamed(context, path, arguments: params);
  }

}