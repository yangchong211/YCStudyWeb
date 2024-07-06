export type PackageManager = 'npm' | 'yarn' | 'pnpm';
export interface PackageManagerAnswer {
    packageManager: PackageManager;
}
export declare const getPackageManager: (message: string) => Promise<PackageManager>;
