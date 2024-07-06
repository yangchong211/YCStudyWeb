import { lineNumbers as lineNumbersPlugin } from '@vuepress/highlighter-helper'
import MarkdownIt from 'markdown-it'
import { describe, expect, it, vi } from 'vitest'
import type {
  HighlightOptions,
  PreWrapperOptions,
  PrismjsPluginOptions,
} from '../src/node/index.js'
import { highlightPlugin, preWrapperPlugin } from '../src/node/index.js'
import { resolveHighlighter } from '../src/node/resolveHighlighter.js'

const codeFence = '```'

const createMarkdown = ({
  preWrapper = true,
  lineNumbers = true,
  ...options
}: PrismjsPluginOptions = {}): MarkdownIt => {
  const md = MarkdownIt()

  md.options.highlight = (code, lang) => {
    const highlighter = resolveHighlighter(lang)
    return highlighter?.(code) || ''
  }
  md.use<HighlightOptions>(highlightPlugin, options)
  md.use<PreWrapperOptions>(preWrapperPlugin, { preWrapper })
  if (preWrapper) {
    md.use(lineNumbersPlugin, {
      lineNumbers,
      removeLastLine: true,
    })
  }
  return md
}

describe('@vuepress/plugin-prismjs > markdown fence preWrapper', () => {
  describe('plugin options', () => {
    const source = `\
${codeFence}
Raw text
${codeFence}

${codeFence}ts
const foo = 'foo'

function bar () {
  return 1024
}
${codeFence}

${codeFence}ts{1,2}
const foo = 'foo'

function bar () {
  return 1024
}
${codeFence}

${codeFence}ts title="config/foo.ts" foo="foo" {1,2-4,5-5}
const foo = 'foo'

function bar () {
  return 1024
}

const baz = () => {
  return 2048
}
${codeFence}

${codeFence}{{ inlineCode }}${codeFence}
`

    it('should process code fences with default options', () => {
      const md = createMarkdown()

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should disable `highlightLines`', () => {
      const md = createMarkdown({
        highlightLines: false,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should disable `lineNumbers`', () => {
      const md = createMarkdown({
        lineNumbers: false,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should enable `lineNumbers` according to number of code lines', () => {
      const md = createMarkdown({
        lineNumbers: 4,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should disable `preWrapper`', () => {
      const md = createMarkdown({
        preWrapper: false,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should always disable `lineNumbers` if `preWrapper` is disabled', () => {
      const mdWithLineNumbers = createMarkdown({
        lineNumbers: true,
        preWrapper: false,
      })
      const mdWithoutLineNumbers = createMarkdown({
        lineNumbers: false,
        preWrapper: false,
      })

      expect(mdWithLineNumbers.render(source)).toBe(
        mdWithoutLineNumbers.render(source),
      )
    })
  })

  describe(':line-numbers / :no-line-numbers', () => {
    const source = `\
${codeFence}
Raw text
${codeFence}

${codeFence}:line-numbers
Raw text
${codeFence}

${codeFence}:no-line-numbers
Raw text
${codeFence}

${codeFence}ts
const foo = 'foo'

function bar () {
  return 1024
}
${codeFence}

${codeFence}ts:line-numbers
const foo = 'foo'

function bar () {
  return 1024
}
${codeFence}

${codeFence}ts:no-line-numbers
const foo = 'foo'

function bar () {
  return 1024
}
${codeFence}

${codeFence}ts{1,2}
const foo = 'foo'

function bar () {
  return 1024
}
${codeFence}

${codeFence}ts{1,2}:line-numbers
const foo = 'foo'

function bar () {
  return 1024
}
${codeFence}

${codeFence}ts title="config/foo.ts" foo="foo" {1,2}:no-line-numbers
const foo = 'foo'

function bar () {
  return 1024
}
${codeFence}
`

    it('should work properly if `lineNumbers` is enabled by default', () => {
      const md = createMarkdown({
        lineNumbers: true,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work properly if `lineNumbers` is disabled by default', () => {
      const md = createMarkdown({
        lineNumbers: false,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work properly if `lineNumbers` is set to a number by default', () => {
      const md = createMarkdown({
        lineNumbers: 4,
      })

      expect(md.render(source)).toMatchSnapshot()
    })
  })

  describe(':line-numbers=number', () => {
    const source = `\
${codeFence}ts:line-numbers=2
const line2 = 'line 2'
const line3 = 'line 3'
${codeFence}

${codeFence}ts{2,3}:line-numbers=3
const line3 = 'line 3'
const line4 = 'line 4'
const line5 = 'line 5'
${codeFence}

${codeFence}ts title="config/foo.ts" foo="foo" {1,2}:line-numbers=10
const line10 = 'line 10'
const line11 = 'line 11'
${codeFence}
`
    it('should work properly if `lineNumbers` is enabled by default', () => {
      const md = createMarkdown({
        lineNumbers: true,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work properly if `lineNumbers` is disabled by default', () => {
      const md = createMarkdown({
        lineNumbers: false,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work properly if `lineNumbers` is set to a number by default', () => {
      const md = createMarkdown({
        lineNumbers: 4,
      })

      expect(md.render(source)).toMatchSnapshot()
    })
  })

  describe('syntax highlighting', () => {
    const source = `\
${codeFence}
Raw text
${codeFence}

${codeFence}js
const foo = 'foo'

function bar () {
  return 1024
}
${codeFence}

${codeFence}ts
const foo: string = 'foo'

function bar (): number {
  return 1024
}
${codeFence}

${codeFence}vue-html
<template>
  <div>msg: {{msg}}</div>
</template>
<script setup lang="ts">
const msg = 'hello world';
</script>
${codeFence}
`

    it('should work if highlighted code is wrapped with `<pre>`', () => {
      const highlight = vi.fn(
        (code, lang) =>
          `<pre><code>highlighted code: ${code}, lang: ${lang}</code></pre>`,
      )
      const md = createMarkdown()

      md.options.highlight = highlight

      expect(md.render(source)).toMatchSnapshot()
      expect(highlight).toHaveBeenCalledTimes(4)
    })

    it('should work if highlighted code is not wrapped with `<pre>`', () => {
      const highlight = vi.fn(
        (code, lang) => `highlighted code: ${code}, lang: ${lang}`,
      )
      const md = createMarkdown()

      md.options.highlight = highlight

      expect(md.render(source)).toMatchSnapshot()
      expect(highlight).toHaveBeenCalledTimes(4)
    })
  })

  describe('highlight notation', () => {
    it('should highlight notation', () => {
      const source = `\
${codeFence}js /grault/
const foo = 'foo' // [!code hl]
const bar = 'bar' // [!code focus]
const baz = 'baz' // [!code ++]
const qux = 'qux' // [!code --]
const quux = 'quux' // [!code error]
const corge = 'corge' // [!code warning]
// [!code word:foo]
const grault = 'foo'
${codeFence}
`
      const md = createMarkdown({
        notationDiff: true,
        notationErrorLevel: true,
        notationFocus: true,
        notationHighlight: true,
        notationWordHighLight: true,
      })
      expect(md.render(source)).toMatchSnapshot()
    })
  })

  describe('render whitespace', () => {
    const source = `\
${codeFence}
function foo () {  return 'foo'  \n}
${codeFence}
${codeFence}js :whitespace
function foo () {
\tconst foo = 'foo'
\tif (foo === 'foo') {
\t\treturn 'bar'
\t}
\treturn 'foo'
}
${codeFence}
${codeFence}js :whitespace=boundary
function foo () {
  const foo = 'foo'  \n  return 'foo'  \n}
${codeFence}
${codeFence}js :whitespace=trailing
function foo () {
  const foo = 'foo'  \n  return 'foo'  \n}
}
${codeFence}
${codeFence}js :whitespace=all
function foo () {
  const foo = 'foo'  \n  return 'foo'
}
`
    it('should work whitespace with default options', () => {
      const md = createMarkdown()
      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work whitespace with `all` option', () => {
      const md = createMarkdown({ whitespace: 'all' })
      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work whitespace with `boundary` option', () => {
      const md = createMarkdown({ whitespace: 'boundary' })
      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work whitespace with `trailing` option', () => {
      const md = createMarkdown({ whitespace: 'trailing' })
      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work whitespace with `false` option', () => {
      const md = createMarkdown({ whitespace: false })
      expect(md.render(source)).toMatchSnapshot()
    })
  })
})
