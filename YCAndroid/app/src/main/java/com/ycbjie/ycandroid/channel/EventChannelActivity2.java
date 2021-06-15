package com.ycbjie.ycandroid.channel;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ycbjie.ycandroid.R;

import java.util.HashMap;

import io.flutter.embedding.android.FlutterFragment;
import io.flutter.embedding.android.FlutterView;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.dart.DartExecutor;
import io.flutter.plugin.common.BinaryMessenger;
import io.flutter.plugin.common.EventChannel;
import io.flutter.plugin.common.StandardMethodCodec;

/**
 * @author yc
 */
public class EventChannelActivity2 extends AppCompatActivity implements View.OnClickListener {

    private TextView tv;
    private TextView tvContent;
    private TextView tvInvoke;
    private FrameLayout rlFlutter;
    private FlutterFragment flutterFragment;
    private EventChannel nativeChannel;

    /**
     * 首先定义Channel名称，需要保证是唯一的，在Flutter端需要使用同样的名称来创建MethodChannel。
     */
    public static final String EVENT_CHANNEL = "com.ycbjie.android/event";

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_channel_method);

        tv = findViewById(R.id.tv);
        tvContent = findViewById(R.id.tv_content);
        tvInvoke = findViewById(R.id.tv_invoke);
        rlFlutter = findViewById(R.id.rl_flutter);

        tvInvoke.setOnClickListener(this);
        tv.setText("EventChannel通信交互（FlutterFragment）");

        addFlutterView();
        tvInvoke.postDelayed(new Runnable() {
            @Override
            public void run() {
                //todo 思考如何解决flutterFragment.getFlutterEngine()报空指针问题，或者如何做到在flutterFragment渲染完后在创建channel
                createChannel();
            }
        },2000);
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

    private void addFlutterView() {
        // 通过FlutterFragment引入Flutter编写的页面
        // 通过FlutterFragment.createDefault()创建出FlutterFragment
        // 需要注意这里的FlutterFragment位于io.flutter.embedding.android包中
        //FlutterFragment flutterFragment = FlutterFragment.createDefault();

        // 通过FlutterFragment.withNewEngine()获取到NewEngineFragmentBuilder对象
        FlutterFragment.NewEngineFragmentBuilder fragmentBuilder = FlutterFragment.withNewEngine();
        // 使用建造者模式构造出FlutterFragment对象，可以通过initialRoute()方法指定初始路由名称。
        // 传递参数只需要在路由名称后面进行拼接。
        String route = "basic_channel?{\"author\":\"杨充\"}";
        FlutterFragment.NewEngineFragmentBuilder initialRoute = fragmentBuilder.initialRoute(route);
        flutterFragment = initialRoute.build();

        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.rl_flutter, flutterFragment)
                .commit();


        // 存在的问题
        // 使用的withNewEngine()方法从名称上也能看出每次都是创建一个新的FlutterEngine对象来显示Flutter UI，
        // 但是从官方文档中我们可以了解到每个FlutterEngine对象在显示出Flutter UI之前
        // 是需要一个warm-up（不知道能不能翻译为预热）期的，这会导致屏幕呈现短暂的空白，
        // 解决方式就是预先创建并启动FlutterEngine，完成warm-up过程，然后将这个FlutterEngine缓存起来，
        // 之后使用这个FlutterEngine来显示出Flutter UI。
        // 解决方案看：FlutterFragmentCachedActivity


        // 如何获取到FlutterEngine对象呢？FlutterFragment中定义了一个getFlutterEngine()方法，
        // 从方法名来看大概就是获取FlutterEngine对象。
        // 尝试过创建MethodChannel时传入flutterFragment.getFlutterEngine().getDartExecutor()，
        // 运行后会直接抛出空指针异常，异常产生的位置在FlutterFragment的getFlutterEngine()方法中
        // 错误原因是这里的delegate为null，全局搜索一下，发现在FlutterFragment的onAttach()方法中会对delegate赋值，也就是说明此时没有执行onAttach()方法。
        // 猜测这就是由于上面提到过的FlutterEngine的warm-up机制，这是一个耗时过程，
        // 因此FlutterFragment并不会立刻执行onAttach()方法，导致我们在Activity的onCreate()方法中直接使用FlutterFragment的getFlutterEngine()方法会抛出异常。
        // todo 调用下面这句话会空指针崩溃
        // FlutterEngine flutterEngine = flutterFragment.getFlutterEngine();
    }

    private void createChannel() {
        FlutterEngine flutterEngine = flutterFragment.getFlutterEngine();
        BinaryMessenger binaryMessenger = flutterEngine.getDartExecutor().getBinaryMessenger();
        // 在Android端创建MethodChannel时需要注意了，
        // 此前都是传入io.flutter.view包下的FlutterView作为BinaryMessenger，现在肯定是无法获取到该类对象了，
        // 那么这个参数应该传什么呢。通过查看继承关系我们可以找到两个相关的类：DartExecutor和DartMessenger。
        // DartExecutor可以通过FlutterEngine的getDartExecutor()方法获得，
        // 而DartMessenger又可以通过DartExecutor的getBinaryMessenger()方法获得
        // EventChannel nativeChannel = new EventChannel(dartExecutor, EVENT_CHANNEL);
        // 或
        // EventChannel nativeChannel = new EventChannel(binaryMessenger, EVENT_CHANNEL);
        // 或者
        // 第一个参数：是messenger，类型是BinaryMessenger，是一个接口，代表消息信使，是消息发送与接收的工具
        // 第二个参数：是name，就是Channel名称，和flutter定义的要一样
        // 第三个参数：是codec，类型是MethodCodec，代表消息的编解码器，如果没有传该参数，默认使用StandardMethodCodec。
        nativeChannel = new EventChannel(binaryMessenger, EVENT_CHANNEL, StandardMethodCodec.INSTANCE);
        // 注册Handler实现
        nativeChannel.setStreamHandler(new EventChannel.StreamHandler() {
            @Override
            public void onListen(Object arguments, EventChannel.EventSink events) {
                String android = "逗比，来自android原生的参数";
                events.success(android);
            }

            @Override
            public void onCancel(Object arguments) {

            }
        });
    }

    private void invoke(){
        if (nativeChannel!=null){
            HashMap<String , String> map = new HashMap<>();
            map.put("invokeKey","你好，这个是从NA传递过来的数据");
            nativeChannel.setStreamHandler(new EventChannel.StreamHandler() {
                @Override
                public void onListen(Object arguments, EventChannel.EventSink events) {
                    events.success(map);
                }

                @Override
                public void onCancel(Object arguments) {

                }
            });
        }
    }
}
