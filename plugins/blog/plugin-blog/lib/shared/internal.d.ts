export interface CategoryConfig {
    path: string;
    indexes: number[];
}
export type CategoryLocaleMap = Record<
/** Category name */ string, CategoryConfig>;
export interface CategoryLocaleConfig {
    /** Main page of category */
    path: string;
    /** Category map for current locale */
    map: CategoryLocaleMap;
}
export type CategoryMap = Record<
/** Locale Path */ string, CategoryLocaleConfig>;
export type CategoriesMap = Record</** Category key */ string, CategoryMap>;
export interface TypeLocaleConfig {
    path: string;
    indexes: number[];
}
export type TypeMap = Record</** Locale Path */ string, TypeLocaleConfig>;
export type TypesMap = Record</** Type key */ string, TypeMap>;
