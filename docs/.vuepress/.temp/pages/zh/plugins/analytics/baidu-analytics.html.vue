<template><div><h1 id="baidu-analytics" tabindex="-1"><a class="header-anchor" href="#baidu-analytics"><span>baidu-analytics</span></a></h1>
<NpmBadge package="@vuepress/plugin-baidu-analytics" /><p>将 <a href="https://tongji.baidu.com/" target="_blank" rel="noopener noreferrer">百度统计</a> 集成到 VuePress 中。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>请勿打开<a href="https://tongji.baidu.com/web/help/article?id=324&amp;type=0" target="_blank" rel="noopener noreferrer">百度统计内置的“单页应用数据统计”功能</a>，本插件会正确处理相关逻辑。</p>
</div>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-baidu-analytics@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> baiduAnalyticsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-baidu-analytics'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">baiduAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="上报事件" tabindex="-1"><a class="header-anchor" href="#上报事件"><span>上报事件</span></a></h3>
<p>插件会在访问和切换页面时自动上报页面浏览事件。</p>
<p>另外，一个全局的 <code v-pre>hmt</code> 数组会被挂载到 <code v-pre>window</code> 对象上，你可以使用它进行 <a href="https://tongji.baidu.com/holmes/Analytics/%E6%8A%80%E6%9C%AF%E6%8E%A5%E5%85%A5%E6%8C%87%E5%8D%97/JS%20API/JS%20API%20%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C" target="_blank" rel="noopener noreferrer">自定义事件的上报</a> 。</p>
<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>详情： 百度统计的 ID ，即 <code v-pre>hm.js</code> URL 中的查询参数。</li>
</ul>
</div></template>


