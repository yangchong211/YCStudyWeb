import { spawnSync } from 'node:child_process';
const NPM_MIRROR_REGISTRY = 'https://registry.npmmirror.com/';
export const getRegistry = (packageManager) => {
    if (packageManager === 'yarn' &&
        !spawnSync(`${packageManager} --version`, {
            shell: true,
        })
            .stdout.toString()
            .startsWith('1'))
        return spawnSync(`${packageManager} config get npmRegistryServer`, {
            shell: true,
        })
            .stdout.toString()
            .trim()
            .replace(/\/?$/, '/');
    if (packageManager === 'bun' &&
        !spawnSync(`${packageManager} --version`, {
            shell: true,
        }).status) {
        console.warn('bun does not support get registry at the time, using npm global registry instead');
        return spawnSync(
        // TODO: wait for bun to support get registry config
        `npm config get registry`, { shell: true })
            .stdout.toString()
            .trim()
            .replace(/\/?$/, '/');
    }
    return spawnSync(`${packageManager} config get registry`, {
        shell: true,
    })
        .stdout.toString()
        .trim()
        .replace(/\/?$/, '/');
};
export const checkTaobaoRegistry = (packageManager) => {
    const userRegistry = getRegistry(packageManager);
    if (/https:\/\/registry\.npm\.taobao\.org\/?/.test(userRegistry)) {
        console.error('npm.taobao.org is no longer available, resetting it to npmmirror.com');
        if (packageManager === 'yarn') {
            spawnSync(`${packageManager} config set npmRegistryServer  ${NPM_MIRROR_REGISTRY}`, { shell: true });
        }
        else if (packageManager === 'bun') {
            spawnSync(`npm config set registry ${NPM_MIRROR_REGISTRY}`, {
                shell: true,
            });
        }
        else {
            spawnSync(`${packageManager} config set registry ${NPM_MIRROR_REGISTRY}`, { shell: true });
        }
    }
};
