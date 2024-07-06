<template><div><h1 id="links-check" tabindex="-1"><a class="header-anchor" href="#links-check"><span>links-check</span></a></h1>
<NpmBadge package="@vuepress/plugin-links-check" /><p>This plugin will check dead links in your markdown files.</p>
<p>This plugin has been integrated into the default theme.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-links-check@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> linksCheckPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-links-check'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">linksCheckPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="dev" tabindex="-1"><a class="header-anchor" href="#dev"><span>dev</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether check dead links in markdown in devServer</p>
</li>
</ul>
<h3 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>build</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean | 'error'</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether check dead links in markdown in build. If set to <code v-pre>'error'</code>, the build will fail if there are dead links.</p>
</li>
</ul>
<h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude"><span>exclude</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(string | RegExp)[] | ((link: string, isDev: boolean) =&gt; boolean)</code></p>
</li>
<li>
<p>Details:</p>
<p>The links that should be excluded from checking. You can use a list of strings or regular expressions, or a function that returns a boolean.</p>
</li>
<li>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">linksCheckPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  exclude<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// exclude links by string</span></span>
<span class="line">    <span class="token string">'/exclude-link'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// exclude links by regex</span></span>
<span class="line">    <span class="token operator">/</span>\<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">exclude-link-regex</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// or exclude links by function</span></span>
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


