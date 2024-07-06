import type { AutoLinkOptions, NavItemOptions } from './nav.js';
/**
 * Base nav group, has nav items children
 */
export interface NavGroup<T> extends NavItemOptions {
    /**
     * Link prefix of current group
     */
    prefix?: string;
    /**
     * Link of current group
     */
    link?: string;
    /**
     * Children of current group
     */
    children: T[];
}
export type NavbarLinkOptions = AutoLinkOptions;
export type NavbarGroupOptions = NavGroup<NavbarLinkOptions | NavGroup<NavbarLinkOptions> | string>;
export type NavbarOptions = (NavbarLinkOptions | NavbarGroupOptions | string)[] | false;
