<template><div><h1 id="palette" tabindex="-1"><a class="header-anchor" href="#palette"><span>palette</span></a></h1>
<NpmBadge package="@vuepress/plugin-palette" /><p>Provide palette support for your theme.</p>
<p>This plugin is mainly used to develop themes, and has been integrated into the default theme. You won't need to use it directly in most cases.</p>
<p>For theme authors, this plugin will help you to provide styles customization for users.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-palette@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> palettePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-palette'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">palettePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="palette-and-style" tabindex="-1"><a class="header-anchor" href="#palette-and-style"><span>Palette and Style</span></a></h2>
<p>This plugin will provide a <code v-pre>@vuepress/plugin-palette/palette</code> (palette file) and a <code v-pre>@vuepress/plugin-palette/style</code> (style file) to be imported in your theme styles.</p>
<p>The palette file is used for defining style variables, so it's likely to be imported at the beginning of your theme styles. For example, users can define <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">CSS variables</a>, <a href="https://sass-lang.com/documentation/variables" target="_blank" rel="noopener noreferrer">SASS variables</a>, <a href="http://lesscss.org/features/#variables-feature" target="_blank" rel="noopener noreferrer">LESS variables</a> or <a href="https://stylus-lang.com/docs/variables.html" target="_blank" rel="noopener noreferrer">Stylus variables</a> in the palette, and then you can use those variables in your theme styles.</p>
<p>The style file is used for overriding the default styles or adding extra styles, so it's likely to be imported at the end of your theme styles.</p>
<h2 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h2>
<p>Use this plugin in your theme, assuming you are using SASS:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">palettePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> preset<span class="token operator">:</span> <span class="token string">'sass'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="usage-of-palette" tabindex="-1"><a class="header-anchor" href="#usage-of-palette"><span>Usage of Palette</span></a></h3>
<p>Import the plugin's palette file where your theme needs to use the corresponding variables, such as in the <code v-pre>Layout.vue</code> file:</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>palette-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello, Palette!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token comment">/* import variables from the plugin's palette file */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">'@vuepress/plugin-palette/palette'</span><span class="token punctuation">;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* set default value for variables */</span></span>
<span class="line">$<span class="token property">color</span><span class="token punctuation">:</span> red !default<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* use variables in your styles */</span></span>
<span class="line"><span class="token selector">.palette-title</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then users can customize variables in <code v-pre>.vuepress/styles/palette.scss</code>:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><h3 id="usage-of-style" tabindex="-1"><a class="header-anchor" href="#usage-of-style"><span>Usage of Style</span></a></h3>
<p>Import the plugin's style file after your theme's styles, for example, in the <code v-pre>clientConfigFile</code>:</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// import your theme's style file</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'path/to/your/theme/style'</span></span>
<span class="line"><span class="token comment">// import the plugin's style file</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'@vuepress/plugin-palette/style'</span></span>
<span class="line"></span></code></pre>
</div><p>Then users can add extra styles in <code v-pre>.vuepress/styles/index.scss</code> and override the default styles of your theme:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">h1 </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 2.5rem<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="preset" tabindex="-1"><a class="header-anchor" href="#preset"><span>preset</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>'css' | 'sass' | 'less' | 'stylus'</code></p>
</li>
<li>
<p>Default: <code v-pre>'css'</code></p>
</li>
<li>
<p>Details:</p>
<p>Set preset for other options.</p>
<p>If you don't need advanced customization of the plugin, it's recommended to only set this option and omit other options.</p>
</li>
</ul>
<h3 id="userpalettefile" tabindex="-1"><a class="header-anchor" href="#userpalettefile"><span>userPaletteFile</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default:</p>
<ul>
<li>css: <code v-pre>'.vuepress/styles/palette.css'</code></li>
<li>sass: <code v-pre>'.vuepress/styles/palette.scss'</code></li>
<li>less: <code v-pre>'.vuepress/styles/palette.less'</code></li>
<li>stylus: <code v-pre>'.vuepress/styles/palette.styl'</code></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>File path of the user palette file, relative to source directory.</p>
<p>The default value depends on the <a href="#preset">preset</a> option.</p>
<p>The file is where users define style variables, and it's recommended to keep the default file path as a convention.</p>
</li>
</ul>
<h3 id="temppalettefile" tabindex="-1"><a class="header-anchor" href="#temppalettefile"><span>tempPaletteFile</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default:</p>
<ul>
<li>css: <code v-pre>'styles/palette.css'</code></li>
<li>sass: <code v-pre>'styles/palette.scss'</code></li>
<li>less: <code v-pre>'styles/palette.less'</code></li>
<li>stylus: <code v-pre>'styles/palette.styl'</code></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>File path of the generated palette temp file, relative to temp directory.</p>
<p>The default value depends on the <a href="#preset">preset</a> option.</p>
<p>You should import the palette file via <code v-pre>'@vuepress/plugin-palette/palette'</code> alias, so you don't need to change this option in most cases.</p>
</li>
</ul>
<h3 id="userstylefile" tabindex="-1"><a class="header-anchor" href="#userstylefile"><span>userStyleFile</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default:</p>
<ul>
<li>css: <code v-pre>'.vuepress/styles/index.css'</code></li>
<li>sass: <code v-pre>'.vuepress/styles/index.scss'</code></li>
<li>less: <code v-pre>'.vuepress/styles/index.less'</code></li>
<li>stylus: <code v-pre>'.vuepress/styles/index.styl'</code></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>File path of the user style file, relative to source directory.</p>
<p>The default value depends on the <a href="#preset">preset</a> option.</p>
<p>The file is where users override default styles or add extra styles, and it's recommended to keep the default file path as a convention.</p>
</li>
</ul>
<h3 id="tempstylefile" tabindex="-1"><a class="header-anchor" href="#tempstylefile"><span>tempStyleFile</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Default:</p>
<ul>
<li>css: <code v-pre>'styles/index.css'</code></li>
<li>sass: <code v-pre>'styles/index.scss'</code></li>
<li>less: <code v-pre>'styles/index.less'</code></li>
<li>stylus: <code v-pre>'styles/index.styl'</code></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>File path of the generated style temp file, relative to temp directory.</p>
<p>The default value depends on the <a href="#preset">preset</a> option.</p>
<p>You should import the style file via <code v-pre>'@vuepress/plugin-palette/style'</code> alias, so you don't need to change this option in most cases.</p>
</li>
</ul>
<h3 id="importcode" tabindex="-1"><a class="header-anchor" href="#importcode"><span>importCode</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>(filePath: string) =&gt; string</code></p>
</li>
<li>
<p>Default:</p>
<ul>
<li>css: <code v-pre>(filePath) =&gt; `@import '${filePath}';\n`</code></li>
<li>sass: <code v-pre>(filePath) =&gt; `@forward 'file:///${filePath}';\n`</code></li>
<li>less: <code v-pre>(filePath) =&gt; `@import '${filePath}';\n`</code></li>
<li>stylus: <code v-pre>(filePath) =&gt; `@require '${filePath}';\n`</code></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>Function to generate import code.</p>
<p>The default value depends on the <a href="#preset">preset</a> option.</p>
<p>This option is used for generating <a href="#temppalettefile">tempPaletteFile</a> and <a href="#tempstylefile">tempStyleFile</a>, and you don't need to change this option in most cases.</p>
</li>
</ul>
</div></template>


