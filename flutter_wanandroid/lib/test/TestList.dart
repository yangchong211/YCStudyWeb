

import 'package:flutter/material.dart';

class TestList extends StatefulWidget{

  @override
  State<StatefulWidget> createState() {
    return new TestListState();
  }

}

class TestListState extends State<TestList> {
  @override
  Widget build(BuildContext context) {

    //下划线widget预定义以供复用。
    Widget divider1 = Divider(color: Colors.blue,);
    Widget divider2 = Divider(color: Colors.green);

    return new Scaffold(
      appBar: new AppBar(
        title: new Text("list条目数据页面测试"),
      ),


//      body: new ListView.builder(
//        //list数目
//        itemCount: 50,
//        //每个item的高度
//        itemExtent: 50,
//        //item的布局
//        itemBuilder: (BuildContext context, int index){
//          return new ListTile(
//            title: new Text("小杨逗比"+index.toString()),
//          );
//        },
//      ),


      body: new ListView.separated(
        //列表项构造器
        itemBuilder: (BuildContext context, int index){
          return new ListTile(
            title: new Text("小杨逗比"+index.toString()),
          );
        },
        //分割线构造器
        separatorBuilder: (BuildContext context, int index){
          return index%2==0?divider1:divider2;
        },
        //list数目
        itemCount: 50,
      ),
    );
  }
}

