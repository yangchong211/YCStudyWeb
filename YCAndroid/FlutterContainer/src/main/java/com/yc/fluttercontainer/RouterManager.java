package com.yc.fluttercontainer;

import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.plugins.FlutterPlugin;

public final class RouterManager {

    private static final String CACHED_ENGINE_ID = "FlutterRouterPlugin_ENGINE";

    private FlutterEngine mEngine;
    private InterRouter mRouter;

    private RouterManager() {}

    public static RouterManager getInstance() {
        return SingletonHolder.sInstance;
    }

    public RouterManager setRouter(InterRouter router) {
        mRouter = router;
        return this;
    }

    public InterRouter getRouter() {
        return mRouter;
    }

    public RouterManager setEngine(FlutterEngine engine) {
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
        private static final RouterManager sInstance = new RouterManager();
    }
}
