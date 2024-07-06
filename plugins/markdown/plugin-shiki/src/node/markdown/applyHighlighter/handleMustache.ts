import { nanoid } from '../../utils.js'

const MUSTACHE_REG = /\{\{[^]*?\}\}/g

type MustacheStore = Map<string, string>

/**
 * Replace mustache with unique markers
 * @param str content
 * @param store mustache store
 * @returns
 */
const removeMustache = (str: string, store: MustacheStore): string =>
  str.replace(MUSTACHE_REG, (match) => {
    let marker = store.get(match)

    if (!marker) {
      marker = nanoid()
      store.set(match, marker)
    }

    return marker
  })

const restoreMustache = (str: string, store: MustacheStore): string => {
  store.forEach((marker, match) => {
    str = str.replaceAll(marker, match)
  })

  return str
}

export const handleMustache = (
  str: string,
  highlight: (str: string) => string,
): string => {
  const store = new Map<string, string>()

  return restoreMustache(highlight(removeMustache(str, store).trimEnd()), store)
}
