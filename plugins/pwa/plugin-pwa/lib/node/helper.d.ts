import type { AppManifest } from '../shared/index.js';
import type { PwaPluginOptions } from './options.js';
export declare const appendBaseToManifest: (base: string, manifest: AppManifest) => AppManifest;
export declare const appendBase: (base: string, options: PwaPluginOptions) => void;
