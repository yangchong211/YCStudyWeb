<template><div><h1 id="locale-config" tabindex="-1"><a class="header-anchor" href="#locale-config"><span>Locale Config</span></a></h1>
<p>These options configure locale-related texts.</p>
<p>If your site is served in a different language besides English, you should set these options per locale to provide translations.</p>
<h2 id="repolabel" tabindex="-1"><a class="header-anchor" href="#repolabel"><span>repoLabel</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the repository label of your project.</p>
<p>This will be used as the text of the <em>repository link</em>, which will be displayed as the last item of the navbar.</p>
<p>If you don't set this option explicitly, it will be automatically inferred from the <RouteLink to="/themes/default/config.html#repo">repo</RouteLink> option.</p>
</li>
</ul>
<h2 id="selectlanguagetext" tabindex="-1"><a class="header-anchor" href="#selectlanguagetext"><span>selectLanguageText</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the text of the <em>select language menu</em>.</p>
<p>The <em>select language menu</em> will appear next to the repository button in the navbar when you set multiple <RouteLink to="/themes/default/config.html#locales">locales</RouteLink> in your site config.</p>
</li>
</ul>
<h2 id="selectlanguagearialabel" tabindex="-1"><a class="header-anchor" href="#selectlanguagearialabel"><span>selectLanguageAriaLabel</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the <code v-pre>aria-label</code> attribute of the <em>select language menu</em>.</p>
<p>This is mainly for a11y purpose.</p>
</li>
</ul>
<h2 id="selectlanguagename" tabindex="-1"><a class="header-anchor" href="#selectlanguagename"><span>selectLanguageName</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the name of the language of a locale.</p>
<p>This option will <strong>only take effect inside</strong> the <RouteLink to="/themes/default/config.html#locales">locales</RouteLink> of your theme config. It will be used as the language name of the locale, which will be displayed in the <em>select language menu</em>.</p>
</li>
<li>
<p>Example:</p>
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
<p>Type: <code v-pre>null | string</code></p>
</li>
<li>
<p>Details:</p>
<p><code v-pre>aria-label</code> value for main navigation in navbar.</p>
</li>
</ul>
<h2 id="pagenavbarlabel" tabindex="-1"><a class="header-anchor" href="#pagenavbarlabel"><span>pageNavbarLabel</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>null | string</code></p>
</li>
<li>
<p>Details:</p>
<p><code v-pre>aria-label</code> value for next/previous page navigation.</p>
</li>
</ul>
<h2 id="editlinktext" tabindex="-1"><a class="header-anchor" href="#editlinktext"><span>editLinkText</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>'Edit this page'</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the text of the <em>edit this page</em> link.</p>
</li>
</ul>
<h2 id="lastupdatedtext" tabindex="-1"><a class="header-anchor" href="#lastupdatedtext"><span>lastUpdatedText</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>'Last Updated'</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the text of the <em>last updated timestamp</em> label.</p>
</li>
</ul>
<h2 id="contributorstext" tabindex="-1"><a class="header-anchor" href="#contributorstext"><span>contributorsText</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>'Contributors'</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the text of the <em>contributors list</em> label.</p>
</li>
</ul>
<h2 id="tip" tabindex="-1"><a class="header-anchor" href="#tip"><span>tip</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>'TIP'</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the default title of the tip <RouteLink to="/themes/default/markdown.html#custom-containers">custom containers</RouteLink>.</p>
</li>
</ul>
<h2 id="warning" tabindex="-1"><a class="header-anchor" href="#warning"><span>warning</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>'WARNING'</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the default title of the warning <RouteLink to="/themes/default/markdown.html#custom-containers">custom containers</RouteLink>.</p>
</li>
</ul>
<h2 id="danger" tabindex="-1"><a class="header-anchor" href="#danger"><span>danger</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>'DANGER'</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the default title of the danger <RouteLink to="/themes/default/markdown.html#custom-containers">custom containers</RouteLink>.</p>
</li>
</ul>
<h2 id="notfound" tabindex="-1"><a class="header-anchor" href="#notfound"><span>notFound</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string[]</code></p>
</li>
<li>
<p>Default: <code v-pre>['Not Found']</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the messages of the 404 page.</p>
<p>The message will be randomly picked from the array when users enter the 404 page.</p>
</li>
</ul>
<h2 id="backtohome" tabindex="-1"><a class="header-anchor" href="#backtohome"><span>backToHome</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>'Back to home'</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the text of the <em>back to home</em> link in the 404 page.</p>
</li>
</ul>
<h2 id="togglecolormode" tabindex="-1"><a class="header-anchor" href="#togglecolormode"><span>toggleColorMode</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>'toggle color mode'</code></p>
</li>
<li>
<p>Details:</p>
<p>Title text for the color mode toggle button.</p>
<p>This is mainly for a11y purpose.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouteLink to="/themes/default/config.html#colormodeswitch">Default Theme &gt; Config &gt; colorModeSwitch</RouteLink></li>
</ul>
</li>
</ul>
<h2 id="togglesidebar" tabindex="-1"><a class="header-anchor" href="#togglesidebar"><span>toggleSidebar</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>'toggle sidebar'</code></p>
</li>
<li>
<p>Details:</p>
<p>Title text for sidebar toggle button.</p>
<p>This is mainly for a11y purpose.</p>
</li>
</ul>
<h2 id="prev" tabindex="-1"><a class="header-anchor" href="#prev"><span>prev</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string | false</code></p>
</li>
<li>
<p>Default: <code v-pre>'Prev'</code></p>
</li>
<li>
<p>Details:</p>
<p>Text for the previous page navigation button.</p>
<p>Set to <code v-pre>false</code> to disable the previous page navigation button.</p>
</li>
</ul>
<h2 id="next" tabindex="-1"><a class="header-anchor" href="#next"><span>next</span></a></h2>
<ul>
<li>
<p>Type: <code v-pre>string | false</code></p>
</li>
<li>
<p>Default: <code v-pre>'Next'</code></p>
</li>
<li>
<p>Details:</p>
<p>Text for the next page navigation button.</p>
<p>Set to <code v-pre>false</code> to disable the next page navigation button.</p>
</li>
</ul>
</div></template>


