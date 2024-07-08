<template><div><h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: Yes</li>
</ul>
<p>Identifier for palette, used to avoid duplicate registration.</p>
<h3 id="config-1" tabindex="-1"><a class="header-anchor" href="#config-1"><span>config</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>`.vuepress/styles/${id}-palette.scss`</code></li>
</ul>
<p>User config file path, relative to source dir.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is the file where user set style variables.</p>
<p>The default filename is starting with ID above.</p>
</div>
<h3 id="defaultconfig" tabindex="-1"><a class="header-anchor" href="#defaultconfig"><span>defaultConfig</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&quot;@vuepress/plugin-sass-palette/styles/default/config.scss&quot;</code></li>
</ul>
<p>Default config file path, should be absolute path.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is the file you should use to provide default values with <code v-pre>!default</code>.</p>
</div>
<h3 id="palette" tabindex="-1"><a class="header-anchor" href="#palette"><span>palette</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>`.vuepress/styles/${id}-palette.scss`</code></li>
</ul>
<p>User palette file path, relative to source dir.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is the file where user control injected CSS variables. All the variables will be converted in to kebab-case and injected.</p>
<p>The default filename is starting with ID above.</p>
</div>
<h3 id="defaultpalette" tabindex="-1"><a class="header-anchor" href="#defaultpalette"><span>defaultPalette</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>&quot;@vuepress/plugin-sass-palette/styles/default/palette.scss&quot;</code></li>
</ul>
<p>Default palette file path, should be absolute path.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is the file you should use to provide default CSS variables with <code v-pre>!default</code>. All the variable will be converted in to kebab-case and injected.</p>
</div>
<h3 id="generator" tabindex="-1"><a class="header-anchor" href="#generator"><span>generator</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: No</li>
</ul>
<p>Custom generator, used to generate derivative values with the above config.</p>
<p>E.g.: You may want to provide a <code v-pre>$theme-color-light</code> based on <code v-pre>$theme-color</code>.</p>
<h3 id="style" tabindex="-1"><a class="header-anchor" href="#style"><span>style</span></a></h3>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: No</li>
</ul>
<p>User style file path, relative to source dir.</p>
<h2 id="alias" tabindex="-1"><a class="header-anchor" href="#alias"><span>Alias</span></a></h2>
<p>Available alias are:</p>
<ul>
<li>config: <code v-pre>@sass-palette/${id}-config</code> (based on <code v-pre>id</code>)</li>
<li>palette: <code v-pre>@sass-palette/${id}-palette</code> (based on <code v-pre>id</code>)</li>
<li>style: <code v-pre>@sass-palette/${id}-style</code> (only available when <code v-pre>style</code> option is set)</li>
<li>helper: <code v-pre>@sass-palette/helper</code></li>
</ul>
</div></template>


