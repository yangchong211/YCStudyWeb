# back-to-top

<NpmBadge package="@vuepress/plugin-back-to-top" />

该插件会给你的站点添加一个 _返回顶部_ 按钮。当页面向下滚动时，该按钮会显示在页面的右下角，点击它就会滚动到页面顶部。

该插件已经集成到默认主题中。

## 使用方法

```bash
npm i -D @vuepress/plugin-back-to-top@next
```

```ts
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default {
  plugins: [backToTopPlugin()],
}
```

## 选项

### threshold

- 类型：`数字`
- 默认值：`100`
- 详情：显示返回顶部按钮的滚动阈值距离（以像素为单位）

### progress

- 类型：`布尔值`
- 默认值：`true`
- 详情：是否在图标周围显示进度条

## 样式

你可以通过 CSS 变量来自定义 _返回顶部_ 按钮的样式：

@[code css](@vuepress/plugin-back-to-top/src/client/styles/vars.css)
