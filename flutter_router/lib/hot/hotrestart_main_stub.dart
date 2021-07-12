import 'package:flutter/material.dart';
import 'package:flutter_router/flutter_router.dart';


class NachoHomeStub extends StatefulWidget {
  final Color color;

  NachoHomeStub(this.color);

  @override
  _NachoHomeStubState createState() => _NachoHomeStubState();
}

class _NachoHomeStubState extends State<NachoHomeStub> {

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback(
            (timeStamp) => FlutterRouter().hotRestartController.recovery(context));
  }

  @override
  Widget build(BuildContext context) {
    return Container(color: widget.color ?? Colors.transparent);
  }
}
