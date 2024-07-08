<template><div><h1 id="watermark" tabindex="-1"><a class="header-anchor" href="#watermark"><span>watermark</span></a></h1>
<NpmBadge package="@vuepress/plugin-watermark" /><p>Integrate <a href="https://github.com/zhensherlock/watermark-js-plus" target="_blank" rel="noopener noreferrer">watermark-js-plus</a> into VuePress。</p>
<p>This plugin can add watermark to the pages, you can choose between add watermark globally or on specific pages. You can also choose between add text watermark or image watermark.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
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
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled"><span>enabled</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean | ((page: Page) =&gt; boolean)</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify which pages need to have watermarks added.</p>
<p>Pages with <code v-pre>true</code> value will have watermarks added.</p>
</li>
</ul>
<h3 id="watermarkoptions" tabindex="-1"><a class="header-anchor" href="#watermarkoptions"><span>watermarkOptions</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>WatermarkOptions</code></p>
</li>
<li>
<p>Default: <code v-pre>undefined</code></p>
</li>
<li>
<p>Details: Please refer to the <a href="https://zhensherlock.github.io/watermark-js-plus/zh/config/" target="_blank" rel="noopener noreferrer">watermark-js-plus</a> configuration options.</p>
</li>
</ul>
<h4 id="watermarkoptions-parent" tabindex="-1"><a class="header-anchor" href="#watermarkoptions-parent"><span>watermarkOptions.parent</span></a></h4>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>body</code></p>
</li>
<li>
<p>Details: Parent element selector for adding watermark.</p>
<p>By default, it is inserted into the body, but you can specify inserting it into a specific element on the page.</p>
</li>
</ul>
<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>500</code></p>
</li>
<li>
<p>Details: Delay for adding watermarks. In milliseconds.</p>
<p>The delay time depends on the duration of the page transition animation and can be adjusted according to the actual situation.</p>
<p>If the parent element of the watermark is re-rendered when switching pages, the delay time should be slightly longer than the page transition time.</p>
</li>
</ul>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<h3 id="watermark-1" tabindex="-1"><a class="header-anchor" href="#watermark-1"><span>watermark</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean | WatermarkOptions</code></p>
</li>
<li>
<p>Details:</p>
<p>When the type is <code v-pre>boolean</code>, it indicates whether the watermark is enabled.</p>
<p>When the type is <code v-pre>WatermarkOptions</code>, it represents the current page's watermark configuration.</p>
<p>You can refer to <a href="https://zhensherlock.github.io/watermark-js-plus/zh/config/" target="_blank" rel="noopener noreferrer">watermark-js-plus</a>.</p>
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
</div><h2 id="client-config" tabindex="-1"><a class="header-anchor" href="#client-config"><span>Client Config</span></a></h2>
<h3 id="definewatermarkconfig-config" tabindex="-1"><a class="header-anchor" href="#definewatermarkconfig-config"><span>defineWatermarkConfig(config)</span></a></h3>
<ul>
<li>Type: <code v-pre>(config: MaybeRefOrGetter&lt;WatermarkOptions&gt;) =&gt; void</code></li>
</ul>
<p>Additional configuration passed to <a href="https://zhensherlock.github.io/watermark-js-plus/en/config/" target="_blank" rel="noopener noreferrer">watermark-js-plus</a>.</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineWatermarkConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-watermark/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineWatermarkConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Set up additional watermark configurations here.</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><p>In most cases, the majority of options should be defined in Node,
but there are some special situations. For example,
it may be necessary to control different watermark opacities, font colors,
etc., in <strong>dark/light mode</strong> , or to pass in callbacks such as <code v-pre>onSuccess</code>, <code v-pre>extraDrawFunc</code>, and so on.</p>
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


