import type { Plugin, PluginFunction } from 'vuepress/core'
import { colors } from 'vuepress/utils'
import type { ExtendPage } from '../typings/index.js'
import { appendSEO } from './appendSEO.js'
import { generateDescription } from './generateDescription.js'
import { generateRobotsTxt } from './generateRobotsTxt.js'
import type { SeoPluginOptions } from './options.js'
import { logger, PLUGIN_NAME } from './utils/index.js'

export const seoPlugin =
  (options: SeoPluginOptions): PluginFunction =>
  (app) => {
    if (app.env.isDebug) logger.info('Options:', options)

    const plugin: Plugin = { name: PLUGIN_NAME }

    if (!options.hostname) {
      logger.error(`Option ${colors.magenta('hostname')} is required!`)

      return plugin
    }

    return {
      ...plugin,

      extendsPage: (page: ExtendPage): void => {
        if (page.frontmatter.seo !== false)
          generateDescription(app, page, options.autoDescription !== false)
      },

      onInitialized: (app): void => {
        appendSEO(app, options)
      },

      onGenerated: (app): Promise<void> => generateRobotsTxt(app),
    }
  }
