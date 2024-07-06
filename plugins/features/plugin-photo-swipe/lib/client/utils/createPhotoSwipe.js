import { useEventListener } from '@vueuse/core';
import { LOADING_ICON } from './icon.js';
import { getImageUrlInfo } from './images.js';
import { initPhotoSwipe } from './initPhotoSwipe.js';
export const createPhotoSwipe = (images, { scrollToClose = true, download = true, fullscreen = true, ...photoSwipeOptions }) => import(/* webpackChunkName: "photo-swipe" */ 'photoswipe').then(({ default: PhotoSwipe }) => {
    let currentPhotoSwipe = null;
    const dataSource = images.map((image) => ({
        html: LOADING_ICON,
        msrc: image,
    }));
    images.forEach((image, index) => {
        getImageUrlInfo(image).then((data) => {
            dataSource.splice(index, 1, data);
            currentPhotoSwipe?.refreshSlideContent(index);
        });
    });
    const destroy = useEventListener('wheel', () => {
        currentPhotoSwipe?.close();
    });
    return {
        open: (index) => {
            currentPhotoSwipe?.close();
            currentPhotoSwipe = new PhotoSwipe({
                preloaderDelay: 0,
                showHideAnimationType: 'zoom',
                ...photoSwipeOptions,
                dataSource,
                index,
                ...(scrollToClose
                    ? { closeOnVerticalDrag: true, wheelToZoom: false }
                    : {}),
            });
            initPhotoSwipe(currentPhotoSwipe, { download, fullscreen });
            currentPhotoSwipe.addFilter('placeholderSrc', () => images[index]);
            currentPhotoSwipe.init();
        },
        close: () => {
            currentPhotoSwipe?.close();
        },
        destroy,
    };
});
