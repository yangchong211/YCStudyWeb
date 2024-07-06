import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import inquirer from 'inquirer';
import { copy, ensureDirExistSync } from '../utils/index.js';
const templateFolder = join(dirname(createRequire(import.meta.url).resolve('create-vuepress/package.json')), './template');
const getWorkflowContent = (packageManager, lang) => `
name: ${lang === '简体中文' ? '部署文档' : 'Deploy Docs'}

on:
  push:
    branches:
      # ${lang === '简体中文'
    ? '确保这是你正在使用的分支名称'
    : 'make sure this is the branch you are using'}
      - main

permissions:
  contents: write

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # ${lang === '简体中文'
    ? '如果你文档需要 Git 子模块，取消注释下一行'
    : 'if your docs needs submodules, uncomment the following line'}
          # submodules: true

${packageManager === 'pnpm'
    ? `\
      - name: ${lang === '简体中文' ? '安装 pnpm' : 'Install pnpm'}
        uses: pnpm/action-setup@v4
        with:
          run_install: true
          version: 8
`
    : ''}

      - name: ${lang === '简体中文' ? '设置 Node.js' : 'Setup Node.js'}
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: ${packageManager}

${packageManager !== 'pnpm'
    ? `\
      - name: ${lang === '简体中文' ? '安装依赖' : 'Install Deps'}
        run: ${packageManager === 'npm'
        ? 'npm ci'
        : `${packageManager} install --frozen-lockfile`}
`
    : ''}
      - name: ${lang === '简体中文' ? '构建文档' : 'Build Docs'}
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          ${packageManager} run docs:build
          > docs/.vuepress/dist/.nojekyll

      - name: ${lang === '简体中文' ? '部署文档' : 'Deploy Docs'}
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # ${lang === '简体中文'
    ? '这是文档部署到的分支名称'
    : 'This is the branch where the docs are deployed to'}
          branch: gh-pages
          folder: docs/.vuepress/dist
`;
export const generateTemplate = async ({ targetDirPath, packageManager, lang, locale, preset, bundler, }) => {
    const { workflow } = await inquirer.prompt([
        {
            name: 'workflow',
            type: 'confirm',
            message: locale.question.workflow,
            default: true,
        },
    ]);
    console.log(locale.flow.generateTemplate);
    // copy template
    copy(join(templateFolder, preset), join(targetDirPath, 'docs'));
    const configFilePath = join(targetDirPath, 'docs/.vuepress/config.js');
    const content = readFileSync(configFilePath, { encoding: 'utf-8' });
    writeFileSync(configFilePath, content
        .replace(/\n\nexport default defineUserConfig\(\{/, `\nimport { ${bundler}Bundler } from '@vuepress/bundler-${bundler}'\n\nexport default defineUserConfig({`)
        .replace(/\}\)\n$/, `\n  bundler: ${bundler}Bundler(),\n})\n`), { encoding: 'utf-8' });
    if (workflow) {
        const workflowDir = join(targetDirPath, '.github/workflows');
        ensureDirExistSync(workflowDir);
        writeFileSync(join(workflowDir, 'deploy-docs.yml'), getWorkflowContent(packageManager, lang), { encoding: 'utf-8' });
    }
};
