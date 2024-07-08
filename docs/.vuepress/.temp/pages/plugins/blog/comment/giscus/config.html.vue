<template><div><h1 id="giscus-options" tabindex="-1"><a class="header-anchor" href="#giscus-options"><span>Giscus Options</span></a></h1>
<h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2>
<h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo"><span>repo</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details: The name of repository to store discussions.</li>
</ul>
<h3 id="repoid" tabindex="-1"><a class="header-anchor" href="#repoid"><span>repoId</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details:
The ID of repository to store discussions. Generate through <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">Giscus Page</a></li>
</ul>
<h3 id="category" tabindex="-1"><a class="header-anchor" href="#category"><span>category</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details:
The name of the discussion category.</li>
</ul>
<h3 id="categoryid" tabindex="-1"><a class="header-anchor" href="#categoryid"><span>categoryId</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details:
The ID of the discussion category. Generate through <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">Giscus Page</a></li>
</ul>
<h3 id="mapping" tabindex="-1"><a class="header-anchor" href="#mapping"><span>mapping</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&quot;pathname&quot;</code></li>
<li>Details:
Page - Discussion mapping. For details see <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">Giscus Page</a></li>
</ul>
<h3 id="strict" tabindex="-1"><a class="header-anchor" href="#strict"><span>strict</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>true</code></li>
<li>Details:
Whether enable strict mapping or not</li>
</ul>
<h3 id="lazyloading" tabindex="-1"><a class="header-anchor" href="#lazyloading"><span>lazyLoading</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>true</code></li>
<li>Details:
Whether enable lazy loading or not</li>
</ul>
<h3 id="reactionsenabled" tabindex="-1"><a class="header-anchor" href="#reactionsenabled"><span>reactionsEnabled</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>true</code></li>
<li>Details:
Whether enable reactions or not</li>
</ul>
<h3 id="inputposition" tabindex="-1"><a class="header-anchor" href="#inputposition"><span>inputPosition</span></a></h3>
<ul>
<li>Type: <code v-pre>&quot;top&quot; | &quot;bottom&quot;</code></li>
<li>Default: <code v-pre>&quot;top&quot;</code></li>
<li>Details:
Input position</li>
</ul>
<h3 id="lighttheme" tabindex="-1"><a class="header-anchor" href="#lighttheme"><span>lightTheme</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>GiscusTheme</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">GiscusTheme</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light_high_contrast'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light_protanopia'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_high_contrast'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_protanopia'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_dimmed'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'transparent_dark'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'preferred_color_scheme'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Default: <code v-pre>&quot;light&quot;</code></p>
</li>
<li>
<p>Details:</p>
<p>Giscus theme used in lightmode</p>
<p>Should be a built-in theme keyword or a css link starting with <code v-pre>https://</code>.</p>
</li>
</ul>
<h3 id="darktheme" tabindex="-1"><a class="header-anchor" href="#darktheme"><span>darkTheme</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>GiscusTheme</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">GiscusTheme</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light_high_contrast'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'light_protanopia'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_high_contrast'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_protanopia'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'dark_dimmed'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'transparent_dark'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token string">'preferred_color_scheme'</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Default: <code v-pre>&quot;dark&quot;</code></p>
</li>
<li>
<p>Details:</p>
<p>Giscus theme used in darkmode</p>
<p>Should be a built-in theme keyword or a css link starting with <code v-pre>https://</code>.</p>
</li>
</ul>
<h2 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config"><span>Plugin Config</span></a></h2>
<p>You can directly configure serializable options in the plugin options:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/config.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> commentPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">commentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      provider<span class="token operator">:</span> <span class="token string">'Giscus'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// other options</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="client-config" tabindex="-1"><a class="header-anchor" href="#client-config"><span>Client Config</span></a></h2>
<p>You can use the <code v-pre>defineGiscusConfig</code> function to customize Giscus:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/client.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineGiscusConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineGiscusConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Giscus config</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></div></template>


