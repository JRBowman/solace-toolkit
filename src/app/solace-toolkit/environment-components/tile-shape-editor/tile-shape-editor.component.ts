import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MapTile } from '../../models/map-tile';
import { Shape, ShapePoint } from '../../models/shape';

@Component({
  selector: 'solacetk-tile-shape-editor',
  templateUrl: './tile-shape-editor.component.html',
  styleUrls: ['./tile-shape-editor.component.css']
})
export class TileShapeEditorComponent implements OnInit {

  @Input() model: MapTile = new MapTile();
  @Output() modelChange = new EventEmitter<MapTile>();

  @Input() tileChange!: EventEmitter<MapTile>;

  // # of Tiles in Dimension:
  @Input() shapeWidth: number = 16;
  @Input() shapeHeight: number = 16;

  @Input() textureUrl: string = "";
  @Input() textureHeight: number = 0;

  public ruleEditorScale: number = 2;
  public ruleEditorTileSize: number = 1;

  public selectedPoint: ShapePoint = new ShapePoint();

  public editorPoints: ShapePoint[] = [];

  ngOnInit(): void {

    //this.loadEditor();
    //if (!this.model.physicsShapeModel) this.model.physicsShapeModel = new Shape();
    this.modelChange.subscribe(value => {  console.log(value); });

    this.tileChange.subscribe((value) => { this.loadShapeEditor(); });
    this.loadShapeEditor();
  }

  public loadShapeEditor(): ShapePoint[]
  {
    console.log("updating shape editor...");
    this.editorPoints = [];
    if (this.model.shape == null) this.model.shape = new Shape();
      
    for (let x = 0; x < this.model.width; x++)
      for (let y = 0; y < this.model.height; y++)
      {
        var sp = this.model.shape?.points.find((point) => { point.x == x && point.y == y}) ?? {x: x, y: y, enabled: false};
        this.editorPoints.push(sp);
      }

    this.editorPoints = [...this.editorPoints];

    return [];
  }

  public ShapePointChange(point: ShapePoint): void
  {
    // point.enabled = !point.enabled;
    if (this.model.shape == null) this.model.shape = new Shape();
    this.model.shape.width = this.model.width;
    this.model.shape.height = this.model.height;

    this.model.shape.points = [...this.editorPoints.filter((p) => { p.enabled })];
    this.modelChange.emit(this.model);
    console.log(this.model.shape);
  }

  
}
