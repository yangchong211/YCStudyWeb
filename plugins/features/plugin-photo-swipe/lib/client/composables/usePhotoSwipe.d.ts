import type { PhotoSwipePluginLocaleData } from '../../shared/index.js';
import type { PhotoSwipeBehaviorOptions } from '../utils/index.js';
import 'photoswipe/dist/photoswipe.css';
import '../styles/photo-swipe.css';
export interface UsePhotoSwipeOptions extends PhotoSwipeBehaviorOptions {
    selector: string | string[];
    locales: Record<string, Record<`${keyof PhotoSwipePluginLocaleData}Title`, string>>;
    /** @default 500 */
    delay?: number;
}
export declare const usePhotoSwipe: ({ selector, locales, delay, download, fullscreen, scrollToClose, }: UsePhotoSwipeOptions) => void;
