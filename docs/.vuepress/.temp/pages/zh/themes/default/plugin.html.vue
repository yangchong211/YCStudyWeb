<template><div><h1 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置"><span>插件配置</span></a></h1>
<p>你可以通过 <code v-pre>themePlugins</code> 设置默认主题使用的插件。</p>
<p>默认主题使用了一些插件，如果你确实不需要该插件，你可以选择禁用它。在禁用插件之前，请确保你已了解它的用途。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    themePlugins<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 在这里自定义主题插件</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="themeplugins-activeheaderlinks" tabindex="-1"><a class="header-anchor" href="#themeplugins-activeheaderlinks"><span>themePlugins.activeHeaderLinks</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <RouteLink to="/zh/plugins/development/active-header-links.html">@vuepress/plugin-active-header-links</RouteLink> 。</p>
</li>
</ul>
<h2 id="themeplugins-backtotop" tabindex="-1"><a class="header-anchor" href="#themeplugins-backtotop"><span>themePlugins.backToTop</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>BackToTopPluginOptions | boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <RouteLink to="/zh/plugins/features/back-to-top.html">@vuepress/plugin-back-to-top</RouteLink> 。</p>
<p>支持对象格式以作为插件选项。</p>
</li>
</ul>
<h2 id="themeplugins-container" tabindex="-1"><a class="header-anchor" href="#themeplugins-container"><span>themePlugins.container</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>Record&lt;ContainerType, boolean&gt;</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用由 <RouteLink to="/zh/plugins/markdown/markdown-container.html">@vuepress/plugin-markdown-container</RouteLink> 支持的自定义容器。</p>
<p><code v-pre>ContainerType</code> 类型为：</p>
<ul>
<li><code v-pre>tip</code></li>
<li><code v-pre>warning</code></li>
<li><code v-pre>danger</code></li>
<li><code v-pre>details</code></li>
<li><code v-pre>codeGroup</code></li>
<li><code v-pre>codeGroupItem</code></li>
</ul>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/themes/default/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">默认主题 &gt; Markdown &gt; 自定义容器</RouteLink></li>
</ul>
</li>
</ul>
<h2 id="themeplugins-copycode" tabindex="-1"><a class="header-anchor" href="#themeplugins-copycode"><span>themePlugins.copyCode</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>CopyCodePluginOptions | boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <RouteLink to="/zh/plugins/features/copy-code.html">@vuepress/plugin-copy-code</RouteLink> 。</p>
<p>支持对象格式以作为插件选项。</p>
</li>
</ul>
<h2 id="themeplugins-git" tabindex="-1"><a class="header-anchor" href="#themeplugins-git"><span>themePlugins.git</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <RouteLink to="/zh/plugins/development/git.html">@vuepress/plugin-git</RouteLink> 。</p>
</li>
</ul>
<h2 id="themeplugins-links-check" tabindex="-1"><a class="header-anchor" href="#themeplugins-links-check"><span>themePlugins.links-check</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <RouteLink to="/zh/plugins/markdown/links-check.html">@vuepress/plugin-links-check</RouteLink> 。</p>
</li>
</ul>
<h2 id="themeplugins-mediumzoom" tabindex="-1"><a class="header-anchor" href="#themeplugins-mediumzoom"><span>themePlugins.mediumZoom</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <RouteLink to="/zh/plugins/features/medium-zoom.html">@vuepress/plugin-medium-zoom</RouteLink> 。</p>
</li>
</ul>
<h2 id="themeplugins-nprogress" tabindex="-1"><a class="header-anchor" href="#themeplugins-nprogress"><span>themePlugins.nprogress</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <RouteLink to="/zh/plugins/features/nprogress.html">@vuepress/plugin-nprogress</RouteLink> 。</p>
</li>
</ul>
<h2 id="themeplugins-prismjs" tabindex="-1"><a class="header-anchor" href="#themeplugins-prismjs"><span>themePlugins.prismjs</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <RouteLink to="/zh/plugins/markdown/prismjs.html">@vuepress/plugin-prismjs</RouteLink> 。</p>
</li>
</ul>
<h2 id="themeplugins-seo" tabindex="-1"><a class="header-anchor" href="#themeplugins-seo"><span>themePlugins.seo</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>SeoPluginOptions | boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <RouteLink to="/zh/plugins/seo/seo/">@vuepress/plugin-seo</RouteLink> 。</p>
<p>支持对象格式以作为插件选项。</p>
</li>
</ul>
<h2 id="themeplugins-sitemap" tabindex="-1"><a class="header-anchor" href="#themeplugins-sitemap"><span>themePlugins.sitemap</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>SitemapPluginOptions | boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <RouteLink to="/zh/plugins/seo/sitemap/">@vuepress/plugin-sitemap</RouteLink> 。</p>
<p>支持对象格式以作为插件选项。</p>
</li>
</ul>
</div></template>


