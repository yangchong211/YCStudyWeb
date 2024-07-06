<template><div><h1 id="共享方法" tabindex="-1"><a class="header-anchor" href="#共享方法"><span>共享方法</span></a></h1>
<p>以下函数在 Node.js 和客户端上均可用。</p>
<h2 id="数据相关" tabindex="-1"><a class="header-anchor" href="#数据相关"><span>数据相关</span></a></h2>
<p>此方法在 MarkdownIt 插件中很有用。有些时候你可能需要在 Markdown 插件中生成组件，并将复杂的数据写入到组件属性中，一个通常做法是使用 <code v-pre>JSON.stringify</code> + <code v-pre>encodeURIComponent</code>，并在客户端 <code v-pre>decodeURIComponent</code> + <code v-pre>JSON.parse</code>。但如果内容包含很多特殊字符，转换结果会很长。</p>
<p>所以我们提供 <code v-pre>encodeData</code> 和 <code v-pre>decodeData</code> 来压缩和编码内容。</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> encodeData<span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">  data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">  level<span class="token operator">:</span> DeflateOptions<span class="token punctuation">[</span><span class="token string">'level'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">decodeData</span><span class="token operator">:</span> <span class="token punctuation">(</span>compressed<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span></span>
<span class="line"></span></code></pre>
</div><details class="custom-container details">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">{</span>
<span class="line">  "type": "bar",</span>
<span class="line">  "data": {</span>
<span class="line">    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],</span>
<span class="line">    "datasets": [</span>
<span class="line">      {</span>
<span class="line">        "label": "# of Votes",</span>
<span class="line">        "data": [12, 19, 3, 5, 2, 3],</span>
<span class="line">        "backgroundColor": [</span>
<span class="line">          "rgba(255, 99, 132, 0.2)",</span>
<span class="line">          "rgba(54, 162, 235, 0.2)",</span>
<span class="line">          "rgba(255, 206, 86, 0.2)",</span>
<span class="line">          "rgba(75, 192, 192, 0.2)",</span>
<span class="line">          "rgba(153, 102, 255, 0.2)",</span>
<span class="line">          "rgba(255, 159, 64, 0.2)"</span>
<span class="line">        ],</span>
<span class="line">        "borderColor": [</span>
<span class="line">          "rgba(255, 99, 132, 1)",</span>
<span class="line">          "rgba(54, 162, 235, 1)",</span>
<span class="line">          "rgba(255, 206, 86, 1)",</span>
<span class="line">          "rgba(75, 192, 192, 1)",</span>
<span class="line">          "rgba(153, 102, 255, 1)",</span>
<span class="line">          "rgba(255, 159, 64, 1)"</span>
<span class="line">        ],</span>
<span class="line">        "borderWidth": 1</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  "options": {</span>
<span class="line">    "scales": {</span>
<span class="line">      "y": {</span>
<span class="line">        "beginAtZero": true</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> prop <span class="token operator">=</span> <span class="token function">encodeData</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span> <span class="token comment">// "eJyNUsFOwzAMve8rrHABKZqWlg5WxAE4cARxAMHEIV1NmQhNlaaCCe3fcdKtW0sLWGpjxy/v+UV512mlcIyfhTa2hHP4GgHYVYExsEQaxqlMpZWxbwAomaAqY5izO0wZB3apKnTrIyqlP1x2bRBzl9xWplC+eWNkniF7dmw1X4nWsfgaNtwNP2kfgH6Be22x9CPUUQ8yFwEHMeMQcog4UBFuiF0kcvGWGV3l6ZVW2uw0XDCTJfIwiOjYjAhESIcn4+BoT2MLio6pP6V+EBJ6AOSZgsmUwyl9A6ATwoiZn3lYTkTkRkycnuP8TU9ENPqUxuuA9i9BmxTNPy9A/G2/F9I23wtpW++FdIwPKzW2W5Afph+WqX2NQWz313XicT7XhV3qnB5f/ejKhVTYVACrXUqUmC3zC/uERsdgTYUdVr/Qb302+gZxe7S/"</span></span>
<span class="line"></span>
<span class="line"><span class="token function">decodeData</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span> <span class="token comment">// will be the original content</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// if you use `encodeURIComponent`, it will be much longer</span></span>
<span class="line"><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span> <span class="token comment">// '%0A%7B%0A%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22Red%22%2C%20%22Blue%22%2C%20%22Yellow%22%2C%20%22Green%22%2C%20%22Purple%22%2C%20%22Orange%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%23%20of%20Votes%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B12%2C%2019%2C%203%2C%205%2C%202%2C%203%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%200.2)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%201)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderWidth%22%3A%201%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22y%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22beginAtZero%22%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="类型助手" tabindex="-1"><a class="header-anchor" href="#类型助手"><span>类型助手</span></a></h2>
<ul>
<li><code v-pre>isDef(x)</code>: 判断 x 是否定义。</li>
<li><code v-pre>isBoolean(x)</code>: 判断 x 是否为布尔值。</li>
<li><code v-pre>isString(x)</code>: 判断 x 是否为字符串。</li>
<li><code v-pre>isNumber(x)</code>: 判断 x 是否为数字。</li>
<li><code v-pre>isPlainObject(x)</code>: 判断值是否为纯对象。</li>
<li><code v-pre>isArray(x)</code>: 判断 x 是否为数组</li>
<li><code v-pre>isFunction(x)</code>: 判断 x 是否为函数。</li>
<li><code v-pre>isRegExp(x)</code>: 判断 x 是否为正则表达式</li>
</ul>
<h2 id="字符串相关" tabindex="-1"><a class="header-anchor" href="#字符串相关"><span>字符串相关</span></a></h2>
<ul>
<li><code v-pre>startsWith(a, b)</code>: 判断字符串 a 是否以指定字符串 b 开头</li>
<li><code v-pre>endsWith(a, b)</code>: 判断字符串 a 是否以指定字符串 b 结尾</li>
</ul>
<p>当 a 不是字符串时返回 <code v-pre>false</code></p>
<h2 id="对象相关" tabindex="-1"><a class="header-anchor" href="#对象相关"><span>对象相关</span></a></h2>
<ul>
<li>
<p><code v-pre>keys(x)</code>: 以数组形式返回对象 x 的键</p>
</li>
<li>
<p><code v-pre>values(x)</code>: 以数组形式返回对象 x 的值</p>
</li>
<li>
<p><code v-pre>entries(x)</code>: 将对象 x 转换为键值对数组。</p>
</li>
<li>
<p><code v-pre>fromEntries(x)</code>: 将键值对数组 x 转换为对象。</p>
</li>
<li>
<p><code v-pre>deepAssign(x, y, ...)</code>: <code v-pre>Object.assign</code> 的深度版本。</p>
<details class="custom-container details"><summary>示例</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token comment">// or @vuepress/helper/client</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> deepAssign <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/helper'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  optionA<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    optionA1<span class="token operator">:</span> <span class="token string">'defaultOptionA1'</span><span class="token punctuation">,</span></span>
<span class="line">    optionA2<span class="token operator">:</span> <span class="token string">'defaultOptionA2'</span><span class="token punctuation">,</span></span>
<span class="line">    optionA3<span class="token operator">:</span> <span class="token string">'defaultOptionA3'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  optionB<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  optionC<span class="token operator">:</span> <span class="token string">'optionC'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> userOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  optionA<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    optionA1<span class="token operator">:</span> <span class="token string">'optionA1'</span><span class="token punctuation">,</span></span>
<span class="line">    optionA2<span class="token operator">:</span> <span class="token string">'optionA2'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  optionB<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">deepAssign</span><span class="token punctuation">(</span>defaultOptions<span class="token punctuation">,</span> userOptions<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// {</span></span>
<span class="line"><span class="token comment">//   optionA: {</span></span>
<span class="line"><span class="token comment">//     optionA1: "optionA1",</span></span>
<span class="line"><span class="token comment">//     optionA2: "optionA2",</span></span>
<span class="line"><span class="token comment">//     optionA3: "defaultOptionA3",</span></span>
<span class="line"><span class="token comment">//   },</span></span>
<span class="line"><span class="token comment">//   optionB: false,</span></span>
<span class="line"><span class="token comment">//   optionC: "optionC",</span></span>
<span class="line"><span class="token comment">// }</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</li>
</ul>
<h2 id="日期相关" tabindex="-1"><a class="header-anchor" href="#日期相关"><span>日期相关</span></a></h2>
<ul>
<li>
<p><code v-pre>getDate(x)</code>: 将输入 x 转换为日期，可以支持 Date，时间戳，日期字符串。日期字符串的支持度以环境的 <code v-pre>Date.parse</code> 支持度为准。当不能转换为日期时返回 <code v-pre>null</code></p>
<details class="custom-container details"><summary>示例</summary>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token string">'2021-01-01'</span><span class="token punctuation">)</span> <span class="token comment">// a Date object represents 2021-01-01</span></span>
<span class="line"><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token number">1609459200000</span><span class="token punctuation">)</span> <span class="token comment">// a Date object represents 2021-01-01</span></span>
<span class="line"><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token string">'2021-01-01T00:00:00.000Z'</span><span class="token punctuation">)</span> <span class="token comment">// a Date object represents 2021-01-01</span></span>
<span class="line"><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token string">'2021/01/01'</span><span class="token punctuation">)</span> <span class="token comment">// a Date object represents 2021-01-01 (might be null in some browsers)</span></span>
<span class="line"><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token string">'invalid date'</span><span class="token punctuation">)</span> <span class="token comment">// null</span></span>
<span class="line"><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// null</span></span>
<span class="line"><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token comment">// null</span></span>
<span class="line"></span></code></pre>
</div></details>
</li>
<li>
<p><code v-pre>dateSorter</code>: 将可转换为日期的值从新到旧排序，不能转换为日期的值会在最后。</p>
<details class="custom-container details"><summary>示例</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">'2020-01-01'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">1609459200000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'2022-01-01T00:00:00.000Z'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'2023/01/01'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'invalid date'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">undefined</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">-</span><span class="token number">32</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>dateSorter<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// [</span></span>
<span class="line"><span class="token comment">//   '2023/01/01',</span></span>
<span class="line"><span class="token comment">//   '2022-01-01T00:00:00.000Z',</span></span>
<span class="line"><span class="token comment">//   1609459200000,</span></span>
<span class="line"><span class="token comment">//   '2020-01-01',</span></span>
<span class="line"><span class="token comment">//   'invalid date',</span></span>
<span class="line"><span class="token comment">//   undefined,</span></span>
<span class="line"><span class="token comment">//   -32,</span></span>
<span class="line"><span class="token comment">// ]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</li>
</ul>
<h2 id="链接相关" tabindex="-1"><a class="header-anchor" href="#链接相关"><span>链接相关</span></a></h2>
<ul>
<li><code v-pre>isLinkHttp(x)</code>: x 是否是有效的 HTTP URL。</li>
<li><code v-pre>isLinkWithProtocol(x)</code>: x 是否是有效的带有协议的 URL。</li>
<li><code v-pre>isLinkExternal(x)</code>: x 是否是有效的外部 URL。</li>
<li><code v-pre>isLinkAbsolute(x)</code>: x 是否是有效的绝对 URL。</li>
<li><code v-pre>ensureEndingSlash(x)</code>: 确保 x 以斜杠结尾。</li>
<li><code v-pre>ensureLeadingSlash(x)</code>: 确保 x 以斜杠开头。</li>
<li><code v-pre>removeEndingSlash(x)</code>: 确保 x 不以斜杠结尾。</li>
<li><code v-pre>removeLeadingSlash(x)</code>: 确保 x 不以斜杠开头。</li>
</ul>
</div></template>


