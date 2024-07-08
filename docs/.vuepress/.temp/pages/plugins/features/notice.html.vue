<template><div><h1 id="notice" tabindex="-1"><a class="header-anchor" href="#notice"><span>notice</span></a></h1>
<NpmBadge package="@vuepress/plugin-notice" /><p>You can add notice popup with this plugin.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-notice@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> noticePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-notice'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">noticePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><p>You can set multiple notices for different paths in the site.</p>
<p>Each notice options needs to contain a <code v-pre>path</code> or <code v-pre>match</code> option, which is used to match the path. The <code v-pre>path</code> option is a string, which matches all paths starting with this, and the <code v-pre>match</code> option is a regexp to test the page route path against.</p>
<p>A notice configuration item includes:</p>
<ul>
<li>
<p><code v-pre>title</code>: Notice title, support both text and HTMLString</p>
</li>
<li>
<p><code v-pre>content</code>: Notice content, support both text and HTMLString</p>
</li>
<li>
<p><code v-pre>actions</code>: Notice actions</p>
<p>Should be an array of objects containing:</p>
<ul>
<li>
<p><code v-pre>text</code>: action text</p>
</li>
<li>
<p><code v-pre>link</code>: action link (optional).</p>
<p>Pathname will be treated as internal route link and handled by router, and full URL will be treated as external link and being opened in new window.</p>
</li>
<li>
<p><code v-pre>type</code>: <code v-pre>&quot;default&quot;</code> or <code v-pre>&quot;primary&quot;</code> (optional)</p>
<p>Default value is <code v-pre>&quot;default&quot;</code>.</p>
</li>
</ul>
</li>
</ul>
<p>Here is an example:</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Also, we provide some advanced option for you to control notice display.</p>
<div class="custom-container tip"><p class="custom-container-title">Display Control</p>
<p>By default, the notice will be shown whenever users enter the site, and it will remain closed in the session if users close it.</p>
<p>To prevent notice being shown again in next visit after users close it, you can set <code v-pre>showOnce: true</code> in notice options.</p>
<p>Also, notice remembering is based on notice title and notice content, you can set <code v-pre>noticeKey</code> option to use a key you want, so that you can edit notice without bothering users who already confirm them.</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">Full Screen</p>
<p>If you want to display a fullscreen popup, you can use <code v-pre>fullscreen: true</code> in notice options. We recommend you to use this together with <code v-pre>confirm: true</code>.</p>
<p>The notice will display in the center of screen, and the other places will be covered by a blur mask.</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">Close button</p>
<p>By default, there will be a close button on the right of notice, and users can close it by clicking it. Users can also close fullscreen notice by clicking the mask.</p>
<p>However, if you want users to confirm the notice, you can set <code v-pre>confirm: true</code>, so that users can only close the notice by hitting action buttons.</p>
</div>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>NoticeOptions[]</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">NoticeItemOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Notice title</span>
<span class="line">   */</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Notice content</span>
<span class="line">   */</span></span>
<span class="line">  content<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Notice key</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@description</span> Used to identify and store the notice status</span>
<span class="line">   */</span></span>
<span class="line">  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Whether show notice only once or show it in every visit</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> false</span>
<span class="line">   */</span></span>
<span class="line">  showOnce<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Whether the notice shall be confirmed</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> false</span>
<span class="line">   */</span></span>
<span class="line">  confirm<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Whether the notice should appear fullscreen</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> false</span>
<span class="line">   */</span></span>
<span class="line">  fullscreen<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Notice actions</span>
<span class="line">   */</span></span>
<span class="line">  actions<span class="token operator">?</span><span class="token operator">:</span> NoticeActionOption<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">NoticePathOptions</span> <span class="token keyword">extends</span> <span class="token class-name">NoticeItemOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Path prefix to match</span>
<span class="line">   */</span></span>
<span class="line">  path<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">NoticeMatchOptions</span> <span class="token keyword">extends</span> <span class="token class-name">NoticeItemOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A regexp matching notice path</span>
<span class="line">   */</span></span>
<span class="line">  match<span class="token operator">:</span> RegExp</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">NoticeOptions</span> <span class="token operator">=</span> NoticeMatchOptions <span class="token operator">|</span> NoticePathOptions</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Details:</p>
<p>Notice configuration.</p>
</li>
</ul>
</div></template>


