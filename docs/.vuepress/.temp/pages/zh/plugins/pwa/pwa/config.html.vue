<template><div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1>
<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="showinstall" tabindex="-1"><a class="header-anchor" href="#showinstall"><span>showInstall</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>boolean</code></p>
</li>
<li>
<p>默认值：<code v-pre>false</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在 Service Worker 首次成功注册时显示 PWA 安装按钮</p>
</li>
</ul>
<h3 id="manifest" tabindex="-1"><a class="header-anchor" href="#manifest"><span>manifest</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>ManifestOption</code></p>
</li>
<li>
<p>详情：</p>
<p>填充一个将被解析为 manifest.webmanifest 的对象。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果未设置某些选项，它们会回退到插件预设值。</p>
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
<p>参考：</p>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Manifest" target="_blank" rel="noopener noreferrer">MDN Web Docs: Web App Manifest</a></li>
<li><a href="https://w3c.github.io/manifest/" target="_blank" rel="noopener noreferrer">W3C Manifest</a></li>
</ul>
</li>
</ul>
<h3 id="favicon" tabindex="-1"><a class="header-anchor" href="#favicon"><span>favicon</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p><code v-pre>favicon.ico</code> 地址，填入绝对路径。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>我们建议你为你的站点生成 favicon。</p>
</div>
</li>
</ul>
<h3 id="themecolor" tabindex="-1"><a class="header-anchor" href="#themecolor"><span>themeColor</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>&quot;#46bd87&quot;</code></li>
<li>详情：PWA 的主题色。</li>
</ul>
<h3 id="cachehtml" tabindex="-1"><a class="header-anchor" href="#cachehtml"><span>cacheHTML</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
<li>详情：是否缓存主页和 404 错误页之外的 HTML 文件</li>
</ul>
<h3 id="cacheimage" tabindex="-1"><a class="header-anchor" href="#cacheimage"><span>cacheImage</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
<li>详情：是否缓存图片。</li>
</ul>
<h3 id="maxsize" tabindex="-1"><a class="header-anchor" href="#maxsize"><span>maxSize</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>number</code></p>
</li>
<li>
<p>默认值：<code v-pre>2048</code></p>
</li>
<li>
<p>详情：</p>
<p>允许缓存的最大大小 (以 KB 为单位)</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>此选项具有最高优先级，任何超过此值的文件都会被排除。</p>
<p>所以你如果生成了很大的 HTML 或 JS 文件，请考虑调高此值，否则你的 PWA 可能无法在离线模式下正常运行。</p>
</div>
</li>
</ul>
<h3 id="maximagesize" tabindex="-1"><a class="header-anchor" href="#maximagesize"><span>maxImageSize</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>number</code></p>
</li>
<li>
<p>默认值：<code v-pre>1024</code></p>
</li>
<li>
<p>详情：</p>
<p>图片允许缓存的最大大小 (以 KB 为单位)</p>
<div class="custom-container tip"><p class="custom-container-title">该选项不能大于 maxSize 选项</p>
</div>
</li>
</ul>
<h3 id="update" tabindex="-1"><a class="header-anchor" href="#update"><span>update</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>&quot;disabled&quot; | &quot;available&quot; | &quot;hint&quot; | &quot;force&quot;</code></p>
</li>
<li>
<p>默认值：<code v-pre>&quot;available&quot;</code></p>
</li>
<li>
<p>详情：</p>
<p>发现新内容时的控制逻辑。</p>
<ul>
<li>
<p><code v-pre>&quot;disabled&quot;</code>: 即使有新的 service worker 也不做任何事情，新的 service work 开始等待后，会在用户下次访问时接管页面，让用户获得新内容。</p>
</li>
<li>
<p><code v-pre>&quot;available&quot;</code>: 仅当新的 service worker 可用时才显示更新弹出窗口</p>
</li>
<li>
<p><code v-pre>&quot;hint&quot;</code>: 显示更新内容可用提示，并允许用户立即刷新。当新的 SW 成功注册后，将转为更新内容就绪弹窗。</p>
<p>当你希望用户立即查看新文档时，这很有帮助。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果用户在新 SW 就绪前选择刷新，当前的 Service Worker 将被注销，并且请求将开始向 Web 发出。新的 service worker 将开始安装并在安装后接管页面。</p>
</div>
</li>
<li>
<p><code v-pre>&quot;force&quot;</code>: 立即注销当前 Service Worker 然后刷新以获取新内容</p>
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>虽然这可以确保用户访问的是最新内容，但这可能会影响访问体验。</p>
</div>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>文档的更新方式由以前的版本控制，因此当前选项仅影响此版本的下一次更新。</p>
</div>
</li>
</ul>
<h3 id="apple" tabindex="-1"><a class="header-anchor" href="#apple"><span>apple</span></a></h3>
<p>更高支持苹果的特殊设置，忽略它们是安全的。</p>
<h4 id="apple-icon" tabindex="-1"><a class="header-anchor" href="#apple-icon"><span>apple.icon</span></a></h4>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>详情：填入苹果使用的图标地址，推荐 152×152 大小</li>
</ul>
<h4 id="apple-statusbarcolor" tabindex="-1"><a class="header-anchor" href="#apple-statusbarcolor"><span>apple.statusBarColor</span></a></h4>
<ul>
<li>类型：<code v-pre>&quot;black&quot; | &quot;white&quot;</code></li>
<li>默认值：<code v-pre>&quot;black&quot;</code></li>
<li>详情：Safari 状态栏颜色</li>
</ul>
<h4 id="apple-maskicon" tabindex="-1"><a class="header-anchor" href="#apple-maskicon"><span>apple.maskIcon</span></a></h4>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>详情：Safari 图标</li>
</ul>
<h3 id="mstile" tabindex="-1"><a class="header-anchor" href="#mstile"><span>msTile</span></a></h3>
<p>针对微软磁贴的特殊设置，忽略它们是安全的。</p>
<h4 id="mstile-image" tabindex="-1"><a class="header-anchor" href="#mstile-image"><span>msTile.image</span></a></h4>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>详情：磁贴图标</li>
</ul>
<h4 id="mstile-color" tabindex="-1"><a class="header-anchor" href="#mstile-color"><span>msTile.color</span></a></h4>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>themeColor</code></li>
<li>详情：磁贴颜色。</li>
</ul>
<h3 id="foundcomponent" tabindex="-1"><a class="header-anchor" href="#foundcomponent"><span>foundComponent</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>&quot;PwaFoundPopup&quot;</code></li>
<li>详情：自定义的提示弹窗组件路径。</li>
</ul>
<h3 id="readycomponent" tabindex="-1"><a class="header-anchor" href="#readycomponent"><span>readyComponent</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值：<code v-pre>&quot;PwaReadyPopup&quot;</code></li>
<li>详情：自定义的更新弹窗组件路径。</li>
</ul>
<h3 id="appendbase" tabindex="-1"><a class="header-anchor" href="#appendbase"><span>appendBase</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值：<code v-pre>false</code></li>
<li>详情：是否为选项中所有绝对链接添加 base。</li>
</ul>
<h3 id="generateswconfig" tabindex="-1"><a class="header-anchor" href="#generateswconfig"><span>generateSwConfig</span></a></h3>
<ul>
<li>
<p>详情：</p>
<p>传递给 <code v-pre>workbox-build</code> 的选项，具体详情，请见 <a href="https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW" target="_blank" rel="noopener noreferrer">Workbox 文档</a></p>
</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>PwaPluginLocaleConfig</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">PwaPluginLocaleData</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 安装按钮文字</span>
<span class="line">   */</span></span>
<span class="line">  install<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * iOS 安装文字</span>
<span class="line">   */</span></span>
<span class="line">  iOSInstall<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 取消按钮文字</span>
<span class="line">   */</span></span>
<span class="line">  cancel<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 关闭按钮文字</span>
<span class="line">   */</span></span>
<span class="line">  close<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 上一张图片文字</span>
<span class="line">   */</span></span>
<span class="line">  prevImage<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 下一张图片文字</span>
<span class="line">   */</span></span>
<span class="line">  nextImage<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 安装解释</span>
<span class="line">   */</span></span>
<span class="line">  explain<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 描述标签文字</span>
<span class="line">   */</span></span>
<span class="line">  desc<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 特性标签文字</span>
<span class="line">   */</span></span>
<span class="line">  feature<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 更新内容提示文字</span>
<span class="line">   */</span></span>
<span class="line">  hint<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 更新内容可用文字</span>
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
<p>详情：</p>
<p>PWA 插件的国际化配置。</p>
</li>
</ul>
<details class="custom-container details"><summary>内置支持语言</summary>
<ul>
<li><strong>简体中文</strong> (zh-CN)</li>
<li><strong>繁体中文</strong> (zh-TW)</li>
<li><strong>英文(美国)</strong> (en-US)</li>
<li><strong>德语</strong> (de-DE)</li>
<li><strong>德语(澳大利亚)</strong> (de-AT)</li>
<li><strong>俄语</strong> (ru-RU)</li>
<li><strong>乌克兰语</strong> (uk-UA)</li>
<li><strong>越南语</strong> (vi-VN)</li>
<li><strong>葡萄牙语(巴西)</strong> (pt-BR)</li>
<li><strong>波兰语</strong> (pl-PL)</li>
<li><strong>法语</strong> (fr-FR)</li>
<li><strong>西班牙语</strong> (es-ES)</li>
<li><strong>斯洛伐克</strong> (sk-SK)</li>
<li><strong>日语</strong> (ja-JP)</li>
<li><strong>土耳其语</strong> (tr-TR)</li>
<li><strong>韩语</strong> (ko-KR)</li>
<li><strong>芬兰语</strong> (fi-FI)</li>
<li><strong>印尼语</strong> (id-ID)</li>
<li><strong>荷兰语</strong> (nl-NL)</li>
</ul>
</details>
<h2 id="组合式-api" tabindex="-1"><a class="header-anchor" href="#组合式-api"><span>组合式 API</span></a></h2>
<h3 id="usepwaevent" tabindex="-1"><a class="header-anchor" href="#usepwaevent"><span>usePwaEvent</span></a></h3>
<ul>
<li>
<p>详情：</p>
<p>返回此插件的事件派发器。</p>
<p>你可以添加监听器函数到 <a href="https://github.com/yyx990803/register-service-worker" target="_blank" rel="noopener noreferrer">register-service-worker</a> 提供的事件。</p>
</li>
<li>
<p>示例：</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具函数" tabindex="-1"><a class="header-anchor" href="#工具函数"><span>工具函数</span></a></h2>
<h3 id="forceupdate" tabindex="-1"><a class="header-anchor" href="#forceupdate"><span>forceUpdate</span></a></h3>
<ul>
<li>
<p>详情：</p>
<p>当发现新内容时强制刷新页面。</p>
</li>
<li>
<p>示例：</p>
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
<p>详情：</p>
<p>手动注册 Service Worker。</p>
</li>
<li>
<p>参数：</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>serviceWorkerPath</td>
<td><code v-pre>string</code></td>
<td>Service worker 的路径</td>
</tr>
<tr>
<td>hooks</td>
<td><code v-pre>object</code></td>
<td>Service worker 的钩子</td>
</tr>
<tr>
<td>showStatus</td>
<td><code v-pre>boolean</code></td>
<td>在控制台输出状态日志</td>
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
<li>示例：</li>
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
<p>详情：</p>
<p>激活等待中的 Service Worker。</p>
</li>
<li>
<p>参数：</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>registration</td>
<td><code v-pre>ServiceWorkerRegistration</code></td>
<td>想要激活的 Service Worker 的注册</td>
</tr>
</tbody>
</table>
<ul>
<li>示例：</li>
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
<p>详情：</p>
<p>手动注销 Service Worker。</p>
</li>
<li>
<p>示例：</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2>
<p>你可以通过 CSS 变量来自定义样式：</p>
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


