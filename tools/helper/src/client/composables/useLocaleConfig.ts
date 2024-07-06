import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useRouteLocale } from 'vuepress/client'
import type { LocaleData } from 'vuepress/shared'
import type { ExactLocaleConfig } from '../../shared/index.js'

/**
 * Get current locale config
 *
 * @param localesConfig client locale Config
 * @returns current locale config
 */
export const useLocaleConfig = <T extends LocaleData>(
  localesConfig: ExactLocaleConfig<T>,
): ComputedRef<T> => {
  const routeLocale = useRouteLocale()

  return computed(() => localesConfig[routeLocale.value] ?? {})
}
