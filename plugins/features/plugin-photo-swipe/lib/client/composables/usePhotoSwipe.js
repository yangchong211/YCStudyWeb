import { isString, useLocaleConfig, wait } from '@vuepress/helper/client';
import { nextTick, onMounted, onUnmounted, watch } from 'vue';
import { usePageData, usePageFrontmatter } from 'vuepress/client';
import { usePhotoSwipeOptions } from '../helpers/index.js';
import { getImages, registerPhotoSwipe } from '../utils/index.js';
import 'photoswipe/dist/photoswipe.css';
import '../styles/photo-swipe.css';
export const usePhotoSwipe = ({ selector, locales, delay = 500, download = true, fullscreen = true, scrollToClose = true, }) => {
    const photoSwipeOptions = usePhotoSwipeOptions();
    const locale = useLocaleConfig(locales);
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    let destroy = null;
    const setupPhotoSwipe = () => {
        const { photoSwipe } = frontmatter.value;
        if (photoSwipe !== false)
            nextTick()
                .then(() => wait(delay))
                .then(async () => {
                const imageSelector = isString(photoSwipe) ? photoSwipe : selector;
                destroy = await registerPhotoSwipe(getImages(imageSelector), {
                    ...photoSwipeOptions.value,
                    ...locale.value,
                    download,
                    fullscreen,
                    scrollToClose,
                });
            });
    };
    onMounted(() => {
        setupPhotoSwipe();
        watch(() => [page.value.path, photoSwipeOptions.value], () => {
            destroy?.();
            setupPhotoSwipe();
        });
    });
    onUnmounted(() => {
        destroy?.();
    });
};
