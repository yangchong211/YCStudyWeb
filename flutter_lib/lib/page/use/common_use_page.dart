

import 'package:flutter/material.dart';
import 'package:flutter_lib/page/use/scaffold_page.dart';
import 'package:flutter_lib/widget/custom_raised_button.dart';

class CommonUsePage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new CommonUseState();
  }

}

class CommonUseState extends State<CommonUsePage>{
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("Scaffold 脚手架"),
      ),
      body: new Center(
        child: new Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CustomRaisedButton(new ScaffoldPage(), "Scaffold、TabBar、底部导航"),
          ],
        ),
      ),
    );
  }

}

