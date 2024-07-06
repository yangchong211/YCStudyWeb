import type { PluginObject } from 'vuepress/core'
import { getDirname, path } from 'vuepress/utils'

export interface RTLPluginOptions {
  /**
   * RTL locales
   *
   * @default ['/']
   */
  locales?: string[]

  /**
   * RTL selector
   *
   * @default { 'html': { dir: 'rtl' } }
   */
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  selector?: {
    // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
    [element: string]: {
      [attr: string]: string
    }
  }
}

const __dirname = getDirname(import.meta.url)

export const rltPlugin = (options: RTLPluginOptions = {}): PluginObject => ({
  name: '@vuepress/plugin-rtl',

  define: {
    __RTL_LOCALES__: Array.isArray(options.locales) ? options.locales : ['/'],
    __RTL_SELECTOR__: options.selector || { html: { dir: 'rtl' } },
  },

  clientConfigFile: path.join(__dirname, '../client/config.js'),
})
