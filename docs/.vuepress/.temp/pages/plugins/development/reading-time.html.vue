<template><div><h1 id="reading-time" tabindex="-1"><a class="header-anchor" href="#reading-time"><span>reading-time</span></a></h1>
<NpmBadge package="@vuepress/plugin-reading-time" /><p>This plugin will generate word count and estimated reading time for each page.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-reading-time@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> readingTimePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-reading-time'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">readingTimePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>The plugin will inject reading time information into the <code v-pre>readingTime</code> of the page data, where:</p>
<ul>
<li><code v-pre>readingTime.minutes</code>: estimated reading time (minutes) <code v-pre>number</code></li>
<li><code v-pre>readingTime.words</code>: word count <code v-pre>number</code></li>
</ul>
<h3 id="getting-data-on-node-side" tabindex="-1"><a class="header-anchor" href="#getting-data-on-node-side"><span>Getting data on Node Side</span></a></h3>
<p>For any page, you can get estimated reading time and word count from <code v-pre>page.data.readingTime</code>:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line">page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>readingTime <span class="token comment">// { minutes: 3.2, words: 934 }</span></span>
<span class="line"></span></code></pre>
</div><p>You can access it for further processing in the <code v-pre>extendsPage</code> lifecycle and other lifecycle:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getting-data-on-client-side" tabindex="-1"><a class="header-anchor" href="#getting-data-on-client-side"><span>Getting data on Client Side</span></a></h3>
<p>You can import <code v-pre>useReadingTimeData</code> and <code v-pre>useReadingTimeLocale</code> from <code v-pre>@vuepress/plugin-reading-time/client</code> to get the reading time data and locale data of the current page:</p>
<div class="language-vue" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  useReadingTimeData<span class="token punctuation">,</span></span>
<span class="line">  useReadingTimeLocale<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-reading-time/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> readingTimeData <span class="token operator">=</span> <span class="token function">useReadingTimeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { minutes: 1.1, words: 100 }</span></span>
<span class="line"><span class="token keyword">const</span> readingTimeLocale <span class="token operator">=</span> <span class="token function">useReadingTimeLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { time: "1 minute", words: "100 words" }</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="wordperminute" tabindex="-1"><a class="header-anchor" href="#wordperminute"><span>wordPerMinute</span></a></h3>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Default: <code v-pre>300</code></li>
<li>Details:
Reading speed (words per minute)</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>ReadingTimePluginLocaleConfig</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ReadingTimePluginLocaleData</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Word template, `$word` will be automatically replaced by actual words</span>
<span class="line">   */</span></span>
<span class="line">  word<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Text for less than one minute</span>
<span class="line">   */</span></span>
<span class="line">  less1Minute<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Time template</span>
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
<p>Required: No</p>
</li>
<li>
<p>Details:</p>
<p>Locales config for reading-time plugin.</p>
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
<h2 id="client-api" tabindex="-1"><a class="header-anchor" href="#client-api"><span>Client API</span></a></h2>
<p>You can import and use these APIs from <code v-pre>@vuepress/plugin-reading-time/client</code>:</p>
<div class="custom-container tip"><p class="custom-container-title">These APIs won't throw even you disable the plugin.</p>
</div>
<h3 id="usereadingtimedata" tabindex="-1"><a class="header-anchor" href="#usereadingtimedata"><span>useReadingTimeData</span></a></h3>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ReadingTime</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** Expect reading time in minute unit */</span></span>
<span class="line">  minutes<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/** Words count of content */</span></span>
<span class="line">  words<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useReadingTimeData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComputedRef<span class="token operator">&lt;</span>ReadingTime <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><p><code v-pre>null</code> is returned when the plugin is disabled.</p>
<h3 id="usereadingtimelocale" tabindex="-1"><a class="header-anchor" href="#usereadingtimelocale"><span>useReadingTimeLocale</span></a></h3>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ReadingTimeLocale</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/** Expect reading time text in locale */</span></span>
<span class="line">  time<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/** Word count text in locale */</span></span>
<span class="line">  words<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useReadingTimeLocale</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ComputedRef<span class="token operator">&lt;</span>ReadingTimeLocale<span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><h2 id="advanced-usage" tabindex="-1"><a class="header-anchor" href="#advanced-usage"><span>Advanced Usage</span></a></h2>
<p>This plugin is targeting plugin and theme developers mostly, so we provide a &quot;Use API&quot;:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="your plugin or theme entry"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useReadingTimePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-reading-time'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useReadingTimePlugin</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// your options</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'vuepress-plugin-xxx'</span><span class="token punctuation">,</span> <span class="token comment">// or vuepress-theme-xxx</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Why you should use "Use API"</p>
<ol>
<li>When you register a plugin multiple times, vuepress will gives you warning about that telling you only the first one takes effect. The <code v-pre>useReadingTimePlugin</code> automatically detects if the plugin is registered and avoid registering multiple times.</li>
<li>If you access reading time data in <code v-pre>extendsPage</code> lifecycle, then <code v-pre>@vuepress/plugin-reading-time</code> must be called before your theme or plugin, otherwise you will get <code v-pre>undefined</code> for <code v-pre>page.data.readingTime</code>. The <code v-pre>useReadingTimePlugin</code> ensures that <code v-pre>@vuepress/plugin-reading-time</code> is called before your theme or plugin.</li>
</ol>
</div>
<p>We also provides a <code v-pre>removeReadingTimePlugin</code> api to remove the plugin.You can use this to ensure your call take effect or clear the plugin:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="your plugin or theme entry"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useReadingTimePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-reading-time'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// this removes any existing reading time plugin at this time</span></span>
<span class="line">  <span class="token function">removeReadingTimePlugin</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// so this will take effect even if there is a reading time plugin registered before</span></span>
<span class="line">  <span class="token function">useReadingTimePlugin</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// your options</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'vuepress-plugin-xxx'</span><span class="token punctuation">,</span> <span class="token comment">// or vuepress-theme-xxx</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


