import 'dart:convert';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_router/channel/flutter_channel.dart';
import 'package:flutter_router/src/route_wrapper.dart';
import 'package:shared_preferences/shared_preferences.dart';


const HOT_RESTART_SP_KEY = 'rnacho_dev_hot_restart_persist';
const HOT_RESTART_PID = 'pid';
const HOT_RESTART_HISTORY = 'history';
const HOT_RESTART_PAGE_ID = 'pageId';
const HOT_RESTART_PARAMS = 'params';

abstract class IHotRestartController {
  // Flutter App 首次启动时从缓存中恢复路由栈
  void recovery(BuildContext context);

  // 保存内存快照
  void saveHistory(Map<String, List<RouteWrapper>> history);
}

class HotRestartDebugController extends IHotRestartController {
  // 恢复完成后才允许栈操作持久化
  bool recoveringFinished = false;
  Map<String, List<RouteWrapper>> recordToPersistWhileRecovering;

  @override
  Future<void> recovery(BuildContext context) async {
    final sp = await SharedPreferences.getInstance();
    String persistString = sp.getString(HOT_RESTART_SP_KEY);
    if (persistString == null || persistString.isEmpty) {
      print('nacho hotrestart persistString null');
      onRecoveryFinished();
      return;
    }
    Map<String, dynamic> persistData = jsonDecode(persistString);
    if (persistData == null || persistData.isEmpty) {
      print('nacho hotrestart recovery null');
      onRecoveryFinished();
      return;
    }

    if (persistData[HOT_RESTART_PID] != pid) {
      print('nacho hotrestart new session oldPid=${persistData[HOT_RESTART_PID]} newPid=$pid');
      onRecoveryFinished();
      return;
    }

    print('nacho hotrestart recovering oldPid=${persistData[HOT_RESTART_PID]} newPid=$pid');
    List<dynamic> history = persistData[HOT_RESTART_HISTORY];

    for (Map<String, dynamic> record in history) {
      print('nacho recover = $record');
      final params = jsonDecode(record[HOT_RESTART_PARAMS]);
      await FlutterChannel.lifecycleOnCreate(params, context: context);
      FlutterChannel.lifecycleOnResume(params);
    }

    onRecoveryFinished();
    print('rnacho hotrestart recovering finished');
  }

  void onRecoveryFinished() {
    recoveringFinished = true;

    if (recordToPersistWhileRecovering != null) {
      print('recordToPersistWhileRecovering save');
      saveHistory(recordToPersistWhileRecovering);
      recordToPersistWhileRecovering = null;
    }
  }

  @override
  void saveHistory(Map<String, List<RouteWrapper>> history) {
    print('saveHistory = $history');
    if (!recoveringFinished) {
      print('recordToPersistWhileRecovering');
      recordToPersistWhileRecovering = history;
      return;
    }

    Map<String, dynamic> persistData = parseHistory(history);
    print("rnacho hotrestart persist ${persistData}");
    SharedPreferences.getInstance().then(
        (sp) => sp.setString(HOT_RESTART_SP_KEY, jsonEncode(persistData)));
  }

  Map<String, dynamic> parseHistory(Map<String, List<RouteWrapper>> history) {
    List<Map> historyPersist = [];

    for (final pageId in history.keys) {
      Map<String, dynamic> containerRecord = {};

      List<RouteWrapper> routes = history[pageId];

      String params;

      if (routes.isNotEmpty) {
        RouteWrapper routeWrapper = routes[0];
        if (routeWrapper.route != null) {
          Route route = routeWrapper.route;
          params = jsonEncode(route.settings.arguments);
        }
      }

      containerRecord[HOT_RESTART_PAGE_ID] = pageId;
      containerRecord[HOT_RESTART_PARAMS] = params;

      historyPersist.add(containerRecord);
    }

    return generatePersistData(historyPersist);
  }

  Map<String, dynamic> generatePersistData(List<Map> history) {
    return {HOT_RESTART_PID: pid, HOT_RESTART_HISTORY: history};
  }
}

class HotRestartReleaseController extends IHotRestartController {
  @override
  void recovery(BuildContext context) {}

  @override
  void saveHistory(Map<String, List<RouteWrapper>> history) {}
}

class HotRestartController extends IHotRestartController {
  IHotRestartController delegate;

  HotRestartController() {
    if (kReleaseMode) {
      delegate = HotRestartReleaseController();
    } else {
      delegate = HotRestartDebugController();
    }
  }

  @override
  void recovery(BuildContext context) {
    delegate.recovery(context);
  }

  @override
  void saveHistory(Map<String, List<RouteWrapper>> history) {
    delegate.saveHistory(history);
  }
}
