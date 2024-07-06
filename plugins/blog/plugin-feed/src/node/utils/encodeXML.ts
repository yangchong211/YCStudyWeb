import { entries, fromEntries, isArray, isPlainObject } from '@vuepress/helper'
import type { ElementCompact } from 'xml-js'

/**
 * @see https://stackoverflow.com/questions/223652/is-there-a-way-to-escape-a-cdata-end-token-in-xml
 */
export const encodeCDATA = (content: string): string =>
  content.replace(/]]>/g, ']]]]><![CDATA[>')

export const encodeXMLContent = (content: string): string =>
  content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export const encodeXML = (content: ElementCompact): ElementCompact =>
  fromEntries(
    entries(content).map(([key, value]) => {
      if (key === '_attributes' && value)
        return [
          key,
          fromEntries(
            entries(value as Record<string, string | number | undefined>).map(
              ([key, value]) => [
                key,
                value ? encodeXMLContent(value.toString()) : undefined,
              ],
            ),
          ),
        ]

      if (key === '_text')
        return [key, encodeXMLContent((value as string | number).toString())]
      if (key === '_cdata') return [key, encodeCDATA(value as string)]
      if (key === '_comment' || key === '_instruction') return [key, value]

      if (isArray(value))
        return [key, value.map((item) => encodeXML(item as ElementCompact))]

      if (isPlainObject(value)) return [key, encodeXML(value as ElementCompact)]

      return [key, encodeXMLContent(String(value))]
    }),
  ) satisfies ElementCompact
