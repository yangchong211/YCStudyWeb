export class Store {
    store;
    constructor() {
        this.store = [];
    }
    addItem(item) {
        const index = this.store.indexOf(item);
        if (index === -1) {
            this.store.push(item);
            return this.store.length - 1;
        }
        return index;
    }
    addItems(items) {
        return items.map((item) => this.addItem(item));
    }
    clearItem(item) {
        const index = this.store.indexOf(item);
        if (index !== -1)
            this.store[index] = '';
    }
    toJSON() {
        return JSON.stringify(this.store);
    }
}
export const prepareStore = async (app, store) => {
    await app.writeTemp(`blog/store.js`, `\
export const store = ${store.toJSON()};
`);
};
