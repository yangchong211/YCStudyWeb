import { useThemeLocaleData } from '@theme/useThemeData'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { usePageData, usePageFrontmatter } from 'vuepress/client'
import type {
  DefaultThemeNormalPageFrontmatter,
  DefaultThemePageData,
} from '../../shared/index.js'

export const useLastUpdated = (): ComputedRef<null | string> => {
  const themeLocale = useThemeLocaleData()
  const page = usePageData<DefaultThemePageData>()
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>()

  return computed(() => {
    const showLastUpdated =
      frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true

    if (!showLastUpdated) return null

    if (!page.value.git?.updatedTime) return null

    const updatedDate = new Date(page.value.git?.updatedTime)

    return updatedDate.toLocaleString()
  })
}
