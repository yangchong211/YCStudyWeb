<template><div><h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="showinstall" tabindex="-1"><a class="header-anchor" href="#showinstall"><span>showInstall</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
<li>Details:
Whether display install button when Service Worker is first registered successfully.</li>
</ul>
<h3 id="manifest" tabindex="-1"><a class="header-anchor" href="#manifest"><span>manifest</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>AppManifest</code></p>
</li>
<li>
<p>Details:</p>
<p>You can fill with an object which will be parsed to manifest.webmanifest.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Some options have their fallback if you don't set them.</p>
<ul>
<li>name: <code v-pre>siteConfig.title</code> || <code v-pre>siteConfig.locales['/'].title</code> || <code v-pre>&quot;Site&quot;</code></li>
<li>short_name: <code v-pre>siteConfig.title</code> || <code v-pre>siteConfig.locales['/'].title</code> || <code v-pre>&quot;Site&quot;</code></li>
<li>description: <code v-pre>siteConfig.description</code> || <code v-pre>siteConfig.locales['/'].description</code> || <code v-pre>&quot;A site built with vuepress&quot;</code></li>
<li>lang: <code v-pre>siteConfig.locales['/'].lang</code> || <code v-pre>&quot;en-US&quot;</code></li>
<li>start_url: <code v-pre>context.base</code></li>
<li>scope: <code v-pre>context.base</code></li>
<li>display: <code v-pre>&quot;standalone&quot;</code></li>
<li>theme_color: <code v-pre>&quot;#46bd87&quot;</code></li>
<li>background_color: <code v-pre>&quot;#ffffff&quot;</code></li>
<li>orientation: <code v-pre>&quot;portrait-primary&quot;</code></li>
<li>prefer_related_applications: <code v-pre>false</code></li>
</ul>
</div>
</li>
<li>
<p>Reference:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank" rel="noopener noreferrer">MDN Web Docs: Web App Manifest</a></li>
<li><a href="https://www.w3.org/TR/appmanifest/" target="_blank" rel="noopener noreferrer">W3C: Web App Manifest</a></li>
</ul>
</li>
</ul>
<h3 id="favicon" tabindex="-1"><a class="header-anchor" href="#favicon"><span>favicon</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Link of favicon.ico.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>We recommend you to set favicon for your site.</p>
</div>
</li>
</ul>
<h3 id="themecolor" tabindex="-1"><a class="header-anchor" href="#themecolor"><span>themeColor</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default: <code v-pre>&quot;#46bd87&quot;</code></p>
</li>
<li>
<p>Details:</p>
<p>Theme Color of the pwa.</p>
</li>
</ul>
<h3 id="cachehtml" tabindex="-1"><a class="header-anchor" href="#cachehtml"><span>cacheHTML</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether cache HTML files besides home page and 404 page.</p>
</li>
</ul>
<h3 id="cacheimage" tabindex="-1"><a class="header-anchor" href="#cacheimage"><span>cacheImage</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether cache pictures</p>
</li>
</ul>
<h3 id="maxsize" tabindex="-1"><a class="header-anchor" href="#maxsize"><span>maxSize</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>2048</code></p>
</li>
<li>
<p>Details:</p>
<p>Max size allowed to be cached, with KB unit</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This option has the highest priority, and any files exceeding this value will be excluded.</p>
<p>So if you generate very large HTML or JS files, please consider increasing this value, otherwise your PWA may not work normally in offline mode.</p>
</div>
</li>
</ul>
<h3 id="maximagesize" tabindex="-1"><a class="header-anchor" href="#maximagesize"><span>maxImageSize</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Default: <code v-pre>1024</code></p>
</li>
<li>
<p>Details:
Max picture size allowed to be cached, with KB unit</p>
<div class="custom-container tip"><p class="custom-container-title">The value must not be greater than maxSize option</p>
</div>
</li>
</ul>
<h3 id="update" tabindex="-1"><a class="header-anchor" href="#update"><span>update</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>&quot;disabled&quot; | &quot;available&quot; | &quot;hint&quot; | &quot;force&quot;</code></p>
</li>
<li>
<p>Default: <code v-pre>&quot;available&quot;</code></p>
</li>
<li>
<p>Details:
Control logic when new content is found.</p>
<ul>
<li>
<p><code v-pre>&quot;disabled&quot;</code>: Do nothing even when new service worker is available. After new service work succeeds installing and starts waiting, it will control page and provide new content in next visit.</p>
</li>
<li>
<p><code v-pre>&quot;available&quot;</code>: Only display update popup when the new service worker is available</p>
</li>
<li>
<p><code v-pre>&quot;hint&quot;</code>: Display a hint to let user choose to refresh immediately</p>
<p>This is helpful when you want users to see new docs immediately.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If users choose to refresh, the current service worker will be unregister, and request will start coming to web. Later the new service worker will start installing and control current page after installed.</p>
</div>
</li>
<li>
<p><code v-pre>&quot;force&quot;</code>: unregister current service worker immediately then refresh to get new content</p>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>Although this ensures users are viewing the latest content, it may affect viewing experiences.</p>
</div>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>How docs are updated is controlled by a previous version, so the current option only effect next update from this version.</p>
</div>
</li>
</ul>
<h3 id="apple" tabindex="-1"><a class="header-anchor" href="#apple"><span>apple</span></a></h3>
<p>Special settings for better supporting Safari, ignoring these options are safe.</p>
<h4 id="apple-icon" tabindex="-1"><a class="header-anchor" href="#apple-icon"><span>apple.icon</span></a></h4>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details: Icon link used by Safari.</li>
</ul>
<h4 id="apple-statusbarcolor" tabindex="-1"><a class="header-anchor" href="#apple-statusbarcolor"><span>apple.statusBarColor</span></a></h4>
<ul>
<li>Type: <code v-pre>&quot;black&quot; | &quot;white&quot;</code></li>
<li>Default: <code v-pre>&quot;black&quot;</code></li>
<li>Details: Status bar color for Safari</li>
</ul>
<h4 id="apple-maskicon" tabindex="-1"><a class="header-anchor" href="#apple-maskicon"><span>apple.maskIcon</span></a></h4>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details: Safari mask icon</li>
</ul>
<h3 id="mstile" tabindex="-1"><a class="header-anchor" href="#mstile"><span>msTile</span></a></h3>
<p>Special settings for Microsoft tiles, ignoring these options are safe.</p>
<h4 id="mstile-image" tabindex="-1"><a class="header-anchor" href="#mstile-image"><span>msTile.image</span></a></h4>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details: Tile image</li>
</ul>
<h4 id="mstile-color" tabindex="-1"><a class="header-anchor" href="#mstile-color"><span>msTile.color</span></a></h4>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default value: <code v-pre>themeColor</code></li>
<li>Details: Tile color</li>
</ul>
<h3 id="foundcomponent" tabindex="-1"><a class="header-anchor" href="#foundcomponent"><span>foundComponent</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&quot;PwaFoundPopup&quot;</code></li>
<li>Details: Path of custom hint popup component.</li>
</ul>
<h3 id="readycomponent" tabindex="-1"><a class="header-anchor" href="#readycomponent"><span>readyComponent</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&quot;PwaReadyPopup&quot;</code></li>
<li>Details: Path of custom update popup component.</li>
</ul>
<h3 id="appendbase" tabindex="-1"><a class="header-anchor" href="#appendbase"><span>appendBase</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
<li>Details: Whether append base to all absolute links in options.</li>
</ul>
<h3 id="generateswconfig" tabindex="-1"><a class="header-anchor" href="#generateswconfig"><span>generateSwConfig</span></a></h3>
<ul>
<li>
<p>Details:</p>
<p>Options passed to <code v-pre>workbox-build</code>, for details, see <a href="https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW" target="_blank" rel="noopener noreferrer">Workbox documentation</a></p>
</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>PwaPluginLocaleConfig</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">PwaPluginLocaleData</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Install button text</span>
<span class="line">   */</span></span>
<span class="line">  install<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * iOS install hint text</span>
<span class="line">   */</span></span>
<span class="line">  iOSInstall<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Cancel button text</span>
<span class="line">   */</span></span>
<span class="line">  cancel<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Close button text</span>
<span class="line">   */</span></span>
<span class="line">  close<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Previous image text</span>
<span class="line">   */</span></span>
<span class="line">  prevImage<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Next image text</span>
<span class="line">   */</span></span>
<span class="line">  nextImage<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Install explain text</span>
<span class="line">   */</span></span>
<span class="line">  explain<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Description label text</span>
<span class="line">   */</span></span>
<span class="line">  desc<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Feature label text</span>
<span class="line">   */</span></span>
<span class="line">  feature<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Update hint text</span>
<span class="line">   */</span></span>
<span class="line">  hint<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Update available text</span>
<span class="line">   */</span></span>
<span class="line">  update<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">PwaPluginLocaleConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> PwaPluginLocaleData</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Details:
Locales config for pwa plugin.</p>
</li>
</ul>
<details class="custom-container details"><summary>Built-in Supported Languages</summary>
<ul>
<li><strong>Simplified Chinese</strong> (zh-CN)</li>
<li><strong>Traditional Chinese</strong> (zh-TW)</li>
<li><strong>English (United States)</strong> (en-US)</li>
<li><strong>German</strong> (de-DE)</li>
<li><strong>German (Australia)</strong> (de-AT)</li>
<li><strong>Russian</strong> (ru-RU)</li>
<li><strong>Ukrainian</strong> (uk-UA)</li>
<li><strong>Vietnamese</strong> (vi-VN)</li>
<li><strong>Portuguese (Brazil)</strong> (pt-BR)</li>
<li><strong>Polish</strong> (pl-PL)</li>
<li><strong>French</strong> (fr-FR)</li>
<li><strong>Spanish</strong> (es-ES)</li>
<li><strong>Slovak</strong> (sk-SK)</li>
<li><strong>Japanese</strong> (ja-JP)</li>
<li><strong>Turkish</strong> (tr-TR)</li>
<li><strong>Korean</strong> (ko-KR)</li>
<li><strong>Finnish</strong> (fi-FI)</li>
<li><strong>Indonesian</strong> (id-ID)</li>
<li><strong>Dutch</strong> (nl-NL)</li>
</ul>
</details>
<h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api"><span>Composition API</span></a></h2>
<h3 id="usepwaevent" tabindex="-1"><a class="header-anchor" href="#usepwaevent"><span>usePwaEvent</span></a></h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the event emitter of this plugin.</p>
<p>You can add listener function to events that provided by <a href="https://github.com/yyx990803/register-service-worker" target="_blank" rel="noopener noreferrer">register-service-worker</a>.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> usePwaEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">usePwaEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'ready'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Service worker is active.'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="utilities" tabindex="-1"><a class="header-anchor" href="#utilities"><span>Utilities</span></a></h2>
<h3 id="forceupdate" tabindex="-1"><a class="header-anchor" href="#forceupdate"><span>forceUpdate</span></a></h3>
<ul>
<li>
<p>Details:</p>
<p>Force update the page when an update is found.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> forceUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="registersw" tabindex="-1"><a class="header-anchor" href="#registersw"><span>registerSW</span></a></h3>
<ul>
<li>
<p>Details:</p>
<p>Register service worker manually.</p>
</li>
<li>
<p>Parameters:</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>serviceWorkerPath</td>
<td><code v-pre>string</code></td>
<td>Path of the service worker</td>
</tr>
<tr>
<td>hooks</td>
<td><code v-pre>object</code></td>
<td>Hooks of service worker</td>
</tr>
<tr>
<td>showStatus</td>
<td><code v-pre>boolean</code></td>
<td>Log service worker status in console</td>
</tr>
</tbody>
</table>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Hooks</span> <span class="token punctuation">{</span></span>
<span class="line">  registrationOptions<span class="token operator">?</span><span class="token operator">:</span> RegistrationOptions</span>
<span class="line">  ready<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>registration<span class="token operator">:</span> ServiceWorkerRegistration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line">  registered<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>registration<span class="token operator">:</span> ServiceWorkerRegistration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line">  cached<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>registration<span class="token operator">:</span> ServiceWorkerRegistration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line">  updated<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>registration<span class="token operator">:</span> ServiceWorkerRegistration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line">  updatefound<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>registration<span class="token operator">:</span> ServiceWorkerRegistration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line">  offline<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line">  error<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Example:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> registerSW <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">registerSW</span><span class="token punctuation">(</span><span class="token string">'/service-worker.js'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">ready</span><span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Service worker is active.'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="skipwaiting" tabindex="-1"><a class="header-anchor" href="#skipwaiting"><span>skipWaiting</span></a></h3>
<ul>
<li>
<p>Details:</p>
<p>Activate the waiting service worker.</p>
</li>
<li>
<p>Parameters:</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>registration</td>
<td><code v-pre>ServiceWorkerRegistration</code></td>
<td>The registration of the service worker you want activate</td>
</tr>
</tbody>
</table>
<ul>
<li>Example:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> usePwaEvent<span class="token punctuation">,</span> skipWaiting <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">usePwaEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'updated'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The waiting service worker is available.'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// activate the waiting service worker</span></span>
<span class="line">      <span class="token function">skipWaiting</span><span class="token punctuation">(</span>registration<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unregistersw" tabindex="-1"><a class="header-anchor" href="#unregistersw"><span>unregisterSW</span></a></h3>
<ul>
<li>
<p>Details:</p>
<p>Unregister service worker manually.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> unregisterSW <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">unregisterSW</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2>
<p>You can customize the style via CSS variables:</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--pwa-z-index</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--pwa-color</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--pwa-bg-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--pwa-border-color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--pwa-shadow-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 / 15%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--pwa-btn-text-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--pwa-btn-bg-color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--pwa-btn-hover-bg-color</span><span class="token punctuation">:</span> #4abf8a<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--pwa-content-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--pwa-content-light-color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


