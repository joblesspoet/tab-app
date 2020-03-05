import {Config} from '../config';

export abstract class BaseService {
    protected makeUrl(...parts: Array<string | number>) {
        let url = Config.apiUrl;

        if (parts && parts.length) {
            url = `${url}/${parts.join('/')}`;
        }

        return url;
    }
}
