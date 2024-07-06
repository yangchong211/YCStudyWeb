import { getRealPath } from '@vuepress/helper';
import { removeLeadingSlash } from 'vuepress/shared';
import { fs } from 'vuepress/utils';
import { PLUGIN_NAME } from './logger.js';
const DEFAULT_TEMPLATE_PATH = getRealPath(`${PLUGIN_NAME}/templates/sitemap.xsl`, import.meta.url);
export const getSiteMapTemplate = (options) => [
    options.sitemapXSLFilename
        ? removeLeadingSlash(options.sitemapXSLFilename)
        : 'sitemap.xsl',
    options.sitemapXSLTemplate ?? fs.readFileSync(DEFAULT_TEMPLATE_PATH, 'utf-8'),
];
