# 配置

## 选项

### showInstall

- 类型：`boolean`
- 默认值：`false`
- 详情：

  是否在 Service Worker 首次成功注册时显示 PWA 安装按钮

### manifest

- 类型：`ManifestOption`
- 详情：

  填充一个将被解析为 manifest.webmanifest 的对象。

  ::: tip

  如果未设置某些选项，它们会回退到插件预设值。

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

- 参考：

  - [MDN Web Docs: Web App Manifest](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)
  - [W3C Manifest](https://w3c.github.io/manifest/)

### favicon

- 类型：`string`
- 详情：

  `favicon.ico` 地址，填入绝对路径。

  ::: warning

  我们建议你为你的站点生成 favicon。

  :::

### themeColor

- 类型：`string`
- 默认值：`"#46bd87"`
- 详情：PWA 的主题色。

### cacheHTML

- 类型：`boolean`
- 默认值：`false`
- 详情：是否缓存主页和 404 错误页之外的 HTML 文件

### cacheImage

- 类型：`boolean`
- 默认值：`false`
- 详情：是否缓存图片。

### maxSize

- 类型：`number`
- 默认值：`2048`
- 详情：

  允许缓存的最大大小 (以 KB 为单位)

  ::: warning

  此选项具有最高优先级，任何超过此值的文件都会被排除。

  所以你如果生成了很大的 HTML 或 JS 文件，请考虑调高此值，否则你的 PWA 可能无法在离线模式下正常运行。

  :::

### maxImageSize

- 类型：`number`
- 默认值：`1024`
- 详情：

  图片允许缓存的最大大小 (以 KB 为单位)

  ::: tip 该选项不能大于 maxSize 选项

  :::

### update

- 类型：`"disabled" | "available" | "hint" | "force"`
- 默认值：`"available"`
- 详情：

  发现新内容时的控制逻辑。

  - `"disabled"`: 即使有新的 service worker 也不做任何事情，新的 service work 开始等待后，会在用户下次访问时接管页面，让用户获得新内容。

  - `"available"`: 仅当新的 service worker 可用时才显示更新弹出窗口

  - `"hint"`: 显示更新内容可用提示，并允许用户立即刷新。当新的 SW 成功注册后，将转为更新内容就绪弹窗。

    当你希望用户立即查看新文档时，这很有帮助。

    ::: tip

    如果用户在新 SW 就绪前选择刷新，当前的 Service Worker 将被注销，并且请求将开始向 Web 发出。新的 service worker 将开始安装并在安装后接管页面。

    :::

  - `"force"`: 立即注销当前 Service Worker 然后刷新以获取新内容

    ::: danger

    虽然这可以确保用户访问的是最新内容，但这可能会影响访问体验。

    :::

  ::: tip

  文档的更新方式由以前的版本控制，因此当前选项仅影响此版本的下一次更新。

  :::

### apple

更高支持苹果的特殊设置，忽略它们是安全的。

#### apple.icon

- 类型：`string`
- 详情：填入苹果使用的图标地址，推荐 152×152 大小

#### apple.statusBarColor

- 类型：`"black" | "white"`
- 默认值：`"black"`
- 详情：Safari 状态栏颜色

#### apple.maskIcon

- 类型：`string`
- 详情：Safari 图标

### msTile

针对微软磁贴的特殊设置，忽略它们是安全的。

#### msTile.image

- 类型：`string`
- 详情：磁贴图标

#### msTile.color

- 类型：`string`
- 默认值：`themeColor`
- 详情：磁贴颜色。

### foundComponent

- 类型：`string`
- 默认值：`"PwaFoundPopup"`
- 详情：自定义的提示弹窗组件路径。

### readyComponent

- 类型：`string`
- 默认值：`"PwaReadyPopup"`
- 详情：自定义的更新弹窗组件路径。

### appendBase

- 类型：`boolean`
- 默认值：`false`
- 详情：是否为选项中所有绝对链接添加 base。

### generateSwConfig

- 详情：

  传递给 `workbox-build` 的选项，具体详情，请见 [Workbox 文档](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW)

### locales

- 类型：`PwaPluginLocaleConfig`

  ```ts
  interface PwaPluginLocaleData {
    /**
     * 安装按钮文字
     */
    install: string

    /**
     * iOS 安装文字
     */
    iOSInstall: string

    /**
     * 取消按钮文字
     */
    cancel: string

    /**
     * 关闭按钮文字
     */
    close: string

    /**
     * 上一张图片文字
     */
    prevImage: string

    /**
     * 下一张图片文字
     */
    nextImage: string

    /**
     * 安装解释
     */
    explain: string

    /**
     * 描述标签文字
     */
    desc: string

    /**
     * 特性标签文字
     */
    feature: string

    /**
     * 更新内容提示文字
     */
    hint: string

    /**
     * 更新内容可用文字
     */
    update: string
  }

  interface PwaPluginLocaleConfig {
    [localePath: string]: PwaPluginLocaleData
  }
  ```

- 详情：

  PWA 插件的国际化配置。

::: details 内置支持语言

- **简体中文** (zh-CN)
- **繁体中文** (zh-TW)
- **英文(美国)** (en-US)
- **德语** (de-DE)
- **德语(澳大利亚)** (de-AT)
- **俄语** (ru-RU)
- **乌克兰语** (uk-UA)
- **越南语** (vi-VN)
- **葡萄牙语(巴西)** (pt-BR)
- **波兰语** (pl-PL)
- **法语** (fr-FR)
- **西班牙语** (es-ES)
- **斯洛伐克** (sk-SK)
- **日语** (ja-JP)
- **土耳其语** (tr-TR)
- **韩语** (ko-KR)
- **芬兰语** (fi-FI)
- **印尼语** (id-ID)
- **荷兰语** (nl-NL)

:::

## 组合式 API

### usePwaEvent

- 详情：

  返回此插件的事件派发器。

  你可以添加监听器函数到 [register-service-worker](https://github.com/yyx990803/register-service-worker) 提供的事件。

- 示例：

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

## 工具函数

### forceUpdate

- 详情：

  当发现新内容时强制刷新页面。

- 示例：

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

- 详情：

  手动注册 Service Worker。

- 参数：

| 参数              | 类型      | 描述                  |
| ----------------- | --------- | --------------------- |
| serviceWorkerPath | `string`  | Service worker 的路径 |
| hooks             | `object`  | Service worker 的钩子 |
| showStatus        | `boolean` | 在控制台输出状态日志  |

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

- 示例：

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

- 详情：

  激活等待中的 Service Worker。

- 参数：

| 参数         | 类型                        | 描述                             |
| ------------ | --------------------------- | -------------------------------- |
| registration | `ServiceWorkerRegistration` | 想要激活的 Service Worker 的注册 |

- 示例：

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

- 详情：

  手动注销 Service Worker。

- 示例：

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

## 样式

你可以通过 CSS 变量来自定义样式：

@[code css](@vuepress/plugin-pwa/src/client/styles/vars.css)
