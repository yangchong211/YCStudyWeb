package com.yc.fluttercontainer;

import android.content.Context;
import android.os.Build;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.HashMap;
import java.util.Map;

import io.flutter.embedding.android.FlutterActivity;
import io.flutter.embedding.android.FlutterSurfaceView;
import io.flutter.embedding.android.FlutterTextureView;
import io.flutter.embedding.android.RenderMode;
import io.flutter.embedding.android.SplashScreen;
import io.flutter.embedding.android.TransparencyMode;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.plugins.FlutterPlugin;
import io.flutter.embedding.engine.plugins.PluginRegistry;

/**
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/11/9
 *     desc  : base类
 *     revise:
 * </pre>
 */
public class FlutterBaseActivity extends FlutterActivity {

    private static final String TAG = "FlutterBaseActivity";

    /**
     * 配置flutter
     * 在该方法中，你可以添加自己的Plugin
     * @param flutterEngine                         flutterEngine
     */
    @Override
    public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        super.configureFlutterEngine(flutterEngine);
        FlutterLoggerUtils.log(TAG,"configureFlutterEngine");
    }

    @Override
    public void cleanUpFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        super.cleanUpFlutterEngine(flutterEngine);
        FlutterLoggerUtils.log(TAG,"cleanUpFlutterEngine");
    }

    /**
     * 当flutter ui展示出来的时候，会回调这个方法
     */
    @Override
    public void onFlutterUiDisplayed() {
        super.onFlutterUiDisplayed();
        FlutterLoggerUtils.log(TAG,"onFlutterUiDisplayed");
        // Notifies Android that we're fully drawn so that performance metrics can be collected by
        // Flutter performance tests.
        // This was supported in KitKat (API 19), but has a bug around requiring
        // permissions. See https://github.com/flutter/flutter/issues/46172
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            getActivity().reportFullyDrawn();
        }
    }

    @Override
    public void onFlutterUiNoLongerDisplayed() {
        super.onFlutterUiNoLongerDisplayed();
        FlutterLoggerUtils.log(TAG,"onFlutterUiNoLongerDisplayed");
    }

    @Override
    public boolean shouldRestoreAndSaveState() {
        boolean shouldRestoreAndSaveState = super.shouldRestoreAndSaveState();
        FlutterLoggerUtils.log(TAG,"shouldRestoreAndSaveState:"+shouldRestoreAndSaveState);
        return shouldRestoreAndSaveState;
    }

    @Override
    public void onFlutterSurfaceViewCreated(@NonNull FlutterSurfaceView flutterSurfaceView) {
        super.onFlutterSurfaceViewCreated(flutterSurfaceView);
        FlutterLoggerUtils.log(TAG,"onFlutterSurfaceViewCreated");
    }

    @Override
    public void onFlutterTextureViewCreated(@NonNull FlutterTextureView flutterTextureView) {
        super.onFlutterTextureViewCreated(flutterTextureView);
        FlutterLoggerUtils.log(TAG,"onFlutterTextureViewCreated");
    }

    @Override
    public boolean shouldAttachEngineToActivity() {
        boolean shouldAttachEngineToActivity = super.shouldAttachEngineToActivity();
        FlutterLoggerUtils.log(TAG,"shouldAttachEngineToActivity:"+shouldAttachEngineToActivity);
        return shouldAttachEngineToActivity;
    }

    /**
     *
     * @return                              SplashScreen
     */
    @Nullable
    @Override
    public SplashScreen provideSplashScreen() {
        FlutterLoggerUtils.log(TAG,"SplashScreen");
        return super.provideSplashScreen();
    }

    /**
     *
     * @return                              TransparencyMode
     */
    @NonNull
    @Override
    public TransparencyMode getTransparencyMode() {
        TransparencyMode transparencyMode = super.getTransparencyMode();
        //return TransparencyMode.opaque;
        FlutterLoggerUtils.log(TAG,"transparencyMode:"+transparencyMode.name());
        return transparencyMode;
    }

    @NonNull
    @Override
    public RenderMode getRenderMode() {
        RenderMode renderMode = super.getRenderMode();
        FlutterLoggerUtils.log(TAG,"renderMode:"+renderMode.name());
        return renderMode;
    }

    @NonNull
    @Override
    public String getInitialRoute() {
        return super.getInitialRoute();
    }

    @NonNull
    @Override
    public String getAppBundlePath() {
        String appBundlePath = super.getAppBundlePath();
        FlutterLoggerUtils.log(TAG,"appBundlePath:"+appBundlePath);
        return appBundlePath;
    }

    @NonNull
    @Override
    public String getDartEntrypointFunctionName() {
        return super.getDartEntrypointFunctionName();
    }

    @Nullable
    @Override
    public FlutterEngine provideFlutterEngine(@NonNull Context context) {
        FlutterEngine flutterEngine = super.provideFlutterEngine(context);
        FlutterLoggerUtils.log(TAG,"provideFlutterEngine");
        return flutterEngine;
    }

    public void addFlutterPlugin(FlutterEngine engine, FlutterPlugin plugin) {
        if (engine == null) {
            return;
        }
        PluginRegistry registry = engine.getPlugins();
        if (registry.has(plugin.getClass())) {
            return;
        }
        registry.add(plugin);
    }

    public void removeFlutterPlugin(FlutterEngine engine,
                                    Class<? extends FlutterPlugin> pluginClass) {
        if (engine == null) {
            return;
        }
        PluginRegistry registry = engine.getPlugins();
        if (!registry.has(pluginClass)) {
            return;
        }
        registry.remove(pluginClass);
    }

    public Map<String, Object> transformBundleParameters(Bundle bundle) {
        HashMap<String, Object> ret = new HashMap<String, Object>();
        if (bundle != null) {
            for (String key : bundle.keySet()) {
                // 排除掉不兼容的类型
                if (bundle.get(key) instanceof Bundle) {
                    continue;
                }
                ret.put(key, bundle.get(key));
            }
        }
        return ret;
    }


}
