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

  public mapscale: number = 2;
  public mapscaleChange = new EventEmitter<number>();

  public scaleXY = 'scale(' + this.mapscale + ',' + this.mapscale + ')';

  public tiles: any[] = [];

  public tilesX: number = 16;
  public tilesY: number = 16;

  public mapHeight: number = 192;
  public mapWidth: number = 192;

  public mapDragPos = {x: 0, y: 0};

  public selectedMode: string = "view";

  // Cell Mode:
  public selectedCell: any = null;

  // Chunk Mode:
  public chunkColor: string = "#fffff";
  public selectedCells: Array<any> = new Array<any>();


  public profileUrl: string = "";
  public layerDataUrl: string = "";
  public gridUrl: string = this.soltkService.apiHost + "Ase/grid-tile/grid-tile.png";

  ngOnInit(): void {

  }

  CenterMap(): void {
    if (this.mapscale > 1) {
      this.mapDragPos = {x: (window.innerWidth / 2) - this.mapWidth, y: (window.innerHeight / 2)  - this.mapHeight};
    }
    else if (this.mapscale = 1) {
      this.mapDragPos = {x: (window.innerWidth / (2 * this.mapscale) - this.mapWidth), y: (window.innerHeight / (2 * this.mapscale)  - this.mapHeight)};
    }
    else if (this.mapscale < 1) {
      this.mapDragPos = {x: 0, y: 0};
    }
  }

  SelectCell(tile: any): void {
    if (this.selectedMode == 'chunk') {
      if (tile.selected) this.selectedCells.splice(this.selectedCells.indexOf(tile), 1);
      else this.selectedCells.push(tile);
      tile.selected = !tile.selected;
    }
    if (this.selectedMode == 'cell') { 
      if (this.selectedCell && this.selectedCell != tile) this.selectedCell.selected = false;
      this.selectedCell = tile;
      this.selectedCell.selected = true;
      // TODO: Logic for clicking and selecting a Cell (load its Model into the Cell Editor):
    }
  }

  // Chunk Mode:
  public CreateChunk()
  {
    this.selectedCells.forEach(cell => {
      cell.groupColorKey = this.chunkColor;
    });
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

      this.tilesX = (data.meta.size.w / 16) ?? 16;
      this.tilesY = (data.meta.size.h / 16) ?? 16;
      this.mapHeight = data.meta.size.h;
      this.mapWidth = data.meta.size.w

      for (let y = 0; y < this.tilesY; y++) {
        for (let x = 0; x < this.tilesX; x++) {
          this.tiles = [...this.tiles, {id: 0, x: x, y: y, data:[], name: "Cell"}];
        }
      }


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
    this.layerDataUrl = "Ase/" + this.model.name + "/" + this.model.name + ".json";
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
      const upload$ = this.soltkService.CreateModel("Files/ase?splitLayers=true", formData);

      upload$.subscribe((response) => {
        this.model = new EnvironmentMap();

        //this.modelChange.emit(this.model);
      });
    }
  }

}
