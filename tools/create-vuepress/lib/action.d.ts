#!/usr/bin/env node
interface CreateOptions {
    bundler?: 'vite' | 'webpack' | null;
    preset?: 'docs' | 'blog' | null;
    theme?: string;
}
export declare const mainAction: (targetDir: string, { bundler, preset, theme, }: CreateOptions) => Promise<void>;
export {};
