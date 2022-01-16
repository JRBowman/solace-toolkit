import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkdownService, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { BowSocialsComponent } from './bow-socials/bow-socials.component';
import { ResumeComponent } from './resume/resume.component';
import { MusicComponent } from './music/music.component';
import { ProjectsComponent } from './projects/projects.component';
import { SoftwareComponent } from './software/software.component';
import { VideosComponent } from './videos/videos.component';
import { ResumeSheetComponent } from './resume/resume-sheet/resume-sheet.component';
import { IconAzuredevopsComponent } from './common/icon-azuredevops/icon-azuredevops.component';
import { IconDynamicsvgComponent } from './common/icon-dynamicsvg/icon-dynamicsvg.component';
import { IconFacebookComponent } from './common/icon-facebook/icon-facebook.component';
import { IconGithubComponent } from './common/icon-github/icon-github.component';
import { IconK8sComponent } from './common/icon-k8s/icon-k8s.component';
import { IconLinkedinComponent } from './common/icon-linkedin/icon-linkedin.component';
import { IconOpenshiftComponent } from './common/icon-openshift/icon-openshift.component';
import { IconSoundcloudComponent } from './common/icon-soundcloud/icon-soundcloud.component';
import { GitProjectCardComponent } from './git-project-card/git-project-card.component';
import { AllMaterialsModule } from './material/material-module';
import { SafeurlPipe } from './common/safeurl.pipe';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { GitArticleComponent } from './git-article/git-article.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    BowSocialsComponent,
    ResumeComponent,
    MusicComponent,
    ProjectsComponent,
    SoftwareComponent,
    VideosComponent,
    ResumeSheetComponent,
    GitProjectCardComponent,
    IconAzuredevopsComponent,
    IconDynamicsvgComponent,
    IconFacebookComponent,
    IconGithubComponent,
    IconK8sComponent,
    IconLinkedinComponent,
    IconOpenshiftComponent,
    IconSoundcloudComponent,
    SafeurlPipe,
    GitArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AllMaterialsModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
  ],
  providers: [MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
