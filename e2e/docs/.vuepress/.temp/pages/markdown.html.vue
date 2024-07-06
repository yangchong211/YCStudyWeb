<template><div><h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown"><span>Markdown</span></a></h1>
<h2 id="heading-test" tabindex="-1"><a class="header-anchor" href="#heading-test"><span>Heading Test</span></a></h2>
<h3 id="heading-3-test" tabindex="-1"><a class="header-anchor" href="#heading-3-test"><span>Heading 3 Test</span></a></h3>
<h4 id="heading-4-test" tabindex="-1"><a class="header-anchor" href="#heading-4-test"><span>Heading 4 Test</span></a></h4>
<h5 id="heading-5-test" tabindex="-1"><a class="header-anchor" href="#heading-5-test"><span>Heading 5 Test</span></a></h5>
<h6 id="heading-6-test" tabindex="-1"><a class="header-anchor" href="#heading-6-test"><span>Heading 6 Test</span></a></h6>
<h2 id="links" tabindex="-1"><a class="header-anchor" href="#links"><span>Links</span></a></h2>
<ul>
<li><RouteLink to="/">Home</RouteLink></li>
</ul>
<h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji"><span>Emoji 🎉</span></a></h2>
<h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents"><span>Table of Contents</span></a></h2>
<nav class="table-of-contents"><ul><li><router-link to="#heading-test">Heading Test</router-link><ul><li><router-link to="#heading-3-test">Heading 3 Test</router-link></li></ul></li><li><router-link to="#links">Links</router-link></li><li><router-link to="#emoji">Emoji 🎉</router-link></li><li><router-link to="#table-of-contents">Table of Contents</router-link></li><li><router-link to="#code-block">Code Block</router-link></li></ul></nav>
<h2 id="code-block" tabindex="-1"><a class="header-anchor" href="#code-block"><span>Code Block</span></a></h2>
<p>Title:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/config.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">'Hello, VuePress'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Line highlighting:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line highlighted"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">'Hello, VuePress'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line highlighted">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Line numbers:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// line-numbers is disabled</span></span>
<span class="line"><span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span></span>
<span class="line"><span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span></span>
<span class="line"></span></code></pre>
</div><p>Code import:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line">  base<span class="token operator">:</span> <span class="token constant">E2E_BASE</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  dest<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">,</span> <span class="token constant">E2E_BASE</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  port<span class="token operator">:</span> <span class="token number">9080</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  head<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


