<template><div><h1 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect"><span>redirect</span></a></h1>
<NpmBadge package="@vuepress/plugin-rtl" /><p>此插件提供页面与整站重定向功能。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-redirect@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> redirectPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-redirect'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">redirectPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="设置重定向" tabindex="-1"><a class="header-anchor" href="#设置重定向"><span>设置重定向</span></a></h3>
<p>如果你改动了已有页面的地址，你可以在 Frontmatter 中使用 <code v-pre>redirectFrom</code> 选项设置重定向到此页面的地址，这样可以保证用户在访问旧链接时重定向到新的地址。</p>
<p>如果你需要将已有的页面重定向到新的页面，可以在 Frontmatter 中使用 <code v-pre>redirectTo</code> 选项设置需要重定向到的地址。这样该页面会在访问时重定向到新的地址。</p>
<p>你还可以通过插件选项中的 <code v-pre>config</code> 设置一个重定向映射，详见 <a href="#config">config</a>。</p>
<h3 id="自动多语言" tabindex="-1"><a class="header-anchor" href="#自动多语言"><span>自动多语言</span></a></h3>
<p>插件可以根据用户的语言首选项，自动将无多语言链接重定向到用户需要的多语言页面。为了实现这一点，你需要留空默认的语言目录 (<code v-pre>/</code>)，并在插件选项中设置 <code v-pre>autoLocale: true</code>。插件会自动根据用户语言跳转到对应的语言页面。</p>
<p>也就是你需要设置以下目录结构:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">.</span>
<span class="line">├── en</span>
<span class="line">│   ├── ...</span>
<span class="line">│   ├── page.md</span>
<span class="line">│   └── README.md</span>
<span class="line">├── zh</span>
<span class="line">│   ├── ...</span>
<span class="line">│   ├── page.md</span>
<span class="line">│   └── README.md</span>
<span class="line">└── other_languages</span>
<span class="line">    ├── ...</span>
<span class="line">    ├── page.md</span>
<span class="line">    └── README.md</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并将主题选项的 locales 设置为:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'/en/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// other languages</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样当用户访问 <code v-pre>/</code> 或 <code v-pre>/page.html</code> 时，他们会自动根据当前浏览器语言重定向到 <code v-pre>/en/</code> <code v-pre>/en/page.html</code> 与 <code v-pre>/zh/</code> <code v-pre>/zh/page.html</code>。</p>
<div class="custom-container tip"><p class="custom-container-title">自定义回退行为</p>
<p>有些时候，用户可能会在系统设置中添加多个语言。默认情况下，在站点支持首选语言，但首选语言不存在相应页面时，插件会尝试匹配用户设置的备用语言。</p>
<p>如果不需要回退到用户备用语言，而直接匹配用户首选语言，请在插件选项中设置 <code v-pre>localeFallback: false</code>。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">自定义缺失行为</p>
<p>有些时候，当用户访问一个页面时，文档尚未包含用户需要的语言版本 (一个普遍的情况是当前页面尚未完成相关语言的本地化)，这样插件需要做出默认行为，你可以通过插件选项中的 <code v-pre>defaultBehavior</code> 定制它:</p>
<ul>
<li><code v-pre>&quot;defaultLocale&quot;</code>: 重定向到默认语言或首个可用语言页面 (默认行为)</li>
<li><code v-pre>&quot;homepage&quot;</code>: 重定向到当前语言的主页 (仅在文档包含用户语言时可用)</li>
<li><code v-pre>&quot;404&quot;</code>: 重定向到当前语言的 404 页 (仅在文档包含用户语言时可用)</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">自定义默认路径</p>
<p>你可以通过设置插件选项中的 <code v-pre>defaultLocale</code> 来自定义默认路径。默认情况下，插件会使用 <code v-pre>locales</code> 中的第一个键名作为默认路径。</p>
</div>
<h3 id="自动切换语言" tabindex="-1"><a class="header-anchor" href="#自动切换语言"><span>自动切换语言</span></a></h3>
<p>插件支持在多语言文档中，自动根据用户语言首选项，将链接切换到用户需要的多语言页面。为了实现这一点，你需要在插件选项中设置 <code v-pre>switchLocale</code>，它可以是以下两个值:</p>
<ul>
<li><code v-pre>direct</code>: 直接切换到用户语言首选项页面，而不询问</li>
<li><code v-pre>modal</code>: 在用户语言首选项与当前页面语言不同时，弹出一个对话框询问用户是否切换语言</li>
</ul>
<h3 id="自定义多语言配置" tabindex="-1"><a class="header-anchor" href="#自定义多语言配置"><span>自定义多语言配置</span></a></h3>
<p>默认情况下，插件会从站点的多语言配置 <code v-pre>locales</code> 选项中，读取 <code v-pre>语言路径</code> 和 <code v-pre>lang</code> 生成多语言配置。有些时候，你可能希望多个语言命中同一个路径，这种情况下，你应该设置插件的 <code v-pre>localeConfig</code> 选项。</p>
<p>比如，你可能希望所有英文用户都匹配到 <code v-pre>/en/</code>，并将繁体中文用户匹配到 <code v-pre>/zh/</code> 中，那么你可以设置:</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">localeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'/en/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'en-US'</span><span class="token punctuation">,</span> <span class="token string">'en-UK'</span><span class="token punctuation">,</span> <span class="token string">'en'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'zh-CN'</span><span class="token punctuation">,</span> <span class="token string">'zh-TW'</span><span class="token punctuation">,</span> <span class="token string">'zh'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><h3 id="重定向站点" tabindex="-1"><a class="header-anchor" href="#重定向站点"><span>重定向站点</span></a></h3>
<p>有时你可能会更改 <code v-pre>base</code> 或为你的站点使用新域名，因此你可能希望原始站点自动重定向到新站点。</p>
<p>为了解决这个问题，插件提供了 <code v-pre>vp-redirect</code> 脚手架。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">使用:</span>
<span class="line">  $ vp-redirect generate <span class="token punctuation">[</span>源文件夹<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  <span class="token parameter variable">--hostname</span> <span class="token operator">&lt;</span>hostname<span class="token operator">></span>  重定向到的域名 <span class="token punctuation">(</span>例如: https://new.example.com/<span class="token punctuation">)</span> <span class="token punctuation">(</span>默认: /<span class="token punctuation">)</span></span>
<span class="line">  -c, <span class="token parameter variable">--config</span> <span class="token operator">&lt;</span>config<span class="token operator">></span>  设置配置文件路径</span>
<span class="line">  -o, <span class="token parameter variable">--output</span> <span class="token operator">&lt;</span>output<span class="token operator">></span>  设置输出目录 <span class="token punctuation">(</span>默认: .vuepress/redirect<span class="token punctuation">)</span></span>
<span class="line">  <span class="token parameter variable">--cache</span> <span class="token operator">&lt;</span>cache<span class="token operator">></span>        设置缓存文件的目录</span>
<span class="line">  -t, <span class="token parameter variable">--temp</span> <span class="token operator">&lt;</span>temp<span class="token operator">></span>      设置临时文件的目录</span>
<span class="line">  --clean-cache          生成前清理缓存文件</span>
<span class="line">  --clean-temp           生成前清理临时文件</span>
<span class="line">  -h, <span class="token parameter variable">--help</span>             显示此消息</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你需要传入 VuePress 项目源目录并设置 <code v-pre>hostname</code> 选项。重定向助手脚手架将初始化你的 VuePress 项目以获取页面，然后在输出目录生成重定向 html 文件。</p>
<p>默认情况下，插件将输出到源文件夹下的 <code v-pre>.vuepress/redirect</code> 目录。你应该将其上传到你的原始站点以提供重定向。</p>
<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>Record&lt;string, string&gt; | ((app: App) =&gt; Record&lt;string, string&gt;)</code></p>
</li>
<li>
<p>详情</p>
<p>页面重定向映射。</p>
<p>可直接传入对象或传入参数为 <code v-pre>App</code> 的函数返回值一个对象。</p>
<p>每个键名必须是一个绝对路径，代表重定向的源页面地址。</p>
<p>每个键值是重定向的目标地址，可以是绝对路径或完整路径。</p>
</li>
<li>
<p>示例：</p>
<p>当 base 为 <code v-pre>/base/</code>时：</p>
<ul>
<li>将 <code v-pre>/base/foo.html</code> 重定向到 <code v-pre>/base/bar.html</code></li>
<li>将 <code v-pre>/base/baz.html</code> 重定向到 <code v-pre>https://example.com/qux.html</code>。</li>
</ul>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'/foo.html'</span><span class="token operator">:</span> <span class="token string">'/bar.html'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'/baz.html'</span><span class="token operator">:</span> <span class="token string">'https://example.com/qux.html'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><p>将 post 文件夹的路径重定向到 posts 文件夹</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">'https://example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span></span>
<span class="line">      app<span class="token punctuation">.</span>pages</span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> path <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'/posts/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> path <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\/posts\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">'/post/'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> path<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></li>
</ul>
<h3 id="autolocale" tabindex="-1"><a class="header-anchor" href="#autolocale"><span>autoLocale</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值: <code v-pre>false</code></li>
<li>详情： 是否启用语言重定向</li>
</ul>
<h3 id="switchlocale" tabindex="-1"><a class="header-anchor" href="#switchlocale"><span>switchLocale</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>&quot;direct&quot; | &quot;modal&quot; | false</code></p>
</li>
<li>
<p>默认值: <code v-pre>false</code></p>
</li>
<li>
<p>详情：</p>
<p>是否根据用户偏好切换到新的语言环境。</p>
<ul>
<li><code v-pre>&quot;direct&quot;</code>: 直接重定向到新的语言环境而不询问</li>
<li><code v-pre>&quot;modal&quot;</code>: 显示一个模式让用户选择是否切换到新的语言环境</li>
</ul>
</li>
</ul>
<h3 id="localeconfig" tabindex="-1"><a class="header-anchor" href="#localeconfig"><span>localeConfig</span></a></h3>
<ul>
<li>类型：<code v-pre>Record&lt;string, string | string[]&gt;</code></li>
<li>详情：多语言语言配置</li>
</ul>
<h3 id="localefallback" tabindex="-1"><a class="header-anchor" href="#localefallback"><span>localeFallback</span></a></h3>
<ul>
<li>类型：<code v-pre>boolean</code></li>
<li>默认值: <code v-pre>true</code></li>
<li>详情：是否回退到用户定义的其他语言</li>
</ul>
<h3 id="defaultbehavior" tabindex="-1"><a class="header-anchor" href="#defaultbehavior"><span>defaultBehavior</span></a></h3>
<ul>
<li>类型：<code v-pre>&quot;defaultLocale&quot; | &quot;homepage&quot; | &quot;404&quot;</code></li>
<li>默认值: <code v-pre>&quot;defaultLocale&quot;</code></li>
<li>详情：当前链接没有可用的语言版本时的行为</li>
</ul>
<h3 id="defaultlocale" tabindex="-1"><a class="header-anchor" href="#defaultlocale"><span>defaultLocale</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>默认值: 首个语言路径</li>
<li>详情：默认语言路径</li>
</ul>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<h3 id="redirectfrom" tabindex="-1"><a class="header-anchor" href="#redirectfrom"><span>redirectFrom</span></a></h3>
<ul>
<li>类型：<code v-pre>string | string[]</code></li>
<li>详情：重定向到该页面的地址。</li>
</ul>
<h3 id="redirectto" tabindex="-1"><a class="header-anchor" href="#redirectto"><span>redirectTo</span></a></h3>
<ul>
<li>类型：<code v-pre>string</code></li>
<li>详情：该页面重定向到的地址。</li>
</ul>
<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2>
<p>你可以通过 CSS 变量来自定义重定向弹窗的样式：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--redirect-z-index</span><span class="token punctuation">:</span> 1499<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--redirect-bg-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--redirect-bg-color-light</span><span class="token punctuation">:</span> #f3f4f5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--redirect-bg-color-lighter</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--redirect-text-color</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--redirect-primary-color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--redirect-primary-hover-color</span><span class="token punctuation">:</span> #4abf8a<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--redirect-primary-text-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


