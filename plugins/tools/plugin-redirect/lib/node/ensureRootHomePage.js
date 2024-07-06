import { createPage } from 'vuepress/core';
export const ensureRootHomePage = async (app) => {
    if (
    // root homepage not exists
    app.pages.every(({ path }) => path !== '/')) {
        app.pages.push(await createPage(app, {
            path: '/',
            frontmatter: { title: 'Home' },
            // set markdown content
            content: `\
Redirecting to the correct locale...
`,
        }));
    }
};
