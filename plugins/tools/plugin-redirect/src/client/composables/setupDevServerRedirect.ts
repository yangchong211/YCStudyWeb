import { redirectMap } from '@temp/redirect/map.js'
import { entries, isLinkHttp } from '@vuepress/helper/client'
import { usePreferredLanguages } from '@vueuse/core'
import { computed, watch } from 'vue'
import { useRoute, useRouteLocale, useRouter } from 'vuepress/client'
import { normalizePath } from '../../shared/index.js'
import { redirectLocaleConfig, redirectLocaleEntries } from '../define.js'

const {
  autoLocale,
  defaultBehavior,
  defaultLocale: defaultLocalePath,
  localeFallback,
} = redirectLocaleConfig

export const setupDevServerRedirect = (): void => {
  const languages = usePreferredLanguages()
  const route = useRoute()
  const router = useRouter()
  const routeLocale = useRouteLocale()

  const isRootLocale = computed(() => routeLocale.value === '/')

  const handleLocaleRedirect = (): void => {
    const routes = router.getRoutes()
    const defaultLocale =
      defaultLocalePath &&
      routes.some(
        ({ path }) => path === route.path.replace('/', defaultLocalePath),
      )
        ? defaultLocalePath
        : routes.find(
            ({ path }) =>
              route.path.split('/').length >= 3 &&
              path === route.path.replace(/^\/[^/]+\//, '/'),
          )?.path

    let matchedLocalePath: string | null = null

    // get matched locale
    // eslint-disable-next-line no-labels
    findLanguage: for (const lang of languages.value)
      for (const [localePath, langs] of redirectLocaleEntries)
        if (langs.includes(lang)) {
          if (
            localeFallback &&
            routes.every(({ path }) => path !== route.path.replace('/', path))
          )
            continue

          matchedLocalePath = localePath
          // eslint-disable-next-line no-labels
          break findLanguage
        }

    // default link
    const defaultRoute = defaultLocale
      ? route.fullPath.replace('/', defaultLocale)
      : null

    // a locale matches
    if (matchedLocalePath) {
      const hasLocalePage = routes.some(
        ({ path }) => route.path.replace('/', matchedLocalePath!) === path,
      )
      const localeRoute = route.fullPath.replace('/', matchedLocalePath)

      const routePath =
        // the locale page exists
        hasLocalePage
          ? localeRoute
          : // the page does not exist
            defaultBehavior === 'homepage'
            ? // locale homepage
              matchedLocalePath
            : defaultBehavior === 'defaultLocale' && defaultRoute
              ? // default locale page
                defaultRoute
              : // as is to get a 404 page of that locale
                localeRoute

      router.replace(routePath)
    }
    // we have a default page
    else if (defaultRoute) {
      router.replace(defaultRoute)
    } else if (route.path !== '/404.html') {
      router.replace('/404.html')
    }
  }

  watch(
    () => route.path,
    (path) => {
      // handle redirects
      for (const [from, to] of entries(redirectMap))
        if (normalizePath(path.toLowerCase()) === from.toLowerCase()) {
          if (isLinkHttp(to)) window.open(to)
          else router.replace(to)

          return
        }

      if (autoLocale && isRootLocale.value) handleLocaleRedirect()
    },
    { immediate: true },
  )
}
