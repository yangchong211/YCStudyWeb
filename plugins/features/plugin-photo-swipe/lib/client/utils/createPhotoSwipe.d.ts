import type { PhotoSwipeOptions } from '../helpers/index.js';
import type { PhotoSwipeBehaviorOptions } from './typings.js';
export interface PhotoSwipeState {
    open: (index: number) => void;
    close: () => void;
    destroy: () => void;
}
export declare const createPhotoSwipe: (images: string[], { scrollToClose, download, fullscreen, ...photoSwipeOptions }: PhotoSwipeOptions & PhotoSwipeBehaviorOptions) => Promise<PhotoSwipeState>;
