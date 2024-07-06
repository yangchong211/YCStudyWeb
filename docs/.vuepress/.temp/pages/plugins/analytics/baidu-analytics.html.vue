<template><div><h1 id="baidu-analytics" tabindex="-1"><a class="header-anchor" href="#baidu-analytics"><span>baidu-analytics</span></a></h1>
<NpmBadge package="@vuepress/plugin-baidu-analytics" /><p>Integrate <a href="https://tongji.baidu.com/" target="_blank" rel="noopener noreferrer">Baidu Analytics</a> into VuePress.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Do not enable <a href="https://tongji.baidu.com/web/help/article?id=324&amp;type=0" target="_blank" rel="noopener noreferrer">SPA mode in Baidu Analytics</a>. The plugin will report page view events correctly.</p>
</div>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-baidu-analytics@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> baiduAnalyticsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-baidu-analytics'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">baiduAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="reporting-events" tabindex="-1"><a class="header-anchor" href="#reporting-events"><span>Reporting Events</span></a></h3>
<p>The plugin will automatically report page view events when visiting and switching pages.</p>
<p>Besides, a global <code v-pre>hmt</code> array is available on the <code v-pre>window</code> object, and you can use it for <a href="https://tongji.baidu.com/holmes/Analytics/%E6%8A%80%E6%9C%AF%E6%8E%A5%E5%85%A5%E6%8C%87%E5%8D%97/JS%20API/JS%20API%20%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C" target="_blank" rel="noopener noreferrer">custom events reporting</a>.</p>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details: The ID of Baidu Analytics, which is the query of <code v-pre>hm.js</code> URL.</p>
</li>
</ul>
</div></template>


