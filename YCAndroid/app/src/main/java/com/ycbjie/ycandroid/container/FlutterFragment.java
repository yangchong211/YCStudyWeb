package com.ycbjie.ycandroid.container;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import com.ycbjie.ycandroid.R;

public class FlutterFragment extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_view_1, container, false);
        return view;
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        initView(view);
    }

    private void initView(View view) {
        TextView tv_1_1 = view.findViewById(R.id.tv_1_1);
        TextView tv_1_2 = view.findViewById(R.id.tv_1_2);
        tv_1_2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                addFragment();
            }
        });
    }


    private void addFragment() {
        FlutterFragment2 fragment = new FlutterFragment2();
        FragmentManager fragmentManager = getChildFragmentManager();
        FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
        fragmentTransaction.add(R.id.rl_fragment,fragment,"fragment");
        fragmentTransaction.commit();
    }

}
