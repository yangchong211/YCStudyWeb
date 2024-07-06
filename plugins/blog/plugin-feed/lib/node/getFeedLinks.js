import { getFeedFilenames } from './getFeedFilenames.js';
import { getUrl } from './utils/index.js';
export const getFeedLinks = (app, options, localePath) => {
    const { base } = app.options;
    const { hostname } = options;
    const { atomOutputFilename, atomXslFilename, jsonOutputFilename, rssOutputFilename, rssXslFilename, } = getFeedFilenames(options, localePath);
    return {
        localePath,
        atom: getUrl(hostname, base, atomOutputFilename),
        atomXsl: getUrl(hostname, base, atomXslFilename),
        json: getUrl(hostname, base, jsonOutputFilename),
        rss: getUrl(hostname, base, rssOutputFilename),
        rssXsl: getUrl(hostname, base, rssXslFilename),
    };
};
