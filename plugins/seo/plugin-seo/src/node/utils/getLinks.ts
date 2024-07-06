import { isFunction, isString } from '@vuepress/helper'
import type { App } from 'vuepress/core'
import { removeEndingSlash } from 'vuepress/shared'
import type { ExtendPage } from '../../typings/index.js'
import type { SeoPluginOptions } from '../options.js'
import { getAlternatePaths } from './getAlternatePaths.js'
import { getUrl } from './getUrl.js'

export const getCanonicalLink = (
  page: ExtendPage,
  options: SeoPluginOptions,
): string | null =>
  isFunction(options.canonical)
    ? options.canonical(page)
    : isString(options.canonical)
      ? `${removeEndingSlash(options.canonical)}${page.path}`
      : null

export const getAlternateLinks = (
  app: App,
  page: ExtendPage,
  { hostname }: SeoPluginOptions,
): { lang: string; path: string }[] =>
  getAlternatePaths(page, app).map(({ lang, path }) => ({
    lang,
    path: getUrl(hostname, app.options.base, path),
  }))
