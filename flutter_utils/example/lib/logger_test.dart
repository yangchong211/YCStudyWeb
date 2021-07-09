import 'package:flutter/material.dart';



class LoggerTest extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return new LoggerTestState();
  }

}

class LoggerTestState extends State<LoggerTest>{

  @override
  initState() {
    super.initState();
  }


  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      home: new Scaffold(
        appBar: new AppBar(
          title: new Text('小杨逗比吐司工具库'),
        ),
        body: new ListView(
          children: <Widget>[
            new ListTile(
              title: new Text("1.吐司工具，最简单的吐司"),
              onTap: (){

              },
            ),
            new Divider(),
          ],
        ),
      ),
    );
  }



}

