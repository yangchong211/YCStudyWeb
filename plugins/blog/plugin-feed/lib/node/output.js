import { fs, path } from 'vuepress/utils';
export const writeFiles = (app, files) => files.map(async ([filename, content]) => {
    const location = app.dir.dest(filename);
    await fs.ensureDir(path.dirname(location));
    await fs.writeFile(location, content, 'utf-8');
});
