import { addViteSsrNoExternal, getLocaleConfig, Logger } from '@vuepress/helper'
import type { Page, PluginFunction } from 'vuepress/core'
import { getDirname, path } from 'vuepress/utils'
import type {
  CopyrightInfoData,
  CopyrightPluginPageData,
} from '../shared/index.js'
import { copyrightLocales } from './locales.js'
import type { CopyrightPluginOptions } from './options.js'

const PLUGIN_NAME = '@vuepress/plugin-copyright'

export const logger = new Logger(PLUGIN_NAME)

const __dirname = getDirname(import.meta.url)

export const copyrightPlugin =
  (options: CopyrightPluginOptions = {}): PluginFunction =>
  (app) => {
    if (app.env.isDebug) logger.info('Options:', options)

    const {
      canonical,
      author = '',
      authorGetter,
      license = '',
      licenseGetter,
      copyrightGetter,
      disableCopy = false,
      disableSelection = false,
      global = false,
      triggerLength = 100,
      maxLength = 0,
    } = options

    const locales = getLocaleConfig({
      app,
      name: PLUGIN_NAME,
      default: copyrightLocales,
      config: options.locales,
    })

    return {
      name: PLUGIN_NAME,

      define: (): Record<string, unknown> => ({
        __COPYRIGHT_OPTIONS__: {
          canonical: canonical || '',
          author: author || '',
          license: license || '',
          global,
          disableCopy,
          disableSelection,
          triggerLength,
          maxLength,
        },
        __COPYRIGHT_LOCALES__: locales,
      }),

      extendsPage: (page: Page<Partial<CopyrightPluginPageData>>): void => {
        const authorText = authorGetter?.(page) ?? author
        const licenseText = licenseGetter?.(page) ?? license
        const copyright = copyrightGetter?.(page)

        if (copyright) {
          page.data.copyright = copyright
        } else {
          const hasDifferentAuthor = authorText && authorText !== author
          const hasDifferentLicense = licenseText && licenseText !== license

          if (hasDifferentAuthor || hasDifferentLicense) {
            const copyrightInfo: CopyrightInfoData = {}

            if (hasDifferentAuthor) copyrightInfo.author = authorText
            if (hasDifferentLicense) copyrightInfo.license = licenseText
            page.data.copyright = copyrightInfo
          }
        }
      },

      extendsBundlerOptions: (bundlerOptions: unknown, app): void => {
        addViteSsrNoExternal(bundlerOptions, app, '@vuepress/helper')
      },

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    }
  }
