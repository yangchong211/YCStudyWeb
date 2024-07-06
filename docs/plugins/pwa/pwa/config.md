# Config

## Options

### showInstall

- Type: `boolean`
- Default: `false`
- Details:
  Whether display install button when Service Worker is first registered successfully.

### manifest

- Type: `AppManifest`
- Details:

  You can fill with an object which will be parsed to manifest.webmanifest.

  ::: tip

  Some options have their fallback if you don't set them.

  - name: `siteConfig.title` || `siteConfig.locales['/'].title` || `"Site"`
  - short_name: `siteConfig.title` || `siteConfig.locales['/'].title` || `"Site"`
  - description: `siteConfig.description` || `siteConfig.locales['/'].description` || `"A site built with vuepress"`
  - lang: `siteConfig.locales['/'].lang` || `"en-US"`
  - start_url: `context.base`
  - scope: `context.base`
  - display: `"standalone"`
  - theme_color: `"#46bd87"`
  - background_color: `"#ffffff"`
  - orientation: `"portrait-primary"`
  - prefer_related_applications: `false`

  :::

- Reference:
  - [MDN Web Docs: Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
  - [W3C: Web App Manifest](https://www.w3.org/TR/appmanifest/)

### favicon

- Type: `string`
- Details:

  Link of favicon.ico.

  ::: warning

  We recommend you to set favicon for your site.

  :::

### themeColor

- Type: `string`
- Default: `"#46bd87"`
- Details:

  Theme Color of the pwa.

### cacheHTML

- Type: `boolean`
- Default: `false`
- Details:

  Whether cache HTML files besides home page and 404 page.

### cacheImage

- Type: `boolean`
- Default: `false`
- Details:

  Whether cache pictures

### maxSize

- Type: `number`
- Default: `2048`
- Details:

  Max size allowed to be cached, with KB unit

  ::: warning

  This option has the highest priority, and any files exceeding this value will be excluded.

  So if you generate very large HTML or JS files, please consider increasing this value, otherwise your PWA may not work normally in offline mode.

  :::

### maxImageSize

- Type: `number`
- Default: `1024`
- Details:
  Max picture size allowed to be cached, with KB unit

  ::: tip The value must not be greater than maxSize option

  :::

### update

- Type: `"disabled" | "available" | "hint" | "force"`
- Default: `"available"`
- Details:
  Control logic when new content is found.

  - `"disabled"`: Do nothing even when new service worker is available. After new service work succeeds installing and starts waiting, it will control page and provide new content in next visit.

  - `"available"`: Only display update popup when the new service worker is available

  - `"hint"`: Display a hint to let user choose to refresh immediately

    This is helpful when you want users to see new docs immediately.

    ::: tip

    If users choose to refresh, the current service worker will be unregister, and request will start coming to web. Later the new service worker will start installing and control current page after installed.

    :::

  - `"force"`: unregister current service worker immediately then refresh to get new content

    ::: danger

    Although this ensures users are viewing the latest content, it may affect viewing experiences.

    :::

  ::: tip

  How docs are updated is controlled by a previous version, so the current option only effect next update from this version.

  :::

### apple

Special settings for better supporting Safari, ignoring these options are safe.

#### apple.icon

- Type: `string`
- Details: Icon link used by Safari.

#### apple.statusBarColor

- Type: `"black" | "white"`
- Default: `"black"`
- Details: Status bar color for Safari

#### apple.maskIcon

- Type: `string`
- Details: Safari mask icon

### msTile

Special settings for Microsoft tiles, ignoring these options are safe.

#### msTile.image

- Type: `string`
- Details: Tile image

#### msTile.color

- Type: `string`
- Default value: `themeColor`
- Details: Tile color

### foundComponent

- Type: `string`
- Default: `"PwaFoundPopup"`
- Details: Path of custom hint popup component.

### readyComponent

- Type: `string`
- Default: `"PwaReadyPopup"`
- Details: Path of custom update popup component.

### appendBase

- Type: `boolean`
- Default: `false`
- Details: Whether append base to all absolute links in options.

### generateSwConfig

- Details:

  Options passed to `workbox-build`, for details, see [Workbox documentation](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW)

### locales

- Type: `PwaPluginLocaleConfig`

  ```ts
  interface PwaPluginLocaleData {
    /**
     * Install button text
     */
    install: string

    /**
     * iOS install hint text
     */
    iOSInstall: string

    /**
     * Cancel button text
     */
    cancel: string

    /**
     * Close button text
     */
    close: string

    /**
     * Previous image text
     */
    prevImage: string

    /**
     * Next image text
     */
    nextImage: string

    /**
     * Install explain text
     */
    explain: string

    /**
     * Description label text
     */
    desc: string

    /**
     * Feature label text
     */
    feature: string

    /**
     * Update hint text
     */
    hint: string

    /**
     * Update available text
     */
    update: string
  }

  interface PwaPluginLocaleConfig {
    [localePath: string]: PwaPluginLocaleData
  }
  ```

- Details:
  Locales config for pwa plugin.

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

## Composition API

### usePwaEvent

- Details:

  Returns the event emitter of this plugin.

  You can add listener function to events that provided by [register-service-worker](https://github.com/yyx990803/register-service-worker).

- Example:

```ts
import { usePwaEvent } from '@vuepress/plugin-pwa/client'

export default {
  setup() {
    const event = usePwaEvent()
    event.on('ready', (registration) => {
      console.log('Service worker is active.')
    })
  },
}
```

## Utilities

### forceUpdate

- Details:

  Force update the page when an update is found.

- Example:

```ts
import { forceUpdate } from '@vuepress/plugin-pwa/client'
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      forceUpdate()
    })
  },
}
```

### registerSW

- Details:

  Register service worker manually.

- Parameters:

| Parameter         | Type      | Description                          |
| ----------------- | --------- | ------------------------------------ |
| serviceWorkerPath | `string`  | Path of the service worker           |
| hooks             | `object`  | Hooks of service worker              |
| showStatus        | `boolean` | Log service worker status in console |

```ts
interface Hooks {
  registrationOptions?: RegistrationOptions
  ready?: (registration: ServiceWorkerRegistration) => void
  registered?: (registration: ServiceWorkerRegistration) => void
  cached?: (registration: ServiceWorkerRegistration) => void
  updated?: (registration: ServiceWorkerRegistration) => void
  updatefound?: (registration: ServiceWorkerRegistration) => void
  offline?: () => void
  error?: (error: Error) => void
}
```

- Example:

```ts
import { registerSW } from '@vuepress/plugin-pwa/client'
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      registerSW('/service-worker.js', {
        ready(registration) {
          console.log('Service worker is active.')
        },
      })
    })
  },
}
```

### skipWaiting

- Details:

  Activate the waiting service worker.

- Parameters:

| Parameter    | Type                        | Description                                              |
| ------------ | --------------------------- | -------------------------------------------------------- |
| registration | `ServiceWorkerRegistration` | The registration of the service worker you want activate |

- Example:

```ts
import { usePwaEvent, skipWaiting } from '@vuepress/plugin-pwa/client'

export default {
  setup() {
    const event = usePwaEvent()

    event.on('updated', (registration) => {
      console.log('The waiting service worker is available.')
      // activate the waiting service worker
      skipWaiting(registration)
    })
  },
}
```

### unregisterSW

- Details:

  Unregister service worker manually.

- Example:

```ts
import { unregisterSW } from '@vuepress/plugin-pwa/client'
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      unregisterSW()
    })
  },
}
```

## Styles

You can customize the style via CSS variables:

@[code css](@vuepress/plugin-pwa/src/client/styles/vars.css)
