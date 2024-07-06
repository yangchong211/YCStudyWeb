import type { VNode } from 'vue'
import { computed, defineComponent, h, onMounted, ref } from 'vue'
import { usePageLang } from 'vuepress/client'
import type {
  GiscusInputPosition,
  GiscusMapping,
  GiscusRepo,
  GiscusTheme,
} from '../../shared/index.js'
import { useGiscusOptions } from '../helpers/index.js'
import { LoadingIcon } from './LoadingIcon.js'

import '../styles/giscus.css'

// Note: Should be updated with https://github.com/giscus/giscus/tree/main/locales
const SUPPORTED_LANGUAGES = [
  'ar',
  'ca',
  'da',
  'de',
  'en',
  'eo',
  'es',
  'fa',
  'fr',
  'he',
  'id',
  'it',
  'ja',
  'ko',
  'nl',
  'pl',
  'pt',
  'ro',
  'ru',
  'th',
  'tr',
  'uk',
  'uz',
  'vi',
  'zh-CN',
  'zh-TW',
] as const

type BooleanString = '0' | '1'

export type GiscusLang = (typeof SUPPORTED_LANGUAGES)[number]

export type GiscusLoading = 'lazy' | 'eager'

export interface GiscusProps {
  id?: string | undefined
  repo: GiscusRepo
  repoId: string
  category?: string | undefined
  categoryId?: string | undefined
  mapping: GiscusMapping
  term?: string | undefined
  theme?: GiscusTheme | undefined
  reactionsEnabled?: BooleanString | undefined
  strict?: BooleanString | undefined
  emitMetadata?: BooleanString | undefined
  inputPosition?: GiscusInputPosition | undefined
  lang?: GiscusLang | undefined
  loading?: GiscusLoading | undefined
}

export default defineComponent({
  name: 'GiscusComment',

  props: {
    /**
     * The path of the comment
     */
    identifier: {
      type: String,
      required: true,
    },

    /**
     * Whether the component is in darkmode
     *
     * 组件是否处于夜间模式
     */
    darkmode: Boolean,
  },

  setup(props) {
    const giscusOptions = useGiscusOptions()
    const lang = usePageLang()

    const enableGiscus = computed(() =>
      Boolean(
        giscusOptions.value.repo &&
          giscusOptions.value.repoId &&
          giscusOptions.value.category &&
          giscusOptions.value.categoryId,
      ),
    )

    const loaded = ref(false)

    const giscusLang = computed(() => {
      if (SUPPORTED_LANGUAGES.includes(lang.value as GiscusLang))
        return lang.value

      const shortCode = lang.value.split('-')[0] as GiscusLang

      if (SUPPORTED_LANGUAGES.includes(shortCode)) return shortCode

      return 'en'
    })

    const config = computed(
      () =>
        ({
          repo: giscusOptions.value.repo,
          repoId: giscusOptions.value.repoId,
          category: giscusOptions.value.category,
          categoryId: giscusOptions.value.categoryId,
          lang: giscusLang.value,
          theme: props.darkmode
            ? giscusOptions.value.darkTheme || 'dark'
            : giscusOptions.value.lightTheme || 'light',
          mapping: giscusOptions.value.mapping || 'pathname',
          term: props.identifier,
          inputPosition: giscusOptions.value.inputPosition || 'top',
          reactionsEnabled:
            giscusOptions.value.reactionsEnabled === false ? '0' : '1',
          strict: giscusOptions.value.strict === false ? '0' : '1',
          loading: giscusOptions.value.lazyLoading === false ? 'eager' : 'lazy',
          emitMetadata: '0',
        }) as GiscusProps,
    )

    onMounted(async () => {
      await import(/* webpackChunkName: "giscus" */ 'giscus')
      loaded.value = true
    })

    return (): VNode | null =>
      enableGiscus.value
        ? h(
            'div',
            {
              id: 'comment',
              class: [
                'giscus-wrapper',
                { 'input-top': giscusOptions.value.inputPosition !== 'bottom' },
              ],
            },
            loaded.value ? h('giscus-widget', config.value) : h(LoadingIcon),
          )
        : null
  },
})
