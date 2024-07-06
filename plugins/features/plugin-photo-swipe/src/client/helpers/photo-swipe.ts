import { isFunction } from '@vuepress/helper/client'
import type { PhotoSwipeOptions as OriginalPhotoSwipeOptions } from 'photoswipe'
import type { App, MaybeRefOrGetter, Ref } from 'vue'
import { inject, isRef, ref, watch } from 'vue'

export type PhotoSwipeOptions = Omit<
  OriginalPhotoSwipeOptions,
  // These are handled internally
  'dataSource' | 'index'
>

declare const __VUEPRESS_DEV__: boolean

const photoswipeOptions: Ref<PhotoSwipeOptions> = ref({})

const photoswipeSymbol = Symbol(__VUEPRESS_DEV__ ? 'photoswipe' : '')

export const definePhotoSwipeConfig = (
  options: MaybeRefOrGetter<PhotoSwipeOptions>,
): void => {
  if (isRef(options)) {
    watch(
      () => options.value,
      (value) => {
        photoswipeOptions.value = value
      },
    )
  } else if (isFunction(options)) {
    watch(options, (value) => {
      photoswipeOptions.value = value
    })
  } else {
    photoswipeOptions.value = options
  }
}

export const usePhotoSwipeOptions = (): Ref<PhotoSwipeOptions> =>
  inject(photoswipeSymbol)!

export const injectPhotoSwipeConfig = (app: App): void => {
  app.provide(photoswipeSymbol, photoswipeOptions)
}
