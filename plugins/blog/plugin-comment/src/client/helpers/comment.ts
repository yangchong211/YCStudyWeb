import { isFunction } from '@vuepress/helper/client'
import type { App, MaybeRefOrGetter, Ref } from 'vue'
import { inject, isRef, ref, watch } from 'vue'
import type {
  ArtalkOptions,
  CommentOptions,
  GiscusOptions,
  TwikooOptions,
  WalineOptions,
} from '../../shared/index.js'

declare const __VUEPRESS_DEV__: boolean
declare const __COMMENT_OPTIONS__: CommentOptions

const commentOptions = __COMMENT_OPTIONS__

const comment: Ref<CommentOptions> = ref(commentOptions)

const commentSymbol = Symbol(__VUEPRESS_DEV__ ? 'comment' : '')

const defineCommentConfig = <T extends CommentOptions>(
  options: MaybeRefOrGetter<T>,
): void => {
  if (isRef(options)) {
    watch(
      () => options.value,
      (value) => {
        comment.value = { ...commentOptions, ...value }
      },
    )
  } else if (isFunction(options)) {
    watch(options, (value) => {
      comment.value = { ...commentOptions, ...value }
    })
  } else {
    comment.value = { ...commentOptions, ...options }
  }
}

export const useCommentOptions = <T extends CommentOptions>(): Ref<T> =>
  inject(commentSymbol)!

export const defineArtalkConfig = defineCommentConfig<ArtalkOptions>

export const useArtalkOptions = useCommentOptions<ArtalkOptions>

export const defineGiscusConfig = defineCommentConfig<GiscusOptions>

export const useGiscusOptions = useCommentOptions<GiscusOptions>

export const defineTwikooConfig = defineCommentConfig<TwikooOptions>

export const useTwikooOptions = useCommentOptions<TwikooOptions>

export const defineWalineConfig = defineCommentConfig<WalineOptions>

export const useWalineOptions = useCommentOptions<WalineOptions>

export const injectCommentConfig = (app: App): void => {
  app.provide(commentSymbol, comment)
}
