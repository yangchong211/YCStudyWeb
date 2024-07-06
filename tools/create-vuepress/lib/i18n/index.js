import inquirer from 'inquirer';
import { en } from './en.js';
import { zh } from './zh.js';
export * from './typings.js';
const i18n = {
    'english (US)': en,
    '简体中文': zh,
};
export const getLanguage = async () => {
    const { language } = await inquirer.prompt([
        {
            name: 'language',
            type: 'list',
            message: 'Select a language to display / 选择显示语言',
            choices: ['english (US)', '简体中文'],
        },
    ]);
    return {
        lang: language,
        locale: i18n[language],
    };
};
