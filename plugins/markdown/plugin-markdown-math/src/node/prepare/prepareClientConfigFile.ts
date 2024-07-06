import { getRealPath } from '@vuepress/helper'
import type { App } from 'vuepress'
import type {
  MarkdownKatexPluginOptions,
  MarkdownMathPluginOptions,
} from '../options.js'
import { CLIENT_FOLDER } from '../utils.js'

const { url } = import.meta

export const prepareClientConfigFile = async (
  app: App,
  mathRenderer: 'katex' | 'mathjax',
  options: MarkdownMathPluginOptions,
): Promise<string> => {
  let content = ''

  if (mathRenderer === 'katex') {
    content += `\
import "${getRealPath('katex/dist/katex.min.css', url)}";
import "${CLIENT_FOLDER}styles/katex.scss";
${
  (options as MarkdownKatexPluginOptions).copy
    ? `\
import { useKatexCopy } from "${CLIENT_FOLDER}composables/useKatexCopy.js";

export default {
  setup: () => {
    useKatexCopy();
  }
};
`
    : ''
}`
  } else if (mathRenderer === 'mathjax') {
    content += `\
import './mathjax.css';
`
  }

  return app.writeTemp(`md-enhance/config.js`, content)
}
