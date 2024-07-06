# 配置

## hostname

- 类型：`string`
- 必填：是
- 详情：

  当前网站部署到的域名，插件需要此选项才能工作。

## extraUrls

- 类型：`string[]`
- 详情：

  需要额外包含的网址。

  如果你有一些不包含在 VuePress 路由中的链接 (如: 存放在 public 文件夹下的页面或其他插件或工具直接生成的页面)，你可能需要设置此项。

- 示例：`['/about.html', '/api/']`

## excludePaths

- 类型：`string[]`
- 默认值：`['/404.html']`
- 详情：

  不需要收录的页面路径，请以绝对路径开头。

  默认情况下 VuePress 自动生成的所有路径 (除 404 页) 都会被添加进 Sitemap。

## devServer

- 类型：`boolean`
- 默认值：`false`
- 详情：

  是否在开发服务器中启用

::: tip

由于性能原因，我们不提供热更新。重启开发服务器以同步你的变更。

:::

## devHostname

- 类型：`string`
- 默认值：`"http://localhost:${port}"`
- 详情：

  开发服务器使用的主机名

## sitemapFilename

- 类型：`string`
- 默认值：`"sitemap.xml"`
- 详情：

  输出的文件名，相对于输出目录。

## sitemapXSLFilename

- 类型：`string`
- 默认值：`"sitemap.xsl"`
- 详情：

  输出的 xsl 文件名，相对于输出目录。

## sitemapXSLTemplate

- 类型：`string`
- 默认值：`"@vuepress-plugin/sitemap/templates/sitemap.xsl"`
- 详情：

  用作模板的 XSL 文件内容

## changefreq

- 类型：`"always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"`
- 默认值：`"daily"`
- 详情：

  页面默认更新频率，会被 Frontmatter 中的 [changefreq](./frontmatter.md#sitemap-changefreq) 选项覆盖。

## priority

- 类型：`number`
- 默认值：`0.5`
- 详情：

  页面优先级，范围 `0` 至 `1`。

## modifyTimeGetter

- 类型：`(page: Page, app: App) => string`
- 详情：

  最后修改事件的获得器，需要返回一个 ISO 字符形式的时间，默认会自动通过 Git 插件生成。
