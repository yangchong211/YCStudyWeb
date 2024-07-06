<template><div><h1 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect"><span>redirect</span></a></h1>
<NpmBadge package="@vuepress/plugin-redirect" /><p>This plugin can automatically handle redirects for your site.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-redirect@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> redirectPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-redirect'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">redirectPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="control-page-redirection" tabindex="-1"><a class="header-anchor" href="#control-page-redirection"><span>Control Page Redirection</span></a></h3>
<p>If you change the address of an existing page, you can use the <code v-pre>redirectFrom</code> option in Frontmatter to redirect to the address of this page, which ensures that users are redirected to the new address when they visit the old link.</p>
<p>If you need to redirect an existing page to a new page, you can use the <code v-pre>redirectTo</code> option in Frontmatter to set the address to redirect to. This way the page will redirect to the new address when accessed.</p>
<p>You can also set <code v-pre>config</code> with a redirect map in plugin options, see <a href="#config">config</a> for more details.</p>
<h3 id="auto-locales" tabindex="-1"><a class="header-anchor" href="#auto-locales"><span>Auto Locales</span></a></h3>
<p>The plugin can automatically redirect non-multilingual links to the multilingual pages the user needs based on the user's language preference.</p>
<p>To achieve this, you need to leave the default language directory (<code v-pre>/</code>) blank and set <code v-pre>autoLocale: true</code> in plugin options. The plugin will automatically redirect to the correct page according to the user's language.</p>
<p>I.E.: you need to set the following directory structure:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And set <code v-pre>locales</code> in theme options with:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>So when a user accesses <code v-pre>/</code> or <code v-pre>/page.html</code>, they are automatically redirected to <code v-pre>/en/</code> <code v-pre>/en/page.html</code> and <code v-pre>/en/</code> <code v-pre>/en/page.html</code> based on current browser language.</p>
<div class="custom-container tip"><p class="custom-container-title">Customizing fallback behavior</p>
<p>Sometimes, users may add more than one language to the system settings. By default, when a site supports a preferred language, but the page not exists for the preferred language, the plugin attempts to match the alternate language set by the user.</p>
<p>If you don't need to fall back to the user's alternate language, but directly match the user's preferred language, set <code v-pre>localeFallback: false</code> in the plugin options.</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">Customizing missing behavior</p>
<p>Sometimes, when a user visits a page, the document does not yet contain the language version the user needs (a common case is that the current page has not been localized in the relevant language), so the plugin needs to perform a default action, which you can customize by <code v-pre>defaultBehavior</code> in the plugin options:</p>
<ul>
<li><code v-pre>&quot;defaultLocale&quot;</code>: Redirect to default language or first available language page (default behavior)</li>
<li><code v-pre>&quot;homepage&quot;</code>: redirect to the home page in the current language (only available if the document contains the user's language)</li>
<li><code v-pre>&quot;404&quot;</code>: Redirect to page 404 in current language (only available if the document contains the user's language)</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">Customizing default locale path</p>
<p>You can customize the default locale path by setting <code v-pre>defaultLocale</code> in the plugin options. By default, the plugin uses the first locale key in <code v-pre>locales</code> as the default language.</p>
</div>
<h3 id="automatically-switch-languages" tabindex="-1"><a class="header-anchor" href="#automatically-switch-languages"><span>Automatically switch languages</span></a></h3>
<p>The plugin supports automatically switching the link to the multilingual page that the user needs according to the user's language preference when opening a multilingual document. In order to achieve this, you need to set <code v-pre>switchLocale</code> in the plugin options, which can be the following two values:</p>
<ul>
<li><code v-pre>direct</code>: switch directly to the user language preference page without asking</li>
<li><code v-pre>modal</code>: When the user's language preference is different from the current page language, show a modal asking whether to switch language</li>
</ul>
<h3 id="customizing-locale-settings" tabindex="-1"><a class="header-anchor" href="#customizing-locale-settings"><span>Customizing Locale Settings</span></a></h3>
<p>By default, the plugin generates a locale setting by reading <code v-pre>locale path</code> and <code v-pre>lang</code> from the site's <code v-pre>locales</code> option. Sometimes, you may want multiple languages to hit the same path, in which case you should set <code v-pre>localeConfig</code> in plugin options.</p>
<p>For example, you might want all English users to match to <code v-pre>/en/</code> and Chinese Traditional users to <code v-pre>/zh/</code>, then you can set:</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">localeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'/en/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'en-US'</span><span class="token punctuation">,</span> <span class="token string">'en-UK'</span><span class="token punctuation">,</span> <span class="token string">'en'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'zh-CN'</span><span class="token punctuation">,</span> <span class="token string">'zh-TW'</span><span class="token punctuation">,</span> <span class="token string">'zh'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><h3 id="redirecting-sites" tabindex="-1"><a class="header-anchor" href="#redirecting-sites"><span>Redirecting Sites</span></a></h3>
<p>Sometimes you may change <code v-pre>base</code> or use new domain for your site, so you may want the original site automatically redirects to the new one.</p>
<p>To solve this, the plugin provide <code v-pre>vp-redirect</code> cli.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">Usage:</span>
<span class="line">  $ vp-redirect generate <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  <span class="token parameter variable">--hostname</span> <span class="token operator">&lt;</span>hostname<span class="token operator">></span>  Hostname to redirect to <span class="token punctuation">(</span>E.g.: https://new.example.com/<span class="token punctuation">)</span> <span class="token punctuation">(</span>default: /<span class="token punctuation">)</span></span>
<span class="line">  -c, <span class="token parameter variable">--config</span> <span class="token operator">&lt;</span>config<span class="token operator">></span>  Set path to config <span class="token function">file</span></span>
<span class="line">  -o, <span class="token parameter variable">--output</span> <span class="token operator">&lt;</span>output<span class="token operator">></span>  Set the output directory <span class="token punctuation">(</span>default: .vuepress/redirect<span class="token punctuation">)</span></span>
<span class="line">  <span class="token parameter variable">--cache</span> <span class="token operator">&lt;</span>cache<span class="token operator">></span>        Set the directory of the cache files</span>
<span class="line">  -t, <span class="token parameter variable">--temp</span> <span class="token operator">&lt;</span>temp<span class="token operator">></span>      Set the directory of the temporary files</span>
<span class="line">  --clean-cache          Clean the cache files before generation</span>
<span class="line">  --clean-temp           Clean the temporary files before generation</span>
<span class="line">  -h, <span class="token parameter variable">--help</span>             Display this message</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You need to pass in VuePress project source dir and also set the <code v-pre>hostname</code> option. The redirect helper cli will initialize your VuePress project to get pages, then generate and output the redirect html files to the output directory.</p>
<p>By default, the plugin will output to <code v-pre>.vuepress/redirect</code> directory under source directory. And you should upload it to your original site to provide redirection.</p>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>Record&lt;string, string&gt; | ((app: App) =&gt; Record&lt;string, string&gt;)</code></p>
</li>
<li>
<p>Details: Redirect map.</p>
</li>
<li>
<p>Example:</p>
<p>When base is set to <code v-pre>/base/</code>:</p>
<ul>
<li>redirect <code v-pre>/base/foo.html</code> to <code v-pre>/base/bar.html</code></li>
<li><code v-pre>/base/baz.html</code> to <code v-pre>https://example.com/qux.html</code>.</li>
</ul>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'/foo.html'</span><span class="token operator">:</span> <span class="token string">'/bar.html'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'/baz.html'</span><span class="token operator">:</span> <span class="token string">'https://example.com/qux.html'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><p>Redirect post folder to posts folder:</p>
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
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
<li>Details: Whether enable locales redirection.</li>
</ul>
<h3 id="switchlocale" tabindex="-1"><a class="header-anchor" href="#switchlocale"><span>switchLocale</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>&quot;direct&quot; | &quot;modal&quot; | false</code></p>
</li>
<li>
<p>Default: <code v-pre>false</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether switch to a new locale based on user preference.</p>
<ul>
<li><code v-pre>&quot;direct&quot;</code>: redirect to the new locale directly without asking</li>
<li><code v-pre>&quot;modal&quot;</code>: show a modal to let user choose whether to switch to the new locale</li>
</ul>
</li>
</ul>
<h3 id="localeconfig" tabindex="-1"><a class="header-anchor" href="#localeconfig"><span>localeConfig</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>Record&lt;string, string | string[]&gt;</code></p>
</li>
<li>
<p>Details: Locale language config</p>
</li>
</ul>
<h3 id="localefallback" tabindex="-1"><a class="header-anchor" href="#localefallback"><span>localeFallback</span></a></h3>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>true</code></li>
<li>Details: Whether fallback to other locales user defined</li>
</ul>
<h3 id="defaultbehavior" tabindex="-1"><a class="header-anchor" href="#defaultbehavior"><span>defaultBehavior</span></a></h3>
<ul>
<li>Type: <code v-pre>&quot;defaultLocale&quot; | &quot;homepage&quot; | &quot;404&quot;</code></li>
<li>Default: <code v-pre>&quot;defaultLocale&quot;</code></li>
<li>Details: Behavior when a locale version is not available for current link.</li>
</ul>
<h3 id="defaultlocale" tabindex="-1"><a class="header-anchor" href="#defaultlocale"><span>defaultLocale</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: the first locale</li>
<li>Details: Default locale path.</li>
</ul>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<h3 id="redirectfrom" tabindex="-1"><a class="header-anchor" href="#redirectfrom"><span>redirectFrom</span></a></h3>
<ul>
<li>Type: <code v-pre>string | string[]</code></li>
<li>Details: The link which this page redirects from.</li>
</ul>
<h3 id="redirectto" tabindex="-1"><a class="header-anchor" href="#redirectto"><span>redirectTo</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Details: The link which this page redirects to.</li>
</ul>
<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2>
<p>You can customize the style of the redirect popup via CSS variables:</p>
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


