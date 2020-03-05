import { environment } from '../environments/environment';

export const Config = {
    siteUrl: environment.siteUrl,
    apiUrl: environment.apiUrl,
    baseUrl: environment.apiUrl,
    oneSignalId: '',
    appYear: new Date().getFullYear(),
    appVersion: '1.1.1',
};
