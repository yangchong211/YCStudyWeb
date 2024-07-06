import type { Plugin } from 'vuepress/core'
import { getDirname, logger, path } from 'vuepress/utils'
import { getNoticeOptions } from './getNoticeOptions.js'
import { PLUGIN_NAME } from './logger.js'
import type { NoticePluginOptions } from './options.js'

const __dirname = getDirname(import.meta.url)

export const noticePlugin =
  (options: NoticePluginOptions): Plugin =>
  (app) => {
    if (app.env.isDebug) logger.info('Options', options)

    return {
      name: PLUGIN_NAME,

      define: {
        __NOTICE_OPTIONS__: getNoticeOptions(options.config),
      },

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    }
  }
