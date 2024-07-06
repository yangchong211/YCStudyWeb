<template><div><h1 id="search" tabindex="-1"><a class="header-anchor" href="#search"><span>search</span></a></h1>
<NpmBadge package="@vuepress/plugin-search" /><p>Provide local search to your documentation site.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Default theme will add search box to the navbar once you configure this plugin correctly.</p>
<p>This plugin may not be used directly in other themes, so you'd better refer to the documentation of your theme for more details.</p>
</div>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-search@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> searchPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-search'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="local-search-index" tabindex="-1"><a class="header-anchor" href="#local-search-index"><span>Local Search Index</span></a></h2>
<p>This plugin will generate search index from your pages locally, and load the search index file when users enter your site. In other words, this is a lightweight built-in search which does not require any external requests.</p>
<p>However, when your site has a large number of pages, the size of search index file would be very large, which could slow down the page loading speed. In this case, we recommend you to use a more professional solution - <RouteLink to="/plugins/search/docsearch.html">docsearch</RouteLink>.</p>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>Record&lt;string, { placeholder: string }&gt;</code></p>
</li>
<li>
<p>Details:</p>
<p>The text of the search box in different locales.</p>
<p>If this option is not specified, it will fallback to default text.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          placeholder<span class="token operator">:</span> <span class="token string">'Search'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          placeholder<span class="token operator">:</span> <span class="token string">'搜索'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Also see:
<ul>
<li><a href="https://vuejs.press/guide/i18n.html" target="_blank" rel="noopener noreferrer">Guide &gt; I18n</a></li>
</ul>
</li>
</ul>
<h3 id="hotkeys" tabindex="-1"><a class="header-anchor" href="#hotkeys"><span>hotKeys</span></a></h3>
<ul>
<li>Type: <code v-pre>(string | HotKeyOptions)[]</code></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">HotKeyOptions</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Value of `event.key` to trigger the hot key</span>
<span class="line">     */</span></span>
<span class="line">    key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Whether to press `event.altKey` at the same time</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@default</span> false</span>
<span class="line">     */</span></span>
<span class="line">    alt<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Whether to press `event.ctrlKey` at the same time</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@default</span> false</span>
<span class="line">     */</span></span>
<span class="line">    ctrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Whether to press `event.shiftKey` at the same time</span>
<span class="line">     *</span>
<span class="line">     * <span class="token keyword">@default</span> false</span>
<span class="line">     */</span></span>
<span class="line">    shift<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Default: <code v-pre>['s', '/']</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the <a href="http://keycode.info/" target="_blank" rel="noopener noreferrer">event.key</a> of the hotkeys.</p>
<p>When hotkeys are pressed, the search box input will be focused.</p>
<p>Set to an empty array to disable hotkeys.</p>
</li>
</ul>
<h3 id="maxsuggestions" tabindex="-1"><a class="header-anchor" href="#maxsuggestions"><span>maxSuggestions</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>5</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the maximum number of search results.</p>
</li>
</ul>
<h3 id="issearchable" tabindex="-1"><a class="header-anchor" href="#issearchable"><span>isSearchable</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(page: Page) =&gt; boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>() =&gt; true</code></p>
</li>
<li>
<p>Details:</p>
<p>A function to determine whether a page should be included in the search index.</p>
<ul>
<li>Return <code v-pre>true</code> to include the page.</li>
<li>Return <code v-pre>false</code> to exclude the page.</li>
</ul>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// exclude the homepage</span></span>
<span class="line">      <span class="token function-variable function">isSearchable</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=></span> page<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="getextrafields" tabindex="-1"><a class="header-anchor" href="#getextrafields"><span>getExtraFields</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(page: Page) =&gt; string[]</code></p>
</li>
<li>
<p>Default: <code v-pre>() =&gt; []</code></p>
</li>
<li>
<p>Details:</p>
<p>A function to add extra fields to the search index of a page.</p>
<p>By default, this plugin will use page title and headers as the search index. This option could help you to add more searchable fields.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// allow searching the `tags` frontmatter</span></span>
<span class="line">      <span class="token function-variable function">getExtraFields</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=></span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tags <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2>
<p>You can customize the style of the search box via CSS variables:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--search-bg-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--search-accent-color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--search-text-color</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--search-border-color</span><span class="token punctuation">:</span> #eaecef<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--search-item-text-color</span><span class="token punctuation">:</span> #5d81a5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--search-item-focus-bg-color</span><span class="token punctuation">:</span> #f3f4f5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--search-input-width</span><span class="token punctuation">:</span> 8rem<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--search-result-width</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2>
<h3 id="searchbox" tabindex="-1"><a class="header-anchor" href="#searchbox"><span>SearchBox</span></a></h3>
<ul>
<li>
<p>Details:</p>
<p>This plugin will register a <code v-pre>&lt;SearchBox /&gt;</code> component globally, and you can use it without any props.</p>
<p>Put this component to where you want to place the search box. For example, default theme puts this component to the end of the navbar.</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This component is mainly used for theme development. You don't need to use it directly in most cases.</p>
</div>
</div></template>


