import { entries } from '@vuepress/helper/client'
import type { RedirectLocaleConfig } from '../shared/index.js'

declare const __REDIRECT_LOCALE_CONFIG__: RedirectLocaleConfig

export const redirectLocaleConfig = __REDIRECT_LOCALE_CONFIG__
export const redirectLocaleEntries = entries(redirectLocaleConfig.localeConfig)
