<template><div><h1 id="watermark" tabindex="-1"><a class="header-anchor" href="#watermark"><span>watermark</span></a></h1>
<NpmBadge package="@vuepress/plugin-watermark" /><p>将 <a href="https://github.com/zhensherlock/watermark-js-plus" target="_blank" rel="noopener noreferrer">watermark-js-plus</a> 到 VuePress 中。</p>
<p>此插件可在在页面中添加水印，可以选择为 全局页面 或 部分页面添加水印，还可以选择添加 文字水印 或 图片水印。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-watermark@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> watermarkPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-watermark'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">watermarkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<h3 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled"><span>enabled</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean | ((page: Page) =&gt; boolean)</code></p>
</li>
<li>
<p>默认值： <code v-pre>false</code></p>
</li>
<li>
<p>详情：</p>
<p>指定哪些页面需要添加水印。</p>
<p>拥有 <code v-pre>true</code> 值的页面将会被添加水印。</p>
</li>
</ul>
<h3 id="watermarkoptions" tabindex="-1"><a class="header-anchor" href="#watermarkoptions"><span>watermarkOptions</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>WatermarkOptions</code></p>
</li>
<li>
<p>默认值： <code v-pre>undefined</code></p>
</li>
<li>
<p>详情： 配置项请参考 <a href="https://zhensherlock.github.io/watermark-js-plus/zh/config/" target="_blank" rel="noopener noreferrer">watermark-js-plus</a>。</p>
</li>
</ul>
<h4 id="watermarkoptions-parent" tabindex="-1"><a class="header-anchor" href="#watermarkoptions-parent"><span>watermarkOptions.parent</span></a></h4>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>body</code></p>
</li>
<li>
<p>详情：添加水印的父元素选择器。</p>
<p>默认插入到 body 中，可以指定插入到页面的某个元素中。</p>
</li>
</ul>
<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>number</code></p>
</li>
<li>
<p>默认值： <code v-pre>500</code></p>
</li>
<li>
<p>详情：添加水印的延时。以毫秒为单位。</p>
<p>延迟时间取决于页面过渡动画时间，可以根据实际情况调整。</p>
<p>如果水印的父元素在切换页面时被重新渲染，那么延迟时间应该比页面过渡时间长一些。</p>
</li>
</ul>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<h3 id="watermark-1" tabindex="-1"><a class="header-anchor" href="#watermark-1"><span>watermark</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>boolean | WatermarkOptions</code></p>
</li>
<li>
<p>详情：</p>
<p>当类型为 <code v-pre>boolean</code> 时，表示是否启用水印。</p>
<p>当类型为 <code v-pre>WatermarkOptions</code> 时，表示当前页面水印配置。</p>
<p>可以参考 <a href="https://zhensherlock.github.io/watermark-js-plus/zh/config/" target="_blank" rel="noopener noreferrer">watermark-js-plus</a> 。</p>
</li>
</ul>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">watermark</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">width</span><span class="token punctuation">:</span> <span class="token number">200</span></span>
<span class="line">  <span class="token key atrule">height</span><span class="token punctuation">:</span> <span class="token number">200</span></span>
<span class="line">  <span class="token key atrule">content</span><span class="token punctuation">:</span> Your content</span>
<span class="line">  <span class="token key atrule">opacity</span><span class="token punctuation">:</span> <span class="token number">0.5</span></span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h2>
<h3 id="definewatermarkconfig-config" tabindex="-1"><a class="header-anchor" href="#definewatermarkconfig-config"><span>defineWatermarkConfig(config)</span></a></h3>
<ul>
<li>类型： <code v-pre>(config: MaybeRefOrGetter&lt;WatermarkOptions&gt;) =&gt; void</code></li>
</ul>
<p>传递给 <a href="https://zhensherlock.github.io/watermark-js-plus/zh/config/" target="_blank" rel="noopener noreferrer">watermark-js-plus</a> 的额外配置。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineWatermarkConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-watermark/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineWatermarkConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 在此设置额外的 watermark 配置</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><p>通常来说，大部分选项应该在 Node 中定义，但存在一些特殊情况。
比如需要在 <strong>深色/浅色 模式</strong> 下控制不同的 水印 透明度、字体颜色等，
或者需要传入如 <code v-pre>onSuccess</code>、<code v-pre>extraDrawFunc</code> 等回调函数。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> isDark <span class="token operator">=</span> <span class="token function">useDarkMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> watermarkConfig <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      fontColor<span class="token operator">:</span> isDark<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">'#fff'</span> <span class="token operator">:</span> <span class="token string">'#000'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">defineWatermarkConfig</span><span class="token punctuation">(</span>watermarkConfig<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


