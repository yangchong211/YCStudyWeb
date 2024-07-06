<template><div><!-- `# nprogress` will be rendered as `<h1 id="nprogress">`, and the id will conflict with the nprogress bar (stupid) -->
<!-- so we add a 'plugin' suffix in the h1 title, and use title frontmatter to set the page title -->
<!-- TODO: Remove this hack once we have attr feature -->
<h1 id="nprogress-plugin" tabindex="-1"><a class="header-anchor" href="#nprogress-plugin"><span>nprogress Plugin</span></a></h1>
<NpmBadge package="@vuepress/plugin-nprogress" /><p>Integrate <a href="https://github.com/rstacruz/nprogress" target="_blank" rel="noopener noreferrer">nprogress</a> into VuePress, which can provide a progress bar when navigating to another page.</p>
<p>This plugin has been integrated into the default theme.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-nprogress@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nprogressPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-nprogress'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">nprogressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2>
<p>You can customize the style of the progress bar via CSS variables:</p>
<div class="language-css" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--nprogress-color</span><span class="token punctuation">:</span> #29d<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--nprogress-z-index</span><span class="token punctuation">:</span> 1031<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></div></template>


