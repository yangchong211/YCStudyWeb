import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:yc_flutter_tool/page/event/provider/business_pattern.dart';

class ProviderStatePage extends StatefulWidget{

  @override
  State<StatefulWidget> createState() {
    return new ProviderStateState();
  }

}

class ProviderStateState extends State<ProviderStatePage>{
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("Provider"),
      ),
      body: getWidget(context),
    );
  }

  Widget getWidget(BuildContext context) {
    return Consumer<BusinessPattern>(builder: (context, businessModel, child) {
      switch (businessModel.currentState) {
        case PatternState.none:
          return Scaffold(body: WidgetPage("无模式"));
          break;
        case PatternState.normal:
          return Scaffold(body: WidgetPage("正常模式"));
          break;
        case PatternState.small:
          return Scaffold(body: WidgetPage("小屏模式"));
          break;
        case PatternState.overview:
          return Scaffold(body: WidgetPage("全屏模式"));
          break;
        default:
          return SizedBox();
      }
    });
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
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("Provider状态事件"),
      ),
      body: new Center(
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
      ),
    );
  }
}