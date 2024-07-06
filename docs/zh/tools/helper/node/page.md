# 页面相关

这些函数为你的页面生成常见信息。

## getPageExcerpt

获取页面摘要。

```ts
export interface PageExcerptOptions {
  /**
   * 摘要分隔符
   *
   * @default "<!-- more -->"
   */
  separator?: string

  /**
   * 摘要的长度
   *
   * @description 摘要的长度会尽可能的接近这个值
   *
   * @default 300
   */
  length?: number

  /**
   * 被认为是自定义元素的标签
   *
   * @description 用于判断一个标签是否是自定义元素，因为在摘要中，所有的未知标签都会被移除。
   */
  isCustomElement?: (tagName: string) => boolean

  /**
   * 是否保留页面标题 (第一个 h1)
   *
   * @default false
   */
  keepPageTitle?: boolean

  /**
   * 是否保留代码块的标签，诸如行号和高亮行
   *
   * @default false
   */
  keepFenceDom?: boolean
}

export const getPageExcerpt: (
  app: App,
  page: Page,
  options?: PageExcerptOptions,
) => string
```

## getPageText

获取页面纯文本。

```ts
export interface PageTextOptions {
  /**
   * 是否将文字转换成单行内容
   *
   * @default false
   */
  singleLine?: boolean

  /**
   * 文字的长度
   *
   * @description 文字的长度会尽可能的接近这个值
   *
   * @default 300
   */
  length?: number

  /**
   * 需要移除的标签
   *
   * @description 默认情况下表格和代码块会被移除
   *
   * @default ['table', 'pre']
   */
  removedTags?: string[]
}

export const getPageText: (
  app: App,
  page: Page,
  options?: PageTextOptions,
) => string
```
