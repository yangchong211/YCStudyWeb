/*
Copyright 2017 yangchong211（github.com/yangchong211）

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



import 'dart:convert';
import 'package:ycflutter/android/api/AndroidApi.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:ycflutter/android/api/HttpRequest.dart';
import 'package:ycflutter/utils/ToastUtils.dart';

/*
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/9/12
 *     desc  : 网络请求工具类
 *     revise:
 * </pre>
 */
class HttpUtils{

  static const String GET = "get";
  static const String POST = "post";

  //get请求
  static void get(String url, Function callback, {Map<String, String> params,
        Map<String, String> headers, Function errorCallback}) async {
    if (!url.startsWith("http")) {
      url = AndroidApi.BaseUrl + url;
    }

    //做非空判断
    if (params != null && params.isNotEmpty) {
      StringBuffer sb = new StringBuffer("?");
      params.forEach((key, value) {
        sb.write("$key" + "=" + "$value" + "&");
      });
      String paramStr = sb.toString();
      paramStr = paramStr.substring(0, paramStr.length - 1);
      url += paramStr;
      ToastUtils.showPrint(url);
    }
    await HttpRequest.startRequest(url, callback, method: GET, headers: headers,
        errorCallback: errorCallback);
  }


  //post请求
  static void post(String url, Function callback, {Map<String, String> params,
    Map<String, String> headers, Function errorCallback}) async {
    if (!url.startsWith("http")) {
      url = AndroidApi.BaseUrl + url;
    }
    await HttpRequest.startRequest(url, callback, method: POST,
        headers: headers, params: params, errorCallback: errorCallback);
  }



}



