import Artalk from 'artalk'
import { useArtalkOptions } from '../helpers/index.js'
import type { UpdatePageview } from './typings.js'

export const isSupported = true

export const usePageview = (): UpdatePageview => {
  const options = useArtalkOptions()

  return ({ selector }) =>
    Artalk.loadCountWidget({
      server: options.value.server,
      site: options.value.site,
      ...(selector ? { countEl: selector } : {}),
    })
}
