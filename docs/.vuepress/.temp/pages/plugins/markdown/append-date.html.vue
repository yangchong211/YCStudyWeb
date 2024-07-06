<template><div><h1 id="append-date" tabindex="-1"><a class="header-anchor" href="#append-date"><span>append-date</span></a></h1>
<NpmBadge package="@vuepress/plugin-append-date" /><p>This plugin will append writing date to frontmatter with <RouteLink to="/plugins/development/git.html">@vuepress/plugin-git</RouteLink>.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-append-date@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> appendDatePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-append-date'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">appendDatePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key"><span>key</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>&quot;date&quot;</code></p>
</li>
<li>
<p>Details:</p>
<p>Frontmatter key to use when appending date.</p>
</li>
</ul>
<h3 id="format" tabindex="-1"><a class="header-anchor" href="#format"><span>format</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>&quot;date&quot; | &quot;time&quot; | &quot;full&quot;</code></p>
</li>
<li>
<p>Default: <code v-pre>&quot;date&quot;</code></p>
</li>
<li>
<p>Details:</p>
<p>Format of the date value when appending date.</p>
</li>
</ul>
</div></template>


