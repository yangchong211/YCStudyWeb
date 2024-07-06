<template><div><h1 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright"><span>copyright</span></a></h1>
<NpmBadge package="@vuepress/plugin-copyright" /><p>This plugin can automatically append copyright information when visitors copy content from your site, and can also prohibit site copying or selection.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-copyright@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> copyrightPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-copyright'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">copyrightPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="enabling-copyright" tabindex="-1"><a class="header-anchor" href="#enabling-copyright"><span>Enabling Copyright</span></a></h3>
<p>This plugin <strong>is disabled globally by default</strong>, you can:</p>
<ul>
<li>Manually enable it by setting <code v-pre>copy: true</code> in page frontmatter</li>
<li>Set <code v-pre>global: true</code> in plugin options to enable it globally, and set <code v-pre>copy: false</code> in page frontmatter to disable it.</li>
</ul>
<p>To avoid disturbing visitors, copyright information will be appended only when the copied content length is greater than 100. Set <code v-pre>triggerLength</code> in plugin options if you want to change this threshold, or via <code v-pre>copy.triggerLength</code> in page frontmatter.</p>
<p>You can set default author and license information via <code v-pre>author</code> and <code v-pre>license</code> in plugin options.</p>
<p>If your site have different authors and license in different pages, you can set <code v-pre>authorGetter</code> and <code v-pre>licenseGetter</code> with function <code v-pre>(page: Page) =&gt; string</code> that takes the current page object as parameter and returns the corresponding information.</p>
<p>The plugin will generate copyright information from author, license, and page link via template by default, and append it when copying. If you think that this is not flexible enough, you can set <code v-pre>copyrightGetter</code> option to return a completely customized information with Page object or return null to use the default template.</p>
<h3 id="disable-copy-and-selection" tabindex="-1"><a class="header-anchor" href="#disable-copy-and-selection"><span>Disable Copy and Selection</span></a></h3>
<p>If you want to prevent users copying long content, you can set <code v-pre>maxLength</code> in plugin options to customize this limit, or via <code v-pre>copy.maxLength</code> in page frontmatter.</p>
<ul>
<li>If you don't want users to copy your entire site or specific page text, you can set <code v-pre>disableCopy</code> in plugin options or <code v-pre>copy.disableCopy</code> in page frontmatter, the latter has higher priority.</li>
<li>If you don't want users to select your entire site or specific page text, you can set <code v-pre>disableSelection</code> in plugin options or <code v-pre>copy.disableSelection</code> in page frontmatter. This option has higher priority.</li>
</ul>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>author</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details: Default author Information</li>
</ul>
<h3 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>license</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details: Default license Information</li>
</ul>
<h3 id="authorgetter" tabindex="-1"><a class="header-anchor" href="#authorgetter"><span>authorGetter</span></a></h3>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; string | null</code></li>
<li>Details: Author getter</li>
</ul>
<h3 id="licensegetter" tabindex="-1"><a class="header-anchor" href="#licensegetter"><span>licenseGetter</span></a></h3>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; string | null</code></li>
<li>Details: License getter</li>
</ul>
<h3 id="copyrightgetter" tabindex="-1"><a class="header-anchor" href="#copyrightgetter"><span>copyrightGetter</span></a></h3>
<ul>
<li>Type: <code v-pre>(page: Page) =&gt; string | null</code></li>
<li>Details: Copyright getter</li>
</ul>
<h3 id="triggerlength" tabindex="-1"><a class="header-anchor" href="#triggerlength"><span>triggerLength</span></a></h3>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Default: <code v-pre>100</code></li>
<li>Details: Min content length triggering copyright append</li>
</ul>
<h3 id="maxlength" tabindex="-1"><a class="header-anchor" href="#maxlength"><span>maxLength</span></a></h3>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Default: <code v-pre>0</code></li>
<li>Details: Max content length which allows to copy, <code v-pre>0</code> means no limit.</li>
</ul>
<h3 id="global" tabindex="-1"><a class="header-anchor" href="#global"><span>global</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
<li>Details: Whether enable globally.</li>
</ul>
<h3 id="disablecopy" tabindex="-1"><a class="header-anchor" href="#disablecopy"><span>disableCopy</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
<li>Details: Disable copy</li>
</ul>
<h3 id="disableselection" tabindex="-1"><a class="header-anchor" href="#disableselection"><span>disableSelection</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
<li>Details: Disable selection</li>
</ul>
<h3 id="canonical" tabindex="-1"><a class="header-anchor" href="#canonical"><span>canonical</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details: Canonical deploy location.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Example</p>
<p>If you are deploying same content under <code v-pre>https://myblog.com</code> and <code v-pre>https://blog.com/username/</code>, you may want to prefer one site as reference link.</p>
<ul>
<li>If you prefer the first one, you should set <code v-pre>canonical</code> to <code v-pre>https://myblog.com</code></li>
<li>If you prefer the second one, you should set <code v-pre>canonical</code> to <code v-pre>https://blog.com/username/</code></li>
</ul>
<p>So copyright message triggered on another site also points to your preferred site.</p>
</div>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>CopyrightPluginLocaleConfig</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">CopyrightPluginLocaleData</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Author text</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> `:author` will be replaced by author</span>
<span class="line">   */</span></span>
<span class="line">  author<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * License text</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> `:license` will be replaced by current license</span>
<span class="line">   */</span></span>
<span class="line">  license<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Link text</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> `:link` will be replaced by current page link</span>
<span class="line">   */</span></span>
<span class="line">  link<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">CopyrightPluginLocaleConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CopyrightPluginLocaleData</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Details: Locale config for copyright plugin.</p>
</li>
<li>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> copyrightPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-copyright'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// this is a supported language</span></span>
<span class="line">      lang<span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'/xx/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// the plugin does not support this language</span></span>
<span class="line">      lang<span class="token operator">:</span> <span class="token string">'mm-NN'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">copyrightPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// Override link text</span></span>
<span class="line">          link<span class="token operator">:</span> <span class="token string">'Original posted at :link'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">        <span class="token string-property property">'/xx/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// Complete locale config for `mm-NN` language here</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<details class="custom-container details"><summary>Built-in Supported Languages</summary>
<ul>
<li><strong>Simplified Chinese</strong> (zh-CN)</li>
<li><strong>Traditional Chinese</strong> (zh-TW)</li>
<li><strong>English (United States)</strong> (en-US)</li>
<li><strong>German</strong> (de-DE)</li>
<li><strong>German (Australia)</strong> (de-AT)</li>
<li><strong>Russian</strong> (ru-RU)</li>
<li><strong>Ukrainian</strong> (uk-UA)</li>
<li><strong>Vietnamese</strong> (vi-VN)</li>
<li><strong>Portuguese (Brazil)</strong> (pt-BR)</li>
<li><strong>Polish</strong> (pl-PL)</li>
<li><strong>French</strong> (fr-FR)</li>
<li><strong>Spanish</strong> (es-ES)</li>
<li><strong>Slovak</strong> (sk-SK)</li>
<li><strong>Japanese</strong> (ja-JP)</li>
<li><strong>Turkish</strong> (tr-TR)</li>
<li><strong>Korean</strong> (ko-KR)</li>
<li><strong>Finnish</strong> (fi-FI)</li>
<li><strong>Indonesian</strong> (id-ID)</li>
<li><strong>Dutch</strong> (nl-NL)</li>
</ul>
</details>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<h3 id="copy-triggerlength" tabindex="-1"><a class="header-anchor" href="#copy-triggerlength"><span>copy.triggerLength</span></a></h3>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Default: <code v-pre>100</code></li>
<li>Details: Min content length triggering copyright append</li>
</ul>
<h3 id="copy-maxlength" tabindex="-1"><a class="header-anchor" href="#copy-maxlength"><span>copy.maxLength</span></a></h3>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Default: <code v-pre>0</code></li>
<li>Details: Max content length which allows to copy, <code v-pre>0</code> means no limit.</li>
</ul>
<h3 id="copy-disablecopy" tabindex="-1"><a class="header-anchor" href="#copy-disablecopy"><span>copy.disableCopy</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
<li>Details: Disable copy</li>
</ul>
<h3 id="copy-disableselection" tabindex="-1"><a class="header-anchor" href="#copy-disableselection"><span>copy.disableSelection</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
<li>Details: Disable selection</li>
</ul>
</div></template>


