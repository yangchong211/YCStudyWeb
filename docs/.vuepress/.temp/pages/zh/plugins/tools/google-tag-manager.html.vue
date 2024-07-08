<template><div><h1 id="google-tag-manager" tabindex="-1"><a class="header-anchor" href="#google-tag-manager"><span>google-tag-manager</span></a></h1>
<NpmBadge package="@vuepress/plugin-google-tag-manager" /><p>将 <a href="https://tagmanager.google.com/" target="_blank" rel="noopener noreferrer">Google 跟踪代码管理器</a> 集成到 VuePress 中。</p>
<p>该插件会引入 <a href="https://developers.google.com/tag-platform/tag-manager?hl=zh-cn" target="_blank" rel="noopener noreferrer">Google 跟踪代码管理器</a>。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-google-tag-manager@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> googleTagManagerPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-google-tag-manager'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">googleTagManagerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><div class="custom-container tip"><p class="custom-container-title">禁用 Javascript 的情况下工作</p>
<p>如果您希望 Google 跟踪代码管理器在禁用 javascript 时正常工作，您应该通过 <code v-pre>templateBuild</code> 将以下内容添加到构建模板的正文部分：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token comment">&lt;!-- Google Tag Manager (noscript) --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noscript</span></span>
<span class="line">  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span></span>
<span class="line">    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.googletagmanager.com/ns.html?id=GTM-ABCDEFGH<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">visibility</span><span class="token punctuation">:</span>hidden</span><span class="token punctuation">"</span></span></span></span>
<span class="line">  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span></span>
<span class="line"><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noscript</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!-- End Google Tag Manager (noscript) --></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>Google 跟踪代码管理器 的容器 ID ，应以 <code v-pre>'GTM-'</code> 开头。</p>
<p>你可以在 <a href="https://tagmanager.google.com/#/home" target="_blank" rel="noopener noreferrer">这里</a> 添加容器并找到容器 ID。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">googleTagManagerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      id<span class="token operator">:</span> <span class="token string">'G-XXXXXXXXXX'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></div></template>


