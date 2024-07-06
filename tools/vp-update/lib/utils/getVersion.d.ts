import type { PackageManager } from './packageManager.js';
export declare const getVersion: (packageManager: PackageManager, packageName: string, tag?: "latest" | "next" | "auto", retries?: number) => Promise<string>;
