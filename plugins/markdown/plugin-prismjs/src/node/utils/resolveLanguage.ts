import * as languages from './languages.js'
import type { HighlightLanguage } from './languages.js'

type LanguageAlias = string

type LanguagesMap = Record<LanguageAlias, HighlightLanguage>

/**
 * A key-value map to get language info from alias
 *
 * - key: alias
 * - value: language
 */
let languagesMap: LanguagesMap

/**
 * Lazy generate languages map
 */
const getLanguagesMap = (): LanguagesMap =>
  (languagesMap ??= Object.values(languages).reduce<LanguagesMap>(
    (result, item) => ({
      ...result,
      ...Object.fromEntries(item.aliases.map((alias) => [alias, item])),
    }),
    {},
  ))

/**
 * Resolve language for highlight from token info
 */
export const resolveLanguage = (info: string): HighlightLanguage => {
  // get user-defined language alias
  const alias = info.match(/^([^ :[{]+)/)?.[1] || 'text'

  // if the alias does not have a match in the map
  // fallback to the alias itself
  return (
    getLanguagesMap()[alias] ?? {
      name: alias,
      ext: alias,
      aliases: [alias],
    }
  )
}
