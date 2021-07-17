import 'dart:async';
import 'package:flutter/material.dart';
import 'package:yc_flutter_tool/page/event/provider/get_it.dart';
import 'package:yc_flutter_tool/page/event/provider/pattern_state_service.dart';
import 'package:yc_flutter_tool/page/event/provider/pattern_state_service_impl.dart';

GetIt serviceLocator = GetIt.instance;

class ServiceLocator extends StatefulWidget {
  final Widget child;
  ServiceLocator(this.child);
  @override
  _ServiceLocator createState() => _ServiceLocator();
}

class _ServiceLocator extends State<ServiceLocator> {

  @override
  void initState() {
    super.initState();
  }

  Future fetchContext(BuildContext context) async {
    setupServiceLocator(context);
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: fetchContext(context),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            return widget.child;
          } else {
            return Container();
          }
        });
  }

  @override
  void dispose() {
    super.dispose();
    serviceLocator.resetLazySingleton<BusinessPatternService>();
  }

  void setupServiceLocator(BuildContext context) {
    //注册模式状态管理service
    serviceLocator.registerLazySingleton<BusinessPatternService>(
        () => BusinessPatternServiceImpl(context));
  }
}
