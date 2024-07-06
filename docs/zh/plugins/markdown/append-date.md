# append-date

<NpmBadge package="@vuepress/plugin-append-date" />

该插件会基于 [@vuepress/plugin-git](../development/git.md) 为 frontmatter 追加写作日期。

## 使用方法

```bash
npm i -D @vuepress/plugin-append-date@next
```

```ts
import { appendDatePlugin } from '@vuepress/plugin-append-date'

export default {
  plugins: [appendDatePlugin()],
}
```

## 选项

### key

- 类型: `string`
- 默认值: `"date"`
- 详情：追加时间时使用的 frontmatter 键名。

### format

- 类型: `"date" | "time" | "full"`
- 默认值: `"date"`
- 详情：追加时间时使用的日期格式。
