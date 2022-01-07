import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { MsoaUser } from "../models/msoa-user";

@Injectable({
    providedIn: 'root'
})
export class MsoaUserService implements OnInit {
    constructor(private oidcSecurityService: OidcSecurityService,
        private routerService: Router) {}

    public User: MsoaUser = new MsoaUser();
    public testUser: any;
    public IsAuthenticated: boolean = false;
    public AccessToken: string = "";
    public IdToken: string = "";

    public Claims: any[] = [];
    public Scopes: string[] = [];

    ngOnInit()
    {
        // if (this.oidcSecurityService.isAuthenticated())
        // {
        //     this.testUser = this.oidcSecurityService.getUserData();
        // }
    }

    public SetState(accessToken: string, isAuthenticated: boolean, idToken: string, userData: any) {
        this.testUser = userData;
        this.IsAuthenticated = isAuthenticated;
        this.IdToken = idToken;
        this.AccessToken = accessToken;

        let tempClaims = this.oidcSecurityService.getPayloadFromIdToken();
        Object.keys(tempClaims).forEach(claim => this.Claims.push({key: claim, value: tempClaims[claim]}));
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