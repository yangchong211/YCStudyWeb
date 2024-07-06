# Bundler Related

Bundler function is for appending or modifying bundler options in theme and plugins.

All functions should be called in `extendsBundlerOptions` lifecycle hook.

::: tip

We are omitting that in examples. The actual code should be like this:

```ts
// import functions you need
import { addCustomElement } from '@vuepress/helper'

export const yourPlugin = {
  // ...
  extendsBundlerOptions: (bundlerOptions, app) => {
    // add them here
    addCustomElement(bundlerOptions, app, 'my-custom-element')
  },
}
```

:::

## Common methods

### getBundlerName

Get current bundler name.

```ts
export const getBundlerName: (app: App) => string
```

::: details Example

```ts
// @vuepress/bundler-vite
getBundleName(app) === 'vite' // true
// @vuepress/bundler-webpack
getBundleName(app) === 'webpack' // true
```

:::

### addCustomElement

Add a custom element declaration to the current bundler.

```ts
/**
 * Add tags as customElement
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 * @param customElements tags recognized as custom element
 */
export const addCustomElement = (
  bundlerOptions: unknown,
  app: App,
  customElement: string[] | string | RegExp
) => void;
```

::: details Example

```ts
import { addCustomElement } from '@vuepress/helper'

addCustomElement(bundlerConfig, app, 'my-custom-element')
addCustomElement(bundlerOptions, app, [
  'custom-element1',
  'custom-element2',
  // all tags start with `math-`
  /^math-/,
])
```

:::

### customizeDevServer

Provides contents for specific path in dev server.

```ts
export interface DevServerOptions {
  /**
   * Path to be responded
   */
  path: string;
  /**
   * Respond function
   */
  response: (request?: IncomingMessage) => Promise<string | Buffer>;

  /**
   * error msg
   */
  errMsg?: string;
}

/**
 * Handle specific path when running VuePress Dev Server
 *
 * @param bundlerOptions VuePress Bundler config
 * @param app VuePress Node App
 * @param path Path to be responded
 * @param response respond function
 * @param errMsg error msg
 */
export const customizeDevServer: (
  bundlerOptions: unknown,
  app: App,
  {
    errMsg:"The server encountered an error",
    response: responseHandler,
    path,
  }: CustomServerOptions
) => void;
```

::: details Example

```ts
import { useCustomDevServer } from '@vuepress/helper'

// handle `/api/` path
useCustomDevServer(bundlerOptions, app, {
  path: '/api/',
  response: async () => getData(),
  errMsg: 'Unexpected api error',
})
```

:::

## Vite Related

- addViteOptimizeDepsInclude

  Add modules to Vite `optimizeDeps.include` list

  ::: tip

  If a package meets one of the following conditions, you should consider adding it here.

  - It's in CJS format
  - It's dependencies include CJS package
  - It's dynamically imported via `import()`

  :::

- addViteOptimizeDepsExclude

  Add modules to Vite `optimizeDeps.exclude` list

  ::: tip If a package and its dependencies are all pure ESM packages, you should consider adding it here.

  :::

- addViteSsrExternal

  Add modules to Vite `ssr.external` list

  ::: tip If a package is a pure ESM package and does not use aliases or define variables, you should consider adding it here.

  :::

- addViteSsrNoExternal

  Add modules to Vite `ssr.noExternal` list

  ::: warning If an alias or define is used within a package, you must add it here.

  :::

  ```ts
  /**
   * Add modules to Vite `optimizeDeps.include` list
   */
  export const addViteOptimizeDepsInclude: (
    bundlerOptions: unknown,
    app: App,
    module: string | string[],
  ) => void

  /**
   * Add modules to Vite `optimizeDeps.exclude` list
   */
  export const addViteOptimizeDepsExclude: (
    bundlerOptions: unknown,
    app: App,
    module: string | string[],
  ) => void

  /**
   * Add modules to Vite `ssr.external` list
   */
  export const addViteSsrExternal: (
    bundlerOptions: unknown,
    app: App,
    module: string | string[],
  ) => void

  /**
   * Add modules to Vite `ssr.noExternal` list
   */
  export const addViteSsrNoExternal: (
    bundlerOptions: unknown,
    app: App,
    module: string | string[],
  ) => void
  ```

  ::: details Examples

  ```ts
  import {
    addViteOptimizeDepsInclude,
    addViteOptimizeDepsExclude,
    addViteSsrExternal,
    addViteSsrNoExternal,
  } from '@vuepress/helper'

  addViteOptimizeDepsInclude(bundlerOptions, app, ['vue', 'vue-router'])
  addViteOptimizeDepsExclude(bundlerOptions, app, 'packageA')
  addViteSsrNoExternal(bundlerOptions, app, ['vue', 'vue-router'])
  addViteSsrExternal(bundlerOptions, app, 'packageA')
  ```

  :::

- addViteConfig

  A function for you to add vite config

  ```ts
  export const addViteConfig: (
    bundlerOptions: unknown,
    app: App,
    config: Record<string, unknown>,
  ) => void
  ```

  ::: details Example

  ```ts
  import { addViteConfig } from '@vuepress/helper'

  addViteConfig(bundlerOptions, app, {
    build: {
      charset: 'utf8',
    },
  })
  ```

  :::

- mergeViteConfig

  A function for you to merge vite config.

  ::: warning

  Your users may choose to use other bundler so it's pretty bad to declare vite as deps!

  :::

  ```ts
  export const mergeViteConfig: (
    defaults: Record<string, any>,
    overrides: Record<string, any>,
  ) => Record<string, any>
  ```

  ::: details Example

  ```ts
  import { mergeViteConfig } from '@vuepress/helper'

  config.viteOptions = mergeViteConfig(config.viteOptions, {
    build: {
      charset: 'utf8',
    },
  })
  ```

  :::

## Webpack Related

- chainWebpack

  Chain webpack config.

  ```ts
  export const chainWebpack: (
    bundlerOptions: unknown,
    app: App,
    chainWebpack: (
      config: WebpackChainConfig,
      isServer: boolean,
      isBuild: boolean,
    ) => void,
  ) => void
  ```

  ::: details Example

  ```ts
  import { chainWebpack } from '@vuepress/helper'

  chainWebpack(bundlerOptions, app, (config, isServer, isBuild) => {
    // do some customize here
  })
  ```

  :::

- configWebpack

  Config Webpack

  ```ts
  export const configWebpack: (
    bundlerOptions: unknown,
    app: App,
    configureWebpack: (
      config: WebpackConfiguration,
      isServer: boolean,
      isBuild: boolean,
    ) => void,
  ) => void
  ```

  ::: details Example

  ```ts
  import { configWebpack } from '@vuepress/helper'

  configWebpack(bundlerOptions, app, (config, isServer, isBuild) => {
    // do some customize here
  })
  ```

  :::
