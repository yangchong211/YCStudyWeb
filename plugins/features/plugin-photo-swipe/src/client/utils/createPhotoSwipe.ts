import { useEventListener } from '@vueuse/core'
import type PhotoSwipe from 'photoswipe'
import type { SlideData } from 'photoswipe'
import type { PhotoSwipeOptions } from '../helpers/index.js'
import { LOADING_ICON } from './icon.js'
import { getImageUrlInfo } from './images.js'
import { initPhotoSwipe } from './initPhotoSwipe.js'
import type { PhotoSwipeBehaviorOptions } from './typings.js'

export interface PhotoSwipeState {
  open: (index: number) => void
  close: () => void
  destroy: () => void
}

export const createPhotoSwipe = (
  images: string[],
  {
    scrollToClose = true,
    download = true,
    fullscreen = true,
    ...photoSwipeOptions
  }: PhotoSwipeOptions & PhotoSwipeBehaviorOptions,
): Promise<PhotoSwipeState> =>
  import(/* webpackChunkName: "photo-swipe" */ 'photoswipe').then(
    ({ default: PhotoSwipe }) => {
      let currentPhotoSwipe: PhotoSwipe | null = null

      const dataSource = images.map<SlideData>((image) => ({
        html: LOADING_ICON,
        msrc: image,
      }))

      images.forEach((image, index) => {
        getImageUrlInfo(image).then((data) => {
          dataSource.splice(index, 1, data)
          currentPhotoSwipe?.refreshSlideContent(index)
        })
      })

      const destroy = useEventListener('wheel', () => {
        currentPhotoSwipe?.close()
      })

      return {
        open: (index: number): void => {
          currentPhotoSwipe?.close()

          currentPhotoSwipe = new PhotoSwipe({
            preloaderDelay: 0,
            showHideAnimationType: 'zoom',
            ...photoSwipeOptions,
            dataSource,
            index,
            ...(scrollToClose
              ? { closeOnVerticalDrag: true, wheelToZoom: false }
              : {}),
          })

          initPhotoSwipe(currentPhotoSwipe, { download, fullscreen })

          currentPhotoSwipe.addFilter('placeholderSrc', () => images[index])
          currentPhotoSwipe.init()
        },
        close: (): void => {
          currentPhotoSwipe?.close()
        },
        destroy,
      }
    },
  )
