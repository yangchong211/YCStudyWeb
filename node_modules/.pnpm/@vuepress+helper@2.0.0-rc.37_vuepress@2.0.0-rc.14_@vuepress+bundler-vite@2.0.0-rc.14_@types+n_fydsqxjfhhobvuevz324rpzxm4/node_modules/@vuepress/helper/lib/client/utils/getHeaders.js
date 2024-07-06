export const getHeaders = ({ selector = [...new Array(6)].map((_, i) => `#vp-content h${i + 1}`).join(','), levels = 2, ignore = [], } = {}) => {
    const headers = Array.from(document.querySelectorAll(selector))
        .filter((el) => el.id && el.hasChildNodes())
        .map((el) => {
        const level = Number(el.tagName[1]);
        return {
            element: el,
            title: serializeHeader(el, ignore),
            link: '#' + el.id,
            slug: el.id,
            level,
        };
    });
    return resolveHeaders(headers, levels);
};
const serializeHeader = (h, ignore = []) => {
    let text = '';
    if (ignore.length) {
        const clone = h.cloneNode(true);
        clone.querySelectorAll(ignore.join(',')).forEach((el) => el.remove());
        text = clone.textContent || '';
    }
    else {
        text = h.textContent || '';
    }
    return text.trim();
};
export const resolveHeaders = (headers, levels = 2) => {
    if (levels === false) {
        return [];
    }
    const [high, low] = typeof levels === 'number'
        ? [levels, levels]
        : levels === 'deep'
            ? [2, 6]
            : levels;
    headers = headers.filter((h) => h.level >= high && h.level <= low);
    const res = [];
    // eslint-disable-next-line no-labels
    outer: for (let i = 0; i < headers.length; i++) {
        const cur = headers[i];
        if (i === 0) {
            res.push(cur);
        }
        else {
            for (let j = i - 1; j >= 0; j--) {
                const prev = headers[j];
                if (prev.level < cur.level) {
                    ;
                    (prev.children ??= []).push(cur);
                    // eslint-disable-next-line no-labels
                    continue outer;
                }
            }
            res.push(cur);
        }
    }
    return res;
};
