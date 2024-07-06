import type { GitData } from '@vuepress/plugin-git'
import type { App, Page } from 'vuepress/core'
import { removeLeadingSlash } from 'vuepress/shared'
import type {
  SitemapImageOption,
  SitemapLinkOption,
  SitemapNewsOption,
  SitemapPluginFrontmatter,
  SitemapPluginOptions,
  SitemapVideoOption,
} from '../typings/index.js'
import { logger } from './logger.js'

const reportedLocales: string[] = []

const stripLocalePrefix = ({ path, pathLocale }: Page): string =>
  path.replace(pathLocale, '/')

/**
 * @returns A map with keys of rootPath and string[] value for pathLocales
 */
const getPagesLocaleMap = (app: App): Map<string, string[]> =>
  app.pages.reduce((map, page) => {
    const rootPath = stripLocalePrefix(page)
    const pathLocales = map.get(rootPath) || []

    pathLocales.push(page.pathLocale)

    return map.set(rootPath, pathLocales)
  }, new Map<string, string[]>())

export interface SitemapInfo {
  lastmod?: string
  changefreq?: string
  priority?: number
  img?: SitemapImageOption[]
  video?: SitemapVideoOption[]
  links?: SitemapLinkOption[]
  news?: SitemapNewsOption[]
}

export const getSitemapInfos = (
  app: App,
  options: SitemapPluginOptions,
): [path: string, info: SitemapInfo][] => {
  const {
    changefreq = 'daily',
    excludePaths = ['/404.html'],
    modifyTimeGetter = (page: Page<{ git?: GitData }>): string =>
      page.data.git?.updatedTime
        ? new Date(page.data.git.updatedTime).toISOString()
        : '',
  } = options
  const { base, locales } = app.options

  const pageLocalesMap = getPagesLocaleMap(app)

  const sitemapInfos: [path: string, info: SitemapInfo][] = []

  app.pages.forEach(
    (page: Page<{ git?: GitData }, SitemapPluginFrontmatter>) => {
      const pageOptions = page.frontmatter.sitemap

      if (pageOptions === false) return

      const metaRobotTags = (page.frontmatter.head ?? []).find(
        (head) => head[1].name === 'robots',
      )

      if (
        // meta tags do not allow index
        ((metaRobotTags?.[1].content as string) || '')
          .split(/,/u)
          .map((content) => content.trim())
          .includes('noindex') ||
        // exclude in plugin options
        excludePaths.includes(page.path)
      )
        return

      const lastModifyTime = modifyTimeGetter(page, app)
      const rootPath = stripLocalePrefix(page)
      const relatedLocales = pageLocalesMap.get(rootPath)!

      let links: SitemapLinkOption[] = []

      if (relatedLocales.length > 1) {
        // warnings for missing `locale[path].lang` in debug mode
        if (app.env.isDebug)
          relatedLocales.forEach((localePrefix) => {
            if (
              !locales[localePrefix].lang &&
              !reportedLocales.includes(localePrefix)
            ) {
              logger.warn(`"lang" option for ${localePrefix} is missing`)
              reportedLocales.push(localePrefix)
            }
          })

        links = relatedLocales.map((localePrefix) => ({
          lang: locales[localePrefix]?.lang || 'en',
          url: `${base}${removeLeadingSlash(localePrefix)}${rootPath.substring(1)}`,
        }))
      }

      const sitemapInfo: SitemapInfo = {
        ...(changefreq ? { changefreq } : {}),
        links,
        ...(lastModifyTime ? { lastmod: lastModifyTime } : {}),
        ...pageOptions,
      }

      // log sitemap info in debug mode
      if (app.env.isDebug)
        logger.info(
          `sitemap option for ${page.path}: ${JSON.stringify(
            sitemapInfo,
            null,
            2,
          )}`,
        )

      sitemapInfos.push([page.path, sitemapInfo])
    },
  )

  return sitemapInfos
}
