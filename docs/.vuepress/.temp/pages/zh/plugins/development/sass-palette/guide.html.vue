<template><div><h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h1>
<p>相比于 <RouteLink to="/zh/plugins/development/palette.html"><code v-pre>@vuepress/plugin-palette</code></RouteLink> 插件，本插件允许你:</p>
<ul>
<li>基于用户配置派生相关样式</li>
<li>在插件中调用并提供和主题类似的样式自定义</li>
<li>跨越多个插件或主题通过 id 选项分组应用</li>
</ul>
<p>在使用插件前，你需要了解 id 选项，以及三个样式概念: 配置、调色板和派生器。</p>
<h2 id="id-选项" tabindex="-1"><a class="header-anchor" href="#id-选项"><span>ID 选项</span></a></h2>
<p>首先，你应该了解此插件的设计目标是提供跨越插件和主题的支持 (而并不像官方插件仅面向主题)。</p>
<p>我们提供了 <code v-pre>id</code> 选项来完成此目标，它将允许你:</p>
<ul>
<li>
<p>在插件 (或主题) 间共享同一个样式系统。</p>
<p>所有别名和模块名称都具有 ID 前缀，这意味着你可以在你的插件 (或主题) 中使用一套样式变量来统一你的样式，而不会受到其他插件 (或主题) 的影响。</p>
<p>用户可以在同一个文件中配置所有颜色变量、断点和其他样式配置，并自动应用在具有相同 ID 的主题和插件上。</p>
<div class="custom-container tip"><p class="custom-container-title">示例</p>
<p><code v-pre>vuepress-theme-hope</code> 及其它的相关插件都使用相同 ID <code v-pre>hope</code> 调用插件，因此用户在主题中配置的样式会自动在所有插件中生效。</p>
</div>
</li>
<li>
<p>设置不同的 ID 时，插件们和主题之间互相完全独立。我们建议你使用你的插件名称设置 <code v-pre>id</code> 变量。</p>
<p>使用默认设置，用户将在 <code v-pre>.vuepress/styles</code> 文件夹下设置你的插件样式，其中 Sass 文件以你的 ID 前缀开头。你可以使用 <code v-pre>${id}-config</code> 访问所需的变量。</p>
<div class="custom-container tip"><p class="custom-container-title">示例</p>
<p><code v-pre>vuepress-theme-hope</code> 正在使用 ID <code v-pre>&quot;hope&quot;</code>，而假设 <code v-pre>vuepress-plugin-abc</code> 正在使用 <code v-pre>&quot;abc&quot;</code>。他们可以分别使用 <code v-pre>hope-config</code> 和 <code v-pre>abc-config</code> 模块名称获取自己的变量。</p>
</div>
</li>
<li>
<p>通过相同 ID 调用插件不会有任何副作用。</p>
<div class="custom-container tip"><p class="custom-container-title">示例</p>
<p><code v-pre>vuepress-theme-hope</code> 及其它的相关插件都使用相同 ID <code v-pre>hope</code> 调用插件。</p>
</div>
</li>
</ul>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>配置文件仅用于提供 Sass 变量。它所包含 Sass 变量可以在其他文件中使用。</p>
<p>你可以指定一个文件作为用户配置文件。这样你可以稍后在插件 Sass 文件中访问包含每个变量的模块。此外，你还可以提供默认配置文件，你可以在其中使用 <code v-pre>!default</code> 为变量设置默认值。</p>
<details class="custom-container details"><summary>一个例子</summary>
<p>假设，你正在 <code v-pre>vuepress-plugin-abc</code> 中这样调用插件:</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">useSassPalette</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'abc'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">defaultConfig</span><span class="token operator">:</span> <span class="token string">'vuepress-plugin-abc/styles/config.scss'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><p>用户配置:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title=".vuepress/styles/abc-palette.scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token property"><span class="token variable">$navbar-height</span></span><span class="token punctuation">:</span> 3.5rem<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><p>默认配置:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="vuepress-plugin-abc/styles/palette.scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token property"><span class="token variable">$navbar-height</span></span><span class="token punctuation">:</span> 2rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$sidebar-width</span></span><span class="token punctuation">:</span> 18rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><p>你可以在插件 Sass 文件中获取到如下变量:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// Vue 单文件组件的 &lt;style lang="scss"> 块或脚本中直接导入的 Scss 文件中</span></span>
<span class="line"><span class="token keyword">@debug</span> abc-config.<span class="token variable">$navbar-height</span><span class="token punctuation">;</span> <span class="token comment">// 3.5rem</span></span>
<span class="line"><span class="token keyword">@debug</span> abc-config.<span class="token variable">$sidebar-width</span><span class="token punctuation">;</span> <span class="token comment">// 18rem</span></span>
<span class="line"></span></code></pre>
</div></details>
<h3 id="限制" tabindex="-1"><a class="header-anchor" href="#限制"><span>限制</span></a></h3>
<p>我们利用 <code v-pre>additionalData</code> 选项让 <code v-pre>${id}-config</code> 模块在你的样式中可用，但这有一些限制。</p>
<p><code v-pre>additionalData</code> 仅适用于 SASS 入口，因此 <code v-pre>${id}-config</code> 仅适用于:</p>
<ul>
<li>Vue 单文件组件的 <code v-pre>&lt;style lang=&quot;scss&quot;&gt;</code> 块</li>
<li>脚本中直接导入的 scss 文件 (例如: 客户端应用程序增强文件中的 <code v-pre>import &quot;./a-scss-file.scss&quot;</code>) 。</li>
</ul>
<p>如果 scss 文件不是直接导入的，而是通过 <code v-pre>@use</code> 或 <code v-pre>@import</code> API 导入的，模块将不可用。因此，在这种情况下，你应该通过 <code v-pre>@use &quot;@sass-palette/${id}-config&quot;;</code> 手动导入模块。</p>
<h3 id="保留的配置名称" tabindex="-1"><a class="header-anchor" href="#保留的配置名称"><span>保留的配置名称</span></a></h3>
<p><code v-pre>$dark-selector</code> 保留用于深色模式选择器。如果你希望你的插件或主题支持深色模式，则需要设置此变量。此变量稍后将在调色板文件中使用。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>
<p>如果你正在开发插件，你可以在默认配置文件中设置 <code v-pre>$dark-selector: html.dark !default;</code>，因为这是 <code v-pre>@vuepress/theme-default</code> 的默认行为。</p>
<p>你的插件将在默认主题正常工作，如果用户使用具有不同深色模式选择器的第三方主题，则用户可以在配置文件中更改此选择器。</p>
</li>
<li>
<p>如果你在开发主题，你可以在默认配置文件中设置 <code v-pre>$dark-selector</code> 为你的深色模式选择器同时不包含 <code v-pre>!default</code>，确保用户不能覆盖它。</p>
</li>
</ul>
</div>
<h2 id="调色板" tabindex="-1"><a class="header-anchor" href="#调色板"><span>调色板</span></a></h2>
<p>调色板文件用于 CSS 变量注入，其中每个变量将被注入到 root 中，变量名称转换为 kebab-name 格式。</p>
<p>与配置文件相同，调色板中的任何变量都将被注入到 <code v-pre>${id}-config</code> 模块中，以防万一你想在 SASS 文件中使用它们。</p>
<p>你可以指定一个文件作为用户调色板文件，默认文件名是 <code v-pre>${id}-palette.scss</code>。 此外，你还可以提供一个默认的调色板文件，你可以在其中使用 <code v-pre>!default</code> 为变量设置默认值。</p>
<details class="custom-container details"><summary>一个例子</summary>
<p>假设，你正在 <code v-pre>vuepress-plugin-abc</code> 中这样调用插件:</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">useSassPalette</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'abc'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">defaultPalette</span><span class="token operator">:</span> <span class="token string">'vuepress-plugin-abc/styles/palette.scss'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div><p>用户调色板:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title=".vuepress/styles/abc-palette.scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token property"><span class="token variable">$color-a</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><p>默认调色板:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="vuepress-plugin-abc/styles/palette.scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token property"><span class="token variable">$color-a</span></span><span class="token punctuation">:</span> blue <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$color-b</span></span><span class="token punctuation">:</span> green <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div><p>那么 root 选择器将会拥有下列 CSS 变量:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token selector">:root </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--color-a</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--color-b</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></details>
<h3 id="颜色设置" tabindex="-1"><a class="header-anchor" href="#颜色设置"><span>颜色设置</span></a></h3>
<p>由于默认主题支持深色模式，因此你可能希望在浅色模式和深色模式下使用不同的颜色。</p>
<p>为此，你应该使用包含 <code v-pre>light</code> 和 <code v-pre>dark</code> 键的映射设置颜色变量。 稍后，此插件将在你的配置中读取 <code v-pre>$dark-selector</code> 并为你生成不同的颜色。</p>
<details class="custom-container details"><summary>一个例子</summary>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// 用户调色板</span></span>
<span class="line"><span class="token property"><span class="token variable">$text-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token property">light</span><span class="token punctuation">:</span> #222<span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">dark</span><span class="token punctuation">:</span> #999<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 默认调色板</span></span>
<span class="line"><span class="token property"><span class="token variable">$text-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token property">light</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">dark</span><span class="token punctuation">:</span> #9e9e9e<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$bg-color</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">dark</span><span class="token punctuation">:</span> #1e1e1e<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，如果在配置文件中 <code v-pre>$dark-selector</code> 的值为 <code v-pre>&quot;html.dark&quot;</code>，你会得到:</p>
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
<h3 id="允许的变量类型" tabindex="-1"><a class="header-anchor" href="#允许的变量类型"><span>允许的变量类型</span></a></h3>
<p>调色板中只允许使用颜色 (或深浅模式颜色对象)、长度和字符串。任何其他类型都将被删除。</p>
<div class="custom-container tip"><p class="custom-container-title">为什么除了字符串只允许颜色和长度</p>
<p>在常见情况下，你可能只想计算颜色和长度。所以放弃其他类型支持是相当安全的，因为你想要的任何其他值都可以转换为字符串。</p>
<details class="custom-container details"><summary>示例</summary>
<p>如果你想要一个 <code v-pre>--move-transition</code> 和 <code v-pre>width 0.3s ease</code>，你可以使用字符串:</p>
<div class="language-scss" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// 这将被 sass 视为一个类型为 (length, time, function) 的列表</span></span>
<span class="line"><span class="token comment">// 并会触发警告并被插件删除</span></span>
<span class="line"><span class="token property"><span class="token variable">$moveTransition</span></span><span class="token punctuation">:</span> width 0.3s ease<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 这会得到你想要的</span></span>
<span class="line"><span class="token comment">// :root {</span></span>
<span class="line"><span class="token comment">//   --move-transition: width 0.3s ease</span></span>
<span class="line"><span class="token comment">// }</span></span>
<span class="line"><span class="token property"><span class="token variable">$moveTransition</span></span><span class="token punctuation">:</span> <span class="token string">'width 0.3s ease'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
</div></details>
</div>
<h2 id="辅助模块" tabindex="-1"><a class="header-anchor" href="#辅助模块"><span>辅助模块</span></a></h2>
<p>我们公开了 <code v-pre>@vuepress/plugin-sass-palette</code> 使用的内部函数，作为辅助模块。</p>
<p>你可以通过 <code v-pre>@sass-palette/helper</code> 别名使用此辅助模块，并调用其函数来自己实现类似的功能。</p>
<h2 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器"><span>生成器</span></a></h2>
<p>生成器文件面向开发人员使用配置或调色板文件变量生成衍生值。</p>
<p>生成器变量也将像调色板一样作为 CSS 变量注入，它们也可以在配置模块中使用。</p>
<details class="custom-container details"><summary>示例</summary>
<p>你可能想要一个基于 <code v-pre>$theme-color</code> 的 <code v-pre>$theme-color-light</code>。所以你可以这样写一个生成器:</p>
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
<h2 id="用户样式" tabindex="-1"><a class="header-anchor" href="#用户样式"><span>用户样式</span></a></h2>
<p>如果你是主题开发人员，你可能希望为你的用户提供一种自定义主题或网站的方法。</p>
<p>在这种情况下，你应该在使用此插件时将 <code v-pre>style</code> 选项设置为用户样式文件。</p>
<p>稍后，你应该通过在你的主题样式之后导入 <code v-pre>@sass-palette/${id}-style</code> 来手动包含用户样式文件。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code v-pre>@sass-palette/${id}-style</code> 是用户样式文件的别名，你可以在 JS/TS/SASS 中导入它。</p>
</div>
</div></template>


