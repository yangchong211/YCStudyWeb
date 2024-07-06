# blog

<NpmBadge package="@vuepress/plugin-blog" />

## 使用

```bash
npm i -D @vuepress/plugin-blog@next
```

```ts title=".vuepress/config.ts"
import { blogPlugin } from '@vuepress/plugin-blog'

export default {
  plugins: [
    blogPlugin({
      // 选项
    }),
  ],
}
```
