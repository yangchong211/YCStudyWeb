# copy-code

<NpmBadge package="@vuepress/plugin-copy-code" />

This plugin will automatically add a copy button to the top right corner of each code block on PC devices.

The default selector matches `@vuepress/theme-default`, so you might need to change it when integrating your own theme.

## Usage

```bash
npm i -D @vuepress/plugin-copy-code@next
```

```ts
import { copyCodePlugin } from '@vuepress/plugin-copy-code'

export default {
  plugins: [
    copyCodePlugin({
      // options
    }),
  ],
}
```

## Options

### selector

- Type: `string | string[]`
- Default: `'.theme-default-content div[class*="language-"] pre'`
- Details:

  Code block selector

### showInMobile

- Type: `boolean`
- Default: `false`
- Details:

  Whether to display copy button on the mobile device

### duration

- Type: `number`
- Default: `2000`
- Details:

  Hint display time, setting it to `0` will disable the hint.

### delay

- Type: `number`
- Default: `800`
- Details:

  The delay of registering copy code buttons, in ms.

  If the theme you are using has a switching animation, it is recommended to configure this option to `Switch animation duration + 200`.

### ignoreSelector

- Type: `string[]`
- Details:

  Elements selector in code blocks, used to ignore related elements when copying.

  For example, `['.token.comment']` will ignore nodes with the class name `.token.comment` in code blocks (which in `prismjs` refers to ignoring comments).

### transform <Badge type="tip" text="Composables API Only" />

- Type: `(preElement: HTMLPreElement) => void`
- Default: `undefined`
- Details:

  A transformer to modify the content of the code block in the `<pre>` element before copying. This option is only valid when using `useCopyCode()`.

- Example:

  ```ts
  import { useCopyCode } from '@vuepress/plugin-copy-code/client'

  export default {
    setup() {
      useCopyCode({
        transform: (preElement) => {
          // Remove all `.ignore` elements
          pre.querySelectorAll('.ignore').remove()
          // insert copyright
          pre.innerHTML += `\n Copied by VuePress`
        },
        // ...other options
      })
    },
  }
  ```

### locales

- Type: `CopyCodePluginLocaleConfig`

  ```ts
  interface CopyCodePluginLocaleData {
    /**
     * Copy text
     */
    copy: string

    /**
     * Copied text
     */
    copied: string
  }

  interface CopyCodePluginLocaleConfig {
    [localePath: string]: CopyCodePluginLocaleData
  }
  ```

- Required: No

- Details:

  Locales config for copy code plugin.

- Example:

  ```ts
  import { copyCodePlugin } from '@vuepress/plugin-copy-code'

  export default {
    locales: {
      '/': {
        // this is a supported language
        lang: 'en-US',
      },
      '/xx/': {
        // the plugin does not support this language
        lang: 'mm-NN',
      },
    },

    plugins: [
      copyCodePlugin({
        locales: {
          '/': {
            // Override copy button label text
            copy: 'Copy Codes from code block',
          },

          '/xx/': {
            // Complete locale config for `mm-NN` language here
          },
        },
      }),
    ],
  }
  ```

::: details Built-in Supported Languages

- **Simplified Chinese** (zh-CN)
- **Traditional Chinese** (zh-TW)
- **English (United States)** (en-US)
- **German** (de-DE)
- **German (Australia)** (de-AT)
- **Russian** (ru-RU)
- **Ukrainian** (uk-UA)
- **Vietnamese** (vi-VN)
- **Portuguese (Brazil)** (pt-BR)
- **Polish** (pl-PL)
- **French** (fr-FR)
- **Spanish** (es-ES)
- **Slovak** (sk-SK)
- **Japanese** (ja-JP)
- **Turkish** (tr-TR)
- **Korean** (ko-KR)
- **Finnish** (fi-FI)
- **Indonesian** (id-ID)
- **Dutch** (nl-NL)

:::

## Styles

You can customize the icon of the _copy button_ via CSS variables:

@[code{1-6} css](@vuepress/plugin-copy-code/src/client/styles/copy-code.css)
