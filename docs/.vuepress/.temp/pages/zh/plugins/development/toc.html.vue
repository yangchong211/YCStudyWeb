<template><div><h1 id="toc" tabindex="-1"><a class="header-anchor" href="#toc"><span>toc</span></a></h1>
<NpmBadge package="@vuepress/plugin-toc" /><p>该插件会提供一个目录 (table-of-contents, TOC) 组件。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-toc@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> tocPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-toc'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">tocPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="与-markdown-目录语法的区别" tabindex="-1"><a class="header-anchor" href="#与-markdown-目录语法的区别"><span>与 Markdown 目录语法的区别</span></a></h2>
<p>与 <a href="https://vuejs.press/zh/guide/markdown.html#%E7%9B%AE%E5%BD%95" target="_blank" rel="noopener noreferrer">Markdown 目录语法</a> 类似，该插件提供的目录组件可以直接在你的 Markdown 内容中使用：</p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token comment">&lt;!-- Markdown 目录语法 --></span></span>
<span class="line"></span>
<span class="line">[[toc]]</span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- Vue 目录组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toc</span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
</div><p>在 Build 模式中，它们都可以被正确地预渲染。然而，它们之间存在一些区别。</p>
<p>Markdown 语法 <code v-pre>[[toc]]</code> 仅能在 Markdown 文件中使用。它是由 markdown-it 解析的，生成的目录是静态内容。</p>
<p>组件 <code v-pre>&lt;Toc/&gt;</code> 既可以用在 Markdown 文件中，也可以用在 Vue 文件中。它是由 Vue 加载的，生成的目录是一个 Vue 组件。</p>
<p>该插件可以和 <RouteLink to="/zh/plugins/development/active-header-links.html">@vuepress/plugin-active-header-links</RouteLink> 协同工作，你只需要将 <RouteLink to="/zh/plugins/development/active-header-links.html#headerlinkselector">headerLinkSelector</RouteLink> 与该插件的 <code v-pre>linkClass</code> 匹配即可。当页面滚动至某个标题锚点后，对应的链接就会被加上 <code v-pre>linkActiveClass</code> 类名。</p>
<p>因此，该插件对于主题开发者来说更为有用。</p>
<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<h3 id="componentname" tabindex="-1"><a class="header-anchor" href="#componentname"><span>componentName</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Toc'</code></p>
</li>
<li>
<p>详情：</p>
<p>指定目录组件的名称。</p>
</li>
</ul>
<h3 id="defaultpropsoptions" tabindex="-1"><a class="header-anchor" href="#defaultpropsoptions"><span>defaultPropsOptions</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>Partial&lt;TocPropsOptions&gt;</code></p>
</li>
<li>
<p>默认值： <code v-pre>{}</code></p>
</li>
<li>
<p>详情：</p>
<p>覆盖组件 <a href="#options">options</a> Prop 的默认值。</p>
</li>
</ul>
<h2 id="组件-props" tabindex="-1"><a class="header-anchor" href="#组件-props"><span>组件 Props</span></a></h2>
<p>目录组件可以通过 Props 来进行自定义。</p>
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toc</span> <span class="token attr-name">:headers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>headers<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers"><span>headers</span></a></h3>
<ul>
<li>类型： <code v-pre>PageHeader[]</code></li>
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
<p>详情：</p>
<p>指定要渲染的标题数组。</p>
<p>如果该 Prop 没有被设置，默认会使用当前页面的标题。</p>
</li>
</ul>
<h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options</span></a></h3>
<ul>
<li>类型： <code v-pre>Partial&lt;TocPropsOptions&gt;</code></li>
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
<p>默认值：</p>
<p>下列默认值可以用过 <a href="#defaultpropsoptions">defaultPropsOptions</a> 来覆盖：</p>
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
<p>详情：</p>
<p>自定义目录组件。</p>
<p>如果 <code v-pre>containerTag</code> 设置为空字符串 <code v-pre>''</code> ，那么最外层的 <code v-pre>&lt;nav&gt;</code> Container 会被完全移除。</p>
</li>
<li>
<p>示例：</p>
<p>使用默认 options 的目录组件的渲染结果类似以下结构：</p>
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


