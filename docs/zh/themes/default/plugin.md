# 插件配置

你可以通过 `themePlugins` 设置默认主题使用的插件。

默认主题使用了一些插件，如果你确实不需要该插件，你可以选择禁用它。在禁用插件之前，请确保你已了解它的用途。

```ts
import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({
    themePlugins: {
      // 在这里自定义主题插件
    },
  }),
}
```

## themePlugins.activeHeaderLinks

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否启用 [@vuepress/plugin-active-header-links](../../plugins/development/active-header-links.md) 。

## themePlugins.backToTop

- 类型： `BackToTopPluginOptions | boolean`

- 默认值： `true`

- 详情：

  是否启用 [@vuepress/plugin-back-to-top](../../plugins/features/back-to-top.md) 。

  支持对象格式以作为插件选项。

## themePlugins.container

- 类型： `Record<ContainerType, boolean>`

- 详情：

  是否启用由 [@vuepress/plugin-markdown-container](../../plugins/markdown/markdown-container.md) 支持的自定义容器。

  `ContainerType` 类型为：

  - `tip`
  - `warning`
  - `danger`
  - `details`
  - `codeGroup`
  - `codeGroupItem`

- 参考：
  - [默认主题 > Markdown > 自定义容器](./markdown.md#自定义容器)

## themePlugins.copyCode

- 类型： `CopyCodePluginOptions | boolean`

- 默认值： `true`

- 详情：

  是否启用 [@vuepress/plugin-copy-code](../../plugins/features/copy-code.md) 。

  支持对象格式以作为插件选项。

## themePlugins.git

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否启用 [@vuepress/plugin-git](../../plugins/development/git.md) 。

## themePlugins.links-check

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否启用 [@vuepress/plugin-links-check](../../plugins/markdown/links-check.md) 。

## themePlugins.mediumZoom

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否启用 [@vuepress/plugin-medium-zoom](../../plugins/features/medium-zoom.md) 。

## themePlugins.nprogress

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否启用 [@vuepress/plugin-nprogress](../../plugins/features/nprogress.md) 。

## themePlugins.prismjs

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否启用 [@vuepress/plugin-prismjs](../../plugins/markdown/prismjs.md) 。

## themePlugins.seo

- 类型： `SeoPluginOptions | boolean`

- 默认值： `true`

- 详情：

  是否启用 [@vuepress/plugin-seo](../../plugins/seo/seo/README.md) 。

  支持对象格式以作为插件选项。

## themePlugins.sitemap

- 类型： `SitemapPluginOptions | boolean`

- 默认值： `true`

- 详情：

  是否启用 [@vuepress/plugin-sitemap](../../plugins/seo/sitemap/README.md) 。

  支持对象格式以作为插件选项。
