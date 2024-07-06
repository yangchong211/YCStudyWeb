<template><div><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>git</span></a></h1>
<NpmBadge package="@vuepress/plugin-git" /><p>该插件会收集你的页面的 Git 信息，包括创建和更新时间、贡献者等。</p>
<p>默认主题的 <RouteLink to="/zh/themes/default/config.html#lastupdated">lastUpdated</RouteLink> 和 <RouteLink to="/zh/themes/default/config.html#contributors">contributors</RouteLink> 就是由该插件支持的。</p>
<p>该插件主要用于开发主题，大部分情况下你不需要直接使用它。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-git@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> gitPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-git'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">gitPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 配置项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="git-仓库" tabindex="-1"><a class="header-anchor" href="#git-仓库"><span>Git 仓库</span></a></h2>
<p>该插件要求你的项目在 <a href="https://git-scm.com/book/en/Git-Basics-Getting-a-Git-Repository" target="_blank" rel="noopener noreferrer">Git 仓库</a> 下，这样它才能从提交历史记录中收集信息。</p>
<p>在构建站点时，你应该确保所有的提交记录是可以获取到的。举例来说， CI 工作流通常会在克隆你的仓库时添加 <a href="https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt" target="_blank" rel="noopener noreferrer">--depth 1</a> 参数来避免拉取全部的提交记录，因此你需要禁用这个功能，以便该插件在 CI 可以中正常使用。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>该插件会显著降低准备数据的速度，特别是在你的页面数量很多的时候。你可以考虑在 <code v-pre>dev</code> 模式下禁用该插件来获取更好的开发体验。</p>
</div>
<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<h3 id="createdtime" tabindex="-1"><a class="header-anchor" href="#createdtime"><span>createdTime</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否收集页面的创建时间。</p>
</li>
</ul>
<h3 id="updatedtime" tabindex="-1"><a class="header-anchor" href="#updatedtime"><span>updatedTime</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否收集页面的更新时间。</p>
</li>
</ul>
<h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors"><span>contributors</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>boolean</code></p>
</li>
<li>
<p>默认值： <code v-pre>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否收集页面的贡献者。</p>
</li>
</ul>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<h3 id="gitinclude" tabindex="-1"><a class="header-anchor" href="#gitinclude"><span>gitInclude</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>string[]</code></p>
</li>
<li>
<p>详情：</p>
<p>文件相对路径组成的数组，该数组中的文件会在计算页面数据时被包含在内。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">gitInclude</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> relative/path/to/file1</span>
<span class="line">  <span class="token punctuation">-</span> relative/path/to/file2</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><h2 id="页面数据" tabindex="-1"><a class="header-anchor" href="#页面数据"><span>页面数据</span></a></h2>
<p>该插件会向页面数据中添加一个 <code v-pre>git</code> 字段。</p>
<p>在使用该插件后，可以在页面数据中获取该插件收集到的 Git 信息：</p>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GitPluginPageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-git'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> usePageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress/client'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token generic-function"><span class="token function">usePageData</span><span class="token generic class-name"><span class="token operator">&lt;</span>GitPluginPageData<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>value<span class="token punctuation">.</span>git<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h3 id="git-createdtime" tabindex="-1"><a class="header-anchor" href="#git-createdtime"><span>git.createdTime</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>number</code></p>
</li>
<li>
<p>详情：</p>
<p>页面第一次提交的 Unix 毫秒时间戳。</p>
<p>该属性将取当前页面及 <a href="#gitinclude">gitInclude</a> 中所列文件的第一次提交的时间戳的最小值。</p>
</li>
</ul>
<h3 id="git-updatedtime" tabindex="-1"><a class="header-anchor" href="#git-updatedtime"><span>git.updatedTime</span></a></h3>
<ul>
<li>
<p>类型： <code v-pre>number</code></p>
</li>
<li>
<p>详情：</p>
<p>页面最后一次提交的 Unix 毫秒时间戳。</p>
<p>该属性将取当前页面及 <a href="#gitinclude">gitInclude</a> 中所列文件的最后一次提交的时间戳的最大值。</p>
</li>
</ul>
<h3 id="git-contributors" tabindex="-1"><a class="header-anchor" href="#git-contributors"><span>git.contributors</span></a></h3>
<ul>
<li>类型： <code v-pre>GitContributor[]</code></li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">GitContributor</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  email<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  commits<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>
<p>详情：</p>
<p>页面的贡献者信息。</p>
<p>该属性将会包含 <a href="#gitinclude">gitInclude</a> 所列文件的贡献者。</p>
</li>
</ul>
</div></template>


