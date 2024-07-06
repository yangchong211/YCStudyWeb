export const prepareMarkStyleFile = async (app, lightmodeSelector, darkmodeSelector) => app.writeTemp('markdown-image/mark.css', `\
${lightmodeSelector} figure:has(img[data-mode="darkmode-only"]),
${lightmodeSelector} img[data-mode="darkmode-only"] {
  display: none !important;
}

${darkmodeSelector} figure:has(img[data-mode="lightmode-only"]),
${darkmodeSelector} img[data-mode="lightmode-only"] {
  display: none !important;
}
`);
