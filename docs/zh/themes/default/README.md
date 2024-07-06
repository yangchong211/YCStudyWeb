# 默认主题

<NpmBadge package="@vuepress/theme-default" />

## 使用方法

安装默认主题：

```bash
npm i -D @vuepress/theme-default@next
```

在配置文件中指定主题：

```ts title=".vuepress/config.ts"
import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({
    // 在这里添加主题配置
  }),
}
```
