import type { GitData } from '@vuepress/plugin-git';
import type { App, Page } from 'vuepress/core';
import type { FeedAuthor, FeedCategory, FeedContributor, FeedEnclosure, FeedPluginFrontmatter } from '../../typings/index.js';
import type { ResolvedFeedOptions } from '../getFeedOptions.js';
export declare class FeedItem {
    private app;
    private options;
    private page;
    private hostname;
    private pageOptions;
    private frontmatter;
    private base;
    private getter;
    constructor(app: App, options: ResolvedFeedOptions, page: Page<{
        excerpt?: string;
        git?: GitData;
    }, FeedPluginFrontmatter>, hostname: string);
    /**
     * Feed item title
     */
    get title(): string;
    /**
     * The URL of the item.
     */
    get link(): string;
    /**
     * Feed item description.
     */
    get description(): string | null;
    /**
     * A string that uniquely identifies feed item.
     */
    get guid(): string;
    /**
     * Authors of feed item.
     */
    get author(): FeedAuthor[];
    /**
     * Categories of feed item.
     */
    get category(): FeedCategory[] | null;
    /**
     * Describes a media object that is attached to feed item.
     *
     * @description rss format only
     */
    get enclosure(): FeedEnclosure | null;
    /**
     * Indicates when feed item was published.
     */
    get pubDate(): Date | null;
    /**
     * Indicates when feed item was updated.
     */
    get lastUpdated(): Date;
    /**
     * Feed item summary
     */
    get summary(): string | null;
    /**
     * Feed Item content
     */
    get content(): string;
    /**
     * Image of feed item
     *
     * @description json format only
     */
    get image(): string | null;
    /**
     * Contributors of feed item.
     *
     * @description atom format only
     */
    get contributor(): FeedContributor[];
    /**
     * Copyright text of feed item.
     *
     * @description atom format only
     */
    get copyright(): string | null;
    get isValid(): boolean;
}
