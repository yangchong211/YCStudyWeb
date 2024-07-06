<template><div><h1 id="bundler-related" tabindex="-1"><a class="header-anchor" href="#bundler-related"><span>Bundler Related</span></a></h1>
<p>Bundler function is for appending or modifying bundler options in theme and plugins.</p>
<p>All functions should be called in <code v-pre>extendsBundlerOptions</code> lifecycle hook.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>We are omitting that in examples. The actual code should be like this:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// import functions you need</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> addCustomElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/helper'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> yourPlugin <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token function-variable function">extendsBundlerOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// add them here</span></span>
<span class="line">    <span class="token function">addCustomElement</span><span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token string">'my-custom-element'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="common-methods" tabindex="-1"><a class="header-anchor" href="#common-methods"><span>Common methods</span></a></h2>
<h3 id="getbundlername" tabindex="-1"><a class="header-anchor" href="#getbundlername"><span>getBundlerName</span></a></h3>
<p>Get current bundler name.</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getBundlerName</span><span class="token operator">:</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details"><summary>Example</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// @vuepress/bundler-vite</span></span>
<span class="line"><span class="token function">getBundleName</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'vite'</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token comment">// @vuepress/bundler-webpack</span></span>
<span class="line"><span class="token function">getBundleName</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'webpack'</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
</div></details>
<h3 id="addcustomelement" tabindex="-1"><a class="header-anchor" href="#addcustomelement"><span>addCustomElement</span></a></h3>
<p>Add a custom element declaration to the current bundler.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Add tags as customElement</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">bundlerOptions</span> VuePress Bundler config</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">app</span> VuePress Node App</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">customElements</span> tags recognized as custom element</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addCustomElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">  bundlerOptions<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line">  customElement<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> RegExp</span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Example</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> addCustomElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/helper'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">addCustomElement</span><span class="token punctuation">(</span>bundlerConfig<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token string">'my-custom-element'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">addCustomElement</span><span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">'custom-element1'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'custom-element2'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// all tags start with `math-`</span></span>
<span class="line">  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^math-</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></details>
<h3 id="customizedevserver" tabindex="-1"><a class="header-anchor" href="#customizedevserver"><span>customizeDevServer</span></a></h3>
<p>Provides contents for specific path in dev server.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DevServerOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Path to be responded</span>
<span class="line">   */</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Respond function</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token punctuation">(</span>request<span class="token operator">?</span><span class="token operator">:</span> IncomingMessage<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> Buffer<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * error msg</span>
<span class="line">   */</span></span>
<span class="line">  errMsg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Handle specific path when running VuePress Dev Server</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">bundlerOptions</span> VuePress Bundler config</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">app</span> VuePress Node App</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">path</span> Path to be responded</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">response</span> respond function</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">errMsg</span> error msg</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> customizeDevServer<span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  bundlerOptions<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    errMsg<span class="token operator">:</span><span class="token string">"The server encountered an error"</span><span class="token punctuation">,</span></span>
<span class="line">    response<span class="token operator">:</span> responseHandler<span class="token punctuation">,</span></span>
<span class="line">    path<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token operator">:</span> CustomServerOptions</span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Example</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useCustomDevServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/helper'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// handle `/api/` path</span></span>
<span class="line"><span class="token function">useCustomDevServer</span><span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token string">'/api/'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  errMsg<span class="token operator">:</span> <span class="token string">'Unexpected api error'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></details>
<h2 id="vite-related" tabindex="-1"><a class="header-anchor" href="#vite-related"><span>Vite Related</span></a></h2>
<ul>
<li>
<p>addViteOptimizeDepsInclude</p>
<p>Add modules to Vite <code v-pre>optimizeDeps.include</code> list</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If a package meets one of the following conditions, you should consider adding it here.</p>
<ul>
<li>It's in CJS format</li>
<li>It's dependencies include CJS package</li>
<li>It's dynamically imported via <code v-pre>import()</code></li>
</ul>
</div>
</li>
<li>
<p>addViteOptimizeDepsExclude</p>
<p>Add modules to Vite <code v-pre>optimizeDeps.exclude</code> list</p>
<div class="custom-container tip"><p class="custom-container-title">If a package and its dependencies are all pure ESM packages, you should consider adding it here.</p>
</div>
</li>
<li>
<p>addViteSsrExternal</p>
<p>Add modules to Vite <code v-pre>ssr.external</code> list</p>
<div class="custom-container tip"><p class="custom-container-title">If a package is a pure ESM package and does not use aliases or define variables, you should consider adding it here.</p>
</div>
</li>
<li>
<p>addViteSsrNoExternal</p>
<p>Add modules to Vite <code v-pre>ssr.noExternal</code> list</p>
<div class="custom-container warning"><p class="custom-container-title">If an alias or define is used within a package, you must add it here.</p>
</div>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Add modules to Vite `optimizeDeps.include` list</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addViteOptimizeDepsInclude</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  bundlerOptions<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line">  module<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Add modules to Vite `optimizeDeps.exclude` list</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addViteOptimizeDepsExclude</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  bundlerOptions<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line">  module<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Add modules to Vite `ssr.external` list</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addViteSsrExternal</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  bundlerOptions<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line">  module<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Add modules to Vite `ssr.noExternal` list</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addViteSsrNoExternal</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  bundlerOptions<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line">  module<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Examples</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  addViteOptimizeDepsInclude<span class="token punctuation">,</span></span>
<span class="line">  addViteOptimizeDepsExclude<span class="token punctuation">,</span></span>
<span class="line">  addViteSsrExternal<span class="token punctuation">,</span></span>
<span class="line">  addViteSsrNoExternal<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/helper'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">addViteOptimizeDepsInclude</span><span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'vue'</span><span class="token punctuation">,</span> <span class="token string">'vue-router'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">addViteOptimizeDepsExclude</span><span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token string">'packageA'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">addViteSsrNoExternal</span><span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'vue'</span><span class="token punctuation">,</span> <span class="token string">'vue-router'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">addViteSsrExternal</span><span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token string">'packageA'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</li>
<li>
<p>addViteConfig</p>
<p>A function for you to add vite config</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addViteConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  bundlerOptions<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line">  config<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details"><summary>Example</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> addViteConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/helper'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">addViteConfig</span><span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  build<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    charset<span class="token operator">:</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></details>
</li>
<li>
<p>mergeViteConfig</p>
<p>A function for you to merge vite config.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Your users may choose to use other bundler so it's pretty bad to declare vite as deps!</p>
</div>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">mergeViteConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  defaults<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  overrides<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details"><summary>Example</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mergeViteConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/helper'</span></span>
<span class="line"></span>
<span class="line">config<span class="token punctuation">.</span>viteOptions <span class="token operator">=</span> <span class="token function">mergeViteConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>viteOptions<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  build<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    charset<span class="token operator">:</span> <span class="token string">'utf8'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></details>
</li>
</ul>
<h2 id="webpack-related" tabindex="-1"><a class="header-anchor" href="#webpack-related"><span>Webpack Related</span></a></h2>
<ul>
<li>
<p>chainWebpack</p>
<p>Chain webpack config.</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  bundlerOptions<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">    config<span class="token operator">:</span> WebpackChainConfig<span class="token punctuation">,</span></span>
<span class="line">    isServer<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span></span>
<span class="line">    isBuild<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details"><summary>Example</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> chainWebpack <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/helper'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">chainWebpack</span><span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> isServer<span class="token punctuation">,</span> isBuild<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// do some customize here</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></details>
</li>
<li>
<p>configWebpack</p>
<p>Config Webpack</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">configWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  bundlerOptions<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">    config<span class="token operator">:</span> WebpackConfiguration<span class="token punctuation">,</span></span>
<span class="line">    isServer<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span></span>
<span class="line">    isBuild<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details"><summary>Example</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> configWebpack <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/helper'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">configWebpack</span><span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> isServer<span class="token punctuation">,</span> isBuild<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// do some customize here</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></details>
</li>
</ul>
</div></template>


