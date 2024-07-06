import { camelize, capitalize, getCurrentInstance } from 'vue';
export const hasGlobalComponent = (name, app) => {
    const globalComponents = (app?._instance || getCurrentInstance())?.appContext
        .components;
    if (!globalComponents)
        return false;
    return (name in globalComponents ||
        camelize(name) in globalComponents ||
        capitalize(camelize(name)) in globalComponents);
};
