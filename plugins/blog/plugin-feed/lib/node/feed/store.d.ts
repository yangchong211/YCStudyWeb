import type { App } from 'vuepress/core';
import type { FeedChannelOptions, FeedContributor } from '../../typings/index.js';
import type { FeedLinks } from '../getFeedLinks.js';
import type { ResolvedFeedOptions } from '../getFeedOptions.js';
import type { FeedItem } from './item.js';
export declare class FeedStore {
    categories: Set<string>;
    contributors: FeedContributor[];
    items: FeedItem[];
    private _contributorKeys;
    channel: FeedChannelOptions;
    links: FeedLinks;
    constructor(app: App, localeOptions: ResolvedFeedOptions, localePath: string);
    /**
     * Add category to store
     */
    private addCategory;
    /**
     * Add contributor to store
     */
    private addContributor;
    /**
     * Add a feed item
     */
    add: (item: FeedItem) => void;
}
