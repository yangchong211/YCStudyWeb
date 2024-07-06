# copyright

<NpmBadge package="@vuepress/plugin-copyright" />

This plugin can automatically append copyright information when visitors copy content from your site, and can also prohibit site copying or selection.

## Usage

```bash
npm i -D @vuepress/plugin-copyright@next
```

```ts
import { copyrightPlugin } from '@vuepress/plugin-copyright'

export default {
  plugins: [
    copyrightPlugin({
      // options
    }),
  ],
}
```

### Enabling Copyright

This plugin **is disabled globally by default**, you can:

- Manually enable it by setting `copy: true` in page frontmatter
- Set `global: true` in plugin options to enable it globally, and set `copy: false` in page frontmatter to disable it.

To avoid disturbing visitors, copyright information will be appended only when the copied content length is greater than 100. Set `triggerLength` in plugin options if you want to change this threshold, or via `copy.triggerLength` in page frontmatter.

You can set default author and license information via `author` and `license` in plugin options.

If your site have different authors and license in different pages, you can set `authorGetter` and `licenseGetter` with function `(page: Page) => string` that takes the current page object as parameter and returns the corresponding information.

The plugin will generate copyright information from author, license, and page link via template by default, and append it when copying. If you think that this is not flexible enough, you can set `copyrightGetter` option to return a completely customized information with Page object or return null to use the default template.

### Disable Copy and Selection

If you want to prevent users copying long content, you can set `maxLength` in plugin options to customize this limit, or via `copy.maxLength` in page frontmatter.

- If you don't want users to copy your entire site or specific page text, you can set `disableCopy` in plugin options or `copy.disableCopy` in page frontmatter, the latter has higher priority.
- If you don't want users to select your entire site or specific page text, you can set `disableSelection` in plugin options or `copy.disableSelection` in page frontmatter. This option has higher priority.

## Options

### author

- Type: `string`
- Details: Default author Information

### license

- Type: `string`
- Details: Default license Information

### authorGetter

- Type: `(page: Page) => string | null`
- Details: Author getter

### licenseGetter

- Type: `(page: Page) => string | null`
- Details: License getter

### copyrightGetter

- Type: `(page: Page) => string | null`
- Details: Copyright getter

### triggerLength

- Type: `number`
- Default: `100`
- Details: Min content length triggering copyright append

### maxLength

- Type: `number`
- Default: `0`
- Details: Max content length which allows to copy, `0` means no limit.

### global

- Type: `boolean`
- Default: `false`
- Details: Whether enable globally.

### disableCopy

- Type: `boolean`
- Default: `false`
- Details: Disable copy

### disableSelection

- Type: `boolean`
- Default: `false`
- Details: Disable selection

### canonical

- Type: `string`
- Details: Canonical deploy location.

::: tip Example

If you are deploying same content under `https://myblog.com` and `https://blog.com/username/`, you may want to prefer one site as reference link.

- If you prefer the first one, you should set `canonical` to `https://myblog.com`
- If you prefer the second one, you should set `canonical` to `https://blog.com/username/`

So copyright message triggered on another site also points to your preferred site.

:::

### locales

- Type: `CopyrightPluginLocaleConfig`

  ```ts
  interface CopyrightPluginLocaleData {
    /**
     * Author text
     *
     * @description `:author` will be replaced by author
     */
    author: string

    /**
     * License text
     *
     * @description `:license` will be replaced by current license
     */
    license: string

    /**
     * Link text
     *
     * @description `:link` will be replaced by current page link
     */
    link: string
  }

  interface CopyrightPluginLocaleConfig {
    [localePath: string]: CopyrightPluginLocaleData
  }
  ```

- Details: Locale config for copyright plugin.

- Example:

  ```ts
  import { copyrightPlugin } from '@vuepress/plugin-copyright'

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
      copyrightPlugin({
        locales: {
          '/': {
            // Override link text
            link: 'Original posted at :link',
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

## Frontmatter

### copy.triggerLength

- Type: `number`
- Default: `100`
- Details: Min content length triggering copyright append

### copy.maxLength

- Type: `number`
- Default: `0`
- Details: Max content length which allows to copy, `0` means no limit.

### copy.disableCopy

- Type: `boolean`
- Default: `false`
- Details: Disable copy

### copy.disableSelection

- Type: `boolean`
- Default: `false`
- Details: Disable selection
