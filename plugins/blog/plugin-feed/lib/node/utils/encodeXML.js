import { entries, fromEntries, isArray, isPlainObject } from '@vuepress/helper';
/**
 * @see https://stackoverflow.com/questions/223652/is-there-a-way-to-escape-a-cdata-end-token-in-xml
 */
export const encodeCDATA = (content) => content.replace(/]]>/g, ']]]]><![CDATA[>');
export const encodeXMLContent = (content) => content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
export const encodeXML = (content) => fromEntries(entries(content).map(([key, value]) => {
    if (key === '_attributes' && value)
        return [
            key,
            fromEntries(entries(value).map(([key, value]) => [
                key,
                value ? encodeXMLContent(value.toString()) : undefined,
            ])),
        ];
    if (key === '_text')
        return [key, encodeXMLContent(value.toString())];
    if (key === '_cdata')
        return [key, encodeCDATA(value)];
    if (key === '_comment' || key === '_instruction')
        return [key, value];
    if (isArray(value))
        return [key, value.map((item) => encodeXML(item))];
    if (isPlainObject(value))
        return [key, encodeXML(value)];
    return [key, encodeXMLContent(String(value))];
}));
