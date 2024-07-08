<template><div><h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1>
<h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Required: Yes</p>
</li>
<li>
<p>Details:</p>
<p>Deploy hostname.</p>
</li>
</ul>
<h2 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>author</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>Author</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">AuthorName</span> <span class="token operator">=</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">AuthorInfo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author name</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author website</span>
<span class="line">   */</span></span>
<span class="line">  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author email</span>
<span class="line">   */</span></span>
<span class="line">  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Author</span> <span class="token operator">=</span> AuthorName <span class="token operator">|</span> AuthorName<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> AuthorInfo <span class="token operator">|</span> AuthorInfo<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Required: No</p>
</li>
<li>
<p>Details:</p>
<p>Default author.</p>
</li>
</ul>
<h2 id="autodescription" tabindex="-1"><a class="header-anchor" href="#autodescription"><span>autoDescription</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether generate description automatically</p>
</li>
</ul>
<h2 id="canonical" tabindex="-1"><a class="header-anchor" href="#canonical"><span>canonical</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string | ((page: Page) =&gt; string | null)</code></p>
</li>
<li>
<p>Details:</p>
<p>Canonical link</p>
</li>
</ul>
<h2 id="fallbackimage" tabindex="-1"><a class="header-anchor" href="#fallbackimage"><span>fallBackImage</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Fallback Image link when no image are found</p>
</li>
</ul>
<h2 id="restrictions" tabindex="-1"><a class="header-anchor" href="#restrictions"><span>restrictions</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>The age rating of the content, the format is <code v-pre>[int]+</code>, such as <code v-pre>&quot;13+&quot;</code>.</p>
</li>
</ul>
<h2 id="twitterid" tabindex="-1"><a class="header-anchor" href="#twitterid"><span>twitterID</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Fill in your twitter username.</p>
</li>
</ul>
<h2 id="isarticle" tabindex="-1"><a class="header-anchor" href="#isarticle"><span>isArticle</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>(page: Page) =&gt; boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Use this option to judge whether the page is an article.</p>
</li>
</ul>
<h2 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp"><span>ogp</span></a></h2>
<ul>
<li>
<p>Type:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">ogp</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** OGP info inferred by plugin */</span></span>
<span class="line">  ogp<span class="token operator">:</span> SeoContent<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** Page Object */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> SeoContent</span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Required: No</p>
</li>
<li>
<p>Details:</p>
<p>Custom OPG Generator.</p>
<p>You can use this options to edit OGP tags.</p>
</li>
</ul>
<h2 id="jsonld" tabindex="-1"><a class="header-anchor" href="#jsonld"><span>jsonLd</span></a></h2>
<ul>
<li>
<p>Type:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">jsonLd</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** JSON-LD Object inferred by plugin */</span></span>
<span class="line">  jsonLD<span class="token operator">:</span> ArticleSchema <span class="token operator">|</span> BlogPostingSchema <span class="token operator">|</span> WebPageSchema<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** Page Object */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> ArticleSchema <span class="token operator">|</span> BlogPostingSchema <span class="token operator">|</span> WebPageSchema</span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Required: No</p>
</li>
<li>
<p>Details:</p>
<p>Custom JSON-LD Generator.</p>
<p>You can use this options to edit JSON-LD properties.</p>
</li>
</ul>
<h2 id="customhead" tabindex="-1"><a class="header-anchor" href="#customhead"><span>customHead</span></a></h2>
<ul>
<li>
<p>Type:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">customHead</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** Head tag config */</span></span>
<span class="line">  head<span class="token operator">:</span> HeadConfig<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** Page Object */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Required: No</p>
</li>
<li>
<p>Details:</p>
<p>You can use this options to edit tags injected to <code v-pre>&lt;head&gt;</code>.</p>
</li>
</ul>
</div></template>


