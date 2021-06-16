package com.ycbjie.ycandroid.container;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import com.ycbjie.ycandroid.R;

import io.flutter.embedding.android.FlutterActivity;

/**
 * @author yc
 */
public class FlutterContainerActivity extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flutter);
        TextView tv1 = findViewById(R.id.tv_1);
        TextView tv2 = findViewById(R.id.tv_2);
        TextView tv3 = findViewById(R.id.tv_3);
        TextView tv4 = findViewById(R.id.tv_4);
        tv1.setOnClickListener(this);
        tv2.setOnClickListener(this);
        tv3.setOnClickListener(this);
        tv4.setOnClickListener(this);
    }


    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.tv_1:
                startActivity(new Intent(FlutterContainerActivity.this, FlutterViewActivity.class));
                break;
            case R.id.tv_2:
                startActivity(new Intent(FlutterContainerActivity.this, FlutterFragmentActivity.class));
                break;
            case R.id.tv_3:
                startActivity(new Intent(FlutterContainerActivity.this, FlutterFragmentCachedActivity.class));
                break;
            case R.id.tv_4:
                test();
                break;
            default:
                break;
        }
    }

    /**
     * 和介绍的创建FlutterFragment的三种方式是对应的
     *
     * FlutterActivity显示的Flutter路由是在创建Intent对象时指定的,
     * 优点就是使用起来更简单，缺点就是不够灵活,
     * 无法像FlutterView/FlutterFragment那样只是作为原生页面中的一部分展示,
     * 因此这种方式更适合整个页面都是由Flutter编写的场景。
     */
    private void test(){
        // 方式一、FlutterActivity显示的路由名称为"/"，不可设置
        /*startActivity(
                FlutterActivity.createDefaultIntent(this)
        );*/

        // 方式二、FlutterActivity显示的路由名称可设置，每次都创建一个新的FlutterEngine对象
        startActivity(
                FlutterActivity
                        .withNewEngine()
                        .initialRoute("yc")
                        .build(this)
        );

        // 方式三、FlutterActivity显示的路由名称可设置，使用缓存好的FlutterEngine对象
        /*startActivity(
                FlutterActivity
                        .withCachedEngine("my_engine_id")
                        .build(this)
        );*/

        FlutterAppActivity.start(this,"yc");
    }
}
