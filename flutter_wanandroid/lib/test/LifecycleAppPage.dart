import 'package:flutter/material.dart';
import 'package:ycflutter/utils/LogUtils.dart';

class LifecycleAppPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return new _LifecycleAppPageState('构造函数');
  }
}

class _LifecycleAppPageState extends State<LifecycleAppPage>
    with WidgetsBindingObserver {
  String str;

  int count = 0;

  _LifecycleAppPageState(this.str);

  @override
  void initState() {
    LogUtils.showPrint(str);
    LogUtils.showPrint('initState');
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void didChangeDependencies() {
    LogUtils.showPrint('didChangeDependencies');
    super.didChangeDependencies();
  }

  @override
  void didUpdateWidget(LifecycleAppPage oldWidget) {
    LogUtils.showPrint('didUpdateWidget');
    super.didUpdateWidget(oldWidget);
  }

  @override
  void deactivate() {
    LogUtils.showPrint('deactivate');
    super.deactivate();
  }

  @override
  void dispose() {
    LogUtils.showPrint('dispose');
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    switch (state) {
      case AppLifecycleState.inactive:
        LogUtils.showPrint('AppLifecycleState.inactive');
        break;
      case AppLifecycleState.paused:
        LogUtils.showPrint('AppLifecycleState.paused');
        break;
      case AppLifecycleState.resumed:
        LogUtils.showPrint('AppLifecycleState.resumed');
        break;
      // case AppLifecycleState.suspending:
      //   LogUtils.showPrint('AppLifecycleState.suspending');
      //   break;
    }

    super.didChangeAppLifecycleState(state);
  }

  @override
  Widget build(BuildContext context) {
    LogUtils.showPrint('build');
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('lifecycle 学习'),
        centerTitle: true,
      ),
      body: new OrientationBuilder(
        builder: (context, orientation) {
          return new Center(
            child: new Text(
              '当前计数值：$count',
              style: new TextStyle(
                  color: orientation == Orientation.portrait
                      ? Colors.blue
                      : Colors.red),
            ),
          );
        },
      ),
      floatingActionButton: new FloatingActionButton(
          child: new Text('click'),
          onPressed: () {
            count++;
            setState(() {});
          }),
    );
  }
}

class LifecyclePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: new LifecycleAppPage(),
    );
  }
}
