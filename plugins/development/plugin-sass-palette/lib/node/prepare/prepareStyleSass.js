import { getIdPrefix, getPath } from '../utils.js';
export const prepareStyleSass = (app, { id, userStyle }) => userStyle
    ? app.writeTemp(`sass-palette/${getIdPrefix(id)}style.scss`, `\
@forward "file:///${getPath(userStyle)}";
`)
    : Promise.resolve(null);
