import type { App } from 'vuepress/core';
import type { LocaleConfig, LocaleData } from 'vuepress/shared';
import type { ExactLocaleConfig } from '../../shared/index.js';
import type { KnownLangCode } from './types.js';
/** Get language from path */
export declare const path2Lang: (path?: string, debug?: boolean) => KnownLangCode;
/** Get path from language */
export declare const lang2Path: (lang?: string, debug?: boolean) => string;
/**
 * Get language of root directory
 *
 * @param app VuePress Node App
 * @returns root language
 */
export declare const getRootLang: (app: App) => string;
/**
 * Get the infer language path from root directory language
 *
 * @param app VuePress Node App
 * @returns infer language
 */
export declare const getRootLangPath: (app: App) => string;
/**
 * Get locale paths
 *
 * @param app VuePress Node app
 * @returns locale paths
 */
export declare const getLocalePaths: (app: App) => string[];
export interface LocaleConfigOptions<T extends LocaleData> {
    /** VuePress Node app */
    app: App;
    /** Default locale config */
    default: ExactLocaleConfig<T>;
    /** user locale config */
    config?: LocaleConfig<T> | undefined;
    /** plugin name */
    name?: string;
}
/**
 * Get final locale config for client
 *
 * @returns final locale config
 */
export declare const getLocaleConfig: <T extends LocaleData>({ app, name, default: defaultLocalesConfig, config: userLocalesConfig, }: LocaleConfigOptions<T>) => ExactLocaleConfig<T>;
