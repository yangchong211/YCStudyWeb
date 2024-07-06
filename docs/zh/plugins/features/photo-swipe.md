# photo-swipe

<NpmBadge package="@vuepress/plugin-photo-swipe" />

此插件会使页面正文内的图片在点击时进入浏览模式浏览。

## 使用方法

```bash
npm i -D @vuepress/plugin-photo-swipe@next
```

```ts
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'

export default {
  plugins: [
    photoSwipePlugin({
      // 选项
    }),
  ],
}
```

在图片预览模式中，你可以:

- 左右滑动按顺序浏览页面内其他的图片
- 查看图片的描述
- 对图片进行缩放
- 全屏浏览图片
- 下载图片
- 分享图片

::: tip

- 除了点击右上角的 "×" 退出浏览模式外，在上下滚动超过一定距离后，会自动退出图片浏览模式。
- 在移动端，或使用 PC 触控板，你可以使用平移、缩放手势在浏览模式中平移、缩放图片。

:::

## 选项

### selector

- 类型：`string | string[]`
- 默认值：`".theme-default-content :not(a) > img:not([no-view])"`
- 详情：图片选择器

### download

- 类型：`boolean`
- 默认值：`true`
- 详情：是否显示下载按钮。

### fullscreen

- 类型：`boolean`
- 默认值：`true`
- 详情：是否显示全屏按钮。

### scrollToClose

- 类型：`boolean`
- 默认值：`true`
- 详情：是否在滚动时关闭当前图片。

### delay

- 类型：`number`
- 默认值：`800`
- 详情：

  操作页面 DOM 的延时，单位 ms。

  ::: tip

  如果你使用的主题有切换动画，建议配置此选项为 `切换动画时长 + 200`。

  :::

### locales

- 类型：`PhotoSwipePluginLocaleConfig`

  ```ts
  interface PhotoSwipePluginLocaleData {
    /**
     * 关闭按钮标签文字
     */
    close: string

    /**
     * 全屏按钮标签文字
     */
    fullscreen: string

    /**
     * 分享按钮标签文字
     */
    share: string

    /**
     * 缩放按钮标签文字
     */
    zoom: string

    /**
     * 上一张图片按钮标签文字
     */
    prev: string

    /**
     * 下一张图片按钮标签文字
     */
    next: string

    /**
     * 功能按钮配置
     */
    buttons: PhotoSwipeDefaultUI.ShareButtonData[]
  }

  interface PhotoSwipePluginLocaleConfig {
    [localePath: string]: PhotoSwipePluginLocaleData
  }
  ```

- 详情：Photo Swipe 插件的国际化配置。

- 示例：

  ```ts
  import { defineUserConfig } from 'vuepress'
  import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'

  export default defineUserConfig({
    locales: {
      '/': {
        // 这是一个支持的语言
        lang: 'zh-CN',
      },
      '/xx/': {
        // 这是一个没有收到插件支持的语言
        lang: 'mm-NN',
      },
    },

    plugins: [
      photoSwipePlugin({
        locales: {
          '/': {
            // 覆盖分享标签文字
            share: '分享给伙伴',
          },

          '/xx/': {
            // 在这里完整设置 `mm-NN` 的多语言配置
          },
        },
      }),
    ],
  })
  ```

::: details 内置支持语言

- **简体中文** (zh-CN)
- **繁体中文** (zh-TW)
- **英文(美国)** (en-US)
- **德语** (de-DE)
- **德语(澳大利亚)** (de-AT)
- **俄语** (ru-RU)
- **乌克兰语** (uk-UA)
- **越南语** (vi-VN)
- **葡萄牙语(巴西)** (pt-BR)
- **波兰语** (pl-PL)
- **法语** (fr-FR)
- **西班牙语** (es-ES)
- **斯洛伐克** (sk-SK)
- **日语** (ja-JP)
- **土耳其语** (tr-TR)
- **韩语** (ko-KR)
- **芬兰语** (fi-FI)
- **印尼语** (id-ID)
- **荷兰语** (nl-NL)

:::

## Frontmatter

### photoswipe

- 类型： `string | false`
- 详情：

  当前页面的图片选择器或 `false` 以在当前页面中禁用 photo-swipe。

## 客户端配置

### definePhotoSwipeConfig

传递给 [`photo-swipe`](http://photoswipe.com/) 的额外选项。

```ts title=".vuepress/client.ts"
import { definePhotoSwipeConfig } from '@vuepress/plugin-photo-swipe/client'

definePhotoSwipeConfig({
  // 在此设置 photoswipe 选项
})

export default {}
```

## API

你可以通过 API 来调用 photoswipe。

`createPhotoSwipe` 允许你以编程的方式查看图片链接:

```vue
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { createPhotoSwipe } from "@vuepress/plugin-photo-swipe/client";

let state: PhotoSwipeState | null = null;

const openPhotoSwipe = (index: number) => {
  state?.open(index - 1);
};

onMounted(async () => {
  // 通过图片链接创建一个新的 photoswipe 实例
  state=  await createPhotoSwipe(
    [
      'https://exmaple.com/image1.png'
      'https://exmaple.com/image2.png'
      'https://exmaple.com/image3.png'
    ],
    {
      // photoswipe 选项
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

`registerPhotoSwipe` 允许你为给定的图片元素注册 photoswipe:

```vue
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { registerPhotoSwipe } from '@vuepress/plugin-photo-swipe/client'

let destroy: () => void | null = null

onMounted(async () => {
  await nextTick()

  const images = Array.from(document.querySelectorAll('img'))

  // 通过图片元素创建一个新的 photoswipe 实例
  state = await registerPhotoSwipe(images, {
    // photoswipe 选项
  })
})

onUnmounted(() => {
  destroy?.()
})
</script>
```

## 样式

你可以通过 CSS 变量来自定义部分样式：

@[code css](@vuepress/plugin-photo-swipe/src/client/styles/vars.css)
