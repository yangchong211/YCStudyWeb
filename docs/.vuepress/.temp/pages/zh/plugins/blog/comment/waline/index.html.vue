<template><div><h1 id="waline" tabindex="-1"><a class="header-anchor" href="#waline"><span>Waline</span></a></h1>
<p>一个有后端的安全评论系统。</p>
<!-- more -->
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @waline/client</span>
<span class="line"></span></code></pre>
</div><h2 id="leancloud-设置-数据库" tabindex="-1"><a class="header-anchor" href="#leancloud-设置-数据库"><span>LeanCloud 设置 (数据库)</span></a></h2>
<ol>
<li>
<p><a href="https://console.leancloud.app/login" target="_blank" rel="noopener noreferrer">登录</a> 或 <a href="https://console.leancloud.app/register" target="_blank" rel="noopener noreferrer">注册</a> <code v-pre>LeanCloud 国际版</code> 并进入 <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">控制台</a></p>
</li>
<li>
<p>点击左上角 <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">创建应用</a> 并起一个你喜欢的名字 (请选择免费的开发版):</p>
<figure><img src="@source/zh/plugins/blog/comment/waline/assets/leancloud-1.png" alt="创建应用" tabindex="0"><figcaption>创建应用</figcaption></figure>
</li>
<li>
<p>进入应用，选择左下角的 <code v-pre>设置</code> &gt; <code v-pre>应用 Key</code>。你可以看到你的 <code v-pre>APP ID</code>,<code v-pre>APP Key</code> 和 <code v-pre>Master Key</code>。请记录它们，以便后续使用。</p>
<figure><img src="@source/zh/plugins/blog/comment/waline/assets/leancloud-2.png" alt="ID 和 Key" tabindex="0"><figcaption>ID 和 Key</figcaption></figure>
</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">国内版需要完成备案接入</p>
<p>如果你正在使用 Leancloud 国内版 (<a href="https://leancloud.cn" target="_blank" rel="noopener noreferrer">leancloud.cn</a>)，我们推荐你切换到国际版 (<a href="https://leancloud.app" target="_blank" rel="noopener noreferrer">leancloud.app</a>)。否则，你需要为应用额外绑定<strong>已备案</strong>的域名，同时购买独立 IP 并完成备案接入:</p>
<ul>
<li>登录国内版并进入需要使用的应用</li>
<li>选择 <code v-pre>设置</code> &gt; <code v-pre>域名绑定</code> &gt; <code v-pre>API 访问域名</code> &gt; <code v-pre>绑定新域名</code> &gt; 输入域名 &gt; <code v-pre>确定</code>。</li>
<li>按照页面上的提示按要求在 DNS 上完成 CNAME 解析。</li>
<li>购买独立 IP 并提交工单完成备案接入。(独立 IP 目前价格为 ￥ 50/个/月)</li>
</ul>
<figure><img src="@source/zh/plugins/blog/comment/waline/assets/leancloud-3.png" alt="域名设置" tabindex="0"><figcaption>域名设置</figcaption></figure>
</div>
<h2 id="vercel-部署-服务端" tabindex="-1"><a class="header-anchor" href="#vercel-部署-服务端"><span>Vercel 部署 (服务端)</span></a></h2>
<figure><a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel" tabindex="0"></a><figcaption>Vercel</figcaption></figure>
<ol>
<li>
<p>点击上方按钮，跳转至 Vercel 进行 Server 端部署。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。</p>
</div>
</li>
<li>
<p>输入一个你喜欢的 Vercel 项目名称并点击 <code v-pre>Create</code> 继续:</p>
<figure><img src="/images/comment/vercel-1.png" alt="创建项目" tabindex="0"><figcaption>创建项目</figcaption></figure>
</li>
<li>
<p>此时 Vercel 会基于 Waline 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。</p>
<figure><img src="/images/comment/vercel-3.png" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure>
<p>一两分钟后，满屏的烟花会庆祝你部署成功。此时点击 <code v-pre>Go to Dashboard</code> 可以跳转到应用的控制台。</p>
<figure><img src="/images/comment/vercel-4.png" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure>
</li>
<li>
<p>点击顶部的 <code v-pre>Settings</code> - <code v-pre>Environment Variables</code> 进入环境变量配置页，并配置三个环境变量 <code v-pre>LEAN_ID</code>, <code v-pre>LEAN_KEY</code> 和 <code v-pre>LEAN_MASTER_KEY</code> 。它们的值分别对应上一步在 LeanCloud 中获得的 <code v-pre>APP ID</code>, <code v-pre>APP KEY</code>, <code v-pre>Master Key</code>。</p>
<figure><img src="/images/comment/vercel-5.png" alt="设置环境变量" tabindex="0"><figcaption>设置环境变量</figcaption></figure>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>如果你使用 LeanCloud 国内版，请额外配置 <code v-pre>LEAN_SERVER</code> 环境变量，值为你绑定好的域名。</p>
</div>
</li>
<li>
<p>环境变量配置完成之后点击顶部的 <code v-pre>Deployments</code> 点击顶部最新的一次部署右侧的 <code v-pre>Redeploy</code> 按钮进行重新部署。该步骤是为了让刚才设置的环境变量生效。</p>
<figure><img src="/images/comment/vercel-6.png" alt="redeploy" tabindex="0"><figcaption>redeploy</figcaption></figure>
</li>
<li>
<p>此时会跳转到 <code v-pre>Overview</code> 界面开始部署，等待片刻后 <code v-pre>STATUS</code> 会变成 <code v-pre>Ready</code>。此时请点击 <code v-pre>Visit</code> ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。</p>
<figure><img src="/images/comment/vercel-7.png" alt="redeploy success" tabindex="0"><figcaption>redeploy success</figcaption></figure>
</li>
</ol>
<h2 id="绑定域名-可选" tabindex="-1"><a class="header-anchor" href="#绑定域名-可选"><span>绑定域名 (可选)</span></a></h2>
<ol>
<li>
<p>点击顶部的 <code v-pre>Settings</code> - <code v-pre>Domains</code> 进入域名配置页</p>
</li>
<li>
<p>输入需要绑定的域名并点击 <code v-pre>Add</code></p>
<figure><img src="/images/comment/vercel-8.png" alt="Add domain" tabindex="0"><figcaption>Add domain</figcaption></figure>
</li>
<li>
<p>在域名服务器商处添加新的 <code v-pre>CNAME</code> 解析记录</p>
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
<p>等待生效，你可以通过自己的域名来访问了🎉</p>
<ul>
<li>评论系统：example.your-domain.com</li>
<li>评论管理：example.your-domain.com/ui</li>
</ul>
<figure><img src="/images/comment/vercel-9.png" alt="success" tabindex="0"><figcaption>success</figcaption></figure>
</li>
</ol>
<h2 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端"><span>客户端</span></a></h2>
<h3 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件"><span>使用插件</span></a></h3>
<p>在插件选项中设置 <code v-pre>provider: &quot;Waline&quot;</code>，同时设置服务端地址 <code v-pre>serverURL</code> 为上一步获取到的值。</p>
<p>此时，将 <code v-pre>&lt;CommentService&gt;</code> 组件放置在你网站中合适的位置 (通常是页面的底部)，即可使用 Waline 评论功能。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>你也可以传入其他 Waline 支持的选项 (除了 <code v-pre>el</code>)。详情请见 <RouteLink to="/zh/plugins/blog/comment/waline/config.html">Waline 配置</RouteLink></p>
</div>
<h2 id="评论管理-管理端" tabindex="-1"><a class="header-anchor" href="#评论管理-管理端"><span>评论管理 (管理端)</span></a></h2>
<ol>
<li>部署完成后，请访问 <code v-pre>&lt;serverURL&gt;/ui/register</code> 进行注册。首个注册的人会被设定成管理员。</li>
<li>管理员登陆后，即可看到评论管理界面。在这里可以修改、标记或删除评论。</li>
<li>用户也可通过评论框注册账号，登陆后会跳转到自己的档案页。</li>
</ol>
</div></template>


