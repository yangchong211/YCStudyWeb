<template><div><h1 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件"><span>内置组件</span></a></h1>
<NpmBadge package="@vuepress/theme-default" /><h2 id="badge" tabindex="-1"><a class="header-anchor" href="#badge"><span>Badge <Badge text="badge" /></span></a></h2>
<ul>
<li>
<p>Props:</p>
<ul>
<li>type
<ul>
<li>类型： <code v-pre>'tip' | 'warning' | 'danger'</code></li>
<li>默认值： <code v-pre>'tip'</code></li>
</ul>
</li>
<li>text
<ul>
<li>类型： <code v-pre>string</code></li>
<li>默认值： <code v-pre>''</code></li>
</ul>
</li>
<li>vertical
<ul>
<li>类型： <code v-pre>'top' | 'middle' | 'bottom' | undefined</code></li>
<li>默认值： <code v-pre>undefined</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<p><strong>输入</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tip<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v2<span class="token punctuation">"</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v2<span class="token punctuation">"</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v2<span class="token punctuation">"</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>输出</strong></p>
<ul>
<li>VuePress - <Badge type="tip" text="v2" vertical="top" /></li>
<li>VuePress - <Badge type="warning" text="v2" vertical="middle" /></li>
<li>VuePress - <Badge type="danger" text="v2" vertical="bottom" /></li>
</ul>
<h2 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup"><span>CodeGroup</span></a></h2>
<ul>
<li>
<p>详情：</p>
<p><a href="#codegroupitem">CodeGroupItem</a> 组件的 Wrapper 。</p>
</li>
</ul>
<h2 id="codegroupitem" tabindex="-1"><a class="header-anchor" href="#codegroupitem"><span>CodeGroupItem</span></a></h2>
<ul>
<li>
<p>Props:</p>
<ul>
<li>title
<ul>
<li>类型： <code v-pre>string</code></li>
<li>是否必需： <code v-pre>true</code></li>
</ul>
</li>
<li>active
<ul>
<li>类型： <code v-pre>boolean</code></li>
<li>默认值： <code v-pre>false</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>详情：</p>
<p>该组件必须放置在 <a href="#codegroup">CodeGroup</a> 组件的内部。</p>
<p>可以通过 <code v-pre>active</code> Prop 来设置初始激活的元素。如果不设置，默认激活第一个元素。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<p><strong>输入</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroup</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroupItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pnpm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">bash:no-line-numbers</span></span>
<span class="line"><span class="token code-block language-bash"><span class="token function">pnpm</span> <span class="token function">install</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroupItem</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroupItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yarn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">bash:no-line-numbers</span></span>
<span class="line"><span class="token code-block language-bash"><span class="token function">yarn</span> <span class="token function">install</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroupItem</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeGroupItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>npm<span class="token punctuation">"</span></span> <span class="token attr-name">active</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">bash:no-line-numbers</span></span>
<span class="line"><span class="token code-block language-bash"><span class="token function">npm</span> <span class="token function">install</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroupItem</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeGroup</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>
<CodeGroup>
  <CodeGroupItem title="pnpm">
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">pnpm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
</div>  </CodeGroupItem>
  <CodeGroupItem title="yarn">
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">yarn</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
</div>  </CodeGroupItem>
  <CodeGroupItem title="npm" active>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
</div>  </CodeGroupItem>
</CodeGroup>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>你必须在 <code v-pre>&lt;CodeGroupItem&gt;</code> 的开始标签和代码块之间添加一个空行，否则代码块无法被 Markdown 正确解析。</p>
<p>所有内容首先都必须是合法的 Markdown ，然后才是一个 Vue SFC 。</p>
<p>了解更多： <a href="https://v2.vuepress.vuejs.org/zh/advanced/cookbook/markdown-and-vue-sfc.html" target="_blank" rel="noopener noreferrer">Cookbook &gt; Markdown 与 Vue SFC</a></p>
<p>或者你可以选择使用 <RouteLink to="/zh/themes/default/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">自定义容器</RouteLink> 。</p>
</div>
</div></template>


