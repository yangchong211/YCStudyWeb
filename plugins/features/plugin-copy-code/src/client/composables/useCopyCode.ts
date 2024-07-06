import { useLocaleConfig, wait } from '@vuepress/helper/client'
import { useClipboard, useEventListener, useMediaQuery } from '@vueuse/core'
import { computed, nextTick, watch } from 'vue'
import { usePageData } from 'vuepress/client'
import type { CopyCodePluginLocaleConfig } from '../../shared/index.js'

import '../styles/copy-code.css'

export interface UseCopyCodeOptions {
  locales: CopyCodePluginLocaleConfig
  selector: string[]

  /** @default 500 */
  delay: number
  /** @default 2000 */
  duration: number
  /** @default false */
  showInMobile?: boolean
  /** @default [] */
  ignoreSelector?: string[]

  /**
   * Transform pre element before copy
   *
   * For example, deleting certain elements before copying, or inserting copyright information.
   *
   * @param preElement `<pre>` clone Node
   *
   * @example
   * ```js
   * {
   *   transform(pre) {
   *     // Remove all `.ignore` elements
   *     pre.querySelectorAll('.ignore').remove()
   *     // insert copyright
   *     pre.innerHTML += `\n Copied by VuePress`
   *   }
   * }
   * ```
   */
  transform?: (preElement: HTMLElement) => void
}

const SHELL_RE = /language-(shellscript|shell|bash|sh|zsh)/

export const useCopyCode = ({
  delay = 500,
  duration = 2000,
  locales,
  selector,
  showInMobile,
  ignoreSelector = [],
  transform,
}: UseCopyCodeOptions): void => {
  if (__VUEPRESS_SSR__) return

  /**
   * On small-screen devices, the copy button is not displayed by default in order to prevent
   * it from obstructing content, as the `:hover` effect can be triggered by `touch` events.
   */
  const is419 = useMediaQuery('(max-width: 419px)')
  const enabled = computed(() => !is419.value || showInMobile)

  const locale = useLocaleConfig(locales)
  const page = usePageData()

  const insertCopyButton = (codeBlockElement: HTMLElement): void => {
    if (codeBlockElement.hasAttribute('copy-code-registered')) return

    const copyElement = document.createElement('button')

    copyElement.type = 'button'
    copyElement.classList.add('vp-copy-code-button')
    copyElement.setAttribute('aria-label', locale.value.copy)
    copyElement.setAttribute('data-copied', locale.value.copied)

    codeBlockElement.parentElement?.insertBefore(copyElement, codeBlockElement)
    codeBlockElement.setAttribute('copy-code-registered', '')
  }

  const appendCopyButton = async (): Promise<void> => {
    document.body.classList.toggle('copy-code-disabled', !enabled.value)
    if (!enabled.value) return

    await nextTick()
    await wait(delay)
    document
      .querySelectorAll<HTMLElement>(selector.join(','))
      .forEach(insertCopyButton)
  }

  watch(() => [page.value.path, enabled.value], appendCopyButton, {
    immediate: true,
  })

  const { copy } = useClipboard({ legacy: true })
  const timeoutIdMap = new WeakMap<HTMLElement, ReturnType<typeof setTimeout>>()

  const copyContent = (
    codeContainer: HTMLDivElement,
    codeContent: HTMLPreElement,
    button: HTMLButtonElement,
  ): void => {
    const clone = codeContent.cloneNode(true) as HTMLPreElement

    if (ignoreSelector.length) {
      clone
        .querySelectorAll(ignoreSelector.join(','))
        .forEach((node) => node.remove())
    }

    if (transform) transform(clone)

    let text = clone.textContent || ''

    if (SHELL_RE.test(codeContainer.className))
      text = text.replace(/^ *(\$|>) /gm, '')

    copy(text).then(() => {
      if (duration <= 0) return

      button.classList.add('copied')
      clearTimeout(timeoutIdMap.get(button))
      const timeoutId = setTimeout(() => {
        button.classList.remove('copied')
        button.blur()
        timeoutIdMap.delete(button)
      }, duration)
      timeoutIdMap.set(button, timeoutId)
    })
  }

  useEventListener('click', (event) => {
    const el = event.target as HTMLElement

    if (
      enabled.value &&
      el.matches('div[class*="language-"] > button.vp-copy-code-button')
    ) {
      const codeContainer = el.parentElement as HTMLDivElement
      const preBlock = el.nextElementSibling as HTMLPreElement | null

      if (!codeContainer || !preBlock) return

      copyContent(codeContainer, preBlock, el as HTMLButtonElement)
    }
  })
}
