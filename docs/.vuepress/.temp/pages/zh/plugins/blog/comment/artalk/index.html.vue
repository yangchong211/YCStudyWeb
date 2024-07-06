<template><div><h1 id="artalk" tabindex="-1"><a class="header-anchor" href="#artalk"><span>Artalk</span></a></h1>
<p>Artalk 是一款简洁的自托管评论系统，你可以在服务器上轻松部署并置入前端页面中。</p>
<p>来到你的博客，或是任意位置，放置 Artalk 评论框，让页面具备丰富的社会化功能。</p>
<!-- more -->
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> artalk</span>
<span class="line"></span></code></pre>
</div><h2 id="部署-artalk-服务端" tabindex="-1"><a class="header-anchor" href="#部署-artalk-服务端"><span>部署 Artalk 服务端</span></a></h2>
<p>请参见 <a href="https://artalk.js.org/guide/deploy.html" target="_blank" rel="noopener noreferrer">Artalk 文档</a>。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>请配置 <code v-pre>provider: &quot;Artalk&quot;</code> 并将你的服务端地址传入插件选项中的 <code v-pre>server</code>。</p>
<p>其他的配置项详见 <RouteLink to="/zh/plugins/blog/comment/artalk/config.html">Artalk 配置</RouteLink>。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>插件保留 <code v-pre>el</code> 选项在页面自行插入 Artalk。同时插件会自动根据 VuePress 信息为你自动设置 <code v-pre>pageTitle</code>, <code v-pre>pageKey</code> 和 <code v-pre>site</code> 选项。</p>
</div>
<h2 id="夜间模式" tabindex="-1"><a class="header-anchor" href="#夜间模式"><span>夜间模式</span></a></h2>
<p>为了能使 Artalk 应用正确的主题，你需要通过 <code v-pre>darkmode</code> 属性向 <code v-pre>&lt;CommentService /&gt;</code> 传入一个布尔值，代表当前是否开启夜间模式。</p>
</div></template>


