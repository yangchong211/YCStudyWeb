import { isArray, isPlainObject, isString } from '@vuepress/helper';
const isFeedAuthor = (author) => isPlainObject(author) && isString(author.name);
export const getFeedAuthor = (author) => {
    if (author) {
        if (isArray(author))
            return author
                .map((item) => isString(item) ? { name: item } : isFeedAuthor(item) ? item : null)
                .filter((item) => item !== null);
        if (isString(author))
            return [{ name: author }];
        if (isFeedAuthor(author))
            return [author];
        console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string | undefined\`, but got`, author);
        return [];
    }
    return [];
};
