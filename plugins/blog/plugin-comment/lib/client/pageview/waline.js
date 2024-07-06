import { pageviewCount } from '@waline/client/pageview';
import { useWalineOptions } from '../helpers/index.js';
export const isSupported = true;
export const usePageview = () => {
    const walineOptions = useWalineOptions();
    return (options) => pageviewCount({ serverURL: walineOptions.value.serverURL, ...options });
};
