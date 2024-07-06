import type { SlideData } from 'photoswipe';
export declare const getImages: (selector: string | string[]) => HTMLImageElement[];
export declare const getImageElementInfo: (image: HTMLImageElement) => Promise<SlideData>;
export declare const getImageUrlInfo: (image: string) => Promise<SlideData>;
