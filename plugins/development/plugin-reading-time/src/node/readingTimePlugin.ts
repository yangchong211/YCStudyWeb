import { addViteSsrNoExternal, getLocaleConfig } from '@vuepress/helper'
import type { Page, PluginFunction } from 'vuepress/core'
import type { ReadingTime } from '../shared/index.js'
import { getReadingTime } from './getReadingTime.js'
import { readingTimeLocales } from './locales.js'
import { logger, PLUGIN_NAME } from './logger.js'
import type { ReadingTimePluginOptions } from './options.js'

/** Reading time plugin */
export const readingTimePlugin =
  (options: ReadingTimePluginOptions = {}): PluginFunction =>
  (app) => {
    if (app.env.isDebug) logger.info('Options:', options)

    return {
      name: PLUGIN_NAME,

      define: (app): Record<string, unknown> => ({
        __READING_TIME_LOCALES__: getLocaleConfig({
          app,
          name: PLUGIN_NAME,
          default: readingTimeLocales,
          config: options.locales,
        }),
      }),

      extendsPage: (page: Page<{ readingTime?: ReadingTime }>): void => {
        page.data.readingTime = getReadingTime(
          page.content,
          options.wordPerMinute || 300,
        )
      },

      extendsBundlerOptions: (bundlerOptions: unknown, app): void => {
        addViteSsrNoExternal(bundlerOptions, app, '@vuepress/helper')
      },
    }
  }
