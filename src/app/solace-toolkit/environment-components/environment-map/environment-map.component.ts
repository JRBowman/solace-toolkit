import { CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { EnvironmentMap } from '../../models/environment-map';
import { EnvironmentMapLayer } from '../../models/environment-map-layer';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-environment-map',
  templateUrl: './environment-map.component.html',
  styleUrls: ['./environment-map.component.css']
})
export class EnvironmentMapComponent implements OnInit {

  constructor(private soltkService: SolacetkService) { }

  public model: EnvironmentMap = new EnvironmentMap();

  public selectedLayer: EnvironmentMapLayer = new EnvironmentMapLayer();

  public mapscale: any = 2;
  public mapscaleChange = new EventEmitter<number>();

  public scaleXY = 'scale(' + this.mapscale + ',' + this.mapscale + ')';


  public profileUrl: string = "";

  ngOnInit(): void {

  }

  loadEditor()
  {
    this.profileUrl = this.soltkService.apiHost + "Ase/" + this.model.name + "-act/" + this.model.name + "-act.png";
  }

  changeScale(event: any) {
    this.scaleXY = 'scale(' + this.mapscale + ',' + this.mapscale + ')';
    console.log("CHNAGE");
    console.log(this.mapscale);
  }

  public logModel()
  {
    console.log(this.model);
  }

}
