package com.yc.fluttercontainer;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.os.SystemClock;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import java.util.HashMap;
import java.util.Map;
import io.flutter.embedding.android.FlutterActivity;
import io.flutter.embedding.android.FlutterView;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.dart.DartExecutor;
import io.flutter.embedding.engine.plugins.FlutterPlugin;
import io.flutter.embedding.engine.plugins.PluginRegistry;
import io.flutter.embedding.engine.renderer.FlutterUiDisplayListener;
import io.flutter.embedding.engine.renderer.RenderSurface;
import io.flutter.embedding.engine.systemchannels.NavigationChannel;
import io.flutter.plugin.common.BinaryMessenger;


public class FlutterEngineActivity extends FlutterActivity {

    private LinearLayout root;
    private FrameLayout layoutContainer;
    private FlutterEngine flutterEngine;
    private FrameLayout mFlutterContainer;
    private FlutterView mFlutterView;
    private RenderSurface mRenderSurface;
    private String mPageId;
    private Map<String, Object> params;

    private final FlutterUiDisplayListener flutterUiDisplayListener =
            new FlutterUiDisplayListener() {
        @Override
        public void onFlutterUiDisplayed() {
            FlutterEngineActivity.this.onFlutterUiDisplayed();
        }

        @Override
        public void onFlutterUiNoLongerDisplayed() {
            FlutterEngineActivity.this.onFlutterUiNoLongerDisplayed();
        }
    };

    @Override
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        mPageId = SystemClock.uptimeMillis() + "@" + Integer.toHexString(hashCode());
        FlutterContainerRegistry.registerContainer(mPageId, this);
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.flutter_container);
        initIntentArgs();
        addFlutterView();
        initView();
        attachToFlutterEngine();
    }

    private void addFlutterView() {
        flutterEngine = new FlutterEngine(this);
        //BinaryMessenger binaryMessenger = flutterEngine.getDartExecutor().getBinaryMessenger();
        NavigationChannel navigationChannel = flutterEngine.getNavigationChannel();
        StringBuffer sb = new StringBuffer();
        if (params!=null){
            String path = (String) params.get("initial_route");
            sb.append(path);
        }
        //String route = "yc?{\"name\":\"杨充\"}";
        navigationChannel.setInitialRoute(sb.toString());
        //navigationChannel.setInitialRoute("yc?{\"name\":\"杨充\"}");
        flutterEngine.getDartExecutor().executeDartEntrypoint(
                DartExecutor.DartEntrypoint.createDefault()
        );
    }

    private void initView() {
        root = findViewById(R.id.root);
        layoutContainer = findViewById(R.id.layout_container);
        root.setBackgroundColor(Color.WHITE);
        layoutContainer.addView(onInflateFlutterLayout(layoutContainer));
    }

    /**
     * 通过覆写此接口自定义布局
     * 在自定义布局中需要自己调用 createFlutterView 创建 FlutterView
     * @param container                             container
     * @return
     */
    public View onInflateFlutterLayout(FrameLayout container) {
        return createFlutterView(container.getContext());
    }

    public View createFlutterView(Context context) {
        mFlutterContainer = new FrameLayout(context);
        FixFlutterTextureView flutterTextureView = new FixFlutterTextureView(this);
        mRenderSurface = flutterTextureView;
        // 通过FlutterView引入Flutter编写的页面
        // 这里的FlutterView位于io.flutter.embedding.android包中
        // 和此前我们所创建的FlutterView（位于io.flutter.view包中）是不一样的。
        // 通过查看FlutterView的源码可以发现它继承自FrameLayout，因此像一个普通的View那样添加就可以了。
        mFlutterView = new FlutterView(this, flutterTextureView);
        mFlutterView.addOnFirstFrameRenderedListener(flutterUiDisplayListener);
        FrameLayout.LayoutParams lp = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT);
        mFlutterContainer.addView(mFlutterView, lp);
        return mFlutterContainer;
    }

    private void attachToFlutterEngine() {
        // 关键代码，将Flutter页面显示到FlutterView中
        // 这个方法的作用就是将Flutter编写的UI页面显示到FlutterView中
        // flutterEngine的类型为FlutterEngine，字面意思就是Flutter引擎
        // 它负责在Android端执行Dart代码，将Flutter编写的UI显示到FlutterView/FlutterActivity/FlutterFragment中。
        mFlutterView.attachToFlutterEngine(flutterEngine);
    }

    @Override
    public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        super.configureFlutterEngine(flutterEngine);
    }

    @Override
    public void cleanUpFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        super.cleanUpFlutterEngine(flutterEngine);
    }

    @Override
    public boolean shouldAttachEngineToActivity() {
        return super.shouldAttachEngineToActivity();
    }

    @Override
    public void onFlutterUiDisplayed() {
        super.onFlutterUiDisplayed();
        root.setBackgroundColor(Color.TRANSPARENT);
        // Notifies Android that we're fully drawn so that performance metrics can be collected by
        // Flutter performance tests.
        // This was supported in KitKat (API 19), but has a bug around requiring
        // permissions. See https://github.com/flutter/flutter/issues/46172
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            getActivity().reportFullyDrawn();
        }
    }

    @Override
    public void onFlutterUiNoLongerDisplayed() {
        //
        super.onFlutterUiNoLongerDisplayed();
    }

    public void addFlutterPlugin(FlutterEngine engine, FlutterPlugin plugin) {
        if (engine == null) {
            return;
        }
        PluginRegistry registry = engine.getPlugins();
        if (registry.has(plugin.getClass())) {
            return;
        }
        registry.add(plugin);
    }

    public void removeFlutterPlugin(FlutterEngine engine, Class<? extends FlutterPlugin> pluginClass) {
        if (engine == null) {
            return;
        }
        PluginRegistry registry = engine.getPlugins();
        if (!registry.has(pluginClass)) {
            return;
        }
        registry.remove(pluginClass);
    }

    /**
     * 处理路由参数传递信息
     */
    private void initIntentArgs() {
        Intent intent = getIntent();
        //从intent取出bundle
        //Bundle bundle = intent.getBundleExtra("Message");
        Bundle bundle = intent.getExtras();
        if (bundle!=null){
            String path = bundle.getString(FlutterCommons.BUNDLE_KEY_PATH);
            // 向 Flutter 传的参数
            // 页面参数扁平化透传
            Map<String, Object> stringObjectMap = transformBundleParameters(bundle);
            params = new HashMap<>(stringObjectMap);
            // 兼容嵌套 params Bundle
            if (bundle.containsKey(FlutterCommons.BUNDLE_KEY_PARAMS)) {
                Bundle bundleParams = bundle.getBundle(FlutterCommons.BUNDLE_KEY_PARAMS);
                if (bundleParams != null) {
                    params.putAll(transformBundleParameters(bundleParams));
                }
            }
            // 传混合路由跳转路径
            params.put("initial_route", path);
            Log.d("flutter", "传入的路由地址：" + path);
            Log.d("flutter", "prams: " + params.toString());
        }
    }

    public Map<String, Object> transformBundleParameters(Bundle bundle) {
        HashMap<String, Object> ret = new HashMap<String, Object>();
        if (bundle != null) {
            for (String key : bundle.keySet()) {
                // 排除掉不兼容的类型
                if (bundle.get(key) instanceof Bundle) {
                    continue;
                }
                ret.put(key, bundle.get(key));
            }
        }
        return ret;
    }

    @Override
    protected void onStart() {
        super.onStart();
    }

    /**
     * 分别在onResume()、onPause()和onStop()方法中调用了LifecycleChannel的appIsResumed()、
     * appIsInactive()和appIsPaused()方法，作用就是同步Flutter端与原生端的生命周期。
     * 猜想可能是FlutterVIew的渲染机制有了一些变化，在接收到原生端对应生命周期方法中发送的通知才会显示。
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
        if (mRenderSurface != null && mRenderSurface.getAttachedRenderer() != null) {
            // 不能单独用 mRenderSurface attachToRenderer 和 detachRenderer
            // 这只是把 Surface 释放掉了，会导致 destroy mFlutterView 释放不掉，最终导致泄漏 Activity
            mFlutterView.detachFromFlutterEngine();
        }
        flutterEngine.getLifecycleChannel().appIsInactive();
    }

    @Override
    protected void onStop() {
        super.onStop();
        flutterEngine.getLifecycleChannel().appIsPaused();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mFlutterView.removeOnFirstFrameRenderedListener(flutterUiDisplayListener);
        FlutterContainerRegistry.removeContainer(mPageId);
        // 在 engine 销毁前先把 FlutterView 拿下来，否则先销毁引擎再拿下视图
        // 会导致 FlutterTextureView 在脱离视图树的回调中再触发一次销毁，而这次销毁中会存在 NPE 问题
        mFlutterContainer.removeAllViews();
        mFlutterView.removeAllViews();
        if (mRenderSurface != null) {
            // 打断内存泄漏
            ((FixFlutterTextureView) mRenderSurface).setSurfaceTextureListener(null);
        }
    }

}
