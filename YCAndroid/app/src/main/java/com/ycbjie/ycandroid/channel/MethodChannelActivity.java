package com.ycbjie.ycandroid.channel;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ycbjie.ycandroid.DouBiActivity;
import com.ycbjie.ycandroid.FirstActivity;
import com.ycbjie.ycandroid.HomeActivity;
import com.ycbjie.ycandroid.R;
import com.ycbjie.ycandroid.SecondActivity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import io.flutter.embedding.android.FlutterView;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.dart.DartExecutor;
import io.flutter.plugin.common.BinaryMessenger;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;
import io.flutter.plugin.common.StandardMethodCodec;

/**
 * @author yc
 */
public class MethodChannelActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView tv;
    private TextView tvContent;
    private TextView tvInvoke;
    private FrameLayout rlFlutter;
    private FlutterView flutterView;
    private FlutterEngine flutterEngine;
    private DartExecutor dartExecutor;
    private BinaryMessenger binaryMessenger;
    private MethodChannel nativeChannel;
    /**
     * 从flutter这边传递数据到Android
     */
    public static final String METHOD_CHANNEL = "com.ycbjie.android/method";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_channel_method);

        tv = findViewById(R.id.tv);
        tvContent = findViewById(R.id.tv_content);
        tvInvoke = findViewById(R.id.tv_invoke);
        rlFlutter = findViewById(R.id.rl_flutter);

        tvInvoke.setOnClickListener(this);

        addFlutterView();
        createChannel();
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.tv_invoke:
                invoke();
                break;
            default:
                break;
        }
    }


    /**
     * 分别在onResume()、onPause()和onStop()方法中调用了LifecycleChannel的appIsResumed()、
     * appIsInactive()和appIsPaused()方法，作用就是同步Flutter端与原生端的生命周期。
     *
     * 猜想可能是FlutterVIew的渲染机制有了一些变化，在接收到原生端对应生命周期方法中发送的通知才会显示。
     * todo 研究下原理
     */
    @Override
    protected void onResume() {
        super.onResume();
        // flutterEngine.getLifecycleChannel()获取到的是一个LifecycleChannel对象，类比于MethodChannel，
        // 作用大概就是将Flutter和原生端的生命周期相互联系起来。
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

    private void addFlutterView() {
        flutterEngine = new FlutterEngine(this);
        dartExecutor = flutterEngine.getDartExecutor();
        binaryMessenger = dartExecutor.getBinaryMessenger();
        flutterEngine.getNavigationChannel().setInitialRoute("yc_route");
        flutterEngine.getDartExecutor().executeDartEntrypoint(
                DartExecutor.DartEntrypoint.createDefault()
        );
        // 通过FlutterView引入Flutter编写的页面
        // 这里的FlutterView位于io.flutter.embedding.android包中
        // 和此前我们所创建的FlutterView（位于io.flutter.view包中）是不一样的。
        // 通过查看FlutterView的源码可以发现它继承自FrameLayout，因此像一个普通的View那样添加就可以了。
        flutterView = new FlutterView(this);
        FrameLayout.LayoutParams lp = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT);
        rlFlutter.addView(flutterView, lp);

        //flutterEngine.getNavigationChannel().setInitialRoute("yc");

        // 关键代码，将Flutter页面显示到FlutterView中
        // 这个方法的作用就是将Flutter编写的UI页面显示到FlutterView中
        // flutterEngine的类型为FlutterEngine，字面意思就是Flutter引擎
        // 它负责在Android端执行Dart代码，将Flutter编写的UI显示到FlutterView/FlutterActivity/FlutterFragment中。
        flutterView.attachToFlutterEngine(flutterEngine);

        // FlutterEngine加载的路由名称为"/"，我们可以通过下面的代码指定初始路由名称
        // 传参的情况没有变化，直接在路由名称后面拼接参数就可以
        // 放在这里不生效，思考为什么
        //flutterEngine.getNavigationChannel().setInitialRoute("yc");
    }

    private void createChannel() {
        //FlutterEngine flutterEngine = new FlutterEngine(this);
        //DartExecutor dartExecutor = flutterEngine.getDartExecutor();
        //BinaryMessenger binaryMessenger = flutterEngine.getDartExecutor().getBinaryMessenger();

        // 在Android端创建MethodChannel时需要注意了，
        // 此前都是传入io.flutter.view包下的FlutterView作为BinaryMessenger，现在肯定是无法获取到该类对象了，
        // 那么这个参数应该传什么呢。通过查看继承关系我们可以找到两个相关的类：DartExecutor和DartMessenger。
        // DartExecutor可以通过FlutterEngine的getDartExecutor()方法获得，
        // 而DartMessenger又可以通过DartExecutor的getBinaryMessenger()方法获得
        // MethodChannel nativeChannel = new MethodChannel(dartExecutor, METHOD_CHANNEL);
        // 或
        //MethodChannel nativeChannel = new MethodChannel(binaryMessenger, METHOD_CHANNEL);
        // 或者
        nativeChannel = new MethodChannel(binaryMessenger, METHOD_CHANNEL, StandardMethodCodec.INSTANCE);
        nativeChannel.setMethodCallHandler(new MethodChannel.MethodCallHandler() {
            @Override
            public void onMethodCall(@NonNull MethodCall methodCall, @NonNull MethodChannel.Result result) {
                if ("doubi".equals(methodCall.method)) {
                    //接收来自flutter的指令
                    //跳转到指定Activity
                    Intent intent = new Intent(MethodChannelActivity.this, DouBiActivity.class);
                    startActivity(intent);
                    //返回给flutter的参数
                    result.success("Na收到指令");
                } else if ("android".equals(methodCall.method)) {
                    //接收来自flutter的指令
                    //解析参数
                    Object text = methodCall.argument("flutter");
                    if (text instanceof String){
                        //带参数跳转到指定Activity
                        Intent intent = new Intent(MethodChannelActivity.this, FirstActivity.class);
                        intent.putExtra("yc", (String) text);
                        startActivity(intent);
                    }else if (text instanceof List){
                        Intent intent = new Intent(MethodChannelActivity.this, SecondActivity.class);
                        intent.putStringArrayListExtra("yc", (ArrayList<String>) text);
                        startActivity(intent);
                    }
                    //返回给flutter的参数
                    result.success("Na成功");
                } else {
                    result.notImplemented();
                }
            }
        });
        //todo 需要注意，这里在创建MethodChannel时传入的FlutterEngine对象
        //     必须和我们此前创建好的FlutterView/FlutterFragment中使用的是同一个。

    }

    private void invoke(){
        if (nativeChannel!=null){
            HashMap<String , String> map = new HashMap<>();
            map.put("invokeKey","你好，这个是从NA传递过来的数据");
            nativeChannel.invokeMethod("getFlutterResult", map , new MethodChannel.Result() {
                @SuppressLint("SetTextI18n")
                @Override
                public void success(@Nullable Object result) {
                    tvContent.setText("测试内容："+result);
                }

                @SuppressLint("SetTextI18n")
                @Override
                public void error(String errorCode, @Nullable String errorMessage, @Nullable Object errorDetails) {
                    tvContent.setText("测试内容：flutter传递给na数据传递错误");
                }

                @Override
                public void notImplemented() {

                }
            });
        }
    }
}
