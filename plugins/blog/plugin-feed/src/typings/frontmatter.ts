import type { PageFrontmatter } from 'vuepress/core'
import type { FeedAuthor, FeedCategory, FeedContributor } from './feed.js'

export type AuthorName = string

export interface AuthorInfo {
  /**
   * Author name
   *
   * 作者姓名
   */
  name: string

  /**
   * Author website
   *
   * 作者网站
   */
  url?: string

  /**
   * Author email
   *
   * 作者 Email
   */
  email?: string
}

export type FrontmatterAuthor =
  | AuthorName
  | AuthorName[]
  | AuthorInfo
  | AuthorInfo[]

export interface FeedFrontmatterOption {
  /**
   * Feed title
   */
  title?: string

  /**
   * Feed description
   *
   * @description Should be plain text
   */
  description?: string

  /**
   * Feed summary
   *
   * @description Should be html content
   */
  summary?: string

  /**
   * Feed content
   */
  content?: string

  /**
   * Feed author
   */
  author?: FeedAuthor[] | FeedAuthor

  /**
   * Feed contributor
   */
  contributor?: FeedContributor[] | FeedContributor

  /**
   * Feed category
   */
  category?: FeedCategory[] | FeedCategory

  /**
   * @description guid should be unique globally
   */
  guid?: string
}

export interface FeedPluginFrontmatter extends PageFrontmatter {
  /**
   * Feed plugin options
   *
   * Feed 插件选项
   */
  feed?: FeedFrontmatterOption | false

  /**
   * Page Author(s)
   *
   * 页面作者
   */
  author?: FrontmatterAuthor

  /**
   * Page Category(ies)
   *
   * 页面分类
   */
  category?: string | string[]
  categories?: string[]

  /**
   * Page Cover
   *
   * 页面封面
   */
  cover?: string

  /**
   * Page Banner
   *
   * 页面 Banner 图
   */
  banner?: string

  /**
   * Copyright text
   *
   * 版权文字
   */
  copyright?: string
}
