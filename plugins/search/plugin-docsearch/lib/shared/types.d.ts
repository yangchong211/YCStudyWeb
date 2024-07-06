import type { DocSearchProps } from '@docsearch/react';
import type { LocaleConfig } from 'vuepress/shared';
export type DocsearchLocaleOptions = Partial<Pick<DocSearchProps, 'appId' | 'apiKey' | 'indexName' | 'placeholder' | 'searchParameters' | 'maxResultsPerGroup' | 'disableUserPersonalization' | 'initialQuery' | 'translations'>>;
export interface DocsearchOptions extends DocsearchLocaleOptions {
    locales?: LocaleConfig<DocsearchLocaleOptions>;
}
