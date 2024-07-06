import { useThemeLocaleData } from '@theme/useThemeData'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { isString } from 'vuepress/shared'
import type {
  NavbarGroupOptions,
  NavbarLinkOptions,
  NavGroup,
} from '../../shared/navbar.js'
import type { NavbarItem } from '../typings.js'
import { getAutoLink, isLinkInternal, resolvePrefix } from '../utils/index.js'

const resolveNavbarItem = (
  item: NavbarLinkOptions | NavbarGroupOptions | string,
  prefix = '',
): NavbarItem => {
  if (isString(item)) {
    return getAutoLink(resolvePrefix(prefix, item))
  }

  if ('children' in item) {
    return {
      ...item,
      children: item.children.map(
        (child) =>
          resolveNavbarItem(
            child,
            resolvePrefix(prefix, item.prefix),
          ) as NavGroup<NavbarLinkOptions>,
      ),
    }
  }

  return {
    ...item,
    link: isLinkInternal(item.link)
      ? getAutoLink(resolvePrefix(prefix, item.link)).link
      : item.link,
  }
}

export const useNavbarConfig = (): ComputedRef<NavbarItem[]> => {
  const themeLocale = useThemeLocaleData()

  return computed(() =>
    (themeLocale.value.navbar || []).map((item) => resolveNavbarItem(item)),
  )
}
