<template><div><h1 id="giscus" tabindex="-1"><a class="header-anchor" href="#giscus"><span>Giscus</span></a></h1>
<p>Giscus is a commenting system based on GitHub Discussion that is easy to start.</p>
<!-- more -->
<h2 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation"><span>Preparation</span></a></h2>
<ol>
<li>
<p>Create a public repository and open discussion panel as a place to store comments.</p>
</li>
<li>
<p>Install the <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">Giscus App</a> to have permission to access the corresponding repository.</p>
</li>
<li>
<p>After completing the above steps, please go to the <a href="https://giscus.app" target="_blank" rel="noopener noreferrer">Giscus page</a> to get your settings.</p>
<p>You just need to fill in the repository and Discussion categories, then scroll to the &quot;Enable giscus&quot; section at the bottom of the page and obtain four attributes: <code v-pre>data-repo</code>, <code v-pre>data-repo-id</code>, <code v-pre>data-category</code> and <code v-pre>data-category-id</code>.</p>
</li>
</ol>
<h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2>
<p>Please set <code v-pre>provider: &quot;Giscus&quot;</code> and pass <code v-pre>data-repo</code>, <code v-pre>data-repo-id</code>, <code v-pre>data-category</code> and <code v-pre>data-category-id</code> as plugin options as <code v-pre>repo</code>, <code v-pre>repoId</code>, <code v-pre>category</code> <code v-pre>categoryId</code>.</p>
<p>For other options, see <RouteLink to="/plugins/blog/comment/giscus/config.html">Giscus Config</RouteLink>.</p>
<h2 id="theme" tabindex="-1"><a class="header-anchor" href="#theme"><span>Theme</span></a></h2>
<p>By default, the theme of Giscus is <code v-pre>light</code> or <code v-pre>dark</code> (based on darkmode status).</p>
<div class="custom-container tip"><p class="custom-container-title">Darkmode</p>
<p>To let Giscus apply the correct theme, you need to pass a boolean value to <code v-pre>&lt;CommentService /&gt;</code> via <code v-pre>darkmode</code> property, indicating whether darkmode is currently enabled.</p>
</div>
<p>If you want to customize theme in lightmode and darkmode, you can set <code v-pre>lightTheme</code> and <code v-pre>darkTheme</code> option with a built-in theme keyword or a custom CSS link starting with <code v-pre>https://</code>.</p>
</div></template>


