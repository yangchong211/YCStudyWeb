import { isArray } from '@vuepress/helper';
import { isLinkHttp } from 'vuepress/shared';
import { getUrl } from './utils/index.js';
export const getFeedChannelOptions = (app, options, localePath = '') => {
    const { base } = app.options;
    const { title, description, lang, locales } = app.siteData;
    const { channel: { icon: channelIcon, image: channelImage, ...channel } = {}, hostname, icon, image, } = options;
    const authorName = isArray(options.channel?.author)
        ? options.channel?.author[0]?.name
        : options.channel?.author?.name;
    const defaultChannelOption = {
        title: locales[localePath]?.title || title || locales['/']?.title || '',
        link: getUrl(hostname, base, localePath),
        description: locales[localePath]?.description ||
            description ||
            locales['/']?.description ||
            '',
        language: locales[localePath]?.lang || lang,
        copyright: authorName ? `Copyright by ${authorName}` : '',
        pubDate: new Date(),
        lastUpdated: new Date(),
        ...(icon
            ? { icon: isLinkHttp(icon) ? icon : getUrl(hostname, base, icon) }
            : {}),
        ...(image
            ? { image: isLinkHttp(image) ? image : getUrl(hostname, base, image) }
            : {}),
    };
    return {
        ...defaultChannelOption,
        ...channel,
        ...(channelIcon
            ? {
                icon: isLinkHttp(channelIcon)
                    ? channelIcon
                    : getUrl(hostname, base, channelIcon),
            }
            : {}),
        ...(channelImage
            ? {
                image: isLinkHttp(channelImage)
                    ? channelImage
                    : getUrl(hostname, base, channelImage),
            }
            : {}),
    };
};
