# rtl

<NpmBadge package="@vuepress/plugin-rtl" />

此插件会在配置的语言上设置 rtl 方向。

## 使用方法

```bash
npm i -D @vuepress/plugin-rtl@next
```

```ts
import { rtlPlugin } from '@vuepress/plugin-rtl'

export default {
  plugins: [
    rtlPlugin({
      // 配置项
      locales: ['/ar/'],
    }),
  ],
}
```

## 选项

### locales

- 类型：`string[]`
- 默认值：`['/']`
- 详情：
  开启 RTL 布局的多语言路径。

### selector

- 类型：`SelectorOptions`

  ```ts
  interface SelectorOptions {
    [element: string]: {
      [attrs: string]: string
    }
  }
  ```

- 默认值：`{ 'html': { dir: 'rtl' } }`

- 详情：

  开启 RTL 的选择器。

  默认设置意味着在 RTL 多语言中，`html` 元素的 `dir` 属性将被设置为 `rtl`。
