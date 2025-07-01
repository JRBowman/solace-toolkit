import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import type { Environment } from 'src/environments/environment.model';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
  private serviceEnv?: Environment;

  constructor(private http: HttpClient) {}

  get env(): Environment {
    return this.serviceEnv ?? environment;
  }

  load(): Observable<Environment> {
    return this.http.get<Environment>('/serviceenvironment').pipe(
      tap((env) => (this.serviceEnv = { ...environment, ...env }))
    );
  }
}
