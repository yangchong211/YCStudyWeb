//package com.ycbjie.ycandroid;
//
//import android.annotation.SuppressLint;
//import android.content.Intent;
//import android.os.Bundle;
//import android.util.Log;
//import android.view.View;
//import android.view.ViewGroup;
//import android.widget.FrameLayout;
//import android.widget.TextView;
//
//import androidx.appcompat.app.AppCompatActivity;
//import androidx.fragment.app.FragmentTransaction;
//
//import com.ycbjie.ycandroid.router.RouterToNaActivity;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import io.flutter.embedding.android.FlutterFragment;
//import io.flutter.facade.Flutter;
//import io.flutter.plugin.common.BasicMessageChannel;
//import io.flutter.plugin.common.EventChannel;
//import io.flutter.plugin.common.MethodCall;
//import io.flutter.plugin.common.MethodChannel;
//import io.flutter.plugin.common.StandardMethodCodec;
//import io.flutter.plugin.common.StringCodec;
//import io.flutter.view.FlutterView;
//
///**
// * @author yc
// */
//public class MainActivity extends AppCompatActivity {
//
//    private TextView textView;
//    private TextView tvFlutter;
//    private TextView tvFlutter1;
//    private FrameLayout frameLayout;
//    private FlutterView flutterView;
//    private FlutterView flutterViewAbout;
//
//    /**
//     * 从flutter这边传递数据到Android
//     */
//    public static final String FLUTTER_TO_ANDROID_CHANNEL = "com.ycbjie.toandroid/plugin";
//    /**
//     * 从Android这边传递数据到flutter
//     */
//    public static final String ANDROID_TO_FLUTTER_CHANNEL = "com.ycbjie.toflutter/plugin";
//    /**
//     * 应用场景：以前两种都不一样，互相调用
//     */
//    public static final String ANDROID_AND_FLUTTER_CHANNEL = "com.ycbjie.androidAndFlutter/plugin";
//    private static final String INIT_ROUTE = "yc_route";
//
//
//    @SuppressLint("SetTextI18n")
//    @Override
//    protected void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);
//        textView = findViewById(R.id.params);
//        tvFlutter = findViewById(R.id.tv_flutter);
//        tvFlutter1 = findViewById(R.id.tv_flutter1);
//        frameLayout = findViewById(R.id.rl_flutter);
//        initListener();
//        addFlutterView();
//        createEventChannel();
//        createMethodChannel();
//    }
//
//    private void initListener() {
//        tvFlutter.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                toFlutterPage();
//            }
//        });
//    }
//
//    private void addFlutterView() {
//        // 通过FlutterView引入Flutter编写的页面
//        // Flutter.createView()方法返回的是一个FlutterView，它继承自View，我们可以把它当做一个普通的View
//        // Flutter.createView()方法的第三个参数传入了"yc_route"字符串，表示路由名称，它确定了Flutter中要显示的Widget
//        flutterView = Flutter.createView(this, getLifecycle(), INIT_ROUTE);
//        FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(
//                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT);
//        //添加到布局中
//        frameLayout.addView(flutterView, layoutParams);
//        //addContentView(flutterView, layout);
//    }
//
//    private void addFlutterFragment(){
//        // 通过FlutterFragment引入Flutter编写的页面
//        FragmentTransaction tx = getSupportFragmentManager().beginTransaction();
//        // Flutter.createFragment()方法传入的参数同样表示路由名称，用于确定Flutter要显示的Widget
//        // 返回一个FlutterFragment，该类继承自Fragment，将该Fragment添加到Activity中就可以了。
//        FlutterFragment flutterFragment = Flutter.createFragment(INIT_ROUTE);
//        tx.replace(R.id.rl_flutter, flutterFragment);
//        tx.commit();
//    }
//
//    /**
//     * 从Android这边传递数据到flutter
//     */
//    private void createEventChannel() {
//        new EventChannel(flutterView, ANDROID_TO_FLUTTER_CHANNEL)
//                .setStreamHandler(new EventChannel.StreamHandler() {
//                    @Override
//                    public void onListen(Object o, EventChannel.EventSink eventSink) {
//                        String android = "逗比，来自android原生的参数";
//                        eventSink.success(android);
//                    }
//
//                    @Override
//                    public void onCancel(Object o) {
//
//                    }
//                });
//    }
//
//
//    /**
//     * 从flutter这边传递数据到Android
//     * 这里负责接收数据
//     */
//    private void createMethodChannel() {
//        new MethodChannel(flutterView, FLUTTER_TO_ANDROID_CHANNEL,StandardMethodCodec.INSTANCE)
//                .setMethodCallHandler(new MethodChannel.MethodCallHandler() {
//            @Override
//            public void onMethodCall(MethodCall methodCall, MethodChannel.Result result) {
//                if ("doubi".equals(methodCall.method)) {
//                    //接收来自flutter的指令
//                    //跳转到指定Activity
//                    Intent intent = new Intent(MainActivity.this, RouterToNaActivity.class);
//                    startActivity(intent);
//                    //返回给flutter的参数
//                    result.success("success");
//                } else if ("android".equals(methodCall.method)) {
//                    //接收来自flutter的指令
//                    //解析参数
//                    Object text = methodCall.argument("flutter");
//                    if (text instanceof String){
//                        //带参数跳转到指定Activity
//                        Intent intent = new Intent(MainActivity.this, RouterToNaActivity.class);
//                        intent.putExtra("yc", (String) text);
//                        startActivity(intent);
//                    }else if (text instanceof List){
//                        Intent intent = new Intent(MainActivity.this, RouterToNaActivity.class);
//                        intent.putStringArrayListExtra("yc", (ArrayList<String>) text);
//                        startActivity(intent);
//                    }
//                    //返回给flutter的参数
//                    result.success("success");
//                } else {
//                    result.notImplemented();
//                }
//            }
//        });
//    }
//
//
//    /**
//     * 应用场景：以前两种都不一样，互相调用
//     */
//    private void createBasicMessageChannel(FlutterView flutterViewAbout) {
//        BasicMessageChannel<String> channel = new BasicMessageChannel<>(flutterViewAbout,
//                ANDROID_AND_FLUTTER_CHANNEL, StringCodec.INSTANCE);
//        //发送消息
//        channel.send("逗比，互相调用场景：我是Native发送的消息", new BasicMessageChannel.Reply<String>() {
//            @Override
//            public void reply(String s) {
//                Log.e("BasicMessageChannel发送消息",s);
//            }
//        });
//        //接收消息
//        channel.setMessageHandler(new BasicMessageChannel.MessageHandler<String>() {
//            @Override
//            public void onMessage(String s, BasicMessageChannel.Reply<String> reply) {
//                reply.reply("It is reply from native");
//                Log.e("BasicMessageChannel",s);
//                Log.e("BasicMessageChannel",reply.toString());
//                Intent intent = new Intent(MainActivity.this, RouterToNaActivity.class);
//                intent.putExtra("yc", s);
//                startActivity(intent);
//            }
//        });
//    }
//
//
//    /**
//     * Android跳转flutter页面
//     */
//    private void toFlutterPage() {
//        flutterViewAbout = Flutter.createView(
//                MainActivity.this,
//                getLifecycle(),
//                "yc"
//        );
//        FrameLayout.LayoutParams layout = new FrameLayout.LayoutParams(
//                ViewGroup.LayoutParams.MATCH_PARENT,ViewGroup.LayoutParams.MATCH_PARENT);
//        layout.leftMargin = 0;
//        layout.topMargin = 0;
//        addContentView(flutterViewAbout, layout);
//        createBasicMessageChannel(flutterViewAbout);
//    }
//
//    @Override
//    public void onBackPressed() {
//        if(this.flutterView!=null){
//            this.flutterView.popRoute();
//        }else {
//            super.onBackPressed();
//        }
//        if(this.flutterViewAbout!=null){
//            this.flutterViewAbout.popRoute();
//        }else {
//            super.onBackPressed();
//        }
//    }
//
//
//}
