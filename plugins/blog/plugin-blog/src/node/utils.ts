import { sanitizeFileName } from 'vuepress/utils'

export const getPagePath = (path: string): string =>
  encodeURI(path.split('/').map(sanitizeFileName).join('/'))
