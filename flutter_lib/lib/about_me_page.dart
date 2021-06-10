import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
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
  @override
  State<StatefulWidget> createState() {
    return new AboutMeState();
  }
}

class AboutMeState extends State<AboutMePage> {

  static const ycPlugin = const BasicMessageChannel('com.ycbjie.android/basic',StringCodec());
  var _nativeParams2;

  @override
  void initState() {
    super.initState();
    //BasicMessageChannel互相调用，接收消息
    // ignore: missing_return
    ycPlugin.setMessageHandler((str){
      _nativeParams2 = str;
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget about = initAboutWidget();
    Widget api = initApiWidget();
    Widget zhy = initZhyWidget();
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('关于'),
      ),
      body: new ListView(
        padding: EdgeInsets.fromLTRB(0.0, 10.0, 0.0, 0.0),
        children: <Widget>[
          new Padding(
            padding: const EdgeInsets.only(
                left: 10.0, top: 10.0, right: 10.0),
            child: new Text('BasicMessageChannel 这是一个从原生获取的参数：$_nativeParams2'),
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
          _jumpToNativeWithParams();
        });
    return layout;
  }

  Future<Null> _jumpToNativeWithParams() async {
    // 发送消息
    ycPlugin.send("点击回掉信息");
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