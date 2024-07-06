# redirect

<NpmBadge package="@vuepress/plugin-rtl" />

此插件提供页面与整站重定向功能。

## 使用方法

```bash
npm i -D @vuepress/plugin-redirect@next
```

```ts
import { redirectPlugin } from '@vuepress/plugin-redirect'

export default {
  plugins: [
    redirectPlugin({
      // 配置项
    }),
  ],
}
```

### 设置重定向

如果你改动了已有页面的地址，你可以在 Frontmatter 中使用 `redirectFrom` 选项设置重定向到此页面的地址，这样可以保证用户在访问旧链接时重定向到新的地址。

如果你需要将已有的页面重定向到新的页面，可以在 Frontmatter 中使用 `redirectTo` 选项设置需要重定向到的地址。这样该页面会在访问时重定向到新的地址。

你还可以通过插件选项中的 `config` 设置一个重定向映射，详见 [config](#config)。

### 自动多语言

插件可以根据用户的语言首选项，自动将无多语言链接重定向到用户需要的多语言页面。为了实现这一点，你需要留空默认的语言目录 (`/`)，并在插件选项中设置 `autoLocale: true`。插件会自动根据用户语言跳转到对应的语言页面。

也就是你需要设置以下目录结构:

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

并将主题选项的 locales 设置为:

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

这样当用户访问 `/` 或 `/page.html` 时，他们会自动根据当前浏览器语言重定向到 `/en/` `/en/page.html` 与 `/zh/` `/zh/page.html`。

::: tip 自定义回退行为

有些时候，用户可能会在系统设置中添加多个语言。默认情况下，在站点支持首选语言，但首选语言不存在相应页面时，插件会尝试匹配用户设置的备用语言。

如果不需要回退到用户备用语言，而直接匹配用户首选语言，请在插件选项中设置 `localeFallback: false`。

:::

::: tip 自定义缺失行为

有些时候，当用户访问一个页面时，文档尚未包含用户需要的语言版本 (一个普遍的情况是当前页面尚未完成相关语言的本地化)，这样插件需要做出默认行为，你可以通过插件选项中的 `defaultBehavior` 定制它:

- `"defaultLocale"`: 重定向到默认语言或首个可用语言页面 (默认行为)
- `"homepage"`: 重定向到当前语言的主页 (仅在文档包含用户语言时可用)
- `"404"`: 重定向到当前语言的 404 页 (仅在文档包含用户语言时可用)

:::

::: tip 自定义默认路径

你可以通过设置插件选项中的 `defaultLocale` 来自定义默认路径。默认情况下，插件会使用 `locales` 中的第一个键名作为默认路径。

:::

### 自动切换语言

插件支持在多语言文档中，自动根据用户语言首选项，将链接切换到用户需要的多语言页面。为了实现这一点，你需要在插件选项中设置 `switchLocale`，它可以是以下两个值:

- `direct`: 直接切换到用户语言首选项页面，而不询问
- `modal`: 在用户语言首选项与当前页面语言不同时，弹出一个对话框询问用户是否切换语言

### 自定义多语言配置

默认情况下，插件会从站点的多语言配置 `locales` 选项中，读取 `语言路径` 和 `lang` 生成多语言配置。有些时候，你可能希望多个语言命中同一个路径，这种情况下，你应该设置插件的 `localeConfig` 选项。

比如，你可能希望所有英文用户都匹配到 `/en/`，并将繁体中文用户匹配到 `/zh/` 中，那么你可以设置:

```js
redirect({
  localeConfig: {
    '/en/': ['en-US', 'en-UK', 'en'],
    '/zh/': ['zh-CN', 'zh-TW', 'zh'],
  },
})
```

### 重定向站点

有时你可能会更改 `base` 或为你的站点使用新域名，因此你可能希望原始站点自动重定向到新站点。

为了解决这个问题，插件提供了 `vp-redirect` 脚手架。

```shell
使用:
  $ vp-redirect generate [源文件夹]

Options:
  --hostname <hostname>  重定向到的域名 (例如: https://new.example.com/) (默认: /)
  -c, --config <config>  设置配置文件路径
  -o, --output <output>  设置输出目录 (默认: .vuepress/redirect)
  --cache <cache>        设置缓存文件的目录
  -t, --temp <temp>      设置临时文件的目录
  --clean-cache          生成前清理缓存文件
  --clean-temp           生成前清理临时文件
  -h, --help             显示此消息
```

你需要传入 VuePress 项目源目录并设置 `hostname` 选项。重定向助手脚手架将初始化你的 VuePress 项目以获取页面，然后在输出目录生成重定向 html 文件。

默认情况下，插件将输出到源文件夹下的 `.vuepress/redirect` 目录。你应该将其上传到你的原始站点以提供重定向。

## 选项

### config

- 类型：`Record<string, string> | ((app: App) => Record<string, string>)`
- 详情

  页面重定向映射。

  可直接传入对象或传入参数为 `App` 的函数返回值一个对象。

  每个键名必须是一个绝对路径，代表重定向的源页面地址。

  每个键值是重定向的目标地址，可以是绝对路径或完整路径。

- 示例：

  当 base 为 `/base/`时：

  - 将 `/base/foo.html` 重定向到 `/base/bar.html`
  - 将 `/base/baz.html` 重定向到 `https://example.com/qux.html`。

  ```js
  redirect({
    config: {
      '/foo.html': '/bar.html',
      '/baz.html': 'https://example.com/qux.html',
    },
  })
  ```

  将 post 文件夹的路径重定向到 posts 文件夹

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

- 类型：`boolean`
- 默认值: `false`
- 详情： 是否启用语言重定向

### switchLocale

- 类型：`"direct" | "modal" | false`
- 默认值: `false`
- 详情：

  是否根据用户偏好切换到新的语言环境。

  - `"direct"`: 直接重定向到新的语言环境而不询问
  - `"modal"`: 显示一个模式让用户选择是否切换到新的语言环境

### localeConfig

- 类型：`Record<string, string | string[]>`
- 详情：多语言语言配置

### localeFallback

- 类型：`boolean`
- 默认值: `true`
- 详情：是否回退到用户定义的其他语言

### defaultBehavior

- 类型：`"defaultLocale" | "homepage" | "404"`
- 默认值: `"defaultLocale"`
- 详情：当前链接没有可用的语言版本时的行为

### defaultLocale

- 类型：`string`
- 默认值: 首个语言路径
- 详情：默认语言路径

## Frontmatter

### redirectFrom

- 类型：`string | string[]`
- 详情：重定向到该页面的地址。

### redirectTo

- 类型：`string`
- 详情：该页面重定向到的地址。

## 样式

你可以通过 CSS 变量来自定义重定向弹窗的样式：

@[code css](@vuepress/plugin-redirect/src/client/styles/vars.css)
