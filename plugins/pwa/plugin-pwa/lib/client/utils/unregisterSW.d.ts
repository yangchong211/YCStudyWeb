/**
 * Call `unregister()` inside current active worker
 *
 * @returns `true` if unregister success, `false` if unregister failed
 *
 * 在当前激活的 Service Worker 中调用 `unregister()`
 *
 * @returns `true` 表示注销成功，`false` 表示注销失败
 */
export declare const unregisterSW: () => Promise<boolean>;
