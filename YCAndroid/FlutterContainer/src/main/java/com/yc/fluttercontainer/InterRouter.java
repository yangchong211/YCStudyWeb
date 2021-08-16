package com.yc.fluttercontainer;

import java.util.HashMap;
import java.util.Map;

public interface InterRouter {

    void openFlutterContainer(String url, HashMap<String,Object> params, String pageId);

    void closeFlutterContainer(String pageId, Map<String, Object> result);
}
