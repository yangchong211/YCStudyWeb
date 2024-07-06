import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { Page, PluginObject } from 'vuepress/core'
import { appendDateToPage } from './appendDate.js'
import { isGitPluginEnabled } from './checkGitPlugin.js'
import { PLUGIN_NAME } from './logger.js'
import type { AppendDatePluginOptions } from './options.js'

export const appendDatePlugin = (
  options: AppendDatePluginOptions = {},
): PluginObject => ({
  name: PLUGIN_NAME,

  onInitialized: async (app): Promise<void> => {
    if (isGitPluginEnabled(app))
      await Promise.all(
        (app.pages as Page<GitPluginPageData>[]).map((page) =>
          appendDateToPage(options, page),
        ),
      )
  },
})
