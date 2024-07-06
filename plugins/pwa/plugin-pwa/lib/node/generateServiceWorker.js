import { endsWith } from '@vuepress/helper';
import { colors } from 'vuepress/utils';
import { generateSW } from 'workbox-build';
import { logger } from './logger.js';
const imageExtensions = ['png', 'jpg', 'jpeg', 'webp', 'bmp', 'gif'];
const cacheExtensions = [
    'js',
    'css',
    'svg',
    'woff',
    'woff2',
    'eot',
    'ttf',
    'otf',
];
const imageFilter = (maxSize = 1024) => (manifestEntries) => {
    const warnings = [];
    const manifest = [];
    for (const entry of manifestEntries) {
        const { url, size } = entry;
        if (imageExtensions.some((ext) => endsWith(url, `.${ext}`)))
            if (size > maxSize * 1024)
                warnings.push(`Skipped ${url}, as it's ${Math.ceil(size / 1024)} KB.`);
            else
                manifest.push(entry);
        else
            manifest.push(entry);
    }
    return { warnings, manifest };
};
export const generateServiceWorker = async (app, options) => {
    const { succeed } = logger.load('Generating service worker');
    const globPatterns = [`**/*.{${cacheExtensions.join(',')}}`];
    if (options.cacheHTML)
        globPatterns.push('**/*.html');
    else
        globPatterns.push('./index.html', './404.html');
    if (options.cacheImage)
        globPatterns.push(`**/*.{${imageExtensions.join(',')}}`);
    await generateSW({
        dontCacheBustURLsMatching: new RegExp(`\\.[0-9a-f]{8}\\.(${['html', ...cacheExtensions, ...imageExtensions].join('|')})$`),
        globPatterns,
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        maximumFileSizeToCacheInBytes: (options.maxSize || 2048) * 1024,
        manifestTransforms: [imageFilter(options.maxImageSize)],
        mode: app.env.isDebug ? 'development' : 'production',
        sourcemap: app.env.isDebug,
        ...options.generateSWConfig,
        // should not be override by user config
        globDirectory: app.dir.dest(),
        swDest: app.dir.dest(options.serviceWorkerFilename ?? 'service-worker.js'),
    }).then(({ count, size, warnings }) => {
        succeed();
        logger.info(`Precache ${colors.cyan(`${count} files`)}, totaling ${colors.cyan(`${(size / 1024 / 1024).toFixed(2)} Mb.`)}.`);
        if (warnings.length)
            logger.warn(`\n${warnings.map((warning) => `  · ${warning}`).join('\n')}`);
        if (size > 104857600)
            logger.error(`Cache Size is larger than 100MB, so that it can not be registered on all browsers.\n${colors.blue('Please consider disable `cacheHTML` and `cacheImage`, or set `maxSize` and `maxImageSize` option.\n')}`);
        else if (size > 52428800)
            logger.warn(`\nCache Size is larger than 50MB, which will not be registered on Safari.\n${colors.blue('Please consider disable `cacheHTML` and `cacheImage`, or set `maxSize` and `maxImageSize` option.\n')}`);
    });
};
