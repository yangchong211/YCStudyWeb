<template><div><h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h1>
<p>本插件会通过向网站 <code v-pre>&lt;head&gt;</code> 注入标签，让你的网站完全支持 <a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">开放内容协议 OGP</a> 和 <a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a>，以全面增强站点的搜索引擎优化性。</p>
<!-- more -->
<h2 id="开箱即用" tabindex="-1"><a class="header-anchor" href="#开箱即用"><span>开箱即用</span></a></h2>
<p>插件开箱即用，在不做任何配置的情况下，会尽可能通过页面内容，提取对应的信息补全 OGP 与 JSON-LD 所需的必要标签。</p>
<p>默认情况下，插件会读取站点配置、主题配置与页面的 frontmatter 来尽可能自动生成。诸如站点名称，页面标题，页面类型，写作日期，最后更新日期，文章标签均会自动生成。</p>
<h3 id="默认的-ogp-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-ogp-生成逻辑"><span>默认的 OGP 生成逻辑</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">属性名称</th>
<th style="text-align:center">值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>og:url</code></td>
<td style="text-align:center"><code v-pre>options.hostname</code> + <code v-pre>path</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:site_name</code></td>
<td style="text-align:center"><code v-pre>siteConfig.title</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:title</code></td>
<td style="text-align:center"><code v-pre>page.title</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:description</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.description</code> || 自动生成 (当插件选项中的 <code v-pre>autoDescription</code> 为 <code v-pre>true</code> 时)</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:type</code></td>
<td style="text-align:center"><code v-pre>&quot;article&quot;</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:image</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.banner</code> || <code v-pre>page.frontmatter.cover</code> || 页面的第一张图片|| 插件选项的 <code v-pre>fallbackImage</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:updated_time</code></td>
<td style="text-align:center"><code v-pre>page.git.updatedTime</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:locale</code></td>
<td style="text-align:center"><code v-pre>page.lang</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:locale:alternate</code></td>
<td style="text-align:center"><code v-pre>siteData.locales</code> 包含的其他语言</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>twitter:card</code></td>
<td style="text-align:center"><code v-pre>&quot;summary_large_image&quot;</code> (仅在找到图片时)</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>twitter:image:alt</code></td>
<td style="text-align:center"><code v-pre>page.title</code> (仅在找到图片时)</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>article:author</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.author</code> || <code v-pre>options.author</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>article:tag</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.tags</code> || <code v-pre>page.frontmatter.tag</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>article:published_time</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.date</code> || <code v-pre>page.git.createdTime</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>article:modified_time</code></td>
<td style="text-align:center"><code v-pre>page.git.updatedTime</code></td>
</tr>
</tbody>
</table>
<h3 id="默认的-json-ld-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-json-ld-生成逻辑"><span>默认的 JSON-LD 生成逻辑</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">属性名</th>
<th style="text-align:center">值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>@context</code></td>
<td style="text-align:center"><code v-pre>&quot;https://schema.org&quot;</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>@type</code></td>
<td style="text-align:center"><code v-pre>&quot;NewsArticle&quot;</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>headline</code></td>
<td style="text-align:center"><code v-pre>page.title</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>image</code></td>
<td style="text-align:center">页面中的图片|| <code v-pre>options.hostname</code> + <code v-pre>page.frontmatter.image</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>datePublished</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.date</code> || <code v-pre>page.git.createdTime</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>dateModified</code></td>
<td style="text-align:center"><code v-pre>page.git.updatedTime</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>author</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.author</code> || <code v-pre>options.author</code></td>
</tr>
</tbody>
</table>
<h2 id="直接添加-head-标签" tabindex="-1"><a class="header-anchor" href="#直接添加-head-标签"><span>直接添加 head 标签</span></a></h2>
<p>你可以在页面的 frontmatter 中配置 <code v-pre>head</code> 选项，自主添加特定标签到页面 <code v-pre>&lt;head&gt;</code> 以增强 SEO。</p>
<p>如:</p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta</span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> keywords</span>
<span class="line">      <span class="token key atrule">content</span><span class="token punctuation">:</span> SEO plugin</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><p>会自动注入 <code v-pre>&lt;meta name=&quot;keywords&quot; content=&quot;SEO plugin&quot; /&gt;</code>。</p>
<h2 id="自定义生成过程" tabindex="-1"><a class="header-anchor" href="#自定义生成过程"><span>自定义生成过程</span></a></h2>
<p>本插件也支持你完全控制生成逻辑。</p>
<h3 id="页面类型" tabindex="-1"><a class="header-anchor" href="#页面类型"><span>页面类型</span></a></h3>
<p>对于大多数页面，基本只有文章和网页两种类型，所以插件提供了 <code v-pre>isArticle</code> 选项让你提供辨别文章的逻辑。</p>
<p>选项接受一个 <code v-pre>(page: Page) =&gt; boolean</code> 格式的函数，默认情况下从 Markdown 文件生成的非主页页面都会被视为文章。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果某个网页的确符合图书、音乐之类的“冷门”类型，你可以通过设置下方三个选项处理它们。</p>
</div>
<h3 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp"><span>OGP</span></a></h3>
<p>你可以使用插件选项的 <code v-pre>ogp</code> 传入一个函数来按照你的需要修改默认 OGP 对象并返回。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">ogp</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** 插件推断的 OGP 信息 */</span></span>
<span class="line">  ogp<span class="token operator">:</span> SeoContent<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** 页面对象 */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> SeoContent</span>
<span class="line"></span></code></pre>
</div><p>详细的参数结构详见 <RouteLink to="/zh/plugins/seo/seo/config.html">配置</RouteLink>。</p>
<p>比如你在使用某个第三方主题，并按照主题要求为每篇文章在 Front Matter 中设置了 <code v-pre>banner</code>，那你可以传入这样的 <code v-pre>ogp</code>:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">seoPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">ogp</span><span class="token operator">:</span> <span class="token punctuation">(</span>ogp<span class="token punctuation">,</span> page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span>ogp<span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'og:image'</span><span class="token operator">:</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>banner <span class="token operator">||</span> ogp<span class="token punctuation">[</span><span class="token string">'og:image'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><h3 id="json-ld" tabindex="-1"><a class="header-anchor" href="#json-ld"><span>JSON-LD</span></a></h3>
<p>同 OGP，你可以使用插件选项的 <code v-pre>jsonLd</code> 传入一个函数来按照你的需要修改默认 JSON-LD 对象并返回。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">jsonLd</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** 由插件推断出的 JSON-LD 对象 */</span></span>
<span class="line">  jsonLD<span class="token operator">:</span> ArticleSchema <span class="token operator">|</span> BlogPostingSchema <span class="token operator">|</span> WebPageSchema<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** 页面对象 */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> ArticleSchema <span class="token operator">|</span> BlogPostingSchema <span class="token operator">|</span> WebPageSchema</span>
<span class="line"></span></code></pre>
</div><h2 id="规范链接" tabindex="-1"><a class="header-anchor" href="#规范链接"><span>规范链接</span></a></h2>
<p>如果你将内容部署到不同的站点，或不同 URL 下的相同内容，你可能需要设置 <code v-pre>canonical</code> 选项为你的页面提供 “规范链接”。 你可以设置一个字符串，这样它会附加在页面路由链接之前，或者添加一个自定义函数 <code v-pre>(page: Page) =&gt; string | null</code> 返回规范链接。</p>
<div class="custom-container tip"><p class="custom-container-title">例子</p>
<p>如果你的站点部署在 <code v-pre>example.com</code> 的 docs 文件夹下，但同时在下列网址中可用:</p>
<ul>
<li><code v-pre>http://example.com/docs/xxx</code></li>
<li><code v-pre>https://example.com/docs/xxx</code></li>
<li><code v-pre>http://www.example.com/docs/xxx</code></li>
<li><code v-pre>https://www.example.com/docs/xxx</code> (首选)</li>
</ul>
<p>要让搜索引擎结果始终是首选，你可能需要将 <code v-pre>canonical</code> 设置为 <code v-pre>https://www.example.com/docs/</code>，以便搜索引擎知道首选第四个 URL 作为索引结果。</p>
</div>
<h3 id="自定义-head-标签" tabindex="-1"><a class="header-anchor" href="#自定义-head-标签"><span>自定义 head 标签</span></a></h3>
<p>有些时候你可能需要符合其他协议或按照其他搜索引擎提供的格式提供对应的 SEO 标签，此时你可以使用 <code v-pre>customHead</code> 选项，其类型为:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">customHead</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** head 标签配置 */</span></span>
<span class="line">  head<span class="token operator">:</span> HeadConfig<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** 页面对象 */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
</div><p>你应该直接修改传入的 <code v-pre>head</code> 参数。</p>
<h2 id="seo-介绍" tabindex="-1"><a class="header-anchor" href="#seo-介绍"><span>SEO 介绍</span></a></h2>
<p>搜索引擎优化 (<strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization)，是一种透过了解搜索引擎的运作规则来调整网站，以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。 所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。</p>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档"><span>相关文档</span></a></h2>
<ul>
<li>
<p><a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">开放内容协议 OGP</a> (<strong>O</strong>pen <strong>G</strong>raph <strong>Pr</strong>otocal)</p>
<p>本插件完美支持该协议，会自动生成符合该协议的 <code v-pre>&lt;meta&gt;</code> 标签。</p>
</li>
<li>
<p><a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a></p>
<p>本插件会为文章类页面生成 NewsArticle 类标签。</p>
</li>
<li>
<p><a href="https://www.w3.org/TR/rdfa-primer/" target="_blank" rel="noopener noreferrer">RDFa 1.1</a></p>
<p>RDFa 主要标记 HTML 结构。这是插件无法支持的内容，<ProjectLink type="theme" name="hope" path="/zh/">vuepress-theme-hope</ProjectLink> 使用了这一功能通过了谷歌的富媒体结构测试。你可以考虑搭配使用。</p>
</li>
<li>
<p><a href="https://schema.org/" target="_blank" rel="noopener noreferrer">Schema.Org</a></p>
<p>结构标记的 Schema 定义站点</p>
</li>
</ul>
<h2 id="相关工具" tabindex="-1"><a class="header-anchor" href="#相关工具"><span>相关工具</span></a></h2>
<p>你可以使用 <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">Google 富媒体结构测试工具</a> 测试本站点。</p>
</div></template>


