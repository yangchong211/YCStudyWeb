<template><div><h1 id="copy-code" tabindex="-1"><a class="header-anchor" href="#copy-code"><span>copy-code</span></a></h1>
<NpmBadge package="@vuepress/plugin-copy-code" /><p>This plugin will automatically add a copy button to the top right corner of each code block on PC devices.</p>
<p>The default selector matches <code v-pre>@vuepress/theme-default</code>, so you might need to change it when integrating your own theme.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-copy-code@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> copyCodePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-copy-code'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">copyCodePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>selector</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string | string[]</code></p>
</li>
<li>
<p>Default: <code v-pre>'.theme-default-content div[class*=&quot;language-&quot;] pre'</code></p>
</li>
<li>
<p>Details:</p>
<p>Code block selector</p>
</li>
</ul>
<h3 id="showinmobile" tabindex="-1"><a class="header-anchor" href="#showinmobile"><span>showInMobile</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether to display copy button on the mobile device</p>
</li>
</ul>
<h3 id="duration" tabindex="-1"><a class="header-anchor" href="#duration"><span>duration</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>2000</code></p>
</li>
<li>
<p>Details:</p>
<p>Hint display time, setting it to <code v-pre>0</code> will disable the hint.</p>
</li>
</ul>
<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>800</code></p>
</li>
<li>
<p>Details:</p>
<p>The delay of registering copy code buttons, in ms.</p>
<p>If the theme you are using has a switching animation, it is recommended to configure this option to <code v-pre>Switch animation duration + 200</code>.</p>
</li>
</ul>
<h3 id="ignoreselector" tabindex="-1"><a class="header-anchor" href="#ignoreselector"><span>ignoreSelector</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string[]</code></p>
</li>
<li>
<p>Details:</p>
<p>Elements selector in code blocks, used to ignore related elements when copying.</p>
<p>For example, <code v-pre>['.token.comment']</code> will ignore nodes with the class name <code v-pre>.token.comment</code> in code blocks (which in <code v-pre>prismjs</code> refers to ignoring comments).</p>
</li>
</ul>
<h3 id="transform" tabindex="-1"><a class="header-anchor" href="#transform"><span>transform <Badge type="tip" text="Composables API Only" /></span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(preElement: HTMLPreElement) =&gt; void</code></p>
</li>
<li>
<p>Default: <code v-pre>undefined</code></p>
</li>
<li>
<p>Details:</p>
<p>A transformer to modify the content of the code block in the <code v-pre>&lt;pre&gt;</code> element before copying. This option is only valid when using <code v-pre>useCopyCode()</code>.</p>
</li>
<li>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useCopyCode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-copy-code/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">useCopyCode</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">transform</span><span class="token operator">:</span> <span class="token punctuation">(</span>preElement<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Remove all `.ignore` elements</span></span>
<span class="line">        pre<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'.ignore'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">// insert copyright</span></span>
<span class="line">        pre<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n Copied by VuePress</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// ...other options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>CopyCodePluginLocaleConfig</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">CopyCodePluginLocaleData</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Copy text</span>
<span class="line">   */</span></span>
<span class="line">  copy<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Copied text</span>
<span class="line">   */</span></span>
<span class="line">  copied<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">CopyCodePluginLocaleConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CopyCodePluginLocaleData</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Required: No</p>
</li>
<li>
<p>Details:</p>
<p>Locales config for copy code plugin.</p>
</li>
<li>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> copyCodePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-copy-code'</span></span>
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
<span class="line">    <span class="token function">copyCodePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// Override copy button label text</span></span>
<span class="line">          copy<span class="token operator">:</span> <span class="token string">'Copy Codes from code block'</span><span class="token punctuation">,</span></span>
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
<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2>
<p>You can customize the icon of the <em>copy button</em> via CSS variables:</p>
<div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--code-copy-icon</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2' /%3e%3c/svg%3e"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--code-copied-icon</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4' /%3e%3c/svg%3e"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--copy-code-color</span><span class="token punctuation">:</span> #9e9e9e<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--copy-code-hover</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 / 50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></div></template>


