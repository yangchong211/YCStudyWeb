<template><div><h1 id="extending" tabindex="-1"><a class="header-anchor" href="#extending"><span>Extending</span></a></h1>
<p>VuePress default theme is widely used by users, so it is designed to be extendable, allowing users to make their own customization with ease.</p>
<h2 id="layout-slots" tabindex="-1"><a class="header-anchor" href="#layout-slots"><span>Layout Slots</span></a></h2>
<p>Default theme's <code v-pre>Layout</code> provides some slots:</p>
<ul>
<li><code v-pre>navbar</code></li>
<li><code v-pre>navbar-before</code></li>
<li><code v-pre>navbar-after</code></li>
<li><code v-pre>sidebar</code></li>
<li><code v-pre>sidebar-top</code></li>
<li><code v-pre>sidebar-bottom</code></li>
<li><code v-pre>page</code></li>
<li><code v-pre>page-top</code></li>
<li><code v-pre>page-bottom</code></li>
<li><code v-pre>page-content-top</code></li>
<li><code v-pre>page-content-bottom</code></li>
</ul>
<p>With the help of them, you can add or replace content easily. Here comes an example to introduce how to extend default theme with layout slots.</p>
<p>Firstly, create a client config file <code v-pre>.vuepress/client.ts</code>:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/client'</span></span>
<span class="line"><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">'./layouts/Layout.vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  layouts<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    Layout<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><p>Next, create the <code v-pre>.vuepress/layouts/Layout.vue</code>, and make use of the slots that provided by the <code v-pre>Layout</code> of default theme:</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> ParentLayout <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default/layouts/Layout.vue'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ParentLayout</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#page-bottom</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>This is my custom page footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ParentLayout</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.my-footer</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the default <code v-pre>Layout</code> layout has been overridden by your own local layout, which will add a custom footer to every normal pages in default theme (excluding homepage):</p>
<figure><img src="/images/cookbook/extending-a-theme-01.png" alt="extending-a-theme" tabindex="0"><figcaption>extending-a-theme</figcaption></figure>
<h2 id="components-replacement" tabindex="-1"><a class="header-anchor" href="#components-replacement"><span>Components Replacement</span></a></h2>
<p>The layout slots are useful, but sometimes you might find it's not flexible enough. Default theme also provides the ability to replace a single component.</p>
<p>Default theme has registered <a href="https://v2.vuepress.vuejs.org/plugin-api.html#alias" target="_blank" rel="noopener noreferrer">alias</a> for every <a href="https://github.com/vuepress/ecosystem/tree/main/themes/theme-default/src/client/components" target="_blank" rel="noopener noreferrer">non-global components</a> with a <code v-pre>@theme</code> prefix. For example, the alias of <code v-pre>HomeFooter.vue</code> is <code v-pre>@theme/HomeFooter.vue</code>.</p>
<p>Then, if you want to replace the <code v-pre>HomeFooter.vue</code> component, just override the alias in your config file <code v-pre>.vuepress/config.ts</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/utils'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  alias<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'@theme/HomeFooter.vue'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span></span>
<span class="line">      __dirname<span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">'./components/MyHomeFooter.vue'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modifying-behavior" tabindex="-1"><a class="header-anchor" href="#modifying-behavior"><span>Modifying Behavior</span></a></h2>
<p>Most of the core behaviors of the default theme have been extracted into a composable API, and also provide <a href="https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#alias" target="_blank" rel="noopener noreferrer">aliases</a> with the <code v-pre>@theme</code> prefix.</p>
<p>For example, if you want to add some default values ​​to the theme data of the default theme, you can override the <code v-pre>useThemeData</code> function of <code v-pre>@theme/useThemeData</code>.</p>
<h2 id="developing-a-child-theme" tabindex="-1"><a class="header-anchor" href="#developing-a-child-theme"><span>Developing a Child Theme</span></a></h2>
<p>Instead of extending the default theme directly in <code v-pre>.vuepress/config.ts</code> and <code v-pre>.vuepress/client.ts</code>, you can also develop your own theme extending the default theme:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">DefaultThemeOptions</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Theme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/utils'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> childTheme <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> DefaultThemeOptions<span class="token punctuation">)</span><span class="token operator">:</span> Theme <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'vuepress-theme-child'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// override layouts in child theme's client config file</span></span>
<span class="line">    <span class="token comment">// notice that you would build ts to js before publishing to npm,</span></span>
<span class="line">    <span class="token comment">// so this should be the path to the js file</span></span>
<span class="line">    clientConfigFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./client.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// override component alias</span></span>
<span class="line">    alias<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'@theme/HomeFooter.vue'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span></span>
<span class="line">        __dirname<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'./components/MyHomeFooter.vue'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


