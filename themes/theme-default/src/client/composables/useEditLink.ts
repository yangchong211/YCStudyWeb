import { useThemeLocaleData } from '@theme/useThemeData'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { usePageData, usePageFrontmatter } from 'vuepress/client'
import type { AutoLinkConfig } from 'vuepress/client'
import type {
  DefaultThemeNormalPageFrontmatter,
  DefaultThemePageData,
} from '../../shared/index.js'
import { resolveEditLink } from '../utils/index.js'

export const useEditLink = (): ComputedRef<null | AutoLinkConfig> => {
  const themeLocale = useThemeLocaleData()
  const page = usePageData<DefaultThemePageData>()
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>()

  return computed(() => {
    const showEditLink =
      frontmatter.value.editLink ?? themeLocale.value.editLink ?? true
    if (!showEditLink) {
      return null
    }

    const {
      repo,
      docsRepo = repo,
      docsBranch = 'main',
      docsDir = '',
      editLinkText,
    } = themeLocale.value

    if (!docsRepo) return null

    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern:
        frontmatter.value.editLinkPattern ?? themeLocale.value.editLinkPattern,
    })

    if (!editLink) return null

    return {
      text: editLinkText ?? 'Edit this page',
      link: editLink,
    }
  })
}
