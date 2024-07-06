<template><div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1>
<h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h2>
<h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>部署的域名，例如 <code v-pre>https://example.com</code></p>
</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>{ [path: string]: Partial&lt;DefaultThemeLocaleData&gt; }</code></p>
</li>
<li>
<p>默认值： <code v-pre>{}</code></p>
</li>
<li>
<p>详情：</p>
<p>多语言支持的各个语言 locales 。</p>
<p>所有在 <a href="#locale-%E9%85%8D%E7%BD%AE">Locale 配置</a> 章节内的配置项都可以在 locales 中使用。</p>
<p>该配置项仅能在默认主题内生效，注意不要和 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#locales" target="_blank" rel="noopener noreferrer">站点配置</a> 中的 <code v-pre>locales</code> 混淆。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://v2.vuepress.vuejs.org/zh/guide/i18n.html" target="_blank" rel="noopener noreferrer">指南 &gt; 多语言支持</a></li>
</ul>
</li>
</ul>
<h2 id="locale-配置" tabindex="-1"><a class="header-anchor" href="#locale-配置"><span>Locale 配置</span></a></h2>
<p>该章节内的配置项可以作为一般配置使用，也可以使用在 <a href="#locales">locales</a> 内。</p>
<h3 id="colormode" tabindex="-1"><a class="header-anchor" href="#colormode"><span>colorMode</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>'auto' | 'light' | 'dark'</code></p>
</li>
<li>
<p>默认值： <code v-pre>'auto'</code></p>
</li>
<li>
<p>详情：</p>
<p>默认颜色模式。</p>
<p>如果设置为 <code v-pre>'auto'</code> ，则会根据 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank" rel="noopener noreferrer">prefers-color-scheme</a> 自动设置初始颜色模式。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="#colormodeswitch">默认主题 &gt; 配置 &gt; colorModeSwitch</a></li>
</ul>
</li>
</ul>
<h3 id="colormodeswitch" tabindex="-1"><a class="header-anchor" href="#colormodeswitch"><span>colorModeSwitch</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用切换颜色模式的功能。</p>
<p>如果设置为 <code v-pre>true</code> ，将会在导航栏展示一个切换颜色模式的按钮。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="#colormode">默认主题 &gt; 配置 &gt; colorMode</a></li>
<li><RouteLink to="/zh/themes/default/locale.html#togglecolormode">默认主题 &gt; 语言配置 &gt; toggleColorMode</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon"><span>externalLinkIcon</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在外部链接上显示外部链接图标。</p>
</li>
</ul>
<h3 id="home" tabindex="-1"><a class="header-anchor" href="#home"><span>home</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>/</code></p>
</li>
<li>
<p>详情：</p>
<p>首页的路径。</p>
<p>它将被用于：</p>
<ul>
<li>导航栏中 Logo 的链接</li>
<li>404 页面的 <em>返回首页</em> 链接</li>
</ul>
</li>
</ul>
<h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar"><span>navbar</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>false | NavbarOptions</code></p>
</li>
<li>
<p>默认值： <code v-pre>[]</code></p>
</li>
<li>
<p>详情：</p>
<p>导航栏配置。</p>
<p>设置为 <code v-pre>false</code> 可以禁用导航栏。</p>
<p>为了配置导航栏元素，你可以将其设置为 <em>导航栏数组</em> ，其中的每个元素是 <code v-pre>NavbarLink</code> 对象、 <code v-pre>NavbarGroup</code> 对象、或者字符串：</p>
<ul>
<li><code v-pre>NavbarLink</code> 对象应该有一个 <code v-pre>text</code> 字段和一个 <code v-pre>link</code> 字段，还有一个可选的 <code v-pre>activeMatch</code> 字段。</li>
<li><code v-pre>NavbarGroup</code> 对象应该有一个 <code v-pre>text</code> 字段和一个 <code v-pre>children</code> 字段，还有一个可选的 <code v-pre>prefix</code> 字段。 <code v-pre>children</code> 字段同样是一个 <em>导航栏数组</em>，而 <code v-pre>prefix</code> 会作为 <em>导航栏数组</em> 的路径前缀。</li>
<li>字符串应为目标页面文件的路径。它将会被转换为 <code v-pre>NavbarLink</code> 对象，将页面标题作为 <code v-pre>text</code> ，将页面路由路径作为 <code v-pre>link</code> 。</li>
</ul>
</li>
<li>
<p>示例 1：</p>
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
<span class="line">      <span class="token comment">// 字符串 - 页面文件路径</span></span>
<span class="line">      <span class="token string">'/bar/README.md'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例 2：</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    navbar<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// 嵌套 Group - 最大深度为 2</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">'Group'</span><span class="token punctuation">,</span></span>
<span class="line">        prefix<span class="token operator">:</span> <span class="token string">'/group/'</span><span class="token punctuation">,</span></span>
<span class="line">        children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            text<span class="token operator">:</span> <span class="token string">'SubGroup1'</span><span class="token punctuation">,</span></span>
<span class="line">            prefix<span class="token operator">:</span> <span class="token string">'sub1/'</span><span class="token punctuation">,</span></span>
<span class="line">            children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">              <span class="token string">'foo.md'</span><span class="token punctuation">,</span> <span class="token comment">// 解析为 `/guide/group/sub1/bar.md`</span></span>
<span class="line">              <span class="token string">'bar.md'</span><span class="token punctuation">,</span> <span class="token comment">// 解析为 `/guide/group/sub1/bar.md`</span></span>
<span class="line"></span>
<span class="line">              <span class="token comment">// 一个外部链接</span></span>
<span class="line">              <span class="token punctuation">{</span></span>
<span class="line">                text<span class="token operator">:</span> <span class="token string">'Example'</span><span class="token punctuation">,</span></span>
<span class="line">                link<span class="token operator">:</span> <span class="token string">'https://example.com'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            text<span class="token operator">:</span> <span class="token string">'SubGroup2'</span><span class="token punctuation">,</span></span>
<span class="line">            prefix<span class="token operator">:</span> <span class="token string">'sub2/'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 项目内链接的 .md 或 .html 后缀是可以省略的</span></span>
<span class="line">            children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">              <span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token comment">// 解析为 `/guide/group/sub2/foo.md`</span></span>
<span class="line">              <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token comment">// 解析为 `/guide/group/sub2/bar.md`</span></span>
<span class="line"></span>
<span class="line">              <span class="token comment">// 不在 SubGroup2 内的链接</span></span>
<span class="line">              <span class="token string">'/baz/'</span><span class="token punctuation">,</span> <span class="token comment">// 解析为 `/baz/README.md`</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 控制元素何时被激活</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">'Group 2'</span><span class="token punctuation">,</span></span>
<span class="line">        children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            text<span class="token operator">:</span> <span class="token string">'Always active'</span><span class="token punctuation">,</span></span>
<span class="line">            link<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 该元素将一直处于激活状态</span></span>
<span class="line">            activeMatch<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            text<span class="token operator">:</span> <span class="token string">'Active on /foo/'</span><span class="token punctuation">,</span></span>
<span class="line">            link<span class="token operator">:</span> <span class="token string">'/not-foo/'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 该元素在当前路由路径是 /foo/ 开头时激活</span></span>
<span class="line">            <span class="token comment">// 支持正则表达式</span></span>
<span class="line">            activeMatch<span class="token operator">:</span> <span class="token string">'^/foo/'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logo" tabindex="-1"><a class="header-anchor" href="#logo"><span>logo</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>null | string</code></p>
</li>
<li>
<p>详情：</p>
<p>Logo 图片的 URL。</p>
<p>Logo 图片将会显示在导航栏的左端。</p>
<p>设置为 <code v-pre>null</code> 可以禁用 Logo 。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Public 文件路径</span></span>
<span class="line">    logo<span class="token operator">:</span> <span class="token string">'/images/hero.png'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// URL</span></span>
<span class="line">    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>参考：
<ul>
<li><a href="https://v2.vuepress.vuejs.org/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">指南 &gt; 静态资源 &gt; Public 文件</a></li>
</ul>
</li>
</ul>
<h3 id="logodark" tabindex="-1"><a class="header-anchor" href="#logodark"><span>logoDark</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>null | string</code></p>
</li>
<li>
<p>详情：</p>
<p>在夜间模式中使用的 Logo 图片的 URL。</p>
<p>如果你想在夜间模式中使用不同的 Logo 图片，就可以使用该配置项。</p>
<p>设置为 <code v-pre>null</code> 可以在夜间模式下禁用 Logo 。忽略该配置项将会在夜间模式中使用 <a href="#logo">logo</a> 配置。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="#logo">默认主题 &gt; 配置 &gt; logo</a></li>
<li><a href="#colormode">默认主题 &gt; 配置 &gt; colorMode</a></li>
</ul>
</li>
</ul>
<h3 id="logoalt" tabindex="-1"><a class="header-anchor" href="#logoalt"><span>logoAlt</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>null | string</code></p>
</li>
<li>
<p>详情：</p>
<p>指定 Logo 图片的替代文字。</p>
<p>当未指定时，将默认与站点标题相同。</p>
</li>
</ul>
<h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo"><span>repo</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>项目仓库的 URL。</p>
<p>它将被用作 <em>仓库链接</em> 的链接。<em>仓库链接</em> 将会显示为导航栏的最后一个元素。</p>
</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果你按照 `organization/repository` 的格式设置它</span></span>
<span class="line">    <span class="token comment">// 我们会将它作为一个 GitHub 仓库</span></span>
<span class="line">    repo<span class="token operator">:</span> <span class="token string">'vuejs/vuepress'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 你也可以直接将它设置为一个 URL</span></span>
<span class="line">    repo<span class="token operator">:</span> <span class="token string">'https://gitlab.com/foo/bar'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar"><span>sidebar</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>false | SidebarOptions</code></p>
</li>
<li>
<p>默认值： <code v-pre>'heading'</code></p>
</li>
<li>
<p>详情：</p>
<p>侧边栏配置。</p>
<p>你可以通过页面的 <RouteLink to="/zh/themes/default/frontmatter.html#sidebar">sidebar</RouteLink> frontmatter 来覆盖这个全局配置。</p>
<p>设置为 <code v-pre>false</code> 可以禁用侧边栏。</p>
<p>如果你设置为 <code v-pre>'heading'</code>，侧边栏会根据页面标题自动生成。</p>
<p>为了手动配置侧边栏元素，你可以将其设置为 <em>侧边栏数组</em> ，其中的每个元素是一个 <code v-pre>SidebarItem</code> 对象或者一个字符串：</p>
<ul>
<li><code v-pre>SidebarItem</code> 对象应该有一个 <code v-pre>text</code> 字段，有一个可选的 <code v-pre>link</code> 字段、一个可选的 <code v-pre>children</code> 字段、一个可选的 <code v-pre>collapsible</code> 字段和一个可选的 <code v-pre>prefix</code> 字段。 <code v-pre>children</code> 字段同样是一个 <em>侧边栏数组</em>，<code v-pre>prefix</code> 会作为每个子项目的路径前缀。 <code v-pre>collapsible</code> 字段来控制它是否可折叠。</li>
<li>字符串应为目标页面文件的路径。它将会被转换为 <code v-pre>SidebarItem</code> 对象，将页面标题作为 <code v-pre>text</code> ，将页面路由路径作为 <code v-pre>link</code> ，并根据页面小标题自动生成 <code v-pre>children</code> 。</li>
</ul>
<p>如果你想在不同子路径中使用不同的侧边栏，你可以将该配置项设置为 <em>侧边栏对象</em> ：</p>
<ul>
<li>Key 为路径前缀。</li>
<li>Value 为 <em>侧边栏数组</em> 或 <code v-pre>&quot;heading&quot;</code> 以自动为相应路径生成基于标题的侧边栏。</li>
</ul>
</li>
<li>
<p>示例 1：</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 侧边栏数组</span></span>
<span class="line">    <span class="token comment">// 所有页面会使用相同的侧边栏</span></span>
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
<span class="line">          <span class="token comment">// 字符串 - 页面文件路径</span></span>
<span class="line">          <span class="token string">'bar.md'</span><span class="token punctuation">,</span> <span class="token comment">// 解析为 `/foo/bar.md`</span></span>
<span class="line">          <span class="token string">'/ray.md'</span><span class="token punctuation">,</span> <span class="token comment">// 解析为 `/ray.md`</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 字符串 - 页面文件路径</span></span>
<span class="line">      <span class="token string">'/bar/README.md'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例 2：</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 侧边栏对象</span></span>
<span class="line">    <span class="token comment">// 不同子路径下的页面会使用不同的侧边栏</span></span>
<span class="line">    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'/guide/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          text<span class="token operator">:</span> <span class="token string">'Guide'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 相对路径会自动追加子路径前缀</span></span>
<span class="line">          children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">'introduction.md'</span><span class="token punctuation">,</span> <span class="token comment">// 解析为 `/guide/introduction.md`</span></span>
<span class="line">            <span class="token string">'getting-started.md'</span><span class="token punctuation">,</span> <span class="token comment">// 解析为 `/guide/getting-started.md`</span></span>
<span class="line">          <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'/reference/'</span><span class="token operator">:</span> <span class="token string">'heading'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例 3：</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 可折叠的侧边栏</span></span>
<span class="line">    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'/reference/'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          text<span class="token operator">:</span> <span class="token string">'VuePress Reference'</span><span class="token punctuation">,</span></span>
<span class="line">          collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 基于项目路径的 .md 或 .html 后缀是可以省略的</span></span>
<span class="line">          children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'cli'</span><span class="token punctuation">,</span> <span class="token string">'config'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          text<span class="token operator">:</span> <span class="token string">'Bundlers Reference'</span><span class="token punctuation">,</span></span>
<span class="line">          collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 前缀可以是相对路径，等同于 `prefix: /reference/bundler/`</span></span>
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
<p>类型： <code v-pre>number</code></p>
</li>
<li>
<p>默认值： <code v-pre>2</code></p>
</li>
<li>
<p>详情：</p>
<p>设置根据页面标题自动生成的侧边栏的最大深度。</p>
<ul>
<li>设为 <code v-pre>0</code> 来禁用所有级别的页面标题。</li>
<li>设为 <code v-pre>1</code> 来包含 <code v-pre>&lt;h2&gt;</code> 标题。</li>
<li>设为 <code v-pre>2</code> 来包含 <code v-pre>&lt;h2&gt;</code> 和 <code v-pre>&lt;h3&gt;</code> 标题。</li>
<li>...</li>
</ul>
<p>你可以通过页面的 <RouteLink to="/zh/themes/default/frontmatter.html#sidebardepth">sidebarDepth</RouteLink> frontmatter 来覆盖这个全局配置。</p>
</li>
</ul>
<h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink"><span>editLink</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <em>编辑此页</em> 链接。</p>
<p>你可以通过页面的 <RouteLink to="/zh/themes/default/frontmatter.html#editlink">editLink</RouteLink> frontmatter 来覆盖这个全局配置。</p>
</li>
</ul>
<h3 id="editlinkpattern" tabindex="-1"><a class="header-anchor" href="#editlinkpattern"><span>editLinkPattern</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p><em>编辑此页</em> 链接的 Pattern 。</p>
<p>它将会用于生成 <em>编辑此页</em> 的链接。</p>
<p>如果你不设置该选项，则会根据 <a href="#docsrepo">docsRepo</a> 配置项来推断 Pattern 。但是如果你的文档仓库没有托管在常用的平台上，比如 GitHub 、 GitLab 、 Bitbucket 、 Gitee 等，那么你必须设置该选项才能使 <em>编辑此页</em> 链接正常工作。</p>
</li>
<li>
<p>用法：</p>
<table>
<thead>
<tr>
<th>Pattern</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>:repo</code></td>
<td>文档仓库 URL ，即 <a href="#docsrepo">docsRepo</a></td>
</tr>
<tr>
<td><code v-pre>:branch</code></td>
<td>文档仓库分支 ，即 <a href="#docsbranch">docsBranch</a></td>
</tr>
<tr>
<td><code v-pre>:path</code></td>
<td>页面源文件的路径，即 <a href="#docsdir">docsDir</a> 拼接上页面文件的相对路径</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>示例：</p>
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
</div><p>则会生成类似于 <code v-pre>'https://gitlab.com/owner/name/-/edit/master/docs/path/to/file.md'</code> 的链接。</p>
<h3 id="docsrepo" tabindex="-1"><a class="header-anchor" href="#docsrepo"><span>docsRepo</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>文档源文件的仓库 URL 。</p>
<p>它将会用于生成 <em>编辑此页</em> 的链接。</p>
<p>如果你不设置该选项，则默认会使用 <a href="#repo">repo</a> 配置项。但是如果你的文档源文件是在一个不同的仓库内，你就需要设置该配置项了。</p>
</li>
</ul>
<h3 id="docsbranch" tabindex="-1"><a class="header-anchor" href="#docsbranch"><span>docsBranch</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'main'</code></p>
</li>
<li>
<p>详情：</p>
<p>文档源文件的仓库分支。</p>
<p>它将会用于生成 <em>编辑此页</em> 的链接。</p>
</li>
</ul>
<h3 id="docsdir" tabindex="-1"><a class="header-anchor" href="#docsdir"><span>docsDir</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>''</code></p>
</li>
<li>
<p>详情：</p>
<p>文档源文件存放在仓库中的目录名。</p>
<p>它将会用于生成 <em>编辑此页</em> 的链接。</p>
</li>
</ul>
<h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated"><span>lastUpdated</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <em>最近更新时间戳</em> 。</p>
<p>你可以通过页面的 <RouteLink to="/zh/themes/default/frontmatter.html#lastupdated">lastUpdated</RouteLink> frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了 <code v-pre>false</code> ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。</p>
</li>
</ul>
<h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors"><span>contributors</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 <em>贡献者列表</em> 。</p>
<p>你可以通过页面的 <RouteLink to="/zh/themes/default/frontmatter.html#contributors">contributors</RouteLink> frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了 <code v-pre>false</code> ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。</p>
</li>
</ul>
</div></template>


