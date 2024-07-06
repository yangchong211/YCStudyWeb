import { getFeedChannelOptions } from '../getFeedChannelOptions.js';
import { getFeedLinks } from '../getFeedLinks.js';
export class FeedStore {
    categories = new Set();
    contributors = [];
    items = [];
    _contributorKeys = new Set();
    channel;
    links;
    constructor(app, localeOptions, localePath) {
        this.channel = getFeedChannelOptions(app, localeOptions, localePath);
        this.links = getFeedLinks(app, localeOptions, localePath);
    }
    /**
     * Add category to store
     */
    addCategory = (category) => {
        this.categories.add(category.name);
    };
    /**
     * Add contributor to store
     */
    addContributor = (contributor) => {
        // use keys to avoid adding same contributor
        const key = contributor.email || contributor.name;
        if (key && !this._contributorKeys.has(key)) {
            this._contributorKeys.add(key);
            this.contributors.push(contributor);
        }
    };
    /**
     * Add a feed item
     */
    add = (item) => {
        if (item.isValid) {
            const { category, contributor } = item;
            this.items.push(item);
            category?.forEach(this.addCategory);
            contributor?.forEach(this.addContributor);
        }
    };
}
