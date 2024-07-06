import { h }  from "vue";
import { defineClientConfig } from "vuepress/client";
import { setupPwa } from "/Users/yangchong/Downloads/ecosystem-main/plugins/pwa/plugin-pwa/lib/client/composables/setupPwa.js";
import { setupViewPoint } from "/Users/yangchong/Downloads/ecosystem-main/plugins/pwa/plugin-pwa/lib/client/composables/setupViewPoint.js";
import { PwaReadyPopup as _PwaReadyPopup } from "/Users/yangchong/Downloads/ecosystem-main/plugins/pwa/plugin-pwa/lib/client/components/PwaReadyPopup.js";

import "/Users/yangchong/Downloads/ecosystem-main/plugins/pwa/plugin-pwa/lib/client/styles/vars.css";

const locales = __PWA_LOCALES__;

const PwaReadyPopup = () => h(_PwaReadyPopup, { locales })

export default defineClientConfig({
  setup: () => {
    setupPwa(__SW_PATH__, __SW_FORCE_UPDATE__);
    setupViewPoint();
  },
  rootComponents: [
    PwaReadyPopup,
  ],
});
