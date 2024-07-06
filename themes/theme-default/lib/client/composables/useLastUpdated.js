import { useThemeLocaleData } from '@theme/useThemeData';
import { computed } from 'vue';
import { usePageData, usePageFrontmatter } from 'vuepress/client';
export const useLastUpdated = () => {
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    return computed(() => {
        const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
        if (!showLastUpdated)
            return null;
        if (!page.value.git?.updatedTime)
            return null;
        const updatedDate = new Date(page.value.git?.updatedTime);
        return updatedDate.toLocaleString();
    });
};
