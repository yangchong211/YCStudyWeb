package com.ycbjie.ycandroid;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Point;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.view.ViewCompat;

import com.ycbjie.ycandroid.channel.ChannelActivity;
import com.ycbjie.ycandroid.container.FlutterContainerActivity;
import com.ycbjie.ycandroid.flutter.FlutterDemoActivity;

import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.dart.DartExecutor;
import io.flutter.plugin.common.BinaryMessenger;
//TODO 注意这两个是不一样的
//import io.flutter.view.FlutterView;
import io.flutter.embedding.android.FlutterView;

import static androidx.core.view.ViewCompat.getDisplay;

/**
 * @author yc
 */
public class HomeActivity extends AppCompatActivity {

    private TextView tvContainer;
    private TextView tvChannel;
    private TextView tvFlutter;
    private TextView tvInfo;
    private FrameLayout frameLayout;
    private FlutterView flutterView;
    private FlutterView flutterViewAbout;
    private FlutterEngine flutterEngine;
    private BinaryMessenger binaryMessenger;


    private static final int REQUEST_EXTERNAL_STORAGE = 1;

    private static final String[] PERMISSIONS_STORAGE = {
            "android.permission.READ_EXTERNAL_STORAGE",
            "android.permission.WRITE_EXTERNAL_STORAGE" };

    public static void verifyStoragePermissions(Activity activity) {
        try {
            //检测是否有写的权限
            int permission = ActivityCompat.checkSelfPermission(activity,
                    "android.permission.WRITE_EXTERNAL_STORAGE");
            if (permission != PackageManager.PERMISSION_GRANTED) {
                // 没有写的权限，去申请写的权限，会弹出对话框
                ActivityCompat.requestPermissions(activity,
                        PERMISSIONS_STORAGE,REQUEST_EXTERNAL_STORAGE);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        tvContainer = findViewById(R.id.tv_container);
        tvChannel = findViewById(R.id.tv_channel);
        frameLayout = findViewById(R.id.rl_flutter);
        tvFlutter = findViewById(R.id.tv_flutter);
        tvInfo = findViewById(R.id.tv_info);

        initListener();
        addFlutterView();
        verifyStoragePermissions(this);
        test();
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
        tvChannel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(HomeActivity.this, ChannelActivity.class));
            }
        });
        tvFlutter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(HomeActivity.this, FlutterDemoActivity.class));
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

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }

    @SuppressLint("SetTextI18n")
    private void test(){
        int heightPixels = getHeightPixels(this);
        int widthPixels = getWidthPixels(this);
        tvInfo.setText("宽："+widthPixels + " 高："+heightPixels);
    }

    public static int getWidthPixels(Context context) {
        DisplayMetrics metrics = new DisplayMetrics();
        WindowManager windowManager = (WindowManager) context.getApplicationContext()
                .getSystemService(Context.WINDOW_SERVICE);
        if (windowManager == null) {
            return 0;
        }
        windowManager.getDefaultDisplay().getMetrics(metrics);
        return metrics.widthPixels;
    }

    public static int getHeightPixels(Context context) {
        DisplayMetrics metrics = new DisplayMetrics();
        WindowManager windowManager = (WindowManager) context.getApplicationContext()
                .getSystemService(Context.WINDOW_SERVICE);
        if (windowManager == null) {
            return 0;
        }
        windowManager.getDefaultDisplay().getMetrics(metrics);
        return metrics.heightPixels;
    }

}
