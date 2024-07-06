import type { App } from 'vuepress/core'
import type { TypesMap } from '../../shared/index.js'

const HMR_CODE = `
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });
`

export const prepareTypesMap = async (
  app: App,
  typesMapData: TypesMap,
): Promise<void> => {
  await app.writeTemp(
    `blog/type.js`,
    `\
      export const typesMap = ${JSON.stringify(typesMapData)};
      ${app.env.isDev ? HMR_CODE : ''}
      `,
  )
}
