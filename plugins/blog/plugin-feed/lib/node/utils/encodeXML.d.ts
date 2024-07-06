import type { ElementCompact } from 'xml-js';
/**
 * @see https://stackoverflow.com/questions/223652/is-there-a-way-to-escape-a-cdata-end-token-in-xml
 */
export declare const encodeCDATA: (content: string) => string;
export declare const encodeXMLContent: (content: string) => string;
export declare const encodeXML: (content: ElementCompact) => ElementCompact;
