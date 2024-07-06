# redirect

<NpmBadge package="@vuepress/plugin-redirect" />

This plugin can automatically handle redirects for your site.

## Usage

```bash
npm i -D @vuepress/plugin-redirect@next
```

```ts
import { redirectPlugin } from '@vuepress/plugin-redirect'

export default {
  plugins: [
    redirectPlugin({
      // options
    }),
  ],
}
```

### Control Page Redirection

If you change the address of an existing page, you can use the `redirectFrom` option in Frontmatter to redirect to the address of this page, which ensures that users are redirected to the new address when they visit the old link.

If you need to redirect an existing page to a new page, you can use the `redirectTo` option in Frontmatter to set the address to redirect to. This way the page will redirect to the new address when accessed.

You can also set `config` with a redirect map in plugin options, see [config](#config) for more details.

### Auto Locales

The plugin can automatically redirect non-multilingual links to the multilingual pages the user needs based on the user's language preference.

To achieve this, you need to leave the default language directory (`/`) blank and set `autoLocale: true` in plugin options. The plugin will automatically redirect to the correct page according to the user's language.

I.E.: you need to set the following directory structure:

```
.
├── en
│   ├── ...
│   ├── page.md
│   └── README.md
├── zh
│   ├── ...
│   ├── page.md
│   └── README.md
└── other_languages
    ├── ...
    ├── page.md
    └── README.md
```

And set `locales` in theme options with:

```js
export default {
  locales: {
    '/en/': {
      lang: 'en-US',
      // ...
    },
    '/zh/': {
      lang: 'zh-CN',
      // ...
    },
    // other languages
  },
  // ...
}
```

So when a user accesses `/` or `/page.html`, they are automatically redirected to `/en/` `/en/page.html` and `/en/` `/en/page.html` based on current browser language.

::: tip Customizing fallback behavior

Sometimes, users may add more than one language to the system settings. By default, when a site supports a preferred language, but the page not exists for the preferred language, the plugin attempts to match the alternate language set by the user.

If you don't need to fall back to the user's alternate language, but directly match the user's preferred language, set `localeFallback: false` in the plugin options.

:::

::: tip Customizing missing behavior

Sometimes, when a user visits a page, the document does not yet contain the language version the user needs (a common case is that the current page has not been localized in the relevant language), so the plugin needs to perform a default action, which you can customize by `defaultBehavior` in the plugin options:

- `"defaultLocale"`: Redirect to default language or first available language page (default behavior)
- `"homepage"`: redirect to the home page in the current language (only available if the document contains the user's language)
- `"404"`: Redirect to page 404 in current language (only available if the document contains the user's language)

:::

::: tip Customizing default locale path

You can customize the default locale path by setting `defaultLocale` in the plugin options. By default, the plugin uses the first locale key in `locales` as the default language.

:::

### Automatically switch languages

The plugin supports automatically switching the link to the multilingual page that the user needs according to the user's language preference when opening a multilingual document. In order to achieve this, you need to set `switchLocale` in the plugin options, which can be the following two values:

- `direct`: switch directly to the user language preference page without asking
- `modal`: When the user's language preference is different from the current page language, show a modal asking whether to switch language

### Customizing Locale Settings

By default, the plugin generates a locale setting by reading `locale path` and `lang` from the site's `locales` option. Sometimes, you may want multiple languages to hit the same path, in which case you should set `localeConfig` in plugin options.

For example, you might want all English users to match to `/en/` and Chinese Traditional users to `/zh/`, then you can set:

```js
redirect({
  localeConfig: {
    '/en/': ['en-US', 'en-UK', 'en'],
    '/zh/': ['zh-CN', 'zh-TW', 'zh'],
  },
})
```

### Redirecting Sites

Sometimes you may change `base` or use new domain for your site, so you may want the original site automatically redirects to the new one.

To solve this, the plugin provide `vp-redirect` cli.

```shell
Usage:
  $ vp-redirect generate [sourceDir]

Options:
  --hostname <hostname>  Hostname to redirect to (E.g.: https://new.example.com/) (default: /)
  -c, --config <config>  Set path to config file
  -o, --output <output>  Set the output directory (default: .vuepress/redirect)
  --cache <cache>        Set the directory of the cache files
  -t, --temp <temp>      Set the directory of the temporary files
  --clean-cache          Clean the cache files before generation
  --clean-temp           Clean the temporary files before generation
  -h, --help             Display this message
```

You need to pass in VuePress project source dir and also set the `hostname` option. The redirect helper cli will initialize your VuePress project to get pages, then generate and output the redirect html files to the output directory.

By default, the plugin will output to `.vuepress/redirect` directory under source directory. And you should upload it to your original site to provide redirection.

## Options

### config

- Type: `Record<string, string> | ((app: App) => Record<string, string>)`
- Details: Redirect map.
- Example:

  When base is set to `/base/`:

  - redirect `/base/foo.html` to `/base/bar.html`
  - `/base/baz.html` to `https://example.com/qux.html`.

  ```js
  redirect({
    config: {
      '/foo.html': '/bar.html',
      '/baz.html': 'https://example.com/qux.html',
    },
  })
  ```

  Redirect post folder to posts folder:

  ```js
  redirect({
    hostname: 'https://example.com',
    config: (app) =>
      Object.fromEntries(
        app.pages
          .filter(({ path }) => path.startsWith('/posts/'))
          .map(({ path }) => [path.replace(/^\/posts\//, '/post/'), path]),
      ),
  })
  ```

### autoLocale

- Type: `boolean`
- Default: `false`
- Details: Whether enable locales redirection.

### switchLocale

- Type: `"direct" | "modal" | false`
- Default: `false`
- Details:

  Whether switch to a new locale based on user preference.

  - `"direct"`: redirect to the new locale directly without asking
  - `"modal"`: show a modal to let user choose whether to switch to the new locale

### localeConfig

- Type: `Record<string, string | string[]>`

- Details: Locale language config

### localeFallback

- Type: `boolean`
- Default: `true`
- Details: Whether fallback to other locales user defined

### defaultBehavior

- Type: `"defaultLocale" | "homepage" | "404"`
- Default: `"defaultLocale"`
- Details: Behavior when a locale version is not available for current link.

### defaultLocale

- Type: `string`
- Default: the first locale
- Details: Default locale path.

## Frontmatter

### redirectFrom

- Type: `string | string[]`
- Details: The link which this page redirects from.

### redirectTo

- Type: `string`
- Details: The link which this page redirects to.

## Styles

You can customize the style of the redirect popup via CSS variables:

@[code css](@vuepress/plugin-redirect/src/client/styles/vars.css)
