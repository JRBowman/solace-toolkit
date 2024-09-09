import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artifact } from '../models/artifact';
import { ServiceHealthReport } from '../models/service-health-report';
import { SolTkOperation } from '../models/soltk-operation';

@Injectable({
  providedIn: 'root'
})
export class SolacetkService {

  constructor(private http: HttpClient) { }

  //public baseUrl: string = "https://solacetk-api-bowman.apps.naps-rosa.l36y.p1.openshiftapps.com/api/v1/";
  public apiVersion: string = "v1/";
  //public apiHost: string = "http://localhost:5010/"
  // public apiHost: string = environment.apiHost;
  public apiHost: string = "/api/"
  public baseUrl: string = this.apiHost + this.apiVersion;

  public deepGetQuery: string = "?includeElements=true";
  public solTkServStatus: boolean = false;
  public solTkAuthStatus: boolean = false;

  public connected: boolean = false;

  public screenWidth: any;
  public screenHeight: any;
  public origin: any;

  public healthStatus: ServiceHealthReport = new ServiceHealthReport();

  public IsClient: boolean = false;

  public Initialize() {

  }

  public GetServiceEnvironmentData(): void {
    this.http.get("/serviceenvironment").subscribe((data) => {

    });
  }

  public CheckSolTkServices(): Observable<ServiceHealthReport> {
    return this.http.get<ServiceHealthReport>(this.baseUrl + "Health");
  }

  public CheckSolTkAuth(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(environment.identityHost);
  }

  public GetModel(route: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + route);
  }

  public GetModelOp<T>(route: string): Observable<SolTkOperation<T>> {
    return this.http.get<SolTkOperation<T>>(this.baseUrl + route);
  }

  public GetData(route: string, headers?: HttpHeaders): Observable<any> {
    return this.http.get<any>(route, { headers: headers});
  }

  public GetArtifact(route: string, headers?: HttpHeaders): Observable<string> {
    return this.http.get<string>(route, { headers: headers});
  }

  public GetDataFromSource(route: string, headers?: HttpHeaders): Observable<any> {
    return this.http.get<any>(route, { headers: headers});
  }

  public GetModels(route: string, queryParameters: string = "", tagFilters: string = "",): Observable<any[]> {
    let buildRoute = this.baseUrl + route;
    if (queryParameters.length > 0) buildRoute += queryParameters;
    if (tagFilters.length > 0) buildRoute += "&tags=" + encodeURIComponent(tagFilters);
    return this.http.get<any[]>(buildRoute);
  }

  public GetModelsOp(route: string, queryParameters: string = "", tagFilters: string = "",): Observable<SolTkOperation<any[]>> {
    let buildRoute = this.baseUrl + route;
    if (queryParameters.length > 0) buildRoute += queryParameters;
    //if (tagFilters.length > 0) buildRoute += "&tags=" + encodeURIComponent(tagFilters);
    return this.http.get<SolTkOperation<any[]>>(buildRoute);
  }

  public CreateModel(route: string, model: any): Observable<any> {
    return this.http.post<any>(this.baseUrl  + route, model);
  }
  
  public CreateModelOp<T>(route: string, model: T): Observable<SolTkOperation<T>> {
    return this.http.post<SolTkOperation<T>>(this.baseUrl  + route, model);
  }

  public UpdateModel(route: string, model: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + route, model);
  }

  public UpdateModelOp<T>(route: string, model: T): Observable<SolTkOperation<T>> {
    return this.http.put<SolTkOperation<T>>(this.baseUrl + route, model);
  }

  public DeleteModel(route: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + route);
  }

  public DeleteModelOp<T>(route: string): Observable<SolTkOperation<T>> {
    return this.http.delete<SolTkOperation<T>>(this.baseUrl + route);
  }

}
