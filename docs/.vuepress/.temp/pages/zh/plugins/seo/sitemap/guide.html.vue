<template><div><h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h1>
<p>本插件会为你的网站自动生成 Sitemap。为了使插件正常工作，你需要将部署的域名传递给插件的 <code v-pre>hostname</code> 选项。如果你想在开发服务器中预览，请配置 <code v-pre>devServer</code> 选项。</p>
<p>插件会自动根据页面的 Git 的时间戳生成页面的最后更新时间，同时会根据站点的多语言配置声明页面的其他语言版本替代地址。</p>
<h2 id="控制-sitemap-链接" tabindex="-1"><a class="header-anchor" href="#控制-sitemap-链接"><span>控制 Sitemap 链接</span></a></h2>
<p>默认情况下，所有除 404 页面以外的网站链接均会被添加进 Sitemap。</p>
<p>如果你希望在 VuePress 项目页面之外，添加其他页面链接到 Sitemap，请将它们变成数组传入插件的 <code v-pre>extraUrls</code> 选项。</p>
<p>如果你需要排除一些页面路径，你可以将它们变成数组传入到插件的 <code v-pre>excludePaths</code> 选项。你也可以在对应页面的 frontmatter 中，设置 <code v-pre>sitemap</code> 为 <code v-pre>false</code>。</p>
<h2 id="输出位置" tabindex="-1"><a class="header-anchor" href="#输出位置"><span>输出位置</span></a></h2>
<p>你还可以通过插件的 <code v-pre>sitemapFilename</code> 选项控制输出的地址，此地址相对于输出目录，默认为 <code v-pre>sitemap.xml</code>。</p>
<h2 id="更新周期" tabindex="-1"><a class="header-anchor" href="#更新周期"><span>更新周期</span></a></h2>
<p>页面默认的更新周期是 <code v-pre>daily</code> (每天)，如果你希望修改全部的页面周期，请在插件选项中设置 <code v-pre>changefreq</code> 。你也可以在页面的 frontmatter 中设置 <code v-pre>sitemap.changefreq</code>，页面具有更高的优先级。</p>
<p>合法的频率有:</p>
<ul>
<li><code v-pre>&quot;always&quot;</code></li>
<li><code v-pre>&quot;hourly&quot;</code></li>
<li><code v-pre>&quot;daily&quot;</code></li>
<li><code v-pre>&quot;weekly&quot;</code></li>
<li><code v-pre>&quot;monthly&quot;</code></li>
<li><code v-pre>&quot;yearly&quot;</code></li>
<li><code v-pre>&quot;never&quot;</code></li>
</ul>
<h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h2>
<p>你可以在插件中设置 <code v-pre>priority</code> 以提供一个默认值。同时你可以通过 frontmatter 中的 <code v-pre>sitemap.priority</code> 来为每个页面设置优先级。可接受的值为 <code v-pre>0</code> 到 <code v-pre>1</code> 的浮点数。</p>
<h2 id="修改时间获取" tabindex="-1"><a class="header-anchor" href="#修改时间获取"><span>修改时间获取</span></a></h2>
<p>你可以通过插件的 <code v-pre>modifyTimeGetter</code> 来返回一个 ISO 字符串格式的时间，默认会通过 Git 插件生成。</p>
<p>以下是一个基于文件最后修改时间的例子。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// 基于文件最后修改时间</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">modifyTimeGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">,</span> app<span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">    fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>dir<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>filePathRelative<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>mtime<span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><h2 id="sitemap-介绍" tabindex="-1"><a class="header-anchor" href="#sitemap-介绍"><span>Sitemap 介绍</span></a></h2>
<p>网站地图 (Sitemap) 提供搜索引擎优化 (SEO):</p>
<ul>
<li>为搜索引擎爬虫提供可以浏览整个网站的链接；</li>
<li>为搜索引擎爬虫提供一些链接，指向动态页面或者采用其他方法比较难以到达的页面；</li>
<li>如果访问者试图访问网站所在域内并不存在的 URL，那么这个访问者就会被转到“无法找到文件”的错误页面，而网站地图可以作为导航页。</li>
</ul>
<p>网站地图通过使所有页面可被找到来增强搜索引擎优化的效果。</p>
<p>大部分搜索引擎只跟踪页面内有限数量的链接，因此当网站非常大的时候，网站地图对于使搜索引擎和访问者可以访问网站中的所有内容就变得必不可少了。</p>
<p>Sitemaps 是站点管理员向搜索引擎爬虫公布站点可被抓取页面的协议，sitemap 文件内容必须遵循 XML 格式的定义。每个 URL 可以包含更新的周期和时间、URL 在整个站点中的优先级。这样可以让搜索引擎更佳有效的抓取网站内容。</p>
<div class="custom-container warning"><p class="custom-container-title">同步配置 robots.txt</p>
<p>由于 Sitemap 面向搜索引擎，配合此插件使用时，你最好保证你在 <code v-pre>.vuepress/public</code> 文件夹下放置了有效的 <code v-pre>robots.txt</code>，以允许搜索引擎收录。一个最简单的 robots.txt 如下 (允许所有搜索引擎访问所有路径)</p>
<div class="language-txt" data-highlighter="prismjs" data-ext="txt" data-title="txt"><pre v-pre class="language-txt"><code><span class="line">User-agent: *</span>
<span class="line"></span>
<span class="line">Allow: /</span>
<span class="line"></span></code></pre>
</div></div>
</div></template>


