#### 目录介绍
- 01.基础组件都有那些
- 02.布局类组件都有那些
- 03.容器类组件都有那些
- 04.滚动类组件都有那些
- 05.功能型组件都有那些




### 01.基础组件都有那些，列举一些常见的
- 文本控件
    - Text
        - 文本控件
        - TextStyle   文本样式，比如字体大小，颜色，粗细等属性
        - TextSpan    相当于Android中TextView的span属性，可以给文本添加下划线，颜色等多中样式
- 按钮
    - RaisedButton          有阴影那种
    - FlatButton            扁平的
    - IconButton            可以点击的icon，这个用的很多
- 图片
    - Image                 图片，很常见。可以加载资源，本地，以及网络图片
    - ICON                  图标
- 选择控件
    - Checkbox              单选控件
    - Switch                单选开关
- 输入控件
    - TextField             用于文本输入，类似Android中的EditText
    - Form                  表单，对输入数据可以进行校验
- 进度控件
    - LinearProgressIndicator           横向的进度条
    - CircularProgressIndicator         圆形进度条
- 分割线
    - Divider               分割线
- 其他控件
    - ClipRRect             圆角矩形裁切
    - BoxDecoration         多种绘制盒子，有边框、主体、阴影组成。可能是圆形或者长方形



### 02.布局类组件都有那些，列举一些常见的
- 线性布局
    - Row           有主轴和纵轴之分，如果布局是沿水平方向，那么主轴就是指水平方向，而纵轴即垂直方向；
                    如果布局沿垂直方向，那么主轴就是指垂直方向，而纵轴就是水平方向   
                    对齐方式：主轴对齐和纵轴对齐       
    - Column        在垂直方向排列其子组件，跟Row差不多
- 弹性布局
    - Flex
    - Expanded      可以按照比例扩展
- 流式布局
    - Wrap          超出就会折行
    - Flow          比较复杂，先考虑Wrap能否实现，不能实现在用flow
- 层叠布局，类似Android中桢布局
    - Stack         允许子组件堆叠
    - Positioned        





### 03.容器类组件都有那些，列举一些常见的
- Padding填充
    - EdgeInsets
- Container
    - 多功能组件，用的很多，可以实现变换，装饰等
    - 注意padding和margin是不同的，一个是容器内补白，一个是容器外补白
- Scaffold
    - 用的很多，路由页的骨架，比如一个页面包含appbar，tab，drawer抽屉等，这个就可以实现
- Clip
    - 裁剪的容器


### 04.滚动类组件都有那些，列举一些常见的
- gridView
    - 九宫格控件
    - 还有一个交错的布局，类似Android中staggered，瀑布流效果那种
- ListView
    - 这个很熟悉了，用来写列表的，最常用的列表控件
- Scrollbar
    - 滚动的
- SingleChildScrollView
    - 这个类似Android中的scrollView，只能有一个子容器
- ScrollController
    - 滚动监听的，很重要，也经常用到



### 05.功能型组件都有那些，列举一些常见的
- WillPopScope
    - 处理返回键逻辑的
- InheritedWidget
    - 共享数据的
- Provider
    - 跨组件状态共享
- Theme
    - 主题
- FutureBuilder
    - 异步更新UI时操作使用的
- AlertDialog
    - 对话框，相当于Android中Dialog
- SimpleDialog
    - 列表对话框























