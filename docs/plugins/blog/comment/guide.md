---
layout: CommentPage
---

# Guide

## Setting Options

You can both set options with plugin options on Node side and set options in [client config file][client-config] on Browser side.

### With Plugin Options

```ts
import { commentPlugin } from '@vuepress/plugin-comment'

// .vuepress/config.ts
export default {
  plugins: [
    commentPlugin({
      provider: 'Artalk', // Artalk | Giscus | Waline | Twikoo

      // other options here
      // ...
    }),
  ],
}
```

### With Client Config File

```ts title=".vuepress/client.ts"
import { defineClientConfig } from 'vuepress/client'
import {
  defineArtalkConfig,
  // defineGiscusConfig,
  // defineTwikooConfig,
  // defineWalineConfig,
} from '@vuepress/plugin-comment/client'

defineArtalkConfig({
  // 选项
})
```

But here are some limitations you should remember:

- `provider`, locales and other resource related option must be set in plugin options.

  To ensure tree-shaking works, we must optimize entries at node so that bundler can understand which resource should be included in the final bundle.

  These options will be marked with <Badge text="Plugin Option Only" type="warning" vertical="baseline" /> in config reference.

- Options which can not be serialized to JSON must be set in client config.

  Options that receives function values can not be set in plugin options, as plugins are running under Node.js environment, so we can not pass these values and their contexts to browser.

  These options will be marked with <Badge text="Client Config Only" type="warning" vertical="baseline" /> in config reference.

## Adding Comment

This plugin globally registers a component `<CommentService />`.

- If you are a user, you should use `alias` and layout slots to insert the component. We recommended you to insert the comment component (`<CommentService />`) after the `<PageNav />` component, and the current page is a demo with default theme.
- If you are a theme developer, you should insert this component in the layout of your theme.

By default, `<CommentService />` component is enabled globally, and you can use `comment` option in both plugin options and page frontmatter to control it.

- You can disable it locally by setting `comment: false` in page frontmatter.
- To keep it globally disabled, please set `comment` to `false` in the plugin options. Then you can set `comment: true` in page frontmatter to enable it locally.

You can set `commentID` option in page frontmatter to customize comment ID, which is used to identify comment storage item to use for a page. By default it will be the `path` of the page, which means if you are deploying the site to multiple places, page with same content across sites will share the same comment data.

## Available Comment Services

Currently, you can choose from [Giscus](giscus/README.md), [Waline](waline/README.md), [Artalk](artalk/README.md) and [Twikoo](twikoo/README.md).

::: tip Recommended comment services

- Facing programmers and developers: Giscus
- Facing general public: Waline

:::

## Common Options

### provider <Badge text="Plugin Option Only" type="warning"/>

- Type: `"Artalk" | "Giscus" | "Twikoo" | "Waline" | "None"`
- Default: `"None"`
- Details: Comment service provider.

### comment

- Type: `boolean`
- Default: `true`
- Details: Whether to enable comment feature by default.

[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
