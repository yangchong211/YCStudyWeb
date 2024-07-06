import { resolveWhitespacePosition } from '@vuepress/highlighter-helper'
import type { WhitespacePosition } from '@vuepress/highlighter-helper'
import type { CodeParser, OpenTag } from './getCodeParser.js'

const SPLIT_REGEXP = /(<[^>]+>)/
const SPACE_REGEXP = /[\s\t]/g

const classMap = {
  ' ': 'space',
  '\t': 'tab',
}

const isSpace = (char: string): boolean => char === ' ' || char === '\t'

const renderSpace = (text: string): string =>
  text.replaceAll(
    SPACE_REGEXP,
    (space) => `<span class="${classMap[space]}">${space}</span>`,
  )

export const renderWhitespaceInLine = (
  node: OpenTag,
  position: WhitespacePosition,
): void => {
  let snippets = node.content.split(SPLIT_REGEXP)

  // match all whitespace
  if (position === 'all') {
    snippets = snippets.map((text) =>
      !text || text[0] === '<' ? text : renderSpace(text),
    )
  }
  // match whitespace at the beginning of the line
  if (position === 'boundary') {
    let has = true
    for (let i = 0; i < snippets.length; i++) {
      const snippet = snippets[i]
      if (snippet && snippet[0] !== '<') {
        let j = 0
        while (snippet[j] && j < snippet.length) {
          if (!isSpace(snippet[j])) {
            has = false
            break
          }
          j++
        }
        snippets[i] = renderSpace(snippet.slice(0, j)) + snippet.slice(j)
      }
      if (!has) {
        break
      }
    }
  }

  // match whitespace at the end of the line
  if (position === 'boundary' || position === 'trailing') {
    let has = true
    for (let i = snippets.length - 1; i >= 0; i--) {
      const snippet = snippets[i]
      let j = snippet.length - 1
      if (snippet && snippet[j] !== '>') {
        while (snippet[j] && j >= 0) {
          if (!isSpace(snippet[j])) {
            has = false
            break
          }
          j--
        }
        snippets[i] =
          j === snippet.length - 1
            ? snippet
            : j > 0
              ? snippet.slice(0, j) + renderSpace(snippet.slice(j))
              : renderSpace(snippet)
      }
      if (!has) {
        break
      }
    }
  }

  node.content = snippets.join('')
}

/**
 * type: 'all' | 'boundary' | 'trailing'
 *
 * ```js :whitespace[=type]
 */
export const metaWhitespace = (
  parser: CodeParser,
  meta: string,
  defaultPosition?: boolean | WhitespacePosition,
): void => {
  const position = resolveWhitespacePosition(meta, defaultPosition)
  if (position === false) return

  parser.line((line) => renderWhitespaceInLine(line, position))
}
