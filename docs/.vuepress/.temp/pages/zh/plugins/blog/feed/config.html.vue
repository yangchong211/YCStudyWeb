<template><div><h1 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置"><span>插件配置</span></a></h1>
<h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>必填：是</li>
</ul>
<p>部署网站的域名。</p>
<h2 id="atom" tabindex="-1"><a class="header-anchor" href="#atom"><span>atom</span></a></h2>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
</ul>
<p>是否启用 Atom 格式输出。</p>
<h2 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>json</span></a></h2>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
</ul>
<p>是否启用 JSON 格式输出。</p>
<h2 id="rss" tabindex="-1"><a class="header-anchor" href="#rss"><span>rss</span></a></h2>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
</ul>
<p>是否启用 RSS 格式输出。</p>
<h2 id="image" tabindex="-1"><a class="header-anchor" href="#image"><span>image</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
</ul>
<p>一个大的图片，用作 feed 展示。</p>
<h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon"><span>icon</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
</ul>
<p>一个小的图标，显示在订阅列表中。</p>
<h2 id="count" tabindex="-1"><a class="header-anchor" href="#count"><span>count</span></a></h2>
<ul>
<li>类型：<code v-pre>number</code></li>
<li>默认值：<code v-pre>100</code></li>
</ul>
<p>设置 feed 的最大项目数量。在所有页面排序好后，插件会截取前 count 个项目。</p>
<p>如果你的站点文章很多，你应该考虑设置这个选项以减少 feed 文件大小。</p>
<h2 id="preservedelements" tabindex="-1"><a class="header-anchor" href="#preservedelements"><span>preservedElements</span></a></h2>
<ul>
<li>类型：<code v-pre>(RegExp | string)[] | (tagName：string) =&gt; boolean</code></li>
</ul>
<p>应在 Feed 中保留的自定义元素或组件。</p>
<div class="custom-container tip"><p class="custom-container-title">默认情况下，所有未知标签均会被移除。</p>
</div>
<h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>(page: Page)=&gt; boolean</code></p>
</li>
<li>
<p>默认值：</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> frontmatter<span class="token punctuation">,</span> filePathRelative <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">  <span class="token function">Boolean</span><span class="token punctuation">(</span>frontmatter<span class="token punctuation">.</span>feed <span class="token operator">??</span> <span class="token punctuation">(</span>filePathRelative <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>frontmatter<span class="token punctuation">.</span>home<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></li>
</ul>
<p>自定义的过滤函数，用于过滤哪些项目在 feed 中显示。</p>
<h2 id="sorter" tabindex="-1"><a class="header-anchor" href="#sorter"><span>sorter</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>(pageA: Page, pageB: Page)=&gt; number</code></p>
</li>
<li>
<p>默认值：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// dateSorter 来源于 @vuepress/helper</span></span>
<span class="line"><span class="token punctuation">;</span><span class="token punctuation">(</span>pageA<span class="token punctuation">,</span> pageB<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=></span></span>
<span class="line">  <span class="token function">dateSorter</span><span class="token punctuation">(</span></span>
<span class="line">    pageA<span class="token punctuation">.</span>data<span class="token punctuation">.</span>git<span class="token operator">?.</span>createdTime</span>
<span class="line">      <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>pageA<span class="token punctuation">.</span>data<span class="token punctuation">.</span>git<span class="token operator">?.</span>createdTime<span class="token punctuation">)</span></span>
<span class="line">      <span class="token operator">:</span> pageA<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>date<span class="token punctuation">,</span></span>
<span class="line">    pageB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>git<span class="token operator">?.</span>createdTime</span>
<span class="line">      <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>pageB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>git<span class="token operator">?.</span>createdTime<span class="token punctuation">)</span></span>
<span class="line">      <span class="token operator">:</span> pageB<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>date<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>Feed 项目的排序器。</p>
<p>默认的排序行为是通过 Git 的文件添加日期 (需要 <code v-pre>@vuepress/plugin-git</code>)。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>你应该启用 <code v-pre>@vuepress/plugin-git</code> 来获取最新创建的页面作为 feed 项目。否则，feed 项目将按照 VuePress 中页面的默认顺序排序。</p>
</div>
<h2 id="channel" tabindex="-1"><a class="header-anchor" href="#channel"><span>channel</span></a></h2>
<p><code v-pre>channel</code> 选项用于配置 Feed 频道。</p>
<p>可用选项详见 <RouteLink to="/zh/plugins/blog/feed/channel.html">配置 → 频道设置</RouteLink></p>
<h2 id="devserver" tabindex="-1"><a class="header-anchor" href="#devserver"><span>devServer</span></a></h2>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
</ul>
<p>是否在开发服务器中启用</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>由于性能原因，我们不提供热更新。重启开发服务器以同步你的变更。</p>
</div>
<h2 id="devhostname" tabindex="-1"><a class="header-anchor" href="#devhostname"><span>devHostname</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>&quot;http://localhost:${port}&quot;</code></li>
</ul>
<p>开发服务器使用的主机名</p>
<h2 id="atomoutputfilename" tabindex="-1"><a class="header-anchor" href="#atomoutputfilename"><span>atomOutputFilename</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>&quot;atom.xml&quot;</code></li>
</ul>
<p>Atom 格式输出路径，相对于输出路径。</p>
<h2 id="atomxsltemplate" tabindex="-1"><a class="header-anchor" href="#atomxsltemplate"><span>atomXslTemplate</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>@vuepress/plugin-feed/templates/atom.xsl</code> 的内容</li>
</ul>
<p>Atom xsl 模板文件没人陪美国</p>
<h2 id="atomxslfilename" tabindex="-1"><a class="header-anchor" href="#atomxslfilename"><span>atomXslFilename</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>&quot;atom.xsl&quot;</code></li>
</ul>
<p>Atom xsl 输出路径，相对于输出路径。</p>
<h2 id="jsonoutputfilename" tabindex="-1"><a class="header-anchor" href="#jsonoutputfilename"><span>jsonOutputFilename</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>&quot;feed.json&quot;</code></li>
</ul>
<p>JSON 格式输出路径，相对于输出路径。</p>
<h2 id="rssoutputfilename" tabindex="-1"><a class="header-anchor" href="#rssoutputfilename"><span>rssOutputFilename</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>&quot;rss.xml&quot;</code></li>
</ul>
<p>RSS 格式输出路径，相对于输出路径。</p>
<h2 id="rssxsltemplate" tabindex="-1"><a class="header-anchor" href="#rssxsltemplate"><span>rssXslTemplate</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>@vuepress/plugin-feed/templates/rss.xsl</code> 的内容</li>
</ul>
<p>RSS xsl 模板文件内容。</p>
<h2 id="rssxslfilename" tabindex="-1"><a class="header-anchor" href="#rssxslfilename"><span>rssXslFilename</span></a></h2>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>&quot;rss.xsl&quot;</code></li>
</ul>
<p>RSS xsl 输出路径，相对于输出路径。</p>
<h2 id="getter" tabindex="-1"><a class="header-anchor" href="#getter"><span>getter</span></a></h2>
<p>Feed 生成控制器，详见 <RouteLink to="/zh/plugins/blog/feed/getter.html">Feed 生成器</RouteLink>。</p>
<div class="custom-container tip"><p class="custom-container-title">此插件内置了生成器，只有当你想完全控制 feed 生成时才需要设置此选项。</p>
</div>
<h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h2>
<ul>
<li>类型：<code v-pre>Record&lt;string, BaseFeedOptions&gt;</code></li>
</ul>
<p>你可以将它用于每个语言环境的特定选项。</p>
<p>除 <code v-pre>hostname</code> 外，上述任何选项均受支持。</p>
</div></template>


