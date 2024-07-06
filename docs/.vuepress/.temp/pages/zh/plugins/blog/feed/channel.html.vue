<template><div><h1 id="频道设置" tabindex="-1"><a class="header-anchor" href="#频道设置"><span>频道设置</span></a></h1>
<p><code v-pre>channel</code> 插件选项用于配置 feed 的频道。</p>
<h2 id="channel-title" tabindex="-1"><a class="header-anchor" href="#channel-title"><span>channel.title</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>SiteConfig.title</code></li>
</ul>
<p>频道的标题</p>
<h2 id="channel-link" tabindex="-1"><a class="header-anchor" href="#channel-link"><span>channel.link</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：部署的网址 (通过 <code v-pre>options.hostname</code> 和 <code v-pre>context.base</code> 生成)</li>
</ul>
<p>频道地址</p>
<h2 id="channel-description" tabindex="-1"><a class="header-anchor" href="#channel-description"><span>channel.description</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>SiteConfig.description</code></li>
</ul>
<p>频道描述信息</p>
<h2 id="channel-language" tabindex="-1"><a class="header-anchor" href="#channel-language"><span>channel.language</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值:
<ul>
<li><code v-pre>siteConfig.locales['/'].locales</code></li>
<li>如果上述未提供，回退到 <code v-pre>&quot;en-US&quot;</code></li>
</ul>
</li>
</ul>
<p>频道使用的语言</p>
<h2 id="channel-copyright" tabindex="-1"><a class="header-anchor" href="#channel-copyright"><span>channel.copyright</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值:
<ul>
<li>尝试读取 channel 选项中的 <code v-pre>author.name</code> 生成 <code v-pre>Copyright by $author</code></li>
</ul>
</li>
<li>建议自行设置: <strong>是</strong></li>
</ul>
<p>频道版权信息</p>
<h2 id="channel-pubdate" tabindex="-1"><a class="header-anchor" href="#channel-pubdate"><span>channel.pubDate</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code> (需是合法的 Date ISOString)</li>
<li>默认值：每次插件构建时刻</li>
<li>建议自行设置: <strong>是</strong></li>
</ul>
<p>频道内容的发布时间</p>
<h2 id="channel-lastupdated" tabindex="-1"><a class="header-anchor" href="#channel-lastupdated"><span>channel.lastUpdated</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code> (需是合法的 Date ISOString)</li>
<li>默认值：每次插件构建时刻</li>
</ul>
<p>频道内容的上次更新时间</p>
<h2 id="channel-ttl" tabindex="-1"><a class="header-anchor" href="#channel-ttl"><span>channel.ttl</span></a></h2>
<ul>
<li>类型：<code v-pre>number</code></li>
<li>建议自行设置: <strong>是</strong></li>
</ul>
<p>内容有效时间，即获取后保持缓存而不进行新获取的时间</p>
<h2 id="channel-image" tabindex="-1"><a class="header-anchor" href="#channel-image"><span>channel.image</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>建议自行设置: <strong>是</strong></li>
</ul>
<p>这是一个会在频道中使用的图片，建议设置正方形图片、尺寸最好不小于 512×512。</p>
<h2 id="channel-icon" tabindex="-1"><a class="header-anchor" href="#channel-icon"><span>channel.icon</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>建议自行设置: <strong>是</strong></li>
</ul>
<p>一个代表频道的图标，建议设置正方形图片、尺寸最好不小于 128×128，背景色透明。</p>
<h2 id="channel-author" tabindex="-1"><a class="header-anchor" href="#channel-author"><span>channel.author</span></a></h2>
<ul>
<li>类型：<code v-pre>FeedAuthor</code></li>
<li>建议自行设置: <strong>是</strong></li>
</ul>
<p>频道的作者。</p>
<details class="custom-container details"><summary>FeedAuthor 格式</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">FeedAuthor</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** 作者姓名 */</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/** 作者电子邮箱 */</span></span>
<span class="line">  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/** 作者网站 */</span></span>
<span class="line">  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者头像地址</span>
<span class="line">   *</span>
<span class="line">   * 正方形，最好不小于 128×128，透明背景</span>
<span class="line">   */</span></span>
<span class="line">  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="channel-hub" tabindex="-1"><a class="header-anchor" href="#channel-hub"><span>channel.hub</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
</ul>
<p>Websub 的链接。Websub 需要服务器后端，与 VuePress 主旨不符，如无特殊需要忽略即可。</p>
<div class="custom-container tip"><p class="custom-container-title">WebSub</p>
<p>有关信息，详见 <a href="https://w3c.github.io/websub/#subscription-migration" target="_blank" rel="noopener noreferrer">Websub</a>。</p>
</div>
</div></template>


