import type { App } from 'vuepress/core';
export declare class Store {
    store: string[];
    constructor();
    addItem(item: string): number;
    addItems(items: string[]): number[];
    clearItem(item: string): void;
    toJSON(): string;
}
export declare const prepareStore: (app: App, store: Store) => Promise<void>;
