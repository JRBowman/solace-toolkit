import { IModelTK } from "./imodel-tk";
import { MapTileRule } from "./map-tile-rule";
import { Shape } from "./shape";
import { SoltkKeyValue } from "./soltk-key-value";

export class MapTile implements IModelTK {
    public id?: number = 0;
    public name?: string = "Map";
    public description?: string = "";
    public tags?: string = "";

    // Tile Data:
    public colorKey: string = "#0000ff";

    public type: TileType = TileType.Sprite;
    public mode: TileTransformMode = TileTransformMode.None;

    public lx: number = 0;
    public ly: number = 0;
    public width: number = 16;
    public height: number = 16;
    public originType: OriginType = OriginType.Center;
    public originX: number = 0;
    public originY: number = 0;

    // Spawning Object Reference:
    public objectKey?: string = "";

    public data: SoltkKeyValue[] = [];
    public rules: MapTileRule[] = [];

    public x: number = 0;
    public y: number = 0;

    public order: number = 0;

    public isCollidable: boolean = false;
    public physicsShape: TilePhysicsShape = TilePhysicsShape.None;
    
    public shape?: Shape;

    // UI Fields:
    public selected: boolean = false;

}

export enum TileType {
    Sprite = 0,
    Object = 1,
    Both = 2
}

export enum TileTransformMode {
    None = 0,
    Rotate = 1,
    MirrorX = 2,
    MirrorY = 3,
    MirrorXY = 4
}

export enum TilePhysicsShape {
    None = 0,
    Rectangle = 1,
    Square = 2,
    Polygon = 3
}

export enum OriginType {
    Center, // x:w/2 y:h/2
    TopLeft, // x:0 y:0
    TopRight, // x:w y:0
    TopCenter, // x:w/2 y:0
    BottomLeft, // x:0 y:h
    BottomRight, // x:w y:h
    BottomCenter, // x:w/2 y:h
    Custom
}
