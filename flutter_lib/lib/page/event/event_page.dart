

import 'package:flutter/material.dart';
import 'package:flutter_lib/page/event/provider/business_state_service.dart';
import 'package:flutter_lib/page/event/bus/event_bus_page.dart';
import 'package:flutter_lib/page/event/pointer_event_page.dart';
import 'package:flutter_lib/page/event/gesture_detector_page.dart';
import 'package:flutter_lib/page/event/provider/provider_state_page.dart';
import 'package:flutter_lib/page/event/provider/service_locator.dart';
import 'package:flutter_lib/widget/custom_raised_button.dart';

class EventPage extends StatefulWidget{

  @override
  State<StatefulWidget> createState() {
    return new EventState();
  }

}

class EventState extends State<EventPage>{

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {

    return new Scaffold(
      appBar: new AppBar(
        title: new Text("事件处理和通知"),
      ),
      body: new Center(
        child: new ListView(
          children: [
            CustomRaisedButton(new PointerEventPage(), "原始指针事件处理"),
            CustomRaisedButton(new GestureDetectorPage(), "手势识别"),
            CustomRaisedButton(new EventBusPage(), "事件总线"),
            CustomRaisedButton(new ProviderStatePage(), "Provider状态事件"),
            new Text(
              "这个是一个 ChangeNotifier",
              style:new TextStyle(
                color: Colors.red,
                fontSize: 20,
              ),
            ),
            new Row(
              children: [
                new RaisedButton(
                    onPressed: () {
                      BusinessPatternService _patternService = serviceLocator<BusinessPatternService>();
                      _patternService.noneBusinessPattern();
                    },
                    child: new Text("none")
                ),
                new RaisedButton(
                    onPressed: () {
                      BusinessPatternService _patternService = serviceLocator<BusinessPatternService>();
                      _patternService.normalBusinessPattern();
                    },
                    child: new Text("normal")
                ),
                new RaisedButton(
                    onPressed: () {
                      BusinessPatternService _patternService = serviceLocator<BusinessPatternService>();
                      _patternService.smallBusinessPattern();
                    },
                    child: new Text("小屏模式")
                ),
                new RaisedButton(
                    onPressed: () {
                      BusinessPatternService _patternService = serviceLocator<BusinessPatternService>();
                      _patternService.overviewBusinessPattern();
                    },
                    child: new Text("全屏模式")
                ),
                new ProviderStatePage(),
              ],
            ),
          ],
        ),
      ),
    );
  }

}