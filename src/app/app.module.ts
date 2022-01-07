import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { OverviewJsComponent } from './overview-js/overview-js.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialsModule } from './material/material-module';
import { IntroductionComponent } from './introduction/introduction.component';
import { IdentityComponent } from './identity/identity.component';
import { MsoaUserService } from './services/msoa-user-service';

@NgModule({
  declarations: [
    AppComponent,
    OverviewJsComponent,
    IntroductionComponent,
    IdentityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthConfigModule,
    BrowserAnimationsModule,
    AllMaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
