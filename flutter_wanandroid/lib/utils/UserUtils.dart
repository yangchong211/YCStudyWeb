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
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:async';


/*
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/11/15
 *     desc  : 用户处理相关工具类
 *     revise:
 * </pre>
 */
class UserUtils {

  static final String login = "isLogin";
  static final String username = "userName";

  // 保存用户登录信息，data中包含了userName
  static Future saveLoginInfo(String userName) async {
    print('isLogin');
    SharedPreferences sp = await SharedPreferences.getInstance();
    await sp.setString(username, userName);
    await sp.setBool(login, true);
  }

  //清除用户登陆的信息
  static Future clearLoginInfo() async {
    SharedPreferences sp = await SharedPreferences.getInstance();
    print('clean');
    return sp.clear();
  }

  //获取用户名
  static Future<String> getUserName() async {
    SharedPreferences sp = await SharedPreferences.getInstance();
    return sp.getString(username);
  }

  //判断是否登陆
  static Future<bool> isLogin() async {
    SharedPreferences sp = await SharedPreferences.getInstance();
    bool b = sp.getBool(login);
    return true == b;
  }


  static Future _get(String key) async {
    SharedPreferences sp = await SharedPreferences.getInstance();
    print(key);
    var value = sp.get(key);
    print(value);
    return value;
  }

  static Future _set(String key, Object value) async {
    SharedPreferences sp = await SharedPreferences.getInstance();
    if (value is int) {
      sp.setInt(key, value);
    } else if (value is String) {
      sp.setString(key, value);
    } else if (value is bool) {
      sp.setBool(key, value);
    } else if (value is double) {
      sp.setDouble(key, value);
    } else if (value is List<String>) {
      sp.setStringList(key, value);
    }
  }

}
