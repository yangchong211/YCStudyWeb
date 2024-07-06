import { lineNumbers as lineNumbersPlugin } from '@vuepress/highlighter-helper'
import type { MarkdownItLineNumbersOptions } from '@vuepress/highlighter-helper'
import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import type { App } from 'vuepress'
import {
  applyHighlighter,
  highlightLinesPlugin,
  preWrapperPlugin,
} from '../src/node/markdown/index.js'
import type {
  PreWrapperOptions,
  ShikiHighlightOptions,
} from '../src/node/types.js'

const createMarkdown = async ({
  preWrapper = true,
  lineNumbers = true,
  ...options
}: MarkdownItLineNumbersOptions &
  PreWrapperOptions &
  ShikiHighlightOptions = {}): Promise<MarkdownIt> => {
  const md = MarkdownIt()

  await applyHighlighter(md, { env: { isDebug: false } } as App, options)

  md.use(highlightLinesPlugin)
  md.use<PreWrapperOptions>(preWrapperPlugin, { preWrapper })
  if (preWrapper) {
    md.use<MarkdownItLineNumbersOptions>(lineNumbersPlugin, { lineNumbers })
  }
  return md
}

const codeFence = '```'

describe('@vuepress/plugin-shiki > fence preWrapper', () => {
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

${codeFence}ts
console.log('1 + 2 + 3 =' + {{ 1 + 2 + 3 }})
${codeFence}

${codeFence}{{ inlineCode }}${codeFence}
`

    it('should process code fences with default options', async () => {
      const md = await createMarkdown()

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should disable `highlightLines`', async () => {
      const md = await createMarkdown({
        highlightLines: false,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should disable `lineNumbers`', async () => {
      const md = await createMarkdown({
        lineNumbers: false,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should enable `lineNumbers` according to number of code lines', async () => {
      const md = await createMarkdown({
        lineNumbers: 4,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should disable `preWrapper`', async () => {
      const md = await createMarkdown({
        preWrapper: false,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should always disable `lineNumbers` if `preWrapper` is disabled', async () => {
      const mdWithLineNumbers = await createMarkdown({
        lineNumbers: true,
        preWrapper: false,
      })
      const mdWithoutLineNumbers = await createMarkdown({
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

    it('should work properly if `lineNumbers` is enabled by default', async () => {
      const md = await createMarkdown({
        lineNumbers: true,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work properly if `lineNumbers` is disabled by default', async () => {
      const md = await createMarkdown({
        lineNumbers: false,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work properly if `lineNumbers` is set to a number by default', async () => {
      const md = await createMarkdown({
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
    it('should work properly if `lineNumbers` is enabled by default', async () => {
      const md = await createMarkdown({
        lineNumbers: true,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work properly if `lineNumbers` is disabled by default', async () => {
      const md = await createMarkdown({
        lineNumbers: false,
      })

      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work properly if `lineNumbers` is set to a number by default', async () => {
      const md = await createMarkdown({
        lineNumbers: 4,
      })

      expect(md.render(source)).toMatchSnapshot()
    })
  })

  describe('notation transformers', () => {
    const source = `\
${codeFence}ts
const foo = 'foo' // [!code highlight]
const bar = 'bar' // [!code ++]
const baz = 'baz' // [!code --]
const bax = 'bax' // [!code warning]
const buz = 'buz' // [!code error]
const qux = 'qux' // [!code focus]
${codeFence}

${codeFence}ts
// [!code highlight:3]
const foo = 'foo'
const bar = 'bar'
${codeFence}

${codeFence}ts
// [!code word:Hello]
const message = 'Hello World'
console.log(message) // prints Hello World
${codeFence}

${codeFence}ts /Hello/
const msg = 'Hello World'
console.log(msg)
console.log(msg) // prints Hello World
${codeFence}
`
    it('should work notation enabled', async () => {
      const md = await createMarkdown({
        notationDiff: true,
        notationErrorLevel: true,
        notationFocus: true,
        notationHighlight: true,
        notationWordHighlight: true,
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
    it('should work whitespace with default options', async () => {
      const md = await createMarkdown()
      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work whitespace with `all` option', async () => {
      const md = await createMarkdown({ whitespace: 'all' })
      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work whitespace with `boundary` option', async () => {
      const md = await createMarkdown({ whitespace: 'boundary' })
      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work whitespace with `trailing` option', async () => {
      const md = await createMarkdown({ whitespace: 'trailing' })
      expect(md.render(source)).toMatchSnapshot()
    })

    it('should work whitespace with `false` option', async () => {
      const md = await createMarkdown({ whitespace: false })
      expect(md.render(source)).toMatchSnapshot()
    })
  })
})
