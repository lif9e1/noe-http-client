import { Headers } from './model/HttpResult';
export declare const agent: {
    get: (url: string, headers?: Headers, json?: boolean) => Promise<{}>;
    post: (url: any, body: any, headers?: Headers, json?: boolean) => Promise<{}>;
    put: (url: string, body: any, headers?: Headers) => Promise<{}>;
    delete: (url: string, headers?: Headers) => Promise<{}>;
};
