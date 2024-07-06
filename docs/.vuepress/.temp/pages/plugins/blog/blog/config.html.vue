<template><div><h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1>
<h2 id="plugin-options" tabindex="-1"><a class="header-anchor" href="#plugin-options"><span>Plugin Options</span></a></h2>
<h3 id="getinfo" tabindex="-1"><a class="header-anchor" href="#getinfo"><span>getInfo</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(page: Page) =&gt; Record&lt;string, unknown&gt;</code></p>
</li>
<li>
<p>Required: No</p>
</li>
<li>
<p>Reference:</p>
<ul>
<li><RouteLink to="/plugins/blog/blog/guide.html#gathering-info">Guide → Gathering Info</RouteLink></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>Function getting article info.</p>
<p>Article info will be injected in route meta so that they will be available later in client composables.</p>
</li>
</ul>
<h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(page: Page) =&gt; boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>(page) =&gt; Boolean(page.filePathRelative) &amp;&amp; !page.frontmatter.home</code></p>
</li>
<li>
<p>Reference:</p>
<ul>
<li><RouteLink to="/plugins/blog/blog/guide.html#collecting-articles">Guide → Collecting Articles</RouteLink></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>Page filter, determine whether a page should be included.</p>
<p>By default, all the pages generated from Markdown files but not homepage will be included as articles.</p>
</li>
</ul>
<h3 id="category" tabindex="-1"><a class="header-anchor" href="#category"><span>category</span></a></h3>
<ul>
<li>Type: <code v-pre>BlogCategoryOptions[]</code></li>
<li>Required: No</li>
<li>Reference:
<ul>
<li><RouteLink to="/plugins/blog/blog/guide.html#customizing-categories-and-types">Guide → Customizing Categories and Types</RouteLink></li>
</ul>
</li>
<li>Details:
Blog category config, see <a href="#blog-category-config">Blog Category Config</a></li>
</ul>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3>
<ul>
<li>Type: <code v-pre>BlogTypeOptions[]</code></li>
<li>Required: No</li>
<li>Reference:
<ul>
<li><RouteLink to="/plugins/blog/blog/guide.html#customizing-categories-and-types">Guide → Customizing Categories and Types</RouteLink></li>
</ul>
</li>
<li>Details:
Blog type config, see <a href="#blog-type-config">Blog Type Config</a></li>
</ul>
<h3 id="slugify" tabindex="-1"><a class="header-anchor" href="#slugify"><span>slugify</span></a></h3>
<ul>
<li>Type: <code v-pre>(name: string) =&gt; string</code></li>
<li>Default: <code v-pre>(name) =&gt; name.replace(/ _/g, '-').replace(/[:?*|\\/&lt;&gt;]/g, &quot;&quot;).toLowerCase()</code></li>
<li>Details: Slugify function, used to convert key name which they are register in routes.</li>
</ul>
<h3 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt"><span>excerpt</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>true</code></li>
<li>Reference:
<ul>
<li><RouteLink to="/plugins/blog/blog/guide.html#generating-excerpt">Guide → Generating Excerpt</RouteLink></li>
</ul>
</li>
<li>Details: Whether generate excerpt for page.</li>
</ul>
<h3 id="excerptseparator" tabindex="-1"><a class="header-anchor" href="#excerptseparator"><span>excerptSeparator</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&lt;!-- more --&gt;</code></li>
<li>Reference:
<ul>
<li><RouteLink to="/plugins/blog/blog/guide.html#generating-excerpt">Guide → Generating Excerpt</RouteLink></li>
</ul>
</li>
<li>Details: Separator used to split excerpt from page content.</li>
</ul>
<h3 id="excerptlength" tabindex="-1"><a class="header-anchor" href="#excerptlength"><span>excerptLength</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>300</code></p>
</li>
<li>
<p>Reference:</p>
<ul>
<li><RouteLink to="/plugins/blog/blog/guide.html#generating-excerpt">Guide → Generating Excerpt</RouteLink></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>Length of excerpt when auto generating.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Excerpt length will be the minimal possible length reaching this value.</p>
<p>You can set it to <code v-pre>0</code> to disable auto excerpt generation.</p>
</div>
</li>
</ul>
<h3 id="excerptfilter" tabindex="-1"><a class="header-anchor" href="#excerptfilter"><span>excerptFilter</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(page: Page) =&gt; boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>filter</code> option</p>
</li>
<li>
<p>Reference:</p>
<ul>
<li><RouteLink to="/plugins/blog/blog/guide.html#generating-excerpt">Guide → Generating Excerpt</RouteLink></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>Page filter, determine whether the plugin should generate excerpt for it.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You should use this to skip pages that you don't need to generate excerpt for. E.g.: If users set <code v-pre>excerpt</code> or <code v-pre>description</code> in frontmatter, you may want to use them directly.</p>
</div>
</li>
</ul>
<h3 id="iscustomelement" tabindex="-1"><a class="header-anchor" href="#iscustomelement"><span>isCustomElement</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(tagName: string) =&gt; boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>() =&gt; false</code></p>
</li>
<li>
<p>Reference:</p>
<ul>
<li><RouteLink to="/plugins/blog/blog/guide.html#generating-excerpt">Guide → Generating Excerpt</RouteLink></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>Tags which is considered as custom elements.</p>
<p>This is used to determine whether a tag is a custom element since all unknown tags are removed in excerpt.</p>
</li>
</ul>
<h3 id="metascope" tabindex="-1"><a class="header-anchor" href="#metascope"><span>metaScope</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>&quot;_blog&quot;</code></p>
</li>
<li>
<p>Details:</p>
<p>Key used when injecting info to route meta.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Setting to an empty key will inject to route meta directly instead of a field.</p>
</div>
</li>
</ul>
<h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload"><span>hotReload</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: Whether using <code v-pre>--debug</code> flag</p>
</li>
<li>
<p>Details:</p>
<p>Whether enable hotReload in devServer.</p>
<div class="custom-container tip"><p class="custom-container-title">To theme developers</p>
<p>It's disabled by default because it does have performance impact in sites with a lot of categories and types. And it can slow down hotReload speed when editing Markdown.</p>
<p>If users are adding or organizing your categories or tags, you may tell them to enable this, for the rest it's better to keep it disabled.</p>
<p>Also, you can try to detect number of pages in users project and decide whether to enable it.</p>
</div>
</li>
</ul>
<h2 id="blog-category-config" tabindex="-1"><a class="header-anchor" href="#blog-category-config"><span>Blog Category Config</span></a></h2>
<p>Blog category config should be an array, while each item is controlling a &quot;category&quot; rule.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">BlogCategoryOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Unique category name</span>
<span class="line">   */</span></span>
<span class="line">  key<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Function getting category from page</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A custom function to sort the pages</span>
<span class="line">   */</span></span>
<span class="line">  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Path pattern of page to be registered</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> `:key` will be replaced by the "slugify" result of the original key</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> `/:key/`</span>
<span class="line">   */</span></span>
<span class="line">  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Page layout name</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 'Layout'</span>
<span class="line">   */</span></span>
<span class="line">  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Frontmatter</span>
<span class="line">   */</span></span>
<span class="line">  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Item page path pattern or custom function to be registered</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> When filling in a string, `:key` and `:name` will be replaced by the "slugify" result of the original key and name</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> `/:key/:name/`</span>
<span class="line">   */</span></span>
<span class="line">  itemPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Item page layout name</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 'Layout'</span>
<span class="line">   */</span></span>
<span class="line">  itemLayout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Items Frontmatter</span>
<span class="line">   */</span></span>
<span class="line">  itemFrontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blog-type-config" tabindex="-1"><a class="header-anchor" href="#blog-type-config"><span>Blog Type Config</span></a></h2>
<p>Blog type config should be an array, while each item is controlling a &quot;type&quot; rule.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">BlogTypeOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Unique type name</span>
<span class="line">   */</span></span>
<span class="line">  key<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A filter function to determine whether a page should be the type</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A custom function to sort the pages</span>
<span class="line">   */</span></span>
<span class="line">  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Page path to be registered</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> '/:key/'</span>
<span class="line">   */</span></span>
<span class="line">  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Layout name</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 'Layout'</span>
<span class="line">   */</span></span>
<span class="line">  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Frontmatter</span>
<span class="line">   */</span></span>
<span class="line">  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api"><span>Composition API</span></a></h2>
<p>You can import the following API from <code v-pre>@vuepress/plugin-blog/client</code>.</p>
<ul>
<li>
<p>Blog category</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> useBlogCategory<span class="token operator">:</span> <span class="token operator">&lt;</span></span>
<span class="line">  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">></span><span class="token punctuation">(</span></span>
<span class="line">  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> ComputedRef<span class="token operator">&lt;</span>BlogCategoryData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span></span>
<span class="line"></span></code></pre>
</div><p>Argument <code v-pre>key</code> should be the category unique key.</p>
<p>If no key is passed, the plugin will try to use the key in current path.</p>
</li>
<li>
<p>Blog category</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> useBlogType<span class="token operator">:</span> <span class="token operator">&lt;</span></span>
<span class="line">  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">></span><span class="token punctuation">(</span></span>
<span class="line">  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> ComputedRef<span class="token operator">&lt;</span>BlogTypeData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span></span>
<span class="line"></span></code></pre>
</div><p>Argument <code v-pre>key</code> should be the type unique key.</p>
<p>If no key is passed, the plugin will try to use the key in current path.</p>
</li>
</ul>
<p>Returning values are:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Article<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">>></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** Article path */</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/** Article info */</span></span>
<span class="line">  info<span class="token operator">:</span> <span class="token constant">T</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">BlogCategoryData<span class="token operator">&lt;</span></span>
<span class="line">  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** Category path */</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Only available when current route matches an item path</span>
<span class="line">   */</span></span>
<span class="line">  currentItems<span class="token operator">?</span><span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/** Category map */</span></span>
<span class="line">  map<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/** Unique key under current category */</span></span>
<span class="line">    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token doc-comment comment">/** Category path of the key */</span></span>
<span class="line">      path<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">      <span class="token doc-comment comment">/** Category items of the key */</span></span>
<span class="line">      items<span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">BlogTypeData<span class="token operator">&lt;</span></span>
<span class="line">  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** Type path */</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/** Items under current type */</span></span>
<span class="line">  items<span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


