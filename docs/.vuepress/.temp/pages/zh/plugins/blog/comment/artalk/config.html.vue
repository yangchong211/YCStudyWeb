<template><div><h1 id="artalk-选项" tabindex="-1"><a class="header-anchor" href="#artalk-选项"><span>Artalk 选项</span></a></h1>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>详见 <a href="https://artalk.js.org/guide/frontend/config.html" target="_blank" rel="noopener noreferrer">Artalk 配置</a>。</p>
<ul>
<li>
<p><code v-pre>el</code> <code v-pre>pageTitle</code>, <code v-pre>pageKey</code> 和 <code v-pre>site</code> 选项为插件的保留选项，将从 VuePress 配置中自动推断，不可设置。</p>
</li>
<li>
<p><code v-pre>imgUploader</code> 和 <code v-pre>avatarURLBuilder</code> 这两个函数选项只能在客户端配置。</p>
</li>
</ul>
<h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置"><span>插件配置</span></a></h2>
<p>你可以直接在插件选项中配置可序列化的选项:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/config.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> commentPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">commentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      provider<span class="token operator">:</span> <span class="token string">'Artalk'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 其他选项</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h2>
<p>你可以使用 <code v-pre>defineArtalkConfig</code> 函数来配置 Artalk。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/client.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineArtalkConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineArtalkConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Artalk 选项</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></div></template>


