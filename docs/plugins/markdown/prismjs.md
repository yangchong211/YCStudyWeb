# prismjs

<NpmBadge package="@vuepress/plugin-prismjs" />

This plugin will enable syntax highlighting for markdown code fence with [Prism.js](https://prismjs.com/).

This plugin has been integrated into the default theme.

Notice that this plugin would only tokenize the code fence without adding styles. When using it with a custom theme, you may need to choose and import Prism.js style theme yourself.

## Usage

```bash
npm i -D @vuepress/plugin-prismjs@next
```

```ts
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

export default {
  plugins: [
    prismjsPlugin({
      // options
    }),
  ],
}
```

## Options

### preloadLanguages

- Type: `string[]`

- Default: `['markdown', 'jsdoc', 'yaml']`

- Details:

  Languages to preload.

  By default, languages will be loaded on demand when parsing markdown files.

  However, Prism.js has [some potential issues](https://github.com/PrismJS/prism/issues/2716) about loading languages dynamically. To avoid them, you can preload languages via this option.

### lineNumbers

- Type: `boolean | number`

- Default: `true`

- Details:

  - `true`: enable line numbers.
  - `false`: disabled line numbers.
  - `number`: the minimum number of lines to enable line numbers.
    For example, if you set it to 4, line numbers will only be enabled when your code block has at least 4 lines of code.

  You can add `:line-numbers` / `:no-line-numbers` mark in your fenced code blocks to override the value set in config, and customize the beginning number by adding `=` after `:line-numbers`. For example, `:line-numbers=2` means the line numbers in code blocks will start from `2`.

**Input:**

````md
```ts:line-numbers
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts :no-line-numbers
// line-numbers is disabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts :line-numbers=2
// line-numbers is enabled and start from 2
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```
````

**Output:**

```ts :line-numbers
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts :no-line-numbers
// line-numbers is disabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts :line-numbers=2
// line-numbers is enabled and start from 2
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

### highlightLines

- Type: `boolean`

- Default: `true`

- Details:

  Whether enable code line highlighting. You can highlight specified lines of your code blocks by adding line ranges mark in your fenced code blocks:

  - Line ranges: `{5-8}`
  - Multiple single lines: `{4,7,9}`
  - Combined: `{4,7-13,16,23-27,40}`

**Input:**

````md
```ts {1,7-9}
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
````

**Output:**

```ts {1,7-9}
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

:::: tip

In the new version, some functionalities similar to [shiki](https://shiki.style/packages/transformers) have been implemented, allowing you to style code blocks using the same syntax.

The following features requires additional style to work, which should be handled by themes or users.

::: details View Styles Example
@[code](@vuepress/theme-default/src/client/styles/content/code-notation.scss)
:::

::::

### notationDiff

- Type: `boolean`

- Default: `false`

- Details: Whether enable notation diff.

- Example:

  **Input:**

  ````md
  ```ts
  console.log('hewwo') // [\!code --]
  console.log('hello') // [\!code ++]
  console.log('goodbye')
  ```
  ````

  **Output:**

  ```ts
  console.log('hewwo') // [!code --]
  console.log('hello') // [!code ++]
  console.log('goodbye')
  ```

- Also see:
  - [Shiki > Notation Diff](https://shiki.style/packages/transformers#transformernotationdiff)

### notationFocus

- Type: `boolean`

- Default: `false`

- Details: Whether enable notation focus.

- Example:

  **Input:**

  ````md
  ```ts
  console.log('Not focused')
  console.log('Focused') // [\!code focus]
  console.log('Not focused')
  ```
  ````

  **Output:**

  ```ts
  console.log('Not focused')
  console.log('Focused') // [!code focus]
  console.log('Not focused')
  ```

- Also see:
  - [Shiki > Notation Focus](https://shiki.style/packages/transformers#transformernotationfocus)

### notationHighlight

- Type: `boolean`

- Default: `false`

- Details: Whether enable notation highlight.

- Example:

  **Input:**

  ````md
  ```ts
  console.log('Not highlighted')
  console.log('Highlighted') // [\!code highlight]
  console.log('Not highlighted')
  ```
  ````

  **Output:**

  ```ts
  console.log('Not highlighted')
  console.log('Highlighted') // [!code highlight]
  console.log('Not highlighted')
  ```

- Also see:
  - [Shiki > Notation Highlight](https://shiki.style/packages/transformers#transformernotationhighlight)

### notationErrorLevel

- Type: `boolean`

- Default: `false`

- Details: Whether enable notation error level.

- Example:

  **Input:**

  ````md
  ```ts
  console.log('No errors or warnings')
  console.warn('Warning') // [\!code warning]
  console.error('Error') // [\!code error]
  ```
  ````

  **Output:**

  ```ts
  console.log('No errors or warnings')
  console.warn('Warning') // [!code warning]
  console.error('Error') // [!code error]
  ```

- Also see:
  - [Shiki > Notation Error Level](https://shiki.style/packages/transformers#transformernotationerrorlevel)

### notationWordHighlight

- Type: `boolean`

- Default: `false`

- Details: Whether enable notation word highlight.

  Word highlight must be written on a separate line.

- Example:

  **Input:**

  ````md
  ```ts
  // [\!code word:Hello]
  const message = 'Hello World'
  console.log(message) // prints Hello World
  ```
  ````

  **Output:**

  ```ts
  // [!code word:Hello]
  const message = 'Hello World'
  console.log(message) // prints Hello World
  ```

- Example：Highlight words based on the meta string provided on the code snippet

  **Input:**

  ````md
  ```js /Hello/
  const msg = 'Hello World'
  console.log(msg)
  console.log(msg) // prints Hello World
  ```
  ````

  **Output:**

  ```js /Hello/
  const msg = 'Hello World'
  console.log(msg)
  console.log(msg) // prints Hello World
  ```

- Also see:

  - [Shiki > Notation Word Highlight](https://shiki.style/packages/transformers#transformernotationwordhighlight)

### whitespace

- Type: `boolean | 'all' | 'boundary' | 'trailing'`

- Default: `false`

- Details: Whether enable whitespace characters (Space and Tab).

  - `true`: enable render whitespace, same of `all`
  - `false`: disable render whitespace
  - `'all'`: render all whitespace
  - `'boundary'`: render leading and trailing whitespace of the line
  - `'trailing'`: render trailing whitespace of the line

  You can add `:whitespace / :no-whitespace` mark in your fenced code blocks to override the value set in config, and customize the render type by adding `=` after `:whitespace`. For example `:whitespace=boundary` will render leading and trailing whitespace of the line.

- Example:

  **Input:**

  ````md
  ```ts :whitespace
  // render all whitespace
  function block() {
    space()
    tab()
  }
  ```

  ```ts :whitespace=boundary
  // render leading and trailing whitespace of the line
  function block() {
    space()
    tab()
  }
  ```

  ```ts :whitespace=trailing
  // render trailing whitespace of the line
  function block() {
    space()
    tab()
  }
  ```

  ```ts :no-whitespace
  // disable render whitespace
  function block() {
    space()
    tab()
  }
  ```
  ````

  **Output:**

  ```ts :whitespace data-title="ts :whitespace"
  // render all whitespace
  function block() {
    space()
    tab()
  }
  ```

  ```ts :whitespace=boundary data-title="ts :whitespace=boundary"
  // render leading and trailing whitespace of the line
  function block() {
    space()
    tab()
  }
  ```

  ```ts :whitespace=trailing data-title="ts :whitespace=trailing"
  // render trailing whitespace of the line
  function block() {
    space()
    tab()
  }
  ```

  ```ts :no-whitespace data-title="ts :no-whitespace"
  // disable render whitespace
  function block() {
    space()
    tab()
  }
  ```

- Also see：
  - [Shiki > Render Whitespace](https://shiki.style/packages/transformers#transformerrenderwhitespace)

### preWrapper

- Type: `boolean`

- Default: `true`

- Details:

  Adds extra wrapper outside `<pre>` tag or not.

  The wrapper is required by the `lineNumbers`. That means, if you disable `preWrapper`, the line line numbers will also be disabled.

  ::: tip

  You can disable it if you want to implement them in client side. For example, [Prismjs Line Highlight](https://prismjs.com/plugins/line-highlight/) or [Prismjs Line Numbers](https://prismjs.com/plugins/line-numbers/).

  :::
