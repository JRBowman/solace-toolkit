import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolacetkService {

  constructor(private http: HttpClient) { }

  //public baseUrl: string = "https://solacetk-api-bowman.apps.naps-rosa.l36y.p1.openshiftapps.com/api/v1/";
  public apiVersion: string = "api/v1/";
  public apiHost: string = "http://localhost:5010/"
  //public apiHost: string = "https://solacetk-service.bowman-dev.svc:8080/";
  //public apiHost: string = "https://soltk-service-bowman-dev.apps.bocp.onbowman.com/";
  public baseUrl: string = this.apiHost + this.apiVersion;

  public deepGetQuery: string = "?includeElements=true";
  public solTkServStatus: boolean = false;
  public solTkAuthStatus: boolean = false;

  public Initialize() {

  }

  public CheckSolTkServices(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(this.baseUrl + "Behaviors/systems");
  }

  public CheckSolTkAuth(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>("https://localhost:5000");
  }

  public GetModel(route: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + route);
  }

  public GetData(route: string): Observable<any> {
    return this.http.get<any>(this.apiHost + route);
  }

  public GetModels(route: string, deepGet: boolean = false, tagFilters: string = ""): Observable<any[]> {
    let buildRoute = this.baseUrl + route;
    if (deepGet) buildRoute += this.deepGetQuery;
    if (tagFilters.length > 0) buildRoute += "&tags=" + encodeURIComponent(tagFilters);
    return this.http.get<any[]>(buildRoute);
  }

  public CreateModel(route: string, model: any): Observable<any> {
    return this.http.post<any>(this.baseUrl  + route, model);
  }

  public UpdateModel(route: string, model: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + route, model);
  }

  public DeleteModel(route: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + route,);
  }
}
