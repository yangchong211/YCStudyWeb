# photo-swipe

<NpmBadge package="@vuepress/plugin-photo-swipe" />

This plugin will make the pictures in the body of the page enter the preview mode when clicked.

## Usage

```bash
npm i -D @vuepress/plugin-photo-swipe@next
```

```ts
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'

export default {
  plugins: [
    photoSwipePlugin({
      // options
    }),
  ],
}
```

In preview mode, you can:

- Swipe left and right to preview other pictures on the page in order
- View the description of the picture
- Zoom in and zoom out the picture
- View pictures in fullscreen
- Download pictures
- Share pictures

::: tip

- Besides clicking "×" in the upper right corner to exit the preview mode, scrolling up and down more than a certain distance will also exit preview mode.
- On mobile devices, or using the PC trackpad, you can use pan and zoom gestures to pan and zoom in the preview mode.

:::

## Options

### selector

- Type: `string | string[]`
- Default: `".theme-default-content :not(a) > img:not([no-view])"`
- Details: Image selector

### download

- Type: `boolean`
- Default: `true`
- Details: Whether to show the download button.

### fullscreen

- Type: `boolean`
- Default: `true`
- Details: Whether to show the fullscreen button.

### scrollToClose

- Type: `boolean`
- Default: `true`
- Details: Whether close the current image when scrolling.

### delay

- Type: `number`
- Default: `800`
- Details:

  The delay of operating dom, in ms.

  ::: tip

  If the theme you are using has a switching animation, it is recommended to configure this option to `Switch animation duration + 200`.

  :::

### locales

- Type: `PhotoSwipePluginLocaleConfig`

  ```ts
  interface PhotoSwipePluginLocaleData {
    /**
     * Close button label text
     */
    close: string

    /**
     * Full screen button label text
     */
    fullscreen: string

    /**
     * Share button label text
     */
    share: string

    /**
     * Zoom button label text
     */
    zoom: string

    /**
     * Previous image button label text
     */
    prev: string

    /**
     * Next image button label text
     */
    next: string

    /**
     * Share button config
     */
    buttons: PhotoSwipeDefaultUI.ShareButtonData[]
  }

  interface PhotoSwipePluginLocaleConfig {
    [localePath: string]: PhotoSwipePluginLocaleData
  }
  ```

- Details: Locales config for photo-swipe plugin.

- Example:

  ```ts
  import { defineUserConfig } from 'vuepress'
  import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'

  export default defineUserConfig({
    locales: {
      '/': {
        // this is a supported language
        lang: 'en-US',
      },
      '/xx/': {
        // the plugin does not support this language
        lang: 'mm-NN',
      },
    },

    plugins: [
      photoSwipePlugin({
        locales: {
          '/': {
            // Override share label text
            share: 'Share with friends',
          },

          '/xx/': {
            // Complete locale config for `mm-NN` language here
          },
        },
      }),
    ],
  })
  ```

::: details Built-in Supported Languages

- **Simplified Chinese** (zh-CN)
- **Traditional Chinese** (zh-TW)
- **English (United States)** (en-US)
- **German** (de-DE)
- **German (Australia)** (de-AT)
- **Russian** (ru-RU)
- **Ukrainian** (uk-UA)
- **Vietnamese** (vi-VN)
- **Portuguese (Brazil)** (pt-BR)
- **Polish** (pl-PL)
- **French** (fr-FR)
- **Spanish** (es-ES)
- **Slovak** (sk-SK)
- **Japanese** (ja-JP)
- **Turkish** (tr-TR)
- **Korean** (ko-KR)
- **Finnish** (fi-FI)
- **Indonesian** (id-ID)
- **Dutch** (nl-NL)

:::

## Frontmatter

### photoSwipe

- Type: `string | false`
- Details:

Image selector for the current page, or `false` to disable photo-swipe in current page.

## Client Config

### definePhotoSwipeConfig

Options passed to [`photo-swipe`](http://photoswipe.com/)

```ts title=".vuepress/client.ts"
import { definePhotoSwipeConfig } from '@vuepress/plugin-photo-swipe/client'

definePhotoSwipeConfig({
  // set photoswipe options here
})

export default {}
```

## API

You can also call photoswipe with apis.

`createPhotoSwipe` allows you to programmatically view images links with PhotoSwipe:

```vue
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { createPhotoSwipe } from "@vuepress/plugin-photo-swipe/client";

let state: PhotoSwipeState | null = null;

const openPhotoSwipe = (index: number) => {
  state?.open(index - 1);
};

onMounted(async () => {
  // create a new photoswipe instance with image links
  state=  await createPhotoSwipe(
    [
      'https://exmaple.com/image1.png'
      'https://exmaple.com/image2.png'
      'https://exmaple.com/image3.png'
    ],
    {
      // photoswipe options
    }
  );
});

onUnmounted(() => {
  state?.destroy()
})
</script>

<template>
  <button v-for="i in 3" @click="openPhotoSwipe(i)">open photo {{ i }}</button>
</template>
```

`registerPhotoSwipe` allows you to register photoswipe for the given image elements:

```vue
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { registerPhotoSwipe } from '@vuepress/plugin-photo-swipe/client'

let destroy: () => void | null = null

onMounted(async () => {
  await nextTick()

  const images = Array.from(document.querySelectorAll('img'))

  // create a new photoswipe instance on image elements
  state = await registerPhotoSwipe(images, {
    // photoswipe options
  })
})

onUnmounted(() => {
  destroy?.()
})
</script>
```

## Styles

You can customize the style via CSS variables:

@[code css](@vuepress/plugin-photo-swipe/src/client/styles/vars.css)
