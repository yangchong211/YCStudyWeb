<template><div><h1 id="giscus-选项" tabindex="-1"><a class="header-anchor" href="#giscus-选项"><span>Giscus 选项</span></a></h1>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo"><span>repo</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>详情：存放评论的仓库</li>
</ul>
<h3 id="repoid" tabindex="-1"><a class="header-anchor" href="#repoid"><span>repoId</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>详情：仓库 ID，请从 <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 页面</a> 生成。</li>
</ul>
<h3 id="category" tabindex="-1"><a class="header-anchor" href="#category"><span>category</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>详情：讨论分类</li>
</ul>
<h3 id="categoryid" tabindex="-1"><a class="header-anchor" href="#categoryid"><span>categoryId</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>详情：讨论分类 ID，请从 <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 页面</a> 生成。</li>
</ul>
<h3 id="mapping" tabindex="-1"><a class="header-anchor" href="#mapping"><span>mapping</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>默认值: <code v-pre>&quot;pathname&quot;</code></li>
<li>详情：页面 ↔️ discussion 映射关系，详见 <a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 页面</a>。</li>
</ul>
<h3 id="strict" tabindex="-1"><a class="header-anchor" href="#strict"><span>strict</span></a></h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: <code v-pre>true</code></li>
<li>详情：是否启用严格匹配</li>
</ul>
<h3 id="lazyloading" tabindex="-1"><a class="header-anchor" href="#lazyloading"><span>lazyLoading</span></a></h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: <code v-pre>true</code></li>
<li>详情：是否启用懒加载</li>
</ul>
<h3 id="reactionsenabled" tabindex="-1"><a class="header-anchor" href="#reactionsenabled"><span>reactionsEnabled</span></a></h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: <code v-pre>true</code></li>
<li>详情：是否启用主帖子上的反应</li>
</ul>
<h3 id="inputposition" tabindex="-1"><a class="header-anchor" href="#inputposition"><span>inputPosition</span></a></h3>
<ul>
<li>类型: <code v-pre>&quot;top&quot; | &quot;bottom&quot;</code></li>
<li>默认值: <code v-pre>&quot;top&quot;</code></li>
<li>详情：输入框的位置</li>
</ul>
<h3 id="lighttheme" tabindex="-1"><a class="header-anchor" href="#lighttheme"><span>lightTheme</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>GiscusTheme</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">GiscusTheme</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light_high_contrast'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light_protanopia'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_high_contrast'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_protanopia'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_dimmed'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'transparent_dark'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'preferred_color_scheme'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>默认值: <code v-pre>&quot;light&quot;</code></p>
</li>
<li>
<p>详情：</p>
<p>Giscus 在日间模式下使用的主题</p>
<p>应为一个内置主题关键词或者一个 CSS 链接。</p>
</li>
</ul>
<h3 id="darktheme" tabindex="-1"><a class="header-anchor" href="#darktheme"><span>darkTheme</span></a></h3>
<ul>
<li>
<p>类型: <code v-pre>GiscusTheme</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">GiscusTheme</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light_high_contrast'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light_protanopia'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_high_contrast'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_protanopia'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_dimmed'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'transparent_dark'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'preferred_color_scheme'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>默认值: <code v-pre>&quot;dark&quot;</code></p>
</li>
<li>
<p>详情：</p>
<p>Giscus 在夜间模式下使用的主题</p>
<p>应为一个内置主题关键词或者一个 CSS 链接。</p>
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
<span class="line">      provider<span class="token operator">:</span> <span class="token string">'Giscus'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 其他选项</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h2>
<p>你可以使用 <code v-pre>defineGiscusConfig</code> 函数来配置 Giscus。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/client.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineGiscusConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineGiscusConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Giscus 选项</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></div></template>


