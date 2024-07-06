# Twikoo Options

## Config

### envId

- Type: `string`
- Required: Yes
- Details: Vercel address.

## Plugin Config

You can directly configure serializable options in the plugin options:

```ts title=".vuepress/config.ts"
import { defineUserConfig } from 'vuepress'
import { commentPlugin } from '@vuepress/plugin-comment'

export default defineUserConfig({
  plugins: [
    commentPlugin({
      provider: 'Twikoo',
      // other options
      // ...
    }),
  ],
})
```

## Client Config

You can use the `defineTwikooConfig` function to customize Twikoo:

```ts title=".vuepress/client.ts"
import { defineClientConfig } from 'vuepress/client'
import { defineTwikooConfig } from '@vuepress/plugin-comment/client'

defineTwikooConfig({
  // Twikoo config
})
```
