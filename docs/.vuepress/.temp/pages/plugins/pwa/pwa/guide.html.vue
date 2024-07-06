<template><div><h1 id="guide" tabindex="-1"><a class="header-anchor" href="#guide"><span>Guide</span></a></h1>
<h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro"><span>Intro</span></a></h2>
<p>Make your VuePress site a Progressive Web Application (PWA)<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>.</p>
<p>This plugin uses <a href="https://developers.google.com/web/tools/workbox/modules/workbox-build" target="_blank" rel="noopener noreferrer">workbox-build</a> to generate service worker file, and uses <a href="https://github.com/yyx990803/register-service-worker" target="_blank" rel="noopener noreferrer">register-service-worker</a> to register service worker.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>If you enabled this plugin once and you want to disable it, you might need <RouteLink to="/plugins/pwa/remove-pwa.html">`@vuepress/plugin-remove-pwa</RouteLink> to remove the existing service worker.</p>
</div>
<p>A PWA uses a Service Worker <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2" /></sup> (SW for short) to cache and proxy site content.</p>
<h2 id="web-app-manifests" tabindex="-1"><a class="header-anchor" href="#web-app-manifests"><span>Web App Manifests</span></a></h2>
<p>To make your website fully compliant with PWA, a Web app manifests <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3" /></sup> file is needed, and your pwa should satisfy the installability <sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4" /></sup> specification.</p>
<p>You can set <code v-pre>manifest</code> option to customize the manifest file, or provide a <code v-pre>manifest.webmanifest</code> or <code v-pre>manifest.json</code> in public folder. The former has higher priority.</p>
<p>The plugin will automatically generate <code v-pre>manifest.webmanifest</code> for you and add manifest link declaration in each page, while <strong>you should still at least set a valid icon through <code v-pre>manifest.icons</code> or other icon related options in the PWA plugin.</strong></p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>The installability <sup class="footnote-ref"><a href="#footnote4">[4:1]</a><a class="footnote-anchor" id="footnote-ref4:1" /></sup> specification requires at least one valid icon to be declared in the manifest.</p>
<p>So if you do not configure <code v-pre>manifest.icons</code>, visitors can only enjoy the offline accessibility brought by the Service Worker cache, while cannot install your site as a PWA.</p>
</div>
<p>Besides the plugin does not process anything in the manifest by default, but outputs them as-is. This means that if you plan to deploy to a subdirectory, you should append the URL prefix to manifest Urls yourself. If everything you need is all under <code v-pre>base</code> directory, you can set <code v-pre>appendBase: true</code> in plugin options to let the plugin append <code v-pre>base</code> to any links in manifest.</p>
<h2 id="cache-control" tabindex="-1"><a class="header-anchor" href="#cache-control"><span>Cache Control</span></a></h2>
<p>To better control what the Service Worker can pre-cache, the plugin provides related options for cache control.</p>
<h3 id="default-cache" tabindex="-1"><a class="header-anchor" href="#default-cache"><span>Default cache</span></a></h3>
<p>By default, the plugin will pre-cache all <code v-pre>js</code> <code v-pre>css</code> files, and only homepage and 404 html are cached. The plugin will also cache font files (woff, woff2, eot, ttf, otf) and SVG icons.</p>
<h3 id="image-cache" tabindex="-1"><a class="header-anchor" href="#image-cache"><span>Image Cache</span></a></h3>
<p>If your site has only a few important images, and want them displayed in offline mode, you can cache site images by setting <code v-pre>cacheImage: true</code> .</p>
<p>We recognize images by file extension. Any files ending with <code v-pre>.png</code>, <code v-pre>.jpg</code>, <code v-pre>.jpeg</code>, <code v-pre>.gif</code>, <code v-pre>.bmp</code>, <code v-pre>.webp</code> will be regarded as images.</p>
<h3 id="html-cache" tabindex="-1"><a class="header-anchor" href="#html-cache"><span>HTML Cache</span></a></h3>
<p>If you have small sites, and would like to make document fully offline available, you can set <code v-pre>cacheHTML</code> to <code v-pre>true</code> to cache all HTML files.</p>
<div class="custom-container tip"><p class="custom-container-title">Why only home and 404 page been cached by default?</p>
<p>Though VuePress generates HTML files through SSG<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5" /></sup> for all pages, these files are mainly used for SEO<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6" /></sup> and allow you to directly configure the backend without SPA<sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7" /></sup> Visit any link.</p>
<p>VuePress is essentially an SPA. This means that you only need to cache the home page and enter from the home page to access all pages normally. Therefore, not caching other HTML by default can effectively reduce the cache size (40% smaller in size) and speed up the SW update speed.</p>
<p>But this also has the disadvantage. If the user enters the site directly from a non-home page, the HTML file for the first page still needs to be loaded from the internet. Also, in offline environment, users can only enter through the homepage and then navigate to the corresponding page by themselves. If they directly access a link, an inaccessible prompt will appear.</p>
</div>
<h3 id="size-control" tabindex="-1"><a class="header-anchor" href="#size-control"><span>Size Control</span></a></h3>
<p>To prevent large files from being included in the pre-cache list, any files &gt; 2 MB or images &gt; 1 MB will be omitted. You can customize these limits with <code v-pre>maxSize</code> and <code v-pre>maxImageSize</code> options (in KB unit).</p>
<h2 id="update-control" tabindex="-1"><a class="header-anchor" href="#update-control"><span>Update Control</span></a></h2>
<p>We provide the <code v-pre>update</code> option to control how users receive updates.</p>
<p>The default value of the <code v-pre>update</code> option is <code v-pre>&quot;available&quot;</code>, which means that when new content available, the new SW will be installed and its resources will be fetched silently in the background. A pop-up window appears once the new SW is ready, and users can choose whether to refresh immediately to view new content. This means users are reading old content before a new SW is ready.</p>
<p>If your project is still in building stage, and you want to alert the user that he may be reading outdated content, you can set this to <code v-pre>&quot;hint&quot;</code>. This allows users to be notified that new content has been published within seconds after visiting docs. But the negative effect of this is that if the user chooses to update before the new SW is ready, he will need to get all the resources of the page from the internet before the new SW installs and controls the page.</p>
<p>If your docs are stable, or you're hosting a blog and don't care much about users receiving the latest version right away, you can set this to <code v-pre>&quot;disabled&quot;</code>, which means that the new SW will be installed completely silently in the background and start waiting, when all pages controlled by old SW are all closed, the new SW will start to take control and provide users with new content during next visit. This setting can prevent users from being disturbed during the visit.</p>
<p>To speed up user access under weak or no network conditions through SW, but also want users to always access new content, you can set this option to <code v-pre>&quot;force&quot;</code>. This means any old SW will be removed as soon as a new SW is detected, and all pages are refreshed to ensure the user is browsing the latest content. The biggest disadvantage is that all users will experience unexpected sudden refresh within seconds after reentering an updated site.</p>
<h3 id="popups" tabindex="-1"><a class="header-anchor" href="#popups"><span>Popups</span></a></h3>
<p>When new content is detected (new SW detected), a update found popup appears; and when the new content is ready, an update ready popup appears.</p>
<p>If you are not satisfied with the default popup content, you can use your own component. Import <code v-pre>PwaFoundPopup</code> or <code v-pre>PwaReadyPopup</code> from <code v-pre>@vuepress/plugin-pwa/client</code> and use its slot to customize the popup content, then pass the component path to <code v-pre>foundComponent</code> or <code v-pre>readyComponent</code> option:</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PwaFoundPopup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/client'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PwaFoundPopup</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ found, refresh }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>found<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      New content is found.</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refresh<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Refresh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PwaFoundPopup</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PwaReadyPopup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/client'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PwaReadyPopup</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ isReady, reload }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isReady<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      New content is ready.</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Apply<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PwaReadyPopup</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="other-options" tabindex="-1"><a class="header-anchor" href="#other-options"><span>Other Options</span></a></h2>
<p>The plugin also provides other PWA-related options, such as Microsoft tile icon and color settings, Apple icon and so on. If you are an advanced user, you can also set <code v-pre>generateSwConfig</code> to configure <code v-pre>workbox-build</code>. Check <RouteLink to="/plugins/pwa/pwa/config.html#options">Plugin options</RouteLink> for more details.</p>
<h2 id="further-reading" tabindex="-1"><a class="header-anchor" href="#further-reading"><span>Further Reading</span></a></h2>
<p>For more details, please see:</p>
<ul>
<li><a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noopener noreferrer">Google PWA</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">MDN PWA</a></li>
<li><a href="https://w3c.github.io/manifest/" target="_blank" rel="noopener noreferrer">W3C Manifest Specification</a></li>
</ul>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><strong>PWA introduction</strong></p>
<p>PWA, full name Progressive Web app. PWA standard is stipulated by W3C.</p>
<p>It allows sites to install the site as an App on supported platform through a browser that supports this feature.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps</a> for details. <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote2" class="footnote-item"><p><strong>Service Worker Introduction</strong></p>
<ol>
<li>
<p>The Service Worker will get and cache all the files registered in it during the registration process.</p>
</li>
<li>
<p>After the registration complete, the Service Worker is activated, and starts to proxy and control all your requests.</p>
</li>
<li>
<p>Whenever you want to initiate an access request through the browser, the Service Worker will check whether it exists in its own cache list, if it exists, it will directly return the cached result, otherwise it will call its own fetch method to get it. You can use a custom fetch method to fully control the result of the request for resources in the web page, such as providing a fallback web page when offline.</p>
</li>
<li>
<p>Every time the user reopens the site, the Service Worker will request to the link when it was registered. If a new version of Service Worker is detected, it will update itself and start caching the list of resources registered in the new Service Worker . After the content update is successfully obtained, the Service Worker will trigger the <code v-pre>update</code> event. The user can be notified through this event, for example, a pop-up window will be displayed in the lower right corner, prompting the user that new content is available and allowing the user to trigger an update.</p>
</li>
</ol>
 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></li>
<li id="footnote3" class="footnote-item"><p><strong>Manifest File</strong></p>
<p>The manifest file uses the JSON format and is responsible for declaring various information of the PWA, such as name, description, icon, and shortcut actions.</p>
<p>In order for your site to be registered as a PWA, you need to meet the basic specifications of the manifest to make the browser consider the site as an installable PWA and allow users to install it.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>For Manifest standards and specifications, please see <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank" rel="noopener noreferrer">MDN Web app manifests</a> and <a href="https://w3c.github.io/manifest/" target="_blank" rel="noopener noreferrer">W3C Manifest</a>.</p>
</div>
 <a href="#footnote-ref3" class="footnote-backref">↩︎</a></li>
<li id="footnote4" class="footnote-item"><p><strong>Installable</strong></p>
<p>To let the site be registered as a PWA, the site needs to successfully register a valid service worker by itself, and declare a valid manifest file with its link in meta tag.</p>
<p>The manifest file should contain at least <code v-pre>name</code> (or <code v-pre>short_name</code>) <code v-pre>icons</code> <code v-pre>start_url</code>.</p>
<p>On safari, the maximum cache size of the service worker is 50 MB. <a href="#footnote-ref4" class="footnote-backref">↩︎</a> <a href="#footnote-ref4:1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote5" class="footnote-item"><p><strong>SSG</strong>: <strong>S</strong>tatic <strong>S</strong>ite <strong>G</strong>eneration, <a href="#footnote-ref5" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote6" class="footnote-item"><p><strong>SEO</strong>: <strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization. <a href="#footnote-ref6" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote7" class="footnote-item"><p><strong>SPA</strong>: <strong>S</strong>ingle <strong>P</strong>age <strong>A</strong>pplication, most of them only have the homepage, and use history mode to handle routing instead of actually navigating between pages. <a href="#footnote-ref7" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


