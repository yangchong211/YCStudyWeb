package com.yc.fluttercontainer;

import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import io.flutter.embedding.android.SplashScreen;

/**
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/11/9
 *     desc  : 启动页面，这里设置成白色
 *     revise:
 * </pre>
 */
public class FlutterSplashView implements SplashScreen {

    @Nullable
    @Override
    public View createSplashView(@NonNull Context context, @Nullable Bundle savedInstanceState) {
        View v = new View(context);
        v.setBackgroundColor(Color.WHITE);
        return v;
    }

    @Override
    public void transitionToFlutter(@NonNull Runnable onTransitionComplete) {
        onTransitionComplete.run();
    }

    @Override
    public boolean doesSplashViewRememberItsTransition() {
        return false;
    }

    @Nullable
    @Override
    public Bundle saveSplashScreenState() {
        return null;
    }

}
