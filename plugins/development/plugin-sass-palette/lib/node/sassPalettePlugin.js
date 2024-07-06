import { watch } from 'chokidar';
import { getDirname, path } from 'vuepress/utils';
import { injectScssConfigModule } from './injectScssConfigModule.js';
import { prepareClientConfigFile, prepareConfigSass, prepareInjectSass, preparePaletteSass, prepareStyleSass, } from './prepare/index.js';
import { EMPTY_FILE, getIdPrefix, logger, PLUGIN_NAME } from './utils.js';
const __dirname = getDirname(import.meta.url);
export const sassPalettePlugin = (options) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    const { id = '', config = `.vuepress/styles/${getIdPrefix(id)}config.scss`, defaultConfig = path.resolve(__dirname, '../../styles/default/config.scss'), palette = `.vuepress/styles/${getIdPrefix(id)}palette.scss`, defaultPalette = path.resolve(__dirname, '../../styles/default/palette.scss'), generator = EMPTY_FILE, style = '', } = options;
    const userConfig = app.dir.source(config);
    const userPalette = app.dir.source(palette);
    const userStyle = style ? app.dir.source(style) : null;
    return {
        name: PLUGIN_NAME,
        multiple: true,
        id,
        alias: {
            [`@sass-palette/helper`]: path.resolve(__dirname, '../../styles/helper.scss'),
            [`@sass-palette/${getIdPrefix(id)}config`]: app.dir.temp(`sass-palette/${getIdPrefix(id)}config.scss`),
            [`@sass-palette/${getIdPrefix(id)}inject`]: app.dir.temp(`sass-palette/${getIdPrefix(id)}inject.scss`),
            [`@sass-palette/${getIdPrefix(id)}palette`]: app.dir.temp(`sass-palette/${getIdPrefix(id)}palette.scss`),
            ...(style
                ? {
                    [`@sass-palette/${getIdPrefix(id)}style`]: app.dir.temp(`sass-palette/${getIdPrefix(id)}style.scss`),
                }
                : {}),
        },
        extendsBundlerOptions: (config, app) => {
            injectScssConfigModule(config, app, id);
        },
        onInitialized: () => Promise.all([
            prepareInjectSass(app, id),
            prepareConfigSass(app, {
                id,
                defaultConfig,
                defaultPalette,
                generator,
                userConfig,
                userPalette,
            }),
            preparePaletteSass(app, {
                id,
                defaultPalette,
                generator,
                userPalette,
            }),
            prepareStyleSass(app, { id, userStyle }),
        ]).then(() => {
            if (app.env.isDebug)
                logger.info(`Style file for ${id} generated`);
        }),
        onWatched: (app, watchers) => {
            const configWatcher = watch(userConfig, {
                cwd: app.dir.source(),
                ignoreInitial: true,
            });
            const updateConfig = () => prepareConfigSass(app, {
                id,
                defaultConfig,
                defaultPalette,
                generator,
                userConfig,
                userPalette,
            }).then(() => {
                if (app.env.isDebug)
                    logger.info(`Style file for ${id} updated`);
            });
            configWatcher.on('add', () => {
                updateConfig();
            });
            configWatcher.on('unlink', () => {
                updateConfig();
            });
            watchers.push(configWatcher);
            const paletteWatcher = watch(userPalette, {
                cwd: app.dir.source(),
                ignoreInitial: true,
            });
            const updatePalette = () => Promise.all([
                prepareConfigSass(app, {
                    id,
                    defaultConfig,
                    defaultPalette,
                    generator,
                    userConfig,
                    userPalette,
                }),
                preparePaletteSass(app, {
                    id,
                    defaultPalette,
                    generator,
                    userPalette,
                }),
            ]).then(() => {
                if (app.env.isDebug)
                    logger.info(`Style file for ${id} updated`);
            });
            paletteWatcher.on('add', () => {
                updatePalette();
            });
            paletteWatcher.on('unlink', () => {
                updatePalette();
            });
            watchers.push(paletteWatcher);
            if (userStyle) {
                const styleWatcher = watch(userStyle, {
                    cwd: app.dir.source(),
                    ignoreInitial: true,
                });
                const updateStyle = () => prepareStyleSass(app, { id, userStyle }).then(() => {
                    if (app.env.isDebug)
                        logger.info(`Style file for ${id} updated`);
                });
                styleWatcher.on('add', () => {
                    updateStyle();
                });
                styleWatcher.on('unlink', () => {
                    updateStyle();
                });
                watchers.push(styleWatcher);
            }
        },
        clientConfigFile: (app) => prepareClientConfigFile(app, id),
    };
};
