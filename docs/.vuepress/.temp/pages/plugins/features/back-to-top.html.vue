<template><div><h1 id="back-to-top" tabindex="-1"><a class="header-anchor" href="#back-to-top"><span>back-to-top</span></a></h1>
<NpmBadge package="@vuepress/plugin-back-to-top" /><p>This plugin will add a <em>back to top</em> button to your site. The button will be displayed in the bottom right corner of the page when scrolling down. By clicking the button, the page will scroll to the top.</p>
<p>This plugin has been integrated into the default theme.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-back-to-top@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> backToTopPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-back-to-top'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">backToTopPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="threshold" tabindex="-1"><a class="header-anchor" href="#threshold"><span>threshold</span></a></h3>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Default: <code v-pre>100</code></li>
<li>Details: Scroll threshold distance to display back to top button (in pixels)</li>
</ul>
<h3 id="progress" tabindex="-1"><a class="header-anchor" href="#progress"><span>progress</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>true</code></li>
<li>Details: Whether display progress bar around icon</li>
</ul>
<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2>
<p>You can customize the style of the <em>back to top</em> button via CSS variables:</p>
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


