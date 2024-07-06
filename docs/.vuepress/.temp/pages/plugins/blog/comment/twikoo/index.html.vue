<template><div><h1 id="twikoo" tabindex="-1"><a class="header-anchor" href="#twikoo"><span>Twikoo</span></a></h1>
<p>A concise, safe and free static site commenting system, based on <a href="https://curl.qcloud.com/KnnJtUom" target="_blank" rel="noopener noreferrer">Tencent Cloud Development</a>.</p>
<!-- more -->
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> twikoo</span>
<span class="line"></span></code></pre>
</div><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting started</span></a></h2>
<ol>
<li>
<p>Apply for <a href="https://www.mongodb.com/cloud/atlas/register" target="_blank" rel="noopener noreferrer">MongoDB</a> account</p>
</li>
<li>
<p>Create a free MongoDB database, the recommended region is <code v-pre>AWS / N. Virginia (us-east-1)</code></p>
</li>
<li>
<p>Click CONNECT on the Clusters page, follow the steps to allow connections from all IP addresses (<a href="https://vercel.com/support/articles/how-to-allowlist-deployment-ip-address" target="_blank" rel="noopener noreferrer">Why?</a>), create Database user, and record the database connection string, please change the <code v-pre>&lt;password&gt;</code> in the connection string to the database password</p>
</li>
<li>
<p>Sign up for a <a href="https://vercel.com/signup" target="_blank" rel="noopener noreferrer">Vercel</a> account</p>
</li>
<li>
<p>Click the button below to deploy Twikoo to Vercel in one click</p>
<figure><a href="https://vercel.com/import/project?template=https://github.com/imaegoo/twikoo/tree/dev/src/vercel-min" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel" tabindex="0"></a><figcaption>Vercel</figcaption></figure>
</li>
<li>
<p>Go to Settings - Environment Variables, add the environment variable <code v-pre>MONGODB_URI</code>, the value is the database connection string in step 3</p>
</li>
<li>
<p>Go to Overview, click the link under Domains, if the environment configuration is correct, you can see the prompt &quot;Twikoo cloud function is running normally&quot;</p>
</li>
<li>
<p>Vercel Domains (with <code v-pre>https://</code> prefix, e.g. <code v-pre>https://xxx.vercel.app</code>) is your environment ID</p>
</li>
</ol>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>Please set <code v-pre>provider: &quot;Twikoo&quot;</code> and set <code v-pre>envId</code> in the plugin options.</p>
<p>For other configuration items, see <RouteLink to="/plugins/blog/comment/twikoo/config.html">Twikoo Config</RouteLink>.</p>
</div></template>


