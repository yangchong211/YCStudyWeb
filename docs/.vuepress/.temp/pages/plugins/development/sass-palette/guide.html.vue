<template><div><h1 id="guide" tabindex="-1"><a class="header-anchor" href="#guide"><span>Guide</span></a></h1>
<p>Comparing to <RouteLink to="/plugins/development/palette.html"><code v-pre>@vuepress/plugin-palette</code></RouteLink>, this plugin allows you to:</p>
<ul>
<li>Derive related styles based on user configuration</li>
<li>Provide style customization similar to theme in plugins</li>
<li>Group applications across multiple plugins or themes via id option</li>
</ul>
<p>Before using the plugin, you need to understand the id option, as well as three styling concepts: configuration, palette and generator.</p>
<h2 id="id-option" tabindex="-1"><a class="header-anchor" href="#id-option"><span>ID Option</span></a></h2>
<p>To get started, you should understand that this plugin is designed to take across plugins and theme (unlike the official one only for theme).</p>
<p>We are providing <code v-pre>id</code> option to do that, and using this plugin (by calling <code v-pre>useSassPalette</code>) with same ID won't have any side effects. Also, all the alias and module names have an ID prefix.</p>
<p>This will allow you to:</p>
<ul>
<li>
<p>Share same style system across your plugins (or themes) using same ID without any side effects.</p>
<p>All aliases and module names have an ID prefix, which means you can use a set of style variables within your plugins (or theme) to unify your styles without being affected by other plugins (or themes).</p>
<p>Users can configure all color variables, breakpoints, and other style configurations in the same file and have them automatically applied on themes and plugins with the same ID.</p>
<div class="custom-container tip"><p class="custom-container-title">Example</p>
<p><code v-pre>vuepress-theme-hope</code> and other related plugins use the same ID <code v-pre>hope</code> to call the plugin, so the styles configured by the user in the theme will automatically take effect in all plugins.</p>
</div>
</li>
<li>
<p>With different ID, plugins and theme won't affect others. We recommend you to set the <code v-pre>id</code> variable with your plugin name.</p>
<p>With the default settings, users will set your plugin style under <code v-pre>.vuepress/styles</code> directory with Sass files starting with your ID prefix. And you can access the variables you need with <code v-pre>${id}-config</code>.</p>
<div class="custom-container tip"><p class="custom-container-title">Example</p>
<p><code v-pre>vuepress-theme-hope</code> is using ID <code v-pre>&quot;hope&quot;</code>, and just imagine a <code v-pre>vuepress-plugin-abc</code> is using <code v-pre>&quot;abc&quot;</code>. They can get their own variables with module name <code v-pre>hope-config</code> and <code v-pre>abc-config</code>.</p>
</div>
</li>
<li>
<p>Calling the plugin with the same ID has no side effects.</p>
<div class="custom-container tip"><p class="custom-container-title">example</p>
<p><code v-pre>vuepress-theme-hope</code> and other related plugins use the same ID <code v-pre>hope</code> to call the plugin.</p>
</div>
</li>
</ul>
<h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2>
<p>Config file is used for Sass variable only. It holds Sass variables which can be used in other files later.</p>
<p>You can specify a file (probably in <code v-pre>.vuepress/styles/</code> directory) as user config file. So you can get the module containing every variable later in Sass files. Also, you are able to provide a default config files where you can place fallback values for variables with <code v-pre>!default</code>.</p>
<details class="custom-container details"><summary>An example</summary>
<p>Imagine you are invoking the plugin with the following options in <code v-pre>vuepress-plugin-abc</code>:</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">useSassPalette</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'abc'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">defaultConfig</span><span class="token operator">:</span> <span class="token string">'vuepress-plugin-abc/styles/config.scss'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><p>User config file:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title=".vuepress/styles/abc-palette.scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token property"><span class="token variable">$navbar-height</span></span><span class="token punctuation">:</span> 3.5rem<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><p>Default config file:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="vuepress-plugin-abc/styles/palette.scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token property"><span class="token variable">$navbar-height</span></span><span class="token punctuation">:</span> 2rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$sidebar-width</span></span><span class="token punctuation">:</span> 18rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><p>You can get the following variables in the plugin Sass files:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// &lt;style lang="scss"> block in vue sfc or scss file directly imported in scripts</span></span>
<span class="line"><span class="token keyword">@debug</span> abc-config.<span class="token variable">$navbar-height</span><span class="token punctuation">;</span> <span class="token comment">// 3.5rem</span></span>
<span class="line"><span class="token keyword">@debug</span> abc-config.<span class="token variable">$sidebar-width</span><span class="token punctuation">;</span> <span class="token comment">// 18rem</span></span>
<span class="line"></span></code></pre>
</div></details>
<h3 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations"><span>Limitations</span></a></h3>
<p>We are using <code v-pre>additionalData</code> options to let <code v-pre>${id}-config</code> module available in your styles, but this has some limitations.</p>
<p><code v-pre>additionalData</code> only works on Scss entry, so <code v-pre>${id}-config</code> is available only in :</p>
<ul>
<li><code v-pre>&lt;style lang=&quot;scss&quot;&gt;</code> block in component files</li>
<li>Scss files imported by script files directly (e.g.: <code v-pre>import &quot;./a-scss-file.scss&quot;</code> in client app enhance file).</li>
</ul>
<p>If the Scss file is not imported directly, but is imported through <code v-pre>@use</code> or <code v-pre>@import</code> api, the module won't be available. So that in this case, you should manually import the module with <code v-pre>@use &quot;@sass-palette/${id}-config&quot;;</code>.</p>
<h3 id="preserved-variables" tabindex="-1"><a class="header-anchor" href="#preserved-variables"><span>Preserved Variables</span></a></h3>
<p><code v-pre>$dark-selector</code> is preserved for darkmode selector. You are expected to set this variable if you want your plugin or theme support darkmode. This variable will be used later in palette files.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>
<p>If you are developing a plugin, you may set <code v-pre>$dark-selector: html.dark !default;</code> in default config files, as <code v-pre>@vuepress/theme-default</code> is doing that.</p>
<p>Your plugin will work with default theme, and users are allowed to change this selector in config file if they are using a third-party theme with different dark selector.</p>
</li>
<li>
<p>If you are developing a theme, you may set <code v-pre>$dark-selector</code> in default config files with your darkmode selector without <code v-pre>!default</code>, to insure users cannot override it.</p>
</li>
</ul>
</div>
<h2 id="palette" tabindex="-1"><a class="header-anchor" href="#palette"><span>Palette</span></a></h2>
<p>Palette files are used for CSS variable injection, where each variable will be injected in to root with kebab-name of variable name.</p>
<p>Same as config file, any variables in palette will be injected into <code v-pre>${id}-config</code> module, just in case you want to use them in Sass files.</p>
<p>You can specify a file (probably in <code v-pre>.vuepress/styles/</code> directory) as user palette file, and the default filename is <code v-pre>${id}-palette.scss</code>. Also, you are able to provide a default palette files where you can place fallback values for variables with <code v-pre>!default</code>.</p>
<details class="custom-container details"><summary>An example</summary>
<p>Imagine you are invoking the plugin with the following options in <code v-pre>vuepress-plugin-abc</code>:</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">useSassPalette</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'abc'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">defaultPalette</span><span class="token operator">:</span> <span class="token string">'vuepress-plugin-abc/styles/palette.scss'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><p>If users are setting:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title=".vuepress/styles/abc-palette.scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token property"><span class="token variable">$color-a</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><p>And you are providing a default palette file with:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="vuepress-plugin-abc/styles/palette.scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token property"><span class="token variable">$color-a</span></span><span class="token punctuation">:</span> blue <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$color-b</span></span><span class="token punctuation">:</span> green <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><p>Then the below CSS variables will be available under root selector:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">:root </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--color-a</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--color-b</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></details>
<h3 id="color-settings" tabindex="-1"><a class="header-anchor" href="#color-settings"><span>Color Settings</span></a></h3>
<p>Since the default theme is providing darkmode, so you probably want different colors under lightmode and darkmode.</p>
<p>To achieve that, you should set color variables with a map containing <code v-pre>light</code> and <code v-pre>dark</code> keys. Later, the plugin will read <code v-pre>$dark-selector</code> in your config and generate different colors for you.</p>
<details class="custom-container details"><summary>An example</summary>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// User palette</span></span>
<span class="line"><span class="token property"><span class="token variable">$text-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token property">light</span><span class="token punctuation">:</span> #222<span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">dark</span><span class="token punctuation">:</span> #999<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Default palette</span></span>
<span class="line"><span class="token property"><span class="token variable">$text-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token property">light</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">dark</span><span class="token punctuation">:</span> #9e9e9e<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$bg-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">dark</span><span class="token punctuation">:</span> #1e1e1e<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then if <code v-pre>$dark-selector</code> has a value <code v-pre>&quot;html.dark&quot;</code> in config file, you will get:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">:root </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--text-color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--bg-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">html.dark </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--text-color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--bg-color</span><span class="token punctuation">:</span> #1e1e1e<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></details>
<h3 id="allowed-variable-types" tabindex="-1"><a class="header-anchor" href="#allowed-variable-types"><span>Allowed Variable Types</span></a></h3>
<p>Only colors (or color map for light/dark mode), length and strings are allowed in palette. Any other type will be dropped.</p>
<div class="custom-container tip"><p class="custom-container-title">Why only allow color and length besides strings</p>
<p>In common situations, you probably only want to make calculations with color and length. So it's quite safe to drop other type support, because any other value you want can be converted to string.</p>
<details class="custom-container details"><summary>Example</summary>
<p>If you want a <code v-pre>--move-transition</code> with <code v-pre>width 0.3s ease</code>, you can use strings:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// this will be regarded as a list with (length, time, function) by Sass</span></span>
<span class="line"><span class="token comment">// and will trigger a warning and be dropped by plugin</span></span>
<span class="line"><span class="token property"><span class="token variable">$moveTransition</span></span><span class="token punctuation">:</span> width 0.3s ease<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// this will get what you want</span></span>
<span class="line"><span class="token comment">// :root {</span></span>
<span class="line"><span class="token comment">//   --move-transition: width 0.3s ease</span></span>
<span class="line"><span class="token comment">// }</span></span>
<span class="line"><span class="token property"><span class="token variable">$moveTransition</span></span><span class="token punctuation">:</span> <span class="token string">'width 0.3s ease'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div></details>
</div>
<h2 id="helper" tabindex="-1"><a class="header-anchor" href="#helper"><span>Helper</span></a></h2>
<p>We are exposing internal functions which <code v-pre>@vuepress/plugin-sass-palette</code> uses, as a helper module.</p>
<p>You can use this helper with <code v-pre>@sass-palette/helper</code> alias and call its function to achieve similar features yourself.</p>
<h2 id="generator" tabindex="-1"><a class="header-anchor" href="#generator"><span>Generator</span></a></h2>
<p>Generator file is facing developers to generate derivative values with config or palette file variables.</p>
<p>Generator variables will be also injected as CSS variables like palette, and also they are available in config module.</p>
<details class="custom-container details"><summary>Example</summary>
<p>You may want a <code v-pre>$theme-color-light</code> based on <code v-pre>$theme-color</code>. So you can write a generator like this:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token keyword">@use</span> <span class="token string">'sass:color'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">@use</span> <span class="token string">'sass:list'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">@use</span> <span class="token string">'sass:map'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">@use</span> <span class="token string">'@sass-palette/helper'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token property"><span class="token variable">$theme-color-light</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token property">light</span><span class="token punctuation">:</span> color.<span class="token function">scale</span><span class="token punctuation">(</span>helper.<span class="token function">get-color</span><span class="token punctuation">(</span><span class="token variable">$theme-color</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$lightness</span></span><span class="token punctuation">:</span> 10%<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">dark</span><span class="token punctuation">:</span> color.<span class="token function">scale</span><span class="token punctuation">(</span>helper.<span class="token function">get-dark-color</span><span class="token punctuation">(</span><span class="token variable">$theme-color</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$lightness</span></span><span class="token punctuation">:</span> 10%<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div></details>
<h2 id="user-styles" tabindex="-1"><a class="header-anchor" href="#user-styles"><span>User Styles</span></a></h2>
<p>If you are a theme developer, you may probably want to provide your users a way to custom your theme or the site.</p>
<p>In this case you should set <code v-pre>style</code> option as the user style file when using this plugin.</p>
<p>Later, you should manually include user style file by importing <code v-pre>@sass-palette/${id}-style</code> <strong>after your theme styles</strong>.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>@sass-palette/${id}-style</code> is an alias to user style file, and you can import it in JS/TS/SASS.</p>
</div>
</div></template>


