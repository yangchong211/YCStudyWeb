# Config

## hostname

- Type: `string`
- Required: Yes
- Details:

  Deploy hostname.

## author

- Type: `Author`

  ```ts
  type AuthorName = string

  interface AuthorInfo {
    /**
     * Author name
     */
    name: string

    /**
     * Author website
     */
    url?: string

    /**
     * Author email
     */
    email?: string
  }

  type Author = AuthorName | AuthorName[] | AuthorInfo | AuthorInfo[]
  ```

- Required: No

- Details:

  Default author.

## autoDescription

- Type: `boolean`
- Default: `true`
- Details:

  Whether generate description automatically

## canonical

- Type: `string | ((page: Page) => string | null)`
- Details:

  Canonical link

## fallBackImage

- Type: `string`
- Details:

  Fallback Image link when no image are found

## restrictions

- Type: `string`
- Details:

  The age rating of the content, the format is `[int]+`, such as `"13+"`.

## twitterID

- Type: `string`
- Details:

  Fill in your twitter username.

## isArticle

- Type: `(page: Page) => boolean`
- Details:

  Use this option to judge whether the page is an article.

## ogp

- Type:

  ```ts
  function ogp(
    /** OGP info inferred by plugin */
    ogp: SeoContent,
    /** Page Object */
    page: Page,
    /** VuePress App */
    app: App,
  ): SeoContent
  ```

- Required: No
- Details:

  Custom OPG Generator.

  You can use this options to edit OGP tags.

## jsonLd

- Type:

  ```ts
  function jsonLd(
    /** JSON-LD Object inferred by plugin */
    jsonLD: ArticleSchema | BlogPostingSchema | WebPageSchema,
    /** Page Object */
    page: Page,
    /** VuePress App */
    app: App,
  ): ArticleSchema | BlogPostingSchema | WebPageSchema
  ```

- Required: No

- Details:

  Custom JSON-LD Generator.

  You can use this options to edit JSON-LD properties.

## customHead

- Type:

  ```ts
  function customHead(
    /** Head tag config */
    head: HeadConfig[],
    /** Page Object */
    page: Page,
    /** VuePress App */
    app: App,
  ): void
  ```

- Required: No

- Details:

  You can use this options to edit tags injected to `<head>`.
