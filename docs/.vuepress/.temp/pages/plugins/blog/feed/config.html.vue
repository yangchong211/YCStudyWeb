<template><div><h1 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config"><span>Plugin Config</span></a></h1>
<h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: Yes</li>
</ul>
<p>The domain name of the deployment site.</p>
<h2 id="atom" tabindex="-1"><a class="header-anchor" href="#atom"><span>atom</span></a></h2>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
</ul>
<p>Whether to output Atom syntax files.</p>
<h2 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>json</span></a></h2>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
</ul>
<p>Whether output JSON syntax files.</p>
<h2 id="rss" tabindex="-1"><a class="header-anchor" href="#rss"><span>rss</span></a></h2>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
</ul>
<p>Whether to output RSS syntax files.</p>
<h2 id="image" tabindex="-1"><a class="header-anchor" href="#image"><span>image</span></a></h2>
<ul>
<li>Type: <code v-pre>string</code></li>
</ul>
<p>A large image/icon of the feed, probably used as banner.</p>
<h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon"><span>icon</span></a></h2>
<ul>
<li>Type: <code v-pre>string</code></li>
</ul>
<p>A small icon of the feed, probably used as favicon.</p>
<h2 id="count" tabindex="-1"><a class="header-anchor" href="#count"><span>count</span></a></h2>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Default: <code v-pre>100</code></li>
</ul>
<p>Set the maximum number of items in the feed. After all pages are sorted, the first <code v-pre>count</code> items will be intercepted.</p>
<p>If your site has a lot of articles, you may consider this option to reduce feed file size.</p>
<h2 id="preservedelements" tabindex="-1"><a class="header-anchor" href="#preservedelements"><span>preservedElements</span></a></h2>
<ul>
<li>Type: <code v-pre>(RegExp | string)[] | (tagName: string) =&gt; boolean</code></li>
</ul>
<p>Custom element or component which should be preserved in feed.</p>
<div class="custom-container tip"><p class="custom-container-title">By default, all unknown tags will be removed.</p>
</div>
<h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>(page: Page)=&gt; boolean</code></p>
</li>
<li>
<p>Default:</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> frontmatter<span class="token punctuation">,</span> filePathRelative <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">  <span class="token function">Boolean</span><span class="token punctuation">(</span>frontmatter<span class="token punctuation">.</span>feed <span class="token operator">??</span> <span class="token punctuation">(</span>filePathRelative <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>frontmatter<span class="token punctuation">.</span>home<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></li>
</ul>
<p>A custom filter function, used to filter feed items.</p>
<h2 id="sorter" tabindex="-1"><a class="header-anchor" href="#sorter"><span>sorter</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>(pageA: Page, pageB: Page)=&gt; number</code></p>
</li>
<li>
<p>Default:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// dateSorter is from @vuepress/helper</span></span>
<span class="line"><span class="token punctuation">;</span><span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=></span></span>
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
<p>Custom sorter function for feed items.</p>
<p>The default sorting behavior is by file adding time coming from git (needs <code v-pre>@vuepress/plugin-git</code>).</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You should enable <code v-pre>@vuepress/plugin-git</code> to get the newest created pages as feed items. Otherwise, the feed items will be sorted by the default order of pages in VuePress.</p>
</div>
<h2 id="channel" tabindex="-1"><a class="header-anchor" href="#channel"><span>channel</span></a></h2>
<p><code v-pre>channel</code> option is used to config <em>Feed Channels</em>.</p>
<p>For available options, please see <RouteLink to="/plugins/blog/feed/channel.html">Config → Channel</RouteLink></p>
<h2 id="devserver" tabindex="-1"><a class="header-anchor" href="#devserver"><span>devServer</span></a></h2>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
</ul>
<p>Whether enabled in devServer.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>For performance reasons, we do not provide hot reload. Reboot your devServer to sync your changes.</p>
</div>
<h2 id="devhostname" tabindex="-1"><a class="header-anchor" href="#devhostname"><span>devHostname</span></a></h2>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&quot;http://localhost:${port}&quot;</code></li>
</ul>
<p>Hostname to use in devServer</p>
<h2 id="atomoutputfilename" tabindex="-1"><a class="header-anchor" href="#atomoutputfilename"><span>atomOutputFilename</span></a></h2>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&quot;atom.xml&quot;</code></li>
</ul>
<p>Atom syntax output filename, relative to dest folder.</p>
<h2 id="atomxsltemplate" tabindex="-1"><a class="header-anchor" href="#atomxsltemplate"><span>atomXslTemplate</span></a></h2>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: Content of <code v-pre>@vuepress/plugin-feed/templates/atom.xsl</code></li>
</ul>
<p>Atom xsl template file content.</p>
<h2 id="atomxslfilename" tabindex="-1"><a class="header-anchor" href="#atomxslfilename"><span>atomXslFilename</span></a></h2>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&quot;atom.xsl&quot;</code></li>
</ul>
<p>Atom xsl filename, relative to dest folder.</p>
<h2 id="jsonoutputfilename" tabindex="-1"><a class="header-anchor" href="#jsonoutputfilename"><span>jsonOutputFilename</span></a></h2>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&quot;feed.json&quot;</code></li>
</ul>
<p>JSON syntax output filename, relative to dest folder.</p>
<h2 id="rssoutputfilename" tabindex="-1"><a class="header-anchor" href="#rssoutputfilename"><span>rssOutputFilename</span></a></h2>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&quot;rss.xml&quot;</code></li>
</ul>
<p>RSS syntax output filename, relative to dest folder.</p>
<h2 id="rssxsltemplate" tabindex="-1"><a class="header-anchor" href="#rssxsltemplate"><span>rssXslTemplate</span></a></h2>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: Content of <code v-pre>@vuepress/plugin-feed/templates/rss.xsl</code></li>
</ul>
<p>RSS xsl template file content.</p>
<h2 id="rssxslfilename" tabindex="-1"><a class="header-anchor" href="#rssxslfilename"><span>rssXslFilename</span></a></h2>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&quot;rss.xsl&quot;</code></li>
</ul>
<p>RSS syntax xsl filename, relative to dest folder.</p>
<h2 id="getter" tabindex="-1"><a class="header-anchor" href="#getter"><span>getter</span></a></h2>
<p>Feed generation controller, see <RouteLink to="/plugins/blog/feed/getter.html">Feed Getter</RouteLink>.</p>
<div class="custom-container tip"><p class="custom-container-title">The plugin has a built-in getter, only set this if you want full control of feed generation.</p>
</div>
<h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h2>
<ul>
<li>Type: <code v-pre>Record&lt;string, BaseFeedOptions&gt;</code></li>
</ul>
<p>You can use it to specific options for each locale.</p>
<p>Any options above are supported except <code v-pre>hostname</code>.</p>
</div></template>


