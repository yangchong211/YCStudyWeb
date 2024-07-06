import { entries, isString } from '@vuepress/helper'
import type { App, Page } from 'vuepress/core'

export interface AlternatePath {
  path: string
  lang: string
}

export const getAlternatePaths = (
  { lang, path, pathLocale }: Page,
  { pages, siteData }: App,
): AlternatePath[] =>
  entries(siteData.locales)
    .map(([localePath, { lang }]) => ({
      path: `${localePath}${path.replace(pathLocale, '')}`,
      lang,
    }))
    .filter(
      (item): item is AlternatePath =>
        isString(item.lang) &&
        item.lang !== lang &&
        pages.some(({ path }) => path === item.path),
    )
