package com.ycbjie.ycandroid.router;

import android.os.Bundle;
import android.text.TextUtils;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ycbjie.ycandroid.R;

/**
 * 我的页面
 * @author yc
 */
public class RouterToNaMeActivity extends AppCompatActivity {

    private TextView tvTitle;
    private TextView tvContent;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_router_to_native);
        tvTitle = findViewById(R.id.tv_title);
        tvContent = findViewById(R.id.tv_content);
        tvTitle.setText("这个是我的页面");

        String params = getIntent().getStringExtra("yc");
        if (!TextUtils.isEmpty(params)) {
            Toast.makeText(this, "逗比" + params, Toast.LENGTH_SHORT).show();
            tvContent.setText("flutter 传参到Android普通字符串:" + params);
        }
    }
}
