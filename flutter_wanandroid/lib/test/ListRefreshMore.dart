

import 'package:flutter/material.dart';

class ListRefreshMore extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return new ListRefreshMoreState();
  }
}

class ListRefreshMoreState extends State<ListRefreshMore>{

  List list = new List();

  @override
  void initState() {
    super.initState();
    getData();
  }

  Future<Null> _onRefresh() async {
    await Future.delayed(Duration(seconds: 3), () {
      print('refresh');
      setState(() {
        list = List.generate(20, (i) => '哈喽,我是新刷新的 $i');
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("list页面下拉刷新全部数据"),
      ),
      body: RefreshIndicator(
        onRefresh: _onRefresh,
        child: ListView.builder(
          itemBuilder: renderRow,
          itemCount: list.length + 1,
        ),
      ),
      // This trailing comma makes auto-formatting nicer for build methods.
    );
  }

  Widget renderRow(BuildContext context, int index) {
    return ListTile(
      title: Text(list[index]),
    );
  }

  Future getData() async {
    await Future.delayed(Duration(seconds: 0), () {
      setState(() {
        list = List.generate(15, (i) => '哈喽,我是小杨逗比 $i');
      });
    });
  }
}

