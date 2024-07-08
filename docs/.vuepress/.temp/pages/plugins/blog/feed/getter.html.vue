<template><div><h1 id="feed-getter" tabindex="-1"><a class="header-anchor" href="#feed-getter"><span>Feed Getter</span></a></h1>
<p>You can take full control of feed items generation by setting <code v-pre>getter</code> in the plugin options.</p>
<h2 id="getter-title" tabindex="-1"><a class="header-anchor" href="#getter-title"><span>getter.title</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; string</code></li>
</ul>
<p>Item title getter</p>
<h2 id="getter-link" tabindex="-1"><a class="header-anchor" href="#getter-link"><span>getter.link</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; string</code></li>
</ul>
<p>Item link getter</p>
<h2 id="getter-description" tabindex="-1"><a class="header-anchor" href="#getter-description"><span>getter.description</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; string | undefined</code></li>
</ul>
<p>Item description getter</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Due to Atom support HTML in summary, so you can return HTML content here if possible, but the content must start with mark <code v-pre>html:</code>.</p>
</div>
<h2 id="getter-content" tabindex="-1"><a class="header-anchor" href="#getter-content"><span>getter.content</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; string</code></li>
</ul>
<p>Item content getter</p>
<h2 id="getter-author" tabindex="-1"><a class="header-anchor" href="#getter-author"><span>getter.author</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; FeedAuthor[]</code></li>
</ul>
<p>Item author getter.</p>
<div class="custom-container tip"><p class="custom-container-title">The getter should return an empty array when author information is missing.</p>
</div>
<details class="custom-container details"><summary>FeedAuthor format</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author name</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author email</span>
<span class="line">   */</span></span>
<span class="line">  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author site</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> json format only</span>
<span class="line">   */</span></span>
<span class="line">  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author avatar</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> json format only</span>
<span class="line">   */</span></span>
<span class="line">  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="getter-category" tabindex="-1"><a class="header-anchor" href="#getter-category"><span>getter.category</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; FeedCategory[] | undefined</code></li>
</ul>
<p>Item category getter.</p>
<details class="custom-container details"><summary>FeedCategory format</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">FeedCategory</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Category Name</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A string that identifies a categorization taxonomy</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> rss format only</span>
<span class="line">   */</span></span>
<span class="line">  domain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * the categorization scheme via a URI</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> atom format only</span>
<span class="line">   */</span></span>
<span class="line">  scheme<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="getter-enclosure" tabindex="-1"><a class="header-anchor" href="#getter-enclosure"><span>getter.enclosure</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; FeedEnclosure | undefined</code></li>
</ul>
<p>Item enclosure getter.</p>
<details class="custom-container details"><summary>FeedEnclosure format</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">FeedEnclosure</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Enclosure link</span>
<span class="line">   */</span></span>
<span class="line">  url<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * what its type is</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> should be a standard MIME Type, rss format only</span>
<span class="line">   */</span></span>
<span class="line">  Type<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Size in bytes</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> rss format only</span>
<span class="line">   */</span></span>
<span class="line">  length<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="getter-publishdate" tabindex="-1"><a class="header-anchor" href="#getter-publishdate"><span>getter.publishDate</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; Date | undefined</code></li>
</ul>
<p>Item release date getter</p>
<h2 id="getter-lastupdatedate" tabindex="-1"><a class="header-anchor" href="#getter-lastupdatedate"><span>getter.lastUpdateDate</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; Date</code></li>
</ul>
<p>Item last update date getter</p>
<h2 id="getter-image" tabindex="-1"><a class="header-anchor" href="#getter-image"><span>getter.image</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; string</code></li>
</ul>
<p>Item Image Getter</p>
<div class="custom-container tip"><p class="custom-container-title">Ensure it's returning a full URL</p>
</div>
<h2 id="getter-contributor" tabindex="-1"><a class="header-anchor" href="#getter-contributor"><span>getter.contributor</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; FeedContributor[]</code></li>
</ul>
<p>Item Contributor Getter</p>
<div class="custom-container tip"><p class="custom-container-title">The getter should return an empty array when contributor information is missing.</p>
</div>
<details class="custom-container details"><summary>FeedContributor format</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">FeedContributor</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author name</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author email</span>
<span class="line">   */</span></span>
<span class="line">  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author site</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> json format only</span>
<span class="line">   */</span></span>
<span class="line">  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author avatar</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> json format only</span>
<span class="line">   */</span></span>
<span class="line">  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="getter-copyright" tabindex="-1"><a class="header-anchor" href="#getter-copyright"><span>getter.copyright</span></a></h2>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; string | undefined</code></li>
</ul>
<p>Item copyright getter</p>
</div></template>


