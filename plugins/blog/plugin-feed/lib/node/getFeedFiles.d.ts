import type { App } from 'vuepress/core';
import type { FeedConfig } from '../typings/index.js';
import type { ResolvedFeedOptionsMap } from './getFeedOptions.js';
export declare const getFeedFiles: (app: App, options: ResolvedFeedOptionsMap, hostname: string) => FeedConfig[];
