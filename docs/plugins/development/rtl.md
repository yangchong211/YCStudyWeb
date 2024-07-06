# rtl

<NpmBadge package="@vuepress/plugin-rtl" />

This plugin will set direction to rtl on configured locales.

## Usage

```bash
npm i -D @vuepress/plugin-rtl@next
```

```ts
import { rtlPlugin } from '@vuepress/plugin-rtl'

export default {
  plugins: [
    rtlPlugin({
      // options
      locales: ['/ar/'],
    }),
  ],
}
```

## Options

### locales

- Type: `string[]`
- Default: `['/']`
- Details:
  Locale path to enable rtl.

### selector

- Type: `SelectorOptions`

  ```ts
  interface SelectorOptions {
    [element: string]: {
      [attrs: string]: string
    }
  }
  ```

- Default: `{ 'html': { dir: 'rtl' } }`

- Details:

  Selector to enable rtl.

  The default settings mean that the `dir` attribute of the `html` element will be set to `rtl` in rtl locales.
