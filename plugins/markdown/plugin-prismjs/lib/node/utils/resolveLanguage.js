import * as languages from './languages.js';
/**
 * A key-value map to get language info from alias
 *
 * - key: alias
 * - value: language
 */
let languagesMap;
/**
 * Lazy generate languages map
 */
const getLanguagesMap = () => (languagesMap ??= Object.values(languages).reduce((result, item) => ({
    ...result,
    ...Object.fromEntries(item.aliases.map((alias) => [alias, item])),
}), {}));
/**
 * Resolve language for highlight from token info
 */
export const resolveLanguage = (info) => {
    // get user-defined language alias
    const alias = info.match(/^([^ :[{]+)/)?.[1] || 'text';
    // if the alias does not have a match in the map
    // fallback to the alias itself
    return (getLanguagesMap()[alias] ?? {
        name: alias,
        ext: alias,
        aliases: [alias],
    });
};
