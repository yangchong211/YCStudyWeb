package com.ycbjie.ycandroid;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.text.TextUtils;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

/**
 * @author yc
 */
public class FirstActivity extends AppCompatActivity {

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_android);
        TextView tv = findViewById(R.id.tv);

        String params = getIntent().getStringExtra("yc");
        if (!TextUtils.isEmpty(params)) {
            Toast.makeText(this, "逗比" + params, Toast.LENGTH_SHORT).show();
            tv.setText("flutter 传参到Android普通字符串:" + params);
        }
    }

}