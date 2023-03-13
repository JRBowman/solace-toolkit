import { CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatSliderChange } from '@angular/material/slider';
import { EnvironmentMap } from '../../models/environment-map';
import { EnvironmentMapLayer } from '../../models/environment-map-layer';
import { MapCell } from '../../models/map-cell';
import { SolacetkService } from '../../services/solacetk-service.service';
import { SolaceTkSoundService } from '../../services/solacetk-sounds.service';

@Component({
  selector: 'app-environment-map',
  templateUrl: './environment-map.component.html',
  styleUrls: ['./environment-map.component.css']
})
export class EnvironmentMapComponent implements OnInit {

  constructor(private soltkService: SolacetkService, public soundService: SolaceTkSoundService) { }

  public model: EnvironmentMap = new EnvironmentMap();

  public selectedLayer: EnvironmentMapLayer = new EnvironmentMapLayer();

  public mapscale: number = 1;
  public mapscaleChange = new EventEmitter<number>();

  public scaleXY = 'scale(' + this.mapscale + ',' + this.mapscale + ')';

  //public tiles: MapCell[] = [];

  public tilesX: number = 16;
  public tilesY: number = 16;

  public mapHeight: number = 192;
  public mapWidth: number = 192;

  public mapDragPos = { x: 0, y: 0 };

  public selectedMode: string = "view";
  public selectedModeChange = new EventEmitter<string>();

  public showCellColors: boolean = true;

  public showGrid: boolean = true;
  public showScale: boolean = true;


  // Cell Mode:
  public selectedCell: any = null;

  // Chunk Mode:
  public chunkColor: string = "#fffff";
  public chunkOpacity: number = 0.667;
  public selectedCells: Array<any> = new Array<any>();


  public profileUrl: string = "";
  public layerDataUrl: string = "";
  public gridUrl: string = this.soltkService.apiHost + "Ase/grid-tile/grid-tile.png";

  ngOnInit(): void {
    //this.selectedModeChange.subscribe(x => this.ModeChange(x));
  }

  CenterMap(): void {
    if (this.mapscale > 1) {
      this.mapDragPos = { x: (window.innerWidth / 2) - this.mapWidth, y: (window.innerHeight / 2) - this.mapHeight };
    }
    else if (this.mapscale = 1) {
      this.mapDragPos = { x: (window.innerWidth / (2 * this.mapscale) - this.mapWidth), y: (window.innerHeight / (2 * this.mapscale) - this.mapHeight) };
    }
    else if (this.mapscale < 1) {
      this.mapDragPos = { x: 0, y: 0 };
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
    this.soundService.playAudio("map-click.wav")
  }

  ModeChange(nextMode: MatButtonToggleChange): void {
    console.log("Mode Change: " + nextMode.value);
    if (this.selectedMode != nextMode.value) {
      this.DeselectCells();
      if (nextMode.value == 'chunk') this.showCellColors = true;
      this.selectedMode = nextMode.value;
    }
  }

  public DeselectCells(): void {

    // Null Selected Cell:
    if (this.selectedCell) {
      this.selectedCell.selected = false;
      this.selectedCell = null;
    }

    // Deselect Groups:
    if (this.selectedCells && this.selectedCells.length > 0) {
      this.selectedCells.forEach(cell => {
        cell.selected = false;
      });
      this.selectedCells = new Array<any>();
    }
  }

  public ClearChunk(): void {
    this.selectedCells.forEach(cell => {
      cell.groupColorKey = "";
    });
  }

  // Chunk Mode:
  public CreateChunk() {
    this.selectedCells.forEach(cell => {
      cell.groupColorKey = this.chunkColor;
    });
  }

  private layersCount = 0;
  loadEditor() {
    this.profileUrl = this.soltkService.apiHost + "Ase/" + this.model.name + "/" + this.model.name;
    this.layerDataUrl = "Ase/" + this.model.name + "/" + this.model.name + ".json";
    this.layersCount = 0;
    this.soltkService.GetData(this.layerDataUrl).subscribe((data) => {
      console.log(data);
      //if (!this.model.layers) this.model.layers = [];

      console.log(this.model);

      this.tilesX = (data.meta.size.w / 16) ?? 16;
      this.tilesY = (data.meta.size.h / 16) ?? 16;
      this.mapHeight = data.meta.size.h ?? 384;
      this.mapWidth = data.meta.size.w ?? 384;

      // Cells
      for (let y = 0; y < this.tilesY; y++) {
        for (let x = 0; x < this.tilesX; x++) {

          // Early exit when model data already exsists for this coordinate:
          if (this.model.cells.findIndex(cell => cell.x == x && cell.y == y) == -1) {
            console.log("Cell Not Found...");
            let tile = new MapCell();
            tile.id = 0;
            tile.x = x;
            tile.y = y;
            tile.name = "Cell";

            // use Slice Data:
            if (data.meta.slices) {
              let slices: any[] = [];
              slices = [...slices, ...data.meta.slices];
              slices.forEach(slice => {
                if (slice.keys[0].bounds.x == (x * 16)
                  && slice.keys[0].bounds.y == (y * 16)) {
                  tile.name = slice.name;
                  tile.colorKey = slice.color;
                  if (tile.colorKey != "") tile.enabled = true;
                }
              });
            }

            //this.tiles = [...this.tiles, tile];
            this.model.cells = [...this.model.cells, tile];
          }
          else {
            console.log("Cell Found...");
          }
        }
      }


      // Layers:
      if (this.model.layers.length > 0 || !data.meta.layers) return;

      for (let i = 0; i < data.meta.layers.length; i++) {
        let mLayer = new EnvironmentMapLayer();
        mLayer.layerName = data.meta.layers[i].name;
        mLayer.name = data.meta.layers[i].name;
        mLayer.layerOrder = this.layersCount;
        mLayer.enabled = true;
        this.layersCount++;
        this.model.layers.push(mLayer);
      };
    });

    //this.CenterMap();
  }

  changeScale(event: any) {
    this.scaleXY = 'scale(' + this.mapscale + ',' + this.mapscale + ')';
    console.log("CHNAGE");
    console.log(this.mapscale);
  }

  public logModel() {
    // Setup Layers from model.name + .json:
    // this.layerDataUrl = "Ase/" + this.model.name + "/" + this.model.name + ".json";
    // this.soltkService.GetData(this.layerDataUrl).subscribe((data) => {
    //   console.log(data);
    //   if (!this.model.layers) this.model.layers = [];

    //   if (!data.meta.layers) return;

    //   for (let i = 0; i < data.meta.layers.length; i++) {
    //     let mLayer = new EnvironmentMapLayer();
    //     mLayer.layerName = data.meta.layers[i].name;
    //     mLayer.name = data.meta.layers[i].name;
    //     mLayer.layerOrder = this.layersCount;
    //     this.layersCount++;
    //     this.model.layers.push(mLayer);
    //   };
    // });

    console.log(this.model);
  }

  public SetLayerState(instance: EnvironmentMapLayer): void {
    instance.enabled = !instance.enabled;
    if (instance.enabled) this.soundService.playAudio("map-link.wav");
    else this.soundService.playAudio("map-unlink.wav");
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
