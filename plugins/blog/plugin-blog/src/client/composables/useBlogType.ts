import { store } from '@temp/blog/store'
import { typesMap } from '@temp/blog/type'
import type { ComputedRef } from 'vue'
import { computed, readonly, shallowRef } from 'vue'
import {
  resolveRoute,
  usePageFrontmatter,
  useRouteLocale,
} from 'vuepress/client'
import type {
  BlogTypeFrontmatterOptions,
  TypesMap,
} from '../../shared/index.js'
import type { BlogTypeData } from '../typings.js'

declare const __BLOG_META_SCOPE__: string

const typeMapRef = shallowRef(typesMap)

export const blogTypeMap = readonly(typeMapRef)

export const useBlogType = <
  T extends Record<string, unknown> = Record<string, unknown>,
>(
  key?: string,
): ComputedRef<BlogTypeData<T>> => {
  const frontmatter = usePageFrontmatter<{
    blog?: BlogTypeFrontmatterOptions
  }>()
  const routeLocale = useRouteLocale()

  return computed(() => {
    const mapKey = key ?? frontmatter.value.blog?.key ?? ''

    if (!mapKey) {
      console.warn(`useBlogType: key not found`)

      // Fallback data
      return { path: '/', items: [] }
    }

    if (!typeMapRef.value[mapKey])
      throw new Error(`useBlogType: key ${key} is invalid`)

    const configMap = typeMapRef.value[mapKey][routeLocale.value]
    const result: BlogTypeData<T> = {
      path: configMap.path,
      items: [],
    }

    for (const index of configMap.indexes) {
      const { path, meta } = resolveRoute(store[index])

      result.items.push({
        path,
        info:
          __BLOG_META_SCOPE__ === ''
            ? (meta as T)
            : (meta[__BLOG_META_SCOPE__] as T),
      })
    }

    return result
  })
}

if (__VUEPRESS_DEV__ && (import.meta.webpackHot || import.meta.hot))
  __VUE_HMR_RUNTIME__.updateBlogType = (typesMap: TypesMap): void => {
    typeMapRef.value = typesMap
  }
