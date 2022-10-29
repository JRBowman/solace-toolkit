import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            //authority: 'https://identity-dev.onbowman.com',
            authority: 'https://localhost:5000',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'msoa-js',
            scope: 'openid profile account-api',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            silentRenewUrl: window.location.origin + "/silent-renew.html",
            logLevel: LogLevel.Debug
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
