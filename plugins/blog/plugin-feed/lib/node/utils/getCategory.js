import { isArray, isString } from '@vuepress/helper';
export const getFeedCategory = (category) => {
    if (category) {
        if (isArray(category) && category.every(isString))
            return category;
        if (isString(category))
            return [category];
    }
    return [];
};
