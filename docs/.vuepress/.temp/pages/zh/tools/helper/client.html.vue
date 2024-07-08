<template><div><h1 id="客户端相关" tabindex="-1"><a class="header-anchor" href="#客户端相关"><span>客户端相关</span></a></h1>
<h2 id="可组合-api" tabindex="-1"><a class="header-anchor" href="#可组合-api"><span>可组合 API</span></a></h2>
<h3 id="hasglobalcomponent" tabindex="-1"><a class="header-anchor" href="#hasglobalcomponent"><span>hasGlobalComponent</span></a></h3>
<p>检查组件是否已全局注册。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ol>
<li>组件的局部导入不影响结果。</li>
<li>当在 <code v-pre>setup</code> 之外调用时，你需要将 <code v-pre>app</code> 实例作为第二个参数传递。</li>
</ol>
</div>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hasGlobalComponent</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> app<span class="token operator">?</span><span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details"><summary>示例</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// 如果你全局注册了 `&lt;my-component>`</span></span>
<span class="line"><span class="token function">hasGlobalComponent</span><span class="token punctuation">(</span><span class="token string">'MyComponent'</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token function">hasGlobalComponent</span><span class="token punctuation">(</span><span class="token string">'my-component'</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token function">hasGlobalComponent</span><span class="token punctuation">(</span><span class="token string">'MyComponent2'</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
</div></details>
<h3 id="uselocaleconfig" tabindex="-1"><a class="header-anchor" href="#uselocaleconfig"><span>useLocaleConfig</span></a></h3>
<p>从语言环境设置中获取当前语言环境配置。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useLocaleConfig<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">LocaleData</span><span class="token operator">></span><span class="token punctuation">(</span></span>
<span class="line">  localesConfig<span class="token operator">:</span> RequiredLocaleConfig<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> ComputedRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details"><summary>示例</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> localesCOnfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token string">'Title'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token string">'标题'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token function">useLocaleConfig</span><span class="token punctuation">(</span>localesConfig<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// under `/page`</span></span>
<span class="line">locale<span class="token punctuation">.</span>value <span class="token comment">// 'Title'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// under `/zh/page`</span></span>
<span class="line">locale<span class="token punctuation">.</span>value <span class="token comment">// '标题'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具"><span>工具</span></a></h2>
<h3 id="getheaders" tabindex="-1"><a class="header-anchor" href="#getheaders"><span>getHeaders</span></a></h3>
<p>获取当前页面指定的 标题列表。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getHeaders</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> GetHeadersOptions<span class="token punctuation">)</span> <span class="token operator">=></span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
</div><p><strong>参数:</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GetHeadersOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 页面标题选择器</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> '#vp-content h1, #vp-content h2, #vp-content h3, #vp-content h4, #vp-content h5, #vp-content h6'</span>
<span class="line">   */</span></span>
<span class="line">  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 忽略标题内的特定元素选择器</span>
<span class="line">   *</span>
<span class="line">   * 它将作为 `document.querySelectorAll` 的参数。</span>
<span class="line">   * 因此，你应该传入一个 `CSS 选择器` 字符串</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> []</span>
<span class="line">   */</span></span>
<span class="line">  ignore<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 指定获取的标题层级</span>
<span class="line">   *</span>
<span class="line">   * `1` 至 `6` 表示 `&lt;h1>` 至 `&lt;h6>`</span>
<span class="line">   *</span>
<span class="line">   * - `false`: 不返回标题列表</span>
<span class="line">   * - `number`: 只获取指定的单个层级的标题。</span>
<span class="line">   * - `[number, number]: 标题层级元组，第一个数字应小于第二个数字。例如，`[2, 4]` 表示显示从 `&lt;h2>` 到 `&lt;h4>` 的所有标题。</span>
<span class="line">   * - `deep`: 等同于 `[2, 6]`, 表示获取从 `&lt;h2>` 到 `&lt;h6>` 的所有标题。</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 2</span>
<span class="line">   */</span></span>
<span class="line">  levels<span class="token operator">?</span><span class="token operator">:</span> HeaderLevels</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回结果:</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 当前标题的层级</span>
<span class="line">   *</span>
<span class="line">   * `1` 至 `6` 表示 `&lt;h1>` 至 `&lt;h6>`</span>
<span class="line">   */</span></span>
<span class="line">  level<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 当前标题的内容</span>
<span class="line">   */</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 标题的 标识</span>
<span class="line">   *</span>
<span class="line">   * 这通常是标题元素的 `id` 属性值</span>
<span class="line">   */</span></span>
<span class="line">  slug<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 标题的链接</span>
<span class="line">   *</span>
<span class="line">   * 通常使用`#$<span class="token punctuation">{</span>slug<span class="token punctuation">}</span>`作为锚点哈希</span>
<span class="line">   */</span></span>
<span class="line">  link<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 标题的子标题列表</span>
<span class="line">   */</span></span>
<span class="line">  children<span class="token operator">:</span> Header<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">HeaderLevels</span> <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token string">'deep'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MenuItem</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>Header<span class="token punctuation">,</span> <span class="token string">'slug'</span> <span class="token operator">|</span> <span class="token string">'children'</span><span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span></span>
<span class="line">  element<span class="token operator">:</span> HTMLHeadElement</span>
<span class="line">  children<span class="token operator">?</span><span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Examples</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">'#vp-content :where(h1,h2,h3,h4,h5,h6)'</span><span class="token punctuation">,</span></span>
<span class="line">    levels<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 只有 h2 和 h3</span></span>
<span class="line">    ignore<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.badge'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 忽略标题内的 &lt;Badge /></span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></details>
</div></template>


