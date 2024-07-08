<template><div><h1 id="google-analytics" tabindex="-1"><a class="header-anchor" href="#google-analytics"><span>google-analytics</span></a></h1>
<NpmBadge package="@vuepress/plugin-google-analytics" /><p>Integrate <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Google Analytics</a> into VuePress.</p>
<p>This plugin will import <a href="https://developers.google.com/analytics/devguides/collection/gtagjs" target="_blank" rel="noopener noreferrer">gtag.js</a> for <a href="https://support.google.com/analytics/answer/10089681" target="_blank" rel="noopener noreferrer">Google Analytics 4</a>.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-google-analytics@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> googleAnalyticsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-google-analytics'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="reporting-events" tabindex="-1"><a class="header-anchor" href="#reporting-events"><span>Reporting Events</span></a></h3>
<p>Google Analytics will <a href="https://support.google.com/analytics/answer/9234069" target="_blank" rel="noopener noreferrer">automatically collect some events</a>, such as <code v-pre>page_view</code>, <code v-pre>first_visit</code>, etc.</p>
<p>So if you only want to collect some basic data of your site, you don't need to do anything else except setting the <a href="#id">Measurement ID</a> correctly.</p>
<p>After using this plugin, the global <code v-pre>gtag()</code> function is available on the <code v-pre>window</code> object, and you can use it for <a href="https://developers.google.com/analytics/devguides/collection/ga4/events" target="_blank" rel="noopener noreferrer">custom events reporting</a>.</p>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>The Measurement ID of Google Analytics 4, which should start with <code v-pre>'G-'</code>.</p>
<p>You can follow the instructions <a href="https://support.google.com/analytics/answer/9539598" target="_blank" rel="noopener noreferrer">here</a> to find your Measurement ID. Notice the difference between Google Analytics 4 Measurement ID (i.e. &quot;G-&quot; ID) and Universal Analytics Tracking ID (i.e. &quot;UA-&quot; ID).</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      id<span class="token operator">:</span> <span class="token string">'G-XXXXXXXXXX'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>debug</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Set to <code v-pre>true</code> to enable sending events to DebugView. <a href="https://support.google.com/analytics/answer/7201382" target="_blank" rel="noopener noreferrer">See more information on DebugView</a>.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      id<span class="token operator">:</span> <span class="token string">'G-XXXXXXXXXX'</span><span class="token punctuation">,</span></span>
<span class="line">      debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></div></template>


