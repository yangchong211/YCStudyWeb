import type { RouteLocationNormalizedLoaded } from 'vuepress/client'
import type { SidebarItem } from '../typings.js'

const normalizePath = (path: string): string =>
  decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(md|html)$/, '')

const isActiveLink = (
  link: string,
  route: RouteLocationNormalizedLoaded,
): boolean => {
  if (route.hash === link) {
    return true
  }
  const currentPath = normalizePath(route.path)
  const targetPath = normalizePath(link)
  return currentPath === targetPath
}

export const isActiveLinkItem = (
  item: SidebarItem,
  route: RouteLocationNormalizedLoaded,
): boolean => {
  if (item.link && isActiveLink(item.link, route)) {
    return true
  }

  if ('children' in item) {
    return item.children.some((child) => isActiveLinkItem(child, route))
  }

  return false
}
