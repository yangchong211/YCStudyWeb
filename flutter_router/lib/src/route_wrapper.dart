import 'package:flutter/widgets.dart';

class RouteWrapper {
  final String pageId;
  Route<dynamic> route;

  RouteWrapper(this.pageId, this.route);

  // 判断是否有WillPopCallback，如果有则需要拦截，不能被后面的observer处理，否则WillPopCallback会再次被后面的observer处理
  // ignore: invalid_use_of_protected_member
  bool get hasScopedWillPopCallback =>
      (route is ModalRoute) && (route as ModalRoute).hasScopedWillPopCallback;

  @override
  String toString() {
    return 'RouteWrapper{pageId: $pageId, route: ${route.settings.name}';
  }

  bool isPopupRoute() {
    return !hasScopedWillPopCallback && route is PopupRoute;
  }
}
