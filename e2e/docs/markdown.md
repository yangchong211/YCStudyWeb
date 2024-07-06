# Markdown

## Heading Test

### Heading 3 Test

#### Heading 4 Test

##### Heading 5 Test

###### Heading 6 Test

## Links

- [Home](./README.md)

## Emoji :tada:

## Table of Contents

[[toc]]

## Code Block

Title:

```ts title=".vuepress/config.ts"
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

Line highlighting:

```ts{1,7-9}
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

Line numbers:

```ts:no-line-numbers
// line-numbers is disabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

Code import:

@[code{24-30}](./.vuepress/config.ts)
