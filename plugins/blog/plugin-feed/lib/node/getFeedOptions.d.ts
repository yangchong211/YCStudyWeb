import type { App } from 'vuepress/core';
import type { BaseFeedPluginOptions, FeedPluginOptions } from '../typings/index.js';
export interface ResolvedFeedOptions extends Omit<BaseFeedPluginOptions, 'sorter' | 'filter' | 'preservedElements'>, Required<Pick<BaseFeedPluginOptions, 'sorter' | 'filter'>> {
    hostname: string;
    isPreservedElement: (tagName: string) => boolean;
}
export type ResolvedFeedOptionsMap = Record<string, ResolvedFeedOptions>;
export declare const getFeedOptions: ({ siteData }: App, options: FeedPluginOptions) => ResolvedFeedOptionsMap;
