import type { PackageManager } from '../utils/index.js';
export type Lang = 'english (US)' | '简体中文';
export interface CreateLocaleOptions {
    flow: {
        getVersion: string;
        createPackage: string;
        generateTemplate: string;
        install: string;
        devServer: string;
    };
    question: {
        i18n: string;
        packageManager: string;
        name: string;
        version: string;
        description: string;
        license: string;
        workflow: string;
        bundler: string;
        preset: string;
        devServer: string;
    };
    hint: {
        install: string;
        finish: string;
        devServer: (packageManager: PackageManager) => string;
    };
    error: {
        name: string;
        version: string;
        bundler: string;
        preset: string;
        theme: string;
        dirMissing: (packageManager: PackageManager) => string;
        dirNotEmpty: (targetDir: string) => string;
    };
}
