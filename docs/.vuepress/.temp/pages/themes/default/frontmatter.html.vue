<template><div><h1 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h1>
<NpmBadge package="@vuepress/theme-default" /><h2 id="all-pages" tabindex="-1"><a class="header-anchor" href="#all-pages"><span>All Pages</span></a></h2>
<p>Frontmatter in this section will take effect in all types of pages.</p>
<h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon"><span>externalLinkIcon</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Show external link icon on external links or not.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouteLink to="/themes/default/config.html#externallinkicon">Default Theme &gt; Config &gt; externalLinkIcon</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar"><span>navbar</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Show navbar on this page or not.</p>
<p>If you disable navbar in theme config, this frontmatter will not take effect.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouteLink to="/themes/default/config.html#navbar">Default Theme &gt; Config &gt; navbar</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="pageclass" tabindex="-1"><a class="header-anchor" href="#pageclass"><span>pageClass</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Add extra class name to this page.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">pageClass</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>page<span class="token punctuation">-</span>class</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><p>Then you can customize styles of this page in <code v-pre>.vuepress/styles/index.scss</code> file:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">.theme-container.custom-page-class </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* page styles */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>Also see:
<ul>
<li><RouteLink to="/themes/default/styles.html#style-file">Default Theme &gt; Styles &gt; Style File</RouteLink></li>
</ul>
</li>
</ul>
<h2 id="home-page" tabindex="-1"><a class="header-anchor" href="#home-page"><span>Home Page</span></a></h2>
<p>Frontmatter in this section will only take effect in home pages.</p>
<h3 id="home" tabindex="-1"><a class="header-anchor" href="#home"><span>home</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify whether the page is homepage or a normal page.</p>
<p>If you don't set this frontmatter or set it to <code v-pre>false</code>, the page would be a <a href="#normal-page">normal page</a>.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><h3 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage"><span>heroImage</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the url of the hero image.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token comment"># public file path</span></span>
<span class="line"><span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /images/hero.png</span>
<span class="line"><span class="token comment"># url</span></span>
<span class="line"><span class="token key atrule">heroImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//vuejs.org/images/logo.png</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>Also see:
<ul>
<li><a href="https://v2.vuepress.vuejs.org/guide/assets.html#public-files" target="_blank" rel="noopener noreferrer">Guide &gt; Assets &gt; Public Files</a></li>
</ul>
</li>
</ul>
<h3 id="heroimagedark" tabindex="-1"><a class="header-anchor" href="#heroimagedark"><span>heroImageDark</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the url of hero image to be used in dark mode.</p>
<p>You can make use of this option if you want to use different heroImage config in dark mode.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><a href="#heroimage">Default Theme &gt; Frontmatter &gt; heroImage</a></li>
<li><RouteLink to="/themes/default/config.html#colormode">Default Theme &gt; Config &gt; colorMode</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt"><span>heroAlt</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the <code v-pre>alt</code> attribute of the hero image.</p>
<p>This will fallback to the <a href="#herotext">heroText</a>.</p>
</li>
</ul>
<h3 id="heroheight" tabindex="-1"><a class="header-anchor" href="#heroheight"><span>heroHeight</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>280</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the <code v-pre>height</code> attribute of the hero <code v-pre>&lt;img&gt;</code> tag.</p>
<p>You may need to reduce this value if the height of your hero image is less than the default value.</p>
<p>Notice that the height is also constrained by CSS. This attribute is to reduce <a href="https://web.dev/cls/" target="_blank" rel="noopener noreferrer">Cumulative Layout Shift (CLS)</a> that caused by the loading of the hero image.</p>
</li>
</ul>
<h3 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext"><span>heroText</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string | null</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the the hero text.</p>
<p>This will fallback to the site <a href="https://v2.vuepress.vuejs.org/reference/config.html#title" target="_blank" rel="noopener noreferrer">title</a>.</p>
<p>Set to <code v-pre>null</code> to disable hero text.</p>
</li>
</ul>
<h3 id="tagline" tabindex="-1"><a class="header-anchor" href="#tagline"><span>tagline</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string | null</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the the tagline.</p>
<p>This will fallback to the site <a href="https://v2.vuepress.vuejs.org/reference/config.html#description" target="_blank" rel="noopener noreferrer">description</a>.</p>
<p>Set to <code v-pre>null</code> to disable tagline.</p>
</li>
</ul>
<h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions"><span>actions</span></a></h3>
<ul>
<li>Type:</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  text<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  link<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">'primary'</span> <span class="token operator">|</span> <span class="token string">'secondary'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>
<p>Details:</p>
<p>Configuration of the action buttons.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">actions</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started</span>
<span class="line">    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html</span>
<span class="line">    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Introduction</span>
<span class="line">    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/introduction.html</span>
<span class="line">    <span class="token key atrule">type</span><span class="token punctuation">:</span> secondary</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>features</span></a></h3>
<ul>
<li>Type:</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  details<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>
<p>Details:</p>
<p>Configuration of the features list.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">features</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Simplicity First</span>
<span class="line">    <span class="token key atrule">details</span><span class="token punctuation">:</span> Minimal setup with markdown<span class="token punctuation">-</span>centered project structure helps you focus on writing.</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue<span class="token punctuation">-</span>Powered</span>
<span class="line">    <span class="token key atrule">details</span><span class="token punctuation">:</span> Enjoy the dev experience of Vue<span class="token punctuation">,</span> use Vue components in markdown<span class="token punctuation">,</span> and develop custom themes with Vue.</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Performant</span>
<span class="line">    <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress generates pre<span class="token punctuation">-</span>rendered static HTML for each page<span class="token punctuation">,</span> and runs as an SPA once a page is loaded.</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>footer</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the content of the footer.</p>
</li>
</ul>
<h3 id="footerhtml" tabindex="-1"><a class="header-anchor" href="#footerhtml"><span>footerHtml</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Allow HTML in footer or not.</p>
<p>If you set it to <code v-pre>true</code>, the <a href="#footer">footer</a> will be treated as HTML code.</p>
</li>
</ul>
<h2 id="normal-page" tabindex="-1"><a class="header-anchor" href="#normal-page"><span>Normal Page</span></a></h2>
<p>Frontmatter in this section will only take effect in normal pages.</p>
<h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink"><span>editLink</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable the <em>edit this page</em> link in this page or not.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouteLink to="/themes/default/config.html#editlink">Default Theme &gt; Config &gt; editLink</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="editlinkpattern" tabindex="-1"><a class="header-anchor" href="#editlinkpattern"><span>editLinkPattern</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the pattern of the <em>edit this page</em> link of this page.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouteLink to="/themes/default/config.html#editlinkpattern">Default Theme &gt; Config &gt; editLinkPattern</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated"><span>lastUpdated</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable the <em>last updated timestamp</em> in this page or not.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouteLink to="/themes/default/config.html#lastupdated">Default Theme &gt; Config &gt; lastUpdated</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors"><span>contributors</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Enable the <em>contributors list</em> in this page or not.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouteLink to="/themes/default/config.html#contributors">Default Theme &gt; Config &gt; contributors</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar"><span>sidebar</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>false | SidebarOptions</code></p>
</li>
<li>
<p>Details:</p>
<p>Configure the sidebar of this page.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouteLink to="/themes/default/config.html#sidebar">Default Theme &gt; Config &gt; sidebar</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="sidebardepth" tabindex="-1"><a class="header-anchor" href="#sidebardepth"><span>sidebarDepth</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Details:</p>
<p>Configure the sidebar depth of this page.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouteLink to="/themes/default/config.html#sidebardepth">Default Theme &gt; Config &gt; sidebarDepth</RouteLink></li>
</ul>
</li>
</ul>
<h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev"><span>prev</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>AutoLinkConfig | string | false</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the link of the previous page.</p>
<p>If you don't set this frontmatter, the link will be inferred from the sidebar config.</p>
<p>To configure the prev link manually, you can set this frontmatter to a <code v-pre>AutoLinkConfig</code> object or a string:</p>
<ul>
<li>A <code v-pre>AutoLinkConfig</code> object should have a <code v-pre>text</code> field and a <code v-pre>link</code> field.</li>
<li>A string should be the path to the target page file. It will be converted to a <code v-pre>AutoLinkConfig</code> object, whose <code v-pre>text</code> is the page title, and <code v-pre>link</code> is the page route path.</li>
<li>Set to <code v-pre>false</code> to disable the prev link.</li>
</ul>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token comment"># AutoLinkConfig</span></span>
<span class="line"><span class="token key atrule">prev</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html</span>
<span class="line"></span>
<span class="line"><span class="token comment"># AutoLinkConfig - external url</span></span>
<span class="line"><span class="token key atrule">prev</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">text</span><span class="token punctuation">:</span> GitHub</span>
<span class="line">  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># string - page file path</span></span>
<span class="line"><span class="token key atrule">prev</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.md</span>
<span class="line"></span>
<span class="line"><span class="token comment"># string - page file relative path</span></span>
<span class="line"><span class="token key atrule">prev</span><span class="token punctuation">:</span> ../../guide/getting<span class="token punctuation">-</span>started.md</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next" tabindex="-1"><a class="header-anchor" href="#next"><span>next</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>AutoLinkConfig | string | false</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the link of the next page.</p>
<p>If you don't set this frontmatter, the link will be inferred from the sidebar config.</p>
<p>The type is the same as <a href="#prev">prev</a> frontmatter.</p>
</li>
</ul>
</div></template>


