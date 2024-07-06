---
home: true
title: Home
heroImage: /images/hero.png
actions:
  - text: Themes
    link: ./themes/
    type: primary

  - text: Plugins
    link: ./plugins/
    type: primary

footer: MIT Licensed | Copyright © 2018-present VuePress Community
---



# 01.创建配置目录
官网的目录结构是在把所有的文件都存储在 docs 目录下

public：存储静态资源文件：网站图片，logo 等；
templates：存储 HTML 模板文件；
config.ts：是全局的配置文件，可以配置侧边栏，导航栏，网站介绍（head 标签和 meta 标签）；
dist：是项目打包后的文件；



# 02.打包和编译
打包，先切换到docs的根目录路径下面，然后在cmd命令行中输入：

pnpm docs:dev




# 09.优秀案例
- https://plume.pengzhanbo.cn/
- https://ecosystem.vuejs.press/zh/themes/default/
- https://github.com/mqyqingfeng/Blog/issues/279
- 团队技术文档构建利器vuepress上手实践
    - https://cloud.tencent.com/developer/article/1519825