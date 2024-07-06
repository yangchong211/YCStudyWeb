# links-check

<NpmBadge package="@vuepress/plugin-links-check" />

此插件将检查您的 markdown 文件中的死链接。

此插件已集成到默认主题中。

## 使用

```bash
npm i -D @vuepress/plugin-links-check@next
```

```ts
import { linksCheckPlugin } from '@vuepress/plugin-links-check'

export default {
  plugins: [
    linksCheckPlugin({
      // 选项
    }),
  ],
}
```

## 选项

### dev

- 类型：`boolean`

- 默认值：`true`

- 详情：

  是否在开发服务器中检查 markdown 中的死链接

### build

- 类型：`boolean | 'error'`

- 默认值：`true`

- 详情：

  是否在构建中检查 markdown 中的死链接。如果设置为 `'error'`，则构建将在存在死链接时失败。

### exclude

- 类型：`(string | RegExp)[] | ((link: string, isDev: boolean) => boolean)`

- 详情：

  应该从检查中排除的链接。您可以使用字符串或正则表达式的列表，或者返回布尔值的函数。

- 示例：

  ```ts
  linksCheckPlugin({
    exclude: [
      // 通过字符串排除链接
      '/exclude-link',
      // 通过正则表达式排除链接
      /\/exclude-link-regex/,
    ],

    // 或者通过函数排除链接
    exclude: (link, isDev) => {
      if (isDev) {
        return link.startsWith('/exclude-link-dev')
      }
      return link.startsWith('/exclude-link-build')
    },
  })
  ```
