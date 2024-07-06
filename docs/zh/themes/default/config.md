# 配置

## 基础配置

### hostname

- 类型： `string`

- 详情：

  部署的域名，例如 `https://example.com`

### locales

- 类型： `{ [path: string]: Partial<DefaultThemeLocaleData> }`

- 默认值： `{}`

- 详情：

  多语言支持的各个语言 locales 。

  所有在 [Locale 配置](#locale-配置) 章节内的配置项都可以在 locales 中使用。

  该配置项仅能在默认主题内生效，注意不要和 [站点配置](https://v2.vuepress.vuejs.org/zh/reference/config.html#locales) 中的 `locales` 混淆。

- 参考：
  - [指南 > 多语言支持](https://v2.vuepress.vuejs.org/zh/guide/i18n.html)

## Locale 配置

该章节内的配置项可以作为一般配置使用，也可以使用在 [locales](#locales) 内。

### colorMode

- 类型： `'auto' | 'light' | 'dark'`

- 默认值： `'auto'`

- 详情：

  默认颜色模式。

  如果设置为 `'auto'` ，则会根据 [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) 自动设置初始颜色模式。

- 参考：
  - [默认主题 > 配置 > colorModeSwitch](#colormodeswitch)

### colorModeSwitch

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否启用切换颜色模式的功能。

  如果设置为 `true` ，将会在导航栏展示一个切换颜色模式的按钮。

- 参考：
  - [默认主题 > 配置 > colorMode](#colormode)
  - [默认主题 > 语言配置 > toggleColorMode](./locale.md#togglecolormode)

### externalLinkIcon

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否在外部链接上显示外部链接图标。

### home

- 类型： `string`

- 默认值： `/`

- 详情：

  首页的路径。

  它将被用于：

  - 导航栏中 Logo 的链接
  - 404 页面的 _返回首页_ 链接

### navbar

- 类型： `false | NavbarOptions`

- 默认值： `[]`

- 详情：

  导航栏配置。

  设置为 `false` 可以禁用导航栏。

  为了配置导航栏元素，你可以将其设置为 _导航栏数组_ ，其中的每个元素是 `NavbarLink` 对象、 `NavbarGroup` 对象、或者字符串：

  - `NavbarLink` 对象应该有一个 `text` 字段和一个 `link` 字段，还有一个可选的 `activeMatch` 字段。
  - `NavbarGroup` 对象应该有一个 `text` 字段和一个 `children` 字段，还有一个可选的 `prefix` 字段。 `children` 字段同样是一个 _导航栏数组_，而 `prefix` 会作为 _导航栏数组_ 的路径前缀。
  - 字符串应为目标页面文件的路径。它将会被转换为 `NavbarLink` 对象，将页面标题作为 `text` ，将页面路由路径作为 `link` 。

- 示例 1：

```ts
export default {
  theme: defaultTheme({
    navbar: [
      // NavbarLink
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        prefix: '/group/',
        children: ['foo.md', 'bar.md'],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  }),
}
```

- 示例 2：

```ts
export default {
  theme: defaultTheme({
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: 'Group',
        prefix: '/group/',
        children: [
          {
            text: 'SubGroup1',
            prefix: 'sub1/',
            children: [
              'foo.md', // 解析为 `/guide/group/sub1/bar.md`
              'bar.md', // 解析为 `/guide/group/sub1/bar.md`

              // 一个外部链接
              {
                text: 'Example',
                link: 'https://example.com',
              },
            ],
          },
          {
            text: 'SubGroup2',
            prefix: 'sub2/',
            // 项目内链接的 .md 或 .html 后缀是可以省略的
            children: [
              'foo', // 解析为 `/guide/group/sub2/foo.md`
              'bar', // 解析为 `/guide/group/sub2/bar.md`

              // 不在 SubGroup2 内的链接
              '/baz/', // 解析为 `/baz/README.md`
            ],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: 'Group 2',
        children: [
          {
            text: 'Always active',
            link: '/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
  }),
}
```

### logo

- 类型： `null | string`

- 详情：

  Logo 图片的 URL。

  Logo 图片将会显示在导航栏的左端。

  设置为 `null` 可以禁用 Logo 。

- 示例：

```ts
export default {
  theme: defaultTheme({
    // Public 文件路径
    logo: '/images/hero.png',
    // URL
    logo: 'https://vuejs.org/images/logo.png',
  }),
}
```

- 参考：
  - [指南 > 静态资源 > Public 文件](https://v2.vuepress.vuejs.org/zh/guide/assets.html#public-文件)

### logoDark

- 类型： `null | string`

- 详情：

  在夜间模式中使用的 Logo 图片的 URL。

  如果你想在夜间模式中使用不同的 Logo 图片，就可以使用该配置项。

  设置为 `null` 可以在夜间模式下禁用 Logo 。忽略该配置项将会在夜间模式中使用 [logo](#logo) 配置。

- 参考：
  - [默认主题 > 配置 > logo](#logo)
  - [默认主题 > 配置 > colorMode](#colormode)

### logoAlt

- 类型：`null | string`

- 详情：

  指定 Logo 图片的替代文字。

  当未指定时，将默认与站点标题相同。

### repo

- 类型： `string`

- 详情：

  项目仓库的 URL。

  它将被用作 _仓库链接_ 的链接。_仓库链接_ 将会显示为导航栏的最后一个元素。

```ts
export default {
  theme: defaultTheme({
    // 如果你按照 `organization/repository` 的格式设置它
    // 我们会将它作为一个 GitHub 仓库
    repo: 'vuejs/vuepress',
    // 你也可以直接将它设置为一个 URL
    repo: 'https://gitlab.com/foo/bar',
  }),
}
```

### sidebar

- 类型： `false | SidebarOptions`

- 默认值： `'heading'`

- 详情：

  侧边栏配置。

  你可以通过页面的 [sidebar](./frontmatter.md#sidebar) frontmatter 来覆盖这个全局配置。

  设置为 `false` 可以禁用侧边栏。

  如果你设置为 `'heading'`，侧边栏会根据页面标题自动生成。

  为了手动配置侧边栏元素，你可以将其设置为 _侧边栏数组_ ，其中的每个元素是一个 `SidebarItem` 对象或者一个字符串：

  - `SidebarItem` 对象应该有一个 `text` 字段，有一个可选的 `link` 字段、一个可选的 `children` 字段、一个可选的 `collapsible` 字段和一个可选的 `prefix` 字段。 `children` 字段同样是一个 _侧边栏数组_，`prefix` 会作为每个子项目的路径前缀。 `collapsible` 字段来控制它是否可折叠。
  - 字符串应为目标页面文件的路径。它将会被转换为 `SidebarItem` 对象，将页面标题作为 `text` ，将页面路由路径作为 `link` ，并根据页面小标题自动生成 `children` 。

  如果你想在不同子路径中使用不同的侧边栏，你可以将该配置项设置为 _侧边栏对象_ ：

  - Key 为路径前缀。
  - Value 为 _侧边栏数组_ 或 `"heading"` 以自动为相应路径生成基于标题的侧边栏。

- 示例 1：

```ts
export default {
  theme: defaultTheme({
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        prefix: '/foo/',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          'bar.md', // 解析为 `/foo/bar.md`
          '/ray.md', // 解析为 `/ray.md`
        ],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  }),
}
```

- 示例 2：

```ts
export default {
  theme: defaultTheme({
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          // 相对路径会自动追加子路径前缀
          children: [
            'introduction.md', // 解析为 `/guide/introduction.md`
            'getting-started.md', // 解析为 `/guide/getting-started.md`
          ],
        },
      ],
      '/reference/': 'heading',
    },
  }),
}
```

- 示例 3：

```ts
export default {
  theme: defaultTheme({
    // 可折叠的侧边栏
    sidebar: {
      '/reference/': [
        {
          text: 'VuePress Reference',
          collapsible: true,
          // 基于项目路径的 .md 或 .html 后缀是可以省略的
          children: ['cli', 'config'],
        },
        {
          text: 'Bundlers Reference',
          collapsible: true,
          // 前缀可以是相对路径，等同于 `prefix: /reference/bundler/`
          prefix: 'bundler/',
          children: ['vite', 'webpack'],
        },
      ],
    },
  }),
}
```

### sidebarDepth

- 类型： `number`

- 默认值： `2`

- 详情：

  设置根据页面标题自动生成的侧边栏的最大深度。

  - 设为 `0` 来禁用所有级别的页面标题。
  - 设为 `1` 来包含 `<h2>` 标题。
  - 设为 `2` 来包含 `<h2>` 和 `<h3>` 标题。
  - ...

  你可以通过页面的 [sidebarDepth](./frontmatter.md#sidebardepth) frontmatter 来覆盖这个全局配置。

### editLink

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否启用 _编辑此页_ 链接。

  你可以通过页面的 [editLink](./frontmatter.md#editlink) frontmatter 来覆盖这个全局配置。

### editLinkPattern

- 类型： `string`

- 详情：

  _编辑此页_ 链接的 Pattern 。

  它将会用于生成 _编辑此页_ 的链接。

  如果你不设置该选项，则会根据 [docsRepo](#docsrepo) 配置项来推断 Pattern 。但是如果你的文档仓库没有托管在常用的平台上，比如 GitHub 、 GitLab 、 Bitbucket 、 Gitee 等，那么你必须设置该选项才能使 _编辑此页_ 链接正常工作。

- 用法：

  | Pattern   | 描述                                                              |
  | --------- | ----------------------------------------------------------------- |
  | `:repo`   | 文档仓库 URL ，即 [docsRepo](#docsrepo)                           |
  | `:branch` | 文档仓库分支 ，即 [docsBranch](#docsbranch)                       |
  | `:path`   | 页面源文件的路径，即 [docsDir](#docsdir) 拼接上页面文件的相对路径 |

- 示例：

```ts
export default {
  theme: defaultTheme({
    docsRepo: 'https://gitlab.com/owner/name',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
  }),
}
```

则会生成类似于 `'https://gitlab.com/owner/name/-/edit/master/docs/path/to/file.md'` 的链接。

### docsRepo

- 类型： `string`

- 详情：

  文档源文件的仓库 URL 。

  它将会用于生成 _编辑此页_ 的链接。

  如果你不设置该选项，则默认会使用 [repo](#repo) 配置项。但是如果你的文档源文件是在一个不同的仓库内，你就需要设置该配置项了。

### docsBranch

- 类型： `string`

- 默认值： `'main'`

- 详情：

  文档源文件的仓库分支。

  它将会用于生成 _编辑此页_ 的链接。

### docsDir

- 类型： `string`

- 默认值： `''`

- 详情：

  文档源文件存放在仓库中的目录名。

  它将会用于生成 _编辑此页_ 的链接。

### lastUpdated

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否启用 _最近更新时间戳_ 。

  你可以通过页面的 [lastUpdated](./frontmatter.md#lastupdated) frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了 `false` ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。

### contributors

- 类型： `boolean`

- 默认值： `true`

- 详情：

  是否启用 _贡献者列表_ 。

  你可以通过页面的 [contributors](./frontmatter.md#contributors) frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了 `false` ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。
