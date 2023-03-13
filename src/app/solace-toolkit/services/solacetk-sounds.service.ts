import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolaceTkSoundService {

  constructor(private http: HttpClient) { }

  //public baseUrl: string = "https://solacetk-api-bowman.apps.naps-rosa.l36y.p1.openshiftapps.com/api/v1/";
  public apiVersion: string = "api/v1/";
  //public apiHost: string = "http://localhost:5010/"
  public apiHost: string = environment.apiHost;
  public baseUrl: string = environment.apiHost + this.apiVersion;

  public solTkServStatus: boolean = false;
  public solTkAuthStatus: boolean = false;

  public soundSet: HTMLAudioElement[] = [];
  public soundIndex: string[] = [];

  public Initialize() {

  }

  playAudio(clipName: string){

    // First time Load of Audio:
    if (this.soundIndex.findIndex(s => s == clipName) == -1) {
        this.soundIndex.push(clipName);

        let audio = new Audio();
        audio.src = "../../../assets/sounds/" + clipName;
        audio.load();

        this.soundSet.push(audio);
    }

    const index = this.soundIndex.findIndex(s => s == clipName);
    this.soundSet[index].play();
  }

}