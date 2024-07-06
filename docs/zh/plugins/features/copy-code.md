# copy-code

<NpmBadge package="@vuepress/plugin-copy-code" />

此插件会自动在 PC 设备上为每个代码块右上角添加复制按钮。

默认选择器匹配 `@vuepress/theme-default`，所以在你自己的主题中集成时可能需要调整它。

## 使用

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

## 选项

### selector

- 类型：`string | string[]`
- 默认值：`'.theme-default-content div[class*="language-"] pre'`
- 详情:

  代码块选择器

### showInMobile

- 类型：`boolean`
- 默认值：`false`
- 详情:

  是否展示在移动端

### duration

- 类型：`number`
- 默认值：`2000`
- 详情:

  提示消息显示时间，设置为 `0` 会禁用提示。

### delay

- 类型：`number`
- 默认值：`800`
- 详情:

  注册复制按钮的延时，单位 ms。

  如果你使用的主题有切换动画，建议配置此选项为 `切换动画时长 + 200`

### ignoreSelector

- 类型：`string[]`
- 详情:

  代码块中的元素选择器，用于在复制时忽略相关元素。

  例如: `['.token.comment']` 将忽略代码块中类名为 `.token.comment` 的节点 （这会在 `prismjs` 中忽略注释）。

### transform <Badge type="tip" text="仅限组合式 API" />

- 类型：`(preElement: HTMLPreElement) => void`
- 详情:

  一个转换器，用于在复制之前对 `<pre>` 中代码块内容进行修改。该选项仅在使用 `useCopyCode()` 时有效。

- 示例：

  ```ts
  import { useCopyCode } from '@vuepress/plugin-copy-code/client'

  export default {
    setup() {
      useCopyCode({
        transform: (preElement) => {
          // 删除 `.ignore` 类名的元素
          pre.querySelectorAll('.ignore').remove()
          // 插入版权信息
          pre.innerHTML += `\n Copied by VuePress`
        },
        // ...其它选项
      })
    },
  }
  ```

### locales

- 类型：`CopyCodePluginLocaleConfig`

  ```ts
  interface CopyCodePluginLocaleData {
    /**
     * 复制文字
     */
    copy: string

    /**
     * 已复制文字
     */
    copied: string
  }

  interface CopyCodePluginLocaleConfig {
    [localePath: string]: CopyCodePluginLocaleData
  }
  ```

- 必填：否
- 详情:

  复制按钮插件的国际化配置。

- 示例：

  ```ts
  import { copyCodePlugin } from '@vuepress/plugin-copy-code'

  export default {
    locales: {
      '/': {
        // 这是一个支持的语言
        lang: 'zh-CN',
      },
      '/xx/': {
        // 这是一个没有收到插件支持的语言
        lang: 'mm-NN',
      },
    },

    plugins: [
      copyCodePlugin({
        locales: {
          '/': {
            // 覆盖复制按钮标签文字
            copy: '复制此段代码',
          },

          '/xx/': {
            // 在这里完整设置 `mm-NN` 的多语言配置
          },
        },
      }),
    ],
  }
  ```

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

## 样式

你可以通过 CSS 变量来自定义*复制按钮*的样式：

@[code{1-6} css](@vuepress/plugin-copy-code/src/client/styles/copy-code.css)
