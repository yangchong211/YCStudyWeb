import type { FeedStore } from '../../feed/store.js';
/**
 * Returns a RSS 2.0 feed
 *
 * @see https://validator.w3.org/feed/docs/rss2.html
 */
export declare const getRssFeed: (feedStore: FeedStore) => string;
