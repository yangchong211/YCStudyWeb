import { createRequire } from 'node:module';
export const { version } = createRequire(import.meta.url)('vp-update/package.json');
