# umami-analytics

<NpmBadge package="@vuepress/plugin-umami-analytics" />

Integrate [Umami Analytics](https://umami.is/) into VuePress.

## Usage

```bash
npm i -D @vuepress/plugin-umami-analytics@next
```

```ts
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics'

export default {
  plugins: [
    umamiAnalyticsPlugin({
      // options
    }),
  ],
}
```

You can use [Umami Cloud](https://cloud.umami.is/login) or [Self-host Umami](https://umami.is/docs/install).

### Reporting Events

The plugin will automatically report page view events when visiting and switching pages.

Besides, a global `umami` object is available on the `window` object, and you can call `umami.track` for [custom tracker function](https://umami.is/docs/tracker-functions).

## Options

### id

- Type: `string`
- Details: The website ID in Umami Analytics

### link

- Type: `string`
- Details: Link of umami analytics script

### autoTrack

- Type: `boolean`
- Default: `true`
- Details:

  By default, Umami tracks all pageviews and events for you automatically. You can disable this behavior and track events yourself using the tracker functions.

### cache

- Type: `boolean`
- Details:

  Cache data to improve the performance of the tracking script.

  Note: This will use session storage so you may need to inform your users.

### domains

- Type: `string[]`
- Details: Let the tracker only run on specific domains.

### hostUrl

- Type: `string`
- Details: Location to send data
