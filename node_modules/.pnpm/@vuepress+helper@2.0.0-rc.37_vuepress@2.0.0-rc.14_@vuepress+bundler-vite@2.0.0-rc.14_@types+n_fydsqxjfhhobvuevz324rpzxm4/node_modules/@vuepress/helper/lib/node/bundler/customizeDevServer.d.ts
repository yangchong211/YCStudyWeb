import type { IncomingMessage, ServerResponse } from 'node:http';
import type { App } from 'vuepress/core';
export interface DevServerOptions {
    /**
     * Path to be responded
     */
    path: string;
    /**
     * Respond function
     */
    response: (request: IncomingMessage, response: ServerResponse) => Promise<string | Buffer>;
    /**
     * error msg
     */
    errMsg?: string;
}
/**
 * Handle specific path when running VuePress Dev Server
 *
 * @param config VuePress Bundler config
 * @param app VuePress Node App
 * @param path Path to be responded
 * @param response respond function
 * @param errMsg error msg
 */
export declare const customizeDevServer: (bundlerOptions: unknown, app: App, { errMsg, response: responseHandler, path, }: DevServerOptions) => void;
