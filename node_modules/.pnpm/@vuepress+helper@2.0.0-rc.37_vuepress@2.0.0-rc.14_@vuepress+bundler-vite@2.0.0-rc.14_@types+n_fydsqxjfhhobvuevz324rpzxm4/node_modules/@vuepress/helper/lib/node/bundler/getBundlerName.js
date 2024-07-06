export const getBundlerName = (app) => {
    const { name } = app.options.bundler;
    return name.match(/^@vuepress\/bundler-(.*)$/)?.[1] || name;
};
