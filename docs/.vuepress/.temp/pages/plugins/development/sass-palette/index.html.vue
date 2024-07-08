<template><div><h1 id="sass-palette" tabindex="-1"><a class="header-anchor" href="#sass-palette"><span>sass-palette</span></a></h1>
<NpmBadge package="@vuepress/plugin-sass-palette" /><p>This plugin is mainly facing plugin and theme developers, it is more powerful than <RouteLink to="/plugins/development/palette.html"><code v-pre>@vuepress/plugin-palette</code></RouteLink>.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<p>You must invoke <code v-pre>useSassPalettePlugin</code> function during plugin initialization to use this plugin.</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-sass-palette@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="Your plugin or theme entry"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useSassPalettePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress-plugin-sass-palette'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> PluginFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> yourPlugin <span class="token operator">=</span></span>
<span class="line">  <span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token operator">:</span> PluginFunction <span class="token operator">=></span></span>
<span class="line">  <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">useSassPalettePlugin</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// plugin options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// your plugin api</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


