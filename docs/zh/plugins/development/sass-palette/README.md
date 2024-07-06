# sass-palette

<NpmBadge package="@vuepress/plugin-sass-palette" />

这个插件主要面向插件和主题开发者，相比 [`@vuepress/plugin-palette`](../palette.md) 更加强大。

## 使用

你必须在插件初始化期间调用 `useSassPalettePlugin` 函数来使用此插件。

```bash
npm i -D @vuepress/plugin-sass-palette@next
```

```ts title="你的插件或主题入口"
import { useSassPalettePlugin } from 'vuepress-plugin-sass-palette'
import type { PluginFunction } from 'vuepress/core'

export const yourPlugin =
  (options): PluginFunction =>
  (app) => {
    useSassPalettePlugin(app, {
      // 插件选项
    })

    return {
      // 你的插件 API
    }
  }
```
