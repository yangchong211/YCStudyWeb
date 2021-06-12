package com.ycbjie.ycandroid.container;

import android.os.Bundle;
import android.widget.FrameLayout;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ycbjie.ycandroid.R;

import io.flutter.embedding.android.FlutterFragment;
import io.flutter.embedding.engine.FlutterEngine;

/**
 * @author yc
 */
public class FlutterFragmentActivity extends AppCompatActivity {

    private FrameLayout rlFlutter;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flutter_fragment);
        rlFlutter = findViewById(R.id.rl_flutter);
        addFlutterView();
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
        String route = "yc?{\"author\":\"杨充\"}";
        FlutterFragment.NewEngineFragmentBuilder initialRoute = fragmentBuilder.initialRoute(route);
        FlutterFragment flutterFragment = initialRoute.build();

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


}
