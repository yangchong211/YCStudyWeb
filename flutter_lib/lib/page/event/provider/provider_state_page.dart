import 'package:flutter/material.dart';
import 'package:flutter_lib/page/event/provider/business_state_service.dart';
import 'package:flutter_lib/page/event/provider/service_locator.dart';
import 'package:provider/provider.dart';
import 'package:flutter_lib/page/event/provider/business_pattern.dart';

class ProviderStatePage extends StatefulWidget{

  @override
  State<StatefulWidget> createState() {
    return new ProviderStateState();
  }

}

class ProviderStateState extends State<ProviderStatePage>{

  @override
  void initState() {
    super.initState();
    BusinessPatternService _patternService = serviceLocator<BusinessPatternService>();
    _patternService.normalBusinessPattern();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Consumer<BusinessPattern>(builder: (context, businessModel, child) {
            switch (businessModel.currentState) {
              case BusinessPatternState.none:
                return WidgetPage("无模式");
                break;
              case BusinessPatternState.normal:
                return WidgetPage("正常模式");
                break;
              case BusinessPatternState.small:
                return WidgetPage("小屏模式");
                break;
              case BusinessPatternState.overview:
                return WidgetPage("全屏模式");
                break;
              default:
                return WidgetPage("默认模式");
                break;
            }
          })
        ],
      ),
    );
  }
}


class WidgetPage extends StatefulWidget{

  String title = "这个是标题";

  WidgetPage(String title){
    this.title = title;
  }

  //WidgetPage(String title);

  @override
  State<StatefulWidget> createState() {
    return new WidgetState(title);
  }

}

class WidgetState extends State<WidgetPage>{

  var _title;

  WidgetState(String title){
    this._title = title;
  }

  @override
  Widget build(BuildContext context) {
    return new Center(
        child: new ListView(
          children: [
            new Text(
              "这个是一个 "+_title,
              style:new TextStyle(
                color: Colors.red,
                fontSize: 20,
              ),
            ),
          ],
        ),
    );
  }
}