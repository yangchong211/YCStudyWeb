<template><div><h1 id="umami-analytics" tabindex="-1"><a class="header-anchor" href="#umami-analytics"><span>umami-analytics</span></a></h1>
<NpmBadge package="@vuepress/plugin-umami-analytics" /><p>Integrate <a href="https://umami.is/" target="_blank" rel="noopener noreferrer">Umami Analytics</a> into VuePress.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-umami-analytics@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> umamiAnalyticsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-umami-analytics'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">umamiAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>You can use <a href="https://cloud.umami.is/login" target="_blank" rel="noopener noreferrer">Umami Cloud</a> or <a href="https://umami.is/docs/install" target="_blank" rel="noopener noreferrer">Self-host Umami</a>.</p>
<h3 id="reporting-events" tabindex="-1"><a class="header-anchor" href="#reporting-events"><span>Reporting Events</span></a></h3>
<p>The plugin will automatically report page view events when visiting and switching pages.</p>
<p>Besides, a global <code v-pre>umami</code> object is available on the <code v-pre>window</code> object, and you can call <code v-pre>umami.track</code> for <a href="https://umami.is/docs/tracker-functions" target="_blank" rel="noopener noreferrer">custom tracker function</a>.</p>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details: The website ID in Umami Analytics</li>
</ul>
<h3 id="link" tabindex="-1"><a class="header-anchor" href="#link"><span>link</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details: Link of umami analytics script</li>
</ul>
<h3 id="autotrack" tabindex="-1"><a class="header-anchor" href="#autotrack"><span>autoTrack</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>By default, Umami tracks all pageviews and events for you automatically. You can disable this behavior and track events yourself using the tracker functions.</p>
</li>
</ul>
<h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache"><span>cache</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>Cache data to improve the performance of the tracking script.</p>
<p>Note: This will use session storage so you may need to inform your users.</p>
</li>
</ul>
<h3 id="domains" tabindex="-1"><a class="header-anchor" href="#domains"><span>domains</span></a></h3>
<ul>
<li>Type: <code v-pre>string[]</code></li>
<li>Details: Let the tracker only run on specific domains.</li>
</ul>
<h3 id="hosturl" tabindex="-1"><a class="header-anchor" href="#hosturl"><span>hostUrl</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details: Location to send data</li>
</ul>
</div></template>


