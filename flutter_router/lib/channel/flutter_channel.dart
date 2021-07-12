import 'dart:async';
import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'package:flutter_router/flutter_router.dart';
import 'package:flutter_router/registry/native_result.dart';

const CHANNEL_ARGUMENT_KEY_PAGE_ID = "pageId";
const CHANNEL_ARGUMENT_KEY_INITIAL_ROUTE = "initial_route";
const CHANNEL_ARGUMENT_KEY_PARAMS = "params";

class FlutterChannel {

  static final MethodChannel _channel = MethodChannel('com.yc.router/rnacho');
  static final MethodChannel _channelOnCreate = MethodChannel('com.yc.router/rnacho/LifecycleOnCreate');
  static final MethodChannel _channelOnResume = MethodChannel('com.yc.router/rnacho/LifecycleOnResume');
  static final MethodChannel _channelOnDestroy = MethodChannel('com.yc.router/rnacho/LifecycleOnDestroy');
  static final StreamController<String> _streamController = StreamController.broadcast();

  static void init() {
    print("RNachoChannel.init()");
    _channelOnCreate.setMethodCallHandler((call) async => lifecycleOnCreate(call.arguments));
    _channelOnResume.setMethodCallHandler((call) async => lifecycleOnResume(call.arguments));
    _channelOnDestroy.setMethodCallHandler((call) async => lifecycleOnDestroy(call.arguments));

    _channel.setMethodCallHandler((call) {
      String methodName = call.method;

      if (methodName == "onPageResult") {
        String pageId = call.arguments['pageId'];
        NativeResultRegistry.onPageResult(pageId, call.arguments);
      }

      return null;
    });
  }

  static Future<void> lifecycleOnCreate(arguments, {BuildContext context}) async {
    final String pageId = arguments[CHANNEL_ARGUMENT_KEY_PAGE_ID];
    final String initialRoute = arguments[CHANNEL_ARGUMENT_KEY_INITIAL_ROUTE];
    final dynamic params = arguments[CHANNEL_ARGUMENT_KEY_PARAMS];

    debugPrint('LifecycleOnCreate $pageId, $initialRoute, $params');

    FlutterRouter().currentPageId = pageId;

    FlutterRouter().pageCountInc();

    if (initialRoute != null) {
      //如果是'/'开头的，则直接打开
      if (initialRoute.startsWith('/')) {
        //push到Native的首页（禁用动画）
        final RouteSettings settings = RouteSettings(
            name: initialRoute.contains('?')
                ? initialRoute.substring(0, initialRoute.indexOf('?'))
                : initialRoute,
            arguments: arguments);

        try {
          final navigator = await FlutterRouter().navigator;

          debugPrint('navigator=$navigator');

          Route<dynamic> route = navigator.widget.onGenerateRoute(settings);

          if (route is ModalRoute) {
            //借用原来的Route的buildPage函数，来生成无动画的Route
            route = PageRouteBuilder<dynamic>(
                settings: settings,
                transitionDuration: const Duration(seconds: 0),
                pageBuilder: (route as ModalRoute<dynamic>).buildPage);
          }

          route ??= navigator.widget.onUnknownRoute(settings);

          debugPrint('push page when container onCreate:$route');
          if (route != null) {
            debugPrint('push page when container onCreate:$route');
            if (context != null) {
              Navigator.of(context).push(route);
            } else {
              navigator.push<dynamic>(route);
            }
          }
        } catch (e, stack) {
          debugPrint('lifecycleEvent error $e, $stack');
        }
      }
    }
  }

  static void lifecycleOnResume(arguments) {
    final String pageId = arguments[CHANNEL_ARGUMENT_KEY_PAGE_ID];

    FlutterRouter().currentPageId = pageId;

    _streamController.add(FlutterRouter.LIFECYCLE_EVENT_ON_RESUME);
    debugPrint('LifecycleOnResume $pageId');
  }

  static void lifecycleOnDestroy(arguments) {
    final String pageId = arguments[CHANNEL_ARGUMENT_KEY_PAGE_ID];

    //当页面关闭后，确认此页面的路由都remove了
    final history = FlutterRouter().getPageHistory(pageId);

    if (history == null) {
      return;
    }

    for (final routeWrapper in history) {
      //使用route自身的nav去remove
      routeWrapper.route?.navigator?.removeRoute(routeWrapper.route);
      debugPrint('onDestroy remove route ${routeWrapper.route}');

      FlutterRouter().pageCountDec();
    }

    history.clear();

    WidgetsBinding.instance?.drawFrame();
  }

  static void closeTopContainer(String pageId, {dynamic result}) {
    _channel.invokeMethod("closeTopContainer", {
      'pageId': pageId,
      'result': result
    });
  }

  static void open(String url, [Map<String, dynamic> params]) async {
    params ??= <String, dynamic>{};
    params['url'] = url;
    params['pageId'] = FlutterRouter().currentPageId;
    _channel.invokeMethod('open', params);
  }

  static Stream<String> lifecycleStream() => _streamController.stream;
}

abstract class ChannelMethod {
  String get name;

  Future<void> exec(dynamic arguments);
}
