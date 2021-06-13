package com.ycbjie.ycandroid.channel;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ycbjie.ycandroid.R;

import java.util.ArrayList;

import static com.ycbjie.ycandroid.channel.MethodChannelActivity.RESULT_OK2;

/**
 * @author yc
 */
public class MethodResultActivity extends AppCompatActivity {

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_android);
        TextView tv = findViewById(R.id.tv);
        tv.setText("flutter页面打开NA页面，测试Android原生页面返回Flutter页面");
        tv.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent();
                intent.putExtra("message", "我从原生页面回来了");
                setResult(RESULT_OK2, intent);
                finish();
            }
        });
    }

}
