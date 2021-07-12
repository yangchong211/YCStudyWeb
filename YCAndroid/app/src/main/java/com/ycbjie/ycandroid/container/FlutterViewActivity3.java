package com.ycbjie.ycandroid.container;

import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;

import com.yc.fluttercontainer.FlutterContainerRegistry;
import com.yc.fluttercontainer.FlutterEngineActivity;
import com.ycbjie.ycandroid.R;

/**
 * @author yc
 */
public class FlutterViewActivity3 extends FlutterEngineActivity {

    @Override
    public View onInflateFlutterLayout(FrameLayout container) {
        LayoutInflater inflater = LayoutInflater.from(container.getContext());
        View view = inflater.inflate(R.layout.activity_flutter_view, null);
        FrameLayout rl_flutter = view.findViewById(R.id.rl_flutter);
        View flutterView = createFlutterView(container.getContext());
        rl_flutter.addView(flutterView);
        return view;
    }

    private void test(){
        FlutterEngineActivity container = FlutterContainerRegistry.getContainer("hahah");
        if (container != null) {
            container.finish();
        }
    }
}
