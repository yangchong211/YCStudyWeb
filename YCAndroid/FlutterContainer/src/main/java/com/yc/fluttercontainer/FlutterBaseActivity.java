package com.yc.fluttercontainer;

import android.os.Build;

import androidx.annotation.NonNull;

import io.flutter.embedding.android.FlutterActivity;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.plugins.FlutterPlugin;
import io.flutter.embedding.engine.plugins.PluginRegistry;

public class FlutterBaseActivity extends FlutterActivity {

    @Override
    public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        super.configureFlutterEngine(flutterEngine);
    }

    @Override
    public void cleanUpFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        super.cleanUpFlutterEngine(flutterEngine);
    }

    /**
     * 当flutter ui展示出来的时候，会回调这个方法
     */
    @Override
    public void onFlutterUiDisplayed() {
        super.onFlutterUiDisplayed();
        // Notifies Android that we're fully drawn so that performance metrics can be collected by
        // Flutter performance tests.
        // This was supported in KitKat (API 19), but has a bug around requiring
        // permissions. See https://github.com/flutter/flutter/issues/46172
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            getActivity().reportFullyDrawn();
        }
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

}
