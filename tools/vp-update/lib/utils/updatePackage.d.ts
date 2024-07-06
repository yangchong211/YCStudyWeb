import type { PackageManager } from './packageManager.js';
export declare const updatePackages: (packageManager: PackageManager, dependencies: Record<string, string>) => Promise<void>;
