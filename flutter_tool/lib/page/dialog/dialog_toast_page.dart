

import 'package:flutter/material.dart';

class DialogToastPage extends StatefulWidget{

  @override
  State<StatefulWidget> createState() {
    return new DialogToastState();
  }

}

class DialogToastState extends State<DialogToastPage>{
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("弹窗和吐司"),
      ),
      body: new Center(
        child: new ListView(
          children: [
            new RaisedButton(
                onPressed: () {
                },
                child: new Text("吐司")
            ),
            new RaisedButton(
                onPressed: () {
                },
                child: new Text("立马销毁吐司")
            ),
          ],
        ),
      ),
    );
  }

}
