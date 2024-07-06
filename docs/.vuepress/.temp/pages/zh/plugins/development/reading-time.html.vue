<template><div><h1 id="reading-time" tabindex="-1"><a class="header-anchor" href="#reading-time"><span>reading-time</span></a></h1>
<NpmBadge package="@vuepress/plugin-reading-time" /><p>此插件会为每个页面生成字数统计与预计阅读时间。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-reading-time@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/config.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> readingTimePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-reading-time'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">readingTimePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>插件会将相关信息注入到页面数据的 <code v-pre>readingTime</code>，其中：</p>
<ul>
<li><code v-pre>readingTime.minutes</code>：为预计阅读时间（分钟）<code v-pre>number</code></li>
<li><code v-pre>readingTime.words</code>：字数统计，<code v-pre>number</code></li>
</ul>
<h3 id="在-node-侧获取数据" tabindex="-1"><a class="header-anchor" href="#在-node-侧获取数据"><span>在 Node 侧获取数据</span></a></h3>
<p>对于任何页面，你可以从 <code v-pre>page.data.readingTime</code> 获取预计阅读时间与字数统计:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line">page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime <span class="token comment">// { minutes: 3.2, words: 934 }</span></span>
<span class="line"></span></code></pre>
</div><p>你可以在 <code v-pre>extendsPage</code> 以及其他生命周期获取它做进一步处理:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token function-variable function">extendsPage</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime <span class="token comment">// { minutes: 3.2, words: 934 }</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function-variable function">onInitialized</span><span class="token operator">:</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime <span class="token comment">// { minutes: 3.2, words: 934 }</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在客户端侧获取数据" tabindex="-1"><a class="header-anchor" href="#在客户端侧获取数据"><span>在客户端侧获取数据</span></a></h3>
<p>你可以从 <code v-pre>@vuepress/plugin-reading-time/client</code> 导入 <code v-pre>useReadingTimeData</code> 和 <code v-pre>useReadingTimeLocale</code> 来获取当前页面的阅读时间数据和语言环境数据：</p>
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  useReadingTimeData<span class="token punctuation">,</span></span>
<span class="line">  useReadingTimeLocale<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-reading-time/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> readingTimeData <span class="token operator">=</span> <span class="token function">useReadingTimeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { minutes: 1.1, words: 100 }</span></span>
<span class="line"><span class="token keyword">const</span> readingTimeLocale <span class="token operator">=</span> <span class="token function">useReadingTimeLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { time: "1 分钟", words: "100 字" }</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="wordperminute" tabindex="-1"><a class="header-anchor" href="#wordperminute"><span>wordPerMinute</span></a></h3>
<ul>
<li>类型：<code v-pre>number</code></li>
<li>默认值：<code v-pre>300</code></li>
<li>详情：
每分钟阅读字数</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>ReadingTimePluginLocaleConfig</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ReadingTimePluginLocaleData</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 字数模板，模板中 `$word` 会被自动替换为字数</span>
<span class="line">   */</span></span>
<span class="line">  word<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 小于一分钟文字</span>
<span class="line">   */</span></span>
<span class="line">  less1Minute<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 时间模板</span>
<span class="line">   */</span></span>
<span class="line">  time<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ReadingTimePluginLocaleConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> ReadingTimePluginLocaleData</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>必填：否</p>
</li>
<li>
<p>详情：</p>
<p>阅读时间插件的国际化配置。</p>
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
</ul>
</details>
<h2 id="客户端-api" tabindex="-1"><a class="header-anchor" href="#客户端-api"><span>客户端 API</span></a></h2>
<p>你可以从 <code v-pre>@vuepress/plugin-reading-time/client</code> 导入并使用这些 API：</p>
<div class="custom-container tip"><p class="custom-container-title">即使插件被禁用，这些 API 也不会抛出错误。</p>
</div>
<h3 id="usereadingtimedata" tabindex="-1"><a class="header-anchor" href="#usereadingtimedata"><span>useReadingTimeData</span></a></h3>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ReadingTime</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** 分钟为单位的预计阅读时长 */</span></span>
<span class="line">  minutes<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/** 内容的字数 */</span></span>
<span class="line">  words<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useReadingTimeData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComputedRef<span class="token operator">&lt;</span>ReadingTime <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><p>当插件被禁用时会返回 <code v-pre>null</code>。</p>
<h3 id="usereadingtimelocale" tabindex="-1"><a class="header-anchor" href="#usereadingtimelocale"><span>useReadingTimeLocale</span></a></h3>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ReadingTimeLocale</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** 当前语言的预计阅读时间 */</span></span>
<span class="line">  time<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/** 当前语言的字数文字 */</span></span>
<span class="line">  words<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useReadingTimeLocale</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComputedRef<span class="token operator">&lt;</span>ReadingTimeLocale<span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><h2 id="高级使用" tabindex="-1"><a class="header-anchor" href="#高级使用"><span>高级使用</span></a></h2>
<p>由于此插件主要面向插件和主题开发者，所以提供了 &quot;使用 API&quot;：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="你插件或主题的入口"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useReadingTimePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-reading-time'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useReadingTimePlugin</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 你的选项</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'vuepress-plugin-xxx'</span><span class="token punctuation">,</span> <span class="token comment">// or vuepress-theme-xxx</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">为什么你应该使用 "使用 API"</p>
<ol>
<li>
<p>当你多次注册一个插件时，vuepress 会给你一个警告，告诉你只有第一个插件会生效。<code v-pre>useReadingTimePlugin</code> 会自动检测插件是否已经注册，避免多次注册。</p>
</li>
<li>
<p>如果你在 <code v-pre>extendsPage</code> 生命周期访问阅读时间数据，那么 <code v-pre>@vuepress/plugin-reading-time</code> 必须在你的主题或插件之前被调用，否则你会得到未定义的 <code v-pre>page.data.readingTime</code>。<code v-pre>useReadingTimePlugin</code> 确保了 <code v-pre>@vuepress/plugin-reading-time</code> 在你的主题或插件之前被调用。</p>
</li>
</ol>
</div>
<p>我们也提供了一个 <code v-pre>removeReadingTimePlugin</code> api 来移除插件。你可以使用它来确保你的调用生效或清除插件:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="你插件或主题的入口"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useReadingTimePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-reading-time'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 这会移除任何当前存在的阅读时间插件</span></span>
<span class="line">  <span class="token function">removeReadingTimePlugin</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 所以这会生效，即使之前已经注册了一个阅读时间插件</span></span>
<span class="line">  <span class="token function">useReadingTimePlugin</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 你的选项</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'vuepress-plugin-xxx'</span><span class="token punctuation">,</span> <span class="token comment">// or vuepress-theme-xxx</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


