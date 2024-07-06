import type { CreateLocaleOptions, Lang } from '../i18n/index.js';
import type { PackageManager } from '../utils/index.js';
interface GenerateTemplateOptions {
    targetDirPath: string;
    lang: Lang;
    packageManager: PackageManager;
    locale: CreateLocaleOptions;
    preset: 'blog' | 'docs';
    bundler: 'vite' | 'webpack';
}
export declare const generateTemplate: ({ targetDirPath, packageManager, lang, locale, preset, bundler, }: GenerateTemplateOptions) => Promise<void>;
export {};
