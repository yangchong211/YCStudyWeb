import type { WebpackChainConfig, WebpackConfiguration } from '@vuepress/bundler-webpack';
import type { App } from 'vuepress/core';
export declare const chainWebpack: (bundlerOptions: unknown, app: App, chainWebpack: (config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => void) => void;
export declare const configWebpack: (bundlerOptions: unknown, app: App, configureWebpack: (config: WebpackConfiguration, isServer: boolean, isBuild: boolean) => void) => void;
