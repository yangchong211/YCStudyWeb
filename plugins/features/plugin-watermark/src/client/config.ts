import { isPlainObject } from '@vuepress/helper/client'
import { computed } from 'vue'
import { defineClientConfig, usePageFrontmatter } from 'vuepress/client'
import type { WatermarkPluginFrontmatter } from '../shared/options.js'
import { setupWatermark } from './composables/index.js'
import { injectWatermarkConfig, useWatermarkOptions } from './helper/index.js'
import type { WatermarkOptions } from './helper/index.js'

declare const __WM_DELAY__: number
declare const __WM_GLOBAL__: boolean
declare const __WM_OPTIONS__: WatermarkOptions

export default defineClientConfig({
  enhance({ app }) {
    injectWatermarkConfig(app)
  },

  setup() {
    if (__VUEPRESS_SSR__) return

    const frontmatter = usePageFrontmatter<WatermarkPluginFrontmatter>()
    const watermarkOptions = useWatermarkOptions(
      computed(() => {
        const watermark = frontmatter.value.watermark
        return isPlainObject(watermark) ? {} : __WM_OPTIONS__
      }),
    )

    const enabled = computed(() => {
      const watermark = frontmatter.value.watermark

      return Boolean(watermark ?? __WM_GLOBAL__ ?? false)
    })

    setupWatermark(watermarkOptions, enabled, __WM_DELAY__)
  },
})
