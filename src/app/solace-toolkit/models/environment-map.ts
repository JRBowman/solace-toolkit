import { EnvironmentMapLayer } from "./environment-map-layer";
import { MapCell } from "./map-cell";
import { MapChunk } from "./map-chunk";

export class EnvironmentMap {
    public id?: number = 0;
    public name?: string = "Map";
    public description?: string = "";
    public tags?: string = "";

    // Map Data:
    public layers: EnvironmentMapLayer[] = [];
    public chunks: MapChunk[] = [];
    public cells: MapCell[] = [];
}
