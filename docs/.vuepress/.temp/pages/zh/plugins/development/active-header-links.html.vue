<template><div><h1 id="active-header-links" tabindex="-1"><a class="header-anchor" href="#active-header-links"><span>active-header-links</span></a></h1>
<NpmBadge package="@vuepress/plugin-active-header-links" /><p>该插件会监听页面滚动事件。当页面滚动至某个 <em>标题锚点</em> 后，如果存在对应的 <em>标题链接</em> ，那么该插件会将路由 Hash 更改为该 <em>标题锚点</em> 。</p>
<p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-active-header-links@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> activeHeaderLinksPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-active-header-links'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">activeHeaderLinksPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<h3 id="headerlinkselector" tabindex="-1"><a class="header-anchor" href="#headerlinkselector"><span>headerLinkSelector</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'a.sidebar-item'</code></p>
</li>
<li>
<p>详情：</p>
<p><em>标题链接</em> 的选择器。</p>
<p>如果一个 <em>标题锚点</em> 没有对应的 <em>标题链接</em> ，那么即使滚动到这个 <em>标题锚点</em> ，该插件也不会更改路由 Hash 。</p>
</li>
</ul>
<h3 id="headeranchorselector" tabindex="-1"><a class="header-anchor" href="#headeranchorselector"><span>headerAnchorSelector</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>默认值： <code v-pre>'.header-anchor'</code></p>
</li>
<li>
<p>详情：</p>
<p><em>标题锚点</em> 的选择器。</p>
<p>你通常不需要设置该选项，除非你通过 <a href="https://vuejs.press/zh/reference/config.html#markdown-anchor" target="_blank" rel="noopener noreferrer">markdown.anchor</a> 修改了 <a href="https://github.com/valeriangalliat/markdown-it-anchor#readme" target="_blank" rel="noopener noreferrer">markdown-it-anchor</a> 的 <code v-pre>permalinkClass</code> 选项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://vuejs.press/zh/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9" target="_blank" rel="noopener noreferrer">指南 &gt; Markdown &gt; 语法扩展 &gt; 标题锚点</a></li>
</ul>
</li>
</ul>
<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>number</code></p>
</li>
<li>
<p>默认值： <code v-pre>200</code></p>
</li>
<li>
<p>详情：</p>
<p>滚动事件监听器的 Debounce 延迟。</p>
</li>
</ul>
<h3 id="offset" tabindex="-1"><a class="header-anchor" href="#offset"><span>offset</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>number</code></p>
</li>
<li>
<p>默认值： <code v-pre>5</code></p>
</li>
<li>
<p>详情：</p>
<p>即便直接点击 <em>标题锚点</em> 的链接， <code v-pre>scrollTop</code> 也可能不会完全等于 <em>标题锚点</em> 的 <code v-pre>offsetTop</code> ，所以我们添加一个 Offset 偏移量来避免这个误差。</p>
</li>
</ul>
</div></template>


