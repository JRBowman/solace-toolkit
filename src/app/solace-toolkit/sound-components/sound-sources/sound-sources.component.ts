import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Artifact } from '../../models/artifact';
import { SoundSource } from '../../models/soundsource';
import { SolacetkService } from '../../services/solacetk-service.service';
import { SolaceTkSoundService } from '../../services/solacetk-sounds.service';

@Component({
  selector: 'app-sound-sources',
  templateUrl: './sound-sources.component.html',
  styleUrls: ['./sound-sources.component.css']
})
export class SoundSourcesComponent implements OnInit {

  constructor(public service: SolacetkService, public soundService: SolaceTkSoundService) { }

  public model: SoundSource = new SoundSource();

  public artifact?: Artifact;

  public audioSource?: HTMLAudioElement;

  ngOnInit(): void {
  }

  public RefreshArtifact(): void {
    if (this.model.artifactId == 0) return;
    
    this.service.GetModelOp<Artifact>("Artifacts/" + this.model.artifactId).subscribe((next) => {
      this.artifact = next.data;
      this.audioSource = this.soundService.loadAudioUrl(this.artifact?.artifactName ?? "x", this.artifact?.artifactUrl ?? "");
    });
  }


  public hasPlayed: boolean = false;

  public PlaySound(): void {
    if (!this.artifact) return;
    this.audioSource = this.soundService.playAudio(this.artifact?.artifactName);
    this.hasPlayed = true;
  }

  public StopSound(): void {
    if (!this.artifact) return;
    this.soundService.stopAudio(this.artifact?.artifactName);
  }

  public GetDate(value: number): string {
    return Math.round(value / 60.0) + ":" + this.padZero(Math.round(value % 60.0));
  }

  public padZero(value: number){
    return ("00" + value).slice(-2);
  }

}
