<template><div><h1 id="prismjs" tabindex="-1"><a class="header-anchor" href="#prismjs"><span>prismjs</span></a></h1>
<NpmBadge package="@vuepress/plugin-prismjs" /><p>This plugin will enable syntax highlighting for markdown code fence with <a href="https://prismjs.com/" target="_blank" rel="noopener noreferrer">Prism.js</a>.</p>
<p>This plugin has been integrated into the default theme.</p>
<p>Notice that this plugin would only tokenize the code fence without adding styles. When using it with a custom theme, you may need to choose and import Prism.js style theme yourself.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-prismjs@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> prismjsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-prismjs'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">prismjsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="preloadlanguages" tabindex="-1"><a class="header-anchor" href="#preloadlanguages"><span>preloadLanguages</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string[]</code></p>
</li>
<li>
<p>Default: <code v-pre>['markdown', 'jsdoc', 'yaml']</code></p>
</li>
<li>
<p>Details:</p>
<p>Languages to preload.</p>
<p>By default, languages will be loaded on demand when parsing markdown files.</p>
<p>However, Prism.js has <a href="https://github.com/PrismJS/prism/issues/2716" target="_blank" rel="noopener noreferrer">some potential issues</a> about loading languages dynamically. To avoid them, you can preload languages via this option.</p>
</li>
</ul>
<h3 id="linenumbers" tabindex="-1"><a class="header-anchor" href="#linenumbers"><span>lineNumbers</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean | number</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<ul>
<li><code v-pre>true</code>: enable line numbers.</li>
<li><code v-pre>false</code>: disabled line numbers.</li>
<li><code v-pre>number</code>: the minimum number of lines to enable line numbers.
For example, if you set it to 4, line numbers will only be enabled when your code block has at least 4 lines of code.</li>
</ul>
<p>You can add <code v-pre>:line-numbers</code> / <code v-pre>:no-line-numbers</code> mark in your fenced code blocks to override the value set in config, and customize the beginning number by adding <code v-pre>=</code> after <code v-pre>:line-numbers</code>. For example, <code v-pre>:line-numbers=2</code> means the line numbers in code blocks will start from <code v-pre>2</code>.</p>
</li>
</ul>
<p><strong>Input:</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts:line-numbers</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// line-numbers is enabled</span></span>
<span class="line"><span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :no-line-numbers</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// line-numbers is disabled</span></span>
<span class="line"><span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :line-numbers=2</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// line-numbers is enabled and start from 2</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="line"><span class="token keyword">const</span> line4 <span class="token operator">=</span> <span class="token string">'This is line 4'</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// line-numbers is enabled</span></span>
<span class="line"><span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// line-numbers is disabled</span></span>
<span class="line"><span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="line"></span></code></pre>
</div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// line-numbers is enabled and start from 2</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="line"><span class="token keyword">const</span> line4 <span class="token operator">=</span> <span class="token string">'This is line 4'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 1"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="highlightlines" tabindex="-1"><a class="header-anchor" href="#highlightlines"><span>highlightLines</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether enable code line highlighting. You can highlight specified lines of your code blocks by adding line ranges mark in your fenced code blocks:</p>
<ul>
<li>Line ranges: <code v-pre>{5-8}</code></li>
<li>Multiple single lines: <code v-pre>{4,7,9}</code></li>
<li>Combined: <code v-pre>{4,7-13,16,23-27,40}</code></li>
</ul>
</li>
</ul>
<p><strong>Input:</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts {1,7-9}</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">'Hello, VuePress'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line highlighted"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">'Hello, VuePress'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line highlighted">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>In the new version, some functionalities similar to <a href="https://shiki.style/packages/transformers" target="_blank" rel="noopener noreferrer">shiki</a> have been implemented, allowing you to style code blocks using the same syntax.</p>
<p>The following features requires additional style to work, which should be handled by themes or users.</p>
<details class="custom-container details"><summary>View Styles Example</summary>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// ------------ code notation highlighting ------------</span></span>
<span class="line"><span class="token comment">// matches `&lt;span class="line xxxx" >&lt;/span>`</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">div[class*='language-'] </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// highlight lines and  notation highlight</span></span>
<span class="line">  <span class="token comment">// `!code highlight` and `!code hl` are the same:</span></span>
<span class="line">  <span class="token comment">// - `// [!code highlight]`</span></span>
<span class="line">  <span class="token comment">// - `// [!code hl]`</span></span>
<span class="line">  <span class="token comment">// - `// [!code highlight:3]`</span></span>
<span class="line">  <span class="token comment">// - `// [!code hl:3]`</span></span>
<span class="line">  <span class="token comment">// It also has the style of error level,</span></span>
<span class="line">  <span class="token comment">// covering the background color with 'warning' and 'error' classes.</span></span>
<span class="line">  <span class="token comment">// - `// [!code warning]`</span></span>
<span class="line">  <span class="token comment">// - `// [!code error]`</span></span>
<span class="line">  <span class="token comment">// - `// [!code warning:3]`</span></span>
<span class="line">  <span class="token comment">// - `// [!code error:3]`</span></span>
<span class="line">  <span class="token selector">.line.highlighted </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0 -24px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 0 24px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--code-highlight-bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">transition</span><span class="token punctuation">:</span> background-color 0.5s<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector"><span class="token parent important">&amp;</span>.error </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--code-highlight-error-bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector"><span class="token parent important">&amp;</span>.warning </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--code-highlight-warning-bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// notation diff line</span></span>
<span class="line">  <span class="token comment">// - class="diff add": `// [!code ++]` or `// [!code ++:3]`</span></span>
<span class="line">  <span class="token comment">// - class="diff remove":  `// [!code --]` or `// [!code --:3]`</span></span>
<span class="line">  <span class="token selector">.line.diff </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0 -24px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 0 24px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">transition</span><span class="token punctuation">:</span> background-color 0.5s<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector"><span class="token parent important">&amp;</span>::before </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector"><span class="token parent important">&amp;</span>.remove </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--code-line-diff-remove-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">opacity</span><span class="token punctuation">:</span> 0.7<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token selector"><span class="token parent important">&amp;</span>::before </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'-'</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--code-line-diff-remove-symbol-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector"><span class="token parent important">&amp;</span>.add </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--code-line-diff-add-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token selector"><span class="token parent important">&amp;</span>::before </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'+'</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--code-line-diff-add-symbol-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// notation focused lines</span></span>
<span class="line">  <span class="token comment">// - `// [!code focus]`</span></span>
<span class="line">  <span class="token comment">// - `// [!code focus:3]`</span></span>
<span class="line">  .has-focused-lines .<span class="token property">line</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>.has-focus<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.7<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>0.095rem<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">transition</span><span class="token punctuation">:</span></span>
<span class="line">      filter 0.35s<span class="token punctuation">,</span></span>
<span class="line">      opacity 0.35s<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  &amp;<span class="token punctuation">:</span>hover .has-focused-lines .<span class="token property">line</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>.has-focus<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// notation word highlight</span></span>
<span class="line">  <span class="token comment">// - `// [!code word:xxx]`</span></span>
<span class="line">  <span class="token comment">// - `// [!code word:xxx:3]`</span></span>
<span class="line">  <span class="token selector">.highlighted-word </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> -1px -2px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 1px 2px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> solid 1px <span class="token function">var</span><span class="token punctuation">(</span>--code-word-highlight-border<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--code-word-highlight-bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// whitespace</span></span>
<span class="line">  <span class="token selector">.tab,</span>
<span class="line">  .space </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token selector">.tab::before,</span>
<span class="line">  .space::before </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.3<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token selector">.tab::before </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'⇥'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token selector">.space::before </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'·'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div>
<h3 id="notationdiff" tabindex="-1"><a class="header-anchor" href="#notationdiff"><span>notationDiff</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details: Whether enable notation diff.</p>
</li>
<li>
<p>Example:</p>
<p><strong>Input:</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hewwo'</span><span class="token punctuation">)</span> <span class="token comment">// [!code --]</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span> <span class="token comment">// [!code ++]</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'goodbye'</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>Output:</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="has-diff language-typescript"><code><span class="line diff remove"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hewwo'</span><span class="token punctuation">)</span> </span>
<span class="line diff add"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'goodbye'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Also see:</p>
<ul>
<li><a href="https://shiki.style/packages/transformers#transformernotationdiff" target="_blank" rel="noopener noreferrer">Shiki &gt; Notation Diff</a></li>
</ul>
</li>
</ul>
<h3 id="notationfocus" tabindex="-1"><a class="header-anchor" href="#notationfocus"><span>notationFocus</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details: Whether enable notation focus.</p>
</li>
<li>
<p>Example:</p>
<p><strong>Input:</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not focused'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Focused'</span><span class="token punctuation">)</span> <span class="token comment">// [!code focus]</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not focused'</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>Output:</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="has-focused-lines language-typescript"><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not focused'</span><span class="token punctuation">)</span></span>
<span class="line has-focus"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Focused'</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not focused'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Also see:</p>
<ul>
<li><a href="https://shiki.style/packages/transformers#transformernotationfocus" target="_blank" rel="noopener noreferrer">Shiki &gt; Notation Focus</a></li>
</ul>
</li>
</ul>
<h3 id="notationhighlight" tabindex="-1"><a class="header-anchor" href="#notationhighlight"><span>notationHighlight</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details: Whether enable notation highlight.</p>
</li>
<li>
<p>Example:</p>
<p><strong>Input:</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not highlighted'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Highlighted'</span><span class="token punctuation">)</span> <span class="token comment">// [!code highlight]</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not highlighted'</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>Output:</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="has-highlighted language-typescript"><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not highlighted'</span><span class="token punctuation">)</span></span>
<span class="line highlighted"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Highlighted'</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not highlighted'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Also see:</p>
<ul>
<li><a href="https://shiki.style/packages/transformers#transformernotationhighlight" target="_blank" rel="noopener noreferrer">Shiki &gt; Notation Highlight</a></li>
</ul>
</li>
</ul>
<h3 id="notationerrorlevel" tabindex="-1"><a class="header-anchor" href="#notationerrorlevel"><span>notationErrorLevel</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details: Whether enable notation error level.</p>
</li>
<li>
<p>Example:</p>
<p><strong>Input:</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'No errors or warnings'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'Warning'</span><span class="token punctuation">)</span> <span class="token comment">// [!code warning]</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error'</span><span class="token punctuation">)</span> <span class="token comment">// [!code error]</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>Output:</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="has-highlighted language-typescript"><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'No errors or warnings'</span><span class="token punctuation">)</span></span>
<span class="line highlighted warning"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'Warning'</span><span class="token punctuation">)</span> </span>
<span class="line highlighted error"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error'</span><span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Also see:</p>
<ul>
<li><a href="https://shiki.style/packages/transformers#transformernotationerrorlevel" target="_blank" rel="noopener noreferrer">Shiki &gt; Notation Error Level</a></li>
</ul>
</li>
</ul>
<h3 id="notationwordhighlight" tabindex="-1"><a class="header-anchor" href="#notationwordhighlight"><span>notationWordHighlight</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details: Whether enable notation word highlight.</p>
<p>Word highlight must be written on a separate line.</p>
</li>
<li>
<p>Example:</p>
<p><strong>Input:</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// [!code word:Hello]</span></span>
<span class="line"><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">'Hello World'</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token comment">// prints Hello World</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>Output:</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">'<span class="highlighted-word">Hello</span> World'</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token comment">// prints <span class="highlighted-word">Hello</span> World</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Example：Highlight words based on the meta string provided on the code snippet</p>
<p><strong>Input:</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">js /Hello/</span></span>
<span class="line"><span class="token code-block language-js"><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">'Hello World'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token comment">// prints Hello World</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>Output:</strong></p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">'<span class="highlighted-word">Hello</span> World'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token comment">// prints <span class="highlighted-word">Hello</span> World</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Also see:</p>
<ul>
<li><a href="https://shiki.style/packages/transformers#transformernotationwordhighlight" target="_blank" rel="noopener noreferrer">Shiki &gt; Notation Word Highlight</a></li>
</ul>
</li>
</ul>
<h3 id="whitespace" tabindex="-1"><a class="header-anchor" href="#whitespace"><span>whitespace</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean | 'all' | 'boundary' | 'trailing'</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details: Whether enable whitespace characters (Space and Tab).</p>
<ul>
<li><code v-pre>true</code>: enable render whitespace, same of <code v-pre>all</code></li>
<li><code v-pre>false</code>: disable render whitespace</li>
<li><code v-pre>'all'</code>: render all whitespace</li>
<li><code v-pre>'boundary'</code>: render leading and trailing whitespace of the line</li>
<li><code v-pre>'trailing'</code>: render trailing whitespace of the line</li>
</ul>
<p>You can add <code v-pre>:whitespace / :no-whitespace</code> mark in your fenced code blocks to override the value set in config, and customize the render type by adding <code v-pre>=</code> after <code v-pre>:whitespace</code>. For example <code v-pre>:whitespace=boundary</code> will render leading and trailing whitespace of the line.</p>
</li>
<li>
<p>Example:</p>
<p><strong>Input:</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :whitespace</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// render all whitespace</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :whitespace=boundary</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// render leading and trailing whitespace of the line</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :whitespace=trailing</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// render trailing whitespace of the line</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :no-whitespace</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// disable render whitespace</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts :whitespace"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">//<span class="space"> </span>render<span class="space"> </span>all<span class="space"> </span>whitespace</span></span>
<span class="line"><span class="token keyword">function</span><span class="space"> </span><span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="space"> </span><span class="token punctuation">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts :whitespace=boundary"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// render leading and trailing whitespace of the line</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts :whitespace=trailing"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// render trailing whitespace of the line</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts :no-whitespace"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// disable render whitespace</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Also see：</p>
<ul>
<li><a href="https://shiki.style/packages/transformers#transformerrenderwhitespace" target="_blank" rel="noopener noreferrer">Shiki &gt; Render Whitespace</a></li>
</ul>
</li>
</ul>
<h3 id="prewrapper" tabindex="-1"><a class="header-anchor" href="#prewrapper"><span>preWrapper</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Adds extra wrapper outside <code v-pre>&lt;pre&gt;</code> tag or not.</p>
<p>The wrapper is required by the <code v-pre>lineNumbers</code>. That means, if you disable <code v-pre>preWrapper</code>, the line line numbers will also be disabled.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You can disable it if you want to implement them in client side. For example, <a href="https://prismjs.com/plugins/line-highlight/" target="_blank" rel="noopener noreferrer">Prismjs Line Highlight</a> or <a href="https://prismjs.com/plugins/line-numbers/" target="_blank" rel="noopener noreferrer">Prismjs Line Numbers</a>.</p>
</div>
</li>
</ul>
</div></template>


