<template><div><h1 id="markdown-image" tabindex="-1"><a class="header-anchor" href="#markdown-image"><span>markdown-image</span></a></h1>
<NpmBadge package="@vuepress/plugin-markdown-image" /><p>向你的 Markdown 图像添加附加功能。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-markdown-image@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> markdownImagePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-markdown-image'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">markdownImagePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 启用 figure</span></span>
<span class="line">      figure<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 启用图片懒加载</span></span>
<span class="line">      lazyload<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 启用图片标记</span></span>
<span class="line">      mark<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 启用图片大小</span></span>
<span class="line">      size<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h2>
<h3 id="图片懒加载" tabindex="-1"><a class="header-anchor" href="#图片懒加载"><span>图片懒加载</span></a></h3>
<p>插件会通过原生 HTML5 功能启用图片的延迟加载，此功能仅在 <a href="https://caniuse.com/loading-lazy-attr" target="_blank" rel="noopener noreferrer">支持 loading=lazy 属性</a> 的浏览器生效。</p>
<h3 id="图片-id-标记" tabindex="-1"><a class="header-anchor" href="#图片-id-标记"><span>图片 ID 标记</span></a></h3>
<p>当你在插件选项中设置 <code v-pre>mark: true</code> 时，你可以通过 <code v-pre>#light</code> 和 <code v-pre>#dark</code> 标记图片，使得图片只在特定的模式显示。</p>
<VPToggleColorModeButton /> (尝试切换主题)<p><img src="/images/icon/github-light.svg" alt="GitHub Light" data-mode="darkmode-only">
<img src="/images/icon/github-dark.svg" alt="GitHub Dark" data-mode="lightmode-only"></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">GitHub Light</span>](<span class="token url">/images/icon/github-light.svg#dark</span>)</span></span>
<span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">GitHub Dark</span>](<span class="token url">/images/icon/github-dark.svg#light</span>)</span></span>
<span class="line"></span></code></pre>
</div><h4 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h4>
<p>你可以将对象传递给 <code v-pre>mark</code> 以配置 ID 标记，可用选项如下：</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ImageMarkOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** 仅限日间模式的 ID */</span></span>
<span class="line">  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token doc-comment comment">/** 仅限夜间模式的 ID */</span></span>
<span class="line">  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="图片尺寸" tabindex="-1"><a class="header-anchor" href="#图片尺寸"><span>图片尺寸</span></a></h3>
<p>当你在插件选项中设置 <code v-pre>size: true</code> 时，可以使用 <code v-pre>=widthxheight</code> 指定图像大小。</p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line">![Alt](/example.png =200x300)</span>
<span class="line"></span>
<span class="line">![Alt](/example.jpg "图片标题" =200x)</span>
<span class="line">![Alt](/example.bmp =x300)</span>
<span class="line"></span></code></pre>
</div><p>上面的 Markdown 将被解析为:</p>
<div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/example.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/example.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片标题<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/example.bmp<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
</div><h3 id="图片展示" tabindex="-1"><a class="header-anchor" href="#图片展示"><span>图片展示</span></a></h3>
<p>有时，你可能希望为图像添加描述，并将其单独展示在上下文中，在这种情况下，你应该在插件选项中设置 <code v-pre>figure: true</code>。</p>
<p>这样当你单独将图片至于一行 (也可同时嵌套链接)，图像将显示为 <code v-pre>&lt;figure&gt;</code> ，标题或图片替代文字将显示为 <code v-pre>&lt;figcaption&gt;</code>。</p>
<figure><img src="/favicon.ico" alt="VuePress 图标" tabindex="0"><figcaption>VuePress 图标</figcaption></figure>
<figure><a href="https://vuejs.press/" target="_blank" rel="noopener noreferrer"><img src="/favicon.ico" alt="VuePress 图标" tabindex="0"></a><figcaption>VuePress 图标</figcaption></figure>
<figure><img src="/favicon.ico" alt="VuePress 图标" tabindex="0"><figcaption>VuePress 图标</figcaption></figure>
<figure><a href="https://vuejs.press/" target="_blank" rel="noopener noreferrer"><img src="/favicon.ico" alt="VuePress 图标" tabindex="0"></a><figcaption>VuePress 图标</figcaption></figure>
<figure><img src="https://vuejs.press/images/hero.png" alt="VuePress 图标" width="300" height="300" tabindex="0"><figcaption>VuePress 图标</figcaption></figure>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress 图标</span>](<span class="token url">/favicon.ico</span>)</span></span>
<span class="line"></span>
<span class="line"><span class="token url">[<span class="token content">![VuePress 图标</span>](<span class="token url">/favicon.ico</span>)</span>](https://vuejs.press/)</span>
<span class="line"></span>
<span class="line">![VuePress 图标](/favicon.ico 'VuePress 图标')</span>
<span class="line"></span>
<span class="line">[![VuePress 图标](/favicon.ico 'VuePress 图标')](https://vuejs.press/)</span>
<span class="line"></span>
<span class="line">![VuePress 图标](https://vuejs.press/images/hero.png "VuePress 图标" =300x300)</span>
<span class="line"></span></code></pre>
</div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<h3 id="figure" tabindex="-1"><a class="header-anchor" href="#figure"><span>figure</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>详情：是否启用图片 Figure 支持。</li>
</ul>
<h3 id="lazyload" tabindex="-1"><a class="header-anchor" href="#lazyload"><span>lazyload</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>详情：是否使用原生方式懒加载页面图片。</li>
</ul>
<h3 id="imgmark" tabindex="-1"><a class="header-anchor" href="#imgmark"><span>imgMark</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>ImageMarkOptions | boolean</code></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ImageMarkOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** 日间模式的 ID */</span></span>
<span class="line">  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token doc-comment comment">/** 夜间模式的 ID */</span></span>
<span class="line">  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>详情：是否启用图片标注支持</p>
</li>
</ul>
<h3 id="imgsize" tabindex="-1"><a class="header-anchor" href="#imgsize"><span>imgSize</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>详情：是否启用图片尺寸支持。</li>
</ul>
<h3 id="obsidianimgsize" tabindex="-1"><a class="header-anchor" href="#obsidianimgsize"><span>obsidianImgSize</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>详情：是否启用 Obsidian 图片尺寸支持。</li>
</ul>
<h3 id="lightmodeselector" tabindex="-1"><a class="header-anchor" href="#lightmodeselector"><span>lightmodeSelector</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>'html:not(.dark)'</code></li>
<li>详情：日间模式的选择器。</li>
</ul>
<h3 id="darkmodeselector" tabindex="-1"><a class="header-anchor" href="#darkmodeselector"><span>darkmodeSelector</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>'html.dark'</code></li>
<li>详情：夜间模式的选择器。</li>
</ul>
</div></template>


<script setup>
import VPToggleColorModeButton from '@theme/VPToggleColorModeButton.vue'
</script>