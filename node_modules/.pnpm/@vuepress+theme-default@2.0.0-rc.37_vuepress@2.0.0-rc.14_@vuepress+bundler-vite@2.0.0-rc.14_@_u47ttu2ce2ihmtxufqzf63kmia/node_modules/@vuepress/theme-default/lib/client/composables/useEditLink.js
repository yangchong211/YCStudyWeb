import { useThemeLocaleData } from '@theme/useThemeData';
import { computed } from 'vue';
import { usePageData, usePageFrontmatter } from 'vuepress/client';
import { resolveEditLink } from '../utils/index.js';
export const useEditLink = () => {
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    return computed(() => {
        const showEditLink = frontmatter.value.editLink ?? themeLocale.value.editLink ?? true;
        if (!showEditLink) {
            return null;
        }
        const { repo, docsRepo = repo, docsBranch = 'main', docsDir = '', editLinkText, } = themeLocale.value;
        if (!docsRepo)
            return null;
        const editLink = resolveEditLink({
            docsRepo,
            docsBranch,
            docsDir,
            filePathRelative: page.value.filePathRelative,
            editLinkPattern: frontmatter.value.editLinkPattern ?? themeLocale.value.editLinkPattern,
        });
        if (!editLink)
            return null;
        return {
            text: editLinkText ?? 'Edit this page',
            link: editLink,
        };
    });
};
