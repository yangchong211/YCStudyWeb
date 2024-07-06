import type { BaseCommentPluginOptions } from './base.js';
export interface NoCommentPluginOptions extends BaseCommentPluginOptions {
    provider?: 'None';
    comment?: never;
}
