<template><div><h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown"><span>Markdown</span></a></h1>
<NpmBadge package="@vuepress/theme-default" /><h2 id="custom-containers" tabindex="-1"><a class="header-anchor" href="#custom-containers"><span>Custom Containers</span></a></h2>
<ul>
<li>
<p>Usage:</p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line">::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span> [title]</span>
<span class="line">[content]</span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
</div><p>The <code v-pre>type</code> is required, and the <code v-pre>title</code> and <code v-pre>content</code> are optional.</p>
<p>Supported <code v-pre>type</code> :</p>
<ul>
<li><code v-pre>tip</code></li>
<li><code v-pre>warning</code></li>
<li><code v-pre>danger</code></li>
<li><code v-pre>details</code></li>
<li>Alias of <RouteLink to="/themes/default/components.html#codegroup">CodeGroup</RouteLink> and <RouteLink to="/themes/default/components.html#codegroupitem">CodeGroupItem</RouteLink>:
<ul>
<li><code v-pre>code-group</code></li>
<li><code v-pre>code-group-item</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>Example 1 (default title):</p>
</li>
</ul>
<p><strong>Input</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line">::: tip</span>
<span class="line">This is a tip</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: warning</span>
<span class="line">This is a warning</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: danger</span>
<span class="line">This is a dangerous warning</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: details</span>
<span class="line">This is a details block</span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is a tip</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This is a warning</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>This is a dangerous warning</p>
</div>
<details class="custom-container details">
<p>This is a details block</p>
</details>
<ul>
<li>Example 2 (custom title):</li>
</ul>
<p><strong>Input</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line">::: danger STOP</span>
<span class="line">Danger zone, do not proceed</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: details Click me to view the code</span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, VuePress!'</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>
<div class="custom-container danger"><p class="custom-container-title">STOP</p>
<p>Danger zone, do not proceed</p>
</div>
<details class="custom-container details"><summary>Click me to view the code</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, VuePress!'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></details>
<ul>
<li>Example 3 (code group alias):</li>
</ul>
<p><strong>Input</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line">:::: code-group</span>
<span class="line">::: code-group-item FOO</span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: code-group-item BAR</span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'bar'</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line">:::</span>
<span class="line">::::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>
<CodeGroup>
<CodeGroupItem title="FOO">
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span></span>
<span class="line"></span></code></pre>
</div></CodeGroupItem>
<CodeGroupItem title="BAR">
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'bar'</span></span>
<span class="line"></span></code></pre>
</div></CodeGroupItem>
</CodeGroup>
</div></template>


