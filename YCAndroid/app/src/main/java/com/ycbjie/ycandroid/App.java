package com.ycbjie.ycandroid;

import android.app.Application;

import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.plugins.GeneratedPluginRegistrant;

public class App extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        //GeneratedPluginRegistrant.registerWith(new FlutterEngine(this));
    }
}
