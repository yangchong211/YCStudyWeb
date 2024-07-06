<template><div><h1 id="feed-获取器" tabindex="-1"><a class="header-anchor" href="#feed-获取器"><span>Feed 获取器</span></a></h1>
<p>你可以通过控制插件选项中的 <code v-pre>getter</code> 来完全控制 Feed 项目的生成。</p>
<h2 id="getter-title" tabindex="-1"><a class="header-anchor" href="#getter-title"><span>getter.title</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; string</code></li>
</ul>
<p>项目标题获取器</p>
<h2 id="getter-link" tabindex="-1"><a class="header-anchor" href="#getter-link"><span>getter.link</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; string</code></li>
</ul>
<p>项目链接获取器</p>
<h2 id="getter-description" tabindex="-1"><a class="header-anchor" href="#getter-description"><span>getter.description</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; string | undefined</code></li>
</ul>
<p>项目描述获取器</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>因为 Atom 在摘要中支持 HTML，所以如果可能的话，你可以在这里返回 HTML 内容，但内容必须以标记 <code v-pre>html:</code> 开头。</p>
</div>
<h2 id="getter-content" tabindex="-1"><a class="header-anchor" href="#getter-content"><span>getter.content</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; string</code></li>
</ul>
<p>项目内容获取器</p>
<h2 id="getter-author" tabindex="-1"><a class="header-anchor" href="#getter-author"><span>getter.author</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; FeedAuthor[]</code></li>
</ul>
<p>项目作者获取器。</p>
<div class="custom-container tip"><p class="custom-container-title">获取器应在作者信息缺失时返回空数组。</p>
</div>
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
<h2 id="getter-category" tabindex="-1"><a class="header-anchor" href="#getter-category"><span>getter.category</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; FeedCategory[] | undefined</code></li>
</ul>
<p>项目分类获取器。</p>
<details class="custom-container details"><summary>FeedCategory 格式</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">FeedCategory</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 分类名称</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 标识分类法的字符串</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> rss format only</span>
<span class="line">   */</span></span>
<span class="line">  domain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * URI 标识的分类 scheme</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> atom format only</span>
<span class="line">   */</span></span>
<span class="line">  scheme<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="getter-enclosure" tabindex="-1"><a class="header-anchor" href="#getter-enclosure"><span>getter.enclosure</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; FeedEnclosure | undefined</code></li>
</ul>
<p>项目附件获取器。</p>
<details class="custom-container details"><summary>FeedEnclosure 格式</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">FeedEnclosure</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Enclosure 地址</span>
<span class="line">   */</span></span>
<span class="line">  url<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 类型</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> 应为一个标准的 MIME 类型，rss format only</span>
<span class="line">   */</span></span>
<span class="line">  type<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 按照字节数计算的大小</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> rss format only</span>
<span class="line">   */</span></span>
<span class="line">  length<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="getter-publishdate" tabindex="-1"><a class="header-anchor" href="#getter-publishdate"><span>getter.publishDate</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; Date | undefined</code></li>
</ul>
<p>项目发布日期获取器</p>
<h2 id="getter-lastupdatedate" tabindex="-1"><a class="header-anchor" href="#getter-lastupdatedate"><span>getter.lastUpdateDate</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; Date</code></li>
</ul>
<p>项目最后更新日期获取器</p>
<h2 id="getter-image" tabindex="-1"><a class="header-anchor" href="#getter-image"><span>getter.image</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; string</code></li>
</ul>
<p>项目图片获取器</p>
<div class="custom-container tip"><p class="custom-container-title">确保返回一个完整的 URL。</p>
</div>
<h2 id="getter-contributor" tabindex="-1"><a class="header-anchor" href="#getter-contributor"><span>getter.contributor</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; FeedContributor[]</code></li>
</ul>
<p>项目贡献者获取器</p>
<div class="custom-container tip"><p class="custom-container-title">获取器应在贡献者信息缺失时返回空数组。</p>
</div>
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
<h2 id="getter-copyright" tabindex="-1"><a class="header-anchor" href="#getter-copyright"><span>getter.copyright</span></a></h2>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; string | undefined</code></li>
</ul>
<p>项目版权获取器</p>
</div></template>


