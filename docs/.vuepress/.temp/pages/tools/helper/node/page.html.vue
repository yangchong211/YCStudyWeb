<template><div><h1 id="page-related" tabindex="-1"><a class="header-anchor" href="#page-related"><span>Page Related</span></a></h1>
<p>These functions generate common information for your pages.</p>
<h2 id="getpageexcerpt" tabindex="-1"><a class="header-anchor" href="#getpageexcerpt"><span>getPageExcerpt</span></a></h2>
<p>Get the excerpt of the page.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PageExcerptOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Excerpt separator</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> "&lt;!-- more -->"</span>
<span class="line">   */</span></span>
<span class="line">  separator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Length of excerpt</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> Excerpt length will be the minimal possible length reaching this value</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 300</span>
<span class="line">   */</span></span>
<span class="line">  length<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Tags which is considered as custom elements</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> This is used to determine whether a tag is a custom element since all unknown tags are removed in excerpt.</span>
<span class="line">   */</span></span>
<span class="line">  isCustomElement<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Whether keep page title (first h1) in excerpt</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> false</span>
<span class="line">   */</span></span>
<span class="line">  keepPageTitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Whether preserve tags like line numbers and highlight lines for code blocks</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> false</span>
<span class="line">   */</span></span>
<span class="line">  keepFenceDom<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageExcerpt</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  options<span class="token operator">?</span><span class="token operator">:</span> PageExcerptOptions<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getpagetext" tabindex="-1"><a class="header-anchor" href="#getpagetext"><span>getPageText</span></a></h2>
<p>Get plain text of the page.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PageTextOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Whether convert text to single line content</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> false</span>
<span class="line">   */</span></span>
<span class="line">  singleLine<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Length of text</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> Text length will be the minimal possible length reaching this value</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 300</span>
<span class="line">   */</span></span>
<span class="line">  length<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Tags to be removed</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> Table and code blocks are removed by default.</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> ['table', 'pre']</span>
<span class="line">   */</span></span>
<span class="line">  removedTags<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageText</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  options<span class="token operator">?</span><span class="token operator">:</span> PageTextOptions<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


