import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalRelativeInterceptor } from './solace-toolkit/services/universal-relative.interceptor';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    // HttpClientModule
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: UniversalRelativeInterceptor,
        multi: true
      }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
