package com.ycbjie.ycandroid.container;

import android.os.Bundle;
import android.widget.FrameLayout;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ycbjie.ycandroid.R;

import io.flutter.embedding.android.FlutterFragment;

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
        FlutterFragment flutterFragment = fragmentBuilder.initialRoute("yc").build();

        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.rl_flutter, flutterFragment)
                .commit();
    }


}
