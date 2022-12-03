import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'solacetk-panel',
  templateUrl: './solacetk-panel.component.html',
  styleUrls: ['./solacetk-panel.component.css']
})
export class SolacetkPanelComponent implements OnInit {

  constructor() { }

  @Input() panelType: string = "panel";
  @Input() panelIcon: string = "hub";
  @Input() panelName: string = "panel";

  @Input() unitWidth: any = "auto";
  @Input() unitHeight: any = "auto";

  @Input() fontSize: string = "normal";

  @Input() panelColor: string = "darkslategrey";

  // ---

  ngOnInit(): void {
  }

}
