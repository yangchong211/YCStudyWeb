<template><div><h1 id="umami-analytics" tabindex="-1"><a class="header-anchor" href="#umami-analytics"><span>umami-analytics</span></a></h1>
<NpmBadge package="@vuepress/plugin-umami-analytics" /><p>将 <a href="https://umami.is/" target="_blank" rel="noopener noreferrer">Umami 统计</a> 集成到 VuePress 中。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-umami-analytics@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> umamiAnalyticsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-umami-analytics'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">umamiAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>你可以使用 <a href="https://cloud.umami.is/login" target="_blank" rel="noopener noreferrer">Umami Cloud</a> 或 <a href="https://umami.is/docs/install" target="_blank" rel="noopener noreferrer">自行托管 Umami</a>。</p>
<h3 id="上报事件" tabindex="-1"><a class="header-anchor" href="#上报事件"><span>上报事件</span></a></h3>
<p>插件会在访问和切换页面时自动上报页面浏览事件。</p>
<p>另外，一个全局的 <code v-pre>umami</code> 对象会被挂载到 <code v-pre>window</code> 上，你可以使用 <code v-pre>umami.track</code> 设置 <a href="https://umami.is/docs/tracker-functions" target="_blank" rel="noopener noreferrer">自定义追踪</a> 。</p>
<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3>
<ul>
<li>类型： <code v-pre>string</code></li>
<li>详情： Umami 统计中的网站 ID。</li>
</ul>
<h3 id="link" tabindex="-1"><a class="header-anchor" href="#link"><span>link</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>详情：Umami 统计的脚本链接</li>
</ul>
<h3 id="autotrack" tabindex="-1"><a class="header-anchor" href="#autotrack"><span>autoTrack</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>默认情况下，Umami 会自动跟踪所有页面浏览量和事件。你可以禁用此行为并使用追踪器功能自行追踪事件。</p>
</li>
</ul>
<h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache"><span>cache</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>缓存数据以提高追踪脚本的性能。</p>
<p>注意：这将使用会话存储，因此您可能需要通知您的用户。</p>
</li>
</ul>
<h3 id="domains" tabindex="-1"><a class="header-anchor" href="#domains"><span>domains</span></a></h3>
<ul>
<li>类型：<code v-pre>string[]</code></li>
<li>详情： 让跟踪器仅在特定的域名上运行。</li>
</ul>
<h3 id="hosturl" tabindex="-1"><a class="header-anchor" href="#hosturl"><span>hostUrl</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>详情：发送数据的位置</li>
</ul>
</div></template>


