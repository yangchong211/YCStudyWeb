<template><div><h1 id="docsearch" tabindex="-1"><a class="header-anchor" href="#docsearch"><span>docsearch</span></a></h1>
<NpmBadge package="@vuepress/plugin-docsearch" /><p>将 <a href="https://docsearch.algolia.com/" target="_blank" rel="noopener noreferrer">Algolia DocSearch</a> 集成到 VuePress 中，为你的文档网站提供搜索功能。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>当你正确配置该插件后，默认主题会把 DocSearch 按钮添加到导航栏。</p>
<p>该插件不一定能在其他主题中直接使用，因此你应参考主题本身的文档来获取更多信息。</p>
</div>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-docsearch@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> docsearchPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-docsearch'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">docsearchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="获取搜索索引" tabindex="-1"><a class="header-anchor" href="#获取搜索索引"><span>获取搜索索引</span></a></h2>
<p>你需要 <a href="https://docsearch.algolia.com/apply/" target="_blank" rel="noopener noreferrer">提交你的网站 URL</a> 来加入 DocSearch 项目。当你的索引成功创建后， DocSearch 团队会将 <a href="#apikey">apiKey</a> 和 <a href="#indexname">indexName</a> 发送到你的邮箱。接下来，你就可以配置该插件，在 VuePress 中启用 DocSearch 了。</p>
<p>或者，你也可以 <a href="https://docsearch.algolia.com/docs/run-your-own/" target="_blank" rel="noopener noreferrer">运行你自己的爬虫</a> 来创建索引，然后使用你自己的 <a href="#appId">appId</a>, <a href="#apikey">apiKey</a> 和 <a href="#indexname">indexName</a> 来配置该插件。</p>
<details class="custom-container details"><summary>官方爬虫配置示例</summary>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">new</span> <span class="token class-name">Crawler</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'YOUR_APP_ID'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">'YOUR_API_KEY'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rateLimit</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">startUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 这是 Algolia 开始抓取网站的初始地址</span></span>
<span class="line">    <span class="token comment">// 如果你的网站被分为数个独立部分，你可能需要在此设置多个入口链接</span></span>
<span class="line">    <span class="token string">'https://YOUR_WEBSITE_URL/'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">sitemaps</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 如果你在使用 Sitemap 插件 (如: @vuepress-plugin/sitemap)，你可以提供 Sitemap 链接</span></span>
<span class="line">    <span class="token string">'https://YOUR_WEBSITE_URL/sitemap.xml'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">ignoreCanonicalTo</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">exclusionPatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 你可以通过它阻止 Algolia 抓取某些 URL</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">discoveryPatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 这是 Algolia 抓取 URL 的范围</span></span>
<span class="line">    <span class="token string">'https://YOUR_WEBSITE_URL/**'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 爬虫执行的计划时间，可根据文档更新频率设置</span></span>
<span class="line">  <span class="token literal-property property">schedule</span><span class="token operator">:</span> <span class="token string">'at 02:00 every 1 day'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 你可以拥有多个 action，特别是你在一个域名下部署多个文档时</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 使用适当的名称为索引命名</span></span>
<span class="line">      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">'YOUR_INDEX_NAME'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 索引生效的路径</span></span>
<span class="line">      <span class="token literal-property property">pathsToMatch</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'https://YOUR_WEBSITE_URL/**'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 控制 Algolia 如何抓取你的站点</span></span>
<span class="line">      <span class="token function-variable function">recordExtractor</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> $<span class="token punctuation">,</span> helpers <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// @vuepress/theme-default 的选项</span></span>
<span class="line highlighted">        <span class="token keyword">return</span> helpers<span class="token punctuation">.</span><span class="token function">docsearch</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">          <span class="token literal-property property">recordProps</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">            <span class="token literal-property property">lvl0</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">              <span class="token literal-property property">selectors</span><span class="token operator">:</span> <span class="token string">'.vp-sidebar-heading.active'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">              <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token string">'Documentation'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token literal-property property">lvl1</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h1'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token literal-property property">lvl2</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h2'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token literal-property property">lvl3</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h3'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token literal-property property">lvl4</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h4'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token literal-property property">lvl5</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h5'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token literal-property property">lvl6</span><span class="token operator">:</span> <span class="token string">'.theme-default-content h6'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">            <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'.theme-default-content p, .theme-default-content li'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token literal-property property">indexHeadings</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">initialIndexSettings</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 控制索引如何被初始化，这仅当索引尚未生成时有效</span></span>
<span class="line">    <span class="token comment">// 你可能需要在修改后手动删除并重新生成新的索引</span></span>
<span class="line">    <span class="token constant">YOUR_INDEX_NAME</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token literal-property property">attributesForFaceting</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">,</span> <span class="token string">'lang'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">attributesToRetrieve</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'hierarchy'</span><span class="token punctuation">,</span> <span class="token string">'content'</span><span class="token punctuation">,</span> <span class="token string">'anchor'</span><span class="token punctuation">,</span> <span class="token string">'url'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">attributesToHighlight</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'hierarchy'</span><span class="token punctuation">,</span> <span class="token string">'hierarchy_camel'</span><span class="token punctuation">,</span> <span class="token string">'content'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">attributesToSnippet</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'content:10'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">camelCaseAttributes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'hierarchy'</span><span class="token punctuation">,</span> <span class="token string">'hierarchy_radio'</span><span class="token punctuation">,</span> <span class="token string">'content'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">searchableAttributes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio_camel.lvl0)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio.lvl0)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio_camel.lvl1)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio.lvl1)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio_camel.lvl2)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio.lvl2)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio_camel.lvl3)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio.lvl3)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio_camel.lvl4)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio.lvl4)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio_camel.lvl5)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio.lvl5)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio_camel.lvl6)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_radio.lvl6)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_camel.lvl0)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy.lvl0)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_camel.lvl1)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy.lvl1)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_camel.lvl2)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy.lvl2)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_camel.lvl3)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy.lvl3)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_camel.lvl4)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy.lvl4)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_camel.lvl5)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy.lvl5)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy_camel.lvl6)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'unordered(hierarchy.lvl6)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'content'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">distinct</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">attributeForDistinct</span><span class="token operator">:</span> <span class="token string">'url'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">customRanking</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">'desc(weight.pageRank)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'desc(weight.level)'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'asc(weight.position)'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">ranking</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">'words'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'filters'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'typo'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'attribute'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'proximity'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'exact'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'custom'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">highlightPreTag</span><span class="token operator">:</span> <span class="token string">'&lt;span class="algolia-docsearch-suggestion--highlight">'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">highlightPostTag</span><span class="token operator">:</span> <span class="token string">'&lt;/span>'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">minWordSizefor1Typo</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">minWordSizefor2Typos</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">allowTyposOnNumericTokens</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">minProximity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">ignorePlurals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">advancedSyntax</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">attributeCriteriaComputedByMinProximity</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">removeWordsIfNoResults</span><span class="token operator">:</span> <span class="token string">'allOptional'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 <code v-pre>recordProps</code> 是用于默认主题的配置，你可以根据你使用的主题来修改它们。</p>
<p>注意 <code v-pre>initialIndexSettings.YOUR_INDEX_NAME.attributesForFaceting</code> 字段<strong>必须</strong>包含 <code v-pre>'lang'</code>，否则该插件将无法正常工作。</p>
</details>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果你使用的不是默认主题，或者在使用 Docsearch 的时候遇到了任何问题，你也可以检查上述的爬虫配置示例，然后前往 <a href="https://crawler.algolia.com/admin/crawlers/" target="_blank" rel="noopener noreferrer">Algolia Crawler</a> 仓库，在你项目侧边栏中的 Editor 页面中修改你的配置。</p>
</div>
<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<h3 id="apikey" tabindex="-1"><a class="header-anchor" href="#apikey"><span>apiKey</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>是否必需： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>从 DocSearch 团队收到的 <code v-pre>apiKey</code> ，或者由你自己生成。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#apikey" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; apiKey</a></li>
</ul>
</li>
</ul>
<h3 id="indexname" tabindex="-1"><a class="header-anchor" href="#indexname"><span>indexName</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>是否必需： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>从 DocSearch 团队收到的 <code v-pre>indexName</code> ，或者由你自己生成。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#indexname" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; indexName</a></li>
</ul>
</li>
</ul>
<h3 id="appid" tabindex="-1"><a class="header-anchor" href="#appid"><span>appId</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>是否必需： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>用于设置你的 Application ID。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#appid" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; appId</a></li>
</ul>
</li>
</ul>
<h3 id="searchparameters" tabindex="-1"><a class="header-anchor" href="#searchparameters"><span>searchParameters</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>SearchParameters</code></p>
</li>
<li>
<p>详情：</p>
<p>Algolia 搜索 API 参数。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api/#searchparameters" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; searchParameters</a></li>
<li><a href="https://www.algolia.com/doc/api-reference/search-api-parameters/" target="_blank" rel="noopener noreferrer">Algolia &gt; Search API Parameters</a></li>
</ul>
</li>
</ul>
<h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder"><span>placeholder</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'Search docs'</code></p>
</li>
<li>
<p>详情：</p>
<p>搜索输入框的 placeholder 属性。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#placeholder" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; placeholder</a></li>
</ul>
</li>
</ul>
<h3 id="disableuserpersonalization" tabindex="-1"><a class="header-anchor" href="#disableuserpersonalization"><span>disableUserPersonalization</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>false</code></p>
</li>
<li>
<p>详情：</p>
<p>是否禁用所有的个性化功能：最近的搜索、收藏的搜索结果等。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#disableuserpersonalization" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; disableUserPersonalization</a></li>
</ul>
</li>
</ul>
<h3 id="initialquery" tabindex="-1"><a class="header-anchor" href="#initialquery"><span>initialQuery</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>打开弹窗时的初始请求。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#initialquery" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; initialQuery</a></li>
</ul>
</li>
</ul>
<h3 id="translations" tabindex="-1"><a class="header-anchor" href="#translations"><span>translations</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>Partial&lt;DocSearchTranslations&gt;</code></p>
</li>
<li>
<p>详情：</p>
<p>允许替换 DocSearch 按钮和弹窗内的默认文字。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api/#translations" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; translations</a></li>
</ul>
</li>
</ul>
<h3 id="maxresultspergroup" tabindex="-1"><a class="header-anchor" href="#maxresultspergroup"><span>maxResultsPerGroup</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>number</code></p>
</li>
<li>
<p>默认值： <code v-pre>5</code></p>
</li>
<li>
<p>详情：</p>
<p>每个组的最大结果数。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#maxresultspergroup" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; maxResultsPerGroup</a></li>
</ul>
</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>Record&lt;string, DocsearchPluginOptions&gt;</code></p>
</li>
<li>
<p>详情：</p>
<p>在不同 locales 下对该插件进行不同的配置。</p>
<p>该插件的所有其他选项都可以在 locale 中进行配置。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">docsearchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      appId<span class="token operator">:</span> <span class="token string">'&lt;APP_ID>'</span><span class="token punctuation">,</span></span>
<span class="line">      apiKey<span class="token operator">:</span> <span class="token string">'&lt;API_KEY>'</span><span class="token punctuation">,</span></span>
<span class="line">      indexName<span class="token operator">:</span> <span class="token string">'&lt;INDEX_NAME>'</span><span class="token punctuation">,</span></span>
<span class="line">      locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          placeholder<span class="token operator">:</span> <span class="token string">'Search Documentation'</span><span class="token punctuation">,</span></span>
<span class="line">          translations<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            button<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              buttonText<span class="token operator">:</span> <span class="token string">'Search Documentation'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          placeholder<span class="token operator">:</span> <span class="token string">'搜索文档'</span><span class="token punctuation">,</span></span>
<span class="line">          translations<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            button<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              buttonText<span class="token operator">:</span> <span class="token string">'搜索文档'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参考：
<ul>
<li><a href="https://vuejs.press/zh/guide/i18n.html" target="_blank" rel="noopener noreferrer">指南 &gt; 多语言支持</a></li>
</ul>
</li>
</ul>
<h3 id="indexbase" tabindex="-1"><a class="header-anchor" href="#indexbase"><span>indexBase</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <a href="https://vuejs.press/zh/reference/config.html#base" target="_blank" rel="noopener noreferrer">base</a></p>
</li>
<li>
<p>详情：</p>
<p>搜索索引基础路径。</p>
<p>如果你需要把你的站点部署到不同的域名上，你不需要把它们全都提交到 Docsearch 上来分别生成搜索索引。你可以选择其中一个域名作为 <em>索引域名</em> ，并且仅将 <em>索引域名</em> 提交到 DocSearch 上来爬去搜索索引。然后，你就可以在不同的部署域名下复用索引。</p>
<p>如果你不同部署域名下的 <a href="https://vuejs.press/zh/reference/config.html#base" target="_blank" rel="noopener noreferrer">base</a> 是不一样的，你就需要将这个配置设置成 <em>索引域名</em> 的 <a href="https://vuejs.press/zh/reference/config.html#base" target="_blank" rel="noopener noreferrer">base</a> ，这样其他的部署域名就可以正确复用索引了。</p>
</li>
</ul>
<h3 id="injectstyles" tabindex="-1"><a class="header-anchor" href="#injectstyles"><span>injectStyles</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否注入 DocSearch 的默认样式。</p>
<p>如果你认为 DocSearch 的默认样式和你的站点不兼容，你可以尝试覆盖默认样式，或者将该选项设置为 <code v-pre>false</code> 来完全移除默认样式。</p>
<p>当该选项被禁用时，你需要为 DocSearch 引入你自己的样式。同时要注意，你也无法再使用 <a href="#%E6%A0%B7%E5%BC%8F">样式</a> 章节中提到的样式自定义能力。</p>
</li>
</ul>
<h2 id="客户端选项" tabindex="-1"><a class="header-anchor" href="#客户端选项"><span>客户端选项</span></a></h2>
<h3 id="definedocsearchconfig" tabindex="-1"><a class="header-anchor" href="#definedocsearchconfig"><span>defineDocSearchConfig</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">DocSearchClientLocaleOptions</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span></span>
<span class="line">  DocSearchProps<span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'hitComponent'</span> <span class="token operator">|</span> <span class="token string">'navigator'</span> <span class="token operator">|</span> <span class="token string">'transformSearchClient'</span></span>
<span class="line"><span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">DocSearchClientOptions</span> <span class="token keyword">extends</span> <span class="token class-name">DocSearchClientLocaleOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  locales<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> DocSearchClientLocaleOptions<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">defineDocSearchConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> DocSearchClientOptions<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义 DocSearch 选项。</p>
<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2>
<p>你可以通过 <a href="https://docsearch.algolia.com/docs/styling" target="_blank" rel="noopener noreferrer">@docsearch/css</a> 提供的 CSS 变量来自定义样式：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--docsearch-primary-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 104<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-text-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>28<span class="token punctuation">,</span> 30<span class="token punctuation">,</span> 33<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-spacing</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-icon-stroke-width</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-highlight-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--docsearch-primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-muted-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>150<span class="token punctuation">,</span> 159<span class="token punctuation">,</span> 175<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-container-background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>101<span class="token punctuation">,</span> 108<span class="token punctuation">,</span> 133<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-logo-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 104<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* modal */</span></span>
<span class="line">  <span class="token property">--docsearch-modal-width</span><span class="token punctuation">:</span> 560px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-modal-height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-modal-background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>245<span class="token punctuation">,</span> 246<span class="token punctuation">,</span> 247<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-modal-shadow</span><span class="token punctuation">:</span> inset 1px 1px 0 0 <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    0 3px 8px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>85<span class="token punctuation">,</span> 90<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* searchbox */</span></span>
<span class="line">  <span class="token property">--docsearch-searchbox-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-searchbox-background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>235<span class="token punctuation">,</span> 237<span class="token punctuation">,</span> 240<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-searchbox-focus-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-searchbox-shadow</span><span class="token punctuation">:</span> inset 0 0 0 2px <span class="token function">var</span><span class="token punctuation">(</span>--docsearch-primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* hit */</span></span>
<span class="line">  <span class="token property">--docsearch-hit-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-hit-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>68<span class="token punctuation">,</span> 73<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-hit-active-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-hit-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-hit-shadow</span><span class="token punctuation">:</span> 0 1px 3px 0 <span class="token function">rgb</span><span class="token punctuation">(</span>212<span class="token punctuation">,</span> 217<span class="token punctuation">,</span> 225<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* key */</span></span>
<span class="line">  <span class="token property">--docsearch-key-gradient</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span></span>
<span class="line">    -225deg<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">rgb</span><span class="token punctuation">(</span>213<span class="token punctuation">,</span> 219<span class="token punctuation">,</span> 228<span class="token punctuation">)</span> 0%<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">rgb</span><span class="token punctuation">(</span>248<span class="token punctuation">,</span> 248<span class="token punctuation">,</span> 248<span class="token punctuation">)</span> 100%</span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-key-shadow</span><span class="token punctuation">:</span> inset 0 -2px 0 0 <span class="token function">rgb</span><span class="token punctuation">(</span>205<span class="token punctuation">,</span> 205<span class="token punctuation">,</span> 230<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    inset 0 0 1px 1px #fff<span class="token punctuation">,</span> 0 1px 2px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>30<span class="token punctuation">,</span> 35<span class="token punctuation">,</span> 90<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">/* footer */</span></span>
<span class="line">  <span class="token property">--docsearch-footer-height</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-footer-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--docsearch-footer-shadow</span><span class="token punctuation">:</span> 0 -1px 0 0 <span class="token function">rgb</span><span class="token punctuation">(</span>224<span class="token punctuation">,</span> 227<span class="token punctuation">,</span> 232<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    0 -3px 6px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>69<span class="token punctuation">,</span> 98<span class="token punctuation">,</span> 155<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2>
<h3 id="docsearch-1" tabindex="-1"><a class="header-anchor" href="#docsearch-1"><span>Docsearch</span></a></h3>
<ul>
<li>
<p>详情：</p>
<p>该插件会全局注册一个 <code v-pre>&lt;Docsearch /&gt;</code> 组件，你可以不传入任何 Props 来使用它。</p>
<p>将该组件放置在你想要显示 docsearch 按钮的地方。例如，默认主题将这个组件放在了导航栏的末尾。</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该组件主要用于主题开发。在大多数情况下你不需要直接使用该组件。</p>
</div>
</div></template>


