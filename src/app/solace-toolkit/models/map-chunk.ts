import { MapCell } from "./map-cell";

export class MapChunk {
    public id?: number = 0;
    public name?: string = "Map";
    public description?: string = "";
    public tags?: string = "";

    // Chunk Data:
    public colorKey: string = "";
    public cells: MapCell[] = [];
}
