<template><div><h1 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h1>
<p>VuePress 默认主题有着大量的用户，因此我们对它进行了一些便于继承的设计，以便用户轻松进行定制化。</p>
<h2 id="布局插槽" tabindex="-1"><a class="header-anchor" href="#布局插槽"><span>布局插槽</span></a></h2>
<p>默认主题的 <code v-pre>Layout</code> 布局提供了一些插槽：</p>
<ul>
<li><code v-pre>navbar</code></li>
<li><code v-pre>navbar-before</code></li>
<li><code v-pre>navbar-after</code></li>
<li><code v-pre>sidebar</code></li>
<li><code v-pre>sidebar-top</code></li>
<li><code v-pre>sidebar-bottom</code></li>
<li><code v-pre>page</code></li>
<li><code v-pre>page-top</code></li>
<li><code v-pre>page-bottom</code></li>
<li><code v-pre>page-content-top</code></li>
<li><code v-pre>page-content-bottom</code></li>
</ul>
<p>在它们的帮助下，你可以很容易地添加或替换内容。下面通过一个示例来介绍一下如何使用布局插槽来继承默认主题。</p>
<p>首先，创建一个客户端配置文件 <code v-pre>.vuepress/client.ts</code> ：</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/client'</span></span>
<span class="line"><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">'./layouts/Layout.vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  layouts<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    Layout<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><p>接下来，创建 <code v-pre>.vuepress/layouts/Layout.vue</code> ，并使用由默认主题的 <code v-pre>Layout</code> 布局提供的插槽：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> ParentLayout <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default/layouts/Layout.vue'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ParentLayout</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#page-bottom</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>This is my custom page footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ParentLayout</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.my-footer</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时默认的 <code v-pre>Layout</code> 布局已经被你的本地布局覆盖，将会在除了首页外的所有页面添加一个自定义的页脚：</p>
<figure><img src="/images/cookbook/extending-a-theme-01.png" alt="extending-a-theme" tabindex="0"><figcaption>extending-a-theme</figcaption></figure>
<h2 id="组件替换" tabindex="-1"><a class="header-anchor" href="#组件替换"><span>组件替换</span></a></h2>
<p>布局插槽十分实用，但有时候你可能会觉得它不够灵活。默认主题同样提供了替换单个组件的能力。</p>
<p>默认主题将所有 <a href="https://github.com/vuepress/ecosystem/tree/main/themes/theme-default/src/client/components" target="_blank" rel="noopener noreferrer">非全局的组件</a> 都注册了一个带 <code v-pre>@theme</code> 前缀的 <a href="https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#alias" target="_blank" rel="noopener noreferrer">alias</a> 。例如，<code v-pre>VPHomeFooter.vue</code> 的别名是 <code v-pre>@theme/VPHomeFooter.vue</code> 。</p>
<p>接下来，如果你想要替换 <code v-pre>VPHomeFooter.vue</code> 组件，只需要在配置文件 <code v-pre>.vuepress/config.ts</code> 中覆盖这个别名即可：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/utils'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  alias<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'@theme/VPHomeFooter.vue'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span></span>
<span class="line">      __dirname<span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">'./components/MyHomeFooter.vue'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改行为" tabindex="-1"><a class="header-anchor" href="#修改行为"><span>修改行为</span></a></h2>
<p>默认主题的核心行为大多都被抽离成可组合式 API，并同样提供了 <code v-pre>@theme</code> 前缀的 <a href="https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#alias" target="_blank" rel="noopener noreferrer">alias</a>。</p>
<p>比如，如果你想为默认主题的主题数据添加一些默认值，你可以通过覆盖 <code v-pre>@theme/useThemeData</code> 的 <code v-pre>useThemeData</code> 函数来实现。</p>
<h2 id="开发一个子主题" tabindex="-1"><a class="header-anchor" href="#开发一个子主题"><span>开发一个子主题</span></a></h2>
<p>除了在 <code v-pre>.vuepress/config.ts</code> 和 <code v-pre>.vuepress/client.ts</code> 中直接扩展默认主题以外，你可以通过继承默认主题来开发一个你自己的主题：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">DefaultThemeOptions</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Theme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> childTheme <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> DefaultThemeOptions<span class="token punctuation">)</span><span class="token operator">:</span> Theme <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'vuepress-theme-child'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 在子主题的客户端配置文件中覆盖布局</span></span>
<span class="line">    <span class="token comment">// 注意，你在发布到 NPM 之前会将 TS 构建为 JS ，因此这里需要设置为 JS 文件的路径</span></span>
<span class="line">    clientConfigFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./client.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 覆盖组件别名</span></span>
<span class="line">    alias<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'@theme/VPHomeFooter.vue'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span></span>
<span class="line">        __dirname<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'./components/MyHomeFooter.vue'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


