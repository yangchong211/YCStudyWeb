<template><div><h1 id="guide" tabindex="-1"><a class="header-anchor" href="#guide"><span>Guide</span></a></h1>
<p>This plugin will make your site fully support <a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">Open Content Protocol OGP</a> and <a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a> to enhance the SEO of the site.</p>
<!-- more -->
<h2 id="out-of-box" tabindex="-1"><a class="header-anchor" href="#out-of-box"><span>Out of Box</span></a></h2>
<p>The plugin works out of the box. Without any config, it will extract information from the page content as much as possible to complete the necessary tags required by OGP and JSON-LD.</p>
<p>By default, the plugin will read the site config and page frontmatter to automatically generate tags as much as possible. Such as site name, page title, page type, writing date, last update date, and article tags are all automatically generated.</p>
<p>The following are the <code v-pre>&lt;meta&gt;</code> tags and their values that will be injected into <code v-pre>&lt;head&gt;</code> by default:</p>
<h3 id="default-ogp-generation" tabindex="-1"><a class="header-anchor" href="#default-ogp-generation"><span>Default OGP Generation</span></a></h3>
<p>The following are the <code v-pre>&lt;meta&gt;</code> tags and their value injected into <code v-pre>&lt;head&gt;</code> by default to satisfy OGP:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Meta Name</th>
<th style="text-align:center">Value</th>
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
<td style="text-align:center"><code v-pre>page.frontmatter.description</code> || auto generated (when <code v-pre>autoDescription</code> is <code v-pre>true</code> in plugin options)</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:type</code></td>
<td style="text-align:center"><code v-pre>&quot;article&quot;</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>og:image</code></td>
<td style="text-align:center"><code v-pre>page.frontmatter.banner</code> || <code v-pre>page.frontmatter.cover</code> || first image in page || <code v-pre>fallbackImage</code> in plugin options</td>
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
<td style="text-align:center">Other languages in <code v-pre>siteData.locales</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>twitter:card</code></td>
<td style="text-align:center"><code v-pre>&quot;summary_large_image&quot;</code> (only available when image found)</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>twitter:image:alt</code></td>
<td style="text-align:center"><code v-pre>page.title</code> (only available when image found)</td>
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
<h3 id="default-json-ld-generation" tabindex="-1"><a class="header-anchor" href="#default-json-ld-generation"><span>Default JSON-LD Generation</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">Property Name</th>
<th style="text-align:center">Value</th>
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
<td style="text-align:center">image in page || <code v-pre>options.hostname</code> + <code v-pre>page.frontmatter.image</code> || <code v-pre>siteFavIcon</code> in plugin options</td>
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
<h2 id="setting-tags-directly" tabindex="-1"><a class="header-anchor" href="#setting-tags-directly"><span>Setting Tags Directly</span></a></h2>
<p>You can configure the <code v-pre>head</code> option in the page's frontmatter to add specific tags to the page <code v-pre>&lt;head&gt;</code> to enhance SEO.
For example:</p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta</span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> keywords</span>
<span class="line">      <span class="token key atrule">content</span><span class="token punctuation">:</span> SEO plugin</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><p>Will automatically inject <code v-pre>&lt;meta name=&quot;keywords&quot; content=&quot;SEO plugin&quot; /&gt;</code>.</p>
<h2 id="customize-generation" tabindex="-1"><a class="header-anchor" href="#customize-generation"><span>Customize Generation</span></a></h2>
<p>The plugin also gives you full control over the build logic.</p>
<h3 id="page-type" tabindex="-1"><a class="header-anchor" href="#page-type"><span>Page Type</span></a></h3>
<p>For most pages, there are basically only two types: articles and website, so the plugin provides the <code v-pre>isArticle</code> option to allow you to provide logic for identifying articles.</p>
<p>The option accepts a function in the format <code v-pre>(page: Page) =&gt; boolean</code>, by default all non-home pages generated from Markdown files are treated as articles.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If a page does fit into the &quot;unpopular&quot; genre like books, music, etc., you can handle them by setting the three options below.</p>
</div>
<h3 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp"><span>OGP</span></a></h3>
<p>You can use the plugin options <code v-pre>ogp</code> to pass in a function to modify the default OGP object to your needs and return it.</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">ogp</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** OGP Object inferred by plugin */</span></span>
<span class="line">  ogp<span class="token operator">:</span> SeoContent<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** Page Object */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> SeoContent</span>
<span class="line"></span></code></pre>
</div><p>For detailed parameter structure, see <RouteLink to="/plugins/seo/seo/config.html">Config</RouteLink>.</p>
<p>For example, if you are using a third-party theme and set a <code v-pre>banner</code> in frontmatter for each article according to the theme requirements, then you can pass in the following <code v-pre>ogp</code>:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">seoPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">ogp</span><span class="token operator">:</span> <span class="token punctuation">(</span>ogp<span class="token punctuation">,</span> page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span>ogp<span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'og:image'</span><span class="token operator">:</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>banner <span class="token operator">||</span> ogp<span class="token punctuation">[</span><span class="token string">'og:image'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><h3 id="json-ld" tabindex="-1"><a class="header-anchor" href="#json-ld"><span>JSON-LD</span></a></h3>
<p>Like OGP, you can use the plugin options <code v-pre>jsonLd</code> to pass in a function to modify the default JSON-LD object to your needs and return it.</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">jsonLd</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** JSON-LD Object inferred by plugin */</span></span>
<span class="line">  jsonLD<span class="token operator">:</span> ArticleSchema <span class="token operator">|</span> BlogPostingSchema <span class="token operator">|</span> WebPageSchema<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** Page Object */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> ArticleSchema <span class="token operator">|</span> BlogPostingSchema <span class="token operator">|</span> WebPageSchema</span>
<span class="line"></span></code></pre>
</div><h2 id="canonical-link" tabindex="-1"><a class="header-anchor" href="#canonical-link"><span>Canonical Link</span></a></h2>
<p>If you are deploying your content to different sites, or same content under different URLs, you may need to set <code v-pre>canonical</code> option to provide a &quot;Canonical Link&quot; for your page. You can either set a string which will be appended before page route link, or adding a custom function <code v-pre>(page: Page) =&gt; string | null</code> to return a canonical link if necessary.</p>
<div class="custom-container tip"><p class="custom-container-title">Example</p>
<p>If your sites are deployed under docs directory in <code v-pre>example.com</code>, but available in:</p>
<ul>
<li><code v-pre>http://example.com/docs/xxx</code></li>
<li><code v-pre>https://example.com/docs/xxx</code></li>
<li><code v-pre>http://www.example.com/docs/xxx</code></li>
<li><code v-pre>https://www.example.com/docs/xxx</code> (primary)</li>
</ul>
<p>To let search engine results always be the primary choice, you may need to set <code v-pre>canonical</code> to <code v-pre>https://www.example.com/docs/</code>, so that search engine will know that the fourth URL is preferred to be indexed.</p>
</div>
<h3 id="customize-head-tags" tabindex="-1"><a class="header-anchor" href="#customize-head-tags"><span>Customize head Tags</span></a></h3>
<p>Sometimes you may need to fit other protocols or provide the corresponding SEO tags in the format provided by other search engines. In this case, you can use the <code v-pre>customHead</code> option, whose type is:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">customHead</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token doc-comment comment">/** Head tag config */</span></span>
<span class="line">  head<span class="token operator">:</span> HeadConfig<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** Page Object */</span></span>
<span class="line">  page<span class="token operator">:</span> Page<span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/** VuePress App */</span></span>
<span class="line">  app<span class="token operator">:</span> App<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
</div><p>You should modify the <code v-pre>head</code> array in this function directly.</p>
<h2 id="seo-introduction" tabindex="-1"><a class="header-anchor" href="#seo-introduction"><span>SEO Introduction</span></a></h2>
<p><strong>S</strong>earch <strong>e</strong>ngine <strong>optimization</strong> (SEO) is the process of improving the quality and quantity of site traffic to a site or a web page from search engines. SEO targets unpaid traffic (known as &quot;natural&quot; or &quot;organic&quot; results) rather than direct traffic or paid traffic. Unpaid traffic may originate from different kinds of searches, including image search, video search, academic search, news search, and industry-specific vertical search engines.</p>
<p>As an internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience. SEO is performed because a site will receive more visitors from a search engine when sites rank higher on the search engine results page (SERP). These visitors can then potentially be converted into customers.</p>
<h2 id="related-documents" tabindex="-1"><a class="header-anchor" href="#related-documents"><span>Related Documents</span></a></h2>
<ul>
<li>
<p><a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">Open Content Protocol OGP</a> (<strong>O</strong>pen <strong>G</strong>raph <strong>Pr</strong>otocol)</p>
<p>This plugin perfectly supports this protocol and will automatically generate <code v-pre>&lt;meta&gt;</code> tags that conform to the protocol.</p>
</li>
<li>
<p><a href="https://www.w3.org/TR/json-ld-api/" target="_blank" rel="noopener noreferrer">JSON-LD 1.1</a></p>
<p>This plugin will generate &quot;NewsArticle&quot; scheme for article pages.</p>
</li>
<li>
<p><a href="https://www.w3.org/TR/rdfa-primer/" target="_blank" rel="noopener noreferrer">RDFa 1.1</a></p>
<p>RDFa mainly marks HTML structure. This is what the plugin cannot support. <ProjectLink type="theme" name="hope">vuepress-theme-hope</ProjectLink> uses this feature to pass Google's rich media structure test. You can consider using it.</p>
</li>
<li>
<p><a href="https://schema.org/" target="_blank" rel="noopener noreferrer">Schema.Org</a></p>
<p>Schema definition site for structural markup</p>
</li>
</ul>
<h2 id="related-tools" tabindex="-1"><a class="header-anchor" href="#related-tools"><span>Related Tools</span></a></h2>
<p>You can use <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">Google Rich Media Structure Test Tool</a> to test this site.</p>
</div></template>


