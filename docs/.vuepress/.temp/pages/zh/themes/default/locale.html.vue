<template><div><h1 id="语言配置" tabindex="-1"><a class="header-anchor" href="#语言配置"><span>语言配置</span></a></h1>
<p>这些选项用于配置与语言相关的文本。</p>
<p>如果你的站点是以英语以外的其他语言提供服务的，你应该为每个语言设置这些选项来提供翻译。</p>
<h2 id="repolabel" tabindex="-1"><a class="header-anchor" href="#repolabel"><span>repoLabel</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>项目仓库的标签。</p>
<p>它将被用作 <em>仓库链接</em> 的文字。<em>仓库链接</em> 将会显示为导航栏的最后一个元素。</p>
<p>如果你不明确指定该配置项，它将会根据 <RouteLink to="/zh/themes/default/config.html#repo">repo</RouteLink> 配置项自动推断。</p>
</li>
</ul>
<h2 id="selectlanguagetext" tabindex="-1"><a class="header-anchor" href="#selectlanguagetext"><span>selectLanguageText</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p><em>选择语言菜单</em> 的文字。</p>
<p>如果你在站点配置中设置了多个 <a href="https://v2.vuepress.vuejs.org/zh/config.html#locales" target="_blank" rel="noopener noreferrer">locales</a> ，那么 <em>选择语言菜单</em> 就会显示在导航栏中仓库按钮的旁边。</p>
</li>
</ul>
<h2 id="selectlanguagearialabel" tabindex="-1"><a class="header-anchor" href="#selectlanguagearialabel"><span>selectLanguageAriaLabel</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p><em>选择语言菜单</em> 的 <code v-pre>aria-label</code> 属性。</p>
<p>它主要是为了站点的可访问性 (a11y) 。</p>
</li>
</ul>
<h2 id="selectlanguagename" tabindex="-1"><a class="header-anchor" href="#selectlanguagename"><span>selectLanguageName</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>Locale 的语言名称。</p>
<p>该配置项 <strong>仅能在主题配置的 <RouteLink to="/zh/themes/default/config.html#locales">locales</RouteLink> 的内部生效</strong> 。它将被用作 locale 的语言名称，展示在 <em>选择语言菜单</em> 内。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      lang<span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      lang<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        selectLanguageName<span class="token operator">:</span> <span class="token string">'English'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        selectLanguageName<span class="token operator">:</span> <span class="token string">'简体中文'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="navbarlabel" tabindex="-1"><a class="header-anchor" href="#navbarlabel"><span>navbarLabel</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>null | string</code></p>
</li>
<li>
<p>详情：</p>
<p>导航栏中主导航 <code v-pre>aria-label</code> 属性的值。</p>
</li>
</ul>
<h2 id="pagenavbarlabel" tabindex="-1"><a class="header-anchor" href="#pagenavbarlabel"><span>pageNavbarLabel</span></a></h2>
<ul>
<li>
<p>类型：<code v-pre>null | string</code></p>
</li>
<li>
<p>详情：</p>
<p>下一页/上一页导航 <code v-pre>aria-label</code> 属性的值</p>
</li>
</ul>
<h2 id="editlinktext" tabindex="-1"><a class="header-anchor" href="#editlinktext"><span>editLinkText</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Edit this page'</code></p>
</li>
<li>
<p>详情：</p>
<p><em>编辑此页</em> 链接的文字。</p>
</li>
</ul>
<h2 id="lastupdatedtext" tabindex="-1"><a class="header-anchor" href="#lastupdatedtext"><span>lastUpdatedText</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Last Updated'</code></p>
</li>
<li>
<p>详情：</p>
<p><em>最近更新时间戳</em> 标签的文字。</p>
</li>
</ul>
<h2 id="contributorstext" tabindex="-1"><a class="header-anchor" href="#contributorstext"><span>contributorsText</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Contributors'</code></p>
</li>
<li>
<p>详情：</p>
<p><em>贡献者列表</em> 标签的文字。</p>
</li>
</ul>
<h2 id="tip" tabindex="-1"><a class="header-anchor" href="#tip"><span>tip</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'TIP'</code></p>
</li>
<li>
<p>详情：</p>
<p>Tip <RouteLink to="/zh/themes/default/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">自定义容器</RouteLink> 的默认标题。</p>
</li>
</ul>
<h2 id="warning" tabindex="-1"><a class="header-anchor" href="#warning"><span>warning</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'WARNING'</code></p>
</li>
<li>
<p>详情：</p>
<p>Warning <RouteLink to="/zh/themes/default/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">自定义容器</RouteLink> 的默认标题。</p>
</li>
</ul>
<h2 id="danger" tabindex="-1"><a class="header-anchor" href="#danger"><span>danger</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'DANGER'</code></p>
</li>
<li>
<p>详情：</p>
<p>Danger <RouteLink to="/zh/themes/default/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">自定义容器</RouteLink> 的默认标题。</p>
</li>
</ul>
<h2 id="notfound" tabindex="-1"><a class="header-anchor" href="#notfound"><span>notFound</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string[]</code></p>
</li>
<li>
<p>默认值： <code v-pre>['Not Found']</code></p>
</li>
<li>
<p>详情：</p>
<p>404 页面的提示信息。</p>
<p>当用户进入 404 页面时，会从数组中随机选取一条信息进行展示。</p>
</li>
</ul>
<h2 id="backtohome" tabindex="-1"><a class="header-anchor" href="#backtohome"><span>backToHome</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Back to home'</code></p>
</li>
<li>
<p>详情：</p>
<p>404 页面中 <em>返回首页</em> 链接的文字。</p>
</li>
</ul>
<h2 id="togglecolormode" tabindex="-1"><a class="header-anchor" href="#togglecolormode"><span>toggleColorMode</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'toggle color mode'</code></p>
</li>
<li>
<p>详情：</p>
<p>切换颜色模式按钮的标题文字。</p>
<p>它主要是为了站点的可访问性 (a11y) 。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/themes/default/config.html#colormodeswitch">默认主题 &gt; 配置 &gt; colorModeSwitch</RouteLink></li>
</ul>
</li>
</ul>
<h2 id="togglesidebar" tabindex="-1"><a class="header-anchor" href="#togglesidebar"><span>toggleSidebar</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'toggle sidebar'</code></p>
</li>
<li>
<p>详情：</p>
<p>切换侧边栏按钮的标题文字。</p>
<p>它主要是为了站点的可访问性 (a11y) 。</p>
</li>
</ul>
<h2 id="prev" tabindex="-1"><a class="header-anchor" href="#prev"><span>prev</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string | false</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Prev'</code></p>
</li>
<li>
<p>详情：</p>
<p>上一页按钮的文字。设置为 <code v-pre>false</code> 时，将隐藏上一页按钮。</p>
</li>
</ul>
<h2 id="next" tabindex="-1"><a class="header-anchor" href="#next"><span>next</span></a></h2>
<ul>
<li>
<p>类型： <code v-pre>string | false</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Next'</code></p>
</li>
<li>
<p>详情：</p>
<p>下一页按钮的文字。设置为 <code v-pre>false</code> 时，将隐藏下一页按钮。</p>
</li>
</ul>
</div></template>


