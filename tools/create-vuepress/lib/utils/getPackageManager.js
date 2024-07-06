import { execaCommandSync } from 'execa';
import inquirer from 'inquirer';
const checkPnpmInstalled = () => {
    try {
        return (execaCommandSync('pnpm --version', { stdio: 'ignore' }).exitCode === 0);
    }
    catch (e) {
        return false;
    }
};
const checkYarnInstalled = () => {
    try {
        return (execaCommandSync('yarn --version', { stdio: 'ignore' }).exitCode === 0);
    }
    catch (e) {
        return false;
    }
};
const availablePackageManagers = ['npm'];
if (checkYarnInstalled())
    availablePackageManagers.unshift('yarn');
if (checkPnpmInstalled())
    availablePackageManagers.unshift('pnpm');
export const getPackageManager = async (message) => (await inquirer.prompt([
    {
        name: 'packageManager',
        type: 'list',
        message,
        choices: availablePackageManagers,
    },
])).packageManager;
