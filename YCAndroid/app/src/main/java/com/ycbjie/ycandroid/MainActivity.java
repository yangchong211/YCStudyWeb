package com.ycbjie.ycandroid;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

import io.flutter.facade.Flutter;
import io.flutter.plugin.common.EventChannel;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;
import io.flutter.view.FlutterView;

/**
 * @author yc
 */
public class MainActivity extends AppCompatActivity {

    private TextView textView;
    private TextView tvFlutter;
    private FrameLayout frameLayout;
    private FlutterView flutterView;
    private FlutterView flutterViewAbout;

    /**
     * 从flutter这边传递数据到Android
     */
    public static final String FLUTTER_TO_ANDROID_CHANNEL = "com.ycbjie.toandroid/plugin";
    /**
     * 从Android这边传递数据到flutter
     */
    public static final String ANDROID_TO_FLUTTER_CHANNEL = "com.ycbjie.toflutter/plugin";
    private static final String INIT_ROUTE = "yc_route";


    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        textView = findViewById(R.id.params);
        tvFlutter = findViewById(R.id.tv_flutter);
        frameLayout = findViewById(R.id.rl_flutter);
        initListener();
        addFlutterView();
        createEventChannel();
        createMethodChannel();
    }

    private void initListener() {
        tvFlutter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                toFlutterPage();
            }
        });
    }

    private void addFlutterView() {
        flutterView = Flutter.createView(this, getLifecycle(), INIT_ROUTE);
        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT);
        frameLayout.addView(flutterView, layoutParams);
    }

    /**
     * 从Android这边传递数据到flutter
     */
    private void createEventChannel() {
        new EventChannel(flutterView, ANDROID_TO_FLUTTER_CHANNEL)
                .setStreamHandler(new EventChannel.StreamHandler() {
                    @Override
                    public void onListen(Object o, EventChannel.EventSink eventSink) {
                        String android = "逗比，来自android原生的参数";
                        eventSink.success(android);
                    }

                    @Override
                    public void onCancel(Object o) {

                    }
                });
    }


    /**
     * 从flutter这边传递数据到Android
     * 这里负责接收数据
     */
    private void createMethodChannel() {
        new MethodChannel(flutterView, FLUTTER_TO_ANDROID_CHANNEL)
                .setMethodCallHandler(new MethodChannel.MethodCallHandler() {
            @Override
            public void onMethodCall(MethodCall methodCall, MethodChannel.Result result) {
                if ("doubi".equals(methodCall.method)) {
                    //接收来自flutter的指令
                    //跳转到指定Activity
                    Intent intent = new Intent(MainActivity.this, DouBiActivity.class);
                    startActivity(intent);
                    //返回给flutter的参数
                    result.success("success");
                } else if ("android".equals(methodCall.method)) {
                    //接收来自flutter的指令
                    //解析参数
                    Object text = methodCall.argument("flutter");
                    if (text instanceof String){
                        //带参数跳转到指定Activity
                        Intent intent = new Intent(MainActivity.this, AndroidFirstActivity.class);
                        intent.putExtra("yc", (String) text);
                        startActivity(intent);
                    }else if (text instanceof List){
                        Intent intent = new Intent(MainActivity.this, AndroidSecondActivity.class);
                        intent.putStringArrayListExtra("yc", (ArrayList<String>) text);
                        startActivity(intent);
                    }
                    //返回给flutter的参数
                    result.success("success");
                } else {
                    result.notImplemented();
                }
            }
        });
    }


    /**
     * Android跳转flutter页面
     */
    private void toFlutterPage() {
        flutterViewAbout = Flutter.createView(
                MainActivity.this,
                getLifecycle(),
                "yc"
        );
        FrameLayout.LayoutParams layout = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,ViewGroup.LayoutParams.MATCH_PARENT);
        layout.leftMargin = 0;
        layout.topMargin = 0;
        addContentView(flutterViewAbout, layout);
    }


    @Override
    public void onBackPressed() {
        if(this.flutterView!=null){
            this.flutterView.popRoute();
        }else {
            super.onBackPressed();
        }
        if(this.flutterViewAbout!=null){
            this.flutterViewAbout.popRoute();
        }else {
            super.onBackPressed();
        }
    }


}
