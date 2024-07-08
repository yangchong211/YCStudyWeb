<template><div><h1 id="giscus" tabindex="-1"><a class="header-anchor" href="#giscus"><span>Giscus</span></a></h1>
<p>Giscus 是一个基于 GitHub Discussion 的评论系统，启用简便。</p>
<!-- more -->
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2>
<ol>
<li>
<p>你需要创建一个公开仓库，并开启评论区，以作为评论存放的地点</p>
</li>
<li>
<p>你需要安装 <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">Giscus App</a>，使其有权限访问对应仓库。</p>
</li>
<li>
<p>在完成以上步骤后，请前往 <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 页面</a> 获得你的设置。</p>
<p>你只需要填写仓库和 Discussion 分类，之后滚动到页面下部的 “启用 giscus” 部分，获取 <code v-pre>data-repo</code>, <code v-pre>data-repo-id</code>, <code v-pre>data-category</code> 和 <code v-pre>data-category-id</code> 这四个属性。</p>
</li>
</ol>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>请配置 <code v-pre>provider: &quot;Giscus&quot;</code> 并将 <code v-pre>data-repo</code>, <code v-pre>data-repo-id</code>, <code v-pre>data-category</code> 和 <code v-pre>data-category-id</code> 作为插件选项传入 <code v-pre>repo</code>, <code v-pre>repoId</code>, <code v-pre>category</code> <code v-pre>categoryId</code>。</p>
<p>其他的配置项详见 <RouteLink to="/zh/plugins/blog/comment/giscus/config.html">Giscus 配置</RouteLink>。</p>
<h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题"><span>主题</span></a></h2>
<p>默认情况下，Giscus 使用 <code v-pre>light</code> 或 <code v-pre>dark</code> 主题 (基于夜间模式状态)。</p>
<p>::: info 夜间模式</p>
<p>为了能使 Giscus 应用正确的主题，你需要为 <code v-pre>&lt;CommentService /&gt;</code> 通过 <code v-pre>darkmode</code> 属性传入一个布尔值，代表当前是否开启夜间模式。</p>
<p>:::</p>
<p>如果你想在日间模式和夜间模式下自定义主题，你可以设置 <code v-pre>lightTheme</code> 和 <code v-pre>darkTheme</code> 选项，使用内置主题关键字或以 <code v-pre>https://</code> 开头的自定义 css 链接。</p>
</div></template>


