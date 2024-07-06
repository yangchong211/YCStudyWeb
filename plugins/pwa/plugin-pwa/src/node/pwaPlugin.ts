import {
  addViteOptimizeDepsExclude,
  addViteSsrNoExternal,
  customizeDevServer,
  getLocaleConfig,
} from '@vuepress/helper'
import type { PluginFunction } from 'vuepress/core'
import { generateManifest } from './generateManifest.js'
import { generateServiceWorker } from './generateServiceWorker.js'
import { getManifest } from './getManifest.js'
import { appendBase } from './helper.js'
import { injectLinksToHead } from './injectLinksToHead.js'
import { pwaLocales } from './locales.js'
import { logger, PLUGIN_NAME } from './logger.js'
import type { PwaPluginOptions } from './options.js'
import { prepareConfigFile } from './prepareConfigFile.js'

export const pwaPlugin =
  (options: PwaPluginOptions = {}): PluginFunction =>
  (app) => {
    if (app.env.isDebug) logger.info('Options:', options)

    const { base, shouldPrefetch = true } = app.options

    if (options.appendBase) appendBase(base, options)

    if (shouldPrefetch === true)
      logger.warn(
        'The plugin will register service worker to handle assets, so we recommend you to set "shouldPrefetch: false" in VuePress config file.',
      )

    app.options.head = injectLinksToHead(options, base, app.options.head)

    return {
      name: PLUGIN_NAME,

      define: () => ({
        __PWA_LOCALES__: getLocaleConfig({
          app,
          name: PLUGIN_NAME,
          default: pwaLocales,
          config: options.locales,
        }),
        __SW_FORCE_UPDATE__: options.update === 'force',
        __SW_PATH__: options.serviceWorkerFilename || 'service-worker.js',
      }),

      extendsBundlerOptions: (bundlerOptions: unknown, app): void => {
        addViteOptimizeDepsExclude(bundlerOptions, app, [
          'mitt',
          'register-service-worker',
        ])
        addViteSsrNoExternal(bundlerOptions, app, '@vuepress/helper')

        customizeDevServer(bundlerOptions, app, {
          path: '/manifest.webmanifest',
          response: async (_, response) => {
            response.setHeader('Content-Type', 'application/manifest+json')

            return JSON.stringify(await getManifest(app, options))
          },
          errMsg: 'Unexpected manifest generation error',
        })
      },

      onGenerated: async (app): Promise<void> => {
        await generateManifest(app, options)
        await generateServiceWorker(app, options)
      },

      clientConfigFile: (app) => prepareConfigFile(app, options),
    }
  }
