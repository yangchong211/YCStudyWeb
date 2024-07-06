import { getIdPrefix } from '../utils.js';
export const prepareInjectSass = (app, id) => app.writeTemp(`sass-palette/${getIdPrefix(id)}inject.scss`, `\
@use "sass:meta";

@use "@sass-palette/helper";
@use "@sass-palette/${getIdPrefix(id)}palette";

$palette-variables: meta.module-variables("${getIdPrefix(id)}palette");
${app.env.isDebug
    ? `
@debug "${id} palette variables: #{meta.inspect($palette-variables)}";
@debug "${id} config variables: #{meta.inspect(meta.module-variables("${getIdPrefix(id)}config"))}";
`
    : ''}

@if meta.global-variable-exists("dark-selector", $module: "${getIdPrefix(id)}config") {
  @include helper.inject($palette-variables, ${getIdPrefix(id)}config.$dark-selector);
} @else {
  @include helper.inject($palette-variables);
}
`);
