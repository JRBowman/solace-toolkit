import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { MapTile } from '../../models/map-tile';
import { MapTileRule, RuleCheckType } from '../../models/map-tile-rule';
import { MapTileset } from '../../models/map-tileset';

@Component({
  selector: 'solacetk-tileset-canvas',
  templateUrl: './solacetk-tileset-canvas.component.html',
  styleUrls: ['./solacetk-tileset-canvas.component.css']
})
export class SolacetkTilesetCanvasComponent implements OnInit {
  constructor() {}

  @ViewChild('canvas', { static: true }) 
  canvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('minimap', { static: true }) 
  minimap!: ElementRef<HTMLCanvasElement>;

  @Input() model?: MapTileset;

  @Input() sheetUrl: string = "https://api-dev.solacetk.onbowman.com/Ase/sector1-ext-0/sector1-ext-0.png";

  public sprites: ImageBitmap[] = [];
  public spriteSheet = new Image();

  private ctx?: CanvasRenderingContext2D;
  private miniCtx?: CanvasRenderingContext2D;

  private _spriteWork: Promise<ImageBitmap>[] = [];

  // 20x15 tiles: 320px x 240px
  public tiles: MapTile[] = [];
  public showTiles: boolean = false;

  public tilesX: number = 0;
  public tilesY: number = 0;

  @Input() drawTilesX: number = 16;
  @Input() drawTilesY: number = 10;

  @Input() selectedSpriteX: number = 0;
  @Input() selectedSpriteY: number = 0;

  @Input() tileColor: string = "";

  private _currentTiles: MapTile[] = [];


  ngOnInit(): void {

    // Tile Canvas Init:
    this.ctx = this.canvas.nativeElement.getContext('2d') ?? undefined;
    if (!this.ctx) return;
    this.ctx.imageSmoothingEnabled = false;
    this.spriteSheet.onload = () => this.CreateSpritesFromGrid();
    this.spriteSheet.src = this.sheetUrl;

    // Minimap Canvas Init:
    this.miniCtx = this.minimap.nativeElement.getContext('2d') ?? undefined;
    if (!this.miniCtx) return;
    this.miniCtx.imageSmoothingEnabled = false;
  }

  public setMinimapScale: boolean = true;
  public applyTile(tile: MapTile): void {
    //this.ctx?.scale(4,4);
    if (!this.ctx || !this.model) return;

    tile.colorKey = this.tileColor;
    // console.log(tile.colorKey);
    // console.log(this.tileColor);
    var spriteTile = this.checkTileRules(tile);
    let spx = spriteTile.lx / 16;
    let spy = spriteTile.ly / 16;

    // Select the right sprite for the given color:

    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(this.sprites[(spy * this.tilesX) + spx], tile.x * 16, tile.y * 16);
    this.tiles = [...this.tiles];

    if (!this.miniCtx) return;

    // Draw pixel color key minimap:
    this.miniCtx.beginPath();
    if (this.setMinimapScale) { this.miniCtx.scale(4,4); this.setMinimapScale = false;}
    this.miniCtx.imageSmoothingEnabled = false;
    //this.miniCtx.scale(4,4);
    this.miniCtx.fillStyle = tile.colorKey;
    this.miniCtx.fillRect(tile.x, tile.y, 1, 1);
  }

  public checkTileRules(currentTile: MapTile): MapTile {
    if (!this.ctx || !this.model) return new MapTile();

        // Filter to current Tile Color:
        this._currentTiles = this.model.tiles.filter(t => t.colorKey == this.tileColor).sort((a, b) => a.order - b.order);

        for(let tile of this._currentTiles) {

          if (this.checkRules(tile, currentTile.x, currentTile.y)) return tile;

        };

        return this._currentTiles[0];
  }

  public checkRules(tile: MapTile, x: number, y: number): boolean {

    // console.log(tile);
    for (let rule of tile.rules) {
      if (!this.checkRule(tile, rule, x, y)) return false;
    }

    // All Rules pass validation:
    return true;

  }

  public checkRule(maptile: MapTile, rule: MapTileRule, currentX: number, currentY: number): boolean {
    if (rule.checkType == RuleCheckType.Any || rule.checkType == RuleCheckType.Disabled || (rule.vx == 0 && rule.vy == 0)) return true;
    
    let currX = currentX + rule.vx;
    let currY = currentY + rule.vy;

    var tile = this.tiles[(currY * this.drawTilesX) + currX];
    // console.log("checking: " + currX + "," + currY);
    // console.log(rule);
    // console.log(tile);
    if (rule.checkType == RuleCheckType.Empty) return tile.colorKey == "#0000ff";

    if (rule.checkType == RuleCheckType.This) return maptile.colorKey == tile.colorKey;
    if (rule.checkType == RuleCheckType.NotThis) return maptile.colorKey != tile.colorKey;

    if (rule.checkType == RuleCheckType.Key) return tile.colorKey == rule.colorKey;

    return true;
  }

  public redraw(): void {

    this.ctx?.beginPath();
    this.ctx?.clearRect(0, 0, 1280, 720);

    let tileUpdate = false;
    tileUpdate = (this.tiles && this.tiles.length == (this.drawTilesX * this.drawTilesY));

    if (!tileUpdate) this.ctx?.scale(4,4);

    for (let y = 0; y < this.drawTilesY; y++) {
      for (let x = 0; x < this.drawTilesX; x++) {
        let tile: MapTile;
        
        if (tileUpdate) tile = this.tiles[(y * this.drawTilesX) + x]
        else tile = new MapTile();
        tile.x = x;
        tile.y = y;
        tile.colorKey = "#0000ff"
        if (!tileUpdate) this.tiles = [...this.tiles, tile];

        if (!this.ctx) continue;

        this.ctx.beginPath();
        this.ctx.lineDashOffset = 1;
        this.ctx.setLineDash([2]);
        this.ctx.strokeStyle = "dimgrey";
        this.ctx.strokeRect(x * 16, y * 16, 16, 16);
      }
    }

  }



  private CreateSpritesFromGrid(sw: number = 16, sh: number = 16) {
    this.tilesX = this.spriteSheet.width / sw;
    this.tilesY = this.spriteSheet.height / sh;

    for (let y = 0; y < this.tilesY; y++) {
      for (let x = 0; x < this.tilesX; x++) {
        this._spriteWork.push(createImageBitmap(this.spriteSheet, x * sw, y * sh, sw, sh, { resizeQuality: "pixelated" }));
      }
    }
    
    Promise.all(this._spriteWork).then((sprites) => {
      //   this.ctx?.drawImage(sprites[index], value.lx, value.ly);
      this.sprites = sprites;

      this.redraw();

      this.showTiles = true;
    });
  }
}
