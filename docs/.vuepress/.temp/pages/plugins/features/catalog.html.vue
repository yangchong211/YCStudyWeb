<template><div><h1 id="catalog" tabindex="-1"><a class="header-anchor" href="#catalog"><span>catalog</span></a></h1>
<NpmBadge package="@vuepress/plugin-catalog" /><p>The plugin can automatically generate catalog pages and provide catalog components.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-catalog@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> catalogPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-catalog'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">catalogPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// Your options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>First, you should set catalog info in routeMeta:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title=".vuepress/config.js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> catalogPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-catalog'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">extendsPage</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// set catalog info in routeMeta</span></span>
<span class="line">    page<span class="token punctuation">.</span>routeMeta <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// catalog title</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span> page<span class="token punctuation">.</span>title<span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// ... other information</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can then import <code v-pre>defineCatalogInfoGetter</code> from <code v-pre>@vuepress/plugin-catalog/client</code> and use it in <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">client config file</a> to extract catalog info from meta.</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title=".vuepress/client.js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineCatalogInfoGetter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-catalog/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineCatalogInfoGetter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">meta</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>meta<span class="token punctuation">.</span>title <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> meta<span class="token punctuation">.</span>title <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>Catalog info should contains:</p>
<ul>
<li><code v-pre>title</code>: catalog title</li>
<li><code v-pre>order</code>: catalog order (optional)</li>
<li><code v-pre>content</code>: catalog content component (optional)</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Sorting with order</p>
<p>The plugin will sort pages by <code v-pre>order</code> in the following way:</p>
<div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">// order positive numbers from small to large</span>
<span class="line">Project with order 1</span>
<span class="line">Project with order 2</span>
<span class="line">...</span>
<span class="line">Project with order 10</span>
<span class="line">...</span>
<span class="line">// Project without order</span>
<span class="line">Project without order</span>
<span class="line">Project without order</span>
<span class="line">...</span>
<span class="line">// order negative numbers from small to large</span>
<span class="line">Project with order -10</span>
<span class="line">// ...</span>
<span class="line">Project with order -2</span>
<span class="line">Project with order -1</span>
<span class="line"></span></code></pre>
</div></div>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="level" tabindex="-1"><a class="header-anchor" href="#level"><span>level <Badge text="Built-in component only" /></span></a></h3>
<ul>
<li>Type: <code v-pre>1 | 2 | 3</code></li>
<li>Default: <code v-pre>3</code></li>
<li>Details: Max depth of catalog items.</li>
</ul>
<h3 id="index" tabindex="-1"><a class="header-anchor" href="#index"><span>index <Badge text="Built-in component only" /></span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
<li>Details: Whether show index for catalog</li>
</ul>
<h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>frontmatter</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(path: string) =&gt; Record&lt;string, any&gt;</code></p>
</li>
<li>
<p>Required: No</p>
</li>
<li>
<p>Details: Frontmatter getter for the generated page.</p>
</li>
<li>
<p>Example:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title=".vuepress/config.js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> catalogPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-catalog'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">catalogPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">frontmatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// frontmatter you want</span></span>
<span class="line">        <span class="token comment">// you may customize title, author. time, etc.</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude"><span>exclude</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(RegExp | string)[]</code></p>
</li>
<li>
<p>Default: <code v-pre>[]</code></p>
</li>
<li>
<p>Details:</p>
<p>Catalog page path to be excluded during generation.</p>
<ul>
<li><code v-pre>&quot;/foo/&quot;</code> means only exclude catalog page generation at <code v-pre>/foo/</code> folder.</li>
<li><code v-pre>/^\/foo\//</code> means exclude catalog page generation at <code v-pre>/foo/</code> folder and its subfolders.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">404 pages will be automatically excluded.</p>
</div>
</li>
</ul>
<h3 id="component" tabindex="-1"><a class="header-anchor" href="#component"><span>component</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: No</li>
<li>Details: Component name to use as catalog.</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>CatalogPluginLocaleConfig</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">CatalogPluginLocaleData</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Catalog title</span>
<span class="line">   */</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Empty hint</span>
<span class="line">   */</span></span>
<span class="line">  empty<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">CatalogPluginLocaleConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CatalogPluginLocaleData</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Required: No</p>
</li>
<li>
<p>Details: Locales config for catalog component.</p>
</li>
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
<h2 id="client-options" tabindex="-1"><a class="header-anchor" href="#client-options"><span>Client options</span></a></h2>
<h3 id="definecataloginfogetter" tabindex="-1"><a class="header-anchor" href="#definecataloginfogetter"><span>defineCatalogInfoGetter</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">CatalogInfo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** Catalog title */</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/** Catalog order */</span></span>
<span class="line">  order<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/** Catalog content */</span></span>
<span class="line">  content<span class="token operator">?</span><span class="token operator">:</span> Component</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">CatalogInfoGetter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>meta<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> CatalogInfo <span class="token operator">|</span> <span class="token keyword">null</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">defineCatalogInfoGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> CatalogInfoGetter<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Customize how to extract catalog info from meta.</p>
<h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2>
<h3 id="catalog-1" tabindex="-1"><a class="header-anchor" href="#catalog-1"><span>Catalog</span></a></h3>
<ul>
<li>
<p>Details:</p>
<p>The plugin will globally register a <code v-pre>&lt;Catalog /&gt;</code> component by default (unless you set the <code v-pre>component</code> option).</p>
<p>You can use <code v-pre>&lt;Catalog /&gt;</code> in the theme layout or directly in the Markdown file.</p>
<p>The component supports four props:</p>
<ul>
<li><code v-pre>level</code>: Change the display depth (maximum support 3 levels), default is <code v-pre>3</code>.</li>
<li><code v-pre>base</code>: Display catalog of the specified folder, default is the current folder directory.</li>
<li><code v-pre>index</code>: Add an index number to the directory item, default is no number.</li>
<li><code v-pre>hideHeading</code>: Hide the component title, default is to display the <code v-pre>Catalog</code> title.</li>
</ul>
</li>
</ul>
<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2>
<p>You can customize the style of catalog via CSS variables:</p>
<div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--catalog-bg-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--catalog-bg-secondary-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--catalog-border-color</span><span class="token punctuation">:</span> #e5e5e5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--catalog-active-color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--catalog-hover-color</span><span class="token punctuation">:</span> #71cda3<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></div></template>


