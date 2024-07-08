<template><div><h1 id="waline" tabindex="-1"><a class="header-anchor" href="#waline"><span>Waline</span></a></h1>
<p>A safe comment system with backend.</p>
<!-- more -->
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @waline/client</span>
<span class="line"></span></code></pre>
</div><h2 id="leancloud-settings-database" tabindex="-1"><a class="header-anchor" href="#leancloud-settings-database"><span>LeanCloud Settings (Database)</span></a></h2>
<ol>
<li>
<p><a href="https://console.leancloud.app/login" target="_blank" rel="noopener noreferrer">sign in</a> or <a href="https://console.leancloud.app/register" target="_blank" rel="noopener noreferrer">sign up</a> LeanCloud and enter <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">Console</a>.</p>
</li>
<li>
<p>Click <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">Create app</a> button to create a new app and enter a name you like:</p>
<figure><img src="@source/plugins/blog/comment/waline/assets/leancloud-app-1.jpg" alt="Create App" tabindex="0"><figcaption>Create App</figcaption></figure>
</li>
<li>
<p>Enter the app, then select <code v-pre>Settings</code> &gt; <code v-pre>App Keys</code> at the left bottom corner. You will see <code v-pre>APP ID</code>, <code v-pre>APP Key</code> and <code v-pre>Master Key</code> of your app. We will use them later</p>
<figure><img src="@source/plugins/blog/comment/waline/assets/leancloud-app-2.jpg" alt="ID and Key" tabindex="0"><figcaption>ID and Key</figcaption></figure>
</li>
</ol>
<h2 id="deploy-to-vercel-server" tabindex="-1"><a class="header-anchor" href="#deploy-to-vercel-server"><span>Deploy to Vercel (Server)</span></a></h2>
<figure><a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel" tabindex="0"></a><figcaption>Vercel</figcaption></figure>
<ol>
<li>
<p>Click the dark button above, it will redirect you to vercel to deploy with waline template.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you haven't logged in, we recommend you to sign in with GitHub.</p>
</div>
</li>
<li>
<p>Input your Vercel project name then click <code v-pre>Create</code>.</p>
<figure><img src="/images/comment/vercel-2.png" alt="skip team" tabindex="0"><figcaption>skip team</figcaption></figure>
</li>
<li>
<p>Repo which named you input before will be created and initialized automatically base on waline example template by Vercel.</p>
<figure><img src="/images/comment/vercel-3.png" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure>
<p>After one minute or two, vercel should finish the deployment. Click <code v-pre>Go to Dashboard</code> button to redirect to your application dashboard.</p>
<figure><img src="/images/comment/vercel-4.png" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure>
</li>
<li>
<p>Click <code v-pre>Settings</code> menu on the top, and <code v-pre>Environment Variables</code> button on the side to go to environment variables setting page. Then set <code v-pre>LEAN_ID</code>, <code v-pre>LEAN_KEY</code> and <code v-pre>LEAN_MASTER_KEY</code>. The variables' value should be the ones you got in the previous step. <code v-pre>APP ID</code> is the value of <code v-pre>LEAN_ID</code>, and <code v-pre>APP Key</code> to <code v-pre>LEAN_KEY</code>, <code v-pre>Master Key</code> to <code v-pre>LEAN_MASTER_KEY</code>.</p>
<figure><img src="/images/comment/vercel-5.png" alt="set environment variables" tabindex="0"><figcaption>set environment variables</figcaption></figure>
</li>
<li>
<p>To let your environment variables setting active, you need redeploy your application. Click <code v-pre>Deployments</code> menu on the top and find the latest deployment at the top of list, click <code v-pre>Redeploy</code> button in the right dropdown menu.</p>
<figure><img src="/images/comment/vercel-6.png" alt="redeploy" tabindex="0"><figcaption>redeploy</figcaption></figure>
</li>
<li>
<p>If everything is ok, vercel will redirect to <code v-pre>Overview</code> page to start redeployment. Wait a moment the <code v-pre>STATUS</code> will change to <code v-pre>Ready</code>. Now you can click <code v-pre>Visit</code> to visit the site. This link is your server address.</p>
<figure><img src="/images/comment/vercel-7.png" alt="redeploy success" tabindex="0"><figcaption>redeploy success</figcaption></figure>
</li>
</ol>
<h2 id="assign-domain-optional" tabindex="-1"><a class="header-anchor" href="#assign-domain-optional"><span>Assign Domain (Optional)</span></a></h2>
<ol>
<li>
<p>Click <code v-pre>Settings</code> - <code v-pre>Domains</code> to go to domain setting page.</p>
</li>
<li>
<p>Input domain you want to assign and click <code v-pre>Add</code> button.</p>
<figure><img src="/images/comment/vercel-8.png" alt="Add domain" tabindex="0"><figcaption>Add domain</figcaption></figure>
</li>
<li>
<p>Add a new <code v-pre>CNAME</code> record in your domain service server.</p>
<table>
<thead>
<tr>
<th>Type</th>
<th>Name</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>CNAME</td>
<td>example</td>
<td>cname.vercel-dns.com</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>You can use your own domain to visit waline comment system after go into effect. 🎉</p>
<ul>
<li>serverURL：example.your-domain.com</li>
<li>admin panel：example.your-domain.com/ui</li>
</ul>
<figure><img src="/images/comment/vercel-9.png" alt="success" tabindex="0"><figcaption>success</figcaption></figure>
</li>
</ol>
<h2 id="client" tabindex="-1"><a class="header-anchor" href="#client"><span>Client</span></a></h2>
<h3 id="using-plugin" tabindex="-1"><a class="header-anchor" href="#using-plugin"><span>Using plugin</span></a></h3>
<p>Set <code v-pre>provider: &quot;Waline&quot;</code> in the plugin options, and set <code v-pre>serverURL</code> as the link obtained in the previous step.</p>
<p>Then, place the <code v-pre>&lt;CommentService&gt;</code> component at a suitable location in your site (usually at the bottom of the page), you will be able to see the comment box.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You can also pass in other options supported by Waline (except <code v-pre>el</code>). For details, see <RouteLink to="/plugins/blog/comment/waline/config.html">Waline Config</RouteLink></p>
</div>
<h2 id="comment-management-management" tabindex="-1"><a class="header-anchor" href="#comment-management-management"><span>Comment Management (Management)</span></a></h2>
<ol>
<li>After the deployment is complete, please visit <code v-pre>&lt;serverURL&gt;/ui/register</code> to register. The first person to register will be set as an administrator.</li>
<li>After you log in as administrator, you can see the comment management interface. You can edit, mark or delete comments here.</li>
<li>Users can also register their account through comment box, and they will be redirected to their profile page after logging in.</li>
</ol>
</div></template>


