import { isArray, isPlainObject, isString } from '@vuepress/helper'
import type { FeedAuthor, FrontmatterAuthor } from '../../typings/index.js'

const isFeedAuthor = (author: unknown): author is FeedAuthor =>
  isPlainObject(author) && isString(author.name)

export const getFeedAuthor = (
  author: FrontmatterAuthor | false | undefined,
): FeedAuthor[] => {
  if (author) {
    if (isArray(author))
      return author
        .map((item) =>
          isString(item) ? { name: item } : isFeedAuthor(item) ? item : null,
        )
        .filter((item): item is FeedAuthor => item !== null)

    if (isString(author)) return [{ name: author }]

    if (isFeedAuthor(author)) return [author]

    console.error(
      `Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string | undefined\`, but got`,
      author,
    )

    return []
  }

  return []
}
