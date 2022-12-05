import { Component, OnInit } from '@angular/core';
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


  public profileUrl: string = "";

  ngOnInit(): void {
  }

  loadEditor()
  {
    this.profileUrl = this.soltkService.apiHost + "Ase/" + this.model.name + "-act/" + this.model.name + "-act.png";
  }

  public logModel()
  {
    console.log(this.model);
  }

}
