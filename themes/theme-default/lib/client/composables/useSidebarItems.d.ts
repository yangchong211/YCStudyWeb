import type { MenuItem } from '@vuepress/helper/client';
import type { ComputedRef, InjectionKey, Ref } from 'vue';
import type { PageData } from 'vuepress/client';
import type { SidebarArrayOptions, SidebarObjectOptions, SidebarOptions } from '../../shared/index.js';
import type { SidebarHeaderItem, SidebarItem } from '../typings.js';
export type HeadersRef = Ref<MenuItem[]>;
export declare const headersRef: HeadersRef;
export declare const setupHeaders: () => void;
export declare const useHeaders: () => HeadersRef;
export type SidebarItemsRef = ComputedRef<SidebarItem[]>;
export declare const sidebarItemsSymbol: InjectionKey<SidebarItemsRef>;
/**
 * Inject sidebar items global computed
 */
export declare const useSidebarItems: () => SidebarItemsRef;
/**
 * Create sidebar items ref and provide as global computed in setup
 */
export declare const setupSidebarItems: () => void;
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
export declare const resolveSidebarItems: (sidebarConfig: false | SidebarOptions, page: PageData, path: string, routeLocale: string, headers: MenuItem[]) => SidebarItem[];
/**
 * Util to transform page header to sidebar item
 */
export declare const resolveSidebarHeaderItem: (header: MenuItem) => SidebarHeaderItem;
export declare const resolveSidebarHeaderItems: (headers?: MenuItem[]) => SidebarHeaderItem[];
/**
 * Resolve current page and its header to sidebar items if the config is `heading`
 */
export declare const resolveSidebarHeadingItem: (page: PageData, headers: MenuItem[]) => SidebarItem[];
/**
 * Resolve sidebar items if the config is an array
 */
export declare const resolveArraySidebarItems: (sidebarConfig: SidebarArrayOptions, headers: MenuItem[], path: string, prefix?: string) => SidebarItem[];
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
export declare const resolveMultiSidebarItems: (sidebarConfig: SidebarObjectOptions, page: PageData, headers: MenuItem[], path: string) => SidebarItem[];
