<template><div><h1 id="waline-选项" tabindex="-1"><a class="header-anchor" href="#waline-选项"><span>Waline 选项</span></a></h1>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<h3 id="serverurl" tabindex="-1"><a class="header-anchor" href="#serverurl"><span>serverURL</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>详情：Waline 的服务端地址。</li>
</ul>
<h3 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji"><span>emoji</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>(WalineEmojiInfo | WalineEmojiPresets)[] | false</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WalineEmojiPresets</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">WalineEmojiInfo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 选项卡上的 Emoji 名称</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 所在文件夹链接</span>
<span class="line">   */</span></span>
<span class="line">  folder<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Emoji 通用路径前缀</span>
<span class="line">   */</span></span>
<span class="line">  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Emoji 图片的类型，会作为文件扩展名使用</span>
<span class="line">   */</span></span>
<span class="line">  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 选项卡显示的 Emoji 图标</span>
<span class="line">   */</span></span>
<span class="line">  icon<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Emoji 图片列表</span>
<span class="line">   */</span></span>
<span class="line">  items<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>默认值: <code v-pre>['//unpkg.com/@waline/emojis@1.1.0/weibo']</code></p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://waline.js.org/guide/features/emoji.html" target="_blank" rel="noopener noreferrer">自定义表情</a></li>
</ul>
</li>
<li>
<p>详情：表情设置</p>
</li>
</ul>
<h3 id="dark" tabindex="-1"><a class="header-anchor" href="#dark"><span>dark</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>string | boolean</code></p>
</li>
<li>
<p>默认值: <code v-pre>false</code></p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://waline.js.org/guide/features/style.html" target="_blank" rel="noopener noreferrer">自定义样式</a></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>暗黑模式适配。</p>
<ul>
<li>设置布尔值会根据其值来设置暗黑模式。</li>
<li>设置 <code v-pre>'auto'</code> 会根据设备暗黑模式自适应。</li>
<li>填入 CSS 选择器会在对应选择器生效时启用夜间模式。</li>
</ul>
</li>
</ul>
<h3 id="commentsorting" tabindex="-1"><a class="header-anchor" href="#commentsorting"><span>commentSorting</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>WalineCommentSorting</code></p>
</li>
<li>
<p>默认值: <code v-pre>'latest'</code></p>
</li>
<li>
<p>详情：</p>
<p>评论列表排序方式。可选值: <code v-pre>'latest'</code>, <code v-pre>'oldest'</code>, <code v-pre>'hottest'</code></p>
</li>
</ul>
<h3 id="meta" tabindex="-1"><a class="header-anchor" href="#meta"><span>meta</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>string[]</code></p>
</li>
<li>
<p>默认值: <code v-pre>['nick', 'mail', 'link']</code></p>
</li>
<li>
<p>详情：</p>
<p>评论者相关属性。可选值: <code v-pre>'nick'</code>, <code v-pre>'mail'</code>, <code v-pre>'link'</code></p>
</li>
</ul>
<h3 id="requiredmeta" tabindex="-1"><a class="header-anchor" href="#requiredmeta"><span>requiredMeta</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>string[]</code></p>
</li>
<li>
<p>默认值: <code v-pre>[]</code></p>
</li>
<li>
<p>详情：</p>
<p>设置<strong>必填项</strong>，默认匿名，可选值:</p>
<ul>
<li><code v-pre>[]</code></li>
<li><code v-pre>['nick']</code></li>
<li><code v-pre>['nick', 'mail']</code></li>
</ul>
</li>
</ul>
<h3 id="login" tabindex="-1"><a class="header-anchor" href="#login"><span>login</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>默认值: <code v-pre>'enable'</code></li>
</ul>
<p>登录模式状态，可选值:</p>
<ul>
<li><code v-pre>'enable'</code>: 启用登录 (默认)</li>
<li><code v-pre>'disable'</code>: 禁用登录，用户只能填写信息评论</li>
<li><code v-pre>'force'</code>: 强制登录，用户必须注册并登录才可发布评论</li>
</ul>
<h3 id="wordlimit" tabindex="-1"><a class="header-anchor" href="#wordlimit"><span>wordLimit</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>number | [number, number]</code></p>
</li>
<li>
<p>默认值: <code v-pre>0</code></p>
</li>
<li>
<p>详情：</p>
<p>评论字数限制。填入单个数字时为最大字数限制。设置为 <code v-pre>0</code> 时无限制。</p>
</li>
</ul>
<h3 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize"><span>pageSize</span></a></h3>
<ul>
<li>类型: <code v-pre>number</code></li>
<li>默认值: <code v-pre>10</code></li>
<li>详情：评论列表分页，每页条数。</li>
</ul>
<h3 id="imageuploader" tabindex="-1"><a class="header-anchor" href="#imageuploader"><span>imageUploader <Badge text="仅限客户端配置" type="warning"/></span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>WalineImageUploader | false</code></p>
</li>
<li>
<p>详情:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WalineImageUploader</span> <span class="token operator">=</span> <span class="token punctuation">(</span>image<span class="token operator">:</span> File<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>参考:</p>
<ul>
<li><a href="https://waline.js.org/cookbook/customize/upload-image.html" target="_blank" rel="noopener noreferrer">Cookbook → 自定义图片上传</a></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>自定义图片上传方法。默认行为是将图片 Base 64 编码嵌入，你可以设置为 <code v-pre>false</code> 以禁用图片上传功能。</p>
<p>函数应该接收图片对象，返回一个提供图片地址的 Promise。</p>
</li>
</ul>
<h3 id="highlighter" tabindex="-1"><a class="header-anchor" href="#highlighter"><span>highlighter <Badge text="仅限客户端配置" type="warning"/></span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>WalineHighlighter | false</code></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WalineHighlighter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>参考:</p>
<ul>
<li><a href="https://waline.js.org/cookbook/customize/highlighter.html" target="_blank" rel="noopener noreferrer">Cookbook → 自定义代码高亮</a></li>
</ul>
</li>
<li>
<p>详情：</p>
<p><strong>代码高亮</strong>，默认使用一个 &lt; 1kb 的简单高亮器。函数传入代码块的原始字符和代码块的语言。你应该直接返回一个字符串。</p>
<p>你可以传入一个自己的代码高亮器，也可以设置为 <code v-pre>false</code> 以禁用代码高亮功能。</p>
</li>
</ul>
<h3 id="texrenderer" tabindex="-1"><a class="header-anchor" href="#texrenderer"><span>texRenderer <Badge text="仅限客户端配置" type="warning"/></span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>WalineTexRenderer | false</code></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WalineTexRenderer</span> <span class="token operator">=</span> <span class="token punctuation">(</span>blockMode<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> tex<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>参考:</p>
<ul>
<li><a href="https://waline.js.org/cookbook/customize/tex-renderer.html" target="_blank" rel="noopener noreferrer">Cookbook → 自定义 TeX 渲染器</a></li>
<li><a href="https://www.mathjax.org/" target="_blank" rel="noopener noreferrer">MathJax</a></li>
<li><a href="https://katex.org/" target="_blank" rel="noopener noreferrer">KaTeX</a></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>自定义 TeX 渲染，默认行为是提示预览模式不支持 TeX。函数提供两个参数，第一个参数表示渲染模式是否为块级，第二个参数是 TeX 的字符串，并返回一段 HTML 字符串作为渲染结果。</p>
<p>你可以自行引入 TeX 渲染器并提供预览渲染，建议使用 Katex 或 MathJax，也可以设置为 <code v-pre>false</code> 以禁止渲染 TeX。</p>
</li>
</ul>
<h3 id="search" tabindex="-1"><a class="header-anchor" href="#search"><span>search <Badge text="仅限客户端配置" type="warning"/></span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>WalineSearchOptions | false</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">WalineSearchImageData</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 图片链接</span>
<span class="line">   */</span></span>
<span class="line">  src<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 图片标题</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> 用于图片的 alt 属性</span>
<span class="line">   */</span></span>
<span class="line">  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 图片缩略图</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> 为了更好的加载性能，我们会优先在列表中使用此缩略图</span>
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
<span class="line">   * 搜索操作</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function-variable function">search</span><span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">></span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 打开列表时展示的默认结果</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> () => search('')</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token keyword">default</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">></span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 获取更多的操作</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> 会在列表滚动到底部时触发，如果你的搜索服务支持分页功能，你应该设置此项实现无限滚动</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> (word) => search(word)</span>
<span class="line">   */</span></span>
<span class="line">  more<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> currentCount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>详情：自定义搜索功能，设置 <code v-pre>false</code> 可禁用搜索。</p>
</li>
</ul>
<h3 id="recaptchav3key" tabindex="-1"><a class="header-anchor" href="#recaptchav3key"><span>recaptchaV3Key</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>reCAPTCHA V3 是 Google 提供的验证码服务，配置 reCAPTCHA V3 网站密钥即可开启该功能。</p>
<p>服务端需要同步配置 <code v-pre>RECAPTCHA_V3_SECRET</code> 环境变量。</p>
</li>
</ul>
<h3 id="reaction" tabindex="-1"><a class="header-anchor" href="#reaction"><span>reaction</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>boolean | string[]</code></p>
</li>
<li>
<p>默认值: <code v-pre>false</code></p>
</li>
<li>
<p>详情：</p>
<p>为文章增加表情互动功能，设置为 <code v-pre>true</code> 提供默认表情，也可以通过设置表情地址数组来自定义表情图片，最大支持 8 个表情。</p>
</li>
</ul>
<h3 id="metaicon" tabindex="-1"><a class="header-anchor" href="#metaicon"><span>metaIcon <Badge text="仅限插件选项" type="warning"/></span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值: <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否导入 Meta 图标。</p>
</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales <Badge text="仅限插件选项" type="warning"/></span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>WalineLocales</code></p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">WalineLocales</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> WalineLocale</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>参考:</p>
<ul>
<li><a href="https://waline.js.org/cookbook/customize/locale.html" target="_blank" rel="noopener noreferrer">Waline 多语言配置</a></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>Waline 多语言配置</p>
</li>
</ul>
<h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置"><span>插件配置</span></a></h2>
<p>你可以直接在插件选项中配置可序列化的选项:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/config.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> commentPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">commentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      provider<span class="token operator">:</span> <span class="token string">'Waline'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 其他选项</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h2>
<p>你可以使用 <code v-pre>defineWalineConfig</code> 函数来配置 Waline。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/client.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineWalineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineWalineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Waline 选项</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></div></template>


