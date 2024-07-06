import {
  usePreferredLanguages,
  useScrollLock,
  useSessionStorage,
} from '@vueuse/core'
import type { VNode } from 'vue'
import {
  computed,
  defineComponent,
  h,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  TransitionGroup,
  watch,
} from 'vue'
import { useRouteLocale, useRoutePath, useRouter } from 'vuepress/client'
import type { RedirectPluginLocaleConfig } from '../../shared/locales.js'
import { redirectLocaleConfig, redirectLocaleEntries } from '../define.js'

import '../styles/redirect-modal.css'

declare const __REDIRECT_LOCALES__: RedirectPluginLocaleConfig

const redirectLocales = __REDIRECT_LOCALES__
const { switchLocale } = redirectLocaleConfig

interface LocaleInfo {
  lang: string
  localePath: string
}

const redirectStatusStorage = useSessionStorage<Record<string, boolean>>(
  'VUEPRESS_REDIRECT_LOCALES',
  {},
)

export default defineComponent({
  name: 'RedirectModal',

  setup() {
    const languages = usePreferredLanguages()
    const router = useRouter()
    const routePath = useRoutePath()
    const routeLocale = useRouteLocale()

    const body = ref<HTMLElement>()
    // lock body scroll when modal is displayed
    const showModal = useScrollLock(body)

    const info = computed<LocaleInfo | null>(() => {
      if (redirectLocaleEntries.some(([key]) => routeLocale.value === key))
        for (const language of languages.value)
          for (const [localePath, langs] of redirectLocaleEntries)
            if (langs.includes(language)) {
              if (localePath === routeLocale.value) return null

              return {
                lang: language,
                localePath,
              }
            }

      return null
    })

    const locale = computed(() => {
      if (info.value) {
        const { lang, localePath } = info.value
        const locales = [
          redirectLocales[routeLocale.value],
          redirectLocales[localePath],
        ]

        return {
          hint: locales.map(({ hint }) => hint.replace('$1', lang)),
          switch: locales
            .map(({ switch: switchText }) => switchText.replace('$1', lang))
            .join(' / '),
          cancel: locales.map(({ cancel }) => cancel).join(' / '),
        }
      }

      return null
    })

    const redirect = (): void => {
      router.replace(
        routePath.value.replace(routeLocale.value, info.value!.localePath),
      )
    }

    watch(routePath, () => {
      showModal.value = false
    })

    onMounted(async () => {
      body.value = document.body

      await nextTick()

      if (!redirectStatusStorage.value[routeLocale.value] && info.value) {
        if (switchLocale === 'direct') redirect()
        else if (switchLocale === 'modal') showModal.value = true
      }
    })

    onBeforeUnmount(() => {
      showModal.value = false
    })

    return (): VNode | null =>
      h(TransitionGroup, { name: 'redirect-modal-fade' }, () =>
        showModal.value
          ? h(
              'div',
              { key: 'mask', class: 'redirect-modal-mask' },
              h(
                'div',
                {
                  key: 'popup',
                  class: 'redirect-modal-wrapper',
                },
                [
                  h(
                    'div',
                    { class: 'redirect-modal-content' },
                    locale.value?.hint.map((text) => h('p', text)),
                  ),
                  h(
                    'button',
                    {
                      type: 'button',
                      class: 'redirect-modal-action primary',
                      onClick: () => {
                        redirectStatusStorage.value[routeLocale.value] = true
                        showModal.value = false
                        redirect()
                      },
                    },
                    locale.value?.switch,
                  ),
                  h(
                    'button',
                    {
                      type: 'button',
                      class: 'redirect-modal-action',
                      onClick: () => {
                        redirectStatusStorage.value[routeLocale.value] = true
                        showModal.value = false
                      },
                    },
                    locale.value?.cancel,
                  ),
                ],
              ),
            )
          : null,
      )
  },
})
