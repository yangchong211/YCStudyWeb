#!/usr/bin/env node
import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { execaCommand, execaCommandSync } from 'execa';
import inquirer from 'inquirer';
import { KNOWN_THEME_COMMANDS } from './config/index.js';
import { createPackageJson, generateTemplate } from './flow/index.js';
import { getLanguage } from './i18n/index.js';
import { ensureDirExistSync, getPackageManager, getRegistry, normalizeThemeName, } from './utils/index.js';
export const mainAction = async (targetDir, { bundler = null, preset = null, theme = '@vuepress/theme-default', }) => {
    // get language
    const { lang, locale } = await getLanguage();
    // get packageManager
    const packageManager = await getPackageManager(locale.question.packageManager);
    // handle theme
    const themePackageName = normalizeThemeName(theme);
    if (KNOWN_THEME_COMMANDS[themePackageName]) {
        await execaCommandSync(`${packageManager} ${KNOWN_THEME_COMMANDS[themePackageName]} ${targetDir}`, { stdio: 'inherit' });
        return;
    }
    if (theme !== '@vuepress/theme-default')
        console.warn(locale.error.theme);
    // check bundler
    if (bundler && !['vite', 'webpack'].includes(bundler))
        return console.log(locale.error.bundler);
    // check presets
    if (preset && !['docs', 'blog'].includes(preset))
        return console.log(locale.error.preset);
    // check if the user is a noob and warn him
    if (!targetDir || (targetDir.startsWith('[') && targetDir.endsWith(']')))
        return console.log(locale.error.dirMissing(packageManager));
    const targetDirPath = resolve(process.cwd(), targetDir);
    // check if the user is trying to cover his files
    if (existsSync(targetDirPath) && readdirSync(targetDirPath).length)
        return console.error(locale.error.dirNotEmpty(targetDir));
    ensureDirExistSync(targetDirPath);
    // complete bundler
    if (!bundler)
        bundler = (await inquirer.prompt([
            {
                name: 'bundler',
                type: 'list',
                message: locale.question.bundler,
                choices: ['vite', 'webpack'],
            },
        ])).bundler;
    // complete preset
    if (!preset)
        preset = (await inquirer.prompt([
            {
                name: 'preset',
                type: 'list',
                message: locale.question.preset,
                choices: ['blog', 'docs'],
            },
        ])).preset;
    /*
     * Generate template
     */
    await createPackageJson({
        targetDir,
        packageManager,
        locale,
        preset,
        bundler,
    });
    await generateTemplate({
        targetDirPath,
        packageManager,
        lang,
        locale,
        preset,
        bundler,
    });
    /*
     * Install deps
     */
    const registry = packageManager === 'pnpm' ? '' : await getRegistry(packageManager, lang);
    console.log(locale.flow.install);
    console.warn(locale.hint.install);
    execaCommandSync(`${packageManager} install ${registry ? `--registry ${registry}` : ''}`, { cwd: targetDirPath, stdout: 'inherit' });
    console.log(locale.hint.finish);
    /*
     * Open dev server
     */
    const { devServer } = await inquirer.prompt([
        {
            name: 'devServer',
            type: 'confirm',
            message: locale.question.devServer,
            default: true,
        },
    ]);
    if (devServer) {
        console.log(locale.flow.devServer);
        await execaCommand(`${packageManager} run docs:dev`, {
            cwd: targetDir,
            stdout: 'inherit',
        });
    }
    else {
        console.log(locale.hint.devServer(packageManager));
    }
};
