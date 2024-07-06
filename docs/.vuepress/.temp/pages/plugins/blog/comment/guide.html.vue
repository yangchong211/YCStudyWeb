<template><div><h1 id="guide" tabindex="-1"><a class="header-anchor" href="#guide"><span>Guide</span></a></h1>
<h2 id="setting-options" tabindex="-1"><a class="header-anchor" href="#setting-options"><span>Setting Options</span></a></h2>
<p>You can both set options with plugin options on Node side and set options in <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">client config file</a> on Browser side.</p>
<h3 id="with-plugin-options" tabindex="-1"><a class="header-anchor" href="#with-plugin-options"><span>With Plugin Options</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> commentPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">commentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      provider<span class="token operator">:</span> <span class="token string">'Artalk'</span><span class="token punctuation">,</span> <span class="token comment">// Artalk | Giscus | Waline | Twikoo</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// other options here</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="with-client-config-file" tabindex="-1"><a class="header-anchor" href="#with-client-config-file"><span>With Client Config File</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/client.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  defineArtalkConfig<span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// defineGiscusConfig,</span></span>
<span class="line">  <span class="token comment">// defineTwikooConfig,</span></span>
<span class="line">  <span class="token comment">// defineWalineConfig,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineArtalkConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 选项</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>But here are some limitations you should remember:</p>
<ul>
<li>
<p><code v-pre>provider</code>, locales and other resource related option must be set in plugin options.</p>
<p>To ensure tree-shaking works, we must optimize entries at node so that bundler can understand which resource should be included in the final bundle.</p>
<p>These options will be marked with <Badge text="Plugin Option Only" type="warning" vertical="baseline" /> in config reference.</p>
</li>
<li>
<p>Options which can not be serialized to JSON must be set in client config.</p>
<p>Options that receives function values can not be set in plugin options, as plugins are running under Node.js environment, so we can not pass these values and their contexts to browser.</p>
<p>These options will be marked with <Badge text="Client Config Only" type="warning" vertical="baseline" /> in config reference.</p>
</li>
</ul>
<h2 id="adding-comment" tabindex="-1"><a class="header-anchor" href="#adding-comment"><span>Adding Comment</span></a></h2>
<p>This plugin globally registers a component <code v-pre>&lt;CommentService /&gt;</code>.</p>
<ul>
<li>If you are a user, you should use <code v-pre>alias</code> and layout slots to insert the component. We recommended you to insert the comment component (<code v-pre>&lt;CommentService /&gt;</code>) after the <code v-pre>&lt;PageNav /&gt;</code> component, and the current page is a demo with default theme.</li>
<li>If you are a theme developer, you should insert this component in the layout of your theme.</li>
</ul>
<p>By default, <code v-pre>&lt;CommentService /&gt;</code> component is enabled globally, and you can use <code v-pre>comment</code> option in both plugin options and page frontmatter to control it.</p>
<ul>
<li>You can disable it locally by setting <code v-pre>comment: false</code> in page frontmatter.</li>
<li>To keep it globally disabled, please set <code v-pre>comment</code> to <code v-pre>false</code> in the plugin options. Then you can set <code v-pre>comment: true</code> in page frontmatter to enable it locally.</li>
</ul>
<p>You can set <code v-pre>commentID</code> option in page frontmatter to customize comment ID, which is used to identify comment storage item to use for a page. By default it will be the <code v-pre>path</code> of the page, which means if you are deploying the site to multiple places, page with same content across sites will share the same comment data.</p>
<h2 id="available-comment-services" tabindex="-1"><a class="header-anchor" href="#available-comment-services"><span>Available Comment Services</span></a></h2>
<p>Currently, you can choose from <RouteLink to="/plugins/blog/comment/giscus/">Giscus</RouteLink>, <RouteLink to="/plugins/blog/comment/waline/">Waline</RouteLink>, <RouteLink to="/plugins/blog/comment/artalk/">Artalk</RouteLink> and <RouteLink to="/plugins/blog/comment/twikoo/">Twikoo</RouteLink>.</p>
<div class="custom-container tip"><p class="custom-container-title">Recommended comment services</p>
<ul>
<li>Facing programmers and developers: Giscus</li>
<li>Facing general public: Waline</li>
</ul>
</div>
<h2 id="common-options" tabindex="-1"><a class="header-anchor" href="#common-options"><span>Common Options</span></a></h2>
<h3 id="provider" tabindex="-1"><a class="header-anchor" href="#provider"><span>provider <Badge text="Plugin Option Only" type="warning"/></span></a></h3>
<ul>
<li>Type: <code v-pre>&quot;Artalk&quot; | &quot;Giscus&quot; | &quot;Twikoo&quot; | &quot;Waline&quot; | &quot;None&quot;</code></li>
<li>Default: <code v-pre>&quot;None&quot;</code></li>
<li>Details: Comment service provider.</li>
</ul>
<h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>comment</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>true</code></li>
<li>Details: Whether to enable comment feature by default.</li>
</ul>
</div></template>


