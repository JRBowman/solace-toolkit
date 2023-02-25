import { Component, OnInit } from '@angular/core';
import { MatChipListboxChange } from '@angular/material/chips';
import { MapTile } from '../../models/map-tile';
import { MapTileset } from '../../models/map-tileset';
import { SolacetkService } from '../../services/solacetk-service.service';

@Component({
  selector: 'app-environment-tilesets',
  templateUrl: './environment-tilesets.component.html',
  styleUrls: ['./environment-tilesets.component.css']
})
export class EnvironmentTilesetsComponent implements OnInit {

  constructor(private soltkService: SolacetkService) { }

  public model: MapTileset = new MapTileset();

  public profileUrl: string = "";
  public tileJsonUrl: string = "";

  public selectedTile: MapTile = new MapTile();

  public textureHeight: number = 192;
  public textureWidth: number = 192;

  // Tile Rule Grid:
  


  ngOnInit(): void {
  }

  loadEditor() {

    // Load Data related to the Model:
    this.profileUrl = this.soltkService.apiHost + "Ase/" + this.model.name + "/" + this.model.name;
    this.tileJsonUrl = "Ase/" + this.model.name + "/" + this.model.name + ".json";

    // Ase JSON Data:
    this.soltkService.GetData(this.tileJsonUrl).subscribe((data) => {

      console.log(data);

      this.textureHeight = data.meta.size.h ?? 384;
      this.textureWidth = data.meta.size.w ?? 384;
      // Layers:
      // To be added later.

      // Slices:
      if ((this.model.tiles.length == 0) && data.meta.slices) {
        
        let slices: any[] = [];
        slices = [...slices, ...data.meta.slices];
        slices.forEach(slice => {
          var tile = new MapTile();
          tile.colorKey = slice.color;
          tile.lx = slice.keys[0].bounds.x;
          tile.ly = slice.keys[0].bounds.y;
          tile.width = slice.keys[0].bounds.w;
          tile.height = slice.keys[0].bounds.h;
          tile.name = slice.name;
          this.model.tiles = [...this.model.tiles, tile];
        });
      }

    });
  }

  public selectTile(tile: MapTile): void {
    this.selectedTile = tile;
    console.log("tile selected!");
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
        this.model = new MapTileset();

        // Response Data:
        console.log(response);
        //this.modelChange.emit(this.model);
      });
    }
  }

}
