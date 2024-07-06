<template><div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1>
<h2 id="插件选项" tabindex="-1"><a class="header-anchor" href="#插件选项"><span>插件选项</span></a></h2>
<h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 是</li>
</ul>
<p>调色板的唯一 ID，用于避免重复注册。</p>
<h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>默认值: <code v-pre>`.vuepress/styles/${id}-palette.scss`</code></li>
</ul>
<p>用户配置文件路径，相对于源文件夹。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>这是用户设置样式变量的文件。</p>
<p>默认路径的文件名拥有上方的 ID 前缀。</p>
</div>
<h3 id="defaultconfig" tabindex="-1"><a class="header-anchor" href="#defaultconfig"><span>defaultConfig</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>默认值: <code v-pre>&quot;@vuepress/plugin-sass-palette/styles/default/config.scss&quot;</code></li>
</ul>
<p>默认的配置文件路径，应为绝对路径。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>这是你应该通过 <code v-pre>!default</code> 来提供默认样式变量的文件。</p>
</div>
<h3 id="palette" tabindex="-1"><a class="header-anchor" href="#palette"><span>palette</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>默认值: <code v-pre>`.vuepress/styles/${id}-palette.scss`</code></li>
</ul>
<p>用户的调色板文件路径，相对于源文件夹。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>这是用户控制注入 CSS 变量的文件。所有的变量会被转换为连字符格式然后被注入。</p>
<p>默认路径的文件名拥有上方的 ID 前缀。</p>
</div>
<h3 id="defaultpalette" tabindex="-1"><a class="header-anchor" href="#defaultpalette"><span>defaultPalette</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>默认值: <code v-pre>&quot;@vuepress/plugin-sass-palette/styles/default/palette.scss&quot;</code></li>
</ul>
<p>默认的调色板文件路径，应为绝对路径。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>这是你应该通过 <code v-pre>!default</code> 来提供默认调色板值的文件。所有的变量会被转换为连字符格式然后被注入。</p>
</div>
<h3 id="generator" tabindex="-1"><a class="header-anchor" href="#generator"><span>generator</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>自定义的生成器，用于生成调色板配置的衍生值。</p>
<p>如: 你可能想要根据 <code v-pre>$theme-color</code> 的值提供一个 <code v-pre>$theme-color-light</code>。</p>
<h3 id="style" tabindex="-1"><a class="header-anchor" href="#style"><span>style</span></a></h3>
<ul>
<li>类型: <code v-pre>string</code></li>
<li>必填: 否</li>
</ul>
<p>用户的样式文件路径，相对于源文件夹。.</p>
<h2 id="别名" tabindex="-1"><a class="header-anchor" href="#别名"><span>别名</span></a></h2>
<p>可用的别名如下:</p>
<ul>
<li>配置: <code v-pre>@sass-palette/${id}-config</code> (基于 <code v-pre>id</code>)</li>
<li>调色板: <code v-pre>@sass-palette/${id}-palette</code> (基于 <code v-pre>id</code>)</li>
<li>样式: <code v-pre>@sass-palette/${id}-style</code> (仅在设置了 <code v-pre>style</code> 选项时可用)</li>
<li>助手: <code v-pre>@sass-palette/helper</code></li>
</ul>
</div></template>


