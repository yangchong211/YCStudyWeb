<template><div><h1 id="rtl" tabindex="-1"><a class="header-anchor" href="#rtl"><span>rtl</span></a></h1>
<NpmBadge package="@vuepress/plugin-rtl" /><p>此插件会在配置的语言上设置 rtl 方向。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-rtl@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> rtlPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-rtl'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">rtlPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">      locales<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/ar/'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>类型：<code v-pre>string[]</code></li>
<li>默认值：<code v-pre>['/']</code></li>
<li>详情：
开启 RTL 布局的多语言路径。</li>
</ul>
<h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>selector</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>SelectorOptions</code></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">SelectorOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>element<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span>attrs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>默认值：<code v-pre>{ 'html': { dir: 'rtl' } }</code></p>
</li>
<li>
<p>详情：</p>
<p>开启 RTL 的选择器。</p>
<p>默认设置意味着在 RTL 多语言中，<code v-pre>html</code> 元素的 <code v-pre>dir</code> 属性将被设置为 <code v-pre>rtl</code>。</p>
</li>
</ul>
</div></template>


