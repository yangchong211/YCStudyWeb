import type { App, LocaleConfig } from 'vuepress/core';
import type { RedirectLocaleConfig, RedirectPluginLocaleData } from '../../shared/index.js';
export interface RedirectPluginOptions extends Partial<Omit<RedirectLocaleConfig, 'localeConfig'>> {
    /**
     * Redirect mapping
     *
     * 重定向映射
     */
    config?: Record<string, string> | ((app: App) => Record<string, string>);
    /**
     * Locale language config
     *
     * 多语言语言配置
     */
    localeConfig?: Record<string, string | string[]>;
    /**
     * Locales config
     *
     * 多语言选项
     */
    locales?: LocaleConfig<RedirectPluginLocaleData>;
}
