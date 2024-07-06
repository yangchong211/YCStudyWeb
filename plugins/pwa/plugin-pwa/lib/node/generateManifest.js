import { colors, fs, path } from 'vuepress/utils';
import { getManifest } from './getManifest.js';
import { logger } from './logger.js';
export const generateManifest = async (app, options) => {
    const { succeed } = logger.load('Generating manifest.webmanifest');
    const manifest = await getManifest(app, options);
    const manifestPath = app.dir.dest('manifest.webmanifest');
    await fs.writeJSON(manifestPath, manifest, {
        flag: 'w',
    });
    succeed(`Manifest generated and saved to ${colors.cyan(path.relative(process.cwd(), manifestPath))}!`);
};
