package com.ycbjie.ycandroid;

import android.app.Application;

import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.plugins.GeneratedPluginRegistrant;

public class App extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        initFlutter();
    }

    private void initFlutter() {
        FlutterEngine engine = new FlutterEngine(this);
        GeneratedPluginRegistrant.registerWith(engine);
    }
}
