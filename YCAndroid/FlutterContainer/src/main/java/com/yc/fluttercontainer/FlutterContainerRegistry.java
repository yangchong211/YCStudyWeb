package com.yc.fluttercontainer;

import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Map;

/**
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/11/9
 *     desc  : 容器注册类
 *     revise:
 * </pre>
 */
public class FlutterContainerRegistry {

    private static final Map<String, WeakReference<FlutterEngineActivity>>
            sPageRegistry = new HashMap<>();

    public static void registerContainer(String pageId, FlutterEngineActivity container) {
        sPageRegistry.put(pageId, new WeakReference<>(container));
    }

    public static Map<String, WeakReference<FlutterEngineActivity>> getPageRegistry() {
        return sPageRegistry;
    }

    public static FlutterEngineActivity getContainer(String pageId) {
        if (!sPageRegistry.containsKey(pageId)) {
            return null;
        }
        WeakReference<FlutterEngineActivity> weakReference = sPageRegistry.get(pageId);
        if (weakReference==null){
            return null;
        }
        return weakReference.get();
    }

    public static FlutterEngineActivity popContainer(String pageId) {
        if (!sPageRegistry.containsKey(pageId)) {
            return null;
        }
        WeakReference<FlutterEngineActivity> weakReference = sPageRegistry.get(pageId);
        if (weakReference==null){
            return null;
        }
        FlutterEngineActivity ret = weakReference.get();
        sPageRegistry.remove(pageId);
        return ret;
    }

    public static boolean removeContainer(String pageId) {
        if (!sPageRegistry.containsKey(pageId)) {
            return false;
        }
        sPageRegistry.remove(pageId);
        return true;
    }
}
