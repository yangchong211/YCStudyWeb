# reading-time

<NpmBadge package="@vuepress/plugin-reading-time" />

此插件会为每个页面生成字数统计与预计阅读时间。

## 使用方法

```bash
npm i -D @vuepress/plugin-reading-time@next
```

```ts title=".vuepress/config.ts"
import { readingTimePlugin } from '@vuepress/plugin-reading-time'

export default {
  plugins: [
    readingTimePlugin({
      // 配置项
    }),
  ],
}
```

插件会将相关信息注入到页面数据的 `readingTime`，其中：

- `readingTime.minutes`：为预计阅读时间（分钟）`number`
- `readingTime.words`：字数统计，`number`

### 在 Node 侧获取数据

对于任何页面，你可以从 `page.data.readingTime` 获取预计阅读时间与字数统计:

```ts
page.data.readingTime // { minutes: 3.2, words: 934 }
```

你可以在 `extendsPage` 以及其他生命周期获取它做进一步处理:

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

### 在客户端侧获取数据

你可以从 `@vuepress/plugin-reading-time/client` 导入 `useReadingTimeData` 和 `useReadingTimeLocale` 来获取当前页面的阅读时间数据和语言环境数据：

```vue
<script setup lang="ts">
import {
  useReadingTimeData,
  useReadingTimeLocale,
} from '@vuepress/plugin-reading-time/client'

const readingTimeData = useReadingTimeData() // { minutes: 1.1, words: 100 }
const readingTimeLocale = useReadingTimeLocale() // { time: "1 分钟", words: "100 字" }
</script>
```

## 选项

### wordPerMinute

- 类型：`number`
- 默认值：`300`
- 详情：
  每分钟阅读字数

### locales

- 类型：`ReadingTimePluginLocaleConfig`

  ```ts
  interface ReadingTimePluginLocaleData {
    /**
     * 字数模板，模板中 `$word` 会被自动替换为字数
     */
    word: string

    /**
     * 小于一分钟文字
     */
    less1Minute: string

    /**
     * 时间模板
     */
    time: string
  }

  interface ReadingTimePluginLocaleConfig {
    [localePath: string]: ReadingTimePluginLocaleData
  }
  ```

- 必填：否

- 详情：

  阅读时间插件的国际化配置。

::: details 内置支持语言

- **简体中文** (zh-CN)
- **繁体中文** (zh-TW)
- **英文(美国)** (en-US)
- **德语** (de-DE)
- **德语(澳大利亚)** (de-AT)
- **俄语** (ru-RU)
- **乌克兰语** (uk-UA)
- **越南语** (vi-VN)
- **葡萄牙语(巴西)** (pt-BR)
- **波兰语** (pl-PL)
- **法语** (fr-FR)
- **西班牙语** (es-ES)
- **斯洛伐克** (sk-SK)
- **日语** (ja-JP)
- **土耳其语** (tr-TR)
- **韩语** (ko-KR)
- **芬兰语** (fi-FI)
- **印尼语** (id-ID)
- **荷兰语** (nl-NL)

:::

## 客户端 API

你可以从 `@vuepress/plugin-reading-time/client` 导入并使用这些 API：

::: tip 即使插件被禁用，这些 API 也不会抛出错误。

:::

### useReadingTimeData

```ts
interface ReadingTime {
  /** 分钟为单位的预计阅读时长 */
  minutes: number
  /** 内容的字数 */
  words: number
}

const useReadingTimeData: () => ComputedRef<ReadingTime | null>
```

当插件被禁用时会返回 `null`。

### useReadingTimeLocale

```ts
interface ReadingTimeLocale {
  /** 当前语言的预计阅读时间 */
  time: string
  /** 当前语言的字数文字 */
  words: string
}

const useReadingTimeLocale: () => ComputedRef<ReadingTimeLocale>
```

## 高级使用

由于此插件主要面向插件和主题开发者，所以提供了 "使用 API"：

```ts title="你插件或主题的入口"
import { useReadingTimePlugin } from '@vuepress/plugin-reading-time'

export default (options) => (app) => {
  useReadingTimePlugin(app, {
    // 你的选项
  })

  return {
    name: 'vuepress-plugin-xxx', // or vuepress-theme-xxx
  }
}
```

::: tip 为什么你应该使用 "使用 API"

1. 当你多次注册一个插件时，vuepress 会给你一个警告，告诉你只有第一个插件会生效。`useReadingTimePlugin` 会自动检测插件是否已经注册，避免多次注册。

1. 如果你在 `extendsPage` 生命周期访问阅读时间数据，那么 `@vuepress/plugin-reading-time` 必须在你的主题或插件之前被调用，否则你会得到未定义的 `page.data.readingTime`。`useReadingTimePlugin` 确保了 `@vuepress/plugin-reading-time` 在你的主题或插件之前被调用。

:::

我们也提供了一个 `removeReadingTimePlugin` api 来移除插件。你可以使用它来确保你的调用生效或清除插件:

```ts title="你插件或主题的入口"
import { useReadingTimePlugin } from '@vuepress/plugin-reading-time'

export default (options) => (app) => {
  // 这会移除任何当前存在的阅读时间插件
  removeReadingTimePlugin(app)

  // 所以这会生效，即使之前已经注册了一个阅读时间插件
  useReadingTimePlugin(app, {
    // 你的选项
  })

  return {
    name: 'vuepress-plugin-xxx', // or vuepress-theme-xxx
  }
}
```
