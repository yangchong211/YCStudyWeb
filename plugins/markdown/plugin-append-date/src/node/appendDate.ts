import { startsWith } from '@vuepress/helper'
import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { Page } from 'vuepress/core'
import { fs } from 'vuepress/utils'
import {
  getDateString,
  getFullDateString,
  getTimeString,
} from './formatDate.js'
import type { AppendDatePluginOptions } from './options.js'

export const appendDateToPage = async (
  { key = 'date', format = 'date' }: AppendDatePluginOptions,
  { data, filePath, frontmatter }: Page<GitPluginPageData>,
): Promise<void> => {
  if (frontmatter[key] || !filePath) return

  const { createdTime } = data.git

  if (!createdTime) return

  const date = new Date(createdTime)

  const text =
    format === 'time'
      ? getTimeString(date)
      : format === 'full'
        ? getFullDateString(date)
        : getDateString(date)

  frontmatter[key] = new Date(createdTime)

  const markdownContent = await fs.readFile(filePath, 'utf-8')

  await fs.writeFile(
    filePath,
    startsWith(markdownContent, '---\n')
      ? `---\n${key}: ${text}\n${markdownContent.substring(4)}`
      : `---\n${key}: ${text}\n---\n\n${markdownContent}`,
    'utf-8',
  )
}
