package com.yc.fluttercontainer;

import android.content.Context;
import android.util.AttributeSet;

import androidx.annotation.NonNull;

import io.flutter.embedding.android.FlutterSurfaceView;

/**
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/11/9
 *     desc  : 自定义FlutterTextureView
 *     revise:
 * </pre>
 */
public class FixFlutterSurfaceView extends FlutterSurfaceView {


    public FixFlutterSurfaceView(@NonNull Context context) {
        super(context);
    }

    public FixFlutterSurfaceView(@NonNull Context context, boolean renderTransparently) {
        super(context, renderTransparently);
    }

    public FixFlutterSurfaceView(@NonNull Context context, @NonNull AttributeSet attrs) {
        super(context, attrs);
    }
}
