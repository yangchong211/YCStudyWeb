<template><div><h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h1>
<h2 id="设置选项" tabindex="-1"><a class="header-anchor" href="#设置选项"><span>设置选项</span></a></h2>
<p>你既可以在 Node.js 一侧使用插件选项设置选项，也可以通过<a href="https://vuejs.press/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">客户端配置文件</a>在浏览器一侧设置选项。</p>
<h3 id="通过插件选项" tabindex="-1"><a class="header-anchor" href="#通过插件选项"><span>通过插件选项</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> commentPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">commentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      provider<span class="token operator">:</span> <span class="token string">'Artalk'</span><span class="token punctuation">,</span> <span class="token comment">// Artalk | Giscus | Waline | Twikoo</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// 在这里放置其他选项</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过客户端配置文件" tabindex="-1"><a class="header-anchor" href="#通过客户端配置文件"><span>通过客户端配置文件</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/client.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/client'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  defineArtalkConfig<span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// defineGiscusConfig,</span></span>
<span class="line">  <span class="token comment">// defineTwikooConfig,</span></span>
<span class="line">  <span class="token comment">// defineWalineConfig,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-comment/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">defineArtalkConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 选项</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有以下你需要注意的限制：</p>
<ul>
<li>
<p><code v-pre>provider</code>、多语言设置和其他资源相关选项必须在插件选项中设置。</p>
<p>为确保 tree-shaking 有效，我们必须在 Node 一侧优化入口，以便打包器可以了解最终打包中应包含哪些资源。</p>
<p>这些选项将在配置参考中用 <Badge text="仅限插件选项" type="warning" vertical="baseline"/> 标记。</p>
</li>
<li>
<p>不能序列化为 JSON 的选项必须在客户端配置中设置。</p>
<p>接收复杂值的选项（例如：函数）不能在插件选项中设置，因为插件运行在 Node.js 环境下，所以我们无法将这些值和它们的上下文传递给浏览器。</p>
<p>这些选项将在配置参考中用 <Badge text="仅限客户端配置" type="warning" vertical="baseline"/> 标记。</p>
</li>
</ul>
<h2 id="添加评论" tabindex="-1"><a class="header-anchor" href="#添加评论"><span>添加评论</span></a></h2>
<p>该插件全局注册了一个组件 <code v-pre>&lt;CommentService /&gt;</code>。</p>
<ul>
<li>如果你是用户，你应该使用 <code v-pre>alias</code> 和布局槽来插入组件。 我们建议你在 <code v-pre>&lt;PageNav /&gt;</code> 组件之后插入评论组件 (<code v-pre>&lt;CommentService /&gt;</code>)，本页可作为一个 Demo 作为参考。</li>
<li>如果你是主题开发者，你应该将这个组件插入到你的主题布局中。</li>
</ul>
<p>默认情况下，<code v-pre>&lt;CommentService /&gt;</code> 组件是全局启用的，你可以在插件选项和页面 frontmatter 中使用 <code v-pre>comment</code> 选项来控制它。</p>
<ul>
<li>你可以通过在页面 frontmatter 中设置 <code v-pre>comment: false</code> 在本地禁用它。</li>
<li>要使其全局禁用，请在插件选项中将 <code v-pre>comment</code> 设置为 <code v-pre>false</code>。 然后你可以在页面 frontmatter 中设置 comment: true 以在局部启用它。</li>
</ul>
<p>你可以在页面 frontmatter 中设置 commentID 选项来自定义评论 ID，该 ID 用于标识要用于页面的评论存储项。默认情况下，它将是页面的 <code v-pre>path</code> ，这意味着如果你将站点部署到多个位置，站点间具有相同内容的页面将共享相同的评论数据。</p>
<h2 id="可用的评论服务" tabindex="-1"><a class="header-anchor" href="#可用的评论服务"><span>可用的评论服务</span></a></h2>
<p>目前你可以选择 <RouteLink to="/zh/plugins/blog/comment/giscus/">Giscus</RouteLink>、<RouteLink to="/zh/plugins/blog/comment/waline/">Waline</RouteLink>、<RouteLink to="/zh/plugins/blog/comment/artalk/">Artalk</RouteLink> 和 <RouteLink to="/zh/plugins/blog/comment/twikoo/">Twikoo</RouteLink>。</p>
<div class="custom-container tip"><p class="custom-container-title">推荐的评论服务</p>
<ul>
<li>面向程序员和开发人员: Giscus</li>
<li>面向公众: Waline</li>
</ul>
</div>
<h2 id="通用选项" tabindex="-1"><a class="header-anchor" href="#通用选项"><span>通用选项</span></a></h2>
<h3 id="provider" tabindex="-1"><a class="header-anchor" href="#provider"><span>provider <Badge text="仅限插件选项" type="warning"/></span></a></h3>
<ul>
<li>类型: <code v-pre>&quot;Artalk&quot; | &quot;Giscus&quot; | &quot;Twikoo&quot; | &quot;Waline&quot; | &quot;None&quot;</code></li>
<li>默认值: <code v-pre>&quot;None&quot;</code></li>
<li>详情：评论服务提供者。</li>
</ul>
<h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>comment</span></a></h3>
<ul>
<li>类型: <code v-pre>boolean</code></li>
<li>默认值: <code v-pre>true</code></li>
<li>详情：是否默认启用评论功能。</li>
</ul>
</div></template>


