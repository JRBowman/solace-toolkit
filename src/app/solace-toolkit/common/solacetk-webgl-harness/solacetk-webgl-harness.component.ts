import { Component, Input, OnInit, ɵɵsanitizeResourceUrl } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'solacetk-webgl-harness',
  templateUrl: './solacetk-webgl-harness.component.html',
  styleUrls: ['./solacetk-webgl-harness.component.css']
})
export class SolacetkWebglHarnessComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}

  @Input() width: string = "24";
  @Input() height: string = "16";
  @Input() harnessName: string = "SolaceTK Harness";
  @Input() panelType: string = "expansionpanel";
  @Input() harnessEnabled: boolean = true;

  @Input() webHarnessUrl: string = "https://solace-game-bowman-dev.apps.bocp.onbowman.com";

  public harnessUrl?: SafeUrl;


  ngOnInit(): void {
    this.harnessUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.webHarnessUrl);
  }
}
