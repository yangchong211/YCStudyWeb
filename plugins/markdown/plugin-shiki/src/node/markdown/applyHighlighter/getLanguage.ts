import { isSpecialLang } from 'shiki'
import { colors } from 'vuepress/utils'
import { logger, resolveLanguage } from '../../utils.js'
import type { MarkdownFilePathGetter } from './createMarkdownFilePathGetter.js'

const WARNED_LANGS = new Set<string>()

export const getLanguage = (
  lang: string,
  loadedLanguages: string[],
  defaultLang: string,
  logLevel: string,
  getMarkdownFilePath: MarkdownFilePathGetter,
): string => {
  let result = resolveLanguage(lang)

  if (result && !loadedLanguages.includes(result) && !isSpecialLang(result)) {
    // warn for unknown languages only once
    if (logLevel !== 'silent' && !WARNED_LANGS.has(result)) {
      logger.warn(
        `Missing ${colors.cyan(lang)} highlighter, use ${colors.cyan(defaultLang)} to highlight instead.`,
      )
      WARNED_LANGS.add(result)
    }

    // log file path if unknown language is found
    if (logLevel === 'debug') {
      logger.info(
        `Unknown language ${colors.cyan(result)} found in ${colors.cyan(getMarkdownFilePath())}`,
      )
    }

    result = defaultLang
  }

  return result
}
