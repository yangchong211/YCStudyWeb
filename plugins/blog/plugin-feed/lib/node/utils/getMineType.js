export const getImageMineType = (ext = '') => `image/${ext === 'jpg'
    ? 'jpeg'
    : ext === 'svg'
        ? 'svg+xml'
        : ext === 'jpeg' ||
            ext === 'png' ||
            ext === 'bmp' ||
            ext === 'gif' ||
            ext === 'webp'
            ? ext
            : ''}`;
