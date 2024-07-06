import { useLocaleConfig } from '@vuepress/helper/client'
import type { PropType, SlotsType, VNode } from 'vue'
import {
  computed,
  defineComponent,
  h,
  onMounted,
  shallowRef,
  Transition,
} from 'vue'
import type { PwaPluginLocaleConfig } from '../../shared/index.js'
import { usePwaEvent } from '../composables/index.js'
import { skipWaiting } from '../utils/index.js'
import { UpdateIcon } from './icons.js'

import '../styles/popup.css'

export const PwaReadyPopup = defineComponent({
  name: 'PwaReadyPopup',

  props: {
    /** locale data */
    locales: {
      type: Object as PropType<PwaPluginLocaleConfig>,
      required: true,
    },
  },

  slots: Object as SlotsType<{
    default?: (props: {
      isReady: boolean
      reload: () => void
    }) => VNode[] | VNode | null
  }>,

  setup(props, { slots }) {
    const locale = useLocaleConfig(props.locales)
    const registration = shallowRef<ServiceWorkerRegistration>()

    const isReady = computed(() => Boolean(registration.value))

    const reload = (): void => {
      if (registration.value) {
        skipWaiting(registration.value)
        registration.value = undefined
      }
    }

    onMounted(() => {
      const event = usePwaEvent()

      event.on('updated', (reg) => {
        if (reg) registration.value = reg
      })
    })

    return (): VNode =>
      h(
        Transition,
        { name: 'popup' },
        () =>
          slots.default?.({
            isReady: isReady.value,
            reload,
          }) ||
          (isReady.value
            ? h(
                'button',
                {
                  type: 'button',
                  class: 'sw-update-popup',
                  tabindex: 0,
                  onClick: () => reload(),
                },
                [
                  locale.value.update,
                  h('span', { class: 'icon-wrapper' }, h(UpdateIcon)),
                ],
              )
            : null),
      )
  },
})
