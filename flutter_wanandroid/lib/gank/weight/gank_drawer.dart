

import 'package:flutter/material.dart';
import 'package:ycflutter/gank/page/gank_about_page.dart';
import 'package:ycflutter/gank/page/welfare_page.dart';
import 'package:ycflutter/gank/weight/sizable_drawer.dart';
import 'package:ycflutter/utils/AppNavigator.dart';

class GankDrawer extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return _GankDrawerState();
  }
}

class _GankDrawerState extends State<GankDrawer>{

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return SizableDrawer(
      widthPercent: 0.6,
      child: Column(
        children: <Widget>[
          new UserAccountsDrawerHeader(
            accountName: Text("杨充"),
            accountEmail: Text("yangchong211@163.com"),
            onDetailsPressed: (){

            },
            currentAccountPicture: new GestureDetector(
              child: new CircleAvatar(
                backgroundImage: new ExactAssetImage("lib/image/ic_person.jpg"),
              ),
              onTap: (){

              },
            ),
          ),
          new ListTile(
              title: new Text("我的收藏"),
              trailing: new Icon(Icons.email),
              onTap: (){

              }
          ),
          new Divider(),
          new ListTile(
              title: new Text("GitHub客户端"),
              trailing: new Icon(Icons.email),
              onTap: (){

              }
          ),
          new Divider(),
          new ListTile(
              title: new Text("消息中心"),
              trailing: new Icon(Icons.verified_user),
              onTap: (){

              }
          ),
          new Divider(),
          new ListTile(
              title: new Text("提交项目"),
              trailing: new Icon(Icons.present_to_all),
              onTap: (){
              }
          ),
          new Divider(),
          new ListTile(
              title: new Text("妹子图"),
              trailing: new Icon(Icons.group_work),
              onTap: (){
                _gotoActivity(context, WelfarePage());
              }
          ),
          new Divider(),
          new ListTile(
            title: new Text("关于项目"),
            trailing: new Icon(Icons.apps),
            onTap: (){
              _gotoActivity(context, GankAboutPage());
            },
          ),
          new Divider(),
          new ListTile(
              title: new Text("设置中心"),
              trailing: new Icon(Icons.settings),
              onTap: (){
                _gotoActivity(context, WelfarePage());
              }
          ),
          new Divider(),
        ],
      ),
    );
  }
  
  ///跳转到某个具体的页面
  void _gotoActivity(BuildContext context, Widget activity) {
    Navigator.of(context).pop();
    AppNavigator.push(context, activity);
//    Navigator.of(context).push(MaterialPageRoute(builder: (context) {
//      return activity;
//    }));
  }

}

