import type { DocSearchProps } from '@docsearch/react'
import { deepAssign, isFunction } from '@vuepress/helper/client'
import type { App, ComputedRef, InjectionKey, MaybeRefOrGetter, Ref } from 'vue'
import { computed, inject, isRef, ref, watch } from 'vue'
import { useRouteLocale } from 'vuepress/client'
import type { DocsearchOptions } from '../../shared/index.js'

declare const __VUEPRESS_DEV__: boolean
declare const __DOCSEARCH_OPTIONS__: DocsearchOptions

const docSearchOptions: Partial<DocSearchProps> = __DOCSEARCH_OPTIONS__

const docsearch: Ref<DocSearchProps> = ref(docSearchOptions as DocSearchProps)

const docsearchSymbol: InjectionKey<
  Ref<
    DocSearchProps & {
      locales?: Record<string, DocSearchProps>
    }
  >
> = Symbol(__VUEPRESS_DEV__ ? 'docsearch' : '')

export type DocSearchClientLocaleOptions = Partial<
  Omit<DocSearchProps, 'hitComponent' | 'navigator' | 'transformSearchClient'>
>

export interface DocSearchClientOptions extends DocSearchClientLocaleOptions {
  locales?: Record<string, DocSearchClientLocaleOptions>
}

export const defineDocSearchConfig = (
  options: MaybeRefOrGetter<DocSearchClientOptions>,
): void => {
  if (isRef(options)) {
    watch(
      () => options.value,
      (value) => {
        docsearch.value = deepAssign({}, docSearchOptions, value)
      },
    )
  } else if (isFunction(options)) {
    watch(options, (value) => {
      docsearch.value = deepAssign({}, docSearchOptions, value)
    })
  } else {
    docsearch.value = deepAssign({}, docSearchOptions, options)
  }
}

export const useDocSearchOptions = (): ComputedRef<DocSearchProps> => {
  const options = inject(docsearchSymbol)!
  const routeLocale = useRouteLocale()

  return computed(() => ({
    ...options.value,
    ...options.value.locales?.[routeLocale.value],
  }))
}

export const injectDocSearchConfig = (app: App): void => {
  app.provide(docsearchSymbol, docsearch)
}
