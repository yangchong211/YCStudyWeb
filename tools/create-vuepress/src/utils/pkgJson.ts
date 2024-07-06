import { createRequire } from 'node:module'

const { peerDependencies, version } = createRequire(import.meta.url)(
  'create-vuepress/package.json',
) as {
  version: string
  peerDependencies: Record<string, string>
}

export { peerDependencies, version }
