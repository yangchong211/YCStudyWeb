package android.src.main.java.com.yc.flutteInterRouter.flutter_router;

import android.content.Context;
import android.util.Log;

import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.FlutterEngineCache;
import io.flutter.embedding.engine.dart.DartExecutor;
import io.flutter.embedding.engine.plugins.FlutterPlugin;
import io.flutter.view.FlutterMain;

public class RouterManager {
    private static final String CACHED_ENGINE_ID = "FlutterRouterPlugin_ENGINE";

    private FlutterEngine mEngine;
    private InterRouter mRouter;

    private RouterManager() {}

    public static FlutterRouterPlugin getInstance() {
        return SingletonHolder.sInstance;
    }

    public FlutterRouterPlugin setRouter(InterRouter router) {
        mRouter = router;
        return this;
    }

    public InterRouter getRouter() {
        return mRouter;
    }

    public FlutterRouterPlugin setEngine(FlutterEngine engine) {
        mEngine = engine;
        return this;
    }

    public <T extends FlutterPlugin> T getPlugin(Class<? extends FlutterPlugin> pluginClass) {
        return (T) mEngine.getPlugins().get(pluginClass);
    }

    public FlutterEngine getEngine() {
        return mEngine;
    }

    private static class SingletonHolder {
        private static FlutterRouterPlugin sInstance = new RouterManager();
    }
}
