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

import com.ycbjie.ycandroid.channel.ChannelActivity;
import com.ycbjie.ycandroid.container.FlutterContainerActivity;

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
    private TextView tvChannel;
    private FrameLayout frameLayout;
    private FlutterView flutterView;
    private FlutterView flutterViewAbout;
    private FlutterEngine flutterEngine;
    private BinaryMessenger binaryMessenger;


    /**
     * 应用场景：以前两种都不一样，互相调用
     */
    public static final String ANDROID_AND_FLUTTER_CHANNEL = "com.ycbjie.android/basic";


    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        tvContainer = findViewById(R.id.tv_container);
        tvFlutter = findViewById(R.id.tv_flutter);
        tvFlutter1 = findViewById(R.id.tv_flutter1);
        tvChannel = findViewById(R.id.tv_channel);
        frameLayout = findViewById(R.id.rl_flutter);
        initListener();
        addFlutterView();
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
                startActivity(new Intent(HomeActivity.this, FlutterContainerActivity.class));
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
        tvChannel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(HomeActivity.this, ChannelActivity.class));
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
     * 应用场景：以前两种都不一样，互相调用
     */
    private void createBasicMessageChannel(FlutterView flutterViewAbout) {

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
