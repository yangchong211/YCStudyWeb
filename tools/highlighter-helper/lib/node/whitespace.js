export const WHITESPACE_REGEXP = /:whitespace(?:=(all|boundary|trailing)?)?\b/;
export const NO_WHITESPACE_REGEXP = /:no-whitespace\b/;
export const resolveWhitespacePosition = (info, defaultPosition) => {
    if (NO_WHITESPACE_REGEXP.test(info)) {
        return false;
    }
    defaultPosition = defaultPosition === true ? undefined : defaultPosition;
    const match = info.match(WHITESPACE_REGEXP);
    if (match) {
        return (match[1] || defaultPosition || 'all');
    }
    return defaultPosition ?? false;
};
