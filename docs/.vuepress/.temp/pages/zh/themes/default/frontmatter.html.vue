<template><div><h1 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h1>
<NpmBadge package="@vuepress/theme-default" /><h2 id="所有页面" tabindex="-1"><a class="header-anchor" href="#所有页面"><span>所有页面</span></a></h2>
<p>本章节中的 Frontmatter 会在所有类型的页面中生效。</p>
<h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon"><span>externalLinkIcon</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在外部链接上显示外部链接图标。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/themes/default/config.html#externallinkicon">默认主题 &gt; 配置 &gt; externalLinkIcon</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar"><span>navbar</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在当前页面展示导航栏。</p>
<p>如果你在主题配置中禁用了导航栏，那么该 Frontmatter 将不会生效。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/themes/default/config.html#navbar">默认主题 &gt; 配置 &gt; navbar</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="pageclass" tabindex="-1"><a class="header-anchor" href="#pageclass"><span>pageClass</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>为当前页面添加额外的类名。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">pageClass</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>page<span class="token punctuation">-</span>class</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><p>然后你可以在 <code v-pre>.vuepress/styles/index.scss</code> 文件中为这个页面添加自定义样式：</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">.theme-container.custom-page-class </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* 页面样式 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>参考：
<ul>
<li><RouteLink to="/zh/themes/default/styles.html#style-%E6%96%87%E4%BB%B6">默认主题 &gt; 样式 &gt; Style 文件</RouteLink></li>
</ul>
</li>
</ul>
<h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页"><span>首页</span></a></h2>
<p>本章节中的 Frontmatter 只会在首页中生效。</p>
<h3 id="home" tabindex="-1"><a class="header-anchor" href="#home"><span>home</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>设定该页面是首页还是普通页面。</p>
<p>如果你不设置该 Frontmatter 或将其设为 <code v-pre>false</code> ，则该页面会是一个 <a href="#%E6%99%AE%E9%80%9A%E9%A1%B5%E9%9D%A2">普通页面</a></p>
</li>
<li>
<p>示例：</p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div></li>
</ul>
<h3 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage"><span>heroImage</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>首页图片的 URL 。</p>
</li>
<li>
<p>示例：</p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token comment"># Public 文件路径</span></span>
<span class="line"><span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /images/hero.png</span>
<span class="line"><span class="token comment"># URL</span></span>
<span class="line"><span class="token key atrule">heroImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//vuejs.org/images/logo.png</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://v2.vuepress.vuejs.org/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">指南 &gt; 静态资源 &gt; Public 文件</a></li>
</ul>
</li>
</ul>
<h3 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark"><span>heroImageDark</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>在夜间模式中使用的首页图片的 URL 。</p>
<p>如果你想在夜间模式中使用不同的首页图片，就可以使用该配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="#heroimage">默认主题 &gt; Frontmatter &gt; heroImage</a></li>
<li><RouteLink to="/zh/themes/default/config.html#colormode">默认主题 &gt; 配置 &gt; colorMode</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt"><span>heroAlt</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>首页图片的 <code v-pre>alt</code> 属性。</p>
<p>如果不设置，则默认使用 <a href="#herotext">heroText</a> 。</p>
</li>
</ul>
<h3 id="heroheight" tabindex="-1"><a class="header-anchor" href="#heroheight"><span>heroHeight</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>number</code></p>
</li>
<li>
<p>默认值： <code v-pre>280</code></p>
</li>
<li>
<p>详情：</p>
<p>首页图片 <code v-pre>&lt;img&gt;</code> 标签的 <code v-pre>height</code> 属性。</p>
<p>当你的首页图片高度小于默认值时，你可能需要减小该属性。</p>
<p>需要注意的是，首页图片的高度同样受到了 CSS 的约束。设置这个属性主要是为了减少由加载首页图片引起的 <a href="https://web.dev/cls/" target="_blank" rel="noopener noreferrer">累积布局偏移 (CLS)</a> 。</p>
</li>
</ul>
<h3 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext"><span>heroText</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string | null</code></p>
</li>
<li>
<p>详情：</p>
<p>首页的大标题。</p>
<p>如果不设置，则默认使用站点 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#title" target="_blank" rel="noopener noreferrer">title</a> 。</p>
<p>设置为 <code v-pre>null</code> 来禁用首页大标题。</p>
</li>
</ul>
<h3 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline"><span>tagline</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string | null</code></p>
</li>
<li>
<p>详情：</p>
<p>首页的标语。</p>
<p>如果不设置，则默认使用站点 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#description" target="_blank" rel="noopener noreferrer">description</a> 。</p>
<p>设置为 <code v-pre>null</code> 来禁用首页标语。</p>
</li>
</ul>
<h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions"><span>actions</span></a></h3>
<ul>
<li>类型：</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  text<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  link<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">'primary'</span> <span class="token operator">|</span> <span class="token string">'secondary'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>
<p>详情：</p>
<p>配置首页按钮。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">actions</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 快速上手</span>
<span class="line">    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/getting<span class="token punctuation">-</span>started.html</span>
<span class="line">    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 项目简介</span>
<span class="line">    <span class="token key atrule">link</span><span class="token punctuation">:</span> /zh/guide/introduction.html</span>
<span class="line">    <span class="token key atrule">type</span><span class="token punctuation">:</span> secondary</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>features</span></a></h3>
<ul>
<li>类型：</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  details<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>
<p>详情：</p>
<p>配置首页特性列表。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">features</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 简洁至上</span>
<span class="line">    <span class="token key atrule">details</span><span class="token punctuation">:</span> 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue 驱动</span>
<span class="line">    <span class="token key atrule">details</span><span class="token punctuation">:</span> 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 高性能</span>
<span class="line">    <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>footer</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>首页的页脚。</p>
</li>
</ul>
<h3 id="footerhtml" tabindex="-1"><a class="header-anchor" href="#footerhtml"><span>footerHtml</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>是否允许页脚中使用 HTML 。</p>
<p>如果设置为 <code v-pre>true</code> ，那么 <a href="#footer">footer</a> 会被作为 HTML 代码处理。</p>
</li>
</ul>
<h2 id="普通页面" tabindex="-1"><a class="header-anchor" href="#普通页面"><span>普通页面</span></a></h2>
<p>本章节中的 Frontmatter 只会在普通页面中生效。</p>
<h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink"><span>editLink</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在本页面中启用 <em>编辑此页</em> 链接。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/themes/default/config.html#editlink">默认主题 &gt; 配置 &gt; editLink</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="editlinkpattern" tabindex="-1"><a class="header-anchor" href="#editlinkpattern"><span>editLinkPattern</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>本页面中 <em>编辑此页</em> 链接的 Pattern 。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/themes/default/config.html#editlinkpattern">默认主题 &gt; 配置 &gt; editLinkPattern</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated"><span>lastUpdated</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在本页面中启用 <em>最近更新时间戳</em> 。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/themes/default/config.html#lastupdated">默认主题 &gt; 配置 &gt; lastUpdated</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors"><span>contributors</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在本页面中启用 <em>贡献者列表</em> 。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/themes/default/config.html#contributors">默认主题 &gt; 配置 &gt; contributors</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar"><span>sidebar</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>false | SidebarOptions</code></p>
</li>
<li>
<p>详情：</p>
<p>配置本页面的侧边栏。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/themes/default/config.html#sidebar">默认主题 &gt; 配置 &gt; sidebar</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="sidebardepth" tabindex="-1"><a class="header-anchor" href="#sidebardepth"><span>sidebarDepth</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>number</code></p>
</li>
<li>
<p>详情：</p>
<p>配置本页面的侧边栏深度。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/themes/default/config.html#sidebardepth">默认主题 &gt; 配置 &gt; sidebarDepth</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev"><span>prev</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>AutoLinkConfig | string | false</code></p>
</li>
<li>
<p>详情：</p>
<p>上一个页面的链接。</p>
<p>如果你不设置该 Frontmatter ，该链接会自动根据侧边栏配置进行推断。</p>
<p>为了手动配置上一页面的链接，你可以将其设置为一个 <code v-pre>AutoLinkConfig</code> 对象或者一个字符串：</p>
<ul>
<li><code v-pre>AutoLinkConfig</code> 对象应该有一个 <code v-pre>text</code> 字段和一个 <code v-pre>link</code> 字段。</li>
<li>字符串应为目标页面文件的路径。它将会被转换为 <code v-pre>AutoLinkConfig</code> 对象，将页面标题作为 <code v-pre>text</code> ，将页面路由路径作为 <code v-pre>link</code> 。</li>
<li>如果你不想显示上一个页面的链接，可以将其设置为 <code v-pre>false</code> 。</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token comment"># AutoLinkConfig</span></span>
<span class="line"><span class="token key atrule">prev</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html</span>
<span class="line"></span>
<span class="line"><span class="token comment"># AutoLinkConfig - 外部 URL</span></span>
<span class="line"><span class="token key atrule">prev</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">text</span><span class="token punctuation">:</span> GitHub</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字符串 - 页面文件路径</span></span>
<span class="line"><span class="token key atrule">prev</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.md</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字符串 - 页面文件相对路径</span></span>
<span class="line"><span class="token key atrule">prev</span><span class="token punctuation">:</span> ../../guide/getting<span class="token punctuation">-</span>started.md</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next" tabindex="-1"><a class="header-anchor" href="#next"><span>next</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>AutoLinkConfig | string | false</code></p>
</li>
<li>
<p>详情：</p>
<p>下一个页面的链接。</p>
<p>如果你不设置该 Frontmatter ，该链接会自动根据侧边栏配置进行推断。</p>
<p>类型和 <a href="#prev">prev</a> Frontmatter 相同。</p>
</li>
</ul>
</div></template>


