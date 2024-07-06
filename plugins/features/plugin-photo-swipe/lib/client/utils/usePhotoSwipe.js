import { useEventListener } from '@vueuse/core';
import { LOADING_ICON } from './icon.js';
import { getImageElementInfo } from './images.js';
import { initPhotoSwipe } from './initPhotoSwipe.js';
export const registerPhotoSwipe = (images, { scrollToClose = true, download = true, fullscreen = true, ...photoSwipeOptions }) => import(/* webpackChunkName: "photo-swipe" */ 'photoswipe').then(({ default: PhotoSwipe }) => {
    let currentPhotoSwipe = null;
    const dataSource = images.map((image) => ({
        html: LOADING_ICON,
        element: image,
        msrc: image.src,
    }));
    images.forEach((image, index) => {
        const handler = () => {
            currentPhotoSwipe?.destroy();
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
            currentPhotoSwipe.addFilter('thumbEl', () => image);
            currentPhotoSwipe.addFilter('placeholderSrc', () => image.src);
            currentPhotoSwipe.init();
        };
        if (!image.getAttribute('photo-swipe')) {
            image.style.cursor = 'zoom-in';
            image.addEventListener('click', () => {
                handler();
            });
            image.addEventListener('keypress', ({ key }) => {
                if (key === 'Enter')
                    handler();
            });
            // avoid registering multiple times
            image.setAttribute('photo-swipe', '');
        }
        getImageElementInfo(image).then((data) => {
            dataSource.splice(index, 1, data);
            currentPhotoSwipe?.refreshSlideContent(index);
        });
    });
    return scrollToClose
        ? useEventListener('wheel', () => {
            currentPhotoSwipe?.close();
        })
        : () => {
            // do nothing
        };
});
