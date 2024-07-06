# markdown-image

<NpmBadge package="@vuepress/plugin-markdown-image" />

Add additional features to your markdown images.

## Usage

```bash
npm i -D @vuepress/plugin-markdown-image@next
```

```ts
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'

export default {
  plugins: [
    markdownImagePlugin({
      // Enable figure
      figure: true,
      // Enable image lazyload
      lazyload: true,
      // Enable image mark
      mark: true,
      // Enable image size
      size: true,
    }),
  ],
}
```

## Guide

### Image Lazyload

The plugin will enable image lazyload using native HTML5 features, so only it's only working on browsers which [support loading=lazy attribute](https://caniuse.com/loading-lazy-attr).

### Image Mark

When you set `mark: true` in plugin options, you can mark pictures by `#light` and `#dark` suffix to let them be displayed under certain color mode. We support both GitHub's markup and the easy markup .

<VPToggleColorModeButton /> (Try to toggle theme mode)

![GitHub Light](/images/icon/github-light.svg#dark)
![GitHub Dark](/images/icon/github-dark.svg#light)

```md
![GitHub Light](/images/icon/github-light.svg#dark)
![GitHub Dark](/images/icon/github-dark.svg#light)
```

#### Advanced

You can pass an object to `mark` to config ID marks, available options are:

```ts
interface ImageMarkOptions {
  /** lightmode only IDs */
  light?: string[]
  /** darkmode only IDs */
  dark?: string[]
}
```

### Image Size

You can use `=widthxheight` to specify the image size when setting `size: true` in plugin options.

```md
![Alt](/example.png =200x300)

![Alt](/example.jpg "Image title" =200x)
![Alt](/example.bmp =x300)
```

The above Markdown will be parsed as:

```html
<img src="/example.png" width="200" height="300" />
<img src="/example.jpg" title="Image title" width="200" />
<img src="/example.bmp" height="300" />
```

### Figure Display

Sometimes, you may want to add a description with image and place it between contents, in this case you should set `figure: true` in plugin options.

If the image is standalone in a line, wrapped or not wrapped by link, it will be displayed as `<figure>` and title (or alt) will be displayed as `<figcaption>`.

![VuePress Logo](/favicon.ico)

[![VuePress Logo](/favicon.ico)](https://vuejs.press/)

![VuePress Logo](/favicon.ico 'VuePress Logo')

[![VuePress Logo](/favicon.ico 'VuePress Logo')](https://vuejs.press/)

![VuePress Logo](https://vuejs.press/images/hero.png "VuePress Logo" =300x300)

```md
![VuePress Logo](/favicon.ico)

[![VuePress Logo](/favicon.ico)](https://vuejs.press/)

![VuePress Logo](/favicon.ico 'VuePress Logo')

[![VuePress Logo](/favicon.ico 'VuePress Logo')](https://vuejs.press/)

![VuePress Logo](https://vuejs.press/images/hero.png "VuePress Logo" =300x300)
```

## Options

### figure

- Type: `boolean`
- Details: Whether enable figure support.

### lazyload

- Type: `boolean`
- Details: Whether to lazy load every image in page in native way.

### mark

- Type: `ImageMarkOptions | boolean`

  ```ts
  interface ImageMarkOptions {
    /** lightmode only IDs */
    light?: string[]
    /** darkmode only IDs */
    dark?: string[]
  }
  ```

- Details: Whether enable image mark support.

### size

- Type: `boolean`
- Details:
  Whether enable image size support.

### obsidianSize

- Type: `boolean`
- Details: Whether enable Obsidian image size support.

### lightmodeSelector

- Type: `string`
- Default: `'html:not(.dark)'`
- Details: The selector to detect light mode.

### darkmodeSelector

- Type: `string`
- Default: `'html.dark'`
- Details: The selector to detect dark mode.

<script setup>
import VPToggleColorModeButton from '@theme/VPToggleColorModeButton.vue'
</script>
