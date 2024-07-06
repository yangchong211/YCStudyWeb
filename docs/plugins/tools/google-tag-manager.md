# google-tag-manager

<NpmBadge package="@vuepress/plugin-google-tag-manager" />

Integrate [Google Tag Manager](https://tagmanager.google.com/) into VuePress.

This plugin will import [Google Tag Manager](https://developers.google.com/tag-platform/tag-manager).

## Usage

```bash
npm i -D @vuepress/plugin-google-tag-manager@next
```

```ts
import { googleTagManagerPlugin } from '@vuepress/plugin-google-tag-manager'

export default {
  plugins: [
    googleTagManagerPlugin({
      // options
    }),
  ],
}
```

::: tip Working with Javascript Disabled

If you want Google Tag Manager to work properly when javascript is disabled, you should add the following content to the body part of build template via `templateBuild`:

```html
<!-- Google Tag Manager (noscript) -->
<noscript
  ><iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-ABCDEFGH"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe
></noscript>
<!-- End Google Tag Manager (noscript) -->
```

:::

## Options

### id

- Type: `string`

- Details:

  The container ID of Google Tag Manager 4, which should start with `'GTM-'`.

  You add your container and find its ID [here](https://tagmanager.google.com/#/home).

- Example:

```ts
export default {
  plugins: [
    googleTagManagerPlugin({
      id: 'GTM-XXXXXXXXXX',
    }),
  ],
}
```
