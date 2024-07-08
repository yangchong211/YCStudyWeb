<template><div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1>
<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项"><span>插件选项</span></a></h2>
<h3 id="getinfo" tabindex="-1"><a class="header-anchor" href="#getinfo"><span>getInfo</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>(page: Page) =&gt; Record&lt;string, unknown&gt;</code></p>
</li>
<li>
<p>必填: 否</p>
</li>
<li>
<p>参考:</p>
<ul>
<li><RouteLink to="/zh/plugins/blog/blog/guide.html#%E6%94%B6%E9%9B%86%E6%96%87%E7%AB%A0%E5%B9%B6%E7%94%9F%E6%88%90%E4%BF%A1%E6%81%AF">指南 → 收集文章并生成信息</RouteLink></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>获取文章信息的函数。</p>
<p>获取到的信息会被稍后注入至路由元数据，以便你可以在客户端中通过组合式 API 获取。</p>
</li>
</ul>
<h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>(page: Page) =&gt; boolean</code></p>
</li>
<li>
<p>默认值: <code v-pre>(page) =&gt; Boolean(page.filePathRelative) &amp;&amp; !page.frontmatter.home</code></p>
</li>
<li>
<p>参考:</p>
<ul>
<li><RouteLink to="/zh/plugins/blog/blog/guide.html#%E6%94%B6%E9%9B%86%E6%96%87%E7%AB%A0%E5%B9%B6%E7%94%9F%E6%88%90%E4%BF%A1%E6%81%AF">指南 → 收集文章并生成信息</RouteLink></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>页面过滤器，此函数用于鉴别页面是否作为文章。</p>
<p>默认情况下，所有从 Markdown 源文件中生成的非主页页面，会被作为文章。</p>
</li>
</ul>
<h3 id="category" tabindex="-1"><a class="header-anchor" href="#category"><span>category</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>BlogCategoryOptions[]</code></p>
</li>
<li>
<p>必填: 否</p>
</li>
<li>
<p>详情：</p>
<ul>
<li><RouteLink to="/zh/plugins/blog/blog/guide.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%88%AB%E5%92%8C%E7%B1%BB%E5%9E%8B">指南 → 自定义类别和类型</RouteLink></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>博客分类配置，详见 <a href="#%E5%8D%9A%E5%AE%A2%E5%88%86%E7%B1%BB%E9%85%8D%E7%BD%AE">博客分类配置</a>。</p>
</li>
</ul>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>BlogTypeOptions[]</code></p>
</li>
<li>
<p>必填: 否</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/plugins/blog/blog/guide.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%88%AB%E5%92%8C%E7%B1%BB%E5%9E%8B">指南 → 自定义类别和类型</RouteLink></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>博客分类配置，详见 <a href="#%E5%8D%9A%E5%AE%A2%E7%B1%BB%E5%9E%8B%E9%85%8D%E7%BD%AE">博客类型配置</a>。</p>
</li>
</ul>
<h3 id="slugify" tabindex="-1"><a class="header-anchor" href="#slugify"><span>slugify</span></a></h3>
<ul>
<li>类型: <code v-pre>(name: string) =&gt; string</code></li>
<li>默认值: <code v-pre>(name) =&gt; name.replace(/ _/g, '-').replace(/[:?*|\\/&lt;&gt;]/g, &quot;&quot;).toLowerCase()</code></li>
<li>详情：Slugify 函数，用于转换 key 在路由中注册的形式。</li>
</ul>
<h3 id="excerpt" tabindex="-1"><a class="header-anchor" href="#excerpt"><span>excerpt</span></a></h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: <code v-pre>true</code></li>
<li>详情：是否生成摘要。</li>
</ul>
<h3 id="excerptseparator" tabindex="-1"><a class="header-anchor" href="#excerptseparator"><span>excerptSeparator</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>默认值: <code v-pre>&lt;!-- more --&gt;</code></li>
<li>详情：摘要分隔符。</li>
</ul>
<h3 id="excerptlength" tabindex="-1"><a class="header-anchor" href="#excerptlength"><span>excerptLength</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>number</code></p>
</li>
<li>
<p>默认值: <code v-pre>300</code></p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/plugins/blog/blog/guide.html#%E6%91%98%E8%A6%81%E7%94%9F%E6%88%90">指南 → 摘要生成</RouteLink></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>自动生成的摘要的长度。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>摘要的长度会尽可能的接近这个值。如果设置为 <code v-pre>0</code>，意味着不自动生成摘要。</p>
</div>
</li>
</ul>
<h3 id="excerptfilter" tabindex="-1"><a class="header-anchor" href="#excerptfilter"><span>excerptFilter</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>(page: Page) =&gt; boolean</code></p>
</li>
<li>
<p>默认值: <code v-pre>filter</code> 选项</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/plugins/blog/blog/guide.html#%E6%91%98%E8%A6%81%E7%94%9F%E6%88%90">指南 → 摘要生成</RouteLink></li>
</ul>
</li>
<li>
<p>详情：
页面过滤器，此函数用于鉴别插件是否需要生成摘要。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>你可以使用此函数来跳过你不需要生成摘要的页面。例如：如果用户在 frontmatter 中设置了 <code v-pre>excerpt</code> 或 <code v-pre>description</code>，你可能希望直接使用它们。</p>
</div>
</li>
</ul>
<h3 id="iscustomelement" tabindex="-1"><a class="header-anchor" href="#iscustomelement"><span>isCustomElement</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>(tagName: string) =&gt; boolean</code></p>
</li>
<li>
<p>默认值: <code v-pre>() =&gt; false</code></p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouteLink to="/zh/plugins/blog/blog/guide.html#%E6%91%98%E8%A6%81%E7%94%9F%E6%88%90">指南 → 摘要生成</RouteLink></li>
</ul>
</li>
<li>
<p>详情：
被认为是自定义元素的标签。</p>
<p>用于判断一个标签是否是自定义元素，因为在摘要中，所有的未知标签都会被移除。</p>
</li>
</ul>
<h3 id="metascope" tabindex="-1"><a class="header-anchor" href="#metascope"><span>metaScope</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>string</code></p>
</li>
<li>
<p>默认值: <code v-pre>&quot;_blog&quot;</code></p>
</li>
<li>
<p>详情：
注入文章信息至路由元数据时使用的键名。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>设置为空字符串会直接注入路由元数据 (而不是一个键下)。</p>
</div>
</li>
</ul>
<h3 id="hotreload" tabindex="-1"><a class="header-anchor" href="#hotreload"><span>hotReload</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值: 是否使用 <code v-pre>--debug</code> 标记</p>
</li>
<li>
<p>详情：
是否在开发服务器中启用实时热重载。</p>
<div class="custom-container tip"><p class="custom-container-title">致主题开发者</p>
<p>默认情况下它是禁用的，因为它确实会对具有很多分类和类别的站点产生性能影响，并且在编辑 Markdown 时会减慢热重载的速度。</p>
<p>如果用户正在添加或组织类别或标签，你可以告诉他们启用此功能，其余的时间最好禁用它。</p>
<p>此外，你可以尝试检测用户项目中的页面数并决定是否启用它。</p>
</div>
</li>
</ul>
<h2 id="博客分类配置" tabindex="-1"><a class="header-anchor" href="#博客分类配置"><span>博客分类配置</span></a></h2>
<p>博客分类配置应为一个数组，每一项控制一个分类规则。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">BlogCategoryOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 唯一的分类名称</span>
<span class="line">   */</span></span>
<span class="line">  key<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 从页面中获取分类的函数</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 页面排序器</span>
<span class="line">   */</span></span>
<span class="line">  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 待注册的页面路径图案</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> `:key` 将会被替换为原 key 的 slugify 结果</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> `/:key/`</span>
<span class="line">   */</span></span>
<span class="line">  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 页面布局组件名称</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 'Layout'</span>
<span class="line">   */</span></span>
<span class="line">  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Front Matter 配置</span>
<span class="line">   */</span></span>
<span class="line">  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 待注册的项目页面路径图案或自定义函数</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> 当填入字符串的时候, `:key` 和 `:name` 会被自动替换为原始的 key、name 的 slugify 结果。</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> `/:key/:name/`</span>
<span class="line">   */</span></span>
<span class="line">  itemPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 项目页面布局组件名称</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 'Layout'</span>
<span class="line">   */</span></span>
<span class="line">  itemLayout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 项目 Front Matter 配置</span>
<span class="line">   */</span></span>
<span class="line">  itemFrontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="博客类型配置" tabindex="-1"><a class="header-anchor" href="#博客类型配置"><span>博客类型配置</span></a></h2>
<p>博客类型配置应为一个数组，每一项控制一个类型规则。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">BlogTypeOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 唯一的类型名称</span>
<span class="line">   */</span></span>
<span class="line">  key<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 一个过滤函数来决定页面是否满足此类型</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 页面排序器</span>
<span class="line">   */</span></span>
<span class="line">  sorter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageA<span class="token operator">:</span> Page<span class="token punctuation">,</span> pageB<span class="token operator">:</span> Page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 待注册的页面路径</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> '/:key/'</span>
<span class="line">   */</span></span>
<span class="line">  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 页面布局组件名称</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 'Layout'</span>
<span class="line">   */</span></span>
<span class="line">  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Front Matter 配置</span>
<span class="line">   */</span></span>
<span class="line">  frontmatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可组合式-api" tabindex="-1"><a class="header-anchor" href="#可组合式-api"><span>可组合式 API</span></a></h2>
<p>你可以从 <code v-pre>@vuepress/plugin-blog/client</code> 导入下列 API:</p>
<ul>
<li>
<p>博客分类</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> useBlogCategory<span class="token operator">:</span> <span class="token operator">&lt;</span></span>
<span class="line">  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">></span><span class="token punctuation">(</span></span>
<span class="line">  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> ComputedRef<span class="token operator">&lt;</span>BlogCategoryData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span></span>
<span class="line"></span></code></pre>
</div><p>参数 <code v-pre>key</code> 为需要获取的键名。如果未传入 key，会尝试使用与当前路径匹配的 key。</p>
</li>
<li>
<p>博客类型</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> useBlogType<span class="token operator">:</span> <span class="token operator">&lt;</span></span>
<span class="line">  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">></span><span class="token punctuation">(</span></span>
<span class="line">  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> ComputedRef<span class="token operator">&lt;</span>BlogTypeData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>></span></span>
<span class="line"></span></code></pre>
</div><p>参数 <code v-pre>key</code> 为需要获取的键名。如果未传入 key，会尝试使用与当前路径匹配的 key。</p>
</li>
</ul>
<p>详细的返回值如下:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Article<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">>></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** 文章路径 */</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/** 文章信息 */</span></span>
<span class="line">  info<span class="token operator">:</span> <span class="token constant">T</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">BlogCategoryData<span class="token operator">&lt;</span></span>
<span class="line">  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** 分类路径 */</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 仅当当前路径和某个子项目匹配时可用</span>
<span class="line">   */</span></span>
<span class="line">  currentItems<span class="token operator">?</span><span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/** 分类映射 */</span></span>
<span class="line">  map<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/** 当前分类下全局唯一的 key */</span></span>
<span class="line">    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token doc-comment comment">/** 对应键值的分类路径 */</span></span>
<span class="line">      path<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">      <span class="token doc-comment comment">/** 对应键值的项目 */</span></span>
<span class="line">      items<span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">BlogTypeData<span class="token operator">&lt;</span></span>
<span class="line">  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** 类别路径 */</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/** 当前类别下的项目 */</span></span>
<span class="line">  items<span class="token operator">:</span> Article<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


