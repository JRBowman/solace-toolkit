import { isPlatformBrowser } from '@angular/common';
import { Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { MarkdownService } from 'ngx-markdown';
import { MsoaUserService } from './services/msoa-user-service';
import { ServiceHealthReport } from './solace-toolkit/models/service-health-report';
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
     public soundService: SolaceTkSoundService,
     @Inject(PLATFORM_ID) private platformId: Object) {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    }, 1000);

    setInterval(() => {
      this.checkServices();
    }, 15000);

   }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.soltkService.IsClient = true;
      // this.soundService.IsClient = true;
      this.soltkService.screenWidth = window.innerWidth;
      this.soltkService.screenHeight = window.innerHeight;
      // this.soltkService.GetServiceEnvironmentData();
      // this.soundService.Initialize();
    }

    

        // Process Authorization checks here:
        // this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken}) => {
        //   this.msoaUserService.SetState(accessToken, isAuthenticated, idToken, userData)
        //   this.userName = userData.name;
        // });

        this.checkServices();
  }

  public footerEnabled: boolean = true;

  public checkServices(): void {
    this.soltkService.CheckSolTkServices().subscribe(res => {
      this.servicesConnected = res !== undefined;
      this.soltkService.connected = this.servicesConnected;
      if (this.soltkService.healthStatus == null) this.soltkService.healthStatus = new ServiceHealthReport();
      if (res != null) this.soltkService.healthStatus = res;
      
      // let value: string | undefined = "";
      //if (this.soltkService.healthStatus.asepriteStatus.length > 0) value = this.soltkService.healthStatus.asepriteStatus.pop()
      //this.soltkService.healthStatus.aseMessage = value ? value : "";
      this.soltkService.healthStatus.aseEnabled = this.soltkService.healthStatus.asepriteStatus.includes('Aseprite is Enabled.');
      this.soltkService.healthStatus.aseMessage = this.soltkService.healthStatus.aseEnabled ? this.soltkService.healthStatus.asepriteStatus[1] : (this.soltkService.healthStatus.asepriteStatus.pop() ?? "Disabled."); // Message is set to 2nd message, Aseprite version:

      if (this.soltkService.healthStatus.dataStatus.length > 0) {
        // Evaluate all for Failed Services.
        let totalServices: number = this.soltkService.healthStatus.dataStatus.length;
        let availServices: number = totalServices;
        this.soltkService.healthStatus.dataStatus.forEach(dataSource => {
          if (dataSource.includes("False")) availServices--;
        });
        this.soltkService.healthStatus.totalServices = totalServices;
        this.soltkService.healthStatus.availableServices = availServices;
        this.soltkService.healthStatus.serviceMessage = availServices + "/" + totalServices + " Available";
        this.soltkService.healthStatus.dataMessage = availServices + "/" + totalServices + " Data Services Connected";
        if (availServices == 0) {
          this.soltkService.healthStatus.dataServiceColor = "#ff0020";
        }
        else if (availServices < totalServices) {
          this.soltkService.healthStatus.dataServiceColor = "#c99327";
        }
        else if (availServices == totalServices) {
          this.soltkService.healthStatus.dataServiceColor = "#60c040";
        }
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
    this.soltkService.screenWidth = window.innerWidth;
    this.soltkService.screenHeight = window.innerHeight;
    this.soltkService.origin = window.origin;
    }
  }

  servicesConnected = true;
  userName = "Login";
  title = 'Solace Toolkit (TK) for Game Development';
  time = new Date().toLocaleTimeString();

}
