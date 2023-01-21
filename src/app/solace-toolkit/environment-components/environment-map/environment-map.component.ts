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
  public layerDataUrl: string = "";
  public gridUrl: string = this.soltkService.apiHost + "Ase/grid-tile/grid-tile.png";

  ngOnInit(): void {

  }

  private layersCount = 0;
  loadEditor()
  {
    this.profileUrl = this.soltkService.apiHost + "Ase/" + this.model.name + "/" + this.model.name;
    this.layerDataUrl = "Ase/" + this.model.name + "/" + this.model.name + ".json";
    this.layersCount = 0;
    this.soltkService.GetData(this.layerDataUrl).subscribe((data) => {
      console.log(data);
      if (!this.model.layers) this.model.layers = [];

      if (!data.meta.layers) return;

      for (let i = 0; i < data.meta.layers.length; i ++) {
        let mLayer = new EnvironmentMapLayer();
        mLayer.layerName = data.meta.layers[i].name;
        mLayer.name = data.meta.layers[i].name;
        mLayer.layerOrder = this.layersCount;
        mLayer.enabled = true;
        this.layersCount++;
        this.model.layers.push(mLayer);
      };
    });
  }

  changeScale(event: any) {
    this.scaleXY = 'scale(' + this.mapscale + ',' + this.mapscale + ')';
    console.log("CHNAGE");
    console.log(this.mapscale);
  }

  public logModel()
  {
    // Setup Layers from model.name + .json:
    this.layerDataUrl = "Ase/" + this.model.name + "-act/" + this.model.name + ".json";
    this.soltkService.GetData(this.layerDataUrl).subscribe((data) => {
      console.log(data);
      if (!this.model.layers) this.model.layers = [];

      if (!data.meta.layers) return;

      for (let i = 0; i < data.meta.layers.length; i ++) {
        let mLayer = new EnvironmentMapLayer();
        mLayer.layerName = data.meta.layers[i].name;
        mLayer.name = data.meta.layers[i].name;
        mLayer.layerOrder = this.layersCount;
        this.layersCount++;
        this.model.layers.push(mLayer);
      };
    });

    console.log(this.model);
  }

public fileName: string = "";
  public onAseSelected(event: any) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;
      const formData = new FormData();
      formData.append(this.model?.name + ".ase", file);
      const upload$ = this.soltkService.CreateModel("Files/ase", formData);

      upload$.subscribe((response) => {
        this.model = new EnvironmentMap();

        //this.modelChange.emit(this.model);
      });
    }
  }

}
