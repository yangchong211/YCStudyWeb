# Frontmatter

## sitemap

- Type: `SitemapFrontmatterOptions | false`
- Details:

  `false` means exclude the page from sitemap.

### sitemap.changefreq

- Type: `"always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"`
- Default: `"daily"`
- Details:

  Page default update frequency. This will override [changefreq](./config.md#changefreq) in Plugin Options.

### sitemap.priority

- Type: `number`
- Default: `0.5`
- Details:

  Page priority, range from `0` to `1`.
