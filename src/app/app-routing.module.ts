import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { MusicComponent } from './music/music.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SoftwareComponent } from './software/software.component';
import { VideosComponent } from './videos/videos.component';

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
  },
  {
    path: 'videos',
    component: VideosComponent,
    //canActivate: [AuthorizationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
