#!/usr/bin/env node
import { cac } from 'cac';
import { mainAction } from './action.js';
import { version } from './utils/index.js';
const cli = cac('create-vuepress');
cli
    .command('[dir]', 'Generate a new vuepress project in [dir]')
    .option('-t, --theme <theme>', 'Theme to use')
    .option('-p, --preset <preset>', 'Preset to use, can be docs or blog')
    .usage(`\
[dir]

Generate vuepress template in dir.`)
    .example('vuepress-project')
    .action(mainAction);
cli.help();
cli.version(version);
cli.parse();
