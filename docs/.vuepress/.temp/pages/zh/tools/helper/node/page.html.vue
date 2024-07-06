<template><div><h1 id="页面相关" tabindex="-1"><a class="header-anchor" href="#页面相关"><span>页面相关</span></a></h1>
<p>这些函数为你的页面生成常见信息。</p>
<h2 id="getpageexcerpt" tabindex="-1"><a class="header-anchor" href="#getpageexcerpt"><span>getPageExcerpt</span></a></h2>
<p>获取页面摘要。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PageExcerptOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 摘要分隔符</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> "&lt;!-- more -->"</span>
<span class="line">   */</span></span>
<span class="line">  separator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 摘要的长度</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> 摘要的长度会尽可能的接近这个值</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 300</span>
<span class="line">   */</span></span>
<span class="line">  length<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 被认为是自定义元素的标签</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> 用于判断一个标签是否是自定义元素，因为在摘要中，所有的未知标签都会被移除。</span>
<span class="line">   */</span></span>
<span class="line">  isCustomElement<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>tagName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 是否保留页面标题 (第一个 h1)</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> false</span>
<span class="line">   */</span></span>
<span class="line">  keepPageTitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 是否保留代码块的标签，诸如行号和高亮行</span>
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
<p>获取页面纯文本。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PageTextOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 是否将文字转换成单行内容</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> false</span>
<span class="line">   */</span></span>
<span class="line">  singleLine<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 文字的长度</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> 文字的长度会尽可能的接近这个值</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 300</span>
<span class="line">   */</span></span>
<span class="line">  length<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 需要移除的标签</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> 默认情况下表格和代码块会被移除</span>
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


