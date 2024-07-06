import type { App } from 'vuepress/core'
import type {
  FeedCategory,
  FeedChannelOptions,
  FeedContributor,
} from '../../typings/index.js'
import { getFeedChannelOptions } from '../getFeedChannelOptions.js'
import type { FeedLinks } from '../getFeedLinks.js'
import { getFeedLinks } from '../getFeedLinks.js'
import type { ResolvedFeedOptions } from '../getFeedOptions.js'
import type { FeedItem } from './item.js'

export class FeedStore {
  public categories = new Set<string>()
  public contributors: FeedContributor[] = []
  public items: FeedItem[] = []

  private _contributorKeys = new Set<string>()
  public channel: FeedChannelOptions
  public links: FeedLinks
  constructor(
    app: App,
    localeOptions: ResolvedFeedOptions,
    localePath: string,
  ) {
    this.channel = getFeedChannelOptions(app, localeOptions, localePath)
    this.links = getFeedLinks(app, localeOptions, localePath)
  }

  /**
   * Add category to store
   */
  private addCategory = (category: FeedCategory): void => {
    this.categories.add(category.name)
  }

  /**
   * Add contributor to store
   */
  private addContributor = (contributor: FeedContributor): void => {
    // use keys to avoid adding same contributor
    const key = contributor.email || contributor.name

    if (key && !this._contributorKeys.has(key)) {
      this._contributorKeys.add(key)
      this.contributors.push(contributor)
    }
  }

  /**
   * Add a feed item
   */
  public add = (item: FeedItem): void => {
    if (item.isValid) {
      const { category, contributor } = item

      this.items.push(item)
      category?.forEach(this.addCategory)
      contributor?.forEach(this.addContributor)
    }
  }
}
