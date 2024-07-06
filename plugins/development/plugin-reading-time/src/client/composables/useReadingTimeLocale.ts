import { useLocaleConfig } from '@vuepress/helper/client'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type {
  ReadingTimePluginLocaleConfig,
  ReadingTimePluginLocaleData,
} from '../../shared/index.js'
import { getReadingTimeLocale } from '../utils/index.js'
import { useReadingTimeData } from './useReadingTimeData.js'

declare const __READING_TIME_LOCALES__:
  | ReadingTimePluginLocaleConfig
  | undefined

const DEFAULT_LOCALE = { words: '', time: '' }

const readingTimeLocales =
  typeof __READING_TIME_LOCALES__ === 'undefined'
    ? null
    : __READING_TIME_LOCALES__

export const useReadingTimeLocaleConfig =
  (): ComputedRef<ReadingTimePluginLocaleData | null> =>
    readingTimeLocales
      ? useLocaleConfig(readingTimeLocales)
      : computed(() => null)

export interface ReadingTimeLocale {
  /**
   * Reading time text
   *
   * 阅读时间文字
   */
  time: string

  /**
   * Words count text
   *
   * 字数统计文字
   */
  words: string
}

export const useReadingTimeLocale = (): ComputedRef<ReadingTimeLocale> => {
  if (typeof readingTimeLocales === 'undefined')
    return computed(() => DEFAULT_LOCALE)

  const readingTime = useReadingTimeData()
  const readingTimeLocale = useReadingTimeLocaleConfig()

  return computed(() =>
    readingTime.value && readingTimeLocale.value
      ? getReadingTimeLocale(readingTime.value, readingTimeLocale.value)
      : DEFAULT_LOCALE,
  )
}
