import type { Lang } from '../i18n/index.js';
import type { PackageManager } from './getPackageManager.js';
export declare const getRegistry: (packageManager: PackageManager, lang: Lang) => Promise<string>;
