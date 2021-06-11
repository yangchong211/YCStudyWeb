package com.ycbjie.ycandroid.router;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ycbjie.ycandroid.R;
import com.ycbjie.ycandroid.channel.BasicChannelActivity;
import com.ycbjie.ycandroid.channel.EventChannelActivity;
import com.ycbjie.ycandroid.channel.MethodChannelActivity;
import com.ycbjie.ycandroid.container.FlutterFragmentCachedActivity;

/**
 * @author yc
 */
public class RouterActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView tv1;
    private TextView tv2;
    private TextView tv3;
    private TextView tv4;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_channel);
        tv1 = findViewById(R.id.tv_1);
        tv2 = findViewById(R.id.tv_2);
        tv3 = findViewById(R.id.tv_3);
        tv4 = findViewById(R.id.tv_4);
        tv1.setOnClickListener(this);
        tv2.setOnClickListener(this);
        tv3.setOnClickListener(this);
        tv4.setOnClickListener(this);
    }


    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.tv_1:
                startActivity(new Intent(this, MethodChannelActivity.class));
                break;
            case R.id.tv_2:
                startActivity(new Intent(this, EventChannelActivity.class));
                break;
            case R.id.tv_3:
                startActivity(new Intent(this, BasicChannelActivity.class));
                break;
            case R.id.tv_4:
                startActivity(new Intent(this, FlutterFragmentCachedActivity.class));
                break;
            default:
                break;
        }
    }

}
