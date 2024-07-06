import { getDirname, path } from 'vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const prepareConfigFile = (app, options) => {
    let configImport = '';
    const rootComponents = [];
    if (options.showInstall) {
        configImport += `\
import { PwaInstall as _PwaInstall } from "${path.join(__dirname, '../client/components/PwaInstall.js')}";
`;
        rootComponents.push('PwaInstall');
    }
    if (options.update === 'hint') {
        configImport += `\
import { PwaFoundPopup as _PwaFoundPopup } from "${options.foundComponent ||
            path.join(__dirname, '../client/components/PwaFoundPopup.js')}";
`;
        rootComponents.push('PwaFoundPopup');
    }
    else if (options.update !== 'disable' && options.update !== 'force') {
        configImport += `\
import { PwaReadyPopup as _PwaReadyPopup } from "${options.readyComponent ||
            path.join(__dirname, '../client/components/PwaReadyPopup.js')}";
`;
        rootComponents.push('PwaReadyPopup');
    }
    return app.writeTemp(`pwa/config.js`, `\
import { h }  from "vue";
import { defineClientConfig } from "vuepress/client";
import { setupPwa } from "${path.join(__dirname, '../client/composables/setupPwa.js')}";
import { setupViewPoint } from "${path.join(__dirname, '../client/composables/setupViewPoint.js')}";
${configImport}
import "${path.join(__dirname, '../client/styles/vars.css')}";

const locales = __PWA_LOCALES__;

${rootComponents.map((item) => `const ${item} = () => h(_${item}, { locales })`).join('\n')}

export default defineClientConfig({
  setup: () => {
    setupPwa(__SW_PATH__, __SW_FORCE_UPDATE__);
    setupViewPoint();
  },
  rootComponents: [
${rootComponents.map((item) => `    ${item},`).join('\n')}
  ],
});
`);
};
