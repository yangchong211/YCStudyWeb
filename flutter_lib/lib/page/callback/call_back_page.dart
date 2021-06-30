import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_lib/widget/common_widget.dart';

class CallBackPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => PageState();
}

class PageState extends State<CallBackPage> {

  var _stateInfo = "初始值1";
  var _stateInfo2 = "初始值2";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("方法回调"),
        centerTitle: true,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Text(_stateInfo),
          Text(_stateInfo2),
          ButtonWithCallBack("跳转下一页", updateInfo),
          MaterialButton(
              color: Colors.pinkAccent,
              child: Text("写法1：可以把Function函数作为形参使用"),
              onPressed: () {
                testF((){
                  print('触发回调函数1-1');
                  setState(() {
                    _stateInfo="触发回调函数1-1";
                  });
                });
                testF1();
                testF((int result){
                  //添加参数，类型为int
                  print('触发回调函数1-2:$result');
                  setState(() {
                    _stateInfo2="触发回调函数1-2:"+result.toString();
                  });
                });
              }),
          MaterialButton(
              color: Colors.pinkAccent,
              child: Text("写法2：typedof"),
              onPressed: () {
                testF2((int result){
                  //添加参数，类型为int
                  print('触发回调函数2-1:$result');
                  setState(() {
                    _stateInfo2="触发回调函数2-1:"+result.toString();
                  });
                });
              }),
          MaterialButton(
              color: Colors.pinkAccent,
              child: Text("写法3：系统默认，无参"),
              onPressed: () {
                testF32((){
                  print('触发回调函数3-1');
                  setState(() {
                    _stateInfo="触发回调函数3-1";
                  });
                });
                testF31();
              }),
          MaterialButton(
              color: Colors.pinkAccent,
              child: Text("写法3：系统默认，有参"),
              onPressed: () {
                testF33((int result){
                  print('触发回调函数3-2:$result');
                  setState(() {
                    _stateInfo2="触发回调函数3-2:"+result.toString();
                  });
                });
                testF34();
              }),
          MaterialButton(
              color: Colors.pinkAccent,
              child: Text("刷新回调测试案例1"),
              onPressed: () {
                showDialog(context);
              }),
          MaterialButton(
              color: Colors.pinkAccent,
              child: Text("恢复数据"),
              onPressed: () {
                setState(() {
                  _stateInfo = "初始值1";
                  _stateInfo2= "初始值2";
                });
              }),
        ],
      ),
    );
  }

  Function function1;
  void testF(Function callBack){
    function1 = callBack;
  }
  void testF1(){
    function1(10);
  }

  void testF2(Function2<int> function2){
    function2(12);
  }

  VoidCallback _voidCallback1;
  void testF32(VoidCallback callback){
    _voidCallback1 = callback;
  }
  void testF31(){
    _voidCallback1();
  }

  ValueChanged<int> _valueCallback2;
  void testF33(ValueChanged<int> callback){
    _valueCallback2 = callback;
  }
  void testF34(){
    _valueCallback2(10);
  }

  void showDialog(BuildContext context){
    PermissionUtils.showDialog(context, "权限提醒",
        "使用之前，需要开启\"电话权限\"、\"短信权限\"、\"存储权限\"，"
            "以确保账号登录安全和信息安全。\n\n请在设置-应用-YCAndroid-权限中开启相关权限。",
            () {
          Navigator.pop(context);
          setState(() {
            _stateInfo="去开启权限";
          });
        }, () {
          setState(() {
            _stateInfo="取消权限开启";
          });
        });
  }

  ///利用callback的思想类似方法回调，要处理一件事的时机是另外一件事处理完成之后触发。
  void updateInfo() {
    setState(() {
      _stateInfo="被修改之后的值2";
    });
    print("------------");
  }
}

// typedef FunctionTest = Function();//定义成这样也是可以的
typedef Function2<int> = void Function(int result);//限定参数和返回值


class ButtonWithCallBack extends StatelessWidget {

  Function _funCallBack;
  var _title;

  ButtonWithCallBack(this._title, this._funCallBack);

  @override
  Widget build(BuildContext context) {
    return FlatButton(
      child: Text(_title),
      onPressed: () {
        Navigator.of(context)
            .push(new MaterialPageRoute(builder: (context) => CallBackSecondPage()))
            .then((res) {
          _funCallBack();
        });
      },
      color: Colors.black12,
    );
  }
}


class CallBackSecondPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("方法回调2"),
        centerTitle: true,
      ),
      body: CommonWidget(Center(
        child: Text("dddd"),
      )).onClick(onTap: () {
        print("------------click-------");
      }, onLongPress: () {
        print("long click---------------");
      }).build(),
    );
  }
}

class MyText extends Text {
  MyText(String data) : super(data, style: TextStyle(color: Colors.redAccent));
}

/// 方法定义类型（用于接口回调中使用）

/// 无参数
typedef ActionNoParam = void Function();

/// 一个参数
typedef ActionOneParam = void Function(dynamic t);

///两个参数
typedef ActionTwoParam = void Function(dynamic o, dynamic t);

/// 请求成功
typedef ResponceSuccess = void Function(dynamic t);


class PermissionUtils{
  /// 权限提示对话款
  static showDialog(BuildContext cxt, String title, String content,
      ActionNoParam ok, ActionNoParam cancel) {
    showCupertinoDialog<int>(
        context: cxt,
        builder: (cxt) {
          return CupertinoAlertDialog(
            title: Text(title),
            content: Text(content),
            actions: <Widget>[
              CupertinoDialogAction(
                child: Text("去开启"),
                onPressed: () {
                  ok();
                },
              ),
              CupertinoDialogAction(
                child: Text("取消"),
                onPressed: () {
                  cancel();
                },
              )
            ],
          );
        });
  }
}
