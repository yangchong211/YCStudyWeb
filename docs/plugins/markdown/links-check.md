# links-check

<NpmBadge package="@vuepress/plugin-links-check" />

This plugin will check dead links in your markdown files.

This plugin has been integrated into the default theme.

## Usage

```bash
npm i -D @vuepress/plugin-links-check@next
```

```ts
import { linksCheckPlugin } from '@vuepress/plugin-links-check'

export default {
  plugins: [
    linksCheckPlugin({
      // options
    }),
  ],
}
```

## Options

### dev

- Type: `boolean`

- Default: `true`

- Details:

  Whether check dead links in markdown in devServer

### build

- Type: `boolean | 'error'`

- Default: `true`

- Details:

  Whether check dead links in markdown in build. If set to `'error'`, the build will fail if there are dead links.

### exclude

- Type: `(string | RegExp)[] | ((link: string, isDev: boolean) => boolean)`

- Details:

  The links that should be excluded from checking. You can use a list of strings or regular expressions, or a function that returns a boolean.

- Example:

  ```ts
  linksCheckPlugin({
    exclude: [
      // exclude links by string
      '/exclude-link',
      // exclude links by regex
      /\/exclude-link-regex/,
    ],

    // or exclude links by function
    exclude: (link, isDev) => {
      if (isDev) {
        return link.startsWith('/exclude-link-dev')
      }
      return link.startsWith('/exclude-link-build')
    },
  })
  ```
