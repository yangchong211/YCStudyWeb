# catalog

<NpmBadge package="@vuepress/plugin-catalog" />

此插件可以自动生成目录页面，也提供目录组件。

## 使用方法

```bash
npm i -D @vuepress/plugin-catalog@next
```

```ts
import { catalogPlugin } from '@vuepress/plugin-catalog'

export default {
  plugins: [
    catalogPlugin({
      // 你的选项
    }),
  ],
}
```

首先，你应该在路由元信息中设置目录信息:

```js title=".vuepress/config.js"
import { catalogPlugin } from '@vuepress/plugin-catalog'

export default {
  extendsPage: (page) => {
    // 在 routeMeta 中设置目录信息
    page.routeMeta = {
      // 目录标题
      title: page.title,
      // ... 其他信息
    }
  },
}
```

你可以之后导入 `defineCatalogInfoGetter` 并在 [客户端配置文件][client-config] 中使用它来从元信息中提取目录信息。

```js title=".vuepress/client.js"
import { defineCatalogInfoGetter } from '@vuepress/plugin-catalog/client'

defineCatalogInfoGetter((meta) => (meta.title ? { title: meta.title } : null))

export default {}
```

目录信息应包含:

- `title`: 目录标题
- `order`: 目录顺序 (可选)
- `content`: 目录内容组件 (可选)

::: tip 通过 order 排序

插件将按以下方式通过 `order` 对页面进行排序:

```:no-line-numbers
// 从小到大依次排列正数
order 1 的项目
order 2 的项目
...
order 10 的项目
...
// 无 order 的项目
无 order 的项目
无 order 的项目
...
// 从小到大依次排列负数
order -10 的项目
// ...
order -2 的项目
order -1 的项目
```

:::

## 选项

### level <Badge text="仅限内置组件" />

- 类型：`1 | 2 | 3`
- 默认值：`3`
- 详情：目录项级别的最大深度。

### index <Badge text="仅限内置组件" />

- 类型：`boolean`
- 默认值：`false`
- 详情：目录是否显示索引

### frontmatter

- 类型：`(path: string) => Record<string, any>`
- 详情：生成页面的 Frontmatter 获取器。
- 示例：

  ```js title=".vuepress/config.js"
  import { catalogPlugin } from '@vuepress/plugin-catalog'

  export default {
    plugins: [
      catalogPlugin({
        frontmatter: (path) => ({
          // 你想要的 frontmatter
          // 你可以自定义标题、作者、时间等
        }),
      }),
    ],
  }
  ```

### exclude

- 类型：`(RegExp | string)[]`
- 默认值：`[]`
- 详情：

  生成中需要排除的目录页路径。

  - `"/foo/"` 意味着仅排除 `/foo/` 文件夹的目录页生成。
  - `/^\/foo\//` 意味着排除 `/foo/` 文件夹及其子文件夹的目录页生成。

  ::: tip 404 页面会被自动排除。

  :::

### component

- 类型：`string`
- 详情：用作目录的组件名称。

### locales

- 类型：`CatalogPluginLocaleConfig`

  ```ts
  interface CatalogPluginLocaleData {
    /**
     * 目录标题
     */
    title: string

    /**
     * 空目录提示
     */
    empty: string
  }

  interface CatalogPluginLocaleConfig {
    [localePath: string]: CatalogPluginLocaleData
  }
  ```

- 必填: 否

- 详情：目录组件国际化配置。

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
- **印尼语** (id-ID)
- **荷兰语** (nl-NL)

:::

## 客户端选项

### defineCatalogInfoGetter

```ts
interface CatalogInfo {
  /** 目录标题 */
  title: string
  /** 目录顺序 */
  order?: number
  /** 目录内容 */
  content?: Component
}

type CatalogInfoGetter = (meta: Record<string, unknown>) => CatalogInfo | null

const defineCatalogInfoGetter: (options: CatalogInfoGetter) => void
```

自定义如何从 meta 中提取目录信息。

## 组件

### Catalog

- 详情：

  该插件默认会全局注册一个 `<Catalog />` 组件（除非你设置了 `component` 选项）。

  你可以在主题布局中或直接在 Markdown 文件中使用 `<Catalog />`。

  组件支持四个属性：

  - `level`：更改显示层次深度（最大仅支持 3 层），默认为 `3`。
  - `base`：显示指定文件夹的目录，默认显示当前文件夹目录。
  - `index`：为目录项添加索引号，默认无标号。
  - `hideHeading`：隐藏组件标题，默认会显示 `目录` 标题。

## 样式

你可以通过 CSS 变量来自定义目录样式：

@[code css](@vuepress/plugin-catalog/src/client/styles/vars.css)

[client-config]: https://vuejs.press/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6
