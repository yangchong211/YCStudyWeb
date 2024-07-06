import { getIdPrefix, getPath } from '../utils.js';
export const prepareConfigSass = (app, { id, defaultConfig, defaultPalette, generator, userConfig, userPalette, }) => app.writeTemp(`sass-palette/${getIdPrefix(id)}config.scss`, `\
@import "file:///${getPath(defaultPalette)}";
@import "file:///${getPath(defaultConfig)}";
@import "file:///${getPath(userPalette)}";
@import "file:///${getPath(userConfig)}";
@import "file:///${getPath(generator)}";
`);
