# Artalk

Artalk 是一款简洁的自托管评论系统，你可以在服务器上轻松部署并置入前端页面中。

来到你的博客，或是任意位置，放置 Artalk 评论框，让页面具备丰富的社会化功能。

<!-- more -->

## 安装

```bash
npm i -D artalk
```

## 部署 Artalk 服务端

请参见 [Artalk 文档](https://artalk.js.org/guide/deploy.html)。

## 配置

请配置 `provider: "Artalk"` 并将你的服务端地址传入插件选项中的 `server`。

其他的配置项详见 [Artalk 配置](config.md)。

::: tip

插件保留 `el` 选项在页面自行插入 Artalk。同时插件会自动根据 VuePress 信息为你自动设置 `pageTitle`, `pageKey` 和 `site` 选项。

:::

## 夜间模式

为了能使 Artalk 应用正确的主题，你需要通过 `darkmode` 属性向 `<CommentService />` 传入一个布尔值，代表当前是否开启夜间模式。
