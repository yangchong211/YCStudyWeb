
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_lib/utils/bus/event_bus_helper.dart';
import 'package:flutter_lib/utils/bus/event_bus_service.dart';

class EventBusPage extends StatefulWidget{

  @override
  State<StatefulWidget> createState() {
    return new EventBusState();
  }

}

class EventBusState extends State<EventBusPage>{

  var _stateInfo1 = "初始值1";
  var _stateInfo2 = "初始值2";
  StreamSubscription subscription;

  @override
  void initState() {
    super.initState();
    _addEventBusListener();
  }

  @override
  void dispose() {
    super.dispose();
    if (subscription != null) {
      subscription.cancel();
      subscription = null;
    }
    bus.off("sendListener2");
    bus.off("sendListener3");
  }

  /// 添加监听
  void _addEventBusListener() {
    subscription = EventBusService.instance.eventBus.on<EventMessage>().listen((event) {
      String name = event.eventName;
      setState(() {
        _stateInfo1 = "发送通知收到了1";
      });
      if (name == "sendListener1-1") {
        var message = event.arguments["message"];
        setState(() {
          _stateInfo2 = "发送通知收到了1-2" + message;
        });
      }
    });

    bus.on("sendListener2", (arg) {
      setState(() {
        _stateInfo1 = "发送通知收到了2-1";
      });
    });

    bus.on("sendListener3", (arg) {
      // Map<String, dynamic> map = arg;
      // int state = map["state"];
      // String message = map["message"];
      setState(() {
        _stateInfo1 = "发送通知收到了3-1:";
        //_stateInfo1 = "发送通知收到了3-1:"+state.toString()+"----"+message;
      });
    });
  }



  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("异步UI更新-FutureBuilder-StreamBuilder"),
      ),
      body: new Center(
        child: new ListView(
          children: [
            Text(_stateInfo1),
            Text(_stateInfo2),
            MaterialButton(
                color: Colors.pinkAccent,
                child: Text("发送通知，使用EventBusService"),
                onPressed: () {
                  EventBusService.instance.eventBus.fire(EventMessage(
                    "sendListener1",
                    arguments: {"state": 1, "message" : "message"},
                  ));
                }),
            MaterialButton(
                color: Colors.pinkAccent,
                child: Text("发送通知，使用EventBusHelper"),
                onPressed: () {
                  bus.emit("sendListener2", (arg) {

                  });
                }),
            MaterialButton(
                color: Colors.pinkAccent,
                child: Text("发送通知，，使用EventBusHelper"),
                onPressed: () {
                  Map<String,dynamic> map = new Map();
                  map["state"] = 1;
                  map["message"] = "message";
                  bus.emit("sendListener3", (map) {

                  });
                }),
          ],
        ),
      ),
    );
  }
}

