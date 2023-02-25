import { MapTileRule } from "./map-tile-rule";
import { SoltkKeyValue } from "./soltk-key-value";

export class MapTile {
    public id?: string;
    public name?: string = "Map";
    public description?: string = "";
    public tags?: string = "";

    // Tile Data:
    public colorKey: string = "";

    public type: TileType = TileType.Sprite;
    public mode: TileTransformMode = TileTransformMode.None;

    public lx: number = 0;
    public ly: number = 0;
    public width: number = 16;
    public height: number = 16;

    // Spawning Object Reference:
    public objectKey?: string = "";

    public data: SoltkKeyValue[] = [];
    public rules: MapTileRule[] = [];

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
