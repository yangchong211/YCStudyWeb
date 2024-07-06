import type { ArtalkConfig } from 'artalk';
import type { BaseCommentPluginOptions } from './base.js';
export type ArtalkOptions = BaseCommentPluginOptions & Partial<Omit<ArtalkConfig, 'el' | 'pageKey'>>;
