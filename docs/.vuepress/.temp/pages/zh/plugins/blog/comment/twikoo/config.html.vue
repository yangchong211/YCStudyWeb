<template><div><h1 id="twikoo-选项" tabindex="-1"><a class="header-anchor" href="#twikoo-选项"><span>Twikoo 选项</span></a></h1>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<h3 id="envid" tabindex="-1"><a class="header-anchor" href="#envid"><span>envId</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 是</li>
<li>详情：腾讯云环境 ID 或 Vercel 地址。</li>
</ul>
<h3 id="repoid" tabindex="-1"><a class="header-anchor" href="#repoid"><span>repoId</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>默认值: <code v-pre>&quot;ap-shanghai&quot;</code></li>
<li>详情：腾讯云区域。</li>
</ul>
<h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置"><span>插件配置</span></a></h2>
<p>你可以直接在插件选项中配置可序列化的选项:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/config.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> commentPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">commentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      provider<span class="token operator">:</span> <span class="token string">'Twikoo'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 其他选项</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h2>
<p>你可以使用 <code v-pre>defineTwikooConfig</code> 函数来配置 Twikoo。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/client.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineTwikooConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineTwikooConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Twikoo 选项</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></div></template>


