import 'package:flutter/material.dart';
import 'package:flutter_lib/page/simple/sliverWidget/sliver_appbar_page.dart';
import 'package:flutter_lib/widget/custom_raised_button.dart';


class SliverPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text("基础组件"),
      ),
      body: new Center(
        child: new ListView(
          children: <Widget>[
            CustomRaisedButton(new SliverAppBarPage(), "SliverAppBarPage"),
          ],
        ),
      ),
    );
    ;
  }
}
