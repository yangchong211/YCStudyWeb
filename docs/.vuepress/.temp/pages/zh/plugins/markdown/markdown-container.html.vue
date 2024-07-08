<template><div><h1 id="markdown-container" tabindex="-1"><a class="header-anchor" href="#markdown-container"><span>markdown-container</span></a></h1>
<NpmBadge package="@vuepress/plugin-markdown-container" /><p>为你的 VuePress 站点注册自定义容器。</p>
<p>该插件简化了 <a href="https://github.com/markdown-it/markdown-it-container" target="_blank" rel="noopener noreferrer">markdown-it-container</a> 的使用方法，但同时也保留了其原本的能力。</p>
<p>默认主题的 <RouteLink to="/zh/themes/default/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">自定义容器</RouteLink> 就是由该插件支持的。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-markdown-container@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> markdownContainerPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-markdown-container'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">markdownContainerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="容器语法" tabindex="-1"><a class="header-anchor" href="#容器语法"><span>容器语法</span></a></h2>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line">::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span> [info]</span>
<span class="line">[content]</span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
</div><ul>
<li><code v-pre>type</code> 是必需的，应通过 <a href="#type">type</a> 配置项来指定。</li>
<li><code v-pre>info</code> 是可选的，其默认值可以通过 <a href="#locales">locales</a> 的 <code v-pre>defaultInfo</code> 配置项来指定。</li>
<li><code v-pre>content</code> 可是任何合法的 Markdown 内容。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该插件可以被多次使用，以便支持不同类型的容器。</p>
</div>
<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>容器的类型。</p>
<p>它将会被用作 <a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container</a> 的 <code v-pre>name</code> 参数。</p>
</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>Record&lt;string, { defaultInfo: string }&gt;</code></p>
</li>
<li>
<p>详情：</p>
<p>容器在不同 locales 下的默认 <code v-pre>info</code> 。</p>
<p>如果没有指定该配置项，默认 <code v-pre>info</code> 会使用大写的 <a href="#type">type</a> 。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">markdownContainerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">'tip'</span><span class="token punctuation">,</span></span>
<span class="line">      locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          defaultInfo<span class="token operator">:</span> <span class="token string">'TIP'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          defaultInfo<span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参考：
<ul>
<li><a href="https://vuejs.press/zh/guide/i18n.html" target="_blank" rel="noopener noreferrer">指南 &gt; 多语言支持</a></li>
</ul>
</li>
</ul>
<h3 id="before" tabindex="-1"><a class="header-anchor" href="#before"><span>before</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>(info: string) =&gt; string</code></p>
</li>
<li>
<p>默认值：</p>
</li>
</ul>
<!-- prettier-ignore-start -->
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token punctuation">(</span>info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span></span>
<span class="line">  <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div class="custom-container </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;p class="custom-container-title"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p></span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
</div><!-- prettier-ignore-end -->
<ul>
<li>
<p>详情：</p>
<p>一个用于渲染容器起始标签的函数。</p>
<p>第一个参数是 <a href="#%E5%AE%B9%E5%99%A8%E8%AF%AD%E6%B3%95">容器语法</a> 的 <code v-pre>info</code> 部分。</p>
<p>如果你没有设置 <a href="#after">after</a> 配置项，则该配置项也不会生效。</p>
</li>
</ul>
<h3 id="after" tabindex="-1"><a class="header-anchor" href="#after"><span>after</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>(info: string) =&gt; string</code></p>
</li>
<li>
<p>默认值：</p>
</li>
</ul>
<!-- prettier-ignore-start -->
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span> <span class="token string">'&lt;/div>\n'</span></span>
<span class="line"></span></code></pre>
</div><!-- prettier-ignore-end -->
<ul>
<li>
<p>详情：</p>
<p>一个用于渲染容器结束标签的函数。</p>
<p>第一个参数是 <a href="#%E5%AE%B9%E5%99%A8%E8%AF%AD%E6%B3%95">容器语法</a> 的 <code v-pre>info</code> 部分。</p>
<p>如果你没有设置 <a href="#before">before</a> 配置项，则该配置项也不会生效。</p>
</li>
</ul>
<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render"><span>render</span></a></h3>
<ul>
<li>类型：</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">MarkdownItContainerRenderFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">  tokens<span class="token operator">:</span> Token<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span></span>
<span class="line">  options<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">  env<span class="token operator">:</span> MarkdownEnv<span class="token punctuation">,</span></span>
<span class="line">  self<span class="token operator">:</span> Renderer<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>
<p>详情：</p>
<p><a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container</a> 的 <code v-pre>render</code> 配置项。</p>
<p>该插件使用了一个默认的 <code v-pre>render</code> 函数。但如果你指定了该配置项，那么默认的 <code v-pre>render</code> 函数就会被替换掉，此时 <a href="#locales">locales</a> 、 <a href="#before">before</a> 和 <a href="#after">after</a> 配置项都会被忽略。</p>
</li>
</ul>
<h3 id="validate" tabindex="-1"><a class="header-anchor" href="#validate"><span>validate</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>(params: string) =&gt; boolean</code></p>
</li>
<li>
<p>详情：</p>
<p><a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container</a> 的 <code v-pre>validate</code> 配置项。</p>
</li>
</ul>
<h3 id="marker" tabindex="-1"><a class="header-anchor" href="#marker"><span>marker</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p><a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container</a> 的 <code v-pre>marker</code> 配置项。</p>
</li>
</ul>
</div></template>


