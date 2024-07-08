<template><div><h1 id="toc" tabindex="-1"><a class="header-anchor" href="#toc"><span>toc</span></a></h1>
<NpmBadge package="@vuepress/plugin-toc" /><p>This plugin will provide a table-of-contents (TOC) component.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-toc@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> tocPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-toc'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">tocPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="differences-with-markdown-toc-syntax" tabindex="-1"><a class="header-anchor" href="#differences-with-markdown-toc-syntax"><span>Differences with Markdown TOC Syntax</span></a></h2>
<p>Similar to the <a href="https://vuejs.press/guide/markdown.html#table-of-contents" target="_blank" rel="noopener noreferrer">Table of Contents Markdown Syntax</a>, the TOC component that provided by this plugin could be used in your markdown content directly:</p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token comment">&lt;!-- markdown toc syntax --></span></span>
<span class="line"></span>
<span class="line">[[toc]]</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- vue toc component --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toc</span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
</div><p>Both of them can be pre-rendered correctly in build mode. However, there are some differences between them.</p>
<p>The markdown syntax <code v-pre>[[toc]]</code> could only be used in markdown files. It is parsed by markdown-it, and the generated TOC is static content.</p>
<p>The component <code v-pre>&lt;Toc/&gt;</code> could be used in both markdown files and vue files. It is loaded by vue, and the generated TOC is a vue component.</p>
<p>This plugin could work together with <RouteLink to="/plugins/development/active-header-links.html">@vuepress/plugin-active-header-links</RouteLink> by setting the <RouteLink to="/plugins/development/active-header-links.html#headerlinkselector">headerLinkSelector</RouteLink> to match the <code v-pre>linkClass</code> option. When the page scroll to a certain header anchor, this corresponding link will be added <code v-pre>linkActiveClass</code> class name.</p>
<p>Therefore, this plugin is more useful for theme developers.</p>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="componentname" tabindex="-1"><a class="header-anchor" href="#componentname"><span>componentName</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>'Toc'</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the name of the TOC component.</p>
</li>
</ul>
<h3 id="defaultpropsoptions" tabindex="-1"><a class="header-anchor" href="#defaultpropsoptions"><span>defaultPropsOptions</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>Partial&lt;TocPropsOptions&gt;</code></p>
</li>
<li>
<p>Default: <code v-pre>{}</code></p>
</li>
<li>
<p>Details:</p>
<p>Override the default values of the component <a href="#options-1">options</a> prop.</p>
</li>
</ul>
<h2 id="component-props" tabindex="-1"><a class="header-anchor" href="#component-props"><span>Component Props</span></a></h2>
<p>The TOC component also accepts props for customization.</p>
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toc</span> <span class="token attr-name">:headers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>headers<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers"><span>headers</span></a></h3>
<ul>
<li>Type: <code v-pre>PageHeader[]</code></li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">PageHeader</span> <span class="token punctuation">{</span></span>
<span class="line">  level<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  slug<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  children<span class="token operator">:</span> PageHeader<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>
<p>Details:</p>
<p>Specify the headers array to render.</p>
<p>If this prop is not specified, the headers of current page will be used.</p>
</li>
</ul>
<h3 id="options-1" tabindex="-1"><a class="header-anchor" href="#options-1"><span>options</span></a></h3>
<ul>
<li>Type: <code v-pre>Partial&lt;TocPropsOptions&gt;</code></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">TocPropsOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  containerTag<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  containerClass<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  listClass<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  itemClass<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  linkTag<span class="token operator">:</span> <span class="token string">'a'</span> <span class="token operator">|</span> <span class="token string">'RouterLink'</span> <span class="token operator">|</span> <span class="token string">'RouteLink'</span></span>
<span class="line">  linkClass<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  linkActiveClass<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  linkChildrenActiveClass<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Default:</p>
<p>Following default values can be overridden by <a href="#defaultpropsoptions">defaultPropsOptions</a>.</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  containerTag<span class="token operator">:</span> <span class="token string">'nav'</span><span class="token punctuation">,</span></span>
<span class="line">  containerClass<span class="token operator">:</span> <span class="token string">'vuepress-toc'</span><span class="token punctuation">,</span></span>
<span class="line">  listClass<span class="token operator">:</span> <span class="token string">'vuepress-toc-list'</span><span class="token punctuation">,</span></span>
<span class="line">  itemClass<span class="token operator">:</span> <span class="token string">'vuepress-toc-item'</span><span class="token punctuation">,</span></span>
<span class="line">  linkTag<span class="token operator">:</span> <span class="token string">'RouteLink'</span><span class="token punctuation">,</span></span>
<span class="line">  linkClass<span class="token operator">:</span> <span class="token string">'vuepress-toc-link'</span><span class="token punctuation">,</span></span>
<span class="line">  linkActiveClass<span class="token operator">:</span> <span class="token string">'active'</span><span class="token punctuation">,</span></span>
<span class="line">  linkChildrenActiveClass<span class="token operator">:</span> <span class="token string">'active'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Details:</p>
<p>Customize the TOC component.</p>
<p>If the <code v-pre>containerTag</code> is set to an empty string <code v-pre>''</code>, the <code v-pre>&lt;nav&gt;</code> container will be removed totally.</p>
</li>
<li>
<p>Example:</p>
<p>The rendered TOC component with default options looks like:</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- container --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- list --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token comment">&lt;!-- item --></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- link --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouteLink</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-link<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#foo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouteLink</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token comment">&lt;!-- item with children --></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- link (children active) --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouteLink</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-link active<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#bar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouteLink</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- list (children) --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token comment">&lt;!-- item --></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token comment">&lt;!-- link (active) --></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouteLink</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-link active<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#bar-child<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">              Bar Child</span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouteLink</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


