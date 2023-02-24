import { MapCell } from "./map-cell";

export class MapChunk {
    public id?: string;
    public name?: string = "Map";
    public description?: string = "";
    public tags?: string = "";

    // Chunk Data:
    public colorKey: string = "";
    public cells: MapCell[] = [];
}
