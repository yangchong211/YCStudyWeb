<template><div><h1 id="prismjs" tabindex="-1"><a class="header-anchor" href="#prismjs"><span>prismjs</span></a></h1>
<NpmBadge package="@vuepress/plugin-prismjs" /><p>该插件使用 <a href="https://prismjs.com/" target="_blank" rel="noopener noreferrer">Prism.js</a> 来为 Markdown 代码块启用代码高亮。</p>
<p>该插件已经集成到默认主题中。</p>
<p>需要注意的是，该插件仅会给代码块添加 HTML 标记，而不会添加样式。当你在一个自定义主题中使用它时，可能需要自己选择并引入 Prism.js 样式主题。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-prismjs@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> prismjsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-prismjs'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">prismjsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<h3 id="preloadlanguages" tabindex="-1"><a class="header-anchor" href="#preloadlanguages"><span>preloadLanguages</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string[]</code></p>
</li>
<li>
<p>默认值： <code v-pre>['markdown', 'jsdoc', 'yaml']</code></p>
</li>
<li>
<p>详情：</p>
<p>需要预加载的语言。</p>
<p>默认情况下，语言会在解析 Markdown 文件时按需加载。</p>
<p>然而， Prism.js 在动态加载语言时可能会遇到 <a href="https://github.com/PrismJS/prism/issues/2716" target="_blank" rel="noopener noreferrer">一些潜在的问题</a> 。为了避免这些问题，你可以使用该配置项来预加载一些语言。</p>
</li>
</ul>
<h3 id="linenumbers" tabindex="-1"><a class="header-anchor" href="#linenumbers"><span>lineNumbers</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean | number</code></p>
</li>
<li>
<p>默认值：<code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<ul>
<li><code v-pre>true</code>：启用代码行号</li>
<li><code v-pre>false</code>：禁用代码行号。</li>
<li><code v-pre>number</code>：显示行号所需的最少行数。
例如，如果你将它设置为 4 ，那么只有在你的代码块包含至少 4 行代码时才会启用行号。</li>
</ul>
<p>你可以在代码块添加 <code v-pre>:line-numbers</code> / <code v-pre>:no-line-numbers</code> 标记来覆盖配置项中的设置，还可以在 <code v-pre>:line-numbers</code> 之后添加 <code v-pre>=</code> 来自定义起始行号，例如 <code v-pre>:line-numbers=2</code> 表示代码块中的行号从 <code v-pre>2</code> 开始。</p>
</li>
</ul>
<p><strong>输入：</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :line-numbers</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// 启用行号</span></span>
<span class="line"><span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :no-line-numbers</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// 禁用行号</span></span>
<span class="line"><span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :line-numbers=2</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// 行号已启用，并从 2 开始</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="line"><span class="token keyword">const</span> line4 <span class="token operator">=</span> <span class="token string">'This is line 4'</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// 启用行号</span></span>
<span class="line"><span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// 禁用行号</span></span>
<span class="line"><span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="line"></span></code></pre>
</div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// 行号已启用，并从 2 开始</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="line"><span class="token keyword">const</span> line4 <span class="token operator">=</span> <span class="token string">'This is line 4'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 1"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="highlightlines" tabindex="-1"><a class="header-anchor" href="#highlightlines"><span>highlightLines</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用行高亮。启用后，可在代码块的信息描述中添加行数标记来高亮指定的行：</p>
<ul>
<li>行数范围：<code v-pre>{5-8}</code></li>
<li>多个单行：<code v-pre>{4,7,9}</code></li>
<li>组合：<code v-pre>{4,7-13,16,23-27,40}</code></li>
</ul>
</li>
</ul>
<p><strong>输入：</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts {1,7-9}</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line highlighted"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line highlighted">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在新的版本中，实现了类似于 <a href="https://shiki.style/packages/transformers" target="_blank" rel="noopener noreferrer">shiki</a> 的部分功能，
你可以使用与其相同的语法来为代码块添加样式。</p>
<p>以下功能需要额外的样式才能正常工作，这应该由主题或用户来处理。</p>
<details class="custom-container details"><summary>查看样式示例</summary>
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
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>false</code></p>
</li>
<li>
<p>详情：是否启用差异标记。</p>
</li>
<li>
<p>示例：</p>
<p><strong>输入：</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hewwo'</span><span class="token punctuation">)</span> <span class="token comment">// [!code --]</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span> <span class="token comment">// [!code ++]</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'goodbye'</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>输出：</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="has-diff language-typescript"><code><span class="line diff remove"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hewwo'</span><span class="token punctuation">)</span> </span>
<span class="line diff add"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'goodbye'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://shiki.tmrs.site/packages/transformers#transformernotationdiff" target="_blank" rel="noopener noreferrer">Shiki &gt; 差异标记</a></li>
</ul>
</li>
</ul>
<h3 id="notationfocus" tabindex="-1"><a class="header-anchor" href="#notationfocus"><span>notationFocus</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>false</code></p>
</li>
<li>
<p>详情：是否启用聚焦标记。</p>
</li>
<li>
<p>示例：</p>
<p><strong>输入：</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not focused'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Focused'</span><span class="token punctuation">)</span> <span class="token comment">// [!code focus]</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not focused'</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>输出：</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="has-focused-lines language-typescript"><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not focused'</span><span class="token punctuation">)</span></span>
<span class="line has-focus"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Focused'</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not focused'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://shiki.tmrs.site/packages/transformers#transformernotationfocus" target="_blank" rel="noopener noreferrer">Shiki &gt; 聚焦标记</a></li>
</ul>
</li>
</ul>
<h3 id="notationhighlight" tabindex="-1"><a class="header-anchor" href="#notationhighlight"><span>notationHighlight</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>false</code></p>
</li>
<li>
<p>详情：是否启用高亮标记。</p>
</li>
<li>
<p>示例：</p>
<p><strong>输入：</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not highlighted'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Highlighted'</span><span class="token punctuation">)</span> <span class="token comment">// [!code highlight]</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not highlighted'</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>输出：</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="has-highlighted language-typescript"><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not highlighted'</span><span class="token punctuation">)</span></span>
<span class="line highlighted"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Highlighted'</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not highlighted'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://shiki.tmrs.site/packages/transformers#transformernotationhighlight" target="_blank" rel="noopener noreferrer">Shiki &gt; 高亮标记</a></li>
</ul>
</li>
</ul>
<h3 id="notationerrorlevel" tabindex="-1"><a class="header-anchor" href="#notationerrorlevel"><span>notationErrorLevel</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>false</code></p>
</li>
<li>
<p>详情：是否启用错误级别标记。</p>
</li>
<li>
<p>示例：</p>
<p><strong>输入：</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'No errors or warnings'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'Warning'</span><span class="token punctuation">)</span> <span class="token comment">// [!code warning]</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error'</span><span class="token punctuation">)</span> <span class="token comment">// [!code error]</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>输出：</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="has-highlighted language-typescript"><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'No errors or warnings'</span><span class="token punctuation">)</span></span>
<span class="line highlighted warning"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'Warning'</span><span class="token punctuation">)</span> </span>
<span class="line highlighted error"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error'</span><span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://shiki.tmrs.site/packages/transformers#transformernotationerrorlevel" target="_blank" rel="noopener noreferrer">Shiki &gt; 错误级别标记</a></li>
</ul>
</li>
</ul>
<h3 id="notationwordhighlight" tabindex="-1"><a class="header-anchor" href="#notationwordhighlight"><span>notationWordHighlight</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>false</code></p>
</li>
<li>
<p>详情：是否启用词高亮标记。</p>
<p>词高亮标记 必须单独写在一行。</p>
</li>
<li>
<p>示例：</p>
<p><strong>输入：</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// [!code word:Hello]</span></span>
<span class="line"><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">'Hello World'</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token comment">// prints Hello World</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>输出：</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">'<span class="highlighted-word">Hello</span> World'</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token comment">// prints <span class="highlighted-word">Hello</span> World</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>示例：根据代码片段中提供的元字符串，高亮显示词</p>
<p><strong>输入：</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">js /Hello/</span></span>
<span class="line"><span class="token code-block language-js"><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">'Hello World'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token comment">// 打印 Hello World</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>输出：</strong></p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">'<span class="highlighted-word">Hello</span> World'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token comment">// 打印 <span class="highlighted-word">Hello</span> World</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://shiki.tmrs.site/packages/transformers#transformernotationwordhighlight" target="_blank" rel="noopener noreferrer">Shiki &gt; 词高亮标记</a></li>
</ul>
</li>
</ul>
<h3 id="whitespace" tabindex="-1"><a class="header-anchor" href="#whitespace"><span>whitespace</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean | 'all' | 'boundary' | 'trailing'</code></p>
</li>
<li>
<p>默认值：<code v-pre>false</code></p>
</li>
<li>
<p>详情：是否启用空白符（空格 和 Tab）渲染。</p>
<ul>
<li><code v-pre>true</code>: 启用空白符渲染，等同于 <code v-pre>all</code></li>
<li><code v-pre>false</code>: 禁用空白符渲染</li>
<li><code v-pre>'all'</code>: 渲染所有空白符</li>
<li><code v-pre>'boundary'</code>: 仅渲染行首行尾的空白符</li>
<li><code v-pre>'trailing'</code>: 仅渲染行尾的空白符</li>
</ul>
<p>你可以在代码块中添加 <code v-pre>:whitespace / :no-whitespace</code> 标记来覆盖配置项中的设置。还可以在 <code v-pre>:whitespace</code> 之后添加 <code v-pre>=</code> 来定义渲染空白符的方式。比如 <code v-pre>:whitespace=boundary</code> 将渲染行首行尾的空白符。</p>
</li>
<li>
<p>示例：</p>
<p><strong>输入：</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :whitespace</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// 渲染所有空白符</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :whitespace=boundary</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// 渲染行首行尾的空白符</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :whitespace=trailing</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// 渲染行尾的空白符</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts :no-whitespace</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token comment">// 禁用空白符</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts :whitespace"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">//<span class="space"> </span>渲染所有空白符</span></span>
<span class="line"><span class="token keyword">function</span><span class="space"> </span><span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="space"> </span><span class="token punctuation">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts :whitespace=boundary"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// 渲染行首行尾的空白符</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts :whitespace=trailing"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// 渲染行尾的空白符</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts :no-whitespace"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// 禁用空白符</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">space</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">tab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://shiki.tmrs.site/packages/transformers#transformerrenderwhitespace" target="_blank" rel="noopener noreferrer">Shiki &gt; 空白符渲染</a></li>
</ul>
</li>
</ul>
<h3 id="prewrapper" tabindex="-1"><a class="header-anchor" href="#prewrapper"><span>preWrapper</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在 <code v-pre>&lt;pre&gt;</code> 标签外添加包裹容器。</p>
<p><code v-pre>lineNumbers</code> 依赖于这个额外的包裹层。这换句话说，如果你禁用了 <code v-pre>preWrapper</code> ，那么行号也会被同时禁用。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果你想要在客户端来实现这些功能时，可以禁用该配置项。比如使用 <a href="https://prismjs.com/plugins/line-highlight/" target="_blank" rel="noopener noreferrer">Prismjs Line Highlight</a> 或者 <a href="https://prismjs.com/plugins/line-numbers/" target="_blank" rel="noopener noreferrer">Prismjs Line Numbers</a>。</p>
</div>
</li>
</ul>
</div></template>


