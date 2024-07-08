<template><div><h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1>
<h2 id="basic-config" tabindex="-1"><a class="header-anchor" href="#basic-config"><span>Basic Config</span></a></h2>
<h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Hostname to be deployed, e.g.: <code v-pre>https://example.com</code></p>
</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>{ [path: string]: Partial&lt;DefaultThemeLocaleData&gt; }</code></p>
</li>
<li>
<p>Default: <code v-pre>{}</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify locales for i18n support.</p>
<p>All the options inside the <a href="#locale-config">Locale Config</a> section can be used in locales.</p>
<p>This option will only take effect in default theme, so don't confuse with <code v-pre>locales</code> in <RouteLink to="/themes/default/config.html#locales">Site Config</RouteLink>.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><a href="https://v2.vuepress.vuejs.org/guide/i18n.html" target="_blank" rel="noopener noreferrer">Guide &gt; I18n</a></li>
</ul>
</li>
</ul>
<h2 id="locale-config" tabindex="-1"><a class="header-anchor" href="#locale-config"><span>Locale Config</span></a></h2>
<p>Config of this section can be used as normal config, and can also be used in the <a href="#locales">locales</a> option.</p>
<h3 id="colormode" tabindex="-1"><a class="header-anchor" href="#colormode"><span>colorMode</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>'auto' | 'light' | 'dark'</code></p>
</li>
<li>
<p>Default: <code v-pre>'auto'</code></p>
</li>
<li>
<p>Details:</p>
<p>Default color mode.</p>
<p>If set to <code v-pre>'auto'</code>, the initial color mode will be automatically set according to <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank" rel="noopener noreferrer">prefers-color-scheme</a>.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><a href="#colormodeswitch">Default Theme &gt; Config &gt; colorModeSwitch</a></li>
</ul>
</li>
</ul>
<h3 id="colormodeswitch" tabindex="-1"><a class="header-anchor" href="#colormodeswitch"><span>colorModeSwitch</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable color mode switching or not.</p>
<p>If set to <code v-pre>true</code>, a button to switch color mode will be displayed in the navbar.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><a href="#colormode">Default Theme &gt; Config &gt; colorMode</a></li>
<li><RouteLink to="/themes/default/locale.html#togglecolormode">Default Theme &gt; Locale Config &gt; toggleColorMode</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon"><span>externalLinkIcon</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Show external link icon on external links or not.</p>
</li>
</ul>
<h3 id="home" tabindex="-1"><a class="header-anchor" href="#home"><span>home</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>/</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the path of the homepage.</p>
<p>This will be used for:</p>
<ul>
<li>the logo link of the navbar</li>
<li>the <em>back to home</em> link of the 404 page</li>
</ul>
</li>
</ul>
<h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar"><span>navbar</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>false | NavbarOptions</code></p>
</li>
<li>
<p>Default: <code v-pre>[]</code></p>
</li>
<li>
<p>Details:</p>
<p>Configuration of navbar.</p>
<p>Set to <code v-pre>false</code> to disable navbar.</p>
<p>To configure the navbar items, you can set it to a <em>navbar array</em>, each item of which could be a <code v-pre>NavbarLink</code> object, a <code v-pre>NavbarGroup</code> object, or a string:</p>
<ul>
<li>A <code v-pre>NavbarLink</code> object should have a <code v-pre>text</code> field and a <code v-pre>link</code> field, could have an optional <code v-pre>activeMatch</code> field.</li>
<li>A <code v-pre>NavbarGroup</code> object should have a <code v-pre>text</code> field and a <code v-pre>children</code> field, could have an optional <code v-pre>prefix</code> field. The <code v-pre>children</code> field should be a <em>navbar array</em> too, and <code v-pre>prefix</code> will be prepended before every link inside it.</li>
<li>A string should be the path to the target page file. It will be converted to a <code v-pre>NavbarLink</code> object, using the page title as <code v-pre>text</code>, and the page route path as <code v-pre>link</code>.</li>
</ul>
</li>
<li>
<p>Example 1:</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    navbar<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// NavbarLink</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">'Foo'</span><span class="token punctuation">,</span></span>
<span class="line">        link<span class="token operator">:</span> <span class="token string">'/foo/'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// NavbarGroup</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">'Group'</span><span class="token punctuation">,</span></span>
<span class="line">        prefix<span class="token operator">:</span> <span class="token string">'/group/'</span><span class="token punctuation">,</span></span>
<span class="line">        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'foo.md'</span><span class="token punctuation">,</span> <span class="token string">'bar.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// string - page file path</span></span>
<span class="line">      <span class="token string">'/bar/README.md'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Example 2:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    navbar<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// nested group - max depth is 2</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">'Group'</span><span class="token punctuation">,</span></span>
<span class="line">        children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            text<span class="token operator">:</span> <span class="token string">'SubGroup1'</span><span class="token punctuation">,</span></span>
<span class="line">            prefix<span class="token operator">:</span> <span class="token string">'sub1/'</span><span class="token punctuation">,</span></span>
<span class="line">            children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">              <span class="token string">'foo.md'</span><span class="token punctuation">,</span> <span class="token comment">// resolved as `/guide/group/sub1/bar.md`</span></span>
<span class="line">              <span class="token string">'bar.md'</span><span class="token punctuation">,</span> <span class="token comment">// resolved as `/guide/group/sub1/bar.md`</span></span>
<span class="line"></span>
<span class="line">              <span class="token comment">// an external link</span></span>
<span class="line">              <span class="token punctuation">{</span></span>
<span class="line">                text<span class="token operator">:</span> <span class="token string">'Example'</span><span class="token punctuation">,</span></span>
<span class="line">                link<span class="token operator">:</span> <span class="token string">'https://example.com'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            text<span class="token operator">:</span> <span class="token string">'SubGroup2'</span><span class="token punctuation">,</span></span>
<span class="line">            prefix<span class="token operator">:</span> <span class="token string">'sub2/'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// for project links, .md or .html suffix is optional</span></span>
<span class="line">            children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">              <span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token comment">// resolved as `/guide/group/sub2/foo.md`</span></span>
<span class="line">              <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token comment">// resolved as `/guide/group/sub2/bar.md`</span></span>
<span class="line"></span>
<span class="line">              <span class="token comment">// link not inside SubGroup2</span></span>
<span class="line">              <span class="token string">'/baz/'</span><span class="token punctuation">,</span> <span class="token comment">// resolved as `/baz/README.md`</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// control when should the item be active</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">'Group 2'</span><span class="token punctuation">,</span></span>
<span class="line">        children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            text<span class="token operator">:</span> <span class="token string">'Always active'</span><span class="token punctuation">,</span></span>
<span class="line">            link<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// this item will always be active</span></span>
<span class="line">            activeMatch<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            text<span class="token operator">:</span> <span class="token string">'Active on /foo/'</span><span class="token punctuation">,</span></span>
<span class="line">            link<span class="token operator">:</span> <span class="token string">'/not-foo/'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// this item will be active when current route path starts with /foo/</span></span>
<span class="line">            <span class="token comment">// regular expression is supported</span></span>
<span class="line">            activeMatch<span class="token operator">:</span> <span class="token string">'^/foo/'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logo" tabindex="-1"><a class="header-anchor" href="#logo"><span>logo</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>null | string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the url of logo image.</p>
<p>The logo image will be displayed at the left end of the navbar.</p>
<p>Set to <code v-pre>null</code> to disable logo.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// public file path</span></span>
<span class="line">    logo<span class="token operator">:</span> <span class="token string">'/hero.png'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// url</span></span>
<span class="line">    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>Also see:
<ul>
<li><a href="https://v2.vuepress.vuejs.org/guide/assets.html#public-files" target="_blank" rel="noopener noreferrer">Guide &gt; Assets &gt; Public Files</a></li>
</ul>
</li>
</ul>
<h3 id="logodark" tabindex="-1"><a class="header-anchor" href="#logodark"><span>logoDark</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>null | string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the url of logo image to be used in dark mode.</p>
<p>You can make use of this option if you want to use different logo config in dark mode.</p>
<p>Set to <code v-pre>null</code> to disable logo in dark mode. Omit this option to use <a href="#logo">logo</a> in dark mode.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><a href="#logo">Default Theme &gt; Config &gt; logo</a></li>
<li><a href="#colormode">Default Theme &gt; Config &gt; colorMode</a></li>
</ul>
</li>
</ul>
<h3 id="logoalt" tabindex="-1"><a class="header-anchor" href="#logoalt"><span>logoAlt</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>null | string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the alt text of the logo image.</p>
<p>If not specified, defaults to be the same as the site title.</p>
</li>
</ul>
<h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo"><span>repo</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the repository url of your project.</p>
<p>This will be used as the link of the <em>repository link</em>, which will be displayed as the last item of the navbar.</p>
</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// If you set it in the form of `organization/repository`</span></span>
<span class="line">    <span class="token comment">// we will take it as a GitHub repo</span></span>
<span class="line">    repo<span class="token operator">:</span> <span class="token string">'vuejs/vuepress'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// You can also set it to a URL directly</span></span>
<span class="line">    repo<span class="token operator">:</span> <span class="token string">'https://gitlab.com/foo/bar'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar"><span>sidebar</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>false | SidebarOptions</code></p>
</li>
<li>
<p>Default: <code v-pre>'heading'</code></p>
</li>
<li>
<p>Details:</p>
<p>Configuration of sidebar.</p>
<p>You can override this global option via <RouteLink to="/themes/default/frontmatter.html#sidebar">sidebar</RouteLink> frontmatter in your pages.</p>
<p>Set to <code v-pre>false</code> to disable sidebar.</p>
<p>If you set it to <code v-pre>'heading'</code>, the sidebar will be automatically generated from the page headers.</p>
<p>To configure the sidebar items manually, you can set this option to a <em>sidebar array</em>, each item of which could be a <code v-pre>SidebarItem</code> object or a string:</p>
<ul>
<li>A <code v-pre>SidebarItem</code> object should have a <code v-pre>text</code> field, could have an optional <code v-pre>link</code> field, an optional <code v-pre>children</code> field, an optional <code v-pre>collapsible</code> field and an optional <code v-pre>prefix</code> field. The <code v-pre>children</code> field should be a <em>sidebar array</em>, where <code v-pre>prefix</code> will be prepended to every link inside it. The <code v-pre>collapsible</code> field controls whether the item is collapsible.</li>
<li>A string should be the path to the target page file. It will be converted to a <code v-pre>SidebarItem</code> object, whose <code v-pre>text</code> is the page title, <code v-pre>link</code> is the page route path, and <code v-pre>children</code> is automatically generated from the page headers.</li>
</ul>
<p>If you want to set different sidebar for different sub paths, you can set this option to a <em>sidebar object</em>:</p>
<ul>
<li>The key should be the path prefix.</li>
<li>The value should be a <em>sidebar array</em> or set to <code v-pre>'heading'</code> to automatically generate the sidebar from the page headers for just the corresponding path.</li>
</ul>
</li>
<li>
<p>Example 1:</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// sidebar array</span></span>
<span class="line">    <span class="token comment">// all pages will use the same sidebar</span></span>
<span class="line">    sidebar<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// SidebarItem</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">'Foo'</span><span class="token punctuation">,</span></span>
<span class="line">        prefix<span class="token operator">:</span> <span class="token string">'/foo/'</span><span class="token punctuation">,</span></span>
<span class="line">        link<span class="token operator">:</span> <span class="token string">'/foo/'</span><span class="token punctuation">,</span></span>
<span class="line">        children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token comment">// SidebarItem</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            text<span class="token operator">:</span> <span class="token string">'github'</span><span class="token punctuation">,</span></span>
<span class="line">            link<span class="token operator">:</span> <span class="token string">'https://github.com'</span><span class="token punctuation">,</span></span>
<span class="line">            children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// string - page file path</span></span>
<span class="line">          <span class="token string">'bar.md'</span><span class="token punctuation">,</span> <span class="token comment">// resolved to `/foo/bar.md`</span></span>
<span class="line">          <span class="token string">'/ray.md'</span><span class="token punctuation">,</span> <span class="token comment">// resolved to `/ray.md`</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// string - page file path</span></span>
<span class="line">      <span class="token string">'/bar/README.md'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Example 2:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// sidebar object</span></span>
<span class="line">    <span class="token comment">// pages under different sub paths will use different sidebar</span></span>
<span class="line">    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'/guide/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          text<span class="token operator">:</span> <span class="token string">'Guide'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// prefix will be prepended to relative paths</span></span>
<span class="line">          children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">'introduction.md'</span><span class="token punctuation">,</span> <span class="token comment">// resolved to `/guide/introduction.md`</span></span>
<span class="line">            <span class="token string">'getting-started.md'</span><span class="token punctuation">,</span> <span class="token comment">// resolved to `/guide/getting-started.md`</span></span>
<span class="line">          <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'/reference/'</span><span class="token operator">:</span> <span class="token string">'heading'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Example 3:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// collapsible sidebar</span></span>
<span class="line">    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'/reference/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          text<span class="token operator">:</span> <span class="token string">'VuePress Reference'</span><span class="token punctuation">,</span></span>
<span class="line">          collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// for project links, .md or .html suffix is optional</span></span>
<span class="line">          children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'cli'</span><span class="token punctuation">,</span> <span class="token string">'config'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          text<span class="token operator">:</span> <span class="token string">'Bundlers Reference'</span><span class="token punctuation">,</span></span>
<span class="line">          collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token comment">// prefix can be a relative path, which is equivalent to `prefix: /reference/bundler/`</span></span>
<span class="line">          prefix<span class="token operator">:</span> <span class="token string">'bundler/'</span><span class="token punctuation">,</span></span>
<span class="line">          children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'vite'</span><span class="token punctuation">,</span> <span class="token string">'webpack'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sidebardepth" tabindex="-1"><a class="header-anchor" href="#sidebardepth"><span>sidebarDepth</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>2</code></p>
</li>
<li>
<p>Details:</p>
<p>Set the maximum depth of the sidebar children which are automatically generated from the page headers.</p>
<ul>
<li>Set to <code v-pre>0</code> to disable all levels of headers.</li>
<li>Set to <code v-pre>1</code> to include <code v-pre>&lt;h2&gt;</code> headers.</li>
<li>Set to <code v-pre>2</code> to include <code v-pre>&lt;h2&gt;</code> and <code v-pre>&lt;h3&gt;</code> headers.</li>
<li>...</li>
</ul>
<p>You can override this global option via <RouteLink to="/themes/default/frontmatter.html#sidebardepth">sidebarDepth</RouteLink> frontmatter in your pages.</p>
</li>
</ul>
<h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink"><span>editLink</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable the <em>edit this page</em> link or not.</p>
<p>You can override this global option via <RouteLink to="/themes/default/frontmatter.html#editlink">editLink</RouteLink> frontmatter in your pages.</p>
</li>
</ul>
<h3 id="editlinkpattern" tabindex="-1"><a class="header-anchor" href="#editlinkpattern"><span>editLinkPattern</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the pattern of the <em>edit this page</em> link.</p>
<p>This will be used for generating the <em>edit this page</em> link.</p>
<p>If you don't set this option, the pattern will be inferred from the <a href="#docsrepo">docsRepo</a> option. But if your documentation repository is not hosted on a common platform, for example, GitHub, GitLab, Bitbucket, Gitee, etc., you have to set this option explicitly to make the <em>edit this page</em> link work.</p>
</li>
<li>
<p>Usage:</p>
<table>
<thead>
<tr>
<th>Pattern</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>:repo</code></td>
<td>The docs repo url, i.e. <a href="#docsrepo">docsRepo</a></td>
</tr>
<tr>
<td><code v-pre>:branch</code></td>
<td>The docs repo branch, i.e. <a href="#docsbranch">docsBranch</a></td>
</tr>
<tr>
<td><code v-pre>:path</code></td>
<td>The path of the page source file, i.e. <a href="#docsdir">docsDir</a> joins the relative path of the page file</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    docsRepo<span class="token operator">:</span> <span class="token string">'https://gitlab.com/owner/name'</span><span class="token punctuation">,</span></span>
<span class="line">    docsBranch<span class="token operator">:</span> <span class="token string">'master'</span><span class="token punctuation">,</span></span>
<span class="line">    docsDir<span class="token operator">:</span> <span class="token string">'docs'</span><span class="token punctuation">,</span></span>
<span class="line">    editLinkPattern<span class="token operator">:</span> <span class="token string">':repo/-/edit/:branch/:path'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>The generated link will look like <code v-pre>'https://gitlab.com/owner/name/-/edit/master/docs/path/to/file.md'</code>.</p>
<h3 id="docsrepo" tabindex="-1"><a class="header-anchor" href="#docsrepo"><span>docsRepo</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the repository url of your documentation source files.</p>
<p>This will be used for generating the <em>edit this page</em> link.</p>
<p>If you don't set this option, it will use the <a href="#repo">repo</a> option by default. But if your documentation source files are in a different repository, you will need to set this option.</p>
</li>
</ul>
<h3 id="docsbranch" tabindex="-1"><a class="header-anchor" href="#docsbranch"><span>docsBranch</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>'main'</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the repository branch of your documentation source files.</p>
<p>This will be used for generating the <em>edit this page</em> link.</p>
</li>
</ul>
<h3 id="docsdir" tabindex="-1"><a class="header-anchor" href="#docsdir"><span>docsDir</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>''</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the directory of your documentation source files in the repository.</p>
<p>This will be used for generating the <em>edit this page</em> link.</p>
</li>
</ul>
<h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated"><span>lastUpdated</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable the <em>last updated timestamp</em> or not.</p>
<p>You can override this global option via <RouteLink to="/themes/default/frontmatter.html#lastupdated">lastUpdated</RouteLink> frontmatter in your pages. Notice that if you have already set this option to <code v-pre>false</code>, this feature will be disabled totally and could not be enabled in locales nor page frontmatter.</p>
</li>
</ul>
<h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors"><span>contributors</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable the <em>contributors list</em> or not.</p>
<p>You can override this global option via <RouteLink to="/themes/default/frontmatter.html#contributors">contributors</RouteLink> frontmatter in your pages. Notice that if you have already set this option to <code v-pre>false</code>, this feature will be disabled totally and could not be enabled in locales nor page frontmatter.</p>
</li>
</ul>
</div></template>


