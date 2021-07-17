# flutter学习案例
#### 目录介绍
- 00.项目下载与查看
- 01.项目介绍
- 02.项目优势
- 03.部分功能介绍
- 04.部分截图展示
- 05.版本更新
- 06.flutter系列博客
- 07.感谢
- 08.如何辨别flutter与原生
- 09.关于更多



### 00.项目下载与查看
#### 0.1 下载apk
- 已经打包好的apk存放到项目根目录apk文件夹下，可以直接下载安装。建议先安装看看效果！
- [apk下载地址](https://github.com/yangchong211/ycflutter/tree/master/apk)


#### 0.2 项目
- 关于项目的工程大概介绍
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/0.png)


#### 0.3 案例演示
- 努力打造一款flutter极致体验的WanAndroid客户端，暂时我也是学习阶段，后期慢慢更新！
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/flutter.gif)

#### 0.4 项目测试账号和密码
- 接口是接用wanAndroid开放的接口，感谢鸿洋大神提供免费的开源接口。只是用于训练flutter案例，请勿商用。如需商用，请直接联系鸿洋大神623565791！
- 测试账号：用户名:yangchong     密码：123456


### 01.项目介绍
#### 1.1 运行项目
- 首先配置好Flutter开发环境，可参阅flutter中文社区的配置流程。
- 下载代码，执行Packages get安装第三方包，直接执行main.dart代码running即可
- 经过测试，发现android studio、XCode、IDEA都是可以的


### 02.项目优势
- flutter目前开源的项目相对不多，虽然已经拥有GSYGithubAppFlutter开源项目，还别说入门还是稍微有点难度。该项目作为入门级学习还是可以的，等到比较熟悉flutter，看看那个项目还是十分不错的。
- 项目结构清晰，代码注释详细，可以一边看博客学习dart语言，一边训练写代码，一边总结记录问题。


### 03.部分功能介绍
#### 3.1 基础功能
- 首页轮播图+list：推荐最新的博客
- 知识体系：对安卓知识体系做整理
- 登录注册：登录、注册、Cookie持久化
- 我的收藏页面：依靠Cookie持久化，实现对文章的收藏和展示
- 项目分类：在WanAndroid上发布的项目
- 网址导航：展示常用的开发网站
- 搜索功能：输入搜索、搜索推荐、历史搜索等等
- 关于我们：鸿洋wanAndroid介绍


#### 3.2 后期完善功能
- 轮播图后期需要自动轮播【暂时还不知道如何实现自动轮播】，文章可以分享功能
- 添加缓存功能，学习flutter中数据库该怎么用


### 04.部分截图展示
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/16.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/17.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/1.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/2.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/3.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/4.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/5.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/15.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/6.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/7.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/8.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/9.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/10.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/11.jpg)


### 05.版本更新
- v1.0.0 更新于2018年8月到12月18日
    - 断断续续利用每天闲暇时间边学习边写flutter代码，初步完善了玩Android基本的一些功能
- v1.1.0 更新于2019年5月27日
    - 添加了侧滑菜单，同时自定义侧滑菜单可以设置宽度，优化了首页的代码结构，添加了首页点击悬浮按钮回到顶部
    - 添加了上拉加载更多时候，显示加载loading，以及没有更多数据时，显示没有更多数据widget控件
    - 完善搜索页面标签流式布局的功能，同时网络请求过程中显示加载loading，结束后展示布局
- v1.1.1 更新于2019年6月2日
    - 修改



### 06.flutter系列博客
- 待更新


### 07.感谢
#### 7.1 关于接口
- 接口用wanAndroid开放接口，在Android这个圈子，貌似我认识的程序员都知道张鸿洋大神。可以说该接口用于业余训练项目十分不错！
- 想要了解更多，可以查看鸿洋大神的wanAndroid网站：http://www.wanandroid.com/index


#### 7.2 参考案例和学习博客
- 国外大神分享的一些好的demo：https://github.com/iampawan/FlutterExampleApps
- 中国flutter中文网站：https://flutterchina.club/
- 网络开源好项目：https://github.com/AweiLoveAndroid/Flutter-learning
- flutter官方案例：https://github.com/flutter/flutter
- 鸿洋玩Android：http://www.wanandroid.com/index



### 08.如何辨别flutter与原生
- 简单辨认一个页面是Flutter还是原生
    - 打开手机的“开发者模式”
    - 打开“显示布局边界”
    - 切回APP，然后看看app中的UI效果
- ![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/12.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/13.jpg)
![image](https://github.com/yangchong211/ycflutter/blob/master/iamge/14.jpg)



### 其他操作
- 输入flutter doctor -v  该命令检查您的环境并在终端窗口中显示报告



### 报错提示
- 报错如下所示
    - 重点错误日志：Some Android licenses not accepted.  To resolve this, run: flutter doctor --android-licenses
    - 解决办法：flutter doctor --android-licenses   多输几次 y即可



### 09.关于更多
#### 关于博客汇总链接
- 1.[技术博客汇总](https://www.jianshu.com/p/614cb839182c)
- 2.[开源项目汇总](https://blog.csdn.net/m0_37700275/article/details/80863574)
- 3.[生活博客汇总](https://blog.csdn.net/m0_37700275/article/details/79832978)
- 4.[喜马拉雅音频汇总](https://www.jianshu.com/p/f665de16d1eb)
- 5.[其他汇总](https://www.jianshu.com/p/53017c3fc75d)


#### 其他推荐
- 博客笔记大汇总【15年10月到至今】，包括Java基础及深入知识点，Android技术博客，Python学习笔记等等，还包括平时开发中遇到的bug汇总，当然也在工作之余收集了大量的面试题，长期更新维护并且修正，持续完善……开源的文件是markdown格式的！同时也开源了生活博客，从12年起，积累共计47篇[近20万字]，转载请注明出处，谢谢！
- 链接地址：https://github.com/yangchong211/YCBlogs
- 如果觉得好，可以star一下，谢谢！当然也欢迎提出建议，万事起于忽微，量变引起质变！


#### 关于LICENSE
```
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
```
















