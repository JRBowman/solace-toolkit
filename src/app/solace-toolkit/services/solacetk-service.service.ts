import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolacetkService {

  constructor(private http: HttpClient) { }

  //public baseUrl: string = "https://solacetk-api-bowman.apps.naps-rosa.l36y.p1.openshiftapps.com/api/v1/";
  public baseUrl: string = "http://localhost:5010/api/v1/";

  public Initialize() {

  }

  public GetModel(route: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + route);
  }

  public GetModels(route: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + route);
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
