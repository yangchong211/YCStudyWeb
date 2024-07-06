import type { ExactLocaleConfig } from '@vuepress/helper/client'
import {
  isLinkHttp,
  isPlainObject,
  isString,
  removeEndingSlash,
  useLocaleConfig,
} from '@vuepress/helper/client'
import { useEventListener } from '@vueuse/core'
import { computed, onMounted, watchEffect } from 'vue'
import { usePageData, usePageFrontmatter } from 'vuepress/client'
import type { CopyrightPluginOptions } from '../../node/options.js'
import type {
  CopyrightPluginFrontmatter,
  CopyrightPluginLocaleData,
  CopyrightPluginPageData,
} from '../../shared/index.js'

declare const __COPYRIGHT_OPTIONS__: Required<
  Pick<
    CopyrightPluginOptions,
    | 'author'
    | 'license'
    | 'canonical'
    | 'global'
    | 'disableCopy'
    | 'disableSelection'
    | 'triggerLength'
    | 'maxLength'
  >
>

declare const __COPYRIGHT_LOCALES__: ExactLocaleConfig<CopyrightPluginLocaleData>

const copyrightOptions = __COPYRIGHT_OPTIONS__
const { canonical } = copyrightOptions

export const setupCopyright = (): void => {
  const frontmatter = usePageFrontmatter<CopyrightPluginFrontmatter>()
  const locale = useLocaleConfig(__COPYRIGHT_LOCALES__)
  const page = usePageData<CopyrightPluginPageData>()

  const enabled = computed(
    () =>
      Boolean(frontmatter.value.copy) ||
      (frontmatter.value.copy !== false && copyrightOptions.global),
  )

  const copyOptions = computed(() =>
    isPlainObject(frontmatter.value.copy) ? frontmatter.value.copy : null,
  )

  const disableCopy = computed(
    () => copyOptions.value?.disableCopy ?? copyrightOptions.disableCopy,
  )

  const disableSelection = computed(() =>
    enabled.value
      ? copyOptions.value?.disableSelection ?? copyrightOptions.disableSelection
      : false,
  )

  const maxLength = computed(() =>
    enabled.value
      ? copyOptions.value?.maxLength ?? copyrightOptions.maxLength
      : 0,
  )

  const triggerLength = computed(
    () => copyOptions.value?.triggerLength ?? copyrightOptions.triggerLength,
  )

  const getLink = (): string =>
    canonical
      ? `${removeEndingSlash(
          isLinkHttp(canonical) ? canonical : `https://${canonical}`,
        )}${page.value.path}`
      : window.location.href

  const getCopyrightContent = (
    authorInfo: string,
    licenseInfo: string,
  ): string => {
    const { author, license, link } = locale.value

    return [
      authorInfo ? author.replace(':author', authorInfo) : '',
      licenseInfo ? license.replace(':license', licenseInfo) : '',
      link.replace(':link', getLink()),
    ]
      .filter((item) => item)
      .join('\n')
  }

  const getCopyright = (): string => {
    if (isString(page.value.copyright))
      return page.value.copyright.replace(':link', getLink())

    const { author, license } = page.value.copyright || {}

    return getCopyrightContent(
      author ?? copyrightOptions.author,
      license ?? copyrightOptions.license,
    )
  }

  const onCopy = (event: ClipboardEvent): void => {
    const selection = getSelection()

    if (selection) {
      const textRange = selection.getRangeAt(0)

      if (enabled.value) {
        const textLength = textRange.toString().length

        if (
          disableCopy.value ||
          (maxLength.value && textLength > maxLength.value)
        )
          return event.preventDefault()

        if (textLength >= triggerLength.value) {
          event.preventDefault()

          const copyright = getCopyright()
          const node = document.createElement('div')

          node.appendChild(selection.getRangeAt(0).cloneContents())

          if (event.clipboardData) {
            event.clipboardData.setData(
              'text/html',
              `${node.innerHTML}<hr><div class="copyright">${copyright.replace(
                /\\n/g,
                '<br>',
              )}</div>`,
            )
            event.clipboardData.setData(
              'text/plain',
              `${
                selection.getRangeAt(0).cloneContents().textContent || ''
              }\n------\n${copyright}`,
            )
          }
        }
      }
    }
  }

  onMounted(() => {
    const appElement = document.querySelector<HTMLDivElement>('#app')!

    useEventListener(appElement, 'copy', onCopy)

    watchEffect(() => {
      appElement.style.userSelect = disableSelection.value ? 'none' : 'auto'
    })
  })
}
