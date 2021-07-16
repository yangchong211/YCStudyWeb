package com.yc.fluttercontainer;

import android.content.Context;
import android.util.AttributeSet;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import io.flutter.embedding.android.FlutterImageView;
import io.flutter.embedding.android.FlutterSurfaceView;
import io.flutter.embedding.android.FlutterTextureView;
import io.flutter.embedding.android.FlutterView;
import io.flutter.embedding.engine.FlutterEngine;

/**
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/11/9
 *     desc  : 自定义FlutterView
 *     revise:
 * </pre>
 */
public class FixFlutterView extends FlutterView {

    public FixFlutterView(@NonNull Context context) {
        super(context);
    }

    public FixFlutterView(@NonNull Context context, @NonNull FlutterSurfaceView flutterSurfaceView) {
        super(context, flutterSurfaceView);
    }

    public FixFlutterView(@NonNull Context context, @NonNull FlutterTextureView flutterTextureView) {
        super(context, flutterTextureView);
    }

    public FixFlutterView(@NonNull Context context, @NonNull FlutterImageView flutterImageView) {
        super(context, flutterImageView);
    }

    public FixFlutterView(@NonNull Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    /**
     * 关键代码，将Flutter页面显示到FlutterView中
     * 这个方法的作用就是将Flutter编写的UI页面显示到FlutterView中
     * flutterEngine的类型为FlutterEngine，字面意思就是Flutter引擎
     * 它负责在Android端执行Dart代码，将Flutter编写的UI显示到FlutterView/FlutterActivity/FlutterFragment中。
     * @param flutterEngine
     */
    @Override
    public void attachToFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        super.attachToFlutterEngine(flutterEngine);
    }
}
