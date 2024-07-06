/**
 * Get Date info from user input, return null when input is invalid
 *
 * 从用户输入中获取日期信息，输入无效时返回 null
 */
export const getDate = (input) => {
    if (input) {
        if (typeof input === 'number')
            return new Date(input);
        const date = Date.parse(input.toString());
        if (!Number.isNaN(date))
            return new Date(date);
    }
    return null;
};
/**
 * Date sorter from latest to oldest
 *
 * @description Invalid date will appear at last
 *
 * 最新到最旧的日期排序器
 *
 * @description 无效日期将出现在最后
 */
export const dateSorter = (valueA, valueB) => {
    const dateA = getDate(typeof valueA === 'number' ? new Date(valueA) : valueA);
    const dateB = getDate(typeof valueB === 'number' ? new Date(valueB) : valueB);
    if (!dateA)
        return dateB ? 1 : 0;
    if (!dateB)
        return -1;
    return dateB.getTime() - dateA.getTime();
};
