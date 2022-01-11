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
import { BowSocialsComponent } from './bow-socials/bow-socials.component';
import { ResumeComponent } from './resume/resume.component';
import { MusicComponent } from './music/music.component';
import { ProjectsComponent } from './projects/projects.component';
import { SoftwareComponent } from './software/software.component';
import { GitProjectCardComponent } from './git-project-card/git-project-card.component';
import { IconGithubComponent } from './common/icon-github/icon-github.component';
import { IconLinkedinComponent } from './common/icon-linkedin/icon-linkedin.component';
import { IconAzuredevopsComponent } from './common/icon-azuredevops/icon-azuredevops.component';
import { SafeurlPipe } from './common/safeurl.pipe';
import { IconFacebookComponent } from './common/icon-facebook/icon-facebook.component';
import { IconSoundcloudComponent } from './common/icon-soundcloud/icon-soundcloud.component';
import { ResumeSheetComponent } from './resume/resume-sheet/resume-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewJsComponent,
    IntroductionComponent,
    IdentityComponent,
    BowSocialsComponent,
    ResumeComponent,
    MusicComponent,
    ProjectsComponent,
    SoftwareComponent,
    GitProjectCardComponent,
    IconGithubComponent,
    IconLinkedinComponent,
    IconAzuredevopsComponent,
    SafeurlPipe,
    IconFacebookComponent,
    IconSoundcloudComponent,
    ResumeSheetComponent
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
