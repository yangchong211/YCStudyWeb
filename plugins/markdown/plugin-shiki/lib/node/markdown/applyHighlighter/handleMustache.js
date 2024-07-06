import { nanoid } from '../../utils.js';
const MUSTACHE_REG = /\{\{[^]*?\}\}/g;
/**
 * Replace mustache with unique markers
 * @param str content
 * @param store mustache store
 * @returns
 */
const removeMustache = (str, store) => str.replace(MUSTACHE_REG, (match) => {
    let marker = store.get(match);
    if (!marker) {
        marker = nanoid();
        store.set(match, marker);
    }
    return marker;
});
const restoreMustache = (str, store) => {
    store.forEach((marker, match) => {
        str = str.replaceAll(marker, match);
    });
    return str;
};
export const handleMustache = (str, highlight) => {
    const store = new Map();
    return restoreMustache(highlight(removeMustache(str, store).trimEnd()), store);
};
