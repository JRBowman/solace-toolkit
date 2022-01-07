import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        // config: {
        //     authority: 'https://identity-gateway-dotnet-msoa-dev.apps.cluster-e57a.e57a.sandbox1591.opentlc.com',
        //     redirectUrl: window.location.origin,
        //     postLogoutRedirectUri: window.location.origin,
        //     clientId: 'msoa-js',
        //     scope: 'openid profile account-api',
        //     responseType: 'code',
        //     silentRenew: true,
        //     useRefreshToken: true,
        //     logLevel: LogLevel.Debug
        // }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
