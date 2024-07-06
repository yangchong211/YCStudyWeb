import type { PhotoSwipeOptions } from '../helpers/index.js';
import type { PhotoSwipeBehaviorOptions } from './typings.js';
export declare const registerPhotoSwipe: (images: HTMLImageElement[], { scrollToClose, download, fullscreen, ...photoSwipeOptions }: PhotoSwipeOptions & PhotoSwipeBehaviorOptions) => Promise<() => void>;
