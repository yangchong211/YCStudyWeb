import type { PhotoSwipeOptions as OriginalPhotoSwipeOptions } from 'photoswipe';
import type { App, MaybeRefOrGetter, Ref } from 'vue';
export type PhotoSwipeOptions = Omit<OriginalPhotoSwipeOptions, 'dataSource' | 'index'>;
export declare const definePhotoSwipeConfig: (options: MaybeRefOrGetter<PhotoSwipeOptions>) => void;
export declare const usePhotoSwipeOptions: () => Ref<PhotoSwipeOptions>;
export declare const injectPhotoSwipeConfig: (app: App) => void;
