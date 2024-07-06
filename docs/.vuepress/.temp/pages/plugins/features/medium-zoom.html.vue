<template><div><h1 id="medium-zoom" tabindex="-1"><a class="header-anchor" href="#medium-zoom"><span>medium-zoom</span></a></h1>
<NpmBadge package="@vuepress/plugin-medium-zoom" /><p>Integrate <a href="https://github.com/francoischalifour/medium-zoom#readme" target="_blank" rel="noopener noreferrer">medium-zoom</a> into VuePress, which can provide the ability to zoom images.</p>
<p>This plugin has been integrated into the default theme.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-medium-zoom@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mediumZoomPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-medium-zoom'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">mediumZoomPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>selector</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>':not(a) &gt; img'</code></p>
</li>
<li>
<p>Details:</p>
<p>Selector of zoomable images.</p>
<p>By default this plugin will make all images zoomable except those inside <code v-pre>&lt;a&gt;</code> tags.</p>
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
<p>Details:</p>
<p>Delay in milliseconds.</p>
<p>After navigating to a new page, this plugin will make images zoomable with a delay.</p>
</li>
</ul>
<h3 id="zoomoptions" tabindex="-1"><a class="header-anchor" href="#zoomoptions"><span>zoomOptions</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>Object</code></p>
</li>
<li>
<p>Details:</p>
<p>Options for medium-zoom.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><a href="https://github.com/francoischalifour/medium-zoom#options" target="_blank" rel="noopener noreferrer">medium-zoom &gt; Options</a></li>
</ul>
</li>
</ul>
<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2>
<p>You can customize most of the zoom styles via <a href="#zoomoptions">zoomOptions</a>, while this plugin also provides some CSS variables for additional customization:</p>
<div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--medium-zoom-z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--medium-zoom-bg-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--medium-zoom-opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api"><span>Composition API</span></a></h2>
<h3 id="usemediumzoom" tabindex="-1"><a class="header-anchor" href="#usemediumzoom"><span>useMediumZoom</span></a></h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the <code v-pre>Zoom</code> instance that used by this plugin, so that you can use the instance <a href="https://github.com/francoischalifour/medium-zoom#methods" target="_blank" rel="noopener noreferrer">methods</a> directly.</p>
<p>This plugin will make images zoomable after navigating to current page. But if you are going to add new images dynamically, you may need this method to make those new images zoomable, too.</p>
<p>This plugin adds an extra <code v-pre>refresh</code> method on the <code v-pre>Zoom</code> instance, which will call <code v-pre>zoom.detach()</code> then <code v-pre>zoom.attach()</code> with the <a href="#selector">selector</a> as the default parameter. It will help you to refresh the zoomable images for current page.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useMediumZoom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-medium-zoom/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">useMediumZoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ... do something to add new images in current page</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// then you may need to call `refresh` manually to make those new images zoomable</span></span>
<span class="line">    <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      zoom<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


