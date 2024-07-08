<template><div><h1 id="back-to-top" tabindex="-1"><a class="header-anchor" href="#back-to-top"><span>back-to-top</span></a></h1>
<NpmBadge package="@vuepress/plugin-back-to-top" /><p>该插件会给你的站点添加一个 <em>返回顶部</em> 按钮。当页面向下滚动时，该按钮会显示在页面的右下角，点击它就会滚动到页面顶部。</p>
<p>该插件已经集成到默认主题中。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-back-to-top@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> backToTopPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-back-to-top'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">backToTopPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="threshold" tabindex="-1"><a class="header-anchor" href="#threshold"><span>threshold</span></a></h3>
<ul>
<li>类型：<code v-pre>数字</code></li>
<li>默认值：<code v-pre>100</code></li>
<li>详情：显示返回顶部按钮的滚动阈值距离（以像素为单位）</li>
</ul>
<h3 id="progress" tabindex="-1"><a class="header-anchor" href="#progress"><span>progress</span></a></h3>
<ul>
<li>类型：<code v-pre>布尔值</code></li>
<li>默认值：<code v-pre>true</code></li>
<li>详情：是否在图标周围显示进度条</li>
</ul>
<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2>
<p>你可以通过 CSS 变量来自定义 <em>返回顶部</em> 按钮的样式：</p>
<div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--back-to-top-z-index</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--back-to-top-icon</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"back-to-top.svg"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--back-to-top-bg-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--back-to-top-color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--back-to-top-icon-color</span><span class="token punctuation">:</span> currentcolor<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--back-to-top-color-hover</span><span class="token punctuation">:</span> #71cda3<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--back-to-top-shadow</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 / 20%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></div></template>


