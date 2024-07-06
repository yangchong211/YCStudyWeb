import Artalk from 'artalk';
import { useArtalkOptions } from '../helpers/index.js';
export const isSupported = true;
export const usePageview = () => {
    const options = useArtalkOptions();
    return ({ selector }) => Artalk.loadCountWidget({
        server: options.value.server,
        site: options.value.site,
        ...(selector ? { countEl: selector } : {}),
    });
};
