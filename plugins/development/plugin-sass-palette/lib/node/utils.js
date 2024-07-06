import { Logger } from '@vuepress/helper';
import { fs, getDirname, path } from 'vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const EMPTY_FILE = path.resolve(__dirname, '../../styles/empty.scss');
export const PLUGIN_NAME = '@vuepress/plugin-sass-palette';
export const logger = new Logger(PLUGIN_NAME);
export const getPath = (path) => fs.pathExistsSync(path) ? path : EMPTY_FILE;
export const getIdPrefix = (id) => (id ? `${id}-` : '');
