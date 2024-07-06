import { isArray, isFunction, isRegExp } from '@vuepress/helper'
import type { Plugin } from 'vuepress'
import { checkMarkdownLink } from './checkMarkdownLink.js'
import type { LinksCheckPluginOptions } from './options.js'

export const linksCheckPlugin =
  ({
    dev = true,
    build = true,
    exclude: ignore = [],
  }: LinksCheckPluginOptions): Plugin =>
  (app) => {
    const enabled =
      (app.env.isDev && dev) || (app.env.isBuild && build) || false

    const isLinkIgnored = isFunction(ignore)
      ? (link: string): boolean => ignore(link, app.env.isDev)
      : isArray(ignore)
        ? (link: string): boolean =>
            ignore.some((item) =>
              isRegExp(item) ? item.test(link) : item === link,
            )
        : (): boolean => false

    const shouldThrowError = app.env.isBuild && build === 'error'
    let isAppInitialized = false

    return {
      name: '@vuepress/plugin-links-check',

      extendsPage: (page, app) => {
        if (enabled && isAppInitialized) {
          checkMarkdownLink(page, app, isLinkIgnored)
        }
      },

      onInitialized: () => {
        isAppInitialized = true

        if (enabled) {
          const results = app.pages.map((page) =>
            checkMarkdownLink(page, app, isLinkIgnored),
          )

          if (shouldThrowError && results.some(Boolean)) {
            throw new Error(
              'Dead links found in markdown, please check the console logs for details',
            )
          }
        }
      },
    }
  }
