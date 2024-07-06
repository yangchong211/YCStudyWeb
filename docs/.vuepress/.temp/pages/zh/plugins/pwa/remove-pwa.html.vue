<template><div><h1 id="remove-pwa" tabindex="-1"><a class="header-anchor" href="#remove-pwa"><span>remove-pwa</span></a></h1>
<NpmBadge package="@vuepress/plugin-remove-pwa" /><p>此插件从你的 VuePress 站点中删除任何相关的 Service Worker，因此如果你在启用后任何 PWA 插件后移除它们，用户仍然可以获得更新。</p>
<div class="custom-container tip"><p class="custom-container-title">如果你启用过 PWA，为什么需要这个插件？</p>
<p>PWA 插件，如 <RouteLink to="/zh/plugins/pwa/pwa/"><code v-pre>@vuepress/plugin-pwa</code></RouteLink> 将 Service Worker 注册到你的站点，这将缓存你的站点并使其离线可用。</p>
<p>但是，如果你删除 PWA 插件，先前的 Service Worker 仍将在那里，但它们永远无法获得更新，因为他们永远无法找到要更新的新 Service Worker。 因此，用户将继续使用你网站的旧版本。</p>
<p>要解决这个问题：</p>
<ol>
<li>
<p>一个新的内容为空的 Service Worker 需要生成在原位置。</p>
</li>
<li>
<p>新的 Service Worker 应该尝试删除旧 Service Worker 缓存的内容，然后它应该注销自己。</p>
</li>
</ol>
</div>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-remove-pwa@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> removePwaPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-remove-pwa'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">removePwaPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="cacheprefix" tabindex="-1"><a class="header-anchor" href="#cacheprefix"><span>cachePrefix</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>'workbox'</code></li>
<li>详情：Service worker 的缓存前缀。</li>
</ul>
<h3 id="swlocation" tabindex="-1"><a class="header-anchor" href="#swlocation"><span>swLocation</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值：<code v-pre>'service-worker.js'</code></li>
<li>详情：旧 Service Worker 的位置。</li>
</ul>
</div></template>


