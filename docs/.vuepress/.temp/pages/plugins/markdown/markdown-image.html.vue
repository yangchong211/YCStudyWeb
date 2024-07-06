<template><div><h1 id="markdown-image" tabindex="-1"><a class="header-anchor" href="#markdown-image"><span>markdown-image</span></a></h1>
<NpmBadge package="@vuepress/plugin-markdown-image" /><p>Add additional features to your markdown images.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-markdown-image@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> markdownImagePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-markdown-image'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">markdownImagePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// Enable figure</span></span>
<span class="line">      figure<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// Enable image lazyload</span></span>
<span class="line">      lazyload<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// Enable image mark</span></span>
<span class="line">      mark<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// Enable image size</span></span>
<span class="line">      size<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="guide" tabindex="-1"><a class="header-anchor" href="#guide"><span>Guide</span></a></h2>
<h3 id="image-lazyload" tabindex="-1"><a class="header-anchor" href="#image-lazyload"><span>Image Lazyload</span></a></h3>
<p>The plugin will enable image lazyload using native HTML5 features, so only it's only working on browsers which <a href="https://caniuse.com/loading-lazy-attr" target="_blank" rel="noopener noreferrer">support loading=lazy attribute</a>.</p>
<h3 id="image-mark" tabindex="-1"><a class="header-anchor" href="#image-mark"><span>Image Mark</span></a></h3>
<p>When you set <code v-pre>mark: true</code> in plugin options, you can mark pictures by <code v-pre>#light</code> and <code v-pre>#dark</code> suffix to let them be displayed under certain color mode. We support both GitHub's markup and the easy markup .</p>
<VPToggleColorModeButton /> (Try to toggle theme mode)<p><img src="/images/icon/github-light.svg" alt="GitHub Light" data-mode="darkmode-only">
<img src="/images/icon/github-dark.svg" alt="GitHub Dark" data-mode="lightmode-only"></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">GitHub Light</span>](<span class="token url">/images/icon/github-light.svg#dark</span>)</span></span>
<span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">GitHub Dark</span>](<span class="token url">/images/icon/github-dark.svg#light</span>)</span></span>
<span class="line"></span></code></pre>
</div><h4 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced"><span>Advanced</span></a></h4>
<p>You can pass an object to <code v-pre>mark</code> to config ID marks, available options are:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ImageMarkOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** lightmode only IDs */</span></span>
<span class="line">  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token doc-comment comment">/** darkmode only IDs */</span></span>
<span class="line">  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="image-size" tabindex="-1"><a class="header-anchor" href="#image-size"><span>Image Size</span></a></h3>
<p>You can use <code v-pre>=widthxheight</code> to specify the image size when setting <code v-pre>size: true</code> in plugin options.</p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line">![Alt](/example.png =200x300)</span>
<span class="line"></span>
<span class="line">![Alt](/example.jpg "Image title" =200x)</span>
<span class="line">![Alt](/example.bmp =x300)</span>
<span class="line"></span></code></pre>
</div><p>The above Markdown will be parsed as:</p>
<div class="language-html" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/example.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/example.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image title<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/example.bmp<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
</div><h3 id="figure-display" tabindex="-1"><a class="header-anchor" href="#figure-display"><span>Figure Display</span></a></h3>
<p>Sometimes, you may want to add a description with image and place it between contents, in this case you should set <code v-pre>figure: true</code> in plugin options.</p>
<p>If the image is standalone in a line, wrapped or not wrapped by link, it will be displayed as <code v-pre>&lt;figure&gt;</code> and title (or alt) will be displayed as <code v-pre>&lt;figcaption&gt;</code>.</p>
<figure><img src="/favicon.ico" alt="VuePress Logo" tabindex="0"><figcaption>VuePress Logo</figcaption></figure>
<figure><a href="https://vuejs.press/" target="_blank" rel="noopener noreferrer"><img src="/favicon.ico" alt="VuePress Logo" tabindex="0"></a><figcaption>VuePress Logo</figcaption></figure>
<figure><img src="/favicon.ico" alt="VuePress Logo" tabindex="0"><figcaption>VuePress Logo</figcaption></figure>
<figure><a href="https://vuejs.press/" target="_blank" rel="noopener noreferrer"><img src="/favicon.ico" alt="VuePress Logo" tabindex="0"></a><figcaption>VuePress Logo</figcaption></figure>
<figure><img src="https://vuejs.press/images/hero.png" alt="VuePress Logo" width="300" height="300" tabindex="0"><figcaption>VuePress Logo</figcaption></figure>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/favicon.ico</span>)</span></span>
<span class="line"></span>
<span class="line"><span class="token url">[<span class="token content">![VuePress Logo</span>](<span class="token url">/favicon.ico</span>)</span>](https://vuejs.press/)</span>
<span class="line"></span>
<span class="line">![VuePress Logo](/favicon.ico 'VuePress Logo')</span>
<span class="line"></span>
<span class="line">[![VuePress Logo](/favicon.ico 'VuePress Logo')](https://vuejs.press/)</span>
<span class="line"></span>
<span class="line">![VuePress Logo](https://vuejs.press/images/hero.png "VuePress Logo" =300x300)</span>
<span class="line"></span></code></pre>
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="figure" tabindex="-1"><a class="header-anchor" href="#figure"><span>figure</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Details: Whether enable figure support.</li>
</ul>
<h3 id="lazyload" tabindex="-1"><a class="header-anchor" href="#lazyload"><span>lazyload</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Details: Whether to lazy load every image in page in native way.</li>
</ul>
<h3 id="mark" tabindex="-1"><a class="header-anchor" href="#mark"><span>mark</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>ImageMarkOptions | boolean</code></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ImageMarkOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** lightmode only IDs */</span></span>
<span class="line">  light<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token doc-comment comment">/** darkmode only IDs */</span></span>
<span class="line">  dark<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Details: Whether enable image mark support.</p>
</li>
</ul>
<h3 id="size" tabindex="-1"><a class="header-anchor" href="#size"><span>size</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Details:
Whether enable image size support.</li>
</ul>
<h3 id="obsidiansize" tabindex="-1"><a class="header-anchor" href="#obsidiansize"><span>obsidianSize</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Details: Whether enable Obsidian image size support.</li>
</ul>
<h3 id="lightmodeselector" tabindex="-1"><a class="header-anchor" href="#lightmodeselector"><span>lightmodeSelector</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>'html:not(.dark)'</code></li>
<li>Details: The selector to detect light mode.</li>
</ul>
<h3 id="darkmodeselector" tabindex="-1"><a class="header-anchor" href="#darkmodeselector"><span>darkmodeSelector</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>'html.dark'</code></li>
<li>Details: The selector to detect dark mode.</li>
</ul>
</div></template>


<script setup>
import VPToggleColorModeButton from '@theme/VPToggleColorModeButton.vue'
</script>