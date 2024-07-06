import { entries, fromEntries, removeLeadingSlash } from '@vuepress/helper'
import type { PageOptions } from 'vuepress/core'
import { colors } from 'vuepress/utils'
import type { TypeMap, TypesMap } from '../../shared/index.js'
import type { PagesMap } from '../getPagesMap.js'
import { logger } from '../logger.js'
import type { BlogTypeOptions } from '../options.js'
import type { Store } from '../store.js'
import { getPagePath } from '../utils.js'

export const getType = (
  pagesMap: PagesMap,
  store: Store,
  type: BlogTypeOptions[],
  slugify: (name: string) => string,
  isDebug = false,
): {
  typesMap: TypesMap
  pageOptions: PageOptions[]
} => {
  const result = type.map(
    ({
      key,
      sorter = (): number => -1,
      filter = (): boolean => true,
      path = '/:key/',
      layout = 'Layout',
      frontmatter = (): Record<string, string> => ({}),
    }) => {
      if (isDebug) logger.info(`Generating ${colors.cyan(key)} type.\n`)

      const pageOptions: PageOptions[] = []
      const typeMap: TypeMap = {}

      entries(pagesMap).forEach(([localePath, pages]) => {
        // get type page path
        const pagePath = path
          ? `${localePath}${removeLeadingSlash(
              path.replace(/:key/g, slugify(key)),
            )}`
          : ''

        // get type indexes
        const indexes = store.addItems(
          // get page paths
          pages
            .filter(filter)
            .sort(sorter)
            .map(({ path }) => path),
        )

        if (pagePath)
          pageOptions.push({
            path: pagePath,
            frontmatter: {
              ...frontmatter(localePath),
              blog: {
                type: 'type',
                key,
              },
              layout,
            },
          })

        if (isDebug)
          logger.info(
            `${key} type in locale ${localePath}: found ${indexes.length} items\n`,
          )

        typeMap[localePath] = { path: getPagePath(pagePath), indexes }
      })

      return { key, typeMap, pageOptions }
    },
  )

  return {
    typesMap: fromEntries(result.map(({ key, typeMap }) => [key, typeMap])),
    pageOptions: result.map(({ pageOptions }) => pageOptions).flat(),
  }
}
