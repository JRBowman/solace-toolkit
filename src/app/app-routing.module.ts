import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './auth/auth-guard';
import { IdentityComponent } from './identity/identity.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MusicComponent } from './music/music.component';
import { OverviewJsComponent } from './overview-js/overview-js.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent
  },
  {
    path: 'resume',
    component: ResumeComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'software',
    component: SoftwareComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'music',
    component: MusicComponent,
    //canActivate: [AuthorizationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
