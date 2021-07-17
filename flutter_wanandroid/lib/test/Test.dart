


import 'package:flutter/material.dart';

class Test{


  var currentPanelIndex=-1;//设置-1默认全部闭合
  List<int> mList;


  initView(){
    mList=new List();
    for(int i=0;i<5;i++){
      mList.add(i);
    }


    new ExpansionPanelList(
      expansionCallback: (panelIndex,isExpanded){
        setState(() {
          currentPanelIndex=(currentPanelIndex!=panelIndex?panelIndex:-1);
        });
      },
      children: mList.map((i){
        return new ExpansionPanel(
          headerBuilder: (context,isExpanded){
            return new ListTile(
              title: new Text('这是标题$i'),
            );
          },
          body:new Padding(
            padding: EdgeInsets.all(30.0),
            child:new ListBody(
              children: <Widget>[
                new Text('这是标题$i的内容'),
              ],
            ),
          ),
          isExpanded: currentPanelIndex==i,
        );
      }).toList(),
    );
  }

  void setState(Null Function() param0
      ) {}

}