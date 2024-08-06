import { Component, EventEmitter, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Artifact } from '../../models/artifact';
import { BehaviorAnimation } from '../../models/behavioranimation';
import { SolacetkService } from '../../services/solacetk-service.service';
import { SolaceTkSoundService } from '../../services/solacetk-sounds.service';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {

  constructor(public service: SolacetkService, public soundService: SolaceTkSoundService) {}

  public model?: Artifact;

  public artifactType: number = 0;
  public audioSource?: HTMLAudioElement | null;
  public artifactImage: string = "";

  public artifactFileUrl: string = ""
  public artifactSource: string = "";

  public refreshList = new EventEmitter();

  ngOnInit(): void {
  }

  public LoadArtifact(): void {
    if (!this.model || this.model.id == 0) return;

    //if (!this.model.tags) this.model.tags = "";
    this.artifactFileUrl = this.artifactFileUrl.replace(".json", "");
    
    // type value or 0:
    this.artifactType = this.ArtifactTypeLookup.find(x => x.extensions.includes(this.model?.artifactExtension ?? ""))?.typeValue ?? 0;
    // if (this.artifactType == 1) this.audioSource = this.soundService.loadAudioUrl(this.model.artifactName, this.model.artifactUrl);
    // if (this.artifactType == 2) this.artifactImage = "<img height='100%' width='100%' src='" + this.soundService.apiHost + this.model.artifactUrl + "'>" 
    //if (this.artifactType == 3) this.videoSource = this.soundService.LoadVideoUrl(this.model.artifactName, this.model.artifactUrl)

    // if (this.artifactType == 4) {
    //   this.service.GetArtifact(this.model.artifactUrl).subscribe((value) => {
    //     this.artifactImage = value;
    //   });
    // }
  }

  public CloseArtifact(): void {
    this.artifactType = 0;
    this.model = undefined;
    if (this.audioSource) {
      this.audioSource.pause();
      this.audioSource = undefined;
    } 

  }

  public hasPlayed: boolean = false;

  public PlaySound(): void {
    if (!this.model) return;
    // if (this.soundService.IsClient) this.audioSource = this.soundService.playAudio(this.model?.artifactName);
    this.hasPlayed = true;
  }

  public StopSound(): void {
    if (!this.model) return;
    // if (this.soundService.IsClient) this.soundService.stopAudio(this.model?.artifactName);
  }

  public GetDate(value: number): string {
    return Math.floor(value / 60.0) + ":" + this.padZero(Math.floor(value % 60.0));
  }

  public padZero(value: any): string {
    return ("00" + value).slice(-2);
  }

  public importArtifacts(event: any): void {
    let files: File[] = []
    files = event.target.files;
    console.log(files);

    var tasks: Observable<any>[] = [];

    var task: Observable<any> = new Observable<any>();

    if (files.length > 0) {
      for (var x = 0; x < files.length; x++) {

        const formData = new FormData();

        //formData.append(tempName + "-act.ase", files[x]);
        formData.append(files[x].name, files[x]);
        tasks.push(this.service.CreateModel("Artifacts/Instances", formData));
      }

      forkJoin(tasks).subscribe((values) => {
        this.refreshList.emit();
      });
      

    }
  }

  public readonly ArtifactTypeLookup: { typeValue: number, extensions: string[]}[] = [
    { typeValue: 1, extensions: ["wav", "mp3", "ogg"] },
    { typeValue: 2, extensions: ["png", "gif", "jpg", "jpeg", "webp"] },
    { typeValue: 3, extensions: ["mp4", "flv", "m4a", "webmd"] },
    { typeValue: 4, extensions: ["yaml", "ts", "cs", "js", "json", "html", "ps", "ps1", "md"] },
  ];

}
