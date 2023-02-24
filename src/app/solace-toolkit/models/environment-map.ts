import { EnvironmentMapLayer } from "./environment-map-layer";
import { MapCell } from "./map-cell";

export class EnvironmentMap {
    public id?: number;
    public name?: string = "Map";
    public description?: string = "";
    public tags?: string = "";

    // Map Data:
    public layers: EnvironmentMapLayer[] = [];

    public cells: MapCell[] = [];
}
