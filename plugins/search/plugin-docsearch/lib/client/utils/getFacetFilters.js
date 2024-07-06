/**
 * Get facet filters for current lang
 */
export const getFacetFilters = (rawFacetFilters = [], lang) => [
    `lang:${lang}`,
    ...(Array.isArray(rawFacetFilters)
        ? rawFacetFilters
        : [rawFacetFilters]),
];
