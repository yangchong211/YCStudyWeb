package android.src.main.java.com.yc.flutterRouter.flutter_router;

import androidx.annotation.NonNull;

import java.util.HashMap;
import java.util.Map;

import io.flutter.embedding.engine.plugins.FlutterPlugin;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;
import io.flutter.plugin.common.MethodChannel.MethodCallHandler;
import io.flutter.plugin.common.MethodChannel.Result;

/** RnachoPlugin */
public class FlutterRouterPlugin implements FlutterPlugin, MethodCallHandler {
  public static final String LIFECYCLE_ON_CREATE = "LifecycleOnCreate";
  public static final String LIFECYCLE_ON_RESUME = "LifecycleOnResume";
  public static final String LIFECYCLE_ON_DESTROY = "LifecycleOnDestroy";
  public static final String CHANNEL_NAME = "com.yc.router/rnacho";

  private static final String CALL_PARAM_URL = "url";
  private static final String CALL_PARAM_PAGE_ID = "pageId";

  private MethodChannel channel;
  private MethodChannel channelOnCreate;
  private MethodChannel channelOnResume;
  private MethodChannel channelOnDestroy;

  @Override
  public void onAttachedToEngine(@NonNull FlutterPluginBinding flutterPluginBinding) {
    channel = new MethodChannel(
            flutterPluginBinding.getFlutterEngine().getDartExecutor(),
            CHANNEL_NAME);
    channel.setMethodCallHandler(this);

    channelOnCreate = new MethodChannel(
            flutterPluginBinding.getFlutterEngine().getDartExecutor(),
            CHANNEL_NAME + "/" + LIFECYCLE_ON_CREATE);
    channelOnResume = new MethodChannel(
            flutterPluginBinding.getFlutterEngine().getDartExecutor(),
            CHANNEL_NAME + "/" + LIFECYCLE_ON_RESUME);
    channelOnDestroy = new MethodChannel(
            flutterPluginBinding.getFlutterEngine().getDartExecutor(),
            CHANNEL_NAME + "/" + LIFECYCLE_ON_DESTROY);
  }

  public void sendLifecycleEvent(String pageId, String lifecycle, Map<String, Object> params) {
    Map<String, Object> arguments = new HashMap<>();
    arguments.put("pageId", pageId);
    if (params != null) {
      arguments.putAll(params);
    }

    MethodChannel channel = null;
    switch (lifecycle) {
      case LIFECYCLE_ON_CREATE:
        channel = channelOnCreate;
        break;
      case LIFECYCLE_ON_RESUME:
        channel = channelOnResume;
        break;
      case LIFECYCLE_ON_DESTROY:
        channel = channelOnDestroy;
        break;
    }

    if (channel != null) {
      channel.invokeMethod(lifecycle, arguments);
    }
  }

  public void setPageResult(String pageId, Map<String, Object> params) {
    Map<String, Object> realParams = new HashMap<>(params);
    realParams.put("pageId", pageId);
    channel.invokeMethod("onPageResult", realParams);
  }

  @Override
  public void onMethodCall(@NonNull MethodCall call, @NonNull Result result) {
    String methodName = call.method;

    switch (methodName) {
      case "open":
        methodOpen(call, result);
        break;
      case "closeTopContainer":
        methodCloseContainer(call, result);
        break;
      default:
        result.notImplemented();
    }
  }

  private void methodOpen(MethodCall call, Result result) {
    String url = call.argument(CALL_PARAM_URL);
    String pageId = call.argument(CALL_PARAM_PAGE_ID);

    if (url == null || url.isEmpty()) {
      result.success(false);
      return;
    }

    HashMap<String, Object> params = new HashMap<>();
    if (call.arguments instanceof HashMap) {
      params.putAll((Map<String, Object>) call.arguments);
    }

    RRouter rRouter = RNacho.getInstance().getRouter();
    if (rRouter != null) {
      rRouter.openFlutterContainer(url, params, pageId);
    }

    result.success(true);
  }

  private void methodCloseContainer(MethodCall call, Result result) {
    RRouter rRouter = RNacho.getInstance().getRouter();
    if (rRouter != null) {
      rRouter.closeFlutterContainer((String) call.argument("pageId"), (Map<String, Object>) call.argument("result"));
    }
    result.success(true);
  }

  @Override
  public void onDetachedFromEngine(@NonNull FlutterPluginBinding binding) {
    channel.setMethodCallHandler(null);
  }
}
