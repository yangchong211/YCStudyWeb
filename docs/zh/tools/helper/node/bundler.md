# 打包器相关

打包器函数用于在主题和插件中追加或修改打包器选项。

所有函数都应在 `extendsBundlerOptions` 生命周期挂钩中调用。

::: tip

我们在示例中省略了它。 实际代码应该是这样的：

```ts
// 导入你需要的函数
import { addCustomElement } from '@vuepress/helper'

export const yourPlugin = {
  // ...
  extendsBundlerOptions: (bundlerOptions, app) => {
    // 在此添加它们
    addCustomElement(bundlerOptions, app, 'my-custom-element')
  },
}
```

:::

## 通用方法

### getBundlerName

获取当前打包器的名称。

```ts
export const getBundlerName: (app: App) => string
```

::: details 示例

```ts
// @vuepress/bundler-vite
getBundleName(app) === 'vite' // true
// @vuepress/bundler-webpack
getBundleName(app) === 'webpack' // true
```

:::

### addCustomElement

将自定义元素声明添加到当前的打包器。

```ts
interface CustomElementCommonOptions {
  app: App;
  config: unknown;
}
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

::: details 示例

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

为开发服务器中的特定路径提供内容。

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

::: details 示例

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

## Vite 相关

- addViteOptimizeDepsInclude

  向 Vite `optimizeDeps.include` 列表中添加模块

  ::: tip

  如果一个包满足下列条件之一，你应该考虑将它添加至此。

  - 为 CJS 格式
  - 包的依赖包含 CJS 包
  - 包通过 `import()` 动态导入

  :::

- addViteOptimizeDepsExclude

  向 Vite `optimizeDeps.exclude` 列表中添加模块

  ::: tip 如果一个包和它的依赖都是纯 ESM 包，你应该考虑将它添加至此。

  :::

- addViteSsrExternal

  向 Vite `ssr.external` 列表中添加模块

  ::: tip 如果一个包是纯 ESM 包，且未使用别名 (alias) 或定义变量 (define)，你应该考虑将它添加至此。

  :::

- addViteSsrNoExternal

  向 Vite `ssr.noExternal` 列表中添加模块

  ::: warning 如果一个包内使用了别名 (alias) 或定义变量 (define)，你必须将它添加至此。

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

  ::: details 示例

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

  无需导入 vite 即可合并 vite 配置的功能

  ```ts
  export const mergeViteConfig: (
    defaults: Record<string, any>,
    overrides: Record<string, any>,
  ) => Record<string, any>
  ```

  ::: warning

  你不应将 vite 作为依赖，因为你的的用户可能选择其他打包器！

  :::

  ::: details 示例

  ```ts
  import { mergeViteConfig } from "@vuepress/helper";

  config.viteOptions mergeViteConfig(config.viteOptions, {
    build: {
      charset: "utf8",
    },
  });
  ```

  :::

## Webpack 相关

- chainWebpack

  链式修改 webpack 配置.

  ```ts
  export const chainWebpack: (
    { app, config }: WebpackCommonOptions,
    chainWebpack: (
      config: WebpackChainConfig,
      isServer: boolean,
      isBuild: boolean,
    ) => void,
  ) => void
  ```

  ::: details 示例

  ```ts
  import { chainWebpack } from '@vuepress/helper'

  chainWebpack(bundlerOptions, app, (config, isServer, isBuild) => {
    // do some customize here
  })
  ```

  :::

- configWebpack

  配置 Webpack

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

  ::: details 实例

  ```ts
  import { configWebpack } from '@vuepress/helper'

  configWebpack(bundlerOptions, app, (config, isServer, isBuild) => {
    // do some customize here
  })
  ```

  :::
