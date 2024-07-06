/**
 * Logger utils
 */
export declare class Logger {
    /**
     * Plugin/Theme name
     */
    private name;
    constructor(
    /**
     * Plugin/Theme name
     */
    name?: string);
    private init;
    /**
     * Create a loading spinner with text
     */
    load(text: string): {
        succeed: (text?: string) => void;
        fail: (text?: string) => void;
    };
    /**
     * Log info msg
     *
     * @param text Hint text
     * @returns Ora Instance
     */
    info(text?: string, ...args: any[]): void;
    /**
     * Log success msg
     */
    succeed(text?: string, ...args: any[]): void;
    /**
     * Log warning msg
     */
    warn(text?: string, ...args: any[]): void;
    /**
     * Log error msg
     */
    error(text?: string, ...args: any[]): void;
}
