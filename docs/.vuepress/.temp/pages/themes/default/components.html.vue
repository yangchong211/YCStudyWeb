<template><div><h1 id="built-in-components" tabindex="-1"><a class="header-anchor" href="#built-in-components"><span>Built-in Components</span></a></h1>
<NpmBadge package="@vuepress/theme-default" /><h2 id="badge" tabindex="-1"><a class="header-anchor" href="#badge"><span>Badge <Badge text="badge" /></span></a></h2>
<ul>
<li>
<p>Props:</p>
<ul>
<li>type
<ul>
<li>Type: <code v-pre>'tip' | 'warning' | 'danger'</code></li>
<li>Default: <code v-pre>'tip'</code></li>
</ul>
</li>
<li>text
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Default: <code v-pre>''</code></li>
</ul>
</li>
<li>vertical
<ul>
<li>Type: <code v-pre>'top' | 'middle' | 'bottom' | undefined</code></li>
<li>Default: <code v-pre>undefined</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<p><strong>Input</strong></p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tip<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v2<span class="token punctuation">"</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v2<span class="token punctuation">"</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>v2<span class="token punctuation">"</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
</div><p><strong>Output</strong></p>
<ul>
<li>VuePress - <Badge type="tip" text="v2" vertical="top" /></li>
<li>VuePress - <Badge type="warning" text="v2" vertical="middle" /></li>
<li>VuePress - <Badge type="danger" text="v2" vertical="bottom" /></li>
</ul>
<h2 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup"><span>CodeGroup</span></a></h2>
<ul>
<li>
<p>Details:</p>
<p>Wrapper of the <a href="#codegroupitem">CodeGroupItem</a> components.</p>
</li>
</ul>
<h2 id="codegroupitem" tabindex="-1"><a class="header-anchor" href="#codegroupitem"><span>CodeGroupItem</span></a></h2>
<ul>
<li>
<p>Props:</p>
<ul>
<li>title
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: <code v-pre>true</code></li>
</ul>
</li>
<li>active
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Default: <code v-pre>false</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>Details:</p>
<p>This component must be placed inside a <a href="#codegroup">CodeGroup</a> component.</p>
<p>Use the <code v-pre>active</code> prop to set the initial active item, or the first item will be activated by default.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<p><strong>Input</strong></p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>
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
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>You must add an empty line between the starting tag of <code v-pre>&lt;CodeGroupItem&gt;</code> and the code fence, otherwise the code fence will not be parsed correctly by Markdown.</p>
<p>All content must be valid Markdown first, and then a Vue SFC.</p>
<p>Learn more: <a href="https://v2.vuepress.vuejs.org/advanced/cookbook/markdown-and-vue-sfc.html" target="_blank" rel="noopener noreferrer">Cookbook &gt; Markdown and Vue SFC</a></p>
<p>Alternatively, you can use the <RouteLink to="/themes/default/markdown.html#custom-containers">custom containers</RouteLink>.</p>
</div>
</div></template>


