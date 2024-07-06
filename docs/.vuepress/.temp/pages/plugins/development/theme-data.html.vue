<template><div><h1 id="theme-data" tabindex="-1"><a class="header-anchor" href="#theme-data"><span>theme-data</span></a></h1>
<NpmBadge package="@vuepress/plugin-theme-data" /><p>Provide client data for your theme, with VuePress <a href="https://vuejs.press/guide/i18n.html" target="_blank" rel="noopener noreferrer">i18n</a> support.</p>
<p>This plugin is mainly used to develop themes, and has been integrated into the default theme. You won't need to use it directly in most cases.</p>
<p>For theme authors, this plugin will help you to use the same i18n mechanism as VuePress and the default theme. But if you don't want to provide i18n support, or you want to implement in your own way, you don't need this plugin.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-theme-data@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> themeDataPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">themeDataPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="themedata" tabindex="-1"><a class="header-anchor" href="#themedata"><span>themeData</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>ThemeData</code></p>
</li>
<li>
<p>Default: <code v-pre>{}</code></p>
</li>
<li>
<p>Details:</p>
<p>The theme data object that you want to use in client side.</p>
<p>You can provide theme data in Node side via this option, and use it in client side via <a href="#useThemeData">useThemeData</a> and <a href="#useThemeLocaleData">useThemeLocaleData</a>.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">themeDataPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      themeData<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        foo<span class="token operator">:</span> <span class="token string">'foo'</span><span class="token punctuation">,</span></span>
<span class="line">        locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            foo<span class="token operator">:</span> <span class="token string">'zh-foo'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>The theme data object will be processed by <code v-pre>JSON.stringify()</code> before forwarding to client side, so you should ensure that you are providing a JSON-friendly object.</p>
</div>
<h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api"><span>Composition API</span></a></h2>
<h3 id="usethemedata" tabindex="-1"><a class="header-anchor" href="#usethemedata"><span>useThemeData</span></a></h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the theme data ref object.</p>
<p>The value is provided by <a href="#themeData">themeData</a> option.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useThemeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ThemeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">MyThemeData</span> <span class="token operator">=</span> ThemeData<span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  foo<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> themeData <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useThemeData</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyThemeData<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>themeData<span class="token punctuation">.</span>value<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usethemelocaledata" tabindex="-1"><a class="header-anchor" href="#usethemelocaledata"><span>useThemeLocaleData</span></a></h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the theme data ref object in current locale.</p>
<p>The properties of current locale has been merged into the root-level properties.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useThemeLocaleData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ThemeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">MyThemeData</span> <span class="token operator">=</span> ThemeData<span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  foo<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> themeLocaleData <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useThemeLocaleData</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyThemeData<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>themeLocaleData<span class="token punctuation">.</span>value<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


