import { getIdPrefix, getPath } from '../utils.js';
export const preparePaletteSass = (app, { id, defaultPalette, generator, userPalette }) => app.writeTemp(`sass-palette/${getIdPrefix(id)}palette.scss`, `\
@import "file:///${getPath(defaultPalette)}";
@import "file:///${getPath(userPalette)}";
@import "file:///${getPath(generator)}";
`);
