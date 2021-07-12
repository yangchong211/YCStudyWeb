import 'dart:async';

import 'package:flutter/widgets.dart';
import 'package:flutter_router/hot/hotrestart_controller.dart';
import 'package:flutter_router/registry/native_result.dart';
import 'package:flutter_router/channel/flutter_channel.dart';
import 'package:flutter_router/src/route_wrapper.dart';

const HOME_PAGE_ID = "HOME";

class FlutterRouter {
  static FlutterRouter _instance = FlutterRouter._();
  static const LIFECYCLE_EVENT_ON_RESUME = "LifecycleOnResume";

  final Map<String, List<RouteWrapper>> _pageHistory = {};

  String _currentPageId;
  set currentPageId(pageId) => _currentPageId = pageId ?? HOME_PAGE_ID;
  String get currentPageId => _currentPageId;

  int _routeCount = 0;
  int _pageCount = 0;

  final Completer<NavigatorState> completer = Completer<NavigatorState>();

  Future<NavigatorState> get navigator async => await completer.future;

  final HotRestartController hotRestartController = HotRestartController();

  factory FlutterRouter() {
    return _instance;
  }

  FlutterRouter._() {}

  List<RouteWrapper> getPageHistory(String pageId) {
    List<RouteWrapper> ret = _pageHistory[pageId];
    if (ret == null) {
      ret = <RouteWrapper>[];
      _pageHistory[pageId] = ret;
    }
    return ret;
  }

  ///
  /// 实现 Flutter 跳 Native，单纯跳不关心返回值
  ///   url： Native 侧 URL，支持 Native 侧定义的路由路径，也支持网页
  ///   params： 路由传参
  ///   urlParams：可选参数，这里面的参数将被拼到 URL 的 GET 参数中
  ///
  void open(String url, {Map<String, dynamic> params, Map<String, dynamic> urlParams}) {
    String finalUrl = url;

    if (urlParams != null) {
      finalUrl = _appendUrlParams(url, urlParams);
    }

    FlutterChannel.open(finalUrl, params);
  }

  ///
  /// 实现 Flutter 跳 Native，关心返回值
  /// 跳 native 后，Native 必须要回传一个值，否则会导致内存泄漏。
  ///   url： Native 侧 URL，支持 Native 侧定义的路由路径，也支持网页
  ///   params： 路由传参
  ///   urlParams：可选参数，这里面的参数将被拼到 URL 的 GET 参数中
  ///
  Future<dynamic> openForResult(String url, {Map<String, dynamic> params, Map<String, dynamic> urlParams}) {
    Future<dynamic> future = NativeResultRegistry.registerNativeResultFuture(currentPageId);
    open(url, params: params, urlParams: urlParams);
    return future;
  }

  ///
  /// 关闭当前 Flutter 容器
  ///
  void closeContainer({dynamic result}) async {
    FlutterChannel.closeTopContainer(currentPageId, result: result);
  }

  ///
  /// Native跳转Flutter，返回生命周期事件流，业务方可自行注册订阅和销毁订阅
  ///
  Stream<String> lifecycleStream() => FlutterChannel.lifecycleStream();

  String _appendUrlParams(String path, Map<String, dynamic> param) {
    // 将参数追加到URL中
    var uri = Uri.parse(path);
    if (param != null && param.length > 0) {
      Map<String, String> strParams = Map.from(uri.queryParameters);
      param.forEach((key, value) {
        strParams[key] = value.toString();
      });
      uri = uri.replace(queryParameters: strParams);
    }
    return uri.toString();
  }

  void pushRoute(String pageId, Route route) {
    getPageHistory(pageId).add(RouteWrapper(pageId, route));
    debugPrint('_pageHistory:${_pageHistory.toString()}');
    _routeCount++;
    hotRestartController.saveHistory(_pageHistory);
  }

  void popRoute(String pageId, Route route) {
    List<RouteWrapper> history = getPageHistory(pageId);

    if (history == null || history.isEmpty) {
      return;
    }

    if (history.last.route == route) {
      final wrapperToRemove = history.removeLast();
      debugPrint('removed: ${wrapperToRemove.toString()}');
      _routeCount--;
    }
    hotRestartController.saveHistory(_pageHistory);
  }

  Future<void> maybePop() async {
    await didPopRoute(byUser: true);
  }

  Future<bool> didPopRoute({bool byUser = false}) async {
    try {
      final history = _pageHistory[currentPageId];

      debugPrint('intercept pop: currentPageId=$currentPageId');

      if (history == null || history.isEmpty) {
        return false;
      }

      final routeWrapper = history.last;

      if (routeWrapper.route.isActive) {
        //如果有hasScopedWillPopCallback，则必须返回true，否则WidgetsApp会再次调用route.willPop()导致onWillPop会执行两次
        final bool hasScopedWillPopCallback = routeWrapper.hasScopedWillPopCallback;

        if (!hasScopedWillPopCallback && routeWrapper.isPopupRoute()) {
          //如果当前是popup，按back键时直接关闭当前popup
          await navigator.then((navigator) => navigator.pop());
          return true;
        }

        final RoutePopDisposition disposition = await routeWrapper.route.willPop();

        debugPrint('intercept pop : disposition=${disposition.toString()}');

        if (disposition == RoutePopDisposition.pop && history.length == 1) {
          //当前page最后一个,关闭Native容器
          FlutterChannel.closeTopContainer(routeWrapper.pageId);
          return true;
        }

        //如果有WillPopCallback，则完成pop动作，后继observer不执行
        if (byUser || hasScopedWillPopCallback) {
          if (disposition == RoutePopDisposition.pop) {
            await navigator.then((navigator) => navigator.pop(false));
          } else if (disposition == RoutePopDisposition.bubble) {
            FlutterChannel.closeTopContainer(routeWrapper.pageId);
          }
        }

        return hasScopedWillPopCallback;
      }
    } catch (e, stack) {
      debugPrint('intercept pop err ${e.toString()}, ${stack}');
    }

    return false;
  }

  void replaceRoute(Route newRoute, Route oldRoute) {
    debugPrint('replace, newRoute: $newRoute, oldRoute: $oldRoute');

    //支持pushReplacement，遍历所有的history，替换route
    _pageHistory.forEach((key, list) {
      final firstWhere = list.firstWhere((element) {
        if (element.route == oldRoute) {
          element.route = newRoute;
          return true;
        }
        return false;
      }, orElse: () {
        return null;
      });

      debugPrint('didReplace done:$firstWhere');
    });
  }

  void pageCountInc() {
    _pageCount++;
  }

  void pageCountDec() {
    _pageCount--;
  }
}
