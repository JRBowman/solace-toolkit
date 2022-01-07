import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { MsoaUserService } from './services/msoa-user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public oidcSecurityService: OidcSecurityService, public msoaUserService: MsoaUserService) {}
  title = 'angular-ui';

  ngOnInit(){
    // Process Authorization checks here:
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken}) => {
      this.msoaUserService.SetState(accessToken, isAuthenticated, idToken, userData)
    })
  }

  login(){
    this.msoaUserService.Login();
  }

  logout(){
    this.msoaUserService.Logout();
  }
}
