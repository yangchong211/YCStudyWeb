import { noopModule } from '@vuepress/helper'
import type { CommentPluginOptions } from './options.js'
import { CLIENT_FOLDER, logger, PLUGIN_NAME } from './utils.js'

const COMMENT_SERVICES = ['Artalk', 'Giscus', 'Waline', 'Twikoo']
const PAGEVIEW_SERVICES = ['Artalk', 'Waline']

export const getServiceComponent = (provider = 'None'): string => {
  if (COMMENT_SERVICES.includes(provider))
    return `${CLIENT_FOLDER}components/${provider}Comment.js`

  if (provider !== 'None') logger.error(`Invalid provider: ${provider}`)

  return noopModule
}

export const getPageviewChunk = (provider = 'None'): string =>
  `${CLIENT_FOLDER}pageview/${PAGEVIEW_SERVICES.includes(provider) ? provider.toLowerCase() : 'noop'}.js`

export const getAlias = (
  options: CommentPluginOptions,
): Record<string, string> => ({
  [`${PLUGIN_NAME}/service`]: getServiceComponent(options.provider),
  [`${PLUGIN_NAME}/pageview`]: getPageviewChunk(options.provider),
})

export const getProviderPackage = (provider?: string): string | null => {
  switch (provider) {
    case 'Artalk':
      return 'artalk'
    case 'Twikoo':
      return 'twikoo'
    case 'Waline':
      return '@waline/client'

    default:
      return null
  }
}
