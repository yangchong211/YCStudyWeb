import { isArray, isPlainObject, isString } from '@vuepress/helper'
import type { AuthorInfo, SeoAuthor } from '../../typings/index.js'

const isSEOAuthor = (author: unknown): author is SeoAuthor =>
  isPlainObject(author) && isString(author.name)

export const getSEOAuthor = (
  author: SeoAuthor | false | undefined,
): AuthorInfo[] => {
  if (author) {
    if (isArray(author))
      return author
        .map((item) =>
          isString(item) ? { name: item } : isSEOAuthor(item) ? item : null,
        )
        .filter((item): item is AuthorInfo => item !== null)

    if (isString(author)) return [{ name: author }]

    if (isSEOAuthor(author)) return [author]

    console.error(
      `Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string | undefined\`, but got`,
      author,
    )

    return []
  }

  return []
}
