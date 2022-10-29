import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { MsoaUser } from "../models/msoa-user";
import { SolacetkService } from "../solace-toolkit/services/solacetk-service.service";

@Injectable({
    providedIn: 'root'
})
export class MsoaUserService implements OnInit {
    constructor(private oidcSecurityService: OidcSecurityService,
        private routerService: Router,
        private http: HttpClient) {}

    public User: MsoaUser = new MsoaUser();
    public testUser: any;
    public IsAuthenticated: boolean = false;
    public AccessToken: string = "";
    public IdToken: string = "";

    public Claims: any[] = [];
    public Scopes: string[] = [];

    ngOnInit()
    {
        if (this.oidcSecurityService.isAuthenticated())
        {
            this.testUser = this.oidcSecurityService.getUserData();
            console.log("User: ");
            console.log(this.testUser);
        }
    }

    public SetState(accessToken: string, isAuthenticated: boolean, idToken: string, userData: any) {
        this.testUser = userData;
        this.IsAuthenticated = isAuthenticated;
        this.IdToken = idToken;
        this.AccessToken = accessToken;

        this.oidcSecurityService.getPayloadFromIdToken().subscribe(value => {
            console.log(value);return Object.keys(value).forEach(claim => this.Claims.push({key: claim, value: value[claim]}));
        });

        this.http.get("https://localhost:5000/api/v1/oidc").subscribe(response =>{
            console.log(response);
        });

        
        console.log(this.testUser);
    }

    public Login() {
        this.oidcSecurityService.authorize();
    }

    public Logout() {
        this.oidcSecurityService.logoffLocal();
        this.testUser = {};
        this.IsAuthenticated = false;
        this.AccessToken = '';
        this.IdToken = '';
        this.routerService.navigateByUrl('');
    }
}