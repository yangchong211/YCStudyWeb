import type { App } from 'vuepress/core';
import type { ResolvedFeedOptions } from './getFeedOptions.js';
export interface FeedLinks {
    localePath: string;
    atom: string;
    atomXsl: string;
    json: string;
    rss: string;
    rssXsl: string;
}
export declare const getFeedLinks: (app: App, options: ResolvedFeedOptions, localePath: string) => FeedLinks;
