import { removeLeadingSlash } from 'vuepress/shared';
import { getUrl } from './utils/index.js';
export const getFeedFilenames = (options, prefix = '/') => ({
    atomOutputFilename: `${removeLeadingSlash(prefix)}${options.atomOutputFilename || 'atom.xml'}`,
    atomXslFilename: `${removeLeadingSlash(prefix)}${options.atomXslFilename || 'atom.xsl'}`,
    jsonOutputFilename: `${removeLeadingSlash(prefix)}${options.jsonOutputFilename || 'feed.json'}`,
    rssOutputFilename: `${removeLeadingSlash(prefix)}${options.rssOutputFilename || 'rss.xml'}`,
    rssXslFilename: `${removeLeadingSlash(prefix)}${options.rssXslFilename || 'rss.xsl'}`,
});
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
