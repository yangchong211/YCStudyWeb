import 'dart:async';

/// 存放跳 Native 后，等待 Native 回传结果
class NativeResultRegistry {

  static final String NATIVE_RESULT_EXCEPTION_CANCEL = "canceled";

  static Map<String, Completer<dynamic>> resultRegistry = {};

  static Future<dynamic> registerNativeResultFuture(String pageId) {
    if (resultRegistry.containsKey(pageId)) {
      resultRegistry[pageId]?.completeError(NATIVE_RESULT_EXCEPTION_CANCEL);
      resultRegistry.remove(pageId);
    }
    Completer<dynamic> completer = Completer();
    resultRegistry[pageId] = completer;
    return completer.future;
  }

  /// 返回值：true 结果回传成功，false 回传失败
  static bool onPageResult(String pageId, dynamic params) {
    if (!resultRegistry.containsKey(pageId)) {
      print('NativeResultRegistry onPageResult $pageId not exist');
      return false;
    }
    resultRegistry[pageId].complete(params);
    resultRegistry.remove(pageId);
    return true;
  }
}