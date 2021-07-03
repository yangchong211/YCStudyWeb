import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_lib/utils/log_utils.dart';
/*
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/9/12
 *     desc  : 关于我的页面
 *     revise:
 * </pre>
 */
class AboutMePage extends  StatefulWidget{

  AboutMePage({Key key, this.title, Map<String, dynamic> params, this.param}) : super(key: key);

  final String title;
  final Map<String, dynamic> param;

  @override
  State<StatefulWidget> createState() {
    return new AboutMeState();
  }
}

class AboutMeState extends State<AboutMePage> {

  String tag = "State生命周期:";

  @override
  void initState() {
    //初始化状态
    super.initState();
    LogUtils.log(tag+"initState");
  }

  @override
  void didUpdateWidget(AboutMePage oldWidget) {
    super.didUpdateWidget(oldWidget);
    LogUtils.log(tag+"didUpdateWidget");
  }

  @override
  void deactivate() {
    super.deactivate();
    LogUtils.log(tag+"deactivate");
  }

  @override
  void dispose() {
    super.dispose();
    LogUtils.log(tag+"dispose");
  }

  @override
  void reassemble() {
    super.reassemble();
    LogUtils.log(tag+"reassemble");
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    LogUtils.log(tag+"didChangeDependencies");
  }

  @override
  Widget build(BuildContext context) {
    LogUtils.log(tag+"build");
    Widget about = initAboutWidget();
    Widget api = initApiWidget();
    Widget zhy = initZhyWidget();
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('关于--'+widget.title),
      ),
      body: new ListView(
        padding: EdgeInsets.fromLTRB(0.0, 10.0, 0.0, 0.0),
        children: <Widget>[
          new Padding(
            padding: const EdgeInsets.only(
                left: 10.0, top: 10.0, right: 10.0),
            child: new Text('这个是接收的参数：'+json.encode(widget.param)),
          ),
          about,
          api,
          new ListTile(
              title: const Text('直接微信搜索‘鸿洋’关注即可'),
              subtitle: const Text('一个长期分享Android相关的技术干货，质量也很高，值得程序员每天看看'),
              trailing:  Icon(Icons.arrow_forward, color: Colors.black),
              onTap: () {

              }),
          zhy,
        ],
      ),
    );
  }


  Widget initAboutWidget() {
    Widget layout = new ListTile(
        title: const Text('关于项目'),
        subtitle: const Text('(BasicMessageChannel点击回数据)'),
        trailing:  Icon(Icons.arrow_forward, color: Colors.black),
        onTap: () {

        });
    return layout;
  }



  Widget initApiWidget() {
    Widget layout = new ListTile(
        title: const Text('关于开放Api接口'),
        subtitle: const Text('玩Android 开放API'),
        trailing:  Icon(Icons.arrow_forward, color: Colors.black),
        onTap: () {

        });
    return layout;
  }


  Widget initZhyWidget() {
    Widget layout = new ListTile(
        title: const Text('保存鸿洋公众号到本地'),
        trailing:  Icon(Icons.arrow_forward, color:Colors.black),
        onTap: () {

        });
    return layout;
  }
}