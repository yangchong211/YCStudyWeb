import type { DocsearchOptions } from '../../shared/index.js';
type FacetFilters = Required<DocsearchOptions>['searchParameters']['facetFilters'];
/**
 * Get facet filters for current lang
 */
export declare const getFacetFilters: (rawFacetFilters: FacetFilters, lang: string) => FacetFilters;
export {};
