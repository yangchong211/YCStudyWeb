<template><div><h1 id="打包器相关" tabindex="-1"><a class="header-anchor" href="#打包器相关"><span>打包器相关</span></a></h1>
<p>打包器函数用于在主题和插件中追加或修改打包器选项。</p>
<p>所有函数都应在 <code v-pre>extendsBundlerOptions</code> 生命周期挂钩中调用。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>我们在示例中省略了它。 实际代码应该是这样的：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// 导入你需要的函数</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> addCustomElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/helper'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> yourPlugin <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token function-variable function">extendsBundlerOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 在此添加它们</span></span>
<span class="line">    <span class="token function">addCustomElement</span><span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">,</span> <span class="token string">'my-custom-element'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="通用方法" tabindex="-1"><a class="header-anchor" href="#通用方法"><span>通用方法</span></a></h2>
<h3 id="getbundlername" tabindex="-1"><a class="header-anchor" href="#getbundlername"><span>getBundlerName</span></a></h3>
<p>获取当前打包器的名称。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getBundlerName</span><span class="token operator">:</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details"><summary>示例</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// @vuepress/bundler-vite</span></span>
<span class="line"><span class="token function">getBundleName</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'vite'</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token comment">// @vuepress/bundler-webpack</span></span>
<span class="line"><span class="token function">getBundleName</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'webpack'</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
</div></details>
<h3 id="addcustomelement" tabindex="-1"><a class="header-anchor" href="#addcustomelement"><span>addCustomElement</span></a></h3>
<p>将自定义元素声明添加到当前的打包器。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">CustomElementCommonOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">;</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>示例</summary>
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
<p>为开发服务器中的特定路径提供内容。</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>示例</summary>
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
<h2 id="vite-相关" tabindex="-1"><a class="header-anchor" href="#vite-相关"><span>Vite 相关</span></a></h2>
<ul>
<li>
<p>addViteOptimizeDepsInclude</p>
<p>向 Vite <code v-pre>optimizeDeps.include</code> 列表中添加模块</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果一个包满足下列条件之一，你应该考虑将它添加至此。</p>
<ul>
<li>为 CJS 格式</li>
<li>包的依赖包含 CJS 包</li>
<li>包通过 <code v-pre>import()</code> 动态导入</li>
</ul>
</div>
</li>
<li>
<p>addViteOptimizeDepsExclude</p>
<p>向 Vite <code v-pre>optimizeDeps.exclude</code> 列表中添加模块</p>
<div class="custom-container tip"><p class="custom-container-title">如果一个包和它的依赖都是纯 ESM 包，你应该考虑将它添加至此。</p>
</div>
</li>
<li>
<p>addViteSsrExternal</p>
<p>向 Vite <code v-pre>ssr.external</code> 列表中添加模块</p>
<div class="custom-container tip"><p class="custom-container-title">如果一个包是纯 ESM 包，且未使用别名 (alias) 或定义变量 (define)，你应该考虑将它添加至此。</p>
</div>
</li>
<li>
<p>addViteSsrNoExternal</p>
<p>向 Vite <code v-pre>ssr.noExternal</code> 列表中添加模块</p>
<div class="custom-container warning"><p class="custom-container-title">如果一个包内使用了别名 (alias) 或定义变量 (define)，你必须将它添加至此。</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>示例</summary>
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
<p>无需导入 vite 即可合并 vite 配置的功能</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">mergeViteConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  defaults<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  overrides<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>你不应将 vite 作为依赖，因为你的的用户可能选择其他打包器！</p>
</div>
<details class="custom-container details"><summary>示例</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mergeViteConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vuepress/helper"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">config<span class="token punctuation">.</span>viteOptions <span class="token function">mergeViteConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>viteOptions<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  build<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    charset<span class="token operator">:</span> <span class="token string">"utf8"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div></details>
</li>
</ul>
<h2 id="webpack-相关" tabindex="-1"><a class="header-anchor" href="#webpack-相关"><span>Webpack 相关</span></a></h2>
<ul>
<li>
<p>chainWebpack</p>
<p>链式修改 webpack 配置.</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">{</span> app<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token operator">:</span> WebpackCommonOptions<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">    config<span class="token operator">:</span> WebpackChainConfig<span class="token punctuation">,</span></span>
<span class="line">    isServer<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span></span>
<span class="line">    isBuild<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details"><summary>示例</summary>
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
<p>配置 Webpack</p>
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
</div><details class="custom-container details"><summary>实例</summary>
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


