import { pageviewCount } from '@waline/client/pageview'
import { useWalineOptions } from '../helpers/index.js'
import type { UpdatePageview } from './typings.js'

export const isSupported = true

export const usePageview = (): UpdatePageview => {
  const walineOptions = useWalineOptions()

  return (options) =>
    pageviewCount({ serverURL: walineOptions.value.serverURL, ...options })
}
