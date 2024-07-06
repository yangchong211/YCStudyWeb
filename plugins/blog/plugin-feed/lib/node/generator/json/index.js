import { isArray } from '@vuepress/helper';
const getJSONAuthor = (author) => ({
    name: author.name,
    ...(author.url ? { url: author.url } : {}),
    ...(author.avatar ? { avatar: author.avatar } : {}),
});
/**
 * JSON 1.1 feed
 *
 * @see https://jsonfeed.org/version/1.1
 */
export const getJSONFeed = (feedStore) => {
    const { channel, links } = feedStore;
    const content = {
        version: 'https://jsonfeed.org/version/1.1',
        title: channel.title,
        home_page_url: channel.link,
        feed_url: links.json,
    };
    if (channel.description)
        content.description = channel.description;
    if (channel.image)
        content.icon = channel.image;
    if (channel.icon)
        content.favicon = channel.icon;
    const channelAuthors = (isArray(channel.author)
        ? channel.author
        : channel.author
            ? [channel.author]
            : []).filter((author) => Boolean(author?.name));
    if (channelAuthors.length)
        content.authors = channelAuthors.map((author) => getJSONAuthor(author));
    content.items = feedStore.items.map((item) => {
        const feedItem = {
            title: item.title,
            url: item.link,
            id: item.guid || item.link,
            ...(item.description ? { summary: item.description } : {}),
            // json_feed distinguishes between html and text content
            // but since we only take a single type, we'll assume HTML
            content_html: item.content,
        };
        if (item.image)
            feedItem.image = item.image;
        if (item.pubDate)
            feedItem.date_published = item.pubDate.toISOString();
        if (item.lastUpdated)
            feedItem.date_modified = item.lastUpdated.toISOString();
        // author
        if (isArray(item.author))
            feedItem.authors = item.author
                .filter((author) => author.name)
                .map((author) => getJSONAuthor(author));
        // tags
        if (item.category)
            feedItem.tags = item.category
                .filter((category) => category.name)
                .map((category) => category.name);
        return feedItem;
    });
    return JSON.stringify(content, null, 2);
};
