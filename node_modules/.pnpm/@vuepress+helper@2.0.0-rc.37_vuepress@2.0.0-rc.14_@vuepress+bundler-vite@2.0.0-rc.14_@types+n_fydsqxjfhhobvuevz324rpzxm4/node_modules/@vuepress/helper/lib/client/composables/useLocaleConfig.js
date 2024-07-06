import { computed } from 'vue';
import { useRouteLocale } from 'vuepress/client';
/**
 * Get current locale config
 *
 * @param localesConfig client locale Config
 * @returns current locale config
 */
export const useLocaleConfig = (localesConfig) => {
    const routeLocale = useRouteLocale();
    return computed(() => localesConfig[routeLocale.value] ?? {});
};
