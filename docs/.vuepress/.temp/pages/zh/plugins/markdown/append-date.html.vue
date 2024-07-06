<template><div><h1 id="append-date" tabindex="-1"><a class="header-anchor" href="#append-date"><span>append-date</span></a></h1>
<NpmBadge package="@vuepress/plugin-append-date" /><p>该插件会基于 <RouteLink to="/zh/plugins/development/git.html">@vuepress/plugin-git</RouteLink> 为 frontmatter 追加写作日期。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-append-date@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> appendDatePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-append-date'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">appendDatePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key"><span>key</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>默认值: <code v-pre>&quot;date&quot;</code></li>
<li>详情：追加时间时使用的 frontmatter 键名。</li>
</ul>
<h3 id="format" tabindex="-1"><a class="header-anchor" href="#format"><span>format</span></a></h3>
<ul>
<li>类型: <code v-pre>&quot;date&quot; | &quot;time&quot; | &quot;full&quot;</code></li>
<li>默认值: <code v-pre>&quot;date&quot;</code></li>
<li>详情：追加时间时使用的日期格式。</li>
</ul>
</div></template>


