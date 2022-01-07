import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './auth/auth-guard';
import { IdentityComponent } from './identity/identity.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { OverviewJsComponent } from './overview-js/overview-js.component';

const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent
  },
  {
    path: 'overview',
    component: OverviewJsComponent,
    //canActivate: [AuthorizationGuard]
  },
  {
    path: 'identity',
    component: IdentityComponent,
    //canActivate: [AuthorizationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
