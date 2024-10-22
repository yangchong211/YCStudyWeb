import Prism from 'prismjs';
import { loadLanguages } from './loadLanguages.js';
import { resolveLanguage } from './utils/index.js';
const languageNameMap = {
    html: 'markup',
    vue: 'markup',
};
// documentation language of corresponding language
const docLangMap = {
    csharp: 'xml-doc',
    fsharp: 'xml-doc',
    java: 'javadoc',
    javascript: 'jsdoc',
    php: 'phpdoc',
    typescript: 'jsdoc',
};
/**
 * Resolve syntax highlighter for corresponding language
 */
export const resolveHighlighter = (language) => {
    const languageInfo = resolveLanguage(language);
    language = languageInfo.name;
    // get the languages that need to be loaded
    const lang = languageNameMap[language] || language;
    const langsToLoad = [lang];
    // doc language of current language
    if (docLangMap[lang]) {
        langsToLoad.push(docLangMap[lang]);
    }
    // try to load languages
    loadLanguages(langsToLoad);
    // return null if current language could not be loaded
    // the doc language is not required so we don't check it here
    if (!Prism.languages[lang]) {
        return null;
    }
    return (code) => Prism.highlight(code, Prism.languages[lang], lang);
};
