package com.ycbjie.ycandroid;

import android.app.Application;

import com.yc.fluttercontainer.FlutterLoggerUtils;

import io.flutter.Log;
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

        FlutterLoggerUtils.setLogger(new FlutterLoggerUtils.Logger() {
            @Override
            public void log(String content) {
                //这个地方的日志，是可以上传服务端，暴露给开发者
            }

            @Override
            public boolean debugLogEnable() {
                return true;
            }
        });
    }
}
