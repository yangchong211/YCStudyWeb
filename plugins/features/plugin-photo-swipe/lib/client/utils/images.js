import { isString } from '@vuepress/helper/client';
export const getImages = (selector) => isString(selector)
    ? Array.from(document.querySelectorAll(selector))
    : selector
        .map((item) => Array.from(document.querySelectorAll(item)))
        .flat();
export const getImageElementInfo = (image) => new Promise((resolve, reject) => {
    if (image.complete) {
        resolve({
            type: 'image',
            element: image,
            src: image.src,
            width: image.naturalWidth,
            height: image.naturalHeight,
            alt: image.alt,
            msrc: image.src,
        });
    }
    else {
        image.onload = () => resolve(getImageElementInfo(image));
        image.onerror = (err) => reject(err);
    }
});
export const getImageUrlInfo = (image) => new Promise((resolve, reject) => {
    const el = new Image();
    el.src = image;
    el.onload = () => resolve(getImageElementInfo(el));
    el.onerror = (err) => reject(err);
});
