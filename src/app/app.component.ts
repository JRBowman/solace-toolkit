import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { MarkdownService } from 'ngx-markdown';
import { MsoaUserService } from './services/msoa-user-service';
import { SolacetkService } from './solace-toolkit/services/solacetk-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private markdownService: MarkdownService, public oidcSecurityService: OidcSecurityService, public msoaUserService: MsoaUserService, private soltkService: SolacetkService) {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    }, 1000);

    setInterval(() => {
      this.soltkService.CheckSolTkServices().subscribe(res => {
        this.servicesConnected = res !== undefined;
      });
    }, 15000);
   }


  ngOnInit(): void {
        // Process Authorization checks here:
        this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken}) => {
          this.msoaUserService.SetState(accessToken, isAuthenticated, idToken, userData)
          this.userName = userData.name;
        })
  }

  servicesConnected = true;
  userName = "Login";
  title = 'Solace Toolkit (TK) for Game Development';
  time = new Date().toLocaleTimeString();

}
