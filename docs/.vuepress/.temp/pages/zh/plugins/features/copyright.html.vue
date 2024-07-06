<template><div><h1 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright"><span>copyright</span></a></h1>
<NpmBadge package="@vuepress/plugin-copyright" /><p>此插件可以在访问者从你的站点复制内容时，自动追加版权信息，也可以禁止站点的复制或者选择。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
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
</div><h3 id="启用版权信息" tabindex="-1"><a class="header-anchor" href="#启用版权信息"><span>启用版权信息</span></a></h3>
<p>此插件<strong>默认全局禁用</strong>。你可以:</p>
<ul>
<li>在特定页面的 frontmatter 中设置 <code v-pre>copy: true</code> 手动开启。</li>
<li>在插件选项中设置 <code v-pre>global: true</code> 让其全局生效，并在页面的 frontmatter 中设置 <code v-pre>copy: false</code> 禁用它。</li>
</ul>
<p>处于不打扰用户的考虑，默认配置下仅当复制长度超过 100 时才会追加版权信息。如果你希望改变这个触发值，你可以插件选项中设置 <code v-pre>triggerLength</code>，或在页面 frontmatter 单独设置 <code v-pre>copy.triggerLength</code>。</p>
<p>你可以通过插件的 <code v-pre>author</code> 和 <code v-pre>license</code> 选项设置全局作者和协议信息。</p>
<p>如果文档的不同部分拥有不同的作者和协议，你可以通过 <code v-pre>authorGetter</code> 和 <code v-pre>licenseGetter</code> 传入一个使用当前页面对象作为参数的函数 <code v-pre>(page: Page) =&gt; string</code> 并通过它返回相应信息。</p>
<p>插件会默认通过模板从作者、协议和页面链接生成版权信息，并在复制时追加。如果你认为这不够灵活，你可以设置 <code v-pre>copyrightGetter</code> 返回一个完全由你自定义的版权信息，或返回 null 以使用默认模板。</p>
<h3 id="禁用复制和选择" tabindex="-1"><a class="header-anchor" href="#禁用复制和选择"><span>禁用复制和选择</span></a></h3>
<p>如果你希望禁止用户复制较长内容，你可以在插件选项中设置 <code v-pre>maxLength</code> 控制这个临界值，或在页面 frontmatter 单独设置 <code v-pre>copy.maxLength</code>。</p>
<ul>
<li>如果你不希望用户复制你的整个站点或特定页面文字，你可以在插件选项中设置 <code v-pre>disableCopy</code> 或在页面 frontmatter 中设置 <code v-pre>copy.disableCopy</code> 来禁用复制，后者具有更高优先级。</li>
<li>如果你不希望用户选择你的整个站点或特定页面文字，你可以在插件选项中设置 <code v-pre>disableSelection</code> 或在页面 frontmatter 中设置 <code v-pre>copy.disableSelection</code> 来禁用文字选择。此选项具有更高优先级</li>
</ul>
<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>author</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>详情：默认作者信息</li>
</ul>
<h3 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>license</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>详情：默认协议信息</li>
</ul>
<h3 id="authorgetter" tabindex="-1"><a class="header-anchor" href="#authorgetter"><span>authorGetter</span></a></h3>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; string | null</code></li>
<li>详情：作者信息获取器</li>
</ul>
<h3 id="licensegetter" tabindex="-1"><a class="header-anchor" href="#licensegetter"><span>licenseGetter</span></a></h3>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; string | null</code></li>
<li>详情：协议信息获取器</li>
</ul>
<h3 id="copyrightgetter" tabindex="-1"><a class="header-anchor" href="#copyrightgetter"><span>copyrightGetter</span></a></h3>
<ul>
<li>类型：<code v-pre>(page: Page) =&gt; string | null</code></li>
<li>详情：协议信息获取器</li>
</ul>
<h3 id="triggerlength" tabindex="-1"><a class="header-anchor" href="#triggerlength"><span>triggerLength</span></a></h3>
<ul>
<li>类型：<code v-pre>number</code></li>
<li>默认值：<code v-pre>100</code></li>
<li>详情：触发附加版权的最小内容长度</li>
</ul>
<h3 id="maxlength" tabindex="-1"><a class="header-anchor" href="#maxlength"><span>maxLength</span></a></h3>
<ul>
<li>类型：<code v-pre>number</code></li>
<li>默认值：<code v-pre>0</code></li>
<li>详情：允许复制的最大内容长度，<code v-pre>0</code> 意味着无限制。</li>
</ul>
<h3 id="global" tabindex="-1"><a class="header-anchor" href="#global"><span>global</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
<li>详情：是否全局启用</li>
</ul>
<h3 id="disablecopy" tabindex="-1"><a class="header-anchor" href="#disablecopy"><span>disableCopy</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
<li>详情：禁用复制</li>
</ul>
<h3 id="disableselection" tabindex="-1"><a class="header-anchor" href="#disableselection"><span>disableSelection</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
<li>详情：禁用选择</li>
</ul>
<h3 id="canonical" tabindex="-1"><a class="header-anchor" href="#canonical"><span>canonical</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>首选部署位置。</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">例子</p>
<p>如果你在 <code v-pre>https://myblog.com</code> 和 <code v-pre>https://blog.com/username/</code> 下部署相同的内容，你可能希望选择一个站点作为首选链接。</p>
<ul>
<li>如果你倾向于使用第一个，你应该将 <code v-pre>canonical</code> 设置为 <code v-pre>https://myblog.com</code></li>
<li>如果你倾向于使用第二个，你应该将 <code v-pre>canonical</code> 设置为 <code v-pre>https://blog.com/username/</code></li>
</ul>
<p>这样，在另一个站点触发的版权信息也会指向你的首选站点。</p>
</div>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>CopyrightPluginLocaleConfig</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">CopyrightPluginLocaleData</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 作者文字</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> `:author` 将会被作者替换</span>
<span class="line">   */</span></span>
<span class="line">  author<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 协议文字</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> `:license` 会被当前协议替换</span>
<span class="line">   */</span></span>
<span class="line">  license<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 链接文字</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> `:link` 会替换为当前页面链接</span>
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
<p>详情：版权插件的国际化配置。</p>
</li>
<li>
<p>示例：</p>
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
<details class="custom-container details"><summary>内置支持语言</summary>
<ul>
<li><strong>简体中文</strong> (zh-CN)</li>
<li><strong>繁体中文</strong> (zh-TW)</li>
<li><strong>英文(美国)</strong> (en-US)</li>
<li><strong>德语</strong> (de-DE)</li>
<li><strong>德语(澳大利亚)</strong> (de-AT)</li>
<li><strong>俄语</strong> (ru-RU)</li>
<li><strong>乌克兰语</strong> (uk-UA)</li>
<li><strong>越南语</strong> (vi-VN)</li>
<li><strong>葡萄牙语(巴西)</strong> (pt-BR)</li>
<li><strong>波兰语</strong> (pl-PL)</li>
<li><strong>法语</strong> (fr-FR)</li>
<li><strong>西班牙语</strong> (es-ES)</li>
<li><strong>斯洛伐克</strong> (sk-SK)</li>
<li><strong>日语</strong> (ja-JP)</li>
<li><strong>土耳其语</strong> (tr-TR)</li>
<li><strong>韩语</strong> (ko-KR)</li>
<li><strong>芬兰语</strong> (fi-FI)</li>
<li><strong>印尼语</strong> (id-ID)</li>
<li><strong>荷兰语</strong> (nl-NL)</li>
</ul>
</details>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<h3 id="copy-triggerlength" tabindex="-1"><a class="header-anchor" href="#copy-triggerlength"><span>copy.triggerLength</span></a></h3>
<ul>
<li>类型：<code v-pre>number</code></li>
<li>默认值：<code v-pre>100</code></li>
<li>详情： 触发附加版权的最小内容长度</li>
</ul>
<h3 id="copy-maxlength" tabindex="-1"><a class="header-anchor" href="#copy-maxlength"><span>copy.maxLength</span></a></h3>
<ul>
<li>类型：<code v-pre>number</code></li>
<li>默认值：<code v-pre>0</code></li>
<li>详情：
允许复制的最大内容长度，<code v-pre>0</code> 意味着无限制。</li>
</ul>
<h3 id="copy-disablecopy" tabindex="-1"><a class="header-anchor" href="#copy-disablecopy"><span>copy.disableCopy</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
<li>详情：禁用复制</li>
</ul>
<h3 id="copy-disableselection" tabindex="-1"><a class="header-anchor" href="#copy-disableselection"><span>copy.disableSelection</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
<li>详情：禁用选择</li>
</ul>
</div></template>


