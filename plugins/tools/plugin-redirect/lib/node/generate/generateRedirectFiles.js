import { entries, isLinkAbsolute, isLinkHttp, removeEndingSlash, removeLeadingSlash, } from '@vuepress/helper';
import { fs, path } from 'vuepress/utils';
import { logger } from '../logger.js';
import { getRedirectHTML } from './getRedirectHTML.js';
export const generateRedirectFiles = async ({ dir, options }, config, hostname = '') => {
    const resolvedHostname = hostname
        ? removeEndingSlash(isLinkHttp(hostname) ? hostname : `https://${hostname}`)
        : '';
    const { succeed } = logger.load('Generating redirect files');
    await Promise.all(entries(config).map(async ([from, to]) => {
        const filePath = dir.dest(removeLeadingSlash(from));
        if (!fs.existsSync(filePath)) {
            const redirectUrl = isLinkAbsolute(to)
                ? `${resolvedHostname}${options.base}${removeLeadingSlash(to)}`
                : to;
            await fs.ensureDir(path.dirname(filePath));
            await fs.writeFile(filePath, getRedirectHTML(redirectUrl));
        }
    }));
    succeed();
};
