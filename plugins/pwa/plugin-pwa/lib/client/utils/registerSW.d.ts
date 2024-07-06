import type { Hooks } from 'register-service-worker';
/**
 * Register serviceWorker under `serviceWorkerPath`
 *
 * @param serviceWorkerPath Service Worker path
 * @param hooks Service worker hooks
 * @param showStatus Whether to show status in console
 *
 * 在 `serviceWorkerPath` 下注册 Service Worker
 *
 * @param serviceWorkerPath Service Worker 路径
 * @param hooks Service Worker 钩子
 * @param showStatus 是否在控制台显示状态
 */
export declare const registerSW: (serviceWorkerPath: string, hooks?: Hooks, showStatus?: boolean) => Promise<void>;
