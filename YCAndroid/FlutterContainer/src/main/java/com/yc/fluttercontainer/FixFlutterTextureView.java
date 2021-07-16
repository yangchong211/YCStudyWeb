package com.yc.fluttercontainer;

import android.content.Context;
import android.util.AttributeSet;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import io.flutter.embedding.android.FlutterTextureView;
import io.flutter.embedding.engine.renderer.FlutterRenderer;

/**
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/11/9
 *     desc  : 自定义FlutterTextureView
 *     revise:
 * </pre>
 */
public class FixFlutterTextureView extends FlutterTextureView {

    public FixFlutterTextureView(@NonNull Context context) {
        super(context);
    }

    public FixFlutterTextureView(@NonNull Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    // FlutterRenderer must be non-null.
    private void disconnectSurfaceFromRenderer() {
        FlutterRenderer flutterRenderer = getAttachedRenderer();
        if (flutterRenderer == null) {
            throw new IllegalStateException(
                    "disconnectSurfaceFromRenderer() " +
                            "should only be called when flutterRenderer is non-null.");
        }
        flutterRenderer.stopRenderingToSurface();
        // 修复在异常情况下的 Crash 问题
        // 具体指容器连续调用两次 onPause，或者 onPause, onResume, onPause 时
        // 中间 onResume 过快导致崩溃
        /*if (renderSurface != null) {
            renderSurface.release();
        }
        renderSurface = null;*/
    }

}
