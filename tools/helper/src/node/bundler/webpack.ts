import type {
  WebpackBundlerOptions,
  WebpackChainConfig,
  WebpackConfiguration,
} from '@vuepress/bundler-webpack'
import type { App } from 'vuepress/core'
import { getBundlerName } from './getBundlerName.js'

export const chainWebpack = (
  bundlerOptions: unknown,
  app: App,
  chainWebpack: (
    config: WebpackChainConfig,
    isServer: boolean,
    isBuild: boolean,
  ) => void,
): void => {
  if (getBundlerName(app) === 'webpack') {
    const webpackBundlerOptions = bundlerOptions as WebpackBundlerOptions
    const { chainWebpack: originalChainWebpack } = webpackBundlerOptions

    webpackBundlerOptions.chainWebpack = (config, isServer, isBuild): void => {
      originalChainWebpack?.(config, isServer, isBuild)
      chainWebpack(config, isServer, isBuild)
    }
  }
}

export const configWebpack = (
  bundlerOptions: unknown,
  app: App,
  configureWebpack: (
    config: WebpackConfiguration,
    isServer: boolean,
    isBuild: boolean,
  ) => void,
): void => {
  if (getBundlerName(app) === 'webpack') {
    const webpackBundlerOptions = bundlerOptions as WebpackBundlerOptions
    const { configureWebpack: originalConfigWebpack } = webpackBundlerOptions

    webpackBundlerOptions.configureWebpack = (
      config,
      isServer,
      isBuild,
    ): WebpackConfiguration | void => {
      const result = originalConfigWebpack?.(config, isServer, isBuild)

      configureWebpack(config, isServer, isBuild)

      return result
    }
  }
}
