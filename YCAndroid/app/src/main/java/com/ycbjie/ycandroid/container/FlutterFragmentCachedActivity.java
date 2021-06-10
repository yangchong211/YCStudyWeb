package com.ycbjie.ycandroid.container;

import android.os.Bundle;
import android.widget.FrameLayout;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ycbjie.ycandroid.R;

import io.flutter.embedding.android.FlutterFragment;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.FlutterEngineCache;
import io.flutter.embedding.engine.dart.DartExecutor;

/**
 * @author yc
 */
public class FlutterFragmentCachedActivity extends AppCompatActivity {

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

        // 创建可缓存的FlutterEngine对象
        FlutterEngine flutterEngine = new FlutterEngine(this);
        flutterEngine.getNavigationChannel().setInitialRoute("yc");
        flutterEngine.getDartExecutor().executeDartEntrypoint(
                DartExecutor.DartEntrypoint.createDefault()
        );
        //放在这里不生效，思考为什么
        flutterEngine.getNavigationChannel().setInitialRoute("yc");
        // 将FlutterEngine缓存起来，这里传入的"my_engine_id"就相当于缓存名称。
        FlutterEngineCache.getInstance().put("my_engine_id", flutterEngine);

        // 通过FlutterFragment引入Flutter编写的页面
        // 过FlutterFragment.withCachedEngine()方法来创建FlutterFragment，参数传入上面的缓存名称。
        // 需要注意，withCachedEngine()方法返回的是一个CachedEngineFragmentBuilder对象，
        // 同样是使用了建造者模式，但是它是没有initialRoute()方法的，如果我们要指定初始路由，
        // 需要在创建FlutterEngine对象时通过setInitialRoute()方法来设置。
        FlutterFragment flutterFragment = FlutterFragment.withCachedEngine("my_engine_id").build();

        //放在这里不生效，思考为什么
        //flutterEngine.getNavigationChannel().setInitialRoute("yc");

        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.rl_flutter, flutterFragment)
                .commit();

        //放在这里不生效，思考为什么
        //flutterEngine.getNavigationChannel().setInitialRoute("yc");
    }


}
