/**
 * Extract Latin words from content
 */
const getWords = (content) => 
// \u00C0-\u024F are Latin Supplement letters, maybe used in language like french
// \u0400-\u04FF are Cyrillic letters, used in russian
// . @ / are added to ensure email and urls are not splitted
content.match(/[\w\d\s\u00C0-\u024F\u0400-\u04FF.@/]+/giu);
/**
 * Extract Chinese Characters from content
 */
const getChinese = (content) => content.match(/[\u4E00-\u9FD5]/gu);
/**
 * Get word number of given string
 */
export const getWordNumber = (content) => (getWords(content)?.reduce((accumulator, word) => accumulator + (word.trim() === '' ? 0 : word.trim().split(/\s+/u).length), 0) || 0) + (getChinese(content)?.length || 0);
/**
 * Get reading time info
 */
export const getReadingTime = (content, wordsPerMinute = 300) => {
    const words = getWordNumber(content || '');
    return {
        minutes: Math.round((words / wordsPerMinute) * 100) / 100,
        words,
    };
};
