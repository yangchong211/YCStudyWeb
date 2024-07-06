# shiki

<NpmBadge package="@vuepress/plugin-shiki" />

该插件使用 [Shiki](https://shiki.tmrs.site/) 来为 Markdown 代码块启用代码高亮。

::: tip

[Shiki](https://shiki.tmrs.site/) 是 VSCode 正在使用的代码高亮器。它具有更高的保真度，但可能会比 [Prism.js](https://prismjs.com/) 要慢一些，特别是在有大量代码块需要处理的时候。

:::

## 使用方法

```bash
npm i -D @vuepress/plugin-shiki@next
```

```ts
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default {
  plugins: [
    shikiPlugin({
      // 配置项
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff'],
    }),
  ],
}
```

## 配置项

### langs

- 类型：`ShikiLang[]`

- 详情：

  Shiki 要解析的代码块的语言。

  该配置项会被传递到 Shiki 的 `createHighlighter()` 方法中。

  ::: warning

  我们建议明确传入所有你使用的语言列表，否则 Shiki 会加载所有语言，并可能影响性能。

  :::

- 参考：
  - [Shiki > 语言](https://shiki.tmrs.site/languages)

### langAlias

- 类型：`{ [lang: string]: string }`

- 详情：自定义 Shiki 语言别名。

  自定义 Shiki 语言别名。

- 参考：
  - [Shiki > 自定义语言别名](https://shiki.tmrs.site/guide/load-lang#custom-language-aliases)

### theme

- 类型：`ShikiTheme`

- 默认值：`'nord'`

- 详情：Shiki 的主题。该主题会应用到代码块上。

- 参考：
  - [Shiki > 主题](https://shiki.tmrs.site/themes)

### themes

- 类型：`{ light: ShikiTheme; dark: ShikiTheme }`

- 详情：

  Shiki 的暗黑和明亮模式双主题。

  两个主题的样式会分别通过 `--shiki-light` 和 `--shiki-dark` 注入到代码块上：

  ```html
  <span style="--shiki-light:lightColor;--shiki-dark:darkColor;">code</span>
  ```

- 参考：
  - [Shiki > 双主题](https://shiki.tmrs.site/guide/dual-themes)

### lineNumbers

- 类型：`boolean | number`

- 默认值：`true`

- 详情：

  - `true`：启用代码行号
  - `false`：禁用代码行号。
  - `number`：显示行号所需的最少行数。
    例如，如果你将它设置为 4 ，那么只有在你的代码块包含至少 4 行代码时才会启用行号。

  你可以在代码块添加 `:line-numbers` / `:no-line-numbers` 标记来覆盖配置项中的设置，还可以在 `:line-numbers` 之后添加 `=` 来自定义起始行号，例如 `:line-numbers=2` 表示代码块中的行号从 `2` 开始。

**输入：**

````md
```ts :line-numbers
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts :no-line-numbers
// 禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts :line-numbers=2
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```
````

**输出：**

```ts :line-numbers
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts :no-line-numbers
// 禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts :line-numbers=2
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

### highlightLines

- 类型：`boolean`

- 默认值：`true`

- 详情：

  是否启用行高亮。启用后，可在代码块的信息描述中添加行数标记来高亮指定的行：

  - 行数范围：`{5-8}`
  - 多个单行：`{4,7,9}`
  - 组合：`{4,7-13,16,23-27,40}`

**输入：**

````md
```ts {1,7-9}
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
````

**输出：**

```ts {1,7-9}
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

:::: tip

以下功能需要额外的样式才能正常工作，这应该由主题或用户来处理。

::: details 查看样式示例
@[code](@vuepress/theme-default/src/client/styles/content/code-notation.scss)
:::

::::

### notationDiff

- 类型：`boolean`

- 默认值：`false`

- 详情：是否启用差异标记。

- 示例：

  **输入：**

  ````md
  ```ts
  console.log('hewwo') // [\!code --]
  console.log('hello') // [\!code ++]
  console.log('goodbye')
  ```
  ````

  **输出：**

  ```ts
  console.log('hewwo') // [!code --]
  console.log('hello') // [!code ++]
  console.log('goodbye')
  ```

- 参考：
  - [Shiki > 差异标记](https://shiki.tmrs.site/packages/transformers#transformernotationdiff)

### notationFocus

- 类型：`boolean`

- 默认值：`false`

- 详情：是否启用聚焦标记。

- 示例：

  **输入：**

  ````md
  ```ts
  console.log('Not focused')
  console.log('Focused') // [\!code focus]
  console.log('Not focused')
  ```
  ````

  **输出：**

  ```ts
  console.log('Not focused')
  console.log('Focused') // [!code focus]
  console.log('Not focused')
  ```

- 参考：
  - [Shiki > 聚焦标记](https://shiki.tmrs.site/packages/transformers#transformernotationfocus)

### notationHighlight

- 类型：`boolean`

- 默认值：`false`

- 详情：是否启用高亮标记。

- 示例：

  **输入：**

  ````md
  ```ts
  console.log('Not highlighted')
  console.log('Highlighted') // [\!code highlight]
  console.log('Not highlighted')
  ```
  ````

  **输出：**

  ```ts
  console.log('Not highlighted')
  console.log('Highlighted') // [!code highlight]
  console.log('Not highlighted')
  ```

- 参考：
  - [Shiki > 高亮标记](https://shiki.tmrs.site/packages/transformers#transformernotationhighlight)

### notationErrorLevel

- 类型：`boolean`

- 默认值：`false`

- 详情：是否启用错误级别标记。

- 示例：

  **输入：**

  ````md
  ```ts
  console.log('No errors or warnings')
  console.warn('Warning') // [\!code warning]
  console.error('Error') // [\!code error]
  ```
  ````

  **输出：**

  ```ts
  console.log('No errors or warnings')
  console.warn('Warning') // [!code warning]
  console.error('Error') // [!code error]
  ```

- 参考：
  - [Shiki > 错误级别标记](https://shiki.tmrs.site/packages/transformers#transformernotationerrorlevel)

### notationWordHighlight

- 类型：`boolean`

- 默认值：`false`

- 详情：是否启用词高亮标记。

  词高亮标记 必须单独写在一行。

- 示例：

  **输入：**

  ````md
  ```ts
  // [\!code word:Hello]
  const message = 'Hello World'
  console.log(message) // prints Hello World
  ```
  ````

  **输出：**

  ```ts
  // [!code word:Hello]
  const message = 'Hello World'
  console.log(message) // prints Hello World
  ```

- 示例：根据代码片段中提供的元字符串，高亮显示词

  **输入：**

  ````md
  ```js /Hello/
  const msg = 'Hello World'
  console.log(msg)
  console.log(msg) // 打印 Hello World
  ```
  ````

  **输出：**

  ```js /Hello/
  const msg = 'Hello World'
  console.log(msg)
  console.log(msg) // 打印 Hello World
  ```

- 参考：

  - [Shiki > 词高亮标记](https://shiki.tmrs.site/packages/transformers#transformernotationwordhighlight)

### whitespace

- 类型：`boolean | 'all' | 'boundary' | 'trailing'`

- 默认值：`false`

- 详情：是否启用空白符（空格 和 Tab）渲染。

  - `true`: 启用空白符渲染，等同于 `all`
  - `false`: 禁用空白符渲染
  - `'all'`: 渲染所有空白符
  - `'boundary'`: 仅渲染行首行尾的空白符
  - `'trailing'`: 仅渲染行尾的空白符

  你可以在代码块中添加 `:whitespace / :no-whitespace` 标记来覆盖配置项中的设置。还可以在 `:whitespace` 之后添加 `=` 来定义渲染空白符的方式。比如 `:whitespace=boundary` 将渲染行首行尾的空白符。

- 示例：

  **输入：**

  ````md
  ```ts :whitespace
  // 渲染所有空白符
  function block() {
    space()
    tab()
  }
  ```

  ```ts :whitespace=boundary
  // 渲染行首行尾的空白符
  function block() {
    space()
    tab()
  }
  ```

  ```ts :whitespace=trailing
  // 渲染行尾的空白符
  function block() {
    space()
    tab()
  }
  ```

  ```ts :no-whitespace
  // 禁用空白符
  function block() {
    space()
    tab()
  }
  ```
  ````

  **输出：**

  ```ts :whitespace data-title="ts :whitespace"
  // 渲染所有空白符
  function block() {
    space()
    tab()
  }
  ```

  ```ts :whitespace=boundary data-title="ts :whitespace=boundary"
  // 渲染行首行尾的空白符
  function block() {
    space()
    tab()
  }
  ```

  ```ts :whitespace=trailing data-title="ts :whitespace=trailing"
  // 渲染行尾的空白符
  function block() {
    space()
    tab()
  }
  ```

  ```ts :no-whitespace data-title="ts :no-whitespace"
  // 禁用空白符
  function block() {
    space()
    tab()
  }
  ```

- 参考：
  - [Shiki > 空白符渲染](https://shiki.tmrs.site/packages/transformers#transformerrenderwhitespace)

## 高级选项

### defaultLang

- 类型：`string`

- 默认值：`'plain'`

- 详情：指定的语言不可用时所使用的备选语言。

### logLevel

- 类型：`'warn' | 'debug' | 'silent'`

- 默认值：`'warn'`

- 详情：

  Shiki 语言检测的日志级别。

  - `warn`: 每次检测到未知语言时发出警告（默认）
  - `debug`: 每次检测到未知代码块时记录其文件路径（设置 `--debug` 标记时默认）
  - `silent`: 不发出警告

### preWrapper

- 类型：`boolean`

- 默认值：`true`

- 详情：

  是否在 `<pre>` 标签外添加包裹容器。

  `lineNumbers` 依赖于这个额外的包裹层。这换句话说，如果你禁用了 `preWrapper` ，那么行号也会被同时禁用。

### shikiSetup

- 类型：`(shiki: Highlighter) => void | Promise<void>`

- 详情： 一个用于自定义 Shiki 高亮器的钩子函数。

### transformers

- 类型：`ShikiTransformer[]`

- 详情：

  添加 Shiki 转换器。

  该配置项会被传递到 Shiki 的 `codeToHtml()` 方法中。

- 参考：
  - [Shiki > 转换器](https://shiki.tmrs.site/guide/transformers)
