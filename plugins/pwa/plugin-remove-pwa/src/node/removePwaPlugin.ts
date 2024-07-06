import type { PluginObject } from 'vuepress/core'
import { removeLeadingSlash } from 'vuepress/shared'
import { fs } from 'vuepress/utils'

export interface RemovePwaPluginOptions {
  /**
   * Original service worker cache prefix
   *
   * 原始 service worker 缓存前缀
   *
   * @default "workbox"
   */
  cachePrefix?: string

  /**
   * Original service worker location relative to dest folder
   *
   * 相对于 dest 文件夹的原始 service worker 位置
   *
   * @default "service-worker.js"
   */
  swLocation?: string
}

export const removePwaPlugin = ({
  cachePrefix = 'workbox',
  swLocation = 'service-worker.js',
}: RemovePwaPluginOptions): PluginObject => ({
  name: '@vuepress/plugin-remove-pwa',

  onGenerated: async (app): Promise<void> => {
    const SERVICE_WORKER_CONTENT = `self.addEventListener("install",(()=>self.skipWaiting())),self.addEventListener("activate",(()=>{const e=[${JSON.stringify(cachePrefix)},"precache-v2","undefined"!=typeof registration?registration.scope:""].filter((e=>e&&e.length>0)).join("-");self.caches.open(e).then((e=>e.keys())).then((e=>e.forEach((e=>cache.delete(e))))).then((()=>{self.clients.claim().then((()=>{})).then((()=>self.registration.unregister())).then((()=>self.clients.matchAll())).then((e=>e.forEach((e=>e.navigate(e.url)))))}))}));`

    await fs.writeFile(
      app.dir.dest(removeLeadingSlash(swLocation)),
      SERVICE_WORKER_CONTENT,
      'utf-8',
    )
  },
})
