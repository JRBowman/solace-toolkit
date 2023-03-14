import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { MarkdownService } from 'ngx-markdown';
import { MsoaUserService } from './services/msoa-user-service';
import { SolacetkService } from './solace-toolkit/services/solacetk-service.service';
import { SolaceTkSoundService } from './solace-toolkit/services/solacetk-sounds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private markdownService: MarkdownService, public oidcSecurityService: OidcSecurityService,
     public msoaUserService: MsoaUserService, 
     public soltkService: SolacetkService,
     public soundService: SolaceTkSoundService) {
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
    this.soltkService.screenWidth = window.innerWidth;
    this.soltkService.screenHeight = window.innerHeight;

    this.soundService.Initialize();

        // Process Authorization checks here:
        this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken}) => {
          this.msoaUserService.SetState(accessToken, isAuthenticated, idToken, userData)
          this.userName = userData.name;
        })
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.soltkService.screenWidth = window.innerWidth;
    this.soltkService.screenHeight = window.innerHeight;

    console.log(this.soltkService.screenWidth);
  }

  servicesConnected = true;
  userName = "Login";
  title = 'Solace Toolkit (TK) for Game Development';
  time = new Date().toLocaleTimeString();

}
