/**
 * This module processes the output of prismjs by wrapping each line of code
 * with a `<span class="line">` and provides simple operations for the line node.
 */

const PRE_OPEN_TAG_RE = /^(<pre[^]*?>)/
const CODE_OPEN_TAG_RE = /^(<code[^]*?>)/
const FENCE_CLOSE_TAG_RE = /(<\/code><\/pre>(\r?\n))?$/
const NEWLINE_RE = /(\r?\n)/g
const CLASS_RE = /class="([^]*)"/
const CODE_ESCAPE_RE = /\[\\!code/g

export interface OpenTag {
  /**
   * @example <tag
   */
  before: string
  classList: string[]
  /**
   * @example >
   */
  after: string
  content: string

  toString(): string
}

type LineHandler = (node: OpenTag, index: number) => void

export interface CodeParser {
  pre: OpenTag
  code: OpenTag
  lines: OpenTag[]
  /**
   * Add a handler for each the line `<span class="line">`
   */
  line: (handler: LineHandler) => void
  /**
   * Get the string representation of the parsed code
   */
  stringify: () => string
}

const splitLines = (code: string): string[] => {
  const parts = code.split(NEWLINE_RE)
  const lines: string[] = []

  for (let i = 0; i < parts.length; i += 2) {
    lines.push(parts[i])
  }

  return lines
}

const createOpenTag = (
  snippet: string,
  content = '',
  classList: string[] = [],
): OpenTag => {
  const match = snippet.match(CLASS_RE)

  if (!match) {
    const hashHtml = snippet.length > 1

    return {
      before: hashHtml ? snippet.slice(0, -1) : '',
      classList,
      after: hashHtml ? snippet.slice(-1) : '',
      content,
      toString() {
        const className = uniq(this.classList).join(' ')
        const { before, after, content } = this

        return `${before}${className && before ? ` class="${className}"` : ''}${after}${content}`
      },
    }
  }

  return {
    before: snippet.slice(0, match.index!),
    classList: [...classList, ...match[1].split(' ')],
    after: snippet.slice(match.index! + match[0].length),
    content,
    toString() {
      const className = uniq(this.classList).join(' ')
      const { before, after, content } = this

      return `${before}${className && before ? ` class="${className}"` : ''}${after}${content}`
    },
  }
}

const uniq = <T>(array: T[]): T[] => [...new Set(array)]

export const getCodeParser = (html: string): CodeParser => {
  const preOpen = html.match(PRE_OPEN_TAG_RE)?.[1] ?? ''

  html = html.slice(preOpen.length)

  const code = html.match(CODE_OPEN_TAG_RE)?.[1] ?? ''
  const endLine = html.match(FENCE_CLOSE_TAG_RE)?.[1] ?? ''

  html = html.slice(code.length, endLine.length ? -endLine.length : html.length)

  const preOpenTag = createOpenTag(preOpen)
  const codeOpenTag = createOpenTag(code)
  const lineNodeList = splitLines(html).map((line) =>
    createOpenTag('<span>', line, ['line']),
  )

  const lineNodeHandlers: LineHandler[] = []

  const addLineNodeHandler = (handler: LineHandler): void => {
    lineNodeHandlers.push(handler)
  }

  const stringify = (): string => {
    const linesContent = lineNodeList.map((line, index) => {
      lineNodeHandlers.forEach((handler) => handler(line, index + 1))
      line.content = line.content.replace(CODE_ESCAPE_RE, '[!code')

      return line.toString() + '</span>'
    })

    return [
      preOpenTag.toString(),
      codeOpenTag.toString(),
      linesContent.join('\n'),
      endLine,
    ].join('')
  }

  return {
    pre: preOpenTag,
    code: codeOpenTag,
    lines: lineNodeList,
    line: addLineNodeHandler,
    stringify,
  }
}
