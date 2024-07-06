const THEME_PREFIX = 'vuepress-theme-';
/**
 * Normalize theme name
 */
export const normalizeThemeName = (name) => {
    // scoped package pattern
    const scopedMatch = name.match(/^@(.*)\/(.*)$/);
    // handle non-scoped package
    if (scopedMatch === null)
        return name.startsWith(THEME_PREFIX) ? name : `${THEME_PREFIX}${name}`;
    // handle scoped package
    const [, reqOrg, reqName] = scopedMatch;
    // handle @vuepress/ themes
    if (reqOrg === 'vuepress')
        return reqName.startsWith('theme-') ? name : `@vuepress/theme-${reqName}`;
    // handle other org
    return reqName.startsWith(THEME_PREFIX)
        ? name
        : `@${reqOrg}/${THEME_PREFIX}${reqName}`;
};
