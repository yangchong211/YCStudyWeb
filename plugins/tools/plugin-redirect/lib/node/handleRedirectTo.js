import { isLinkAbsolute, removeLeadingSlash } from '@vuepress/helper';
import { normalizePath } from '../shared/normalizePath.js';
export const handleRedirectTo = ({ frontmatter }, app) => {
    const { base } = app.options;
    const { redirectTo } = frontmatter;
    if (redirectTo) {
        const redirectUrl = normalizePath(isLinkAbsolute(redirectTo)
            ? `${base}${removeLeadingSlash(redirectTo)}`
            : redirectTo);
        (frontmatter.head ??= []).unshift([
            'script',
            {},
            `{\
const anchor = window.location.hash.substring(1);\
location.href=\`${redirectUrl}\${anchor? \`#\${anchor}\`: ""}\`;\
}`,
        ]);
    }
};
