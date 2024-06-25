import { BootstrapOptions, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'solacetk-canvas-grid',
  templateUrl: './solacetk-canvas-grid.component.html',
  styleUrls: ['./solacetk-canvas-grid.component.css']
})
export class SolacetkCanvasGridComponent implements OnInit {

  constructor() {}

  @ViewChild('canvas', { static: true }) 
  canvas!: ElementRef<HTMLCanvasElement>;

  @Input() sheetUrl: string = "https://api-dev.solacetk.onbowman.com/Ase/sector1-ext-0/sector1-ext-0.png";

  public sprites: ImageBitmap[] = [];
  public spriteSheet = new Image();

  private ctx?: CanvasRenderingContext2D;

  private _spriteWork: Promise<ImageBitmap>[] = [];

  // 20x15 tiles: 320px x 240px
  public tiles: any[] = [];
  public showTiles: boolean = false;

  public tilesX: number = 0;
  public tilesY: number = 0;

  @Input() selectedSpriteX: number = 0;
  @Input() selectedSpriteY: number = 0;


  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d') ?? undefined;
    if (!this.ctx) return;

    this.ctx.imageSmoothingEnabled = false;

    this.spriteSheet.onload = () => this.CreateSpritesFromGrid();

    this.spriteSheet.src = this.sheetUrl;

  }

  public applyTile(tile: any): void {
    //this.ctx?.scale(4,4);
    if (!this.ctx) return;
    let spx = this.selectedSpriteX / 16;
    let spy = this.selectedSpriteY / 16;

    this.ctx.imageSmoothingEnabled = false;
    this.ctx?.drawImage(this.sprites[(spy * this.tilesX) + spx], tile.x * 16, tile.y * 16);
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
      this.ctx?.scale(4,4);

      for (let y = 0; y < 15; y++) {
        for (let x = 0; x < 20; x++) {
          this.tiles.push({x: x, y: y});
          this.ctx?.beginPath();
          this.ctx?.strokeRect(x * 16, y * 16, 16, 16);
        }
      }

      this.showTiles = true;
    });
  }

}

