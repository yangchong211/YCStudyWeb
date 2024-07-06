import { isString } from '@vuepress/helper';
import { colors } from 'vuepress/utils';
import { logger } from '../logger.js';
export const getTypeOptions = (types) => types.filter((type, index) => {
    const { key } = type;
    if (!isString(key) || !key) {
        logger.error(`Invalid ${colors.magenta('key')} option ${colors.cyan(key)} in ${colors.cyan(`type[${index}]`)}`);
        return false;
    }
    return true;
});
