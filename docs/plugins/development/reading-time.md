# reading-time

<NpmBadge package="@vuepress/plugin-reading-time" />

This plugin will generate word count and estimated reading time for each page.

## Usage

```bash
npm i -D @vuepress/plugin-reading-time@next
```

```ts
import { readingTimePlugin } from '@vuepress/plugin-reading-time'

export default {
  plugins: [
    readingTimePlugin({
      // options
    }),
  ],
}
```

The plugin will inject reading time information into the `readingTime` of the page data, where:

- `readingTime.minutes`: estimated reading time (minutes) `number`
- `readingTime.words`: word count `number`

### Getting data on Node Side

For any page, you can get estimated reading time and word count from `page.data.readingTime`:

```ts
page.data.readingTime // { minutes: 3.2, words: 934 }
```

You can access it for further processing in the `extendsPage` lifecycle and other lifecycle:

```ts
export default {
  // ...
  extendsPage: (page) => {
    page.data.readingTime // { minutes: 3.2, words: 934 }
  },

  onInitialized: (app) => {
    app.pages.map((page) => {
      page.data.readingTime // { minutes: 3.2, words: 934 }
    })
  },
}
```

### Getting data on Client Side

You can import `useReadingTimeData` and `useReadingTimeLocale` from `@vuepress/plugin-reading-time/client` to get the reading time data and locale data of the current page:

```vue
<script setup lang="ts">
import {
  useReadingTimeData,
  useReadingTimeLocale,
} from '@vuepress/plugin-reading-time/client'

const readingTimeData = useReadingTimeData() // { minutes: 1.1, words: 100 }
const readingTimeLocale = useReadingTimeLocale() // { time: "1 minute", words: "100 words" }
</script>
```

## Options

### wordPerMinute

- Type: `number`
- Default: `300`
- Details:
  Reading speed (words per minute)

### locales

- Type: `ReadingTimePluginLocaleConfig`

  ```ts
  interface ReadingTimePluginLocaleData {
    /**
     * Word template, `$word` will be automatically replaced by actual words
     */
    word: string

    /**
     * Text for less than one minute
     */
    less1Minute: string

    /**
     * Time template
     */
    time: string
  }

  interface ReadingTimePluginLocaleConfig {
    [localePath: string]: ReadingTimePluginLocaleData
  }
  ```

- Required: No

- Details:

  Locales config for reading-time plugin.

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

## Client API

You can import and use these APIs from `@vuepress/plugin-reading-time/client`:

::: tip These APIs won't throw even you disable the plugin.

:::

### useReadingTimeData

```ts
interface ReadingTime {
  /** Expect reading time in minute unit */
  minutes: number
  /** Words count of content */
  words: number
}

const useReadingTimeData: () => ComputedRef<ReadingTime | null>
```

`null` is returned when the plugin is disabled.

### useReadingTimeLocale

```ts
interface ReadingTimeLocale {
  /** Expect reading time text in locale */
  time: string
  /** Word count text in locale */
  words: string
}

const useReadingTimeLocale: () => ComputedRef<ReadingTimeLocale>
```

## Advanced Usage

This plugin is targeting plugin and theme developers mostly, so we provide a "Use API":

```ts title="your plugin or theme entry"
import { useReadingTimePlugin } from '@vuepress/plugin-reading-time'

export default (options) => (app) => {
  useReadingTimePlugin(app, {
    // your options
  })

  return {
    name: 'vuepress-plugin-xxx', // or vuepress-theme-xxx
  }
}
```

::: tip Why you should use "Use API"

1. When you register a plugin multiple times, vuepress will gives you warning about that telling you only the first one takes effect. The `useReadingTimePlugin` automatically detects if the plugin is registered and avoid registering multiple times.
1. If you access reading time data in `extendsPage` lifecycle, then `@vuepress/plugin-reading-time` must be called before your theme or plugin, otherwise you will get `undefined` for `page.data.readingTime`. The `useReadingTimePlugin` ensures that `@vuepress/plugin-reading-time` is called before your theme or plugin.

:::

We also provides a `removeReadingTimePlugin` api to remove the plugin.You can use this to ensure your call take effect or clear the plugin:

```ts title="your plugin or theme entry"
import { useReadingTimePlugin } from '@vuepress/plugin-reading-time'

export default (options) => (app) => {
  // this removes any existing reading time plugin at this time
  removeReadingTimePlugin(app)

  // so this will take effect even if there is a reading time plugin registered before
  useReadingTimePlugin(app, {
    // your options
  })

  return {
    name: 'vuepress-plugin-xxx', // or vuepress-theme-xxx
  }
}
```
