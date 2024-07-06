# 选项

## hostname

- 类型：`string`
- 必填：是
- 详情：

  部署域名

## author

- 类型：`Author`

  ```ts
  type AuthorName = string

  interface AuthorInfo {
    /**
     * 作者姓名
     */
    name: string

    /**
     * 作者网站
     */
    url?: string

    /**
     * 作者 Email
     */
    email?: string
  }

  type Author = AuthorName | AuthorName[] | AuthorInfo | AuthorInfo[]
  ```

- 详情：

  默认作者

## autoDescription

- 类型：`boolean`

- 默认值：`true`

- 详情：

  是否自动生成描述

## canonical

- 类型：`string | ((page: Page) => string | null)`

- 详情：

  首选链接

## fallBackImage

- 类型：`string`

- 详情：

  当找不到图片时的回退图片链接

## restrictions

- 类型：`string`

- 详情：

  内容的年龄分级，格式为 `[int]+`，如 `"13+"`

## twitterID

- 类型：`string`

- 详情：

  你的 twitter 用户名

## isArticle

- 类型：`(page: Page) => boolean`

- 详情：

  你可以使用此选项判断一个页面是否是文章。

## ogp

- 类型：

  ```ts
  function ogp(
    /** 插件推断的 OGP 信息 */
    ogp: SeoContent,
    /** 页面对象 */
    page: Page,
    /** VuePress App */
    app: App,
  ): SeoContent
  ```

- 详情：

  自定义 OGP 生成器

  你可以使用此选项来注入新的或覆盖掉默认生成的 OGP 标签。

## jsonLd

- 类型：

  ```ts
  function jsonLd(
    /** 由插件推断出的 JSON-LD 对象 */
    jsonLD: ArticleSchema | BlogPostingSchema | WebPageSchema,
    /** 页面对象 */
    page: Page,
    /** VuePress App */
    app: App,
  ): ArticleSchema | BlogPostingSchema | WebPageSchema
  ```

- 详情：

  自定义 JSON-LD 生成器

  你可以使用此选项来注入新的或覆盖掉默认生成的 JSON-LD 标签。

## customHead

- 类型：

  ```ts
  function customHead(
    /** head 标签配置 */
    head: HeadConfig[],
    /** 页面对象 */
    page: Page,
    /** VuePress App */
    app: App,
  ): void
  ```

- 详情：

  你可以使用此选项来直接注入任意格式的标签到 `<head>`。
