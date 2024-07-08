<template><div><h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>将你的 VuePress 站点变成渐进式网络应用程序 (PWA)<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>。</p>
<p>此插件使用 <a href="https://developers.google.com/web/tools/workbox/modules/workbox-build" target="_blank" rel="noopener noreferrer">workbox-build</a> 生成 Service Worker 文件，并使用 <a href="https://github.com/yyx990803/register-service-worker" target="_blank" rel="noopener noreferrer">register-service-worker</a> 注册 Service Worker。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>如果你启用过该插件，并想要禁用它，你可能需要 <RouteLink to="/zh/plugins/pwa/remove-pwa.html">`@vuepress/plugin-remove-pwa</RouteLink> 来移除现有的 Service Worker 。</p>
</div>
<p>A PWA uses a Service Worker <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2" /></sup> (SW for short) to cache and proxy site content.</p>
<p>一个 PWA 使用 Service Worker <sup class="footnote-ref"><a href="#footnote2">[2:1]</a><a class="footnote-anchor" id="footnote-ref2:1" /></sup> (简称 SW) 来获取并托管网站内容。</p>
<h2 id="网络-app-清单" tabindex="-1"><a class="header-anchor" href="#网络-app-清单"><span>网络 App 清单</span></a></h2>
<p>为了使你的网站符合 PWA 的要求，一个网络 App 清单<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3" /></sup>文件是必要的，并且你的 PWA 应满足可安装性<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4" /></sup>要求。</p>
<p>你可以通过设置 <code v-pre>manifest</code> 选项来自定义 manifest 文件，或者在 public 文件夹中提供 <code v-pre>manifest.webmanifest</code> 或 <code v-pre>manifest.json</code>。前者优先级更高。</p>
<p>插件会自动为你生成 <code v-pre>manifest.webmanifest</code>，并在每个页面的 <code v-pre>&lt;head&gt;</code> 中添加清单链接声明，但是 <strong>你至少应该通过 <code v-pre>manifest.icons</code> 或 PWA 插件中的其他选项设置一个有效的图标。</strong></p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>可安装性<sup class="footnote-ref"><a href="#footnote4">[4:1]</a><a class="footnote-anchor" id="footnote-ref4:1" /></sup>规范要求 manifest 中至少声明一个有效的图标。</p>
<p>所以如果你不配置 <code v-pre>manifest.icons</code>，访问者只能享受到 Service Worker 缓存带来的离线可访问性，而并不能作为 PWA 进行安装。</p>
</div>
<p>此外，该插件默认不处理清单中的任何内容，而是按原样输出。 这意味着，如果你计划部署到子目录，则应自行将 URL 前缀附加到自己的清单 Urls 中。如果你需要的所有东西都在 base 文件夹下，你可以在插件选项中设置 <code v-pre>appendBase: true</code> 让插件将 <code v-pre>base</code> 自动附加到任何地址。</p>
<h2 id="缓存控制" tabindex="-1"><a class="header-anchor" href="#缓存控制"><span>缓存控制</span></a></h2>
<p>为了更好的控制 Service Worker 可以预缓存的内容，插件提供了相关的缓存控制选项。</p>
<h3 id="默认缓存" tabindex="-1"><a class="header-anchor" href="#默认缓存"><span>默认缓存</span></a></h3>
<p>默认情况下插件会预缓存所有的 JS 和 CSS 文件，但仅缓存主页和 404 页面的 HTML。插件同时还会缓存字体文件 (woff, woff2, eot, ttf, otf) 和 SVG 图标。</p>
<h3 id="图片缓存" tabindex="-1"><a class="header-anchor" href="#图片缓存"><span>图片缓存</span></a></h3>
<p>如果你的站点只有少量重要图片，并希望它们在离线模式下显示，你可以通过设置 <code v-pre>cacheImage</code> 选项为 <code v-pre>true</code> 来缓存站点图片。</p>
<p>我们通过文件后缀名识别图片，任何以 <code v-pre>.png</code>, <code v-pre>.jpg</code>, <code v-pre>.jpeg</code>, <code v-pre>.gif</code>, <code v-pre>.bmp</code>, <code v-pre>.webp</code> 结尾的文件都会视为图片。</p>
<h3 id="html-缓存" tabindex="-1"><a class="header-anchor" href="#html-缓存"><span>HTML 缓存</span></a></h3>
<p>当你网站体积不大，并且希望文档完全离线可用时，你可以通过设置 <code v-pre>cacheHTML</code> 为 <code v-pre>true</code> 来缓存所有 HTML 页面。</p>
<div class="custom-container tip"><p class="custom-container-title">为什么默认不缓存非主页和 404 页面</p>
<p>虽然说 VuePress 为所有的页面通过 SSG<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5" /></sup> 生成了 HTML 文件，但是这些文件主要用于 SEO<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6" /></sup>，并能够让你在后端不做 SPA<sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7" /></sup> 配置的情况下能够直接访问任何链接。</p>
<p>VuePress 本质上是一个 SPA。这意味着你只需要缓存主页并从主页进入即可正常访问所有页面。所以默认不缓存其他 HTML 能够有效减小缓存大小 (可以缩减大约 40% 的体积)，加快 SW 更新速度。</p>
<p>但是这样做也有缺点，如果用户直接从非主页进入网站，首个页面的 HTML 文件仍需要从互联网加载。同时离线环境下，用户只能通过主页进入再自行导航到对应页面，直接访问某个链接会出现无法访问的提示。</p>
</div>
<h3 id="大小控制" tabindex="-1"><a class="header-anchor" href="#大小控制"><span>大小控制</span></a></h3>
<p>为了防止在预缓存列表中包含大文件，任何 &gt; 2 MB 的文件或 &gt; 1 MB 的图片都将被忽略。 你可以通过 <code v-pre>maxSize</code> 和 <code v-pre>maxImageSize</code> 来自定义大小限制 (单位为 KB)。</p>
<h2 id="更新控制" tabindex="-1"><a class="header-anchor" href="#更新控制"><span>更新控制</span></a></h2>
<p>我们提供 <code v-pre>update</code> 选项控制用户如何接收更新。</p>
<p><code v-pre>update</code> 选项的默认值是 <code v-pre>&quot;available&quot;</code>，这意味着当网站内容更新后，新的 SW 会在后台静默安装，并在安装结束后弹窗提示用户新内容就绪。用户可以自主选择是否立即刷新查看新内容。这意味在新 SW 就绪前用户会访问旧版本网站。</p>
<p>如果你的文档仍在建设期，希望尽早提示用户他可能在阅读已过时的内容，你可以将其设置为 <code v-pre>&quot;hint&quot;</code>。这样用户在进入文档后数秒内就可以收到新内容已发布的通知。但这样做的负面效果是如果用户在新 SW 就绪前选择更新，那么他将在新 SW 安装并接管页面前，需要从互联网获取页面的全部资源。</p>
<p>如果你的文档很稳定，或者你在托管博客，不太关心用户立即接收到最新版本，你可以将其设置为 <code v-pre>&quot;disabled&quot;</code>，这意味着新的 SW 将在后台完全静默安装并在安装后等待，当旧版本 SW 控制的页面全部关闭后，新 SW 将再下次访问接管并提供用户新内容。此设置可以避免用户在访中被弹窗打扰。</p>
<p>如果你希望通过 SW 来加速用户在弱网或无网条件下的访问，但同时希望用户时刻访问新内容，你可以将此选项设置为 <code v-pre>&quot;force&quot;</code>。这意味着检测到新 SW 后旧 SW 将会被立刻销毁并且页面会被刷新以确保用户浏览最新内容。最大的缺点就是致新 SW 发布后，用户在重新进入网站后的几秒内会遇到预期之外的突然刷新，并且他们将必须通过互联网访问文档并完全重新安装最新的 SW。</p>
<h3 id="更新提示弹窗" tabindex="-1"><a class="header-anchor" href="#更新提示弹窗"><span>更新提示弹窗</span></a></h3>
<p>当检测到新内容 (检测到新的 SW) 时，更新提示弹窗将会出现；当新内容就绪时，更新就绪弹窗将会出现。</p>
<p>如果你对默认的弹窗不满意，你可以自行编写组件更换。从 <code v-pre>@vuepress/plugin-pwa/client</code> 中导入 <code v-pre>PwaFoundPopup</code> 或 <code v-pre>PwaReadyPopup</code> 并使用其 slot 来自定义弹窗内容，然后将组件路径传递给 <code v-pre>foundComponent</code> 或 <code v-pre>readyComponent</code> 选项。</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PwaFoundPopup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/client'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PwaFoundPopup</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ found, refresh }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>found<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      已找到新内容</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refresh<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>刷新<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
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
<span class="line">      新内容已就绪</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>应用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PwaReadyPopup</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他选项" tabindex="-1"><a class="header-anchor" href="#其他选项"><span>其他选项</span></a></h2>
<p>插件还提供了其他 PWA 相关选项，比如微软磁贴图标与颜色设置，苹果图标等。 如果你是一个高级用户，你也可以设置 <code v-pre>generateSwConfig</code> 来配置 <code v-pre>workbox-build</code>。查看 <RouteLink to="/zh/plugins/pwa/pwa/config.html#%E9%80%89%E9%A1%B9">插件选项</RouteLink> 了解更多细节。</p>
<h2 id="相关阅读" tabindex="-1"><a class="header-anchor" href="#相关阅读"><span>相关阅读</span></a></h2>
<p>更多内容，请详见:</p>
<ul>
<li><a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noopener noreferrer">Google PWA</a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">MDN PWA</a></li>
<li><a href="https://w3c.github.io/manifest/" target="_blank" rel="noopener noreferrer">W3C Manifest 规范</a></li>
</ul>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><strong>PWA 介绍</strong></p>
<p>PWA 全称 Progressive Web app，即渐进式网络应用程序，标准由 W3C 规定。</p>
<p>它允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。</p>
<p>访问 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps</a> 查看详情。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote2" class="footnote-item"><p><strong>Service Worker 简要介绍</strong></p>
<ol>
<li>
<p>Service Worker 会在注册过程中获取注册在其中的所有文件并缓存它们。</p>
</li>
<li>
<p>注册成功后，Service Worker 激活，并开始代理并控制你的全部请求。</p>
</li>
<li>
<p>每当你想要通过浏览器发起访问请求后，Service Worker 将会查看其是否存在与自身缓存列表中，若存在则直接返回缓存好的结果，否则调用自身的 fetch 方法进行获取。你可以通过自定义 fetch 方法，来完全控制网页内资源获取请求的结果，比如在离线时提供一个 fallback 的网页。</p>
</li>
<li>
<p>每次用户重新打开网站时，Service Worker 会向自身注册时的地址发出校验命令，如果检测到新版本的 Service Worker，则会更新自身，并开始缓存注册在新 Service Worker 中的资源列表。成功获取内容更新后，Service Worker 将会触发 <code v-pre>update</code> 事件。可以通过此事件提示用户，比如将在右下角显示一个弹出窗口，提示用户新内容可用并允许用户触发更新。</p>
</li>
</ol>
 <a href="#footnote-ref2" class="footnote-backref">↩︎</a> <a href="#footnote-ref2:1" class="footnote-backref">↩︎</a></li>
<li id="footnote3" class="footnote-item"><p><strong>清单文件</strong></p>
<p>清单文件使用 JSON 格式，负责声明 PWA 各项信息，如名称、描述、图标、快捷动作等。</p>
<p>为了使你的站点能够被注册为 PWA，你需要满足 manifest 基本的规范，才能使浏览器认为该网站为一个可安装的 PWA 并允许用户安装它。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>Manifest 的标准与规范，请详见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Manifest" target="_blank" rel="noopener noreferrer">MDN 网络 App 清单</a> 和 <a href="https://w3c.github.io/manifest/" target="_blank" rel="noopener noreferrer">W3C Manifest</a></p>
</div>
 <a href="#footnote-ref3" class="footnote-backref">↩︎</a></li>
<li id="footnote4" class="footnote-item"><p><strong>可安装性</strong></p>
<p>想要让网站可以注册为 PWA，网站需要自行成功注册有效的 Service Worker，同时拥有合法的 manifest 清单文件并在网站中声明它。</p>
<p>清单文件应至少包含 <code v-pre>name</code>(或 <code v-pre>short_name</code>) <code v-pre>icons</code> <code v-pre>start_url</code>。</p>
<p>在 Safari 中，SW 的最大缓存空间为 50 MB。 <a href="#footnote-ref4" class="footnote-backref">↩︎</a> <a href="#footnote-ref4:1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote5" class="footnote-item"><p><strong>SSG</strong>: <strong>S</strong>tatic <strong>S</strong>ite <strong>G</strong>enerating，静态站点生成。 <a href="#footnote-ref5" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote6" class="footnote-item"><p><strong>SEO</strong>: <strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization，搜索引擎增强，</p>
<p>详见 <a href="https://mister-hope.com/code/website/html/definition/seo.html" target="_blank" rel="noopener noreferrer">SEO 介绍</a> <a href="#footnote-ref6" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote7" class="footnote-item"><p><strong>SPA</strong>: <strong>S</strong>ingle <strong>P</strong>age <strong>A</strong>pplication, 单页应用</p>
<p>大多只有主页，并使用 history mode 处理路由，而不是真的在页面之间导航。 <a href="#footnote-ref7" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


