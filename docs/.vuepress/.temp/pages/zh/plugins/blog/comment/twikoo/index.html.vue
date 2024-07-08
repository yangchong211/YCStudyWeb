<template><div><p>一个简洁、安全、免费的静态网站评论系统，基于 <a href="https://curl.qcloud.com/KnnJtUom" target="_blank" rel="noopener noreferrer">腾讯云开发</a>。</p>
<!-- more -->
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> twikoo</span>
<span class="line"></span></code></pre>
</div><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h2>
<p>部署共有四种方式。</p>
<table>
<thead>
<tr>
<th>部署方式</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2">一键部署</a></td>
<td>[不建议] 虽然方便，但是仅支持按量计费环境——也就是说，<strong>一键部署的环境，当免费资源用尽后，将会产生费用</strong>。且按量计费环境无法切换为包年包月环境。免费额度数据库读操作数只有 500 次 / 天，<strong>无法支撑 Twikoo 的运行需求</strong>。</td>
</tr>
<tr>
<td><a href="#%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2">手动部署</a></td>
<td>[建议] 手动部署到腾讯云云开发环境，在中国大陆访问速度较快。由于基础版 1 已从 0 元涨价至 6.9 元 / 月，需要付费购买环境才能部署。</td>
</tr>
<tr>
<td><a href="#%E5%91%BD%E4%BB%A4%E8%A1%8C%E9%83%A8%E7%BD%B2">命令行部署</a></td>
<td>[不建议] 仅针对有 Node.js 经验的开发者。</td>
</tr>
<tr>
<td><a href="#vercel-%E9%83%A8%E7%BD%B2">Vercel 部署</a></td>
<td>[建议] 适用于想要免费部署的用户，在中国大陆访问速度较慢。</td>
</tr>
</tbody>
</table>
<h3 id="一键部署" tabindex="-1"><a class="header-anchor" href="#一键部署"><span>一键部署</span></a></h3>
<ol>
<li>
<p>点击以下按钮将 Twikoo 一键部署到云开发</p>
<figure><a href="https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&amp;appUrl=https%3A%2F%2Fgithub.com%2Fimaegoo%2Ftwikoo&amp;branch=dev" target="_blank" rel="noopener noreferrer"><img src="https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg" alt="部署到云开发" tabindex="0"></a><figcaption>部署到云开发</figcaption></figure>
</li>
<li>
<p>进入<a href="https://console.cloud.tencent.com/tcb/env/login" target="_blank" rel="noopener noreferrer">环境 - 登录授权</a>，启用“匿名登录”</p>
</li>
<li>
<p>进入<a href="https://console.cloud.tencent.com/tcb/env/safety" target="_blank" rel="noopener noreferrer">环境 - 安全配置</a>，将网站域名添加到“WEB 安全域名”</p>
</li>
</ol>
<h3 id="手动部署" tabindex="-1"><a class="header-anchor" href="#手动部署"><span>手动部署</span></a></h3>
<p>如果你打算部署到一个现有的云开发环境，请直接从第 3 步开始。</p>
<ol>
<li>
<p>进入<a href="https://curl.qcloud.com/KnnJtUom" target="_blank" rel="noopener noreferrer">云开发 CloudBase</a>活动页面，滚动到“新用户专享”部分，选择适合的套餐，点击“立即购买”，按提示创建好环境。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>推荐创建上海环境。如选择广州环境，需要在 <code v-pre>twikoo.init()</code> 时额外指定环境 <code v-pre>region: &quot;ap-guangzhou&quot;</code></li>
<li>环境名称自由填写</li>
<li>推荐选择计费方式<code v-pre>包年包月</code>，套餐版本<code v-pre>基础版 1</code>，超出免费额度不会收费</li>
<li>如果提示选择“应用模板”，请选择“空模板”</li>
</ul>
</div>
</li>
<li>
<p>进入<a href="https://console.cloud.tencent.com/tcb/" target="_blank" rel="noopener noreferrer">云开发控制台</a><br></p>
</li>
<li>
<p>进入<a href="https://console.cloud.tencent.com/tcb/env/login" target="_blank" rel="noopener noreferrer">环境-登录授权</a>，启用“匿名登录”</p>
</li>
<li>
<p>进入<a href="https://console.cloud.tencent.com/tcb/env/safety" target="_blank" rel="noopener noreferrer">环境-安全配置</a>，将网站域名添加到“WEB 安全域名”</p>
</li>
<li>
<p>进入<a href="https://console.cloud.tencent.com/tcb/scf/index" target="_blank" rel="noopener noreferrer">环境-云函数</a>，点击“新建云函数”</p>
</li>
<li>
<p>函数名称请填写 <code v-pre>twikoo</code>，创建方式请选择 <code v-pre>空白函数</code>，运行环境请选择 <code v-pre>Nodejs 10.15</code>，函数内存请选择 <code v-pre>128MB</code>，点击“下一步”</p>
</li>
<li>
<p>清空输入框中的示例代码，复制以下代码、粘贴到“函数代码”输入框中，点击“确定”</p>
<div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">exports<span class="token punctuation">.</span>main <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'twikoo-func'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>main</span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>创建完成后，点击“twikoo”进入云函数详情页，进入“函数代码”标签，点击“文件 - 新建文件”，输入 <code v-pre>package.json</code>，回车</p>
</li>
<li>
<p>复制以下代码、粘贴到代码框中，点击“保存并安装依赖”</p>
<div class="language-json" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span> <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"twikoo-func"</span><span class="token operator">:</span> <span class="token string">"1.5.0"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></li>
</ol>
<h3 id="命令行部署" tabindex="-1"><a class="header-anchor" href="#命令行部署"><span>命令行部署</span></a></h3>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<ul>
<li>请确保你已经安装了 <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
<li>请将命令、代码中“你的环境 ID”替换为你自己的环境 ID</li>
<li>第 7 步会弹出浏览器要求授权，需在有图形界面的系统下进行</li>
</ul>
</div>
<p>如果你打算部署到一个现有的云开发环境，请直接从第 3 步开始。</p>
<ol>
<li>
<p>进入<a href="https://curl.qcloud.com/KnnJtUom" target="_blank" rel="noopener noreferrer">云开发 CloudBase</a>活动页面，滚动到“新用户专享”部分，选择适合的套餐 (一般 0 元套餐即可) ，点击“立即购买”，按提示创建好环境。</p>
</li>
<li>
<p>进入<a href="https://console.cloud.tencent.com/tcb/" target="_blank" rel="noopener noreferrer">云开发控制台</a></p>
</li>
<li>
<p>进入<a href="https://console.cloud.tencent.com/tcb/env/login" target="_blank" rel="noopener noreferrer">环境 - 登录授权</a>，启用“匿名登录”</p>
</li>
<li>
<p>进入<a href="https://console.cloud.tencent.com/tcb/env/safety" target="_blank" rel="noopener noreferrer">环境 - 安全配置</a>，将网站域名添加到“WEB 安全域名”</p>
</li>
<li>
<p>克隆本仓库</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> clone https://github.com/imaegoo/twikoo.git <span class="token comment"># 或 git clone https://e.coding.net/imaegoo/twikoo/twikoo.git</span></span>
<span class="line"><span class="token builtin class-name">cd</span> twikoo</span>
<span class="line"></span></code></pre>
</div><blockquote>
<p>如果你没有安装 Git，也可以从 <a href="https://github.com/imaegoo/twikoo/releases" target="_blank" rel="noopener noreferrer">Release</a> 页面下载最新的 Source code</p>
<p>如果你所在的地区访问 GitHub 速度慢，也可以尝试另一个仓库地址: <a href="https://imaegoo.coding.net/public/twikoo/twikoo/git" target="_blank" rel="noopener noreferrer">https://imaegoo.coding.net/public/twikoo/twikoo/git</a></p>
</blockquote>
</li>
<li>
<p>安装依赖项</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span> <span class="token comment"># 如 yarn 已安装，可以跳过此步</span></span>
<span class="line"><span class="token function">yarn</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>授权云开发环境 (此命令会弹出浏览器要求授权，需在有图形界面的系统下进行)</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">yarn</span> run login</span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>自动部署</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">yarn</span> deploy <span class="token parameter variable">-e</span> 你的环境id</span>
<span class="line"></span></code></pre>
</div></li>
</ol>
<h3 id="vercel-部署" tabindex="-1"><a class="header-anchor" href="#vercel-部署"><span>Vercel 部署</span></a></h3>
<p><a href="https://www.bilibili.com/video/BV1Fh411e7ZH" target="_blank" rel="noopener noreferrer">查看视频教程</a></p>
<ol>
<li>
<p>申请 <a href="https://www.mongodb.com/cloud/atlas/register" target="_blank" rel="noopener noreferrer">MongoDB</a> 账号</p>
</li>
<li>
<p>创建免费 MongoDB 数据库，区域推荐选择 <code v-pre>AWS / N. Virginia (us-east-1)</code></p>
</li>
<li>
<p>在 Clusters 页面点击 CONNECT，按步骤设置允许所有 IP 地址的连接 (<a href="https://vercel.com/support/articles/how-to-allowlist-deployment-ip-address" target="_blank" rel="noopener noreferrer">为什么？</a>) ，创建数据库用户，并记录数据库连接字符串，请将连接字符串中的 <code v-pre>&lt;password&gt;</code> 修改为数据库密码</p>
</li>
<li>
<p>申请 <a href="https://vercel.com/signup" target="_blank" rel="noopener noreferrer">Vercel</a> 账号</p>
</li>
<li>
<p>点击以下按钮将 Twikoo 一键部署到 Vercel</p>
<figure><a href="https://vercel.com/import/project?template=https://github.com/imaegoo/twikoo/tree/dev/src/vercel-min" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel" tabindex="0"></a><figcaption>Vercel</figcaption></figure>
</li>
<li>
<p>进入 Settings - Environment Variables，添加环境变量 <code v-pre>MONGODB_URI</code>，值为第 3 步的数据库连接字符串</p>
</li>
<li>
<p>进入 Overview，点击 Domains 下方的链接，如果环境配置正确，可以看到 “Twikoo 云函数运行正常” 的提示</p>
</li>
<li>
<p>Vercel Domains (包含 <code v-pre>https://</code> 前缀，例如 <code v-pre>https://xxx.vercel.app</code>) 即为你的环境 ID</p>
</li>
</ol>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>请配置 <code v-pre>provider: &quot;Twikoo&quot;</code> 并将你的服务端地址传入插件选项中的 <code v-pre>server</code>。</p>
<p>其他的配置项详见 <RouteLink to="/zh/plugins/blog/comment/twikoo/config.html">Twikoo 配置</RouteLink>。</p>
</div></template>


