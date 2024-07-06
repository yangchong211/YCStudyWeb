<template><div><h1 id="client-related" tabindex="-1"><a class="header-anchor" href="#client-related"><span>Client Related</span></a></h1>
<h2 id="composables-apis" tabindex="-1"><a class="header-anchor" href="#composables-apis"><span>Composables APIs</span></a></h2>
<h3 id="hasglobalcomponent" tabindex="-1"><a class="header-anchor" href="#hasglobalcomponent"><span>hasGlobalComponent</span></a></h3>
<p>Check whether a component is registered globally.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>Local import of the component does not affect the result.</li>
<li>When calling outside <code v-pre>setup</code> scope, you need to pass the <code v-pre>app</code> instance as the second parameter.</li>
</ol>
</div>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hasGlobalComponent</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> app<span class="token operator">?</span><span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details"><summary>Example</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// if you globally register `&lt;my-component>`</span></span>
<span class="line"><span class="token function">hasGlobalComponent</span><span class="token punctuation">(</span><span class="token string">'MyComponent'</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token function">hasGlobalComponent</span><span class="token punctuation">(</span><span class="token string">'my-component'</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token function">hasGlobalComponent</span><span class="token punctuation">(</span><span class="token string">'MyComponent2'</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
</div></details>
<h3 id="uselocaleconfig" tabindex="-1"><a class="header-anchor" href="#uselocaleconfig"><span>useLocaleConfig</span></a></h3>
<p>Get current locale config from locales settings.</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useLocaleConfig<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">LocaleData</span><span class="token operator">></span><span class="token punctuation">(</span></span>
<span class="line">  localesConfig<span class="token operator">:</span> RequiredLocaleConfig<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> ComputedRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details"><summary>Example</summary>
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
<h2 id="utils" tabindex="-1"><a class="header-anchor" href="#utils"><span>Utils</span></a></h2>
<h3 id="getheaders" tabindex="-1"><a class="header-anchor" href="#getheaders"><span>getHeaders</span></a></h3>
<p>Get headers from current page.</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getHeaders</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> GetHeadersOptions<span class="token punctuation">)</span> <span class="token operator">=></span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
</div><p><strong>Params:</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GetHeadersOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * The selector of the headers.</span>
<span class="line">   *</span>
<span class="line">   * It will be passed as an argument to `document.querySelectorAll(selector)`,</span>
<span class="line">   * so you should pass a `CSS Selector` string.</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> '#vp-content h1, #vp-content h2, #vp-content h3, #vp-content h4, #vp-content h5, #vp-content h6'</span>
<span class="line">   */</span></span>
<span class="line">  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Ignore specific elements within the header.</span>
<span class="line">   *</span>
<span class="line">   * The Array of `CSS Selector`</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> []</span>
<span class="line">   */</span></span>
<span class="line">  ignore<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * The levels of the headers</span>
<span class="line">   *</span>
<span class="line">   * - `false`: No headers.</span>
<span class="line">   * - `number`: only headings of that level will be displayed.</span>
<span class="line">   * - `[number, number]: headings level tuple, where the first number should be less than the second number, for example, `[2, 4]` which means all headings from `&lt;h2>` to `&lt;h4>` will be displayed.</span>
<span class="line">   * - `deep`: same as `[2, 6]`, which means all headings from `&lt;h2>` to `&lt;h6>` will be displayed.</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@default</span> 2</span>
<span class="line">   */</span></span>
<span class="line">  levels<span class="token operator">?</span><span class="token operator">:</span> HeaderLevels</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Result:</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * The level of the header</span>
<span class="line">   *</span>
<span class="line">   * `1` to `6` for `&lt;h1>` to `&lt;h6>`</span>
<span class="line">   */</span></span>
<span class="line">  level<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * The title of the header</span>
<span class="line">   */</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * The slug of the header</span>
<span class="line">   *</span>
<span class="line">   * Typically the `id` attr of the header anchor</span>
<span class="line">   */</span></span>
<span class="line">  slug<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Link of the header</span>
<span class="line">   *</span>
<span class="line">   * Typically using `#$<span class="token punctuation">{</span>slug<span class="token punctuation">}</span>` as the anchor hash</span>
<span class="line">   */</span></span>
<span class="line">  link<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * The children of the header</span>
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
<span class="line">    levels<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// only h2 and h3</span></span>
<span class="line">    ignore<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.badge'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// ignore the &lt;Badge /> within the header</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></details>
</div></template>


