<template><div><h1 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h1>
<h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>必填：是</p>
</li>
<li>
<p>详情：</p>
<p>部署域名</p>
</li>
</ul>
<h2 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>author</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>Author</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">AuthorName</span> <span class="token operator">=</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者姓名</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者网站</span>
<span class="line">   */</span></span>
<span class="line">  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者 Email</span>
<span class="line">   */</span></span>
<span class="line">  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> AuthorName <span class="token operator">|</span> AuthorName<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>详情：</p>
<p>默认作者</p>
</li>
</ul>
<h2 id="autodescription" tabindex="-1"><a class="header-anchor" href="#autodescription"><span>autoDescription</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否自动生成描述</p>
</li>
</ul>
<h2 id="canonical" tabindex="-1"><a class="header-anchor" href="#canonical"><span>canonical</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string | ((page: Page) =&gt; string | null)</code></p>
</li>
<li>
<p>详情：</p>
<p>首选链接</p>
</li>
</ul>
<h2 id="fallbackimage" tabindex="-1"><a class="header-anchor" href="#fallbackimage"><span>fallBackImage</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>当找不到图片时的回退图片链接</p>
</li>
</ul>
<h2 id="restrictions" tabindex="-1"><a class="header-anchor" href="#restrictions"><span>restrictions</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>内容的年龄分级，格式为 <code v-pre>[int]+</code>，如 <code v-pre>&quot;13+&quot;</code></p>
</li>
</ul>
<h2 id="twitterid" tabindex="-1"><a class="header-anchor" href="#twitterid"><span>twitterID</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>你的 twitter 用户名</p>
</li>
</ul>
<h2 id="isarticle" tabindex="-1"><a class="header-anchor" href="#isarticle"><span>isArticle</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>(page: Page) =&gt; boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>你可以使用此选项判断一个页面是否是文章。</p>
</li>
</ul>
<h2 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp"><span>ogp</span></a></h2>
<ul>
<li>
<p>类型：</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">ogp</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** 插件推断的 OGP 信息 */</span></span>
<span class="line">  ogp<span class="token operator">:</span> SeoContent<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** 页面对象 */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> SeoContent</span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>详情：</p>
<p>自定义 OGP 生成器</p>
<p>你可以使用此选项来注入新的或覆盖掉默认生成的 OGP 标签。</p>
</li>
</ul>
<h2 id="jsonld" tabindex="-1"><a class="header-anchor" href="#jsonld"><span>jsonLd</span></a></h2>
<ul>
<li>
<p>类型：</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">jsonLd</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** 由插件推断出的 JSON-LD 对象 */</span></span>
<span class="line">  jsonLD<span class="token operator">:</span> ArticleSchema <span class="token operator">|</span> BlogPostingSchema <span class="token operator">|</span> WebPageSchema<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** 页面对象 */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> ArticleSchema <span class="token operator">|</span> BlogPostingSchema <span class="token operator">|</span> WebPageSchema</span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>详情：</p>
<p>自定义 JSON-LD 生成器</p>
<p>你可以使用此选项来注入新的或覆盖掉默认生成的 JSON-LD 标签。</p>
</li>
</ul>
<h2 id="customhead" tabindex="-1"><a class="header-anchor" href="#customhead"><span>customHead</span></a></h2>
<ul>
<li>
<p>类型：</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">customHead</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** head 标签配置 */</span></span>
<span class="line">  head<span class="token operator">:</span> HeadConfig<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** 页面对象 */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>详情：</p>
<p>你可以使用此选项来直接注入任意格式的标签到 <code v-pre>&lt;head&gt;</code>。</p>
</li>
</ul>
</div></template>


