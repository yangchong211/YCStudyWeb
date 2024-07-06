import { createRequire } from 'node:module';
const { peerDependencies, version } = createRequire(import.meta.url)('create-vuepress/package.json');
export { peerDependencies, version };
