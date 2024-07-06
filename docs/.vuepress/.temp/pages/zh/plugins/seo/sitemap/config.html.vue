<template><div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1>
<h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>必填：是</p>
</li>
<li>
<p>详情：</p>
<p>当前网站部署到的域名，插件需要此选项才能工作。</p>
</li>
</ul>
<h2 id="extraurls" tabindex="-1"><a class="header-anchor" href="#extraurls"><span>extraUrls</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string[]</code></p>
</li>
<li>
<p>详情：</p>
<p>需要额外包含的网址。</p>
<p>如果你有一些不包含在 VuePress 路由中的链接 (如: 存放在 public 文件夹下的页面或其他插件或工具直接生成的页面)，你可能需要设置此项。</p>
</li>
<li>
<p>示例：<code v-pre>['/about.html', '/api/']</code></p>
</li>
</ul>
<h2 id="excludepaths" tabindex="-1"><a class="header-anchor" href="#excludepaths"><span>excludePaths</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string[]</code></p>
</li>
<li>
<p>默认值：<code v-pre>['/404.html']</code></p>
</li>
<li>
<p>详情：</p>
<p>不需要收录的页面路径，请以绝对路径开头。</p>
<p>默认情况下 VuePress 自动生成的所有路径 (除 404 页) 都会被添加进 Sitemap。</p>
</li>
</ul>
<h2 id="devserver" tabindex="-1"><a class="header-anchor" href="#devserver"><span>devServer</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>false</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在开发服务器中启用</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>由于性能原因，我们不提供热更新。重启开发服务器以同步你的变更。</p>
</div>
<h2 id="devhostname" tabindex="-1"><a class="header-anchor" href="#devhostname"><span>devHostname</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>默认值：<code v-pre>&quot;http://localhost:${port}&quot;</code></p>
</li>
<li>
<p>详情：</p>
<p>开发服务器使用的主机名</p>
</li>
</ul>
<h2 id="sitemapfilename" tabindex="-1"><a class="header-anchor" href="#sitemapfilename"><span>sitemapFilename</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>默认值：<code v-pre>&quot;sitemap.xml&quot;</code></p>
</li>
<li>
<p>详情：</p>
<p>输出的文件名，相对于输出目录。</p>
</li>
</ul>
<h2 id="sitemapxslfilename" tabindex="-1"><a class="header-anchor" href="#sitemapxslfilename"><span>sitemapXSLFilename</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>默认值：<code v-pre>&quot;sitemap.xsl&quot;</code></p>
</li>
<li>
<p>详情：</p>
<p>输出的 xsl 文件名，相对于输出目录。</p>
</li>
</ul>
<h2 id="sitemapxsltemplate" tabindex="-1"><a class="header-anchor" href="#sitemapxsltemplate"><span>sitemapXSLTemplate</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>默认值：<code v-pre>&quot;@vuepress-plugin/sitemap/templates/sitemap.xsl&quot;</code></p>
</li>
<li>
<p>详情：</p>
<p>用作模板的 XSL 文件内容</p>
</li>
</ul>
<h2 id="changefreq" tabindex="-1"><a class="header-anchor" href="#changefreq"><span>changefreq</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>&quot;always&quot; | &quot;hourly&quot; | &quot;daily&quot; | &quot;weekly&quot; | &quot;monthly&quot; | &quot;yearly&quot; | &quot;never&quot;</code></p>
</li>
<li>
<p>默认值：<code v-pre>&quot;daily&quot;</code></p>
</li>
<li>
<p>详情：</p>
<p>页面默认更新频率，会被 Frontmatter 中的 <RouteLink to="/zh/plugins/seo/sitemap/frontmatter.html#sitemap-changefreq">changefreq</RouteLink> 选项覆盖。</p>
</li>
</ul>
<h2 id="priority" tabindex="-1"><a class="header-anchor" href="#priority"><span>priority</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>number</code></p>
</li>
<li>
<p>默认值：<code v-pre>0.5</code></p>
</li>
<li>
<p>详情：</p>
<p>页面优先级，范围 <code v-pre>0</code> 至 <code v-pre>1</code>。</p>
</li>
</ul>
<h2 id="modifytimegetter" tabindex="-1"><a class="header-anchor" href="#modifytimegetter"><span>modifyTimeGetter</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>(page: Page, app: App) =&gt; string</code></p>
</li>
<li>
<p>详情：</p>
<p>最后修改事件的获得器，需要返回一个 ISO 字符形式的时间，默认会自动通过 Git 插件生成。</p>
</li>
</ul>
</div></template>


