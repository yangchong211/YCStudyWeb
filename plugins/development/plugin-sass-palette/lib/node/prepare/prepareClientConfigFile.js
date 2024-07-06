import { getIdPrefix } from '../utils.js';
export const prepareClientConfigFile = (app, id) => app.writeTemp(`sass-palette/load-${id || 'default'}.js`, `\
import "@sass-palette/${getIdPrefix(id)}inject";
`);
