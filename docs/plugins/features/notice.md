# notice

<NpmBadge package="@vuepress/plugin-notice" />

You can add notice popup with this plugin.

## Usage

```bash
npm i -D @vuepress/plugin-notice@next
```

```ts
import { noticePlugin } from '@vuepress/plugin-notice'

default {
  plugins: [
    noticePlugin({
      // options
    }),
  ],
}
```

You can set multiple notices for different paths in the site.

Each notice options needs to contain a `path` or `match` option, which is used to match the path. The `path` option is a string, which matches all paths starting with this, and the `match` option is a regexp to test the page route path against.

A notice configuration item includes:

- `title`: Notice title, support both text and HTMLString
- `content`: Notice content, support both text and HTMLString
- `actions`: Notice actions

  Should be an array of objects containing:

  - `text`: action text
  - `link`: action link (optional).

    Pathname will be treated as internal route link and handled by router, and full URL will be treated as external link and being opened in new window.

  - `type`: `"default"` or `"primary"` (optional)

    Default value is `"default"`.

Here is an example:

```ts
import { noticePlugin } from '@vuepress/plugin-notice'

export default {
  plugins: [
    noticePlugin({
      config: [
        {
          path: '/',
          title: 'Notice Title',
          content: 'Notice Content',
          actions: [
            {
              text: 'Primary Action',
              link: 'https://theme-hope.vuejs.press/',
              type: 'primary',
            },
            { text: 'Default Action' },
          ],
        },
        {
          path: '/zh/',
          title: 'Notice Title',
          content: 'Notice Content',
          actions: [
            {
              text: 'Primary Action',
              link: 'https://theme-hope.vuejs.press/',
              type: 'primary',
            },
            { text: 'Default Action' },
          ],
        },
      ],
    }),
  ],
}
```

Also, we provide some advanced option for you to control notice display.

::: tip Display Control

By default, the notice will be shown whenever users enter the site, and it will remain closed in the session if users close it.

To prevent notice being shown again in next visit after users close it, you can set `showOnce: true` in notice options.

Also, notice remembering is based on notice title and notice content, you can set `noticeKey` option to use a key you want, so that you can edit notice without bothering users who already confirm them.

:::

::: tip Full Screen

If you want to display a fullscreen popup, you can use `fullscreen: true` in notice options. We recommend you to use this together with `confirm: true`.

The notice will display in the center of screen, and the other places will be covered by a blur mask.

:::

::: tip Close button

By default, there will be a close button on the right of notice, and users can close it by clicking it. Users can also close fullscreen notice by clicking the mask.

However, if you want users to confirm the notice, you can set `confirm: true`, so that users can only close the notice by hitting action buttons.

:::

## Options

### config

- Type: `NoticeOptions[]`

  ```ts
  interface NoticeItemOptions {
    /**
     * Notice title
     */
    title: string

    /**
     * Notice content
     */
    content: string

    /**
     * Notice key
     *
     * @description Used to identify and store the notice status
     */
    key?: string

    /**
     * Whether show notice only once or show it in every visit
     *
     * @default false
     */
    showOnce?: boolean

    /**
     * Whether the notice shall be confirmed
     *
     * @default false
     */
    confirm?: boolean

    /**
     * Whether the notice should appear fullscreen
     *
     * @default false
     */
    fullscreen?: boolean

    /**
     * Notice actions
     */
    actions?: NoticeActionOption[]
  }

  interface NoticePathOptions extends NoticeItemOptions {
    /**
     * Path prefix to match
     */
    path: string
  }

  interface NoticeMatchOptions extends NoticeItemOptions {
    /**
     * A regexp matching notice path
     */
    match: RegExp
  }

  type NoticeOptions = NoticeMatchOptions | NoticePathOptions
  ```

- Details:

  Notice configuration.
