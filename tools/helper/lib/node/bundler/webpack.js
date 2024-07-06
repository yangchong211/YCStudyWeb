import { getBundlerName } from './getBundlerName.js';
export const chainWebpack = (bundlerOptions, app, chainWebpack) => {
    if (getBundlerName(app) === 'webpack') {
        const webpackBundlerOptions = bundlerOptions;
        const { chainWebpack: originalChainWebpack } = webpackBundlerOptions;
        webpackBundlerOptions.chainWebpack = (config, isServer, isBuild) => {
            originalChainWebpack?.(config, isServer, isBuild);
            chainWebpack(config, isServer, isBuild);
        };
    }
};
export const configWebpack = (bundlerOptions, app, configureWebpack) => {
    if (getBundlerName(app) === 'webpack') {
        const webpackBundlerOptions = bundlerOptions;
        const { configureWebpack: originalConfigWebpack } = webpackBundlerOptions;
        webpackBundlerOptions.configureWebpack = (config, isServer, isBuild) => {
            const result = originalConfigWebpack?.(config, isServer, isBuild);
            configureWebpack(config, isServer, isBuild);
            return result;
        };
    }
};
