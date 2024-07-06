<template><div><h1 id="artalk" tabindex="-1"><a class="header-anchor" href="#artalk"><span>Artalk</span></a></h1>
<p>Artalk is a neat self-hosted commenting system that you can easily deploy on your server and put into your front-end page.</p>
<p>Come to your blog, or anywhere, place the Artalk comment box, so that the page has rich social functions.</p>
<!-- more -->
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> artalk</span>
<span class="line"></span></code></pre>
</div><h2 id="deploy-artalk-server" tabindex="-1"><a class="header-anchor" href="#deploy-artalk-server"><span>Deploy Artalk Server</span></a></h2>
<p>See the <a href="https://artalk.js.org/guide/deploy.html" target="_blank" rel="noopener noreferrer">Artalk documentation</a>.</p>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>Please set <code v-pre>provider: &quot;Artalk&quot;</code> and pass your server link to <code v-pre>server</code> in the plugin options.</p>
<p>For other configuration items, see <RouteLink to="/plugins/blog/comment/artalk/config.html">Artalk Config</RouteLink>.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>The plugin retains the <code v-pre>el</code> option and inserts Artalk itself on the page. At the same time, the plugin will automatically set the <code v-pre>pageTitle</code>, <code v-pre>pageKey</code> and <code v-pre>site</code> options for you according to the VuePress information.</p>
</div>
<h2 id="darkmode" tabindex="-1"><a class="header-anchor" href="#darkmode"><span>Darkmode</span></a></h2>
<p>To let Artalk apply the correct theme, you need to pass a boolean value to <code v-pre>&lt;CommentService /&gt;</code> through <code v-pre>darkmode</code> prop, representing whether the dark mode is currently enabled.</p>
</div></template>


