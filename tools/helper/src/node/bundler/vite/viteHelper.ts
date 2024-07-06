import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import type { App } from 'vuepress/core'
import { isString } from '../../../shared/index.js'
import { getPackageManager } from '../../utils/index.js'
import { getBundlerName } from '../getBundlerName.js'
import { mergeViteConfig } from './mergeViteConfig.js'

/**
 * Add Vite config
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 * @param config Vite config
 */
export const addViteConfig = (
  bundlerOptions: unknown,
  app: App,
  config: Record<string, unknown>,
): void => {
  if (getBundlerName(app) === 'vite') {
    const viteBundlerOptions = bundlerOptions as ViteBundlerOptions

    viteBundlerOptions.viteOptions = mergeViteConfig(
      viteBundlerOptions.viteOptions || {},
      config,
    )
  }
}

/**
 * Add modules to Vite `optimizeDeps.include` list
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 */
export const addViteOptimizeDepsInclude = (
  bundlerOptions: unknown,
  app: App,
  module: string | string[],
  isDeep = false,
): void => {
  if (
    getPackageManager() !== 'pnpm' ||
    // pnpm is not able to optimize deps in tree at first startup
    ('FORCE_OPTIMIZE_DEPS' in process.env
      ? Boolean(process.env.FORCE_OPTIMIZE_DEPS)
      : !isDeep)
  )
    addViteConfig(bundlerOptions, app, {
      optimizeDeps: {
        include: isString(module) ? [module] : module,
      },
    })
}

/**
 * Add modules to Vite `optimizeDeps.exclude` list
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 */
export const addViteOptimizeDepsExclude = (
  bundlerOptions: unknown,
  app: App,
  module: string | string[],
): void => {
  addViteConfig(bundlerOptions, app, {
    optimizeDeps: {
      exclude: isString(module) ? [module] : module,
    },
  })
}

/**
 * Add modules to Vite `optimizeDeps.needsInterop` list
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 */
export const addViteOptimizeDepsNeedsInterop = (
  bundlerOptions: unknown,
  app: App,
  module: string | string[],
): void => {
  addViteConfig(bundlerOptions, app, {
    optimizeDeps: {
      needsInterop: isString(module) ? [module] : module,
    },
  })
}

/**
 * Add modules to Vite `ssr.external` list
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 */
export const addViteSsrExternal = (
  bundlerOptions: unknown,
  app: App,
  module: string | string[],
): void => {
  addViteConfig(bundlerOptions, app, {
    ssr: {
      external: isString(module) ? [module] : module,
    },
  })
}

/**
 * Add modules to Vite `ssr.noExternal` list
 */
export const addViteSsrNoExternal = (
  bundlerOptions: unknown,
  app: App,
  module: string | string[],
): void => {
  addViteConfig(bundlerOptions, app, {
    ssr: {
      noExternal: isString(module) ? [module] : module,
    },
  })
}
