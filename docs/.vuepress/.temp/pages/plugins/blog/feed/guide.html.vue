<template><div><h1 id="guide" tabindex="-1"><a class="header-anchor" href="#guide"><span>Guide</span></a></h1>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<p>The plugin can generate feed files in the following three formats for you:</p>
<ul>
<li>Atom 1.0</li>
<li>JSON 1.1</li>
<li>RSS 2.0</li>
</ul>
<p>Please set <code v-pre>atom</code>, <code v-pre>json</code> or <code v-pre>rss</code> to <code v-pre>true</code> in the plugin options according to the formats you want to generate.</p>
<p>To correctly generate feed links, you need to set <code v-pre>hostname</code> in the plugin options,</p>
<h2 id="readable-preview" tabindex="-1"><a class="header-anchor" href="#readable-preview"><span>Readable Preview</span></a></h2>
<p>When you open the feed file in browser, we magically convert atom and rss feed xml to human readable html via xsl template. Check <a href="/atom.xml">atom</a> and <a href="/rss.xml">rss</a> feed of this site as an example!</p>
<p>If you want to preview your feed in devServer, set <code v-pre>devServer: true</code> in plugin options. You may also need to set <code v-pre>devHostname</code> if you are not using the default <code v-pre>http://localhost:{port}</code>.</p>
<h2 id="channel-settings" tabindex="-1"><a class="header-anchor" href="#channel-settings"><span>Channel settings</span></a></h2>
<p>You can customize the feed channel information by setting the <code v-pre>channel</code> option.</p>
<p>We recommend the following settings:</p>
<ul>
<li>Convert the date of creating the feed to ISOString and write it into <code v-pre>channel.pubDate</code></li>
<li>The update period of the content set in <code v-pre>channel.ttl</code> (unit: minutes)</li>
<li>Set copyright information via <code v-pre>channel.copyright</code></li>
<li>Set the channel author via <code v-pre>channel.author</code>.</li>
</ul>
<p>For detailed options and their default values, see <RouteLink to="/plugins/blog/feed/channel.html">Channel Config</RouteLink></p>
<h2 id="feed-generation" tabindex="-1"><a class="header-anchor" href="#feed-generation"><span>Feed Generation</span></a></h2>
<p>By default, all articles are added to the feed stream.</p>
<p>You can set <code v-pre>feed</code> and other options in page frontmatter to control contents of feed item. See <RouteLink to="/plugins/blog/feed/frontmatter.html">Frontmatter Config</RouteLink> for how they are converted.</p>
<p>You can take full control of feed items generation by configuring the <code v-pre>getter</code> in the plugin options. For detailed options and their default values, see <RouteLink to="/plugins/blog/feed/getter.html">Configuration → Feed Getter</RouteLink>.</p>
<h3 id="i18n-config" tabindex="-1"><a class="header-anchor" href="#i18n-config"><span>I18n Config</span></a></h3>
<p>The plugin generates separate feeds for each language.</p>
<p>You can provide different settings for different languages via <code v-pre>locales</code> in the plugin options.</p>
</div></template>


