package com.ycbjie.ycandroid;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.widget.TextView;
import android.widget.Toast;

/**
 * @author yc
 */
public class AndroidFirstActivity extends AppCompatActivity {

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
