# Giscus Options

## Config

### repo

- Type: `string`
- Details: The name of repository to store discussions.

### repoId

- Type: `string`
- Details:
  The ID of repository to store discussions. Generate through [Giscus Page](https://giscus.app/)

### category

- Type: `string`
- Details:
  The name of the discussion category.

### categoryId

- Type: `string`
- Details:
  The ID of the discussion category. Generate through [Giscus Page](https://giscus.app/)

### mapping

- Type: `string`
- Default: `"pathname"`
- Details:
  Page - Discussion mapping. For details see [Giscus Page](https://giscus.app/)

### strict

- Type: `boolean`
- Default: `true`
- Details:
  Whether enable strict mapping or not

### lazyLoading

- Type: `boolean`
- Default: `true`
- Details:
  Whether enable lazy loading or not

### reactionsEnabled

- Type: `boolean`
- Default: `true`
- Details:
  Whether enable reactions or not

### inputPosition

- Type: `"top" | "bottom"`
- Default: `"top"`
- Details:
  Input position

### lightTheme

- Type: `GiscusTheme`

  ```ts
  type GiscusTheme =
    | 'light'
    | 'light_high_contrast'
    | 'light_protanopia'
    | 'dark'
    | 'dark_high_contrast'
    | 'dark_protanopia'
    | 'dark_dimmed'
    | 'transparent_dark'
    | 'preferred_color_scheme'
    | `https://${string}`
  ```

- Default: `"light"`
- Details:

  Giscus theme used in lightmode

  Should be a built-in theme keyword or a css link starting with `https://`.

### darkTheme

- Type: `GiscusTheme`

  ```ts
  type GiscusTheme =
    | 'light'
    | 'light_high_contrast'
    | 'light_protanopia'
    | 'dark'
    | 'dark_high_contrast'
    | 'dark_protanopia'
    | 'dark_dimmed'
    | 'transparent_dark'
    | 'preferred_color_scheme'
    | `https://${string}`
  ```

- Default: `"dark"`
- Details:

  Giscus theme used in darkmode

  Should be a built-in theme keyword or a css link starting with `https://`.

## Plugin Config

You can directly configure serializable options in the plugin options:

```ts title=".vuepress/config.ts"
import { defineUserConfig } from 'vuepress'
import { commentPlugin } from '@vuepress/plugin-comment'

export default defineUserConfig({
  plugins: [
    commentPlugin({
      provider: 'Giscus',
      // other options
      // ...
    }),
  ],
})
```

## Client Config

You can use the `defineGiscusConfig` function to customize Giscus:

```ts title=".vuepress/client.ts"
import { defineClientConfig } from 'vuepress/client'
import { defineGiscusConfig } from '@vuepress/plugin-comment/client'

defineGiscusConfig({
  // Giscus config
})
```
