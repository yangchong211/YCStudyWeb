String dartUniCallbackManagerContent(String generate) => """
import 'caches.dart';
import 'UniCallback.dart';
import 'package:flutter/services.dart';

class UniCallbackManager {
  static UniCallbackManager _instance;
  static BasicMessageChannel _channel;

  static UniCallbackManager getInstance() {
    _instance ??= UniCallbackManager._internal();
    return _instance;
  }

  UniCallbackManager._internal() {
    _channel = BasicMessageChannel<Object>(
        'com.didi.rlab.uni_api.AudioManager.callback_channel',
        StandardMessageCodec()
    );
    _channel.setMessageHandler((event) {
      print('onEvent ' + event.toString());
      String callbackName = event['callbackName'];
      Object data = event['data'];
      List<UniCallback> callbacks = [];
      callbacks.addAll(uniCallbackCache.values);
      for (final callback in callbacks) {
        $generate
      }
      return null;
    });
  }
}
""";