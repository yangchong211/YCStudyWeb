package com.yc.fluttercontainer;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/11/9
 *     desc  : 常量类
 *     revise:
 * </pre>
 */
public class FlutterCommons {
    //过滤标签
    public static final String FLUTTER = "flutter";
    //路由的地址
    public static final String BUNDLE_KEY_PATH = "path";
    public static final String BUNDLE_KEY_PARAMS = "params";

    public static final int SURFACE_VIEW = 1;
    public static final int TEXTURE_VIEW = 2;

    @IntDef({SURFACE_VIEW, TEXTURE_VIEW})
    @Retention(RetentionPolicy.SOURCE)
    public @interface SurfaceType {

    }
}
