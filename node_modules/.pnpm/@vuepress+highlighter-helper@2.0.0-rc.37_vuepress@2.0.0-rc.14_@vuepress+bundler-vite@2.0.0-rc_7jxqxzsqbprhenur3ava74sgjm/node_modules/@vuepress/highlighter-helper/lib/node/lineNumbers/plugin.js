import { resolveLineNumbers } from './resolveLineNumbers.js';
export const lineNumbers = (md, { lineNumbers = true, removeLastLine } = {}) => {
    const rawFence = md.renderer.rules.fence;
    md.renderer.rules.fence = (...args) => {
        const [tokens, index] = args;
        const token = tokens[index];
        // get token info
        const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
        const rawCode = rawFence(...args);
        const code = rawCode.slice(rawCode.indexOf('<code>'), rawCode.indexOf('</code>'));
        const lines = code.split('\n');
        if (removeLastLine) {
            lines.pop();
        }
        // resolve line-numbers mark from token info
        const lineNumbersInfo = resolveLineNumbers(info) ??
            (typeof lineNumbers === 'number'
                ? lines.length >= lineNumbers
                : lineNumbers);
        if (lineNumbersInfo === false) {
            return rawCode;
        }
        const startNumbers = typeof lineNumbersInfo === 'number' ? lineNumbersInfo - 1 : 0;
        const lineNumbersStyle = `style="counter-reset:line-number ${startNumbers}"`;
        const lineNumbersCode = Array(lines.length)
            .fill('<div class="line-number"></div>')
            .join('');
        const lineNumbersWrapperCode = `<div class="line-numbers" aria-hidden="true" ${lineNumbersStyle}>${lineNumbersCode}</div>`;
        const finalCode = rawCode
            .replace(/<\/div>$/, `${lineNumbersWrapperCode}</div>`)
            .replace(/"(language-[^"]*?)"/, '"$1 line-numbers-mode"');
        return finalCode;
    };
};
