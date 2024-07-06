import { createRequire } from 'node:module';
import { path } from 'vuepress/utils';
export const getRealPath = (fileUrl, currentUrl) => {
    const require = createRequire(currentUrl);
    return path.normalize(require.resolve(fileUrl));
};
