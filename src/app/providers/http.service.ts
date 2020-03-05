import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "../config";

export abstract class HttpService {
    protected constructor(protected readonly http: HttpClient) {
    }

    protected buildUrl(...parts: Array<string | number>) {
        return `${Config.baseUrl}/${parts.map(item => `${item}`).join('/')}`;
    }

    protected serialize(params: any, result?: HttpParams, key?: string): HttpParams {
        result = result || new HttpParams();

        if (typeof params === 'undefined' || (!key && params === null)) {
            return result;
        }

        if ((Array.isArray(params) || typeof params !== 'object') && !key) {
            throw new Error('Params must be an object');
        }

        if (params === null) {
            return result.append(key, '');
        }

        if (typeof params === 'boolean') {
            return result.append(key, params ? '1' : '0');
        }

        if (params instanceof Date) {
            return result.append(key, params.toISOString());
        }

        if (Array.isArray(params)) {
            return params.reduce((_result, item) => this.serialize(item, _result, `${key}[]`), result);
        }

        if (typeof params === 'object') {
            return Object.keys(params).reduce((_result, child) => {
                if (key) {
                    return this.serialize(params[child], _result, `${key}[${child}]`);
                }

                return this.serialize(params[child], _result, child);
            }, result);
        }

        return result.append(key, `${params}`);
    }
}
