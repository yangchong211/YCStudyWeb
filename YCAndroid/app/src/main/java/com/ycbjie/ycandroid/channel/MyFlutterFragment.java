package com.ycbjie.ycandroid.channel;

import android.os.Bundle;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import io.flutter.embedding.android.FlutterFragment;
import io.flutter.embedding.engine.FlutterEngine;


public class MyFlutterFragment extends FlutterFragment {

    public static final String METHOD_CHANNEL = "com.ycbjie.android/method";
    private FlutterEngine flutterEngine;

    public static MyFlutterFragment newInstance(String route) {
        MyFlutterFragment fragment = new MyFlutterFragment();
        Bundle args = new Bundle();
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        // 这里保证了getView()返回值不为null
        flutterEngine = getFlutterEngine();
    }

    public void create(){

    }

}
