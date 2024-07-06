<template><div><h1 id="links-check" tabindex="-1"><a class="header-anchor" href="#links-check"><span>links-check</span></a></h1>
<NpmBadge package="@vuepress/plugin-links-check" /><p>此插件将检查您的 markdown 文件中的死链接。</p>
<p>此插件已集成到默认主题中。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-links-check@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> linksCheckPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-links-check'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">linksCheckPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 选项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="dev" tabindex="-1"><a class="header-anchor" href="#dev"><span>dev</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在开发服务器中检查 markdown 中的死链接</p>
</li>
</ul>
<h3 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>build</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean | 'error'</code></p>
</li>
<li>
<p>默认值：<code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在构建中检查 markdown 中的死链接。如果设置为 <code v-pre>'error'</code>，则构建将在存在死链接时失败。</p>
</li>
</ul>
<h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude"><span>exclude</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>(string | RegExp)[] | ((link: string, isDev: boolean) =&gt; boolean)</code></p>
</li>
<li>
<p>详情：</p>
<p>应该从检查中排除的链接。您可以使用字符串或正则表达式的列表，或者返回布尔值的函数。</p>
</li>
<li>
<p>示例：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">linksCheckPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  exclude<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 通过字符串排除链接</span></span>
<span class="line">    <span class="token string">'/exclude-link'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 通过正则表达式排除链接</span></span>
<span class="line">    <span class="token operator">/</span>\<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">exclude-link-regex</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 或者通过函数排除链接</span></span>
<span class="line">  <span class="token function-variable function">exclude</span><span class="token operator">:</span> <span class="token punctuation">(</span>link<span class="token punctuation">,</span> isDev<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>isDev<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> link<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'/exclude-link-dev'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> link<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'/exclude-link-build'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


