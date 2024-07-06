import type { Emitter } from 'mitt';
import type { InjectionKey } from 'vue';
export type PwaEvent = Emitter<{
    ready: ServiceWorkerRegistration;
    registered: ServiceWorkerRegistration;
    cached: ServiceWorkerRegistration;
    updatefound: ServiceWorkerRegistration;
    updated: ServiceWorkerRegistration;
    offline: void;
    error: Error;
}>;
export declare const pwaEventSymbol: InjectionKey<PwaEvent>;
export declare const usePwaEvent: () => PwaEvent;
