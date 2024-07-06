export const createMarkdownFilePathGetter = (md) => {
    const store = {};
    const rawRender = md.render;
    // we need to store file path before each render
    md.render = (src, env) => {
        store.path = env.filePathRelative;
        return rawRender(src, env);
    };
    return () => store.path || 'dynamic pages';
};
