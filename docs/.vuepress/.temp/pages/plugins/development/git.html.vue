<template><div><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>git</span></a></h1>
<NpmBadge package="@vuepress/plugin-git" /><p>This plugin will collect git information of your pages, including the created and updated time, the contributors, etc.</p>
<p>The <RouteLink to="/themes/default/config.html#lastupdated">lastUpdated</RouteLink> and <RouteLink to="/themes/default/config.html#contributors">contributors</RouteLink> of default theme is powered by this plugin.</p>
<p>This plugin is mainly used to develop themes. You won't need to use it directly in most cases.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-git@next</span>
<span class="line"></span></code></pre>
</div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> gitPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-git'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">gitPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><h2 id="git-repository" tabindex="-1"><a class="header-anchor" href="#git-repository"><span>Git Repository</span></a></h2>
<p>This plugin requires your project to be inside a <a href="https://git-scm.com/book/en/Git-Basics-Getting-a-Git-Repository" target="_blank" rel="noopener noreferrer">Git Repository</a>, so that it can collect information from the commit history.</p>
<p>You should ensure all commits are available when building your site. For example, CI workflows usually clone your repository with <a href="https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt" target="_blank" rel="noopener noreferrer">--depth 1</a> to avoid fetching all commits, so you should disable the behavior to make this plugin work properly in CI.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This plugin will significantly slow down the speed of data preparation, especially when you have a lot of pages. You can consider disabling this plugin in <code v-pre>dev</code> mode to get better development experience.</p>
</div>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>
<h3 id="createdtime" tabindex="-1"><a class="header-anchor" href="#createdtime"><span>createdTime</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether to collect page created time or not.</p>
</li>
</ul>
<h3 id="updatedtime" tabindex="-1"><a class="header-anchor" href="#updatedtime"><span>updatedTime</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether to collect page updated time or not.</p>
</li>
</ul>
<h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors"><span>contributors</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>boolean</code></p>
</li>
<li>
<p>Default: <code v-pre>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether to collect page contributors or not.</p>
</li>
</ul>
<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2>
<h3 id="gitinclude" tabindex="-1"><a class="header-anchor" href="#gitinclude"><span>gitInclude</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>string[]</code></p>
</li>
<li>
<p>Details:</p>
<p>An array of relative paths to be included when calculating page data.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-markdown" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">gitInclude</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> relative/path/to/file1</span>
<span class="line">  <span class="token punctuation">-</span> relative/path/to/file2</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
</div><h2 id="page-data" tabindex="-1"><a class="header-anchor" href="#page-data"><span>Page Data</span></a></h2>
<p>This plugin will add a <code v-pre>git</code> field to page data.</p>
<p>After using this plugin, you can get the collected git information in page data:</p>
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
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Details:</p>
<p>Unix timestamp in milliseconds of the first commit of the page.</p>
<p>This attribute would take the minimum of the first commit timestamps of the current page and the files listed in <a href="#gitinclude">gitInclude</a>.</p>
</li>
</ul>
<h3 id="git-updatedtime" tabindex="-1"><a class="header-anchor" href="#git-updatedtime"><span>git.updatedTime</span></a></h3>
<ul>
<li>
<p>Type: <code v-pre>number</code></p>
</li>
<li>
<p>Details:</p>
<p>Unix timestamp in milliseconds of the last commit of the page.</p>
<p>This attribute would take the maximum of the last commit timestamps of the current page and the files listed in <a href="#gitinclude">gitInclude</a>.</p>
</li>
</ul>
<h3 id="git-contributors" tabindex="-1"><a class="header-anchor" href="#git-contributors"><span>git.contributors</span></a></h3>
<ul>
<li>Type: <code v-pre>GitContributor[]</code></li>
</ul>
<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">GitContributor</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  email<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  commits<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div><ul>
<li>
<p>Details:</p>
<p>The contributors information of the page.</p>
<p>This attribute would also include contributors to the files listed in <a href="#gitinclude">gitInclude</a>.</p>
</li>
</ul>
</div></template>


