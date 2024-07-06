import { get } from 'node:https';
import semver from 'semver';
import { getRegistry } from './registry.js';
export const getVersion = async (packageManager, packageName, tag = 'auto', retries = 3) => {
    const registry = getRegistry(packageManager);
    const infoUrl = `${registry}-/package/${packageName}/dist-tags`;
    const getVersionInfo = () => new Promise((resolve, reject) => {
        get(infoUrl, (res) => {
            if (res.statusCode === 200) {
                let body = '';
                res.on('data', (data) => (body += data));
                res.on('end', () => {
                    resolve(JSON.parse(body));
                });
            }
            else {
                reject(new Error('Failed to get version info'));
            }
        }).on('error', reject);
    });
    let times = 1;
    do {
        const versionInfo = await getVersionInfo().catch(() => {
            console.log(`Get ${packageName} version failed, [${times}/${retries}]`);
        });
        if (versionInfo) {
            const { next, latest } = versionInfo;
            return tag === 'latest'
                ? latest
                : tag === 'next'
                    ? next
                    : next && semver.gt(next, latest)
                        ? next
                        : latest;
        }
        times++;
    } while (times <= retries);
    throw new Error(`Failed to get ${packageName} version!\n Can not get version info from ${infoUrl}`);
};
