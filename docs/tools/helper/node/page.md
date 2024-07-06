# Page Related

These functions generate common information for your pages.

## getPageExcerpt

Get the excerpt of the page.

```ts
export interface PageExcerptOptions {
  /**
   * Excerpt separator
   *
   * @default "<!-- more -->"
   */
  separator?: string

  /**
   * Length of excerpt
   *
   * @description Excerpt length will be the minimal possible length reaching this value
   *
   * @default 300
   */
  length?: number

  /**
   * Tags which is considered as custom elements
   *
   * @description This is used to determine whether a tag is a custom element since all unknown tags are removed in excerpt.
   */
  isCustomElement?: (tagName: string) => boolean

  /**
   * Whether keep page title (first h1) in excerpt
   *
   * @default false
   */
  keepPageTitle?: boolean

  /**
   * Whether preserve tags like line numbers and highlight lines for code blocks
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

Get plain text of the page.

```ts
export interface PageTextOptions {
  /**
   * Whether convert text to single line content
   *
   * @default false
   */
  singleLine?: boolean

  /**
   * Length of text
   *
   * @description Text length will be the minimal possible length reaching this value
   *
   * @default 300
   */
  length?: number

  /**
   * Tags to be removed
   *
   * @description Table and code blocks are removed by default.
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
