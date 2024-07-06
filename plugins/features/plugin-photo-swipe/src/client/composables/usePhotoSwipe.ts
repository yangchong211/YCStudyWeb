import { isString, useLocaleConfig, wait } from '@vuepress/helper/client'
import { nextTick, onMounted, onUnmounted, watch } from 'vue'
import { usePageData, usePageFrontmatter } from 'vuepress/client'
import type { PhotoSwipePluginLocaleData } from '../../shared/index.js'
import { usePhotoSwipeOptions } from '../helpers/index.js'
import { getImages, registerPhotoSwipe } from '../utils/index.js'
import type { PhotoSwipeBehaviorOptions } from '../utils/index.js'

import 'photoswipe/dist/photoswipe.css'
import '../styles/photo-swipe.css'

export interface UsePhotoSwipeOptions extends PhotoSwipeBehaviorOptions {
  selector: string | string[]
  locales: Record<
    string,
    Record<`${keyof PhotoSwipePluginLocaleData}Title`, string>
  >
  /** @default 500 */
  delay?: number
}

export const usePhotoSwipe = ({
  selector,
  locales,
  delay = 500,
  download = true,
  fullscreen = true,
  scrollToClose = true,
}: UsePhotoSwipeOptions): void => {
  const photoSwipeOptions = usePhotoSwipeOptions()
  const locale = useLocaleConfig(locales)
  const page = usePageData()
  const frontmatter = usePageFrontmatter<{ photoSwipe: string | boolean }>()

  let destroy: (() => void) | null = null

  const setupPhotoSwipe = (): void => {
    const { photoSwipe } = frontmatter.value

    if (photoSwipe !== false)
      nextTick()
        .then(() => wait(delay))
        .then(async () => {
          const imageSelector = isString(photoSwipe) ? photoSwipe : selector

          destroy = await registerPhotoSwipe(getImages(imageSelector), {
            ...photoSwipeOptions.value,
            ...locale.value,
            download,
            fullscreen,
            scrollToClose,
          })
        })
  }

  onMounted(() => {
    setupPhotoSwipe()

    watch(
      () => [page.value.path, photoSwipeOptions.value],
      () => {
        destroy?.()
        setupPhotoSwipe()
      },
    )
  })

  onUnmounted(() => {
    destroy?.()
  })
}
