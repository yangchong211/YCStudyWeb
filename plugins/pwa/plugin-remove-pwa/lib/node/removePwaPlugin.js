import { removeLeadingSlash } from 'vuepress/shared';
import { fs } from 'vuepress/utils';
export const removePwaPlugin = ({ cachePrefix = 'workbox', swLocation = 'service-worker.js', }) => ({
    name: '@vuepress/plugin-remove-pwa',
    onGenerated: async (app) => {
        const SERVICE_WORKER_CONTENT = `self.addEventListener("install",(()=>self.skipWaiting())),self.addEventListener("activate",(()=>{const e=[${JSON.stringify(cachePrefix)},"precache-v2","undefined"!=typeof registration?registration.scope:""].filter((e=>e&&e.length>0)).join("-");self.caches.open(e).then((e=>e.keys())).then((e=>e.forEach((e=>cache.delete(e))))).then((()=>{self.clients.claim().then((()=>{})).then((()=>self.registration.unregister())).then((()=>self.clients.matchAll())).then((e=>e.forEach((e=>e.navigate(e.url)))))}))}));`;
        await fs.writeFile(app.dir.dest(removeLeadingSlash(swLocation)), SERVICE_WORKER_CONTENT, 'utf-8');
    },
});
