package com.ycbjie.ycandroid.channel;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ycbjie.ycandroid.R;
import com.ycbjie.ycandroid.container.FlutterContainerActivity;
import com.ycbjie.ycandroid.container.FlutterFragmentActivity;
import com.ycbjie.ycandroid.container.FlutterFragmentCachedActivity;
import com.ycbjie.ycandroid.container.FlutterViewActivity;

import static com.ycbjie.ycandroid.channel.MethodChannelActivity.RESULT_OK1;
import static com.ycbjie.ycandroid.channel.MethodChannelActivity.RESULT_OK2;

/**
 * @author yc
 */
public class ChannelActivity extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_channel);
        TextView tv_1_1 = findViewById(R.id.tv_1_1);
        TextView tv_1_2 = findViewById(R.id.tv_1_2);
        TextView tv_2_1 = findViewById(R.id.tv_2_1);
        TextView tv_2_2 = findViewById(R.id.tv_2_2);
        TextView tv_3_1 = findViewById(R.id.tv_3_1);
        TextView tv_3_2 = findViewById(R.id.tv_3_2);
        tv_1_1.setOnClickListener(this);
        tv_1_2.setOnClickListener(this);
        tv_2_1.setOnClickListener(this);
        tv_2_2.setOnClickListener(this);
        tv_3_1.setOnClickListener(this);
        tv_3_2.setOnClickListener(this);
    }


    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.tv_1_1:
                //startActivity(new Intent(this, MethodChannelActivity.class));
                startActivityForResult(new Intent(this, MethodChannelActivity.class),1);
                break;
            case R.id.tv_1_2:
                startActivity(new Intent(this, MethodChannelActivity2.class));
                break;
            case R.id.tv_2_1:
                startActivity(new Intent(this, EventChannelActivity.class));
                break;
            case R.id.tv_2_2:
                startActivity(new Intent(this, EventChannelActivity2.class));
                break;
            case R.id.tv_3_1:
                startActivity(new Intent(this, BasicChannelActivity.class));
                break;
            case R.id.tv_3_2:
                startActivity(new Intent(this, BasicChannelActivity2.class));
                break;
            default:
                break;
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK1 && data!=null){
            String message = data.getStringExtra("message");
            Toast.makeText(ChannelActivity.this,message+"",Toast.LENGTH_SHORT).show();
        }
    }
}
