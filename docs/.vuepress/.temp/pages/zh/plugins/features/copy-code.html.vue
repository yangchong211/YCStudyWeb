<template><div><h1 id="copy-code" tabindex="-1"><a class="header-anchor" href="#copy-code"><span>copy-code</span></a></h1>
<NpmBadge package="@vuepress/plugin-copy-code" /><p>此插件会自动在 PC 设备上为每个代码块右上角添加复制按钮。</p>
<p>默认选择器匹配 <code v-pre>@vuepress/theme-default</code>，所以在你自己的主题中集成时可能需要调整它。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-copy-code@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> copyCodePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-copy-code'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">copyCodePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>selector</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>string | string[]</code></p>
</li>
<li>
<p>默认值：<code v-pre>'.theme-default-content div[class*=&quot;language-&quot;] pre'</code></p>
</li>
<li>
<p>详情:</p>
<p>代码块选择器</p>
</li>
</ul>
<h3 id="showinmobile" tabindex="-1"><a class="header-anchor" href="#showinmobile"><span>showInMobile</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>false</code></p>
</li>
<li>
<p>详情:</p>
<p>是否展示在移动端</p>
</li>
</ul>
<h3 id="duration" tabindex="-1"><a class="header-anchor" href="#duration"><span>duration</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>number</code></p>
</li>
<li>
<p>默认值：<code v-pre>2000</code></p>
</li>
<li>
<p>详情:</p>
<p>提示消息显示时间，设置为 <code v-pre>0</code> 会禁用提示。</p>
</li>
</ul>
<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>number</code></p>
</li>
<li>
<p>默认值：<code v-pre>800</code></p>
</li>
<li>
<p>详情:</p>
<p>注册复制按钮的延时，单位 ms。</p>
<p>如果你使用的主题有切换动画，建议配置此选项为 <code v-pre>切换动画时长 + 200</code></p>
</li>
</ul>
<h3 id="ignoreselector" tabindex="-1"><a class="header-anchor" href="#ignoreselector"><span>ignoreSelector</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>string[]</code></p>
</li>
<li>
<p>详情:</p>
<p>代码块中的元素选择器，用于在复制时忽略相关元素。</p>
<p>例如: <code v-pre>['.token.comment']</code> 将忽略代码块中类名为 <code v-pre>.token.comment</code> 的节点 （这会在 <code v-pre>prismjs</code> 中忽略注释）。</p>
</li>
</ul>
<h3 id="transform" tabindex="-1"><a class="header-anchor" href="#transform"><span>transform <Badge type="tip" text="仅限组合式 API" /></span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>(preElement: HTMLPreElement) =&gt; void</code></p>
</li>
<li>
<p>详情:</p>
<p>一个转换器，用于在复制之前对 <code v-pre>&lt;pre&gt;</code> 中代码块内容进行修改。该选项仅在使用 <code v-pre>useCopyCode()</code> 时有效。</p>
</li>
<li>
<p>示例：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useCopyCode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-copy-code/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">useCopyCode</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">transform</span><span class="token operator">:</span> <span class="token punctuation">(</span>preElement<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 删除 `.ignore` 类名的元素</span></span>
<span class="line">        pre<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'.ignore'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">// 插入版权信息</span></span>
<span class="line">        pre<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n Copied by VuePress</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// ...其它选项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>CopyCodePluginLocaleConfig</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">CopyCodePluginLocaleData</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 复制文字</span>
<span class="line">   */</span></span>
<span class="line">  copy<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 已复制文字</span>
<span class="line">   */</span></span>
<span class="line">  copied<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">CopyCodePluginLocaleConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> CopyCodePluginLocaleData</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>必填：否</p>
</li>
<li>
<p>详情:</p>
<p>复制按钮插件的国际化配置。</p>
</li>
<li>
<p>示例：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> copyCodePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-copy-code'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 这是一个支持的语言</span></span>
<span class="line">      lang<span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'/xx/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 这是一个没有收到插件支持的语言</span></span>
<span class="line">      lang<span class="token operator">:</span> <span class="token string">'mm-NN'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">copyCodePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 覆盖复制按钮标签文字</span></span>
<span class="line">          copy<span class="token operator">:</span> <span class="token string">'复制此段代码'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">        <span class="token string-property property">'/xx/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 在这里完整设置 `mm-NN` 的多语言配置</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
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
<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2>
<p>你可以通过 CSS 变量来自定义<em>复制按钮</em>的样式：</p>
<div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--code-copy-icon</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2' /%3e%3c/svg%3e"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--code-copied-icon</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4' /%3e%3c/svg%3e"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--copy-code-color</span><span class="token punctuation">:</span> #9e9e9e<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--copy-code-hover</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 / 50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></div></template>


