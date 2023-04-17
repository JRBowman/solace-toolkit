import { Component, Input, OnInit } from '@angular/core';
import { SolaceTkSoundService } from '../../services/solacetk-sounds.service';

@Component({
  selector: 'solacetk-panel',
  templateUrl: './solacetk-panel.component.html',
  styleUrls: ['./solacetk-panel.component.css']
})
export class SolacetkPanelComponent implements OnInit {

  constructor(public soundService: SolaceTkSoundService) { }

  @Input() panelType: string = "panel";
  @Input() panelIcon: string = "hub";
  @Input() panelName: string = "panel";

  @Input() expanded: boolean = false;

  @Input() unitWidth: any = "auto";
  @Input() unitHeight: any = "auto";

  @Input() fontSize: string = "normal";

  @Input() panelColor: string = "#006064";

  @Input() overflowMethod: string = "hidden";
  @Input() panelElevation: string = "2";

  // ---

  ngOnInit(): void {
  }

  public panelClosed(): void {
    this.soundService.playAudio("panel-close.wav");
  }

  public panelOpened(): void {
    this.soundService.playAudio("panel-expand.wav");
  }

}
