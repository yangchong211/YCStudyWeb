import type { Page } from 'vuepress/core'
import type {
  FeedAuthor,
  FeedCategory,
  FeedChannelOptions,
  FeedContributor,
  FeedEnclosure,
} from './feed.js'
import type { FeedPluginFrontmatter } from './frontmatter.js'

export interface FeedGetter {
  /**
   * Item title getter
   *
   * 项目标题获取器
   */
  title?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => string

  /**
   * Item link getter
   *
   * 项目链接获取器
   */
  link?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => string

  /**
   * Item description getter
   *
   * 项目描述获取器
   */
  description?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => string | null

  /**
   * Item excerpt getter
   *
   * 项目摘要获取器
   */
  excerpt?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => string | null

  /**
   * Item content getter
   *
   * 项目内容获取器
   */
  content?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => string

  /**
   * Item author getter
   *
   * @description The getter should return an empty array when lacking author info
   *
   * 项目作者获取器
   *
   * @description 获取器应在作者信息缺失时返回空数组
   */
  author?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => FeedAuthor[]

  /**
   * Item category getter
   *
   * 项目分类获取器
   */
  category?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => FeedCategory[] | null

  /**
   * Item enclosure getter
   *
   * 项目附件获取器
   */
  enclosure?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => FeedEnclosure | null

  /**
   * Item publish date getter
   *
   * 项目发布日期获取器
   */
  publishDate?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => Date | null

  /**
   * Item last update date getter
   *
   * 项目最后更新日期获取器
   */
  lastUpdateDate?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => Date

  /**
   * Item image getter
   *
   * 项目图片获取器
   */
  image?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => string

  /**
   * Item contributor getter
   *
   * 项目贡献者获取器
   */
  contributor?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => FeedContributor[]

  /**
   * Item copyright getter
   *
   * 项目版权获取器
   */
  copyright?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => string | null
}

export interface BaseFeedPluginOptions {
  /**
   * Whether to output Atom syntax files.
   *
   * 是否启用 Atom 格式输出。
   *
   * @default false
   */
  atom?: boolean

  /**
   * Whether to output JSON syntax files.
   *
   * 是否启用 JSON 格式输出。
   *
   * @default false
   */
  json?: boolean

  /**
   * Whether to output RSS syntax files.
   *
   * 是否启用 RSS 格式输出。
   *
   * @default false
   */
  rss?: boolean

  /**
   * A large image/icon of the feed, probably used as banner.
   *
   * 一个大的图片，用作 feed 展示。
   */
  image?: string

  /**
   * A small icon of the feed, probably used as favicon.
   *
   * 一个小的图标，显示在订阅列表中。
   */
  icon?: string

  /**
   * Maximum output items
   *
   * 输出的最大条目数量
   *
   * @default 100
   */
  count?: number

  /**
   * Custom tags or elements which need to be preserved
   *
   * 需要保留的的自定义组件或元素
   */
  preservedElements?: (string | RegExp)[] | ((tagName: string) => boolean)

  /**
   * A custom filter function, used to filter feed items.
   *
   * Feed 项目过滤器
   */
  filter?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    page: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => boolean

  /**
   * A custom sort function, used to sort feed items.
   *
   * Feed 项目排序器
   */
  sorter?: <
    ExtraPageData extends Record<string, unknown> = Record<never, never>,
    ExtraPageFrontmatter extends Record<string, unknown> = Record<
      string,
      unknown
    >,
    ExtraPageFields extends Record<string, unknown> = Record<never, never>,
  >(
    pageA: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
    pageB: Page<
      ExtraPageData,
      ExtraPageFrontmatter & FeedPluginFrontmatter,
      ExtraPageFields
    >,
  ) => number

  /**
   * Options to init feed channel
   *
   * Feed 频道选项
   */
  channel?: Partial<FeedChannelOptions>

  /**
   * Atom syntax output filename, relative to dest folder.
   *
   * Atom 格式输出路径，相对于输出路径。
   *
   * @default "atom.xml"
   */
  atomOutputFilename?: string

  /**
   * Atom xsl template file content
   *
   * Atom xsl 模板文件内容
   */
  atomXslTemplate?: string

  /**
   * Atom xsl filename, relative to dest folder.
   *
   * Atom xsl 输出路径，相对于输出路径。
   *
   * @default "atom.xsl"
   */
  atomXslFilename?: string

  /**
   * JSON syntax output filename, relative to dest folder.
   *
   * JSON 格式输出路径，相对于输出路径。
   *
   * @default "feed.json"
   */
  jsonOutputFilename?: string

  /**
   * RSS syntax output filename, relative to dest folder.
   *
   * RSS 格式输出路径，相对于输出路径。
   *
   * @default "rss.xml"
   */
  rssOutputFilename?: string

  /**
   * RSS xsl template file content
   *
   * RSS xsl 模板文件内容
   */
  rssXslTemplate?: string

  /**
   * RSS xsl filename, relative to dest folder.
   *
   * RSS xsl 输出路径，相对于输出路径。
   *
   * @default "rss.xsl"
   */
  rssXslFilename?: string

  /**
   * Feed generation controller
   *
   * @description The plugin is providing a reasonable getter by default, if you want full control of feed generating, you can set this field.
   *
   * Feed 生成控制器
   *
   * @description 插件已经在默认情况下提供了合理的获取器，如果你需要完全控制 Feed 生成，你可以设置此项。
   */
  getter?: FeedGetter
}

export interface FeedPluginOptions extends BaseFeedPluginOptions {
  /**
   * Deploy hostname
   *
   * 部署的域名
   */
  hostname: string

  /**
   * Whether enabled in devServer
   *
   * @description For performance reasons, we do not provide hot reload. Reboot your devServer to sync your changes.
   *
   * 是否在开发服务器中启用
   *
   * @description 由于性能原因，我们不提供热更新。重启开发服务器以同步你的变更。
   *
   * @default false
   */
  devServer?: boolean

  /**
   * Hostname to use in devServer
   *
   * 开发服务器使用的主机名
   *
   * @default 'http://localhost:${port}'
   */
  devHostname?: string

  /**
   * Locales options for feed
   *
   * Feed 的多语言选项
   */
  locales?: Record<string, BaseFeedPluginOptions>
}
