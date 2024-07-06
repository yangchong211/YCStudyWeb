<template><div><h1 id="waline-config" tabindex="-1"><a class="header-anchor" href="#waline-config"><span>Waline Config</span></a></h1>
<h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2>
<h3 id="serverurl" tabindex="-1"><a class="header-anchor" href="#serverurl"><span>serverURL</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: Yes</li>
<li>Details: Waline server address url</li>
</ul>
<h3 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji"><span>emoji</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(string | WalineEmojiInfo)[] | false</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WalineEmojiPresets</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">WalineEmojiInfo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Emoji name show on tab</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Current folder link</span>
<span class="line">   */</span></span>
<span class="line">  folder<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Common prefix of Emoji icons</span>
<span class="line">   */</span></span>
<span class="line">  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Type of Emoji icons, will be regarded as file extension</span>
<span class="line">   */</span></span>
<span class="line">  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Emoji icon show on tab</span>
<span class="line">   */</span></span>
<span class="line">  icon<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Emoji image list</span>
<span class="line">   */</span></span>
<span class="line">  items<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Default: <code v-pre>['//unpkg.com/@waline/emojis@1.1.0/weibo']</code></p>
</li>
<li>
<p>Reference:</p>
<ul>
<li><a href="https://waline.js.org/en/guide/features/emoji.html" target="_blank" rel="noopener noreferrer">Guide → Emoji</a></li>
</ul>
</li>
<li>
<p>Details: Emoji settings.</p>
</li>
</ul>
<h3 id="dark" tabindex="-1"><a class="header-anchor" href="#dark"><span>dark</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string | boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Reference:</p>
<ul>
<li><a href="https://waline.js.org/en/guide/features/style.html" target="_blank" rel="noopener noreferrer">Custom Style</a></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>Darkmode support</p>
<ul>
<li>Setting a boolean will set the dark mode according to its value.</li>
<li>Set it to <code v-pre>'auto'</code> will display darkmode due to device settings.</li>
<li>Filling in a CSS selector will enable darkmode only when the selector match waline ancestor nodes.</li>
</ul>
</li>
</ul>
<h3 id="commentsorting" tabindex="-1"><a class="header-anchor" href="#commentsorting"><span>commentSorting</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>WalineCommentSorting</code></p>
</li>
<li>
<p>Default: <code v-pre>'latest'</code></p>
</li>
<li>
<p>Details:</p>
<p>Comment list sorting methods.</p>
<p>Optional values: <code v-pre>'latest'</code>, <code v-pre>'oldest'</code>, <code v-pre>'hottest'</code></p>
</li>
</ul>
<h3 id="meta" tabindex="-1"><a class="header-anchor" href="#meta"><span>meta</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string[]</code></p>
</li>
<li>
<p>Default: <code v-pre>['nick','mail','link']</code></p>
</li>
<li>
<p>Details:</p>
<p>Reviewer attributes.</p>
<p>Optional values: <code v-pre>'nick'</code>, <code v-pre>'mail'</code>, <code v-pre>'link'</code></p>
</li>
</ul>
<h3 id="requiredmeta" tabindex="-1"><a class="header-anchor" href="#requiredmeta"><span>requiredMeta</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string[]</code></p>
</li>
<li>
<p>Default: <code v-pre>[]</code></p>
</li>
<li>
<p>Details:</p>
<p>Set required fields, optional values:</p>
<ul>
<li><code v-pre>[]</code></li>
<li><code v-pre>['nick']</code></li>
<li><code v-pre>['nick','mail']</code></li>
</ul>
</li>
</ul>
<h3 id="login" tabindex="-1"><a class="header-anchor" href="#login"><span>login</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default value: <code v-pre>'enable'</code></p>
</li>
<li>
<p>Details:</p>
<p>Login mode status, optional values:</p>
<ul>
<li><code v-pre>'enable'</code>: enable login (default)</li>
<li><code v-pre>'disable'</code>: Login is disabled, users should fill in information to comment</li>
<li><code v-pre>'force'</code>: Forced login, users must login to comment</li>
</ul>
</li>
</ul>
<h3 id="wordlimit" tabindex="-1"><a class="header-anchor" href="#wordlimit"><span>wordLimit</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number | [number, number]</code></p>
</li>
<li>
<p>Default: <code v-pre>0</code></p>
</li>
<li>
<p>Details:</p>
<p>Comment words limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to <code v-pre>0</code>.</p>
</li>
</ul>
<h3 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize"><span>pageSize</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>10</code></p>
</li>
<li>
<p>Details:</p>
<p>Number of comments per page.</p>
</li>
</ul>
<h3 id="imageuploader" tabindex="-1"><a class="header-anchor" href="#imageuploader"><span>imageUploader <Badge text="Client Config Only" type="warning"/></span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>WalineImageUploader | false</code></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WalineImageUploader</span> <span class="token operator">=</span> <span class="token punctuation">(</span>image<span class="token operator">:</span> File<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Reference:</p>
<ul>
<li><a href="https://waline.js.org/en/cookbook/customize/upload-image.html" target="_blank" rel="noopener noreferrer">Cookbook → Upload Image</a></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>Custom image upload method. The default behavior is to embed images Base 64 encoded, you can set this to <code v-pre>false</code> to disable image uploading.</p>
<p>The function should receive an image object and return a Promise that provides the image address.</p>
</li>
</ul>
<h3 id="highlighter" tabindex="-1"><a class="header-anchor" href="#highlighter"><span>highlighter <Badge text="Client Config Only" type="warning"/></span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>WalineHighlighter | false</code></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WalineHighlighter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Reference:</p>
<ul>
<li><a href="https://waline.js.org/en/cookbook/customize/highlighter.html" target="_blank" rel="noopener noreferrer">Cookbook → Customize Highlighter</a></li>
</ul>
</li>
<li>
<p>Details:</p>
<p><strong>Code highlighting</strong>, use <code v-pre>hanabi</code> by default. The function passes in original content of code block and language of the code block. You should return a string directly.</p>
<p>You can pass in a code highlighter of your own, or set to <code v-pre>false</code> to disable code highlighting.</p>
</li>
</ul>
<h3 id="texrenderer" tabindex="-1"><a class="header-anchor" href="#texrenderer"><span>texRenderer <Badge text="Client Config Only" type="warning"/></span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>WalineTexRenderer | false</code></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WalineTexRenderer</span> <span class="token operator">=</span> <span class="token punctuation">(</span>blockMode<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> tex<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Reference:</p>
<ul>
<li><a href="https://waline.js.org/en/cookbook/customize/tex-renderer.html" target="_blank" rel="noopener noreferrer">Cookbook → Customize TeX Renderer</a></li>
<li><a href="https://www.mathjax.org/" target="_blank" rel="noopener noreferrer">MathJax</a></li>
<li><a href="https://katex.org/" target="_blank" rel="noopener noreferrer">KaTeX</a></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>Customize TeX rendering, the default behavior is to prompt that the preview mode does not support TeX. The function provides two parameters, the first parameter indicates whether it should be rendered in block level, and the second parameter is the string of the TeX content, and return a HTML string as render result.</p>
<p>You can import TeX renderer to provide preview feature. We recommend you to use Katex or MathJax, or you can set to <code v-pre>false</code> to disable parsing TeX.</p>
</li>
</ul>
<h3 id="search" tabindex="-1"><a class="header-anchor" href="#search"><span>search <Badge text="Client Config Only" type="warning"/></span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>WalineSearchOptions | false</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">WalineSearchImageData</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Image link</span>
<span class="line">   */</span></span>
<span class="line">  src<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Image title</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> Used for alt attribute of image</span>
<span class="line">   */</span></span>
<span class="line">  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Image preview link</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> For better loading performance, we will use this thumbnail first in the list</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> src</span>
<span class="line">   */</span></span>
<span class="line">  preview<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">WalineSearchResult</span> <span class="token operator">=</span> WalineSearchImageData<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">WalineSearchOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Search action</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function-variable function">search</span><span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">></span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Default result when opening list</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> () => search('')</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">default</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">></span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Fetch more action</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> It will be triggered when the list scrolls to the bottom. If your search service supports paging, you should set this to achieve infinite scrolling</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> (word) => search(word)</span>
<span class="line">   */</span></span>
<span class="line">  more<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> currentCount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Details: Customize search features, you can disable search function by setting it to <code v-pre>false</code>.</p>
</li>
</ul>
<h3 id="recaptchav3key" tabindex="-1"><a class="header-anchor" href="#recaptchav3key"><span>recaptchaV3Key</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>reCAPTCHA V3 is a captcha service provided by Google. You can add reCAPTCHA V3 site key with <code v-pre>recaptchaV3Key</code> to enable it.</p>
<p>You should also set environment variable <code v-pre>RECAPTCHA_V3_SECRET</code> for server.</p>
</li>
</ul>
<h3 id="reaction" tabindex="-1"><a class="header-anchor" href="#reaction"><span>reaction</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean | string[]</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details:</p>
<p>Add emoji interaction function to the article, set it to <code v-pre>true</code> to provide the default emoji, you can also customize the emoji image by setting the emoji url array, and supports a maximum of 8 emojis.</p>
</li>
</ul>
<h3 id="metaicon" tabindex="-1"><a class="header-anchor" href="#metaicon"><span>metaIcon <Badge text="Plugin Option Only" type="warning"/></span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>true</code></li>
<li>Details: Whether import meta icon.</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales <Badge text="Plugin Option Only" type="warning"/></span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>WalineLocales</code></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">WalineLocales</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> WalineLocale</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>Reference:</p>
<ul>
<li><a href="https://waline.js.org/en/cookbook/customize/locale.html" target="_blank" rel="noopener noreferrer">Waline Locales</a></li>
</ul>
</li>
<li>
<p>Details:
Waline locales.</p>
</li>
</ul>
<h2 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config"><span>Plugin Config</span></a></h2>
<p>You can directly configure serializable options in the plugin options:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/config.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> commentPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">commentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      provider<span class="token operator">:</span> <span class="token string">'Waline'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// other options</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="client-config" tabindex="-1"><a class="header-anchor" href="#client-config"><span>Client Config</span></a></h2>
<p>You can use the <code v-pre>defineWalineConfig</code> function to customize Waline:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/client.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineWalineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineWalineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Waline config</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></div></template>


