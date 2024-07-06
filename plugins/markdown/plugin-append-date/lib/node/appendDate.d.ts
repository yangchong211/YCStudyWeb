import type { GitPluginPageData } from '@vuepress/plugin-git';
import type { Page } from 'vuepress/core';
import type { AppendDatePluginOptions } from './options.js';
export declare const appendDateToPage: ({ key, format }: AppendDatePluginOptions, { data, filePath, frontmatter }: Page<GitPluginPageData>) => Promise<void>;
