# Frontmatter

## sitemap

- 类型：`SitemapFrontmatterOptions | false`

- 详情：

  `false` 表示将页面排除在 sitemap 之外。

### sitemap.changefreq

- 类型：`"always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"`
- 默认值：`"daily"`
- 详情：

  页面默认更新频率。它会覆盖插件选项中的 [changefreq](./config.md#changefreq) 选项。

### sitemap.priority

- 类型：`number`
- 默认值：`0.5`
- 详情：

  页面优先级，范围 `0` 至 `1`。
