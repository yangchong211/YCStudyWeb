// Prevent mathjax breaking mobile layout
const MATHJAX_STYLE_PATCH = `\
mjx-container {
  overflow-x: auto;
}
`;
export const prepareMathjaxStyle = async (app, mathjaxInstance) => {
    await app.writeTemp('md-enhance/mathjax.css', `${mathjaxInstance.outputStyle()}\n${MATHJAX_STYLE_PATCH}`);
};
