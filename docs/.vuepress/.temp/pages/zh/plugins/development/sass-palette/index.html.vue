<template><div><h1 id="sass-palette" tabindex="-1"><a class="header-anchor" href="#sass-palette"><span>sass-palette</span></a></h1>
<NpmBadge package="@vuepress/plugin-sass-palette" /><p>这个插件主要面向插件和主题开发者，相比 <RouteLink to="/zh/plugins/development/palette.html"><code v-pre>@vuepress/plugin-palette</code></RouteLink> 更加强大。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>你必须在插件初始化期间调用 <code v-pre>useSassPalettePlugin</code> 函数来使用此插件。</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-sass-palette@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="你的插件或主题入口"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useSassPalettePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress-plugin-sass-palette'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> PluginFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> yourPlugin <span class="token operator">=</span></span>
<span class="line">  <span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token operator">:</span> PluginFunction <span class="token operator">=></span></span>
<span class="line">  <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">useSassPalettePlugin</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 插件选项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 你的插件 API</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


