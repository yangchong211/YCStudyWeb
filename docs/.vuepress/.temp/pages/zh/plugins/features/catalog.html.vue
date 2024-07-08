<template><div><h1 id="catalog" tabindex="-1"><a class="header-anchor" href="#catalog"><span>catalog</span></a></h1>
<NpmBadge package="@vuepress/plugin-catalog" /><p>此插件可以自动生成目录页面，也提供目录组件。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-catalog@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> catalogPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-catalog'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">catalogPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 你的选项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>首先，你应该在路由元信息中设置目录信息:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title=".vuepress/config.js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> catalogPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-catalog'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">extendsPage</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 在 routeMeta 中设置目录信息</span></span>
<span class="line">    page<span class="token punctuation">.</span>routeMeta <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 目录标题</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span> page<span class="token punctuation">.</span>title<span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// ... 其他信息</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以之后导入 <code v-pre>defineCatalogInfoGetter</code> 并在 <a href="https://vuejs.press/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">客户端配置文件</a> 中使用它来从元信息中提取目录信息。</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title=".vuepress/client.js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineCatalogInfoGetter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-catalog/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineCatalogInfoGetter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">meta</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>meta<span class="token punctuation">.</span>title <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> meta<span class="token punctuation">.</span>title <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>目录信息应包含:</p>
<ul>
<li><code v-pre>title</code>: 目录标题</li>
<li><code v-pre>order</code>: 目录顺序 (可选)</li>
<li><code v-pre>content</code>: 目录内容组件 (可选)</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">通过 order 排序</p>
<p>插件将按以下方式通过 <code v-pre>order</code> 对页面进行排序:</p>
<div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">// 从小到大依次排列正数</span>
<span class="line">order 1 的项目</span>
<span class="line">order 2 的项目</span>
<span class="line">...</span>
<span class="line">order 10 的项目</span>
<span class="line">...</span>
<span class="line">// 无 order 的项目</span>
<span class="line">无 order 的项目</span>
<span class="line">无 order 的项目</span>
<span class="line">...</span>
<span class="line">// 从小到大依次排列负数</span>
<span class="line">order -10 的项目</span>
<span class="line">// ...</span>
<span class="line">order -2 的项目</span>
<span class="line">order -1 的项目</span>
<span class="line"></span></code></pre>
</div></div>
<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="level" tabindex="-1"><a class="header-anchor" href="#level"><span>level <Badge text="仅限内置组件" /></span></a></h3>
<ul>
<li>类型：<code v-pre>1 | 2 | 3</code></li>
<li>默认值：<code v-pre>3</code></li>
<li>详情：目录项级别的最大深度。</li>
</ul>
<h3 id="index" tabindex="-1"><a class="header-anchor" href="#index"><span>index <Badge text="仅限内置组件" /></span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
<li>详情：目录是否显示索引</li>
</ul>
<h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>frontmatter</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>(path: string) =&gt; Record&lt;string, any&gt;</code></p>
</li>
<li>
<p>详情：生成页面的 Frontmatter 获取器。</p>
</li>
<li>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title=".vuepress/config.js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> catalogPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-catalog'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">catalogPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">frontmatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 你想要的 frontmatter</span></span>
<span class="line">        <span class="token comment">// 你可以自定义标题、作者、时间等</span></span>
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
<p>类型：<code v-pre>(RegExp | string)[]</code></p>
</li>
<li>
<p>默认值：<code v-pre>[]</code></p>
</li>
<li>
<p>详情：</p>
<p>生成中需要排除的目录页路径。</p>
<ul>
<li><code v-pre>&quot;/foo/&quot;</code> 意味着仅排除 <code v-pre>/foo/</code> 文件夹的目录页生成。</li>
<li><code v-pre>/^\/foo\//</code> 意味着排除 <code v-pre>/foo/</code> 文件夹及其子文件夹的目录页生成。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">404 页面会被自动排除。</p>
</div>
</li>
</ul>
<h3 id="component" tabindex="-1"><a class="header-anchor" href="#component"><span>component</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>详情：用作目录的组件名称。</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>CatalogPluginLocaleConfig</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">CatalogPluginLocaleData</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 目录标题</span>
<span class="line">   */</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 空目录提示</span>
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
<p>必填: 否</p>
</li>
<li>
<p>详情：目录组件国际化配置。</p>
</li>
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
<li><strong>印尼语</strong> (id-ID)</li>
<li><strong>荷兰语</strong> (nl-NL)</li>
</ul>
</details>
<h2 id="客户端选项" tabindex="-1"><a class="header-anchor" href="#客户端选项"><span>客户端选项</span></a></h2>
<h3 id="definecataloginfogetter" tabindex="-1"><a class="header-anchor" href="#definecataloginfogetter"><span>defineCatalogInfoGetter</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">CatalogInfo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** 目录标题 */</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/** 目录顺序 */</span></span>
<span class="line">  order<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/** 目录内容 */</span></span>
<span class="line">  content<span class="token operator">?</span><span class="token operator">:</span> Component</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">CatalogInfoGetter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>meta<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> CatalogInfo <span class="token operator">|</span> <span class="token keyword">null</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">defineCatalogInfoGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> CatalogInfoGetter<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义如何从 meta 中提取目录信息。</p>
<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2>
<h3 id="catalog-1" tabindex="-1"><a class="header-anchor" href="#catalog-1"><span>Catalog</span></a></h3>
<ul>
<li>
<p>详情：</p>
<p>该插件默认会全局注册一个 <code v-pre>&lt;Catalog /&gt;</code> 组件（除非你设置了 <code v-pre>component</code> 选项）。</p>
<p>你可以在主题布局中或直接在 Markdown 文件中使用 <code v-pre>&lt;Catalog /&gt;</code>。</p>
<p>组件支持四个属性：</p>
<ul>
<li><code v-pre>level</code>：更改显示层次深度（最大仅支持 3 层），默认为 <code v-pre>3</code>。</li>
<li><code v-pre>base</code>：显示指定文件夹的目录，默认显示当前文件夹目录。</li>
<li><code v-pre>index</code>：为目录项添加索引号，默认无标号。</li>
<li><code v-pre>hideHeading</code>：隐藏组件标题，默认会显示 <code v-pre>目录</code> 标题。</li>
</ul>
</li>
</ul>
<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2>
<p>你可以通过 CSS 变量来自定义目录样式：</p>
<div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--catalog-bg-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--catalog-bg-secondary-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--catalog-border-color</span><span class="token punctuation">:</span> #e5e5e5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--catalog-active-color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--catalog-hover-color</span><span class="token punctuation">:</span> #71cda3<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></div></template>


