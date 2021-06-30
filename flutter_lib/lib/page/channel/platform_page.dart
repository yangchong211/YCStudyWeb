import 'package:flutter/material.dart';
import 'package:flutter_lib/page/channel/android_platform_page.dart';
import 'package:flutter_lib/page/channel/calc_plugin_page.dart';
import 'package:flutter_lib/widget/custom_raised_button.dart';


class PlatformPage extends StatelessWidget {



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("平台交互"), centerTitle: true),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          CustomRaisedButton(AndroidPlatformPage(), "直接调用平台代码"),
          CustomRaisedButton(CalcPluginPage(), "利用插件调用平台代码，待完善"),
        ],
      ),
    );
  }
}
