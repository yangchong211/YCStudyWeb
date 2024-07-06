/**
 * Options for @vuepress/plugin-umami-analytics
 */
export interface UmamiOptions {
  /**
   * The website ID in umami Analytics
   *
   * Umami 统计中的网站 ID。
   */
  id: string

  /**
   * Link of umami analytics script
   *
   * Umami 统计的脚本链接
   *
   * @default 'https://us.umami.is/script.js'
   */
  link?: string

  /**
   * By default, Umami tracks all pageviews and events for you automatically. You can disable this behavior and track events yourself using the tracker functions.
   *
   * 默认情况下，Umami 会自动跟踪所有页面浏览量和事件。你可以禁用此行为并使用追踪器功能自行追踪事件。
   *
   * @default true
   */
  autoTrack?: boolean

  /**
   * Cache data to improve the performance of the tracking script.
   *
   * 缓存数据以提高追踪脚本的性能。
   */
  cache?: boolean

  /**
   * Let the tracker only run on specific domains.
   *
   * 让跟踪器仅在特定的域名上运行。
   */
  domains?: string[]

  /**
   * Location to send data
   *
   * 发送数据的位置
   *
   * @default link
   */
  hostUrl?: string
}
