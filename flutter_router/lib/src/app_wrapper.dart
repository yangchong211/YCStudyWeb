import 'package:flutter/widgets.dart';
import 'package:flutter_router/channel/flutter_channel.dart';
import 'package:flutter_router/flutter_router.dart';


class RNachoAppWrapper extends StatefulWidget {
  final Widget _child;

  RNachoAppWrapper(this._child);

  @override
  State<StatefulWidget> createState() {
    return _RNachoAppWrapperState();
  }
}

class _RNachoAppWrapperState extends State<RNachoAppWrapper> with WidgetsBindingObserver {
  @override
  void initState() {
    super.initState();
    FlutterChannel.init();
    WidgetsFlutterBinding.ensureInitialized().addObserver(this);
  }

  @override
  void dispose() {
    WidgetsBinding.instance?.removeObserver(this);
    super.dispose();
  }

  @override
  Future<bool> didPopRoute() async {
    debugPrint('_RNachoAppWrapperState => didPopRoute');
    return await FlutterRouter().didPopRoute();
  }

  @override
  Widget build(BuildContext context) {
    return widget._child;
  }

  @override
  void didChangeMetrics() {
    //当FlutterView(SurfaceView)的大小变化时，修改_screenWidth
  }
}