<template><div><h1 id="notice" tabindex="-1"><a class="header-anchor" href="#notice"><span>notice</span></a></h1>
<NpmBadge package="@vuepress/plugin-notice" /><p>你可以通过此插件添加通知弹窗。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-notice@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> noticePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-notice'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">noticePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 选项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>你可以为站点的不同路径设置多个公告。</p>
<p>每个公告配置需要包含一个 <code v-pre>path</code> 或 <code v-pre>match</code> 选项，用于匹配路径。<code v-pre>path</code> 选项为字符串，匹配所有以此开头的路径，<code v-pre>match</code> 选项为正则表达式以和所有路由测试匹配。</p>
<p>一个公告配置包括:</p>
<ul>
<li>
<p><code v-pre>title</code>: 通知标题，支持文本和 HTMLString</p>
</li>
<li>
<p><code v-pre>content</code>: 通知内容，支持文本和 HTMLString</p>
</li>
<li>
<p><code v-pre>actions</code>: 通知操作</p>
<p>应该是包含以下内容的对象数组:</p>
<ul>
<li>
<p><code v-pre>text</code>: 动作文本</p>
</li>
<li>
<p><code v-pre>link</code> (可选): 操作链接。</p>
<p>绝对路径会被当作内部路处理，完整 URL 被当作外部链接在新窗口打。</p>
</li>
<li>
<p><code v-pre>type</code> (可选): <code v-pre>&quot;default&quot;</code> 或 <code v-pre>&quot;primary&quot;</code></p>
<p>默认值为 <code v-pre>&quot;default&quot;</code>。</p>
</li>
</ul>
</li>
</ul>
<p>这是一个例子:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> noticePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-notice'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">noticePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      config<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">          title<span class="token operator">:</span> <span class="token string">'Notice Title'</span><span class="token punctuation">,</span></span>
<span class="line">          content<span class="token operator">:</span> <span class="token string">'Notice Content'</span><span class="token punctuation">,</span></span>
<span class="line">          actions<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              text<span class="token operator">:</span> <span class="token string">'Primary Action'</span><span class="token punctuation">,</span></span>
<span class="line">              link<span class="token operator">:</span> <span class="token string">'https://theme-hope.vuejs.press/'</span><span class="token punctuation">,</span></span>
<span class="line">              type<span class="token operator">:</span> <span class="token string">'primary'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Default Action'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          path<span class="token operator">:</span> <span class="token string">'/zh/'</span><span class="token punctuation">,</span></span>
<span class="line">          title<span class="token operator">:</span> <span class="token string">'Notice Title'</span><span class="token punctuation">,</span></span>
<span class="line">          content<span class="token operator">:</span> <span class="token string">'Notice Content'</span><span class="token punctuation">,</span></span>
<span class="line">          actions<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              text<span class="token operator">:</span> <span class="token string">'Primary Action'</span><span class="token punctuation">,</span></span>
<span class="line">              link<span class="token operator">:</span> <span class="token string">'https://theme-hope.vuejs.press/'</span><span class="token punctuation">,</span></span>
<span class="line">              type<span class="token operator">:</span> <span class="token string">'primary'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">'Default Action'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，我们还为你提供了一些高级选项来控制通知显示。</p>
<div class="custom-container tip"><p class="custom-container-title">通知显示控件</p>
<p>默认情况下，每当用户进入网站时都会显示该通知，如果用户关闭该网站，该通知将在此期间保持关闭状态。</p>
<p>为了防止在用户关闭通知后下次访问时再次显示通知，你可以在公告配置中设置 <code v-pre>showOnce: true</code>。</p>
<p>另外，通知记忆是根据通知标题和通知内容来记忆的，你可以设置 <code v-pre>key</code> 选项来使用你想要的记忆键值，这样你就可以编辑通知而不会打扰已经确认过的用户。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">全屏</p>
<p>如果要显示全屏弹出窗口，可以在公告配置中使用 <code v-pre>fullscreen: true</code>。我们建议你将它与 <code v-pre>confirm: true</code> 一起使用。</p>
<p>通知将显示在屏幕中央，其他地方将被模糊遮罩覆盖。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">关闭逻辑</p>
<p>默认情况下，通知右侧会有一个关闭按钮，用户可以点击关闭。</p>
<p>但是，如果你希望用户确认通知，你可以设置 <code v-pre>confirm: true</code>，这样用户只能通过点击操作按钮来关闭通知。</p>
</div>
<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2>
<h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h3>
<ul>
<li>
<p>类型：<code v-pre>NoticeOptions[]</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">NoticeItemOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 通知标题</span>
<span class="line">   */</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 通知内容</span>
<span class="line">   */</span></span>
<span class="line">  content<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Notice 的 key</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> 用于标识和存储 notice 的状态</span>
<span class="line">   */</span></span>
<span class="line">  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 是否只显示一次通知</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> false</span>
<span class="line">   */</span></span>
<span class="line">  showOnce<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 通知是否需要确认</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> false</span>
<span class="line">   */</span></span>
<span class="line">  confirm<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 通知是否应该全屏显示</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> false</span>
<span class="line">   */</span></span>
<span class="line">  fullscreen<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 通知操作</span>
<span class="line">   */</span></span>
<span class="line">  actions<span class="token operator">?</span><span class="token operator">:</span> NoticeActionOption<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">NoticePathOptions</span> <span class="token keyword">extends</span> <span class="token class-name">NoticeItemOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 公告需要匹配的前缀路径</span>
<span class="line">   */</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">NoticeMatchOptions</span> <span class="token keyword">extends</span> <span class="token class-name">NoticeItemOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 公告路径的正则匹配</span>
<span class="line">   */</span></span>
<span class="line">  match<span class="token operator">:</span> RegExp</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">NoticeOptions</span> <span class="token operator">=</span> NoticeMatchOptions <span class="token operator">|</span> NoticePathOptions</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>详情：</p>
<p>通知配置</p>
</li>
</ul>
</div></template>


