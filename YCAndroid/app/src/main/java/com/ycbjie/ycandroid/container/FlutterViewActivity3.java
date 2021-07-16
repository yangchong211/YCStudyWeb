package com.ycbjie.ycandroid.container;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.Toast;

import com.yc.fluttercontainer.FlutterCommons;
import com.yc.fluttercontainer.FlutterContainerRegistry;
import com.yc.fluttercontainer.FlutterEngineActivity;
import com.ycbjie.ycandroid.R;
import com.ycbjie.ycandroid.router.RouterToNaAboutActivity;
import com.ycbjie.ycandroid.router.RouterToNaMeActivity;

import java.util.ArrayList;
import java.util.List;

import io.flutter.Log;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;

/**
 * @author yc
 */
public class FlutterViewActivity3 extends FlutterEngineActivity {

    public static void start(Context context){
        Intent intent = new Intent(context,FlutterViewActivity3.class);
        intent.putExtra(FlutterCommons.BUNDLE_KEY_PATH,"router_channel");
        intent.putExtra("title","这个是标题");
        intent.putExtra("age",28);
        intent.putExtra("url","www.baidu.com");
        context.startActivity(intent);
    }

    @Override
    public View onInflateFlutterLayout(FrameLayout container) {
        LayoutInflater inflater = LayoutInflater.from(container.getContext());
        View view = inflater.inflate(R.layout.activity_flutter_view, null);
        FrameLayout rl_flutter = view.findViewById(R.id.rl_flutter);
        View flutterView = createFlutterView(container.getContext());
        rl_flutter.addView(flutterView);
        return view;
    }

    @Override
    public void onMethodCallListener(MethodCall methodCall, MethodChannel.Result result) {
        String method = methodCall.method;
        Log.i("onMethodCall","---"+method);
        if ("android".equals(method)) {
            //接收来自flutter的指令
            //解析参数
            String router = methodCall.argument("router");
            Object text = methodCall.argument("flutter");
            if (router==null || router.length()==0){
                Toast.makeText(FlutterViewActivity3.this,
                        "路由地址不能为空",Toast.LENGTH_LONG).show();
                return;
            }
            if (router.equals("main/me")) {
                //带参数跳转到指定Activity
                Intent intent = new Intent(
                        FlutterViewActivity3.this,
                        RouterToNaMeActivity.class);
                intent.putExtra("yc", (String) text);
                startActivity(intent);
            } else if (router.equals("main/about")){
                Intent intent = new Intent(
                        FlutterViewActivity3.this, RouterToNaAboutActivity.class);
                intent.putStringArrayListExtra("yc", (ArrayList<String>) text);
                startActivity(intent);
            }
            //返回给flutter的参数
            result.success("Na成功");
        }
    }

    private void test(){
        FlutterEngineActivity container = FlutterContainerRegistry.getContainer("hahah");
        if (container != null) {
            container.finish();
        }
    }
}
