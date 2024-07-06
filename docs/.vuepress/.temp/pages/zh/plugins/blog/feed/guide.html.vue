<template><div><h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h1>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>插件可为你生成以下三种格式的 feed 文件:</p>
<ul>
<li>Atom 1.0</li>
<li>JSON 1.1</li>
<li>RSS 2.0</li>
</ul>
<p>请按照需要生成的格式，在插件选项中设置 <code v-pre>atom</code>, <code v-pre>json</code> 或 <code v-pre>rss</code> 为 <code v-pre>true</code>。</p>
<p>为了正确生成 Feed 链接，你需要在插件选项中设置 <code v-pre>hostname</code>。</p>
<h2 id="可读的预览" tabindex="-1"><a class="header-anchor" href="#可读的预览"><span>可读的预览</span></a></h2>
<p>当你在浏览器中打开 Feed 文件时，我们会通过 xsl 模板将 atom 和 rss feed xml 魔法般地转换为可读的 html。你可以查看本站的 <a href="/zh/atom.xml">atom</a> 和 <a href="/zh/rss.xml">rss</a> feed 作为案例！</p>
<p>如果你想在开发服务器中预览 Feed，你需要在插件选项中设置 <code v-pre>devServer: true</code>。如果你没有使用默认的 <code v-pre>http://localhost:{port}</code>，你还需要设置 <code v-pre>devHostname</code>。</p>
<h2 id="频道设置" tabindex="-1"><a class="header-anchor" href="#频道设置"><span>频道设置</span></a></h2>
<p>你可以通过设置 <code v-pre>channel</code> 选项来自自定义 Feed 频道的各项信息。</p>
<p>我们推荐进行如下设置:</p>
<ul>
<li>将建立 Feed 的日期转换为 ISOString 写入到 <code v-pre>channel.pubDate</code> 中</li>
<li>通过 <code v-pre>channel.ttl</code> 中设置内容的更新周期(单位: 分钟)</li>
<li>通过 <code v-pre>channel.copyright</code> 设置版权信息</li>
<li>通过 <code v-pre>channel.author</code> 设置频道作者。</li>
</ul>
<p>详细的选项及其默认值详见 <RouteLink to="/zh/plugins/blog/feed/channel.html">配置 → 频道设置</RouteLink></p>
<h2 id="feed-生成" tabindex="-1"><a class="header-anchor" href="#feed-生成"><span>Feed 生成</span></a></h2>
<p>默认情况下，所有文章均会被添加至 feed 流。</p>
<p>你可以在 frontmatter 中配置 <code v-pre>feed</code> 和其他选项控制每个页面的 Feed 项目内容，详见 <RouteLink to="/zh/plugins/blog/feed/frontmatter.html">Frontmatter 选项</RouteLink> 了解它们如何被转换。</p>
<p>你可以通过配置插件选项中的 <code v-pre>getter</code> 完全控制 Feed 项目的生成逻辑。 详细的选项及其默认值详见 <RouteLink to="/zh/plugins/blog/feed/getter.html">配置 → Feed 获取器</RouteLink></p>
<h3 id="多语言配置" tabindex="-1"><a class="header-anchor" href="#多语言配置"><span>多语言配置</span></a></h3>
<p>插件会针对每个语言生成单独的 Feed。</p>
<p>你可以通过插件选项中的 <code v-pre>locales</code> 分别对不同语言提供不同的默认设置。</p>
</div></template>


