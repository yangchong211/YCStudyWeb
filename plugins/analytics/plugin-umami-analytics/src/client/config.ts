import { defineClientConfig } from 'vuepress/client'
import type { UmamiOptions } from '../shared/index.js'
import { useUmamiAnalytics } from './composables/index.js'

declare const __UMM_OPTIONS__: UmamiOptions

export default defineClientConfig({
  setup() {
    if (__VUEPRESS_SSR__) return
    useUmamiAnalytics(__UMM_OPTIONS__)
  },
})
