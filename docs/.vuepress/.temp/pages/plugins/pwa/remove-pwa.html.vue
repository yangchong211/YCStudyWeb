<template><div><h1 id="remove-pwa" tabindex="-1"><a class="header-anchor" href="#remove-pwa"><span>remove-pwa</span></a></h1>
<NpmBadge package="@vuepress/plugin-remove-pwa" /><p>This plugin removes any related service worker from your VuePress site, so that users can still get updates if you removed any PWA plugin after enabling it.</p>
<div class="custom-container tip"><p class="custom-container-title">Why this plugin is needed if you used PWA plugin once?</p>
<p>PWA plugins like <RouteLink to="/plugins/pwa/pwa/"><code v-pre>@vuepress/plugin-pwa</code></RouteLink> register service worker to your site, which will cache your site and make it available offline.</p>
<p>However, if you remove pwa plugin, the old service worker will still be there, but they can never get an update because they can never found a new service worker to update to. So users will stay with the old version of your site.</p>
<p>To solve this problem:</p>
<ol>
<li>A new service worker with empty contents shall be generated in the original place.</li>
<li>The new service worker shall attempt to remove contents that old service worker cached, then it should unregister itself.</li>
</ol>
</div>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-remove-pwa@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> removePwaPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-remove-pwa'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">removePwaPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="cacheprefix" tabindex="-1"><a class="header-anchor" href="#cacheprefix"><span>cachePrefix</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>'workbox'</code></li>
<li>Details: The cache prefix for the service worker.</li>
</ul>
<h3 id="swlocation" tabindex="-1"><a class="header-anchor" href="#swlocation"><span>swLocation</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>'service-worker.js'</code></li>
<li>Details: The location of the old service worker.</li>
</ul>
</div></template>


