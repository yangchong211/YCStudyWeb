import { createRequire } from 'node:module';
export const getInstalledStatus = (pkg, currentUrl) => {
    try {
        pkg && createRequire(currentUrl).resolve(pkg);
        return true;
    }
    catch (error) {
        return false;
    }
};
