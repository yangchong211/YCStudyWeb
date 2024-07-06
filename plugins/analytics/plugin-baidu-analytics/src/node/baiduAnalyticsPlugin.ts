import { Logger } from '@vuepress/helper'
import type { Plugin, PluginObject } from 'vuepress/core'
import { colors, getDirname, path } from 'vuepress/utils'
import type { BaiduAnalyticsPluginOptions } from './options.js'

const __dirname = getDirname(import.meta.url)

const PLUGIN_NAME = '@vuepress/plugin-baidu-analytics'

const logger = new Logger(PLUGIN_NAME)

export const baiduAnalyticsPlugin =
  ({ id }: BaiduAnalyticsPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: PLUGIN_NAME,
    }

    if (!id) {
      logger.warn(`${colors.cyan('id')} is required!`)

      return plugin
    }

    // returns an empty plugin in dev mode when debug mode is not enabled
    if (app.env.isDev) {
      return plugin
    }

    return {
      ...plugin,

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),

      define: {
        __BD_ID__: id,
      },
    }
  }
