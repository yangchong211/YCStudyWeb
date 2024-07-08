<template><div><h1 id="plugins-config" tabindex="-1"><a class="header-anchor" href="#plugins-config"><span>Plugins Config</span></a></h1>
<p>You can configure the plugins that used by default theme with <code v-pre>themePlugins</code>.</p>
<p>Default theme is using some plugins by default. You can disable a plugin if you really do not want to use it. Make sure you understand what the plugin is for before disabling it.</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    themePlugins<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// customize theme plugins here</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="themeplugins-activeheaderlinks" tabindex="-1"><a class="header-anchor" href="#themeplugins-activeheaderlinks"><span>themePlugins.activeHeaderLinks</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable <RouteLink to="/plugins/development/active-header-links.html">@vuepress/plugin-active-header-links</RouteLink> or not.</p>
</li>
</ul>
<h2 id="themeplugins-backtotop" tabindex="-1"><a class="header-anchor" href="#themeplugins-backtotop"><span>themePlugins.backToTop</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>BackToTopPluginOptions | boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable <RouteLink to="/plugins/features/back-to-top.html">@vuepress/plugin-back-to-top</RouteLink> or not.</p>
<p>Object value is supported as plugin options.</p>
</li>
</ul>
<h2 id="themeplugins-container" tabindex="-1"><a class="header-anchor" href="#themeplugins-container"><span>themePlugins.container</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>Record&lt;ContainerType, boolean&gt;</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable custom containers that powered by <RouteLink to="/plugins/markdown/markdown-container.html">@vuepress/plugin-markdown-container</RouteLink> or not.</p>
<p><code v-pre>ContainerType</code> type is:</p>
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
<p>Also see:</p>
<ul>
<li><RouteLink to="/themes/default/markdown.html#custom-containers">Default Theme &gt; Markdown &gt; Custom Containers</RouteLink></li>
</ul>
</li>
</ul>
<h2 id="themeplugins-copycode" tabindex="-1"><a class="header-anchor" href="#themeplugins-copycode"><span>themePlugins.copyCode</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>CopyCodePluginOptions | boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable <RouteLink to="/plugins/features/copy-code.html">@vuepress/plugin-copy-code</RouteLink> or not.</p>
<p>Object value is supported as plugin options.</p>
</li>
</ul>
<h2 id="themeplugins-git" tabindex="-1"><a class="header-anchor" href="#themeplugins-git"><span>themePlugins.git</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable <RouteLink to="/plugins/development/git.html">@vuepress/plugin-git</RouteLink> or not.</p>
</li>
</ul>
<h2 id="themeplugins-linkscheck" tabindex="-1"><a class="header-anchor" href="#themeplugins-linkscheck"><span>themePlugins.linksCheck</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>LinksCheckPluginOptions | boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable <RouteLink to="/plugins/markdown/links-check.html">@vuepress/plugin-links-check</RouteLink> or not.</p>
</li>
</ul>
<h2 id="themeplugins-mediumzoom" tabindex="-1"><a class="header-anchor" href="#themeplugins-mediumzoom"><span>themePlugins.mediumZoom</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable <RouteLink to="/plugins/features/medium-zoom.html">@vuepress/plugin-medium-zoom</RouteLink> or not.</p>
</li>
</ul>
<h2 id="themeplugins-nprogress" tabindex="-1"><a class="header-anchor" href="#themeplugins-nprogress"><span>themePlugins.nprogress</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable <RouteLink to="/plugins/features/nprogress.html">@vuepress/plugin-nprogress</RouteLink> or not.</p>
</li>
</ul>
<h2 id="themeplugins-prismjs" tabindex="-1"><a class="header-anchor" href="#themeplugins-prismjs"><span>themePlugins.prismjs</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable <RouteLink to="/plugins/markdown/prismjs.html">@vuepress/plugin-prismjs</RouteLink> or not.</p>
</li>
</ul>
<h2 id="themeplugins-seo" tabindex="-1"><a class="header-anchor" href="#themeplugins-seo"><span>themePlugins.seo</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>SeoPluginOptions | boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable <RouteLink to="/plugins/seo/seo/">@vuepress/plugin-seo</RouteLink> or not.</p>
<p>Object value is supported as plugin options.</p>
</li>
</ul>
<h2 id="themeplugins-sitemap" tabindex="-1"><a class="header-anchor" href="#themeplugins-sitemap"><span>themePlugins.sitemap</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>SitemapPluginOptions | boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable <RouteLink to="/plugins/seo/sitemap/">@vuepress/plugin-sitemap</RouteLink> or not.</p>
<p>Object value is supported as plugin options.</p>
</li>
</ul>
</div></template>


