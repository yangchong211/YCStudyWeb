import type { App, MaybeRefOrGetter, Ref } from 'vue';
import type { ArtalkOptions, CommentOptions, GiscusOptions, TwikooOptions, WalineOptions } from '../../shared/index.js';
export declare const useCommentOptions: <T extends CommentOptions>() => Ref<T>;
export declare const defineArtalkConfig: (options: MaybeRefOrGetter<ArtalkOptions>) => void;
export declare const useArtalkOptions: () => Ref<ArtalkOptions>;
export declare const defineGiscusConfig: (options: MaybeRefOrGetter<GiscusOptions>) => void;
export declare const useGiscusOptions: () => Ref<GiscusOptions>;
export declare const defineTwikooConfig: (options: MaybeRefOrGetter<TwikooOptions>) => void;
export declare const useTwikooOptions: () => Ref<TwikooOptions>;
export declare const defineWalineConfig: (options: MaybeRefOrGetter<WalineOptions>) => void;
export declare const useWalineOptions: () => Ref<WalineOptions>;
export declare const injectCommentConfig: (app: App) => void;
