<template><div><h1 id="frontmatter-配置" tabindex="-1"><a class="header-anchor" href="#frontmatter-配置"><span>Frontmatter 配置</span></a></h1>
<p>你可以通过配置每个页面的 Frontmatter，来对每个 Feed 项目生成进行单独的控制。</p>
<h2 id="添加与移除" tabindex="-1"><a class="header-anchor" href="#添加与移除"><span>添加与移除</span></a></h2>
<p>默认情况下，所有文章均会被添加至 feed 流。如果你想在 feed 中移除特定页面，你可以在 frontmatter 中设置 <code v-pre>feed: false</code>。</p>
<h2 id="读取的-frontmatter-信息" tabindex="-1"><a class="header-anchor" href="#读取的-frontmatter-信息"><span>读取的 Frontmatter 信息</span></a></h2>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title"><span>title</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
</ul>
<p>由 VuePress 自动生成，默认为页面的 h1 内容</p>
<h3 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>description</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
</ul>
<p>页面描述</p>
<h3 id="date" tabindex="-1"><a class="header-anchor" href="#date"><span>date</span></a></h3>
<ul>
<li>类型：<code v-pre>Date</code></li>
</ul>
<p>页面的发布日期</p>
<h3 id="article" tabindex="-1"><a class="header-anchor" href="#article"><span>article</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
</ul>
<p>该页面是否是文章</p>
<blockquote>
<p>如果此项设置为 <code v-pre>false</code>，则该页不会包含在最终的 feed 中。</p>
</blockquote>
<h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright"><span>copyright</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
</ul>
<p>页面版权信息</p>
<h3 id="cover-image-banner" tabindex="-1"><a class="header-anchor" href="#cover-image-banner"><span>cover / image / banner</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
</ul>
<p>页面的封面/分享图，需为完整链接或绝对链接。</p>
<h2 id="frontmatter-选项" tabindex="-1"><a class="header-anchor" href="#frontmatter-选项"><span>Frontmatter 选项</span></a></h2>
<h3 id="feed-title" tabindex="-1"><a class="header-anchor" href="#feed-title"><span>feed.title</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
</ul>
<p>Feed 项目的标题</p>
<h3 id="feed-description" tabindex="-1"><a class="header-anchor" href="#feed-description"><span>feed.description</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
</ul>
<p>Feed 项目的描述</p>
<h3 id="feed-content" tabindex="-1"><a class="header-anchor" href="#feed-content"><span>feed.content</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
</ul>
<p>Feed 项目的内容</p>
<h3 id="feed-author" tabindex="-1"><a class="header-anchor" href="#feed-author"><span>feed.author</span></a></h3>
<ul>
<li>类型：<code v-pre>FeedAuthor[] | FeedAuthor</code></li>
</ul>
<p>Feed 项目的作者</p>
<details class="custom-container details"><summary>FeedAuthor 格式</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者名字</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者邮件</span>
<span class="line">   */</span></span>
<span class="line">  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者网站</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> json format only</span>
<span class="line">   */</span></span>
<span class="line">  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者头像</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> json format only</span>
<span class="line">   */</span></span>
<span class="line">  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="feed-contributor" tabindex="-1"><a class="header-anchor" href="#feed-contributor"><span>feed.contributor</span></a></h3>
<ul>
<li>类型：<code v-pre>FeedContributor[] | FeedContributor</code></li>
</ul>
<p>Feed 项目的贡献者</p>
<details class="custom-container details"><summary>FeedContributor 格式</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">FeedContributor</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者名字</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者邮件</span>
<span class="line">   */</span></span>
<span class="line">  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者网站</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> json format only</span>
<span class="line">   */</span></span>
<span class="line">  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者头像</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> json format only</span>
<span class="line">   */</span></span>
<span class="line">  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="feed-guid" tabindex="-1"><a class="header-anchor" href="#feed-guid"><span>feed.guid</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
</ul>
<p>Feed 项目的标识符，用于标识 Feed 项目。</p>
<div class="custom-container tip"><p class="custom-container-title">你应该确保每个 Feed 项目有全局唯一的 guid。</p>
</div>
</div></template>


