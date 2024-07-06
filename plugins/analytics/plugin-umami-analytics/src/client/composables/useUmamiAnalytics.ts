import type { UmamiOptions } from '../../shared/index.js'

declare global {
  interface Window {
    umami: {
      track: {
        (payload?: Record<any, any>): void
        (name: string, data?: Record<any, any>): void
      }
    }
  }
}

/**
 * Add umami analytics to the site
 *
 * @see https://tongji.umami.com/
 * @see https://tongji.umami.com/holmes/Analytics/%E7%99%BE%E5%BA%A6%E7%BB%9F%E8%AE%A1%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C
 * @see https://tongji.umami.com/holmes/Analytics/%E6%8A%80%E6%9C%AF%E6%8E%A5%E5%85%A5%E6%8C%87%E5%8D%97/JS%20API/JS%20API%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3/_trackPageview
 */
export const useUmamiAnalytics = ({
  link = 'https://us.umami.is/script.js',
  id,
  domains,
  autoTrack,
  cache,
  hostUrl,
}: UmamiOptions): void => {
  // avoid duplicated import
  if (window.umami) return

  const script = document.createElement('script')
  script.src = link!
  script.async = true
  script.setAttribute('data-website-id', id)

  if (autoTrack === false) script.setAttribute('data-auto-track', 'false')
  if (cache) script.setAttribute('data-cache', 'true')
  if (domains) script.setAttribute('data-domains', domains.join(','))
  if (hostUrl) script.setAttribute('data-hostUrl', hostUrl)

  document.head.appendChild(script)
}
