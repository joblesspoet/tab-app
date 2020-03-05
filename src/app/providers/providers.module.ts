import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { AuthServiceProvider } from './auth-service/auth.service';
// import { ErrorHandlerProvider } from './error-handler/error-handler.service';
// import { PushSubscriptionServiceProvider } from './push-subscription-service/push-subscription.service';
// import { RequestInterceptor } from './request-interceptor/request-interceptor';
// import { TokenStoreProvider } from './token-store/token-store';
// import { UserServiceProvider } from './user-service/user-service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        // AuthServiceProvider,
        // ErrorHandlerProvider,
        // PushSubscriptionServiceProvider,
        // TokenStoreProvider,
        // UserServiceProvider,
        // SOSServiceProvider,
        // { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    ],
    exports: [
        HttpClientModule
    ]
})
export class ProvidersModule {
}
