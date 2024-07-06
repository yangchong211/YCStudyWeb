import type { App } from 'vuepress/core';
import type { FeedPluginOptions } from '../typings/index.js';
import type { ResolvedFeedOptions } from './getFeedOptions.js';
export declare const getFeedFilenames: (options: ResolvedFeedOptions, prefix?: string) => Required<Pick<FeedPluginOptions, "atomOutputFilename" | "atomXslFilename" | "jsonOutputFilename" | "rssOutputFilename" | "rssXslFilename">>;
export interface FeedLinks {
    localePath: string;
    atom: string;
    atomXsl: string;
    json: string;
    rss: string;
    rssXsl: string;
}
export declare const getFeedLinks: (app: App, options: ResolvedFeedOptions, localePath: string) => FeedLinks;
