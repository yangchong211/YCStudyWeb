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



/*
 * <pre>
 *     @author yangchong
 *     blog  : https://github.com/yangchong211
 *     time  : 2019/5/27
 *     desc  : log日志工具类
 *     revise:
 * </pre>
 */
class LogUtils{

  ///打印日志
  static log(String str){
    if(str.isNotEmpty){
      print("yc---------" + str);
    }
  }

  ///打印日志
  static showPrint(String msg){
    if(msg!=null){
      print("yc---------" + msg);
    }
  }

}