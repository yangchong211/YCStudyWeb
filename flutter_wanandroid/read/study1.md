#### 目录介绍
- 01.Flutter中Image加载图片和缓存
- 02.Scaffold和MaterialApp区别
- 03.StatefulWidget和StatelessWidget
- 04.State作用是啥，做什么用的
- 08.从启动到显示流程是怎样的
- 09.Element与BuildContext关系
- 10.Flutter UI框架能不做成响应式吗
- 11.UI系统概念性知识点思考
- 12.context是什么，一个widget有几个
- 13.常见组件有哪些，如何进行分类
- 14.GlobalKey是什么，作用是啥
- 15.如何做全局状态管理，具体该怎么做




### 01.Flutter中Image加载图片和缓存
- 加载网络
    - 代码：new Image.network(imgUrl, fit: BoxFit.cover, width: 1000.0,)
- 加载本地
    - 代码：new ExactAssetImage("lib/image/ic_person.jpg")
- 重点关注类
    - ImageProvider，抽象类abstract class ImageProvider<T>，支持泛型
    - resolve方法
    - load方法，子类实现，主要作用是加载图片


### 02.Scaffold和MaterialApp区别
- MaterialApp是带有主题theme的页面
- Scaffold是没有主题样式的页面



### 03.StatefulWidget和StatelessWidget
- 两者区别
    - StatefulWidget 有状态widget
    - StatelessWidget 无状态widget，怎么理解呢？
- 使用场景：
    - 比如list条目页面，使用StatefulWidget，项目中HomePage视图
    - 比如list条目页面的分割线，就可以使用StatelessWidget，项目中EndLine，NoData视图
- Widget是什么
    - 描述一个UI的配置元素，什么意思呢？就是可以把它简单理解为一个组件或者控件……
- 两者都是继承Widget
    - 是抽象类




### 04.State作用是啥，做什么用的
- state是什么
    - 一个statefulWidget有一个state
- setState作用是啥
    - 手动调用其setState()会重新刷新视图，也就是重新build构建widget树，作用是更新UI
- State有那些属性
    - widget和context
- state生命周期
    - 有多个生命周期方法，相当于activity中的生命周期，这个很重要
- 如何在Widget树中获取State对象
    - 可以通过context获取，有个ancestorStateOfType方法



### 08.从启动到显示流程是怎样的
- 大概流程如下所示
    - main函数入口 ——> runApp方法 ——>  添加宿主window窗口  ——>  渲染  ——>  绘制



### 09.Element与BuildContext关系
- Element是啥
    - widget树，
- BuildContext是啥
    - 类似上下文，类似Android中的context上下文，比如跳转页面，或者资源，调用系统属性等都需要它
    - 是一个抽象类，创建widget的时候，需要这个东西？思考下，为啥……
- 如果没有widget层，单靠`Element`层是否可以搭建起一个可用的UI框架？如果可以应该是什么样子？
    - 可以，



### 10.Flutter UI框架能不做成响应式吗
- 答案当然也是肯定的，Flutter engine提供的dart API是原始且独立的，
这个与操作系统提供的API类似，上层UI框架设计成什么样完全取决于设计者，
完全可以将UI框架设计成Android风格或iOS风格，但这些事Google不会再去做，
我们也没必要再去搞这一套，这是因为响应式的思想本身是很棒的，之所以提出这个问题，
是因为笔者认为做与不做是一回事，但知道能不能做是另一回事，这能反映出我们对知识的理解程度。



### 12.context是什么，一个widget有几个
- context是什么
    - 是BuildContext类的一个实例
- 一个widget有几个context
    - 每一个widget都会对应一个context对象
    - 每个widget是widget树上一个节点，
- context的作用是干啥的


### 13.常见组件有哪些，如何进行分类
- 基础组件
    - 比如文本，图片，row，Container等控件
- Material组件
    - 比如appBar，Scaffold，MaterialApp等等
- Cupertino组件



### 14.GlobalKey是什么，作用是啥
- 





### 15.如何做全局状态管理，具体该怎么做
- 看一个场景
    - 用户登录了，并且登录成功，这个时候回到首页则需要刷新数据
- 事件通知
    - 可不可以使用类似事件通知来做呢，有点向开发中的eventBus
















