# Waline Config

## Config

### serverURL

- Type: `string`
- Required: Yes
- Details: Waline server address url

### emoji

- Type: `(string | WalineEmojiInfo)[] | false`

  ```ts
  type WalineEmojiPresets = `http://${string}` | `https://${string}`

  interface WalineEmojiInfo {
    /**
     * Emoji name show on tab
     */
    name: string
    /**
     * Current folder link
     */
    folder?: string
    /**
     * Common prefix of Emoji icons
     */
    prefix?: string
    /**
     * Type of Emoji icons, will be regarded as file extension
     */
    type?: string
    /**
     * Emoji icon show on tab
     */
    icon: string
    /**
     * Emoji image list
     */
    items: string[]
  }
  ```

- Default: `['//unpkg.com/@waline/emojis@1.1.0/weibo']`
- Reference:
  - [Guide → Emoji](https://waline.js.org/en/guide/features/emoji.html)
- Details: Emoji settings.

### dark

- Type: `string | boolean`
- Default: `false`
- Reference:

  - [Custom Style](https://waline.js.org/en/guide/features/style.html)

- Details:

  Darkmode support

  - Setting a boolean will set the dark mode according to its value.
  - Set it to `'auto'` will display darkmode due to device settings.
  - Filling in a CSS selector will enable darkmode only when the selector match waline ancestor nodes.

### commentSorting

- Type: `WalineCommentSorting`
- Default: `'latest'`
- Details:

  Comment list sorting methods.

  Optional values: `'latest'`, `'oldest'`, `'hottest'`

### meta

- Type: `string[]`
- Default: `['nick','mail','link']`
- Details:

  Reviewer attributes.

  Optional values: `'nick'`, `'mail'`, `'link'`

### requiredMeta

- Type: `string[]`
- Default: `[]`
- Details:

  Set required fields, optional values:

  - `[]`
  - `['nick']`
  - `['nick','mail']`

### login

- Type: `string`
- Default value: `'enable'`
- Details:

  Login mode status, optional values:

  - `'enable'`: enable login (default)
  - `'disable'`: Login is disabled, users should fill in information to comment
  - `'force'`: Forced login, users must login to comment

### wordLimit

- Type: `number | [number, number]`
- Default: `0`
- Details:

  Comment words limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to `0`.

### pageSize

- Type: `number`
- Default: `10`
- Details:

  Number of comments per page.

### imageUploader <Badge text="Client Config Only" type="warning"/>

- Type: `WalineImageUploader | false`

  ```ts
  type WalineImageUploader = (image: File) => Promise<string>
  ```

- Reference:

  - [Cookbook → Upload Image](https://waline.js.org/en/cookbook/customize/upload-image.html)

- Details:

  Custom image upload method. The default behavior is to embed images Base 64 encoded, you can set this to `false` to disable image uploading.

  The function should receive an image object and return a Promise that provides the image address.

### highlighter <Badge text="Client Config Only" type="warning"/>

- Type: `WalineHighlighter | false`

  ```ts
  type WalineHighlighter = (code: string, lang: string) => string
  ```

- Reference:

  - [Cookbook → Customize Highlighter](https://waline.js.org/en/cookbook/customize/highlighter.html)

- Details:

  **Code highlighting**, use `hanabi` by default. The function passes in original content of code block and language of the code block. You should return a string directly.

  You can pass in a code highlighter of your own, or set to `false` to disable code highlighting.

### texRenderer <Badge text="Client Config Only" type="warning"/>

- Type: `WalineTexRenderer | false`

  ```ts
  type WalineTexRenderer = (blockMode: boolean, tex: string) => string
  ```

- Reference:

  - [Cookbook → Customize TeX Renderer](https://waline.js.org/en/cookbook/customize/tex-renderer.html)
  - [MathJax](https://www.mathjax.org/)
  - [KaTeX](https://katex.org/)

- Details:

  Customize TeX rendering, the default behavior is to prompt that the preview mode does not support TeX. The function provides two parameters, the first parameter indicates whether it should be rendered in block level, and the second parameter is the string of the TeX content, and return a HTML string as render result.

  You can import TeX renderer to provide preview feature. We recommend you to use Katex or MathJax, or you can set to `false` to disable parsing TeX.

### search <Badge text="Client Config Only" type="warning"/>

- Type: `WalineSearchOptions | false`

  ```ts
  interface WalineSearchImageData extends Record<string, unknown> {
    /**
     * Image link
     */
    src: string

    /**
     * Image title
     *
     * @description Used for alt attribute of image
     */
    title?: string

    /**
     * Image preview link
     *
     * @description For better loading performance, we will use this thumbnail first in the list
     *
     * @default src
     */
    preview?: string
  }

  type WalineSearchResult = WalineSearchImageData[]

  interface WalineSearchOptions {
    /**
     * Search action
     */
    search: (word: string) => Promise<WalineSearchResult>

    /**
     * Default result when opening list
     *
     * @default () => search('')
     */
    default?: () => Promise<WalineSearchResult>

    /**
     * Fetch more action
     *
     * @description It will be triggered when the list scrolls to the bottom. If your search service supports paging, you should set this to achieve infinite scrolling
     *
     * @default (word) => search(word)
     */
    more?: (word: string, currentCount: number) => Promise<WalineSearchResult>
  }
  ```

- Details: Customize search features, you can disable search function by setting it to `false`.

### recaptchaV3Key

- Type: `string`
- Details:

  reCAPTCHA V3 is a captcha service provided by Google. You can add reCAPTCHA V3 site key with `recaptchaV3Key` to enable it.

  You should also set environment variable `RECAPTCHA_V3_SECRET` for server.

### reaction

- Type: `boolean | string[]`
- Default: `false`
- Details:

  Add emoji interaction function to the article, set it to `true` to provide the default emoji, you can also customize the emoji image by setting the emoji url array, and supports a maximum of 8 emojis.

### metaIcon <Badge text="Plugin Option Only" type="warning"/>

- Type: `boolean`
- Default: `true`
- Details: Whether import meta icon.

### locales <Badge text="Plugin Option Only" type="warning"/>

- Type: `WalineLocales`

  ```ts
  interface WalineLocales {
    [localePath: string]: WalineLocale
  }
  ```

- Reference:
  - [Waline Locales](https://waline.js.org/en/cookbook/customize/locale.html)
- Details:
  Waline locales.

## Plugin Config

You can directly configure serializable options in the plugin options:

```ts title=".vuepress/config.ts"
import { defineUserConfig } from 'vuepress'
import { commentPlugin } from '@vuepress/plugin-comment'

export default defineUserConfig({
  plugins: [
    commentPlugin({
      provider: 'Waline',
      // other options
      // ...
    }),
  ],
})
```

## Client Config

You can use the `defineWalineConfig` function to customize Waline:

```ts title=".vuepress/client.ts"
import { defineClientConfig } from 'vuepress/client'
import { defineWalineConfig } from '@vuepress/plugin-comment/client'

defineWalineConfig({
  // Waline config
})
```
