# sass-palette

<NpmBadge package="@vuepress/plugin-sass-palette" />

This plugin is mainly facing plugin and theme developers, it is more powerful than [`@vuepress/plugin-palette`](../palette.md).

## Usage

You must invoke `useSassPalettePlugin` function during plugin initialization to use this plugin.

```bash
npm i -D @vuepress/plugin-sass-palette@next
```

```ts title="Your plugin or theme entry"
import { useSassPalettePlugin } from 'vuepress-plugin-sass-palette'
import type { PluginFunction } from 'vuepress/core'

export const yourPlugin =
  (options): PluginFunction =>
  (app) => {
    useSassPalettePlugin(app, {
      // plugin options
    })

    return {
      // your plugin api
    }
  }
```
