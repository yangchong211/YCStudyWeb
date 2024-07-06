import { addViteSsrNoExternal, getLocaleConfig } from '@vuepress/helper'
import type { PluginFunction } from 'vuepress/core'
import { getDirname, path } from 'vuepress/utils'
import { ensureRootHomePage } from './ensureRootHomePage.js'
import {
  generateAutoLocaleRedirectFiles,
  generateRedirectFiles,
} from './generate/index.js'
import { getRedirectLocaleConfig } from './getRedirectLocaleConfig.js'
import { getRedirectMap } from './getRedirectMap.js'
import { handleRedirectTo } from './handleRedirectTo.js'
import { redirectLocales } from './locales.js'
import { logger, PLUGIN_NAME } from './logger.js'
import type { RedirectPluginOptions } from './types/index.js'

const __dirname = getDirname(import.meta.url)

export const redirectPlugin =
  (options: RedirectPluginOptions = {}): PluginFunction =>
  (app) => {
    if (app.env.isDebug) logger.info('Options:', options)

    const redirectLocaleConfig = getRedirectLocaleConfig(app, options)
    let redirectMap: Record<string, string>

    return {
      name: PLUGIN_NAME,

      define: {
        __REDIRECT_LOCALE_CONFIG__: redirectLocaleConfig,
        __REDIRECT_LOCALE_SWITCH__: Boolean(redirectLocaleConfig.switchLocale),
        __REDIRECT_LOCALES__: getLocaleConfig({
          app,
          name: 'redirect',
          config: options.locales,
          default: redirectLocales,
        }),
      },

      extendsBundlerOptions: (bundlerOptions: unknown, app): void => {
        addViteSsrNoExternal(bundlerOptions, app, '@vuepress/helper')
      },

      extendsPage: (page, app) => {
        handleRedirectTo(page, app)
      },

      onInitialized: async (app): Promise<void> => {
        redirectMap = getRedirectMap(app, options)

        if (app.env.isDebug) logger.info('Redirect Map:', redirectMap)

        if (redirectLocaleConfig.autoLocale && app.env.isDebug)
          await ensureRootHomePage(app)
      },

      onPrepared: async (app): Promise<void> => {
        await app.writeTemp(
          'redirect/map.js',
          `\
export const redirectMap = ${
            app.env.isDev ? JSON.stringify(redirectMap, null, 2) : '{}'
          };
`,
        )
      },

      onGenerated: async (app): Promise<void> => {
        await generateRedirectFiles(app, redirectMap)
        if (redirectLocaleConfig.autoLocale)
          await generateAutoLocaleRedirectFiles(app, redirectLocaleConfig)
      },

      clientConfigFile: path.join(__dirname, '../client/config.js'),
    }
  }
