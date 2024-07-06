<template><div><h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown"><span>Markdown</span></a></h1>
<NpmBadge package="@vuepress/theme-default" /><h2 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器"><span>自定义容器</span></a></h2>
<ul>
<li>
<p>使用：</p>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line">::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span> [title]</span>
<span class="line">[content]</span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
</div><p><code v-pre>type</code> 是必需的， <code v-pre>title</code> 和 <code v-pre>content</code> 是可选的。</p>
<p>支持的 <code v-pre>type</code> 有：</p>
<ul>
<li><code v-pre>tip</code></li>
<li><code v-pre>warning</code></li>
<li><code v-pre>danger</code></li>
<li><code v-pre>details</code></li>
<li><RouteLink to="/zh/themes/default/components.html#codegroup">CodeGroup</RouteLink> 和 <RouteLink to="/zh/themes/default/components.html#codegroupitem">CodeGroupItem</RouteLink> 的别名：
<ul>
<li><code v-pre>code-group</code></li>
<li><code v-pre>code-group-item</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p>示例 1 （默认标题）：</p>
</li>
</ul>
<p><strong>输入</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line">::: tip</span>
<span class="line">这是一个提示</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: warning</span>
<span class="line">这是一个警告</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: danger</span>
<span class="line">这是一个危险警告</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: details</span>
<span class="line">这是一个 details 标签</span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>这是一个提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个 details 标签</p>
</details>
<ul>
<li>示例 2 （自定义标题）：</li>
</ul>
<p><strong>输入</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line">::: danger STOP</span>
<span class="line">危险区域，禁止通行</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: details 点击查看代码</span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span></span>
<span class="line"><span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你好，VuePress！'</span><span class="token punctuation">)</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>
<div class="custom-container danger"><p class="custom-container-title">STOP</p>
<p>危险区域，禁止通行</p>
</div>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你好，VuePress！'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
</div></details>
<ul>
<li>示例 3 （Code Group 别名）：</li>
</ul>
<p><strong>输入</strong></p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>
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


