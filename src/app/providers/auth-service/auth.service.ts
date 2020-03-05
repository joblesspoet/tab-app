import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {AlertController, LoadingController} from '@ionic/angular';
// import {Storage} from '@ionic/storage';
import {Observable, of, throwError} from 'rxjs';
import {catchError, finalize, map, publishReplay, refCount, switchMap, tap} from 'rxjs/operators';
// import {TokenStoreProvider} from '../token-store/token-store';
import {Config} from '../../config';
import {
    ForgotPasswordModel,
    LoginModel,
    RegisterUserModel,
    ResetPasswordModel,
} from '../../models/auth.model';
// import {UserModel} from '../../models/user.model';
import {TranslateService} from '@ngx-translate/core';
// import {ErrorHandlerProvider} from '../error-handler/error-handler.service';
import {HttpService} from '../http.service';

@Injectable()
export class AuthServiceProvider extends HttpService {
    // private refreshing: Observable<TokenResponseModel>;
    private alert;

    constructor(
        http: HttpClient,
        private handler: HttpBackend,
        // private tokenStore: TokenStoreProvider,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private storage: Storage,
        private translate: TranslateService
    ) {
        super(http);
    }

    // get loggedIn() {
    //     return this.tokenStore.loggedIn;
    // }

    // get onLoginChange() {
    //     return this.tokenStore.onLoginChange;
    // }

    // get onTokenChange() {
    //     return this.tokenStore.onTokenChange;
    // }

    // get token() {
    //     return this.tokenStore.token;
    // }

    forgot(request: ForgotPasswordModel) {
        const http = new HttpClient(this.handler);
        return http.post(`${Config.apiUrl}/auth/forgot`, request);
    }

    // forgotPinCode(request: ForgotPinCodeModel) {
    //     const http = new HttpClient(this.handler);
    //     return http.post(`${Config.apiUrl}/auth/forgot/code`, request);
    // }

    // login(credentials: LoginModel) {
    //     const http = new HttpClient(this.handler);
    //     return http.post<TokenResponseModel>(`${Config.apiUrl}/auth/login`, credentials).pipe(
    //         switchMap(token => this.tokenStore.updateToken(token))
    //     );
    // }

    // loginWithAccessCode(credentials: LoginWithAccessCodeModel) {
    //     const http = new HttpClient(this.handler);
    //     return http.post<TokenResponseModel>(`${Config.apiUrl}/auth/login-using-access-code`, credentials);
    // }

    // logout() {
    //     return this.token.pipe(
    //         switchMap((token) => {
    //             if (token) {
    //                 return this.http.post(`${Config.apiUrl}/logout`, null).pipe(
    //                     catchError(() => of()),
    //                     switchMap(() => this.tokenStore.updateToken(null)),
    //                     map(() => true)
    //                 );
    //             }

    //             return of(true);
    //         })
    //     );
    // }

    // register(request: RegisterUserModel) {
    //     return this.http.post(`${Config.apiUrl}/auth/register`, request);
    // }

    // refresh(currentToken: string): Observable<TokenResponseModel> {
    //     if (!currentToken) {
    //         return throwError('unauthorized');
    //     }

    //     if (!this.refreshing) {
    //         this.refreshing = this.http.post<TokenResponseModel>(`${Config.apiUrl}/auth/refresh`, null, {
    //             headers: {
    //                 Authorization: `Bearer ${currentToken}`
    //             }
    //         }).pipe(
    //             switchMap(newToken => this.tokenStore.updateToken(newToken).then(() => newToken)),
    //             tap(() => {
    //                 this.refreshing = null;
    //             }),
    //             publishReplay(1),
    //             refCount()
    //         );
    //     }

    //     return this.refreshing;
    // }

    // reset(request: ResetPasswordModel) {
    //     const http = new HttpClient(this.handler);
    //     return http.post<TokenResponseModel>(`${Config.apiUrl}/auth/forgot/reset`, request).pipe(
    //         switchMap(token => this.tokenStore.updateToken(token))
    //     );
    // }


}
