# 语言配置

这些选项用于配置与语言相关的文本。

如果你的站点是以英语以外的其他语言提供服务的，你应该为每个语言设置这些选项来提供翻译。

## repoLabel

- 类型： `string`

- 详情：

  项目仓库的标签。

  它将被用作 _仓库链接_ 的文字。_仓库链接_ 将会显示为导航栏的最后一个元素。

  如果你不明确指定该配置项，它将会根据 [repo](./config.md#repo) 配置项自动推断。

## selectLanguageText

- 类型： `string`

- 详情：

  _选择语言菜单_ 的文字。

  如果你在站点配置中设置了多个 [locales](https://v2.vuepress.vuejs.org/zh/config.html#locales) ，那么 _选择语言菜单_ 就会显示在导航栏中仓库按钮的旁边。

## selectLanguageAriaLabel

- 类型： `string`

- 详情：

  _选择语言菜单_ 的 `aria-label` 属性。

  它主要是为了站点的可访问性 (a11y) 。

## selectLanguageName

- 类型： `string`

- 详情：

  Locale 的语言名称。

  该配置项 **仅能在主题配置的 [locales](./config.md#locales) 的内部生效** 。它将被用作 locale 的语言名称，展示在 _选择语言菜单_ 内。

- 示例：

```ts
export default {
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-CN',
    },
  },
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
  }),
}
```

## navbarLabel

- 类型：`null | string`

- 详情：

  导航栏中主导航 `aria-label` 属性的值。

## pageNavbarLabel

- 类型：`null | string`

- 详情：

  下一页/上一页导航 `aria-label` 属性的值

## editLinkText

- 类型： `string`

- 默认值： `'Edit this page'`

- 详情：

  _编辑此页_ 链接的文字。

## lastUpdatedText

- 类型： `string`

- 默认值： `'Last Updated'`

- 详情：

  _最近更新时间戳_ 标签的文字。

## contributorsText

- 类型： `string`

- 默认值： `'Contributors'`

- 详情：

  _贡献者列表_ 标签的文字。

## tip

- 类型： `string`

- 默认值： `'TIP'`

- 详情：

  Tip [自定义容器](./markdown.md#自定义容器) 的默认标题。

## warning

- 类型： `string`

- 默认值： `'WARNING'`

- 详情：

  Warning [自定义容器](./markdown.md#自定义容器) 的默认标题。

## danger

- 类型： `string`

- 默认值： `'DANGER'`

- 详情：

  Danger [自定义容器](./markdown.md#自定义容器) 的默认标题。

## notFound

- 类型： `string[]`

- 默认值： `['Not Found']`

- 详情：

  404 页面的提示信息。

  当用户进入 404 页面时，会从数组中随机选取一条信息进行展示。

## backToHome

- 类型： `string`

- 默认值： `'Back to home'`

- 详情：

  404 页面中 _返回首页_ 链接的文字。

## toggleColorMode

- 类型： `string`

- 默认值： `'toggle color mode'`

- 详情：

  切换颜色模式按钮的标题文字。

  它主要是为了站点的可访问性 (a11y) 。

- 参考：
  - [默认主题 > 配置 > colorModeSwitch](./config.md#colormodeswitch)

## toggleSidebar

- 类型： `string`

- 默认值： `'toggle sidebar'`

- 详情：

  切换侧边栏按钮的标题文字。

  它主要是为了站点的可访问性 (a11y) 。

## prev

- 类型： `string | false`
- 默认值： `'Prev'`
- 详情：

  上一页按钮的文字。设置为 `false` 时，将隐藏上一页按钮。

## next

- 类型： `string | false`
- 默认值： `'Next'`
- 详情：

  下一页按钮的文字。设置为 `false` 时，将隐藏下一页按钮。
