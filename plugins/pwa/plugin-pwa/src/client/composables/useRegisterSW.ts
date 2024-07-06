import { withBase } from 'vuepress/client'
import { registerSW } from '../utils/index.js'
import type { PwaEvent } from './usePwaEvent.js'

export const useRegisterSW = async (
  serviceWorkerPath: string,
  event: PwaEvent,
): Promise<void> =>
  registerSW(withBase(serviceWorkerPath), {
    ready(registration) {
      event.emit('ready', registration)
    },

    registered(registration) {
      event.emit('registered', registration)
    },

    cached(registration) {
      event.emit('cached', registration)
    },

    updatefound(registration) {
      event.emit('updatefound', registration)
    },

    updated(registration) {
      const key = 'service-worker-version'
      const version = Number(localStorage.getItem(key) || 0)

      localStorage.setItem(key, (version + 1).toString())
      localStorage.removeItem('manifest')

      event.emit('updated', registration)
    },

    offline() {
      event.emit('offline')
    },

    error(err) {
      event.emit('error', err)
    },
  })
