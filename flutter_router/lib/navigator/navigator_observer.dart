import 'package:flutter/widgets.dart';
import 'package:flutter_router/flutter_router.dart';

class FlutterNavigatorObserver extends NavigatorObserver {
  @override
  void didPush(Route route, Route previousRoute) {
    FlutterRouter rNacho = FlutterRouter();

    if (!rNacho.completer.isCompleted) {
      rNacho.completer.complete(navigator);
      // 第一个占位页不管理
      return;
    }

    final String currentPageId = rNacho.currentPageId;

    debugPrint('currentPageId:$currentPageId,didPush:${route.settings.name}');

    rNacho.pushRoute(currentPageId, route);
  }

  @override
  void didPop(Route route, Route previousRoute) {
    FlutterRouter rNacho = FlutterRouter();

    final String currentPageId = rNacho.currentPageId;

    rNacho.popRoute(currentPageId, route);
  }

  @override
  void didReplace({Route newRoute, Route oldRoute}) {
    FlutterRouter().replaceRoute(newRoute, oldRoute);
  }
}