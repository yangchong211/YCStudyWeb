

import 'package:flutter/material.dart';
import 'package:yc_flutter_tool/widget/custom_raised_button.dart';
import 'package:yc_flutter_tool/widget/timer_count_down_widget.dart';

class CustomWidgetPage extends StatefulWidget{

  @override
  State<StatefulWidget> createState() {
    return new CustomWidgetState();
  }

}

class CustomWidgetState extends State<CustomWidgetPage>{
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("自定义widget"),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          CustomRaisedButton(new TimerCountDownWidget(), "验证码倒计时Widget"),
        ],
      ),
    );
  }
}