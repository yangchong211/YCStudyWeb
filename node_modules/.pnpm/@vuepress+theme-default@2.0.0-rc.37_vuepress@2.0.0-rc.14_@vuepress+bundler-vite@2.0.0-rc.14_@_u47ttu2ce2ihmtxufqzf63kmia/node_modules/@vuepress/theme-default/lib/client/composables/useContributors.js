import { useThemeLocaleData } from '@theme/useThemeData';
import { computed } from 'vue';
import { usePageData, usePageFrontmatter } from 'vuepress/client';
export const useContributors = () => {
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    return computed(() => {
        const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
        if (!showContributors)
            return null;
        return page.value.git?.contributors ?? null;
    });
};
