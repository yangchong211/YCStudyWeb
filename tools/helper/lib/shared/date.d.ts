/**
 * Get Date info from user input, return null when input is invalid
 *
 * 从用户输入中获取日期信息，输入无效时返回 null
 */
export declare const getDate: (input: unknown) => Date | null;
/**
 * Date sorter from latest to oldest
 *
 * @description Invalid date will appear at last
 *
 * 最新到最旧的日期排序器
 *
 * @description 无效日期将出现在最后
 */
export declare const dateSorter: (valueA: Date | number | string | undefined, valueB: Date | number | string | undefined) => number;
