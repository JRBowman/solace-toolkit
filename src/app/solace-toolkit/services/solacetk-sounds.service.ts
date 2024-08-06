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

  public IsClient: boolean = false;

  public Initialize() {
    // this.loadAudio("map-click.wav");
    // this.loadAudio("map-unlink.wav");
    // this.loadAudio("map-link.wav");

    // this.loadAudio("view-refresh.wav");

    // this.loadAudio("model-close.wav");
    // this.loadAudio("model-load.wav");
    // this.loadAudio("model-save.wav");
    // this.loadAudio("model-new.wav");
    // this.loadAudio("model-exit.wav");

    // this.loadAudio("panel-close.wav");
    // this.loadAudio("panel-expand.wav");
  }

  playAudio(clipName: string, volume: number = 0.5): HTMLAudioElement | null {

    // if (!this.IsClient) return this.soundSet[0];

    // // First time Load of Audio:
    // if (this.soundIndex.findIndex(s => s == clipName) == -1) {
    //   this.loadAudio(clipName);
    // }

    // const index = this.soundIndex.findIndex(s => s == clipName);

    // if (index == -1) return this.soundSet[0];

    // this.soundSet[index].volume = volume;
    // this.soundSet[index].play();
    // return this.soundSet[index];
    return null;
  }

  stopAudio(clipName: string): void {
    // if (!this.IsClient) return;
    // const index = this.soundIndex.findIndex(s => s == clipName);
    // this.soundSet[index].pause();
  }

  loadAudio(clipName: string): void {
    // // First time Load of Audio:
    //   this.soundIndex.push(clipName);

    //   if (!this.IsClient) return;

    //   let audio = new Audio();
    //   audio.src = "../../../assets/sounds/" + clipName;
    //   audio.load();

    //   this.soundSet.push(audio);
  }

  loadAudioUrl(clipName: string, url: string): HTMLAudioElement | null {
    // // First time Load of Audio:
    //   this.soundIndex.push(clipName);

    //   if (!this.IsClient) return new Audio();

    //   let audio = new Audio();
    //   audio.src = url;
    //   audio.load();

    //   this.soundSet.push(audio);

    //   return audio;
    return null;
  }

  public LoadVideoUrl(videoName: string, url: string): HTMLVideoElement {
    var video = { src: url } as HTMLVideoElement;
    video.src = url;
    video.load();

    return video;
  }

}

declare var Video: {
  new(src?: string): HTMLVideoElement;
};