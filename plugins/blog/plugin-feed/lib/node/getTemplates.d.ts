import type { FeedConfig } from '../typings/index.js';
import type { ResolvedFeedOptionsMap } from './getFeedOptions.js';
export declare const getAtomTemplates: (options: ResolvedFeedOptionsMap) => FeedConfig[];
export declare const getRSSTemplates: (options: ResolvedFeedOptionsMap) => FeedConfig[];
