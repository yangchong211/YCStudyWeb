import type { DeflateOptions } from 'fflate';
export declare const encodeData: (data: string, level?: DeflateOptions["level"]) => string;
export declare const decodeData: (base64: string) => string;
