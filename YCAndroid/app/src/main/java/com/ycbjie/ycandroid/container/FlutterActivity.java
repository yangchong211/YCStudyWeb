package com.ycbjie.ycandroid.container;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.ycbjie.ycandroid.HomeActivity;
import com.ycbjie.ycandroid.R;

/**
 * @author yc
 */
public class FlutterActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView tv1;
    private TextView tv2;
    private TextView tv3;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flutter);
        tv1 = findViewById(R.id.tv_1);
        tv2 = findViewById(R.id.tv_2);
        tv3 = findViewById(R.id.tv_3);
        tv1.setOnClickListener(this);
        tv2.setOnClickListener(this);
        tv3.setOnClickListener(this);
    }


    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.tv_1:
                startActivity(new Intent(FlutterActivity.this, FlutterViewActivity.class));
                break;
            case R.id.tv_2:
                startActivity(new Intent(FlutterActivity.this, FlutterFragmentActivity.class));
                break;
            case R.id.tv_3:

                break;
            default:
                break;
        }
    }
}
