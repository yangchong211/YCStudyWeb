import type { CreateLocaleOptions } from '../i18n/index.js';
import type { PackageManager } from '../utils/index.js';
interface CreatePackageJsonOptions {
    targetDir: string;
    packageManager: PackageManager;
    locale: CreateLocaleOptions;
    preset: 'blog' | 'docs';
    bundler: 'vite' | 'webpack';
}
/**
 * generate package.json
 */
export declare const createPackageJson: ({ targetDir, packageManager, locale, preset, bundler, }: CreatePackageJsonOptions) => Promise<void>;
export {};
