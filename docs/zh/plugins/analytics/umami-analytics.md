# umami-analytics

<NpmBadge package="@vuepress/plugin-umami-analytics" />

将 [Umami 统计](https://umami.is/) 集成到 VuePress 中。

## 使用方法

```bash
npm i -D @vuepress/plugin-umami-analytics@next
```

```ts
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics'

export default {
  plugins: [
    umamiAnalyticsPlugin({
      // 配置项
    }),
  ],
}
```

你可以使用 [Umami Cloud](https://cloud.umami.is/login) 或 [自行托管 Umami](https://umami.is/docs/install)。

### 上报事件

插件会在访问和切换页面时自动上报页面浏览事件。

另外，一个全局的 `umami` 对象会被挂载到 `window` 上，你可以使用 `umami.track` 设置 [自定义追踪](https://umami.is/docs/tracker-functions) 。

## 选项

### id

- 类型： `string`
- 详情： Umami 统计中的网站 ID。

### link

- 类型：`string`
- 详情：Umami 统计的脚本链接

### autoTrack

- 类型：`boolean`
- 默认值：`true`
- 详情：

  默认情况下，Umami 会自动跟踪所有页面浏览量和事件。你可以禁用此行为并使用追踪器功能自行追踪事件。

### cache

- 类型：`boolean`
- 详情：

  缓存数据以提高追踪脚本的性能。

  注意：这将使用会话存储，因此您可能需要通知您的用户。

### domains

- 类型：`string[]`
- 详情： 让跟踪器仅在特定的域名上运行。

### hostUrl

- 类型：`string`
- 详情：发送数据的位置
