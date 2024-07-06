import { addViteSsrNoExternal, getLocaleConfig } from '@vuepress/helper'
import type { PluginFunction } from 'vuepress/core'
import { getDirname, path } from 'vuepress/utils'
import { generateCatalogPage } from './generateCatalogPage.js'
import { catalogLocales as defaultLocales } from './locales.js'
import { logger, PLUGIN_NAME } from './logger.js'
import type { CatalogPluginOptions } from './options.js'

const __dirname = getDirname(import.meta.url)

export const catalogPlugin =
  (options: CatalogPluginOptions = {}): PluginFunction =>
  (app) => {
    if (app.env.isDebug) logger.info('Options:', options)

    const { component, locales } = options

    return {
      name: PLUGIN_NAME,

      define: (): Record<string, unknown> => ({
        __CATALOG_LOCALES__: getLocaleConfig({
          app,
          name: PLUGIN_NAME,
          default: defaultLocales,
          config: locales,
        }),
      }),

      onInitialized: (app): Promise<void> => generateCatalogPage(app, options),

      extendsBundlerOptions: (bundlerOptions: unknown, app): void => {
        addViteSsrNoExternal(bundlerOptions, app, '@vuepress/helper')
      },

      ...(component
        ? {}
        : { clientConfigFile: path.join(__dirname, '../client/config.js') }),
    }
  }
