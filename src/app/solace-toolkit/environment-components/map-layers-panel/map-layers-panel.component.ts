import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnvironmentMapLayer } from '../../models/environment-map-layer';

@Component({
  selector: 'map-layers-panel',
  templateUrl: './map-layers-panel.component.html',
  styleUrls: ['./map-layers-panel.component.css']
})
export class MapLayersPanelComponent implements OnInit {

  constructor() { }

  @Input() panelType: string = "panel";
  @Input() panelIcon: string = "hub";
  @Input() panelName: string = "panel";

  @Input() unitWidth: any = "auto";
  @Input() unitHeight: any = "auto";

  @Input() fontSize: string = "normal";

  @Input() panelColor: string = "#006064";

  @Input() overflowMethod: string = "hidden";

  @Input() model: EnvironmentMapLayer[] = [];
  @Output() modelChange = new EventEmitter<EnvironmentMapLayer[]>();

  @Input() selectedInstance: EnvironmentMapLayer = new EnvironmentMapLayer();
  @Output() selectedInstanceChange = new EventEmitter<EnvironmentMapLayer>();

  ngOnInit(): void {
  }

}
