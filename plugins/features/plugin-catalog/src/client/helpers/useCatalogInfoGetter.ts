import { isString } from '@vuepress/helper/client'
import type { App, Component } from 'vue'
import { inject } from 'vue'

export interface CatalogInfo {
  /**
   * Catalog title
   *
   * 目录标题
   */
  title: string
  /**
   * Catalog order
   *
   * 目录顺序
   */
  order?: number
  /**
   * Catalog content
   *
   * 目录内容
   */
  content?: Component
}

export type CatalogInfoGetter = (
  meta: Record<string, unknown>,
) => CatalogInfo | null

let catalogGetter: CatalogInfoGetter = (meta) =>
  isString(meta.title) ? { title: meta.title } : null

const catalogInfoSymbol = Symbol(__VUEPRESS_DEV__ ? 'catalog-info-getter' : '')

export const defineCatalogInfoGetter = (getter: CatalogInfoGetter): void => {
  catalogGetter = getter
}

export const useCatalogInfoGetter = (): CatalogInfoGetter =>
  inject(catalogInfoSymbol)!

export const injectCatalogInfoGetter = (app: App): void => {
  app.provide(catalogInfoSymbol, catalogGetter)
}
