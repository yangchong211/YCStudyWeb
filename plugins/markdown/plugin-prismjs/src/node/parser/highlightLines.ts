import type { CodeParser } from './getCodeParser'

export type HighlightLinesRange = [start: number, end: number]

/**
 * Resolve highlight-lines ranges from token info
 */
export const getHighlightLinesRange = (
  info: string,
): HighlightLinesRange[] | null => {
  // try to match highlight-lines mark
  const match = info.match(/{([\d,-]+)}/)

  // no highlight-lines mark, return `null`
  if (match === null) {
    return null
  }

  // resolve lines ranges from the highlight-lines mark
  return match[1].split(',').map((item) => {
    const range = item.split('-')

    if (range.length === 1) {
      range.push(range[0])
    }

    return range.map((line) => Number.parseInt(line, 10)) as HighlightLinesRange
  })
}

/**
 * Check if a line number is in ranges
 */
const isLineHighlighted = (
  lineNumber: number,
  ranges: HighlightLinesRange[],
): boolean =>
  ranges.some(([start, end]) => lineNumber >= start && lineNumber <= end)

export const highlightCodeLines = (
  parser: CodeParser,
  ranges: HighlightLinesRange[] | null,
): void => {
  if (ranges?.length) {
    parser.line((node, index) => {
      if (isLineHighlighted(index, ranges)) {
        node.classList.push('highlighted')
      }
    })
  }
}
