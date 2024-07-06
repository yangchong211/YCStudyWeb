import type { FeedStore } from '../../feed/store.js';
/**
 * Returns an Atom 1.0 feed
 *
 * @see http://www.atomenabled.org/developers/syndication/
 */
export declare const getAtomFeed: (feedStore: FeedStore) => string;
