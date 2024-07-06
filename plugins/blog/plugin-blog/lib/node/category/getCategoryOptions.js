import { isFunction, isString } from '@vuepress/helper';
import { colors } from 'vuepress/utils';
import { logger } from '../logger.js';
export const getCategoryOptions = (category) => category.filter(({ key, getter }, index) => {
    // check key option
    if (!isString(key) || !key) {
        logger.error(`Invalid ${colors.magenta('key')} option ${colors.cyan(key)} in ${colors.cyan(`category[${index}]`)}`);
        return false;
    }
    // check getter option
    if (!isFunction(getter)) {
        logger.error(`Invalid ${colors.magenta('getter')} option in "${colors.cyan(`category[${index}]`)}", it should be a function!`);
        return false;
    }
    return true;
});
