import { getRealPath } from '@vuepress/helper';
import { CLIENT_FOLDER } from '../utils.js';
const { url } = import.meta;
export const prepareClientConfigFile = async (app, mathRenderer, options) => {
    let content = '';
    if (mathRenderer === 'katex') {
        content += `\
import "${getRealPath('katex/dist/katex.min.css', url)}";
import "${CLIENT_FOLDER}styles/katex.scss";
${options.copy
            ? `\
import { useKatexCopy } from "${CLIENT_FOLDER}composables/useKatexCopy.js";

export default {
  setup: () => {
    useKatexCopy();
  }
};
`
            : ''}`;
    }
    else if (mathRenderer === 'mathjax') {
        content += `\
import './mathjax.css';
`;
    }
    return app.writeTemp(`md-enhance/config.js`, content);
};
