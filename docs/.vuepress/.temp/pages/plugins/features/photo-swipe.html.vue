<template><div><h1 id="photo-swipe" tabindex="-1"><a class="header-anchor" href="#photo-swipe"><span>photo-swipe</span></a></h1>
<NpmBadge package="@vuepress/plugin-photo-swipe" /><p>This plugin will make the pictures in the body of the page enter the preview mode when clicked.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-photo-swipe@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> photoSwipePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-photo-swipe'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">photoSwipePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>In preview mode, you can:</p>
<ul>
<li>Swipe left and right to preview other pictures on the page in order</li>
<li>View the description of the picture</li>
<li>Zoom in and zoom out the picture</li>
<li>View pictures in fullscreen</li>
<li>Download pictures</li>
<li>Share pictures</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>Besides clicking &quot;×&quot; in the upper right corner to exit the preview mode, scrolling up and down more than a certain distance will also exit preview mode.</li>
<li>On mobile devices, or using the PC trackpad, you can use pan and zoom gestures to pan and zoom in the preview mode.</li>
</ul>
</div>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>selector</span></a></h3>
<ul>
<li>Type: <code v-pre>string | string[]</code></li>
<li>Default: <code v-pre>&quot;.theme-default-content :not(a) &gt; img:not([no-view])&quot;</code></li>
<li>Details: Image selector</li>
</ul>
<h3 id="download" tabindex="-1"><a class="header-anchor" href="#download"><span>download</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>true</code></li>
<li>Details: Whether to show the download button.</li>
</ul>
<h3 id="fullscreen" tabindex="-1"><a class="header-anchor" href="#fullscreen"><span>fullscreen</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>true</code></li>
<li>Details: Whether to show the fullscreen button.</li>
</ul>
<h3 id="scrolltoclose" tabindex="-1"><a class="header-anchor" href="#scrolltoclose"><span>scrollToClose</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>true</code></li>
<li>Details: Whether close the current image when scrolling.</li>
</ul>
<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>800</code></p>
</li>
<li>
<p>Details:</p>
<p>The delay of operating dom, in ms.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If the theme you are using has a switching animation, it is recommended to configure this option to <code v-pre>Switch animation duration + 200</code>.</p>
</div>
</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>PhotoSwipePluginLocaleConfig</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">PhotoSwipePluginLocaleData</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Close button label text</span>
<span class="line">   */</span></span>
<span class="line">  close<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Full screen button label text</span>
<span class="line">   */</span></span>
<span class="line">  fullscreen<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Share button label text</span>
<span class="line">   */</span></span>
<span class="line">  share<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Zoom button label text</span>
<span class="line">   */</span></span>
<span class="line">  zoom<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Previous image button label text</span>
<span class="line">   */</span></span>
<span class="line">  prev<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Next image button label text</span>
<span class="line">   */</span></span>
<span class="line">  next<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Share button config</span>
<span class="line">   */</span></span>
<span class="line">  buttons<span class="token operator">:</span> PhotoSwipeDefaultUI<span class="token punctuation">.</span>ShareButtonData<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">PhotoSwipePluginLocaleConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> PhotoSwipePluginLocaleData</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Details: Locales config for photo-swipe plugin.</p>
</li>
<li>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> photoSwipePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-photo-swipe'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// this is a supported language</span></span>
<span class="line">      lang<span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'/xx/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// the plugin does not support this language</span></span>
<span class="line">      lang<span class="token operator">:</span> <span class="token string">'mm-NN'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">photoSwipePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// Override share label text</span></span>
<span class="line">          share<span class="token operator">:</span> <span class="token string">'Share with friends'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">        <span class="token string-property property">'/xx/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// Complete locale config for `mm-NN` language here</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<details class="custom-container details"><summary>Built-in Supported Languages</summary>
<ul>
<li><strong>Simplified Chinese</strong> (zh-CN)</li>
<li><strong>Traditional Chinese</strong> (zh-TW)</li>
<li><strong>English (United States)</strong> (en-US)</li>
<li><strong>German</strong> (de-DE)</li>
<li><strong>German (Australia)</strong> (de-AT)</li>
<li><strong>Russian</strong> (ru-RU)</li>
<li><strong>Ukrainian</strong> (uk-UA)</li>
<li><strong>Vietnamese</strong> (vi-VN)</li>
<li><strong>Portuguese (Brazil)</strong> (pt-BR)</li>
<li><strong>Polish</strong> (pl-PL)</li>
<li><strong>French</strong> (fr-FR)</li>
<li><strong>Spanish</strong> (es-ES)</li>
<li><strong>Slovak</strong> (sk-SK)</li>
<li><strong>Japanese</strong> (ja-JP)</li>
<li><strong>Turkish</strong> (tr-TR)</li>
<li><strong>Korean</strong> (ko-KR)</li>
<li><strong>Finnish</strong> (fi-FI)</li>
<li><strong>Indonesian</strong> (id-ID)</li>
<li><strong>Dutch</strong> (nl-NL)</li>
</ul>
</details>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<h3 id="photoswipe" tabindex="-1"><a class="header-anchor" href="#photoswipe"><span>photoSwipe</span></a></h3>
<ul>
<li>Type: <code v-pre>string | false</code></li>
<li>Details:</li>
</ul>
<p>Image selector for the current page, or <code v-pre>false</code> to disable photo-swipe in current page.</p>
<h2 id="client-config" tabindex="-1"><a class="header-anchor" href="#client-config"><span>Client Config</span></a></h2>
<h3 id="definephotoswipeconfig" tabindex="-1"><a class="header-anchor" href="#definephotoswipeconfig"><span>definePhotoSwipeConfig</span></a></h3>
<p>Options passed to <a href="http://photoswipe.com/" target="_blank" rel="noopener noreferrer"><code v-pre>photo-swipe</code></a></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/client.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> definePhotoSwipeConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-photo-swipe/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">definePhotoSwipeConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// set photoswipe options here</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2>
<p>You can also call photoswipe with apis.</p>
<p><code v-pre>createPhotoSwipe</code> allows you to programmatically view images links with PhotoSwipe:</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPhotoSwipe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vuepress/plugin-photo-swipe/client"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">state</span><span class="token operator">:</span> PhotoSwipeState <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">openPhotoSwipe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">index</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  state<span class="token operator">?.</span><span class="token function">open</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// create a new photoswipe instance with image links</span></span>
<span class="line">  state<span class="token operator">=</span>  <span class="token keyword">await</span> <span class="token function">createPhotoSwipe</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">'https://exmaple.com/image1.png'</span></span>
<span class="line">      <span class="token string">'https://exmaple.com/image2.png'</span></span>
<span class="line">      <span class="token string">'https://exmaple.com/image3.png'</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// photoswipe options</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  state<span class="token operator">?.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 3<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openPhotoSwipe(i)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>open photo {{ i }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>registerPhotoSwipe</code> allows you to register photoswipe for the given image elements:</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> registerPhotoSwipe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-photo-swipe/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line"></span>
<span class="line"><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> images <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// create a new photoswipe instance on image elements</span></span>
<span class="line">  state <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">registerPhotoSwipe</span><span class="token punctuation">(</span>images<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// photoswipe options</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  destroy<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2>
<p>You can customize the style via CSS variables:</p>
<div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--photo-swipe-bullet</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--photo-swipe-bullet-active</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></div></template>


