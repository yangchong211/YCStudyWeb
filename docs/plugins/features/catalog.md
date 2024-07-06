# catalog

<NpmBadge package="@vuepress/plugin-catalog" />

The plugin can automatically generate catalog pages and provide catalog components.

## Usage

```bash
npm i -D @vuepress/plugin-catalog@next
```

```ts
import { catalogPlugin } from '@vuepress/plugin-catalog'

export default {
  plugins: [
    catalogPlugin({
      // Your options
    }),
  ],
}
```

First, you should set catalog info in routeMeta:

```js title=".vuepress/config.js"
import { catalogPlugin } from '@vuepress/plugin-catalog'

export default {
  extendsPage: (page) => {
    // set catalog info in routeMeta
    page.routeMeta = {
      // catalog title
      title: page.title,
      // ... other information
    }
  },
}
```

You can then import `defineCatalogInfoGetter` from `@vuepress/plugin-catalog/client` and use it in [client config file][client-config] to extract catalog info from meta.

```js title=".vuepress/client.js"
import { defineCatalogInfoGetter } from '@vuepress/plugin-catalog/client'

defineCatalogInfoGetter((meta) => (meta.title ? { title: meta.title } : null))

export default {}
```

Catalog info should contains:

- `title`: catalog title
- `order`: catalog order (optional)
- `content`: catalog content component (optional)

::: tip Sorting with order

The plugin will sort pages by `order` in the following way:

```:no-line-numbers
// order positive numbers from small to large
Project with order 1
Project with order 2
...
Project with order 10
...
// Project without order
Project without order
Project without order
...
// order negative numbers from small to large
Project with order -10
// ...
Project with order -2
Project with order -1
```

:::

## Options

### level <Badge text="Built-in component only" />

- Type: `1 | 2 | 3`
- Default: `3`
- Details: Max depth of catalog items.

### index <Badge text="Built-in component only" />

- Type: `boolean`
- Default: `false`
- Details: Whether show index for catalog

### frontmatter

- Type: `(path: string) => Record<string, any>`
- Required: No
- Details: Frontmatter getter for the generated page.
- Example:

  ```js title=".vuepress/config.js"
  import { catalogPlugin } from '@vuepress/plugin-catalog'

  export default {
    plugins: [
      catalogPlugin({
        frontmatter: (path) => ({
          // frontmatter you want
          // you may customize title, author. time, etc.
        }),
      }),
    ],
  }
  ```

### exclude

- Type: `(RegExp | string)[]`
- Default: `[]`
- Details:

  Catalog page path to be excluded during generation.

  - `"/foo/"` means only exclude catalog page generation at `/foo/` folder.
  - `/^\/foo\//` means exclude catalog page generation at `/foo/` folder and its subfolders.

  ::: tip 404 pages will be automatically excluded.

  :::

### component

- Type: `string`
- Required: No
- Details: Component name to use as catalog.

### locales

- Type: `CatalogPluginLocaleConfig`

  ```ts
  interface CatalogPluginLocaleData {
    /**
     * Catalog title
     */
    title: string

    /**
     * Empty hint
     */
    empty: string
  }

  interface CatalogPluginLocaleConfig {
    [localePath: string]: CatalogPluginLocaleData
  }
  ```

- Required: No

- Details: Locales config for catalog component.

::: details Built-in Supported Languages

- **Simplified Chinese** (zh-CN)
- **Traditional Chinese** (zh-TW)
- **English (United States)** (en-US)
- **German** (de-DE)
- **German (Australia)** (de-AT)
- **Russian** (ru-RU)
- **Ukrainian** (uk-UA)
- **Vietnamese** (vi-VN)
- **Portuguese (Brazil)** (pt-BR)
- **Polish** (pl-PL)
- **French** (fr-FR)
- **Spanish** (es-ES)
- **Slovak** (sk-SK)
- **Japanese** (ja-JP)
- **Turkish** (tr-TR)
- **Korean** (ko-KR)
- **Finnish** (fi-FI)
- **Indonesian** (id-ID)
- **Dutch** (nl-NL)

:::

## Client options

### defineCatalogInfoGetter

```ts
interface CatalogInfo {
  /** Catalog title */
  title: string
  /** Catalog order */
  order?: number
  /** Catalog content */
  content?: Component
}

type CatalogInfoGetter = (meta: Record<string, unknown>) => CatalogInfo | null

const defineCatalogInfoGetter: (options: CatalogInfoGetter) => void
```

Customize how to extract catalog info from meta.

## Components

### Catalog

- Details:

  The plugin will globally register a `<Catalog />` component by default (unless you set the `component` option).

  You can use `<Catalog />` in the theme layout or directly in the Markdown file.

  The component supports four props:

  - `level`: Change the display depth (maximum support 3 levels), default is `3`.
  - `base`: Display catalog of the specified folder, default is the current folder directory.
  - `index`: Add an index number to the directory item, default is no number.
  - `hideHeading`: Hide the component title, default is to display the `Catalog` title.

[client-config]: https://vuejs.press/guide/configuration.html#client-config-file

## Styles

You can customize the style of catalog via CSS variables:

@[code css](@vuepress/plugin-catalog/src/client/styles/vars.css)
