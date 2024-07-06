import { describe, expect, it } from 'vitest'
import {
  getCodeParser,
  getHighlightLinesRange,
  highlightCodeLines,
  metaWhitespace,
  metaWordHighlight,
  notationDiff,
  notationErrorLevel,
  notationFocus,
  notationHighlight,
  notationWordHighlight,
} from '../src/node/index.js'

const genCode = (code: string) => `<pre><code>${code}</code></pre>`

describe('@vuepress/plugin-prismjs > parser', () => {
  it('normal parse', () => {
    const code = genCode(`const a = 1
const b = 2
const c = 3
`)
    const parser = getCodeParser(code)

    expect(parser.lines.length).toBe(4)
    expect(parser.pre.before).toContain('<pre')
    expect(parser.lines.every((line) => line.classList.includes('line'))).toBe(
      true,
    )
    expect(parser.stringify()).toMatchSnapshot()
  })

  it('parse <pre xxxx>', () => {
    const code = `<pre class="test"><code>highlight code</code></pre>`

    const parser = getCodeParser(code)

    expect(parser.pre.classList.includes('test')).toBe(true)
  })

  it('normal parse line node add class', () => {
    const code = genCode(`  const a = 1
  const b = 2
  console.log(a + b)`)
    const parser = getCodeParser(code)

    parser.line((node) => node.classList.push('highlighted'))

    expect(parser.stringify()).toMatchSnapshot()
  })

  it('parse highlight lines', () => {
    const code = genCode(`const a = 1
const b = 2
const c = 3
console.log(a + b)

function add(a, b) {
  return a + b
}
`)
    const parser = getCodeParser(code)

    highlightCodeLines(parser, getHighlightLinesRange('{1,3,6-8}'))

    const result = parser.stringify()

    expect(parser.lines[0].classList.includes('highlighted')).toBe(true) // line 1
    expect(parser.lines[6].classList.includes('highlighted')).toBe(true) // line 7
    expect(parser.lines[4].classList.includes('highlighted')).toBe(false) // line 4

    expect(result).toMatchSnapshot()
  })

  it('parse notation highlight', () => {
    const code = genCode(`const a = 1
const b = 2
const c = 3 // [!code highlight]
console.log(a + b) // [!code hl]

function add(a, b) {
  return a + b
}
`)
    const parser = getCodeParser(code)
    notationHighlight(parser)

    const result = parser.stringify()

    expect(parser.lines[2].classList.includes('highlighted')).toBe(true) // line 3
    // magic comment should be removed
    expect(parser.lines[2].content.includes('// [!code highlight]')).toBe(false) // line 3
    expect(parser.lines[3].classList.includes('highlighted')).toBe(true) // line 4

    // pre tag should add has-highlighted class
    expect(parser.pre.classList.includes('has-highlighted')).toBe(true)

    expect(result).toMatchSnapshot()
  })

  it('parse notation highlight:number', () => {
    const code = genCode(`const a = 1
const b = 2 // [!code highlight:3]
const c = 3
console.log(a + b)

function add(a, b) {
  return a + b
}
`)
    const parser = getCodeParser(code)
    notationHighlight(parser)

    const result = parser.stringify()

    expect(
      parser.lines
        .slice(1, 4)
        .every((line) => line.classList.includes('highlighted')),
    ).toBe(true)

    expect(parser.lines[4].classList.includes('highlighted')).toBe(false)

    expect(result).toMatchSnapshot()
  })

  it('parse notation diff', () => {
    const code = genCode(`const a = 1
const b = 2 // [!code ++]
const c = 3
console.log(a + b) // [!code --]

function add(a, b) { // [!code ++]
  return a + b
}
`)
    const parser = getCodeParser(code)
    notationDiff(parser)

    const result = parser.stringify()

    expect(parser.lines[1].classList.includes('diff add')).toBe(true) // line 2
    expect(parser.lines[3].classList.includes('diff remove')).toBe(true) // line 4

    expect(parser.lines[5].content.includes('// [!code ++]')).toBe(false)

    expect(parser.pre.classList.includes('has-diff')).toBe(true)

    expect(result).toMatchSnapshot()
  })

  it('parse notation diff ++:number', () => {
    const code = genCode(`const a = 1
const b = 2 // [!code ++:3]
const c = 3
console.log(a + b)

function add(a, b) {
  return a + b
}
`)
    const parser = getCodeParser(code)
    notationDiff(parser)

    const result = parser.stringify()

    expect(
      parser.lines
        .slice(1, 4)
        .every((line) => line.classList.includes('diff add')),
    ).toBe(true)

    expect(parser.lines[4].classList.includes('diff add')).toBe(false)

    expect(result).toMatchSnapshot()
  })

  it('parse notation focus', () => {
    const code = genCode(`const a = 1
const b = 2 // [!code focus]
const c = 3
console.log(a + b)

function add(a, b) { // [!code focus]
  return a + b
}
`)
    const parser = getCodeParser(code)
    notationFocus(parser)

    const result = parser.stringify()

    expect(parser.lines[1].classList.includes('has-focus')).toBe(true) // line 2
    expect(parser.lines[5].classList.includes('has-focus')).toBe(true) // line 5

    expect(parser.pre.classList.includes('has-focused-lines')).toBe(true)

    expect(result).toMatchSnapshot()
  })

  it('parse notation focus:number', () => {
    const code = genCode(`const a = 1
const b = 2 // [!code focus:3]
const c = 3
console.log(a + b)

function add(a, b) {
  return a + b
}
`)
    const parser = getCodeParser(code)
    notationFocus(parser)

    const result = parser.stringify()

    expect(
      parser.lines
        .slice(1, 4)
        .every((line) => line.classList.includes('has-focus')),
    ).toBe(true)

    expect(parser.lines[4].classList.includes('has-focus')).toBe(false)

    expect(result).toMatchSnapshot()
  })

  it('parse notation error level', () => {
    const code = genCode(`const a = 1
const b = 2 // [!code warning]
const c = 3
console.log(a + b) // [!code error]

function add(a, b) { // [!code warning]
  return a + b
}
`)
    const parser = getCodeParser(code)
    notationErrorLevel(parser)

    const result = parser.stringify()

    expect(parser.lines[1].classList.includes('warning')).toBe(true) // line 2
    expect(parser.lines[3].classList.includes('error')).toBe(true) // line 4

    expect(parser.lines[5].content.includes('// [!code warning]')).toBe(false)

    expect(parser.pre.classList.includes('has-highlighted')).toBe(true)

    expect(result).toMatchSnapshot()
  })

  it('parse notation diff error:number', () => {
    const code = genCode(`const a = 1
const b = 2 // [!code error:3]
const c = 3
console.log(a + b)

function add(a, b) {
  return a + b
}
`)
    const parser = getCodeParser(code)
    notationErrorLevel(parser)

    const result = parser.stringify()

    expect(
      parser.lines
        .slice(1, 4)
        .every((line) => line.classList.includes('error')),
    ).toBe(true)

    expect(parser.lines[4].classList.includes('error')).toBe(false)

    expect(result).toMatchSnapshot()
  })

  it('parse notation word highlight', () => {
    const code = genCode(`// [!code word:Hello]
const message = 'Hello World'
console.log(message) // prints Hello World`)
    const parser = getCodeParser(code)
    notationWordHighlight(parser)

    const result = parser.stringify()
    expect(
      parser.lines.every((line) =>
        line.content.includes('class="highlighted-word"'),
      ),
    ).toBe(true)

    expect(result).toMatchSnapshot()
  })

  it('parse notation word highlight :number', () => {
    const code = genCode(`// [!code word:Hello:2]
const message = 'Hello World'
console.log(message) // prints Hello World
console.log(message) // prints Hello World`)
    const parser = getCodeParser(code)
    notationWordHighlight(parser)

    const result = parser.stringify()
    expect(parser.lines[0].content.includes('class="highlighted-word"')).toBe(
      true,
    )
    expect(parser.lines[1].content.includes('class="highlighted-word"')).toBe(
      true,
    )
    expect(parser.lines[2].content.includes('class="highlighted-word"')).toBe(
      false,
    )

    expect(result).toMatchSnapshot()
  })

  it('parse word highlight within meta', () => {
    const code = genCode(`const message = 'Hello World'
console.log(message) // prints Hello World`)
    const parser = getCodeParser(code)
    metaWordHighlight(parser, '/Hello/')

    const result = parser.stringify()
    expect(
      parser.lines.every((line) =>
        line.content.includes('class="highlighted-word"'),
      ),
    ).toBe(true)

    expect(result).toMatchSnapshot()
  })

  it('parse multiple words highlight within meta', () => {
    const code = genCode(`const message = 'Hello Foo'
console.log(message) // prints Hello Bar`)
    const parser = getCodeParser(code)
    metaWordHighlight(parser, '/Foo|Bar/')

    const result = parser.stringify()
    expect(parser.lines[0].content.includes('class="highlighted-word"')).toBe(
      true,
    )
    expect(parser.lines[1].content.includes('class="highlighted-word"')).toBe(
      true,
    )

    expect(result).toMatchSnapshot()
  })

  it('should not remove // [\\!code xxx]', () => {
    const code = genCode(`const a = 1 // [\\!code focus]`)

    const parser = getCodeParser(code)

    const result = parser.stringify()

    expect(parser.lines[0].content.includes('// [!code focus]')).toBe(true)

    expect(result).toMatchSnapshot()
  })

  it('should remove single line // [!code xxx]', () => {
    const code = genCode(`const a = 1
// [!code focus:2]
const b = 2`)

    const parser = getCodeParser(code)
    notationFocus(parser)

    const result = parser.stringify()

    expect(parser.lines.length).toBe(2)

    expect(result).toMatchSnapshot()
  })

  describe('should work `metaWhitespace` with default options', () => {
    const code = genCode(`function foo(bar: string, baz: string) {
  console.log('hello world')  \n  console.log('hello world')
\t\tconsole.log('hello world')
console.log('hello world)\t
}`)
    it('no render whitespace without meta', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, '')
      const result = parser.stringify()

      expect(result.includes('class="space"')).toBe(false)
      expect(result.includes('class="tab"')).toBe(false)

      expect(parser.stringify()).toMatchSnapshot()
    })

    it(':whitespace / :whitespace=all', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js :whitespace')
      const result = parser.stringify()

      expect(parser.lines[0].content.includes('class="space"')).toBe(true)
      expect(parser.lines[1].content.includes('<span class="space">')).toBe(
        true,
      )
      expect(parser.lines[3].content.includes('span class="tab"')).toBe(true)
      expect(result).toMatchSnapshot()
    })

    it(':whitespace=boundary', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js :whitespace=boundary')
      const result = parser.stringify()
      expect(parser.lines[0].content.includes('class="space"')).toBe(false)
      expect(
        parser.lines[1].content.match(/<span class="space">/g)?.length,
      ).toBe(4)
      expect(parser.lines[3].content.match(/<span class="tab">/g)?.length).toBe(
        2,
      )
      expect(result).toMatchSnapshot()
    })

    it(':whitespace=trailing', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js :whitespace=trailing')
      const result = parser.stringify()
      expect(parser.lines[0].content.includes('class="space"')).toBe(false)
      expect(
        parser.lines[1].content.match(/<span class="space">/g)?.length,
      ).toBe(2)
      expect(parser.lines[3].content.includes('class="space"')).toBe(false)
      expect(result).toMatchSnapshot()
    })
  })

  describe('should work `metaWhitespace` with `all` / `true` options', () => {
    const code = genCode(`function foo(bar: string, baz: string) {
  console.log('hello world')  \n  console.log('hello world')
\t\tconsole.log('hello world')
console.log('hello world)\t
}`)

    it('`true` and  `:whitespace`', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js :whitespace', true)
      const result = parser.stringify()
      expect(
        parser.lines
          .slice(0, -1)
          .every((line) => line.content.includes('class="space"')),
      ).toBe(true)
      expect(result).toMatchSnapshot()
    })

    it('`true` and  `:whitespace=boundary`', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js :whitespace=boundary', true)
      const result = parser.stringify()
      expect(parser.lines[0].content.includes('class="space"')).toBe(false)
      expect(parser.lines[1].content.includes('class="space"')).toBe(true)
      expect(parser.lines[2].content.includes('class="space"')).toBe(true)
      expect(parser.lines[3].content.includes('class="tab"')).toBe(true)
      expect(parser.lines[4].content.includes('class="tab"')).toBe(true)
      expect(result).toMatchSnapshot()
    })

    it('`true` and `:whitespace=trailing`', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js :whitespace=trailing', true)
      const result = parser.stringify()

      expect(parser.lines[0].content.includes('class="space"')).toBe(false)
      expect(parser.lines[1].content.includes('class="space"')).toBe(true)
      expect(parser.lines[2].content.includes('class="space"')).toBe(false)
      expect(parser.lines[4].content.includes('class="tab"')).toBe(true)

      expect(result).toMatchSnapshot()
    })

    it('`all` and  `:whitespace`', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js :whitespace', 'all')
      const result = parser.stringify()
      expect(
        parser.lines
          .slice(0, -1)
          .every((line) => line.content.includes('class="space"')),
      ).toBe(true)
      expect(result).toMatchSnapshot()
    })
  })

  describe('should work `metaWhitespace` with `boundary` options', () => {
    const code =
      genCode(`<span class="line">function foo(bar: string, baz: string) {</span>
<span class="line">  console</span><span>.</span>log('hello world'<span>)  </span></span>\n  console.log('hello world')
\t\tconsole.log('hello world')
console.log('hello world)\t
}`)

    it('`boundary` and `:whitespace`', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js :whitespace', 'boundary')
      const result = parser.stringify()
      expect(parser.lines[0].content.includes('class="space"')).toBe(false)
      expect(parser.lines[1].content.includes('class="space"')).toBe(true)
      expect(parser.lines[2].content.includes('class="space"')).toBe(true)
      expect(parser.lines[3].content.includes('class="tab"')).toBe(true)
      expect(parser.lines[4].content.includes('class="tab"')).toBe(true)
      expect(result).toMatchSnapshot()
    })

    it('`boundary` and `:whitespace=all', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js :whitespace=all', 'boundary')
      const result = parser.stringify()
      expect(
        parser.lines
          .slice(0, -1)
          .every((line) => line.content.includes('class="space"')),
      ).toBe(true)
      expect(result).toMatchSnapshot()
    })

    it('`boundary` and `:whitespace=trailing`', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js :whitespace=trailing', 'boundary')
      const result = parser.stringify()
      expect(parser.lines[0].content.includes('class="space"')).toBe(false)
      expect(parser.lines[1].content.includes('class="space"')).toBe(true)
      expect(parser.lines[2].content.includes('class="space"')).toBe(false)
      expect(parser.lines[4].content.includes('class="tab"')).toBe(true)
      expect(result).toMatchSnapshot()
    })
  })

  describe('should work `metaWhitespace` with `false`', () => {
    const code = genCode(`function foo(bar: string, baz: string) {
  console.log('hello world')  \n  console.log('hello world')
\t\tconsole.log('hello world')
console.log('hello world)\t
}`)
    it('disabled global', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js', false)
      const result = parser.stringify()
      expect(
        parser.lines.every((line) => !line.content.includes('class="space"')),
      ).toBe(true)
      expect(result).toMatchSnapshot()
    })

    it('disabled global and :whitespace', () => {
      const parser = getCodeParser(code)
      metaWhitespace(parser, 'js :whitespace', false)
      const result = parser.stringify()
      expect(
        parser.lines
          .slice(0, -1)
          .every((line) => line.content.includes('class="space"')),
      ).toBe(true)
      expect(result).toMatchSnapshot()
    })
  })
})
