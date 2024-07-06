# Locale Config

These options configure locale-related texts.

If your site is served in a different language besides English, you should set these options per locale to provide translations.

## repoLabel

- Type: `string`

- Details:

  Specify the repository label of your project.

  This will be used as the text of the _repository link_, which will be displayed as the last item of the navbar.

  If you don't set this option explicitly, it will be automatically inferred from the [repo](./config.md#repo) option.

## selectLanguageText

- Type: `string`

- Details:

  Specify the text of the _select language menu_.

  The _select language menu_ will appear next to the repository button in the navbar when you set multiple [locales](./config.md#locales) in your site config.

## selectLanguageAriaLabel

- Type: `string`

- Details:

  Specify the `aria-label` attribute of the _select language menu_.

  This is mainly for a11y purpose.

## selectLanguageName

- Type: `string`

- Details:

  Specify the name of the language of a locale.

  This option will **only take effect inside** the [locales](./config.md#locales) of your theme config. It will be used as the language name of the locale, which will be displayed in the _select language menu_.

- Example:

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

- Type: `null | string`

- Details:

  `aria-label` value for main navigation in navbar.

## pageNavbarLabel

- Type: `null | string`

- Details:

  `aria-label` value for next/previous page navigation.

## editLinkText

- Type: `string`

- Default: `'Edit this page'`

- Details:

  Specify the text of the _edit this page_ link.

## lastUpdatedText

- Type: `string`

- Default: `'Last Updated'`

- Details:

  Specify the text of the _last updated timestamp_ label.

## contributorsText

- Type: `string`

- Default: `'Contributors'`

- Details:

  Specify the text of the _contributors list_ label.

## tip

- Type: `string`

- Default: `'TIP'`

- Details:

  Specify the default title of the tip [custom containers](./markdown.md#custom-containers).

## warning

- Type: `string`

- Default: `'WARNING'`

- Details:

  Specify the default title of the warning [custom containers](./markdown.md#custom-containers).

## danger

- Type: `string`

- Default: `'DANGER'`

- Details:

  Specify the default title of the danger [custom containers](./markdown.md#custom-containers).

## notFound

- Type: `string[]`

- Default: `['Not Found']`

- Details:

  Specify the messages of the 404 page.

  The message will be randomly picked from the array when users enter the 404 page.

## backToHome

- Type: `string`

- Default: `'Back to home'`

- Details:

  Specify the text of the _back to home_ link in the 404 page.

## toggleColorMode

- Type: `string`

- Default: `'toggle color mode'`

- Details:

  Title text for the color mode toggle button.

  This is mainly for a11y purpose.

- Also see:
  - [Default Theme > Config > colorModeSwitch](./config.md#colormodeswitch)

## toggleSidebar

- Type: `string`

- Default: `'toggle sidebar'`

- Details:

  Title text for sidebar toggle button.

  This is mainly for a11y purpose.

## prev

- Type: `string | false`

- Default: `'Prev'`

- Details:

  Text for the previous page navigation button.

  Set to `false` to disable the previous page navigation button.

## next

- Type: `string | false`
- Default: `'Next'`
- Details:

  Text for the next page navigation button.

  Set to `false` to disable the next page navigation button.
