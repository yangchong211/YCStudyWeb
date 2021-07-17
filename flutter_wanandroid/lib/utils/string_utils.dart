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
import 'package:flutter/widgets.dart';
import 'package:ycflutter/res/YcColors.dart';


/*
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2018/11/15
 *     desc  : String工具类
 *     revise:
 * </pre>
 */
class StringUtils {
  // 保存用户登录信息，data中包含了token等信息
  static TextSpan getTextSpan(String text, String key) {
    if (text == null || key == null) {
      return null;
    }
    String splitString1 = "<em class='highlight'>";
    String splitString2 = "</em>";
    String textOrigin = text.replaceAll(splitString1, '').replaceAll(splitString2, '');
    TextSpan textSpan = new TextSpan(text: key, style: new TextStyle(color: YcColors.colorPrimary));
    List<String> split = textOrigin.split(key);
    List<TextSpan> list = new List<TextSpan>();
    for (int i = 0; i < split.length; i++) {
      list.add(new TextSpan(text: split[i]));
      list.add(textSpan);
    }
    list.removeAt(list.length - 1);
    return new TextSpan(children: list);
  }
}
