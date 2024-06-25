import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MapTile } from 'src/app/solace-toolkit/models/map-tile';
import { MapTileset } from 'src/app/solace-toolkit/models/map-tileset';

@Component({
  selector: 'app-tile-creation-dialog',
  templateUrl: './tile-creation-dialog.component.html',
  styleUrls: ['./tile-creation-dialog.component.css']
})
export class TileCreationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TileCreationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  public model?: MapTile[];

  public xTiles: number = 1;
  public yTiles: number = 1;
  public width: number = 16;
  public height: number = 16;

  public xLocation: number = 0;
  public yLocation: number = 0;

  public groupColorKey: string = "#ffffff";

  ngOnInit(): void {
    this.model = this.data;
  }

  public applyData(): void
  {
    let tiles: MapTile[] = [];
    console.log(this.xLocation);
    for (let y = 0; y < this.yTiles; y++)
      for (let x = 0; x < this.xTiles; x++)
      {
        let t = new MapTile();
        t.colorKey = this.groupColorKey;
        t.height = this.height;
        t.width = this.width;
        t.lx = (this.xLocation + (x * this.width));
        t.ly = this.yLocation + (y * this.height);
        // t.name = t.lx + "-" + t.ly;
        tiles.push(t);
      }

      console.log(tiles);

      this.dialogRef.close(tiles);
  }
  
}
