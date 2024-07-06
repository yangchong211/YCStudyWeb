<template><div><h1 id="markdown-container" tabindex="-1"><a class="header-anchor" href="#markdown-container"><span>markdown-container</span></a></h1>
<NpmBadge package="@vuepress/plugin-markdown-container" /><p>Register markdown custom containers in your VuePress site.</p>
<p>This plugin simplifies the use of <a href="https://github.com/markdown-it/markdown-it-container" target="_blank" rel="noopener noreferrer">markdown-it-container</a>, but also retains its original capabilities.</p>
<p>The <RouteLink to="/themes/default/markdown.html#custom-containers">Custom Containers</RouteLink> of default theme is powered by this plugin.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-markdown-container@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> markdownContainerPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-markdown-container'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">markdownContainerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="container-syntax" tabindex="-1"><a class="header-anchor" href="#container-syntax"><span>Container Syntax</span></a></h2>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line">::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span> [info]</span>
<span class="line">[content]</span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
</div><ul>
<li>The <code v-pre>type</code> is required and should be specified via <a href="#type">type</a> option.</li>
<li>The <code v-pre>info</code> is optional, and the default value can be specified via <code v-pre>defaultInfo</code> in <a href="#locales">locales</a> option.</li>
<li>The <code v-pre>content</code> can be any valid markdown content.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This plugin can be used multiple times to support different types of containers.</p>
</div>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>The type of the container.</p>
<p>It will be used as the <code v-pre>name</code> param of <a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container</a>.</p>
</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>Record&lt;string, { defaultInfo: string }&gt;</code></p>
</li>
<li>
<p>Details:</p>
<p>The default <code v-pre>info</code> of the container in different locales.</p>
<p>If this option is not specified, the default <code v-pre>info</code> will fallback to the uppercase of the <a href="#type">type</a> option.</p>
</li>
<li>
<p>Example:</p>
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
<li>Also see:
<ul>
<li><a href="https://vuejs.press/guide/i18n.html" target="_blank" rel="noopener noreferrer">Guide &gt; I18n</a></li>
</ul>
</li>
</ul>
<h3 id="before" tabindex="-1"><a class="header-anchor" href="#before"><span>before</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(info: string) =&gt; string</code></p>
</li>
<li>
<p>Default:</p>
</li>
</ul>
<!-- prettier-ignore-start -->
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token punctuation">(</span>info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span></span>
<span class="line">  <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div class="custom-container </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;p class="custom-container-title"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p></span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
</div><!-- prettier-ignore-end -->
<ul>
<li>
<p>Details:</p>
<p>A function to render the starting tag of the container.</p>
<p>The first param is the <code v-pre>info</code> part of <a href="#container-syntax">container syntax</a>.</p>
<p>This option will not take effect if you don't specify the <a href="#after">after</a> option.</p>
</li>
</ul>
<h3 id="after" tabindex="-1"><a class="header-anchor" href="#after"><span>after</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(info: string) =&gt; string</code></p>
</li>
<li>
<p>Default:</p>
</li>
</ul>
<!-- prettier-ignore-start -->
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span> <span class="token string">'&lt;/div>\n'</span></span>
<span class="line"></span></code></pre>
</div><!-- prettier-ignore-end -->
<ul>
<li>
<p>Details:</p>
<p>A function to render the ending tag of the container.</p>
<p>The first param is the <code v-pre>info</code> part of <a href="#container-syntax">container syntax</a>.</p>
<p>This option will not take effect if you don't specify the <a href="#before">before</a> option.</p>
</li>
</ul>
<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render"><span>render</span></a></h3>
<ul>
<li>Type:</li>
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
<p>Details:</p>
<p>The <code v-pre>render</code> option of <a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container</a>.</p>
<p>This plugin uses a default <code v-pre>render</code> function. If you specify this option, the default <code v-pre>render</code> function will be replaced, and the <a href="#locales">locales</a>, <a href="#before">before</a> and <a href="#after">after</a> options will be ignored.</p>
</li>
</ul>
<h3 id="validate" tabindex="-1"><a class="header-anchor" href="#validate"><span>validate</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(params: string) =&gt; boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>The <code v-pre>validate</code> option of <a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container</a>.</p>
</li>
</ul>
<h3 id="marker" tabindex="-1"><a class="header-anchor" href="#marker"><span>marker</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>The <code v-pre>marker</code> option of <a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container</a>.</p>
</li>
</ul>
</div></template>


