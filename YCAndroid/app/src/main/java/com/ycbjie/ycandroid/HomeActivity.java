package com.ycbjie.ycandroid;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.ycbjie.ycandroid.container.FlutterActivity;
import com.ycbjie.ycandroid.container.FlutterViewActivity;

import java.util.ArrayList;
import java.util.List;


import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.dart.DartExecutor;
import io.flutter.plugin.common.BasicMessageChannel;
import io.flutter.plugin.common.BinaryMessenger;
import io.flutter.plugin.common.EventChannel;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;
import io.flutter.plugin.common.StandardMethodCodec;
import io.flutter.plugin.common.StringCodec;
//TODO 注意这两个是不一样的
//import io.flutter.view.FlutterView;
import io.flutter.embedding.android.FlutterView;

/**
 * @author yc
 */
public class HomeActivity extends AppCompatActivity {

    private TextView tvContainer;
    private TextView tvFlutter;
    private TextView tvFlutter1;
    private FrameLayout frameLayout;
    private FlutterView flutterView;
    private FlutterView flutterViewAbout;
    private FlutterEngine flutterEngine;
    private BinaryMessenger binaryMessenger;

    /**
     * 从flutter这边传递数据到Android
     */
    public static final String FLUTTER_TO_ANDROID_CHANNEL = "com.ycbjie.toandroid/plugin";
    /**
     * 从Android这边传递数据到flutter
     */
    public static final String ANDROID_TO_FLUTTER_CHANNEL = "com.ycbjie.toflutter/plugin";
    /**
     * 应用场景：以前两种都不一样，互相调用
     */
    public static final String ANDROID_AND_FLUTTER_CHANNEL = "com.ycbjie.androidAndFlutter/plugin";


    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        tvContainer = findViewById(R.id.tv_container);
        tvFlutter = findViewById(R.id.tv_flutter);
        tvFlutter1 = findViewById(R.id.tv_flutter1);
        frameLayout = findViewById(R.id.rl_flutter);
        initListener();
        addFlutterView();
        createEventChannel();
        createMethodChannel();
    }

    @Override
    protected void onResume() {
        super.onResume();
        flutterEngine.getLifecycleChannel().appIsResumed();
    }

    @Override
    protected void onPause() {
        super.onPause();
        flutterEngine.getLifecycleChannel().appIsInactive();
    }

    @Override
    protected void onStop() {
        super.onStop();
        flutterEngine.getLifecycleChannel().appIsPaused();
    }

    private void initListener() {
        tvContainer.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(HomeActivity.this, FlutterActivity.class));
            }
        });
        tvFlutter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                toFlutterPage1();
            }
        });
        tvFlutter1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                toFlutterPage2();
            }
        });
    }

    private void addFlutterView() {
        flutterEngine = new FlutterEngine(this);
        binaryMessenger = flutterEngine.getDartExecutor().getBinaryMessenger();
        flutterEngine.getDartExecutor().executeDartEntrypoint(
                DartExecutor.DartEntrypoint.createDefault()
        );
        // 通过FlutterView引入Flutter编写的页面
        flutterView = new FlutterView(this);
        FrameLayout.LayoutParams lp = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT);
        frameLayout.addView(flutterView, lp);
        // 关键代码，将Flutter页面显示到FlutterView中
        flutterView.attachToFlutterEngine(flutterEngine);
    }

    /**
     * 从Android这边传递数据到flutter
     */
    private void createEventChannel() {
        new EventChannel(binaryMessenger, ANDROID_TO_FLUTTER_CHANNEL)
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
        new MethodChannel(binaryMessenger, FLUTTER_TO_ANDROID_CHANNEL,StandardMethodCodec.INSTANCE)
                .setMethodCallHandler(new MethodChannel.MethodCallHandler() {
            @Override
            public void onMethodCall(MethodCall methodCall, MethodChannel.Result result) {
                if ("doubi".equals(methodCall.method)) {
                    //接收来自flutter的指令
                    //跳转到指定Activity
                    Intent intent = new Intent(HomeActivity.this, DouBiActivity.class);
                    startActivity(intent);
                    //返回给flutter的参数
                    result.success("success");
                } else if ("android".equals(methodCall.method)) {
                    //接收来自flutter的指令
                    //解析参数
                    Object text = methodCall.argument("flutter");
                    if (text instanceof String){
                        //带参数跳转到指定Activity
                        Intent intent = new Intent(HomeActivity.this, FirstActivity.class);
                        intent.putExtra("yc", (String) text);
                        startActivity(intent);
                    }else if (text instanceof List){
                        Intent intent = new Intent(HomeActivity.this, SecondActivity.class);
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
     * 应用场景：以前两种都不一样，互相调用
     */
    private void createBasicMessageChannel(FlutterView flutterViewAbout) {
        BasicMessageChannel<String> channel = new BasicMessageChannel(binaryMessenger,
                ANDROID_AND_FLUTTER_CHANNEL, StringCodec.INSTANCE);
        //发送消息
        channel.send("逗比，互相调用场景：我是Native发送的消息", new BasicMessageChannel.Reply<String>() {
            @Override
            public void reply(String s) {
                Log.e("BasicMessageChannel发送消息",s);
            }
        });
        //接收消息
        channel.setMessageHandler(new BasicMessageChannel.MessageHandler<String>() {
            @Override
            public void onMessage(String s, BasicMessageChannel.Reply<String> reply) {
                reply.reply("It is reply from native");
                Log.e("BasicMessageChannel",s);
                Log.e("BasicMessageChannel",reply.toString());
                Intent intent = new Intent(HomeActivity.this, FirstActivity.class);
                intent.putExtra("yc", s);
                startActivity(intent);
            }
        });
    }


    /**
     * Android跳转flutter页面
     */
    private void toFlutterPage2() {
        flutterViewAbout = new FlutterView(this);
        FrameLayout.LayoutParams layout = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,ViewGroup.LayoutParams.MATCH_PARENT);
        layout.leftMargin = 0;
        layout.topMargin = 0;
        addContentView(flutterViewAbout, layout);
    }

    private void toFlutterPage1() {
        flutterViewAbout = new FlutterView(this);
        FrameLayout.LayoutParams layout = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,ViewGroup.LayoutParams.MATCH_PARENT);
        layout.leftMargin = 0;
        layout.topMargin = 0;
        addContentView(flutterViewAbout, layout);
        createBasicMessageChannel(flutterViewAbout);
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }


}
