import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatChipListboxChange } from '@angular/material/chips';
import { MatSelectionListChange } from '@angular/material/list';
import { MapTile, OriginType, TileTransformMode } from '../../models/map-tile';
import { MapTileRule } from '../../models/map-tile-rule';
import { MapTileset } from '../../models/map-tileset';
import { Shape, ShapePoint } from '../../models/shape';
import { SolacetkMenuProviderService } from '../../services/solacetk-menu-provider.service';
import { SolacetkService } from '../../services/solacetk-service.service';
import { TileCreationDialogComponent } from './tile-creation-dialog/tile-creation-dialog.component';

@Component({
  selector: 'app-environment-tilesets',
  templateUrl: './environment-tilesets.component.html',
  styleUrls: ['./environment-tilesets.component.css']
})
export class EnvironmentTilesetsComponent implements OnInit {

  constructor(public soltkService: SolacetkService, public menuService: SolacetkMenuProviderService) { }

  // @ViewChild('canvas', { static: true }) 
  // canvas!: ElementRef<HTMLCanvasElement>;

  private ctx?: CanvasRenderingContext2D;

  public model: MapTileset = new MapTileset();

  public profileUrl: string = "";
  public tileJsonUrl: string = "";

  public selectedTile?: MapTile;
  public tilesZoom: number = 2;

  public textureHeight: number = 192;
  public textureWidth: number = 192;

  public midHeight: number = 1;
  public midWidth: number = 1;

  // Tile Rule Grid:
  public ruleEditorTiles: MapTileRule[] = [];

  public tileChange = new EventEmitter<MapTile>();

  public selectedMode: number = 0;

   // Multi-Select Mode:
   public groupColorKey: string = "#fffff";
   public selectedCells: Array<any> = new Array<any>();

  originType = OriginType;
  public originTypes: string[] = [];

  // # of Tiles in Dimension:
  // public ruleEditorWidth: number = 3;
  // public ruleEditorHeight: number = 3;
  // public midHeight: number = 2;
  // public midWidth: number = 2;
  // public ruleEditorScale: number = 2;
  // public ruleEditorTileSize: number = 16;

  ngOnInit(): void {
    this.originTypes = Object.keys(this.originType).filter(f => !isNaN(Number(f)));
    //this.ctx = this.canvas.nativeElement.getContext('2d') ?? undefined;
    //this.ctx?.scale(4, 4);
    //this.imageData = this.ctx?.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }
  
  loadEditor() {

    // Load Data related to the Model:
    this.profileUrl = "/Artifacts/" + this.model.name + "/" + this.model.name;
    this.tileJsonUrl = "/Artifacts/" + this.model.name + "/" + this.model.name + ".json";

    // Ase JSON Data:
    this.soltkService.GetData(this.tileJsonUrl).subscribe((data) => {

      console.log(data);

      this.textureHeight = data.meta.size.h ?? 384;
      this.textureWidth = data.meta.size.w ?? 384;

      //this.tileImage = this.spriteSheet;
      //this.tileImage.onload = () => this.ProcessSprites();

      // Layers:
      // To be added later.
      //this.tileSource = { src: this.profileUrl, crossOrigin: "anonymous" };
      //this.imageData = this.ctx?.createImageData()
      //this.ctx?.drawImage(this.tileImage, 0, 0);
      // this.imageData = this.ctx?.getImageData(0, 0, this.textureWidth, this.textureHeight) ?? new ImageData(384, 384);
      
      // this.ctx?.scale(3, 3);

      // Slices:
      if ((this.model.tiles.length == 0) && data.meta.slices) {

        // let slices: any[] = [];
        // slices = [...slices, ...data.meta.slices];
        // slices.forEach(slice => {
        //   var tile = new MapTile();
        //   tile.colorKey = slice.color;
        //   tile.lx = slice.keys[0].bounds.x;
        //   tile.ly = slice.keys[0].bounds.y;
        //   tile.width = slice.keys[0].bounds.w;
        //   tile.height = slice.keys[0].bounds.h;
        //   tile.name = slice.name;
        //   this.model.tiles = [...this.model.tiles, tile];
          
        // });
      }


      
      //this.spriteSheet.src = this.profileUrl + ".png";
      


    });
  }

  public GetOriginType(val: string): string
  {
    return OriginType[Number.parseInt(val)];
  }

  public selectTile(tile: MapTile): void {
    if (this.selectedMode == 0) {
      if (this.selectedTile) this.selectedTile.selected = false;

      this.selectedTile = tile;
      tile.selected = !tile.selected;
      this.tileChange.emit(this.selectedTile);
    }
    else
    {
      this.multiSelectMode(tile);
    }

    if (tile.rules == null || tile.rules.length == 0) this.loadRules();
    //if (!tile.physicsShapeModel || tile.physicsShapeModel.points?.length == 0) this.loadShapeEditor();
    
    console.log("tile selected!");
  }

  private multiSelectMode(tile: MapTile): void
  {
      if (tile.selected) this.selectedCells.splice(this.selectedCells.indexOf(tile), 1);
      else this.selectedCells.push(tile);
      tile.selected = !tile.selected;
  }

  public setTilesColorKey(): void 
  {
    this.selectedCells.forEach(tile => {
      tile.colorKey = this.groupColorKey;
    });
  }

  ModeChange(nextMode: MatButtonToggleChange): void {
    console.log("Mode Change: " + nextMode.value);
    if (this.selectedMode != nextMode.value) {
      this.DeselectTiles();
      this.selectedMode = nextMode.value;
    }
  }

  public DeselectTiles(): void {

    // Null Selected Cell:
    if (this.selectedTile) {
      this.selectedTile.selected = false;
      //this.selectedTile = null;
    }

    // Deselect Groups:
    if (this.selectedCells && this.selectedCells.length > 0) {
      this.selectedCells.forEach(cell => {
        cell.selected = false;
      });
      this.selectedCells = new Array<any>();
    }
  }
  
  public openTileCreationMenu(): void {
    this.menuService.OpenDialog(TileCreationDialogComponent, { data: this.model.tiles }).afterClosed().subscribe((x) => 
    {
      this.model.tiles = [...this.model.tiles, ...x];
      this.selectTile(x[0]);
    });
  }

  public RemoveTile(tile: MapTile): void {
    this.model.tiles.splice(this.model.tiles.indexOf(tile), 1);
  }

  private loadRules(): MapTileRule[] {
    let exTile = -1;
    for (let y = -(this.midHeight); y < this.midHeight + 1; y++) {
      for (let x = -(this.midWidth); x < this.midWidth + 1; x++) {
        var rule = new MapTileRule();
        rule.vx = x;
        rule.vy = y;

        // Tile Rule Exists - Merge Data:
        if (this.selectedTile && ((exTile = this.selectedTile.rules.findIndex(r => r.vx == x && r.vy == y)) >= 0)) {
          rule = this.selectedTile.rules[exTile];

        }
        // Merge Existing Tiles into Editor:
        if (!this.selectedTile) this.selectedTile = new MapTile();
        this.selectedTile.rules = [...this.selectedTile.rules, rule];
      }
    }
    return [];
  }

  public AddTile(tile: MapTile = new MapTile()): void {
    this.model.tiles = [...this.model.tiles, tile];
    this.selectTile(tile);
  }

  public ImportTileGrid(width: number = 16, height: number = 16): void {
    var tilesWidth = this.textureWidth / width;
    var tilesHeight = this.textureHeight / height;
    this.model.tiles = [];
    for (let y = 0; y < tilesHeight; y++) {
      for (let x = 0; x < tilesWidth; x++) {
        var tile = new MapTile();
        tile.colorKey = "#000000";
        tile.height = height;
        tile.width = width;
        tile.lx = tile.width * x;
        tile.ly = tile.height * y;
        tile.name = this.model.name + "-" + x + ":" + y;
        tile.rules = [];
        this.AddTile(tile);
      }
    }
  }

  public TilesUpdated(changes: MatChipListboxChange): void {
    console.log(changes);
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
