# YCHybridFlutter
## Android和flutter混合开发案例

#### 目录介绍
- 01.创建项目
- 02.运行项目
- 03.Android跳转flutter
- 04.flutter跳转Android
- 05.泛型和回调处理
- 06.返回键问题
- 07.通信Channel介绍
- 08.混合开发优劣
- 09.遇到的问题汇总



### 00.前言介绍
- 项目截图展示
    - ![image](https://github.com/yangchong211/YCHybridFlutter/blob/master/YCAndroid/image/1.jpg)
    - ![image](https://github.com/yangchong211/YCHybridFlutter/blob/master/YCAndroid/image/2.jpg)
- 关于flutter项目推荐
    - flutter学习案例，接口使用玩Android开放的api，作为入门训练代码案例，耗时大概4个月【业余时间】，已经完成了基本的功能。努力打造一个体验好的flutter版本的玩android客户端！
    - 项目地址：https://github.com/yangchong211/ycflutter



### 01.创建项目
#### 1.1 错误创建方法
- 注意不是Android的根目录下，注意不是Android的根目录下，注意不是Android的根目录下。这里地方以前卡了我好长时间，切记！



#### 1.2 正确姿势创建
- 应该是下图的目录结构。flutter_hybrid目录即为我们要创建的flutter项目，YCAndroid是我们现有的Android项目，叫什么都好。可以像我这样，建立一个空文件夹，把现有Android项目拖进去，这样方便查找和管理，不然flutter_hybrid会和YCAndroid平级，在一大堆项目中找这两个也怪麻烦的。
    - ![image](https://upload-images.jianshu.io/upload_images/4432347-17e1814402c872a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 通过命令行创建
    - flutter create -t module flutter_lib


#### 1.3 本地依赖
- 在Android中本地依赖方式为：
    - 对于Android的本地依赖，主要是由include_flutter.groovy和flutter.gradle这两个脚本负责Flutter的本地依赖和产物构建
        - 在settings.gradle中注入include_flutter.groovy脚本
        - 在需要依赖的module中build.gradle添加project(':flutter')依赖
    - 代码如下所示
        ```
        include ':app'
        //网上好多博客是这样写的，注意有可能会出现坑，在1.3中会说到
        setBinding(new Binding([gradle: this]))                                 // new
        evaluate(new File(                                                      // new
                settingsDir.parentFile,                                               // new
                'flutter_lib/.android/include_flutter.groovy'                          // new
        ))                                                                      // new
        ```
- 然后再Android原生项目中的app中的build.gradle文件中添加依赖库
    - implementation project(':flutter')
- 然后就可以看到项目结构如下所示
    - ![image](https://upload-images.jianshu.io/upload_images/4432347-19d141353143df95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



#### 1.4 注意1.3可能遇到问题
- Android 开发者很容易误以为集成 Flutter Module 就像以前 Android 工程集成 Module一样，所以按照这种思路，执行依赖 Sync 的时候就会出现 include_flutter.groovy 相关文件丢失问题。
- 解决这种问题两种思路，第一种情况，本质就是你的配置错了，官方 wiki 让你将 flutter_module 放在 Android 工程的同级目录下，而不是 Android 工程目录下。想一下这种问题为什么会出现，主要就是一些不好的文章翻译不正确导致的问题。
- 注意如果你的项目中buildTypes有release，preview，debug……等等，需要在添加下面代码
    ```
    buildTypes {
        release {

        }
        preview {
            //关键代码，release， debug为library中已有buildType
            matchingFallbacks = ['release', 'debug']
        }
        debug {

        }
    }
    ```


### 02.运行项目
- 下载该demo后，可以直接打开YCAndroid项目编辑原生部分代码，可以打开flutter_lib项目编辑flutter部分代码


### 03.Android跳转flutter
#### 3.1 原生跳转flutter页面
- Android原生跳转代码
    ```
    flutterViewAbout = Flutter.createView(
            MainActivity.this,
            getLifecycle(),
            "yc"
    );
    FrameLayout.LayoutParams layout = new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,ViewGroup.LayoutParams.MATCH_PARENT);
    layout.leftMargin = 0;
    layout.topMargin = 0;
    addContentView(flutterViewAbout, layout);
    ```
- flutter接收并处理代码
    ```
    class MyApp extends StatelessWidget {
      // This widget is the root of your application.
      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          title: 'flutter和Android混编项目',
          theme: ThemeData(
            primarySwatch: Colors.blue,
          ),
          home:  _widgetForRoute(window.defaultRouteName),
        );
      }
    }


    Widget _widgetForRoute(String route) {
      switch (route) {
        case 'yc_route':
          return  MyHomePage(title: '匹配到了，这个是flutter页面');
        case 'yc':
          //接收到了匹配的规则，跳转到flutter指定页面
          return AboutMePage();
        default:
          return  MyHomePage(title: '没有匹配到，查看route是否一致');
      }
    }
    ```

#### 3.2 从Android这边传递数据到flutter
- Android原生传递参数代码
    ```
    new EventChannel(flutterView, ANDROID_TO_FLUTTER_CHANNEL)
            .setStreamHandler(new EventChannel.StreamHandler() {
                @Override
                public void onListen(Object o, EventChannel.EventSink eventSink) {
                    String android = "逗比，来自android原生的参数";
                    eventSink.success(android);
                }

                @Override
                public void onCancel(Object o) {

                }
            });
    ```
- flutter接收参数的代码
    ```
      var _nativeParams;

      @override
      void initState() {
        super.initState();
        // Flutter接收原生发送的参数
        // 开启监听
        _startFromAndroidPlugin();
      }

      @override
      void dispose() {
        super.dispose();
        // Flutter接收原生发送的参数
        // 取消监听
        if(_fromAndroidSub != null){
          _fromAndroidSub.cancel();
        }
      }

      // Flutter接收原生发送的参数开启监听
      // 从Android原生项目接收传递的参数
      void _startFromAndroidPlugin(){
        if(_fromAndroidSub == null){
          _fromAndroidSub =  fromAndroidPlugin.receiveBroadcastStream()
              .listen(_onFromAndroidEvent,onError: _onFromAndroidError);
        }
      }


      void _onFromAndroidEvent(Object event) {
        setState(() {
          _nativeParams = event;
        });
      }

      //接收失败
      void _onFromAndroidError(Object error) {
        setState(() {
          _nativeParams = "error";
          print(error);
        });
      }
    ```


### 04.flutter跳转Android
#### 4.1 跳转到原生界面，不带参数
- flutter跳转代码
    ```
    static const toAndroidPlugin = const MethodChannel('com.ycbjie.toandroid/plugin');

    Future<Null> _jumpToNative() async {
        String result = await toAndroidPlugin.invokeMethod('doubi');
        print(result);
    }
    ```
- Android接收并处理代码
    ```
    new MethodChannel(flutterView, FLUTTER_TO_ANDROID_CHANNEL)
            .setMethodCallHandler(new MethodChannel.MethodCallHandler() {
        @Override
        public void onMethodCall(MethodCall methodCall, MethodChannel.Result result) {
            if ("doubi".equals(methodCall.method)) {
                //接收来自flutter的指令
                //跳转到指定Activity
                Intent intent = new Intent(MainActivity.this, DouBiActivity.class);
                startActivity(intent);
                //返回给flutter的参数
                result.success("success");
            } else if ("android".equals(methodCall.method)) {
                //接收来自flutter的指令
                //解析参数
                Object text = methodCall.argument("flutter");
                if (text instanceof String){
                    //带参数跳转到指定Activity
                    Intent intent = new Intent(MainActivity.this, AndroidFirstActivity.class);
                    intent.putExtra("yc", (String) text);
                    startActivity(intent);
                }else if (text instanceof List){
                    Intent intent = new Intent(MainActivity.this, AndroidSecondActivity.class);
                    intent.putStringArrayListExtra("yc", (ArrayList<String>) text);
                    startActivity(intent);
                }
                //返回给flutter的参数
                result.success("success");
            } else {
                result.notImplemented();
            }
        }
    });
    ```



#### 4.2 跳转到原生界面，带参数
- flutter跳转代码
    ```
    static const toAndroidPlugin = const MethodChannel('com.ycbjie.toandroid/plugin');

    Future<Null> _jumpToNativeWithParams1() async {
        Map<String, String> map = { "flutter": "这是一条来自flutter的参数" };
        String result = await toAndroidPlugin.invokeMethod('android', map);
        print(result);
    }
    ```
- Android接收并处理代码
    - 同4.1处理逻辑



### 08.混合开发优劣
#### 8.1 混合开发必备条件
- 因工程结构的差异，如果基于现有的Native工程想使用Flutter来开发其中一个功能模块，一般来说混合开发至少得保证如下特点：
    - 对Native工程无侵入
    - 对Native工程零耦合，可以先写一些简单的页面练练手
    - 不影响Native工程的开发流程与打包流程
    - 易本地调试


#### 8.2 可能造成的影响
- 官方提供了一种Flutter本地依赖到现有Native的方案，不过这种方案不加改变优化而直接依赖的话，则会直接影响了其它无Flutter环境的开发同事的开发，影响开发流程，且打包平台也不支持这种依赖方式的打包


#### 8.3 集成方案对比【图片摘自网络】
- ![image](https://upload-images.jianshu.io/upload_images/4432347-d537ae7130636c7d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 09.遇到的问题汇总
#### 9.1 打开项目，项目的settings.gradle 文件报红
-
    - ![image](https://upload-images.jianshu.io/upload_images/4432347-c14425a90970007d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


















