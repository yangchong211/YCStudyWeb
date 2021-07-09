
import 'package:flutter/material.dart';

class IndicatorProgressPage extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {
    return new IndicatorProgressState();
  }

}

class IndicatorProgressState extends State<IndicatorProgressPage>{

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(title: new Text("进度指示器")),
        body: ListView(
          children: <Widget>[
            new Text("两种进度指示器：LinearProgressIndicator和CircularProgressIndicator"),

          ],
        ));
  }

}