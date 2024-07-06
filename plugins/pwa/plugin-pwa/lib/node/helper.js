import { isLinkAbsolute } from '@vuepress/helper';
const appendBaseToLink = (base, link) => isLinkAbsolute(link) ? link.replace(/^\//, base) : link;
export const appendBaseToManifest = (base, manifest) => {
    if (manifest.icons)
        manifest.icons = manifest.icons.map((icon) => ({
            ...icon,
            src: appendBaseToLink(base, icon.src),
        }));
    if (manifest.shortcuts)
        manifest.shortcuts = manifest.shortcuts.map((shortcut) => ({
            ...shortcut,
            icons: shortcut.icons?.map((icon) => ({
                ...icon,
                src: appendBaseToLink(base, icon.src),
            })) || [],
            url: appendBaseToLink(base, shortcut.url),
        }));
    if (manifest.screenshots)
        manifest.screenshots = manifest.screenshots.map((screenshot) => ({
            ...screenshot,
            src: appendBaseToLink(base, screenshot.src),
        }));
    return manifest;
};
export const appendBase = (base, options) => {
    if (options.favicon)
        options.favicon = appendBaseToLink(base, options.favicon);
    if (options.apple) {
        if (options.apple.icon)
            options.apple.icon = appendBaseToLink(base, options.apple.icon);
        if (options.apple.maskIcon)
            options.apple.maskIcon = appendBaseToLink(base, options.apple.maskIcon);
    }
    if (options.msTile && options.msTile.image)
        options.msTile.image = appendBaseToLink(base, options.msTile.image);
    if (options.manifest)
        options.manifest = appendBaseToManifest(base, options.manifest);
};
