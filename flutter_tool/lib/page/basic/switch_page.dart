
import 'package:flutter/material.dart';

class SwitchPage extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {
    return new SwitchState();
  }

}

class SwitchState extends State<SwitchPage>{

  bool _switchSelected=true; //维护单选开关状态
  bool _checkboxSelected=true;//维护复选框状态

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(title: new Text("单选开关和复选框")),
        body: ListView(
          children: <Widget>[
            new Text("单选开关Switch和复选框Checkbox，虽然它们都是继承自StatefulWidget。"
                "它们本身不会保存当前选中状态，选中状态都是由父组件来管理的"),
            new Text("单选开关Switch和复选框Checkbox，虽然它们都是继承自StatefulWidget。"
                "它们本身不会保存当前选中状态，选中状态都是由父组件来管理的"),
            Switch(
              //当前状态
              value: _switchSelected,
              onChanged:(value){
                //重新构建页面
                setState(() {
                  _switchSelected=value;
                });
              },
            ),
            Checkbox(
              value: _checkboxSelected,
              //选中时的颜色
              activeColor: Colors.red,
              onChanged:(value){
                setState(() {
                  _checkboxSelected=value;
                });
              } ,
            ),
          ],
        ));
  }

}