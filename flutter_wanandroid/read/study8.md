#### 目录介绍
- 01.UI系统原理
- 02.Element与BuildContext
- 03.RenderObject
- 04.Flutter运行机制
- 05.图片加载原理



### 01.UI系统原理
- 硬件绘图基本原理
    - 显示器（屏幕）是由一个个物理显示单元组成，每一个单元我们可以称之为一个物理像素点，而每一个像素点可以发出多种颜色，显示器成相的原理就是在不同的物理像素点上显示不同的颜色，最终构成完整的图像。
    - 计算机系统，cpu，gpu协同，cpu主要计算显示内容交给gpu，gpu渲染后放入帧缓存区，最后同步显示到显示器上
- 如何理解跨平台操作
    - 目标实现这么UI系统：一种语言开发，针对不同系统抽象对上接口一致，对下适配不同系统，打包编译不同层的中间层代码
- flutter的原理
    - dart语言，底层通过OpenGL绘制库实现一套代码跨多端。
    - dart调用系统api，所以性能接近原生。dart先调用openGL，然后openGL调用系统api，仍是原生渲染。
- webView渲染
    - 需要JavaScript运行环境和CSS渲染器，所以不会有性能损失。这么说，Android中webView就已经有了这些基础环境。



### 02.Element与BuildContext




### 03.RenderObject




### 04.Flutter运行机制




### 05.图片加载原理












